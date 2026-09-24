// Scroll behaviour for the recruiter view. Everything is laid out in its
// settled position by CSS; this feeds scroll progress in as custom
// properties (--sy, --p, --q), marks each lane as it touches the wall,
// and shows the phone dock once the hero's actions scroll away. Under
// reduced motion the CSS drops every translation, so the same values
// only drive changes of state (the lane line, the number, the pad).
(() => {
  const root = document.documentElement
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) root.classList.add('motion')

  const clamp = v => (v < 0 ? 0 : v > 1 ? 1 : v)
  const near = new Set()
  let queued = false

  function frame() {
    queued = false
    const vh = innerHeight
    root.style.setProperty('--sy', scrollY.toFixed(1))
    for (const el of near) {
      const r = el.getBoundingClientRect()
      // --p: arrival, 0 as the top edge enters, 1 by 40% up the screen
      const p = clamp((vh - r.top) / (vh * 0.4))
      el.style.setProperty('--p', p.toFixed(3))
      // a lane touches the wall the moment its screenshot arrives there
      if (p > 0.97 && el.classList.contains('lane')) el.classList.add('touched')
      // --q: passage, 0 entering at the bottom, 1 leaving at the top
      el.style.setProperty('--q', clamp((vh - r.top) / (vh + r.height)).toFixed(3))
    }
  }
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(frame) } }

  const watch = new IntersectionObserver(entries => {
    for (const e of entries) e.isIntersecting ? near.add(e.target) : near.delete(e.target)
    queue()
  }, { rootMargin: '25% 0px' })
  document.querySelectorAll('[data-scroll]').forEach(el => watch.observe(el))

  addEventListener('scroll', queue, { passive: true })
  addEventListener('resize', queue)
  queue()

  // Dock: on once the hero's buttons are gone, off again at the contact
  // wall, which carries the same two actions.
  const dock = document.querySelector('.dock')
  const heroActions = document.querySelector('.entry .actions')
  const wall = document.querySelector('.wall')
  if (dock && heroActions && wall) {
    const seen = new Map()
    const sync = () => dock.classList.toggle('on', seen.get(heroActions) === false && seen.get(wall) === false)
    const dockWatch = new IntersectionObserver(entries => {
      for (const e of entries) seen.set(e.target, e.isIntersecting)
      sync()
    })
    dockWatch.observe(heroActions)
    dockWatch.observe(wall)
  }
})()
