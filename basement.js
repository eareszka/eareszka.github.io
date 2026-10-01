// The Basement: boot sequence, window manager, the in-page browser, dialogs.
// Everything is laid out by CSS; this only opens, moves and routes things.
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const phone = () => innerWidth <= 700;
  const TASKBAR = 28;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
  };
  const sess = {
    get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch { /* private mode */ } },
    del(k) { try { sessionStorage.removeItem(k); } catch { /* private mode */ } },
  };
  const svg = id => `<svg class="ico16" aria-hidden="true"><use href="#${id}"/></svg>`;

  /* ── Clock ─────────────────────────────────────────────────── */
  const clock = $('#clock');
  function tick() {
    const d = new Date();
    let h = d.getHours(); const m = String(d.getMinutes()).padStart(2, '0');
    const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
    clock.textContent = `${h}:${m} ${ap}`;
    clock.dateTime = d.toISOString();
  }
  tick(); setInterval(tick, 10000);

  /* ── Window manager ────────────────────────────────────────── */
  const wins = $$('.win');
  const tasks = $('#tasks');
  let zTop = 20;
  let lastOpener = null;

  function titleOf(w) { return $('.ttl', w).textContent; }
  function isDialog(w) { return w.classList.contains('dialog'); }

  // Title-bar controls are the same on every window, so they are built here.
  wins.forEach(w => {
    const ctl = document.createElement('div');
    ctl.className = 'ctl';
    const want = (w.dataset.controls || 'min max close').split(' ');
    const mk = (cls, icon, label) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = `b b--icon ${cls}`; b.setAttribute('aria-label', label);
      b.innerHTML = `<svg aria-hidden="true"><use href="#${icon}"/></svg>`;
      return b;
    };
    if (want.includes('min')) ctl.append(mk('min', 'i-min', 'Minimize'));
    if (want.includes('max')) ctl.append(mk('max', 'i-max', 'Maximize'));
    if (want.includes('close')) ctl.append(mk('close', 'i-close', 'Close'));
    $('.tbar', w).append(ctl);
    ctl.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.classList.contains('min')) minimize(w);
      else if (b.classList.contains('max')) toggleMax(w);
      else close(w);
    });
    $('.tbar', w).addEventListener('dblclick', e => {
      if (e.target.closest('button') || phone() || !want.includes('max')) return;
      toggleMax(w);
    });
    w.addEventListener('pointerdown', () => focus(w), true);
  });

  function rectOf(el) {
    if (!el || !el.getBoundingClientRect) return { left: innerWidth / 2 - 20, top: innerHeight / 2 - 20, width: 40, height: 40 };
    const r = el.getBoundingClientRect();
    if (!r.width && !r.height) return { left: innerWidth / 2 - 20, top: innerHeight / 2 - 20, width: 40, height: 40 };
    return r;
  }
  // Windows 98 drew a dotted rectangle zooming between the icon and the window.
  function zoom(from, to, done) {
    if (reduce) { done && done(); return; }
    const el = document.createElement('div');
    el.className = 'zoom';
    document.body.append(el);
    const f = rectOf(from), t = rectOf(to);
    const key = r => ({ left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
    const anim = el.animate([key(f), key(t)], { duration: 170, easing: 'steps(5, end)', fill: 'forwards' });
    anim.onfinish = () => { el.remove(); done && done(); };
  }

  function clampIntoView(w) {
    if (phone() || w.classList.contains('maximized') || isDialog(w)) return;
    const r = w.getBoundingClientRect();
    let left = w.offsetLeft, top = w.offsetTop;
    if (r.right > innerWidth) left = Math.max(0, innerWidth - r.width);
    if (r.bottom > innerHeight - TASKBAR) top = Math.max(0, innerHeight - TASKBAR - r.height);
    w.style.left = left + 'px'; w.style.top = top + 'px';
  }

  function open(id, from) {
    const w = typeof id === 'string' ? $('#' + id) : id;
    if (!w) return;
    const wasHidden = w.hidden;
    if (!isDialog(w) && wasHidden && !w.dataset.min) lastOpener = from || null;
    const reveal = () => {
      w.hidden = false;
      delete w.dataset.min;
      clampIntoView(w);
      focus(w);
      taskAdd(w);
      const first = $('.default, [autofocus]', w) || $('.pane, input, button', w);
      if (isDialog(w) && first) first.focus({ preventScroll: true });
      w.dispatchEvent(new CustomEvent('win:open'));
    };
    if (wasHidden && from && !isDialog(w)) {
      // Measure the window where it will land, then zoom to it.
      w.hidden = false; w.style.visibility = 'hidden';
      clampIntoView(w);
      const target = w.getBoundingClientRect();
      w.hidden = true; w.style.visibility = '';
      zoom(from, { getBoundingClientRect: () => target }, reveal);
    } else reveal();
  }

  function close(w) {
    if (w.hidden) return;
    const from = w.getBoundingClientRect();
    w.hidden = true;
    delete w.dataset.min;
    taskRemove(w);
    w.dispatchEvent(new CustomEvent('win:close'));
    if (!isDialog(w)) zoom({ getBoundingClientRect: () => from }, lastOpener || $('#start'));
    focusTopmost();
  }

  function minimize(w) {
    const from = w.getBoundingClientRect();
    w.hidden = true;
    w.dataset.min = '1';
    w.classList.remove('active');
    const t = taskButton(w);
    if (t) t.setAttribute('aria-pressed', 'false');
    zoom({ getBoundingClientRect: () => from }, t || $('#start'));
    focusTopmost();
  }

  function toggleMax(w) {
    const b = $('.ctl .max', w);
    w.classList.toggle('maximized');
    if (b) b.setAttribute('aria-label', w.classList.contains('maximized') ? 'Restore' : 'Maximize');
    focus(w);
  }

  function focus(w) {
    wins.forEach(x => { x.classList.remove('active'); const t = taskButton(x); if (t) t.setAttribute('aria-pressed', 'false'); });
    w.classList.add('active');
    w.style.zIndex = (isDialog(w) ? 1000 : 0) + (++zTop);
    const t = taskButton(w); if (t) t.setAttribute('aria-pressed', 'true');
  }

  function focusTopmost() {
    const visible = wins.filter(x => !x.hidden).sort((a, b) => (+b.style.zIndex || 0) - (+a.style.zIndex || 0));
    if (visible[0]) focus(visible[0]);
  }

  function taskButton(w) { return $(`#tasks [data-for="${w.id}"]`); }
  function taskAdd(w) {
    if (isDialog(w)) return;
    let t = taskButton(w);
    if (!t) {
      t = document.createElement('button');
      t.type = 'button'; t.className = 'task'; t.dataset.for = w.id;
      t.addEventListener('click', () => {
        if (w.hidden) open(w, t);
        else if (w.classList.contains('active')) minimize(w);
        else focus(w);
      });
      tasks.append(t);
    }
    t.innerHTML = `${svg(w.dataset.icon || 'i-txt')}<span>${titleOf(w)}</span>`;
    t.setAttribute('aria-pressed', w.classList.contains('active') ? 'true' : 'false');
  }
  function taskRemove(w) { const t = taskButton(w); if (t) t.remove(); }
  function retitle(w, text) { $('.ttl', w).textContent = text; const t = taskButton(w); if (t) $('span', t).textContent = text; }

  /* ── Drag and resize ───────────────────────────────────────── */
  $$('.win .tbar').forEach(bar => {
    const w = bar.closest('.win');
    let sx, sy, ox, oy, dragging = false;
    bar.addEventListener('pointerdown', e => {
      if (e.button !== 0 || e.target.closest('button') || phone() || w.classList.contains('maximized')) return;
      dragging = true; sx = e.clientX; sy = e.clientY;
      const r = w.getBoundingClientRect(); ox = r.left; oy = r.top;
      bar.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    bar.addEventListener('pointermove', e => {
      if (!dragging) return;
      const r = w.getBoundingClientRect();
      let x = ox + e.clientX - sx, y = oy + e.clientY - sy;
      x = Math.max(-r.width + 80, Math.min(x, innerWidth - 80));
      y = Math.max(0, Math.min(y, innerHeight - TASKBAR - 20));
      w.style.left = x + 'px'; w.style.top = y + 'px';
      if (isDialog(w)) w.style.transform = 'none';
    });
    const stop = () => { dragging = false; };
    bar.addEventListener('pointerup', stop); bar.addEventListener('pointercancel', stop);
  });
  $$('.win .resize').forEach(h => {
    const w = h.closest('.win');
    let sx, sy, sw, sh, on = false;
    h.addEventListener('pointerdown', e => {
      if (phone() || w.classList.contains('maximized')) return;
      on = true; sx = e.clientX; sy = e.clientY; sw = w.offsetWidth; sh = w.offsetHeight;
      h.setPointerCapture(e.pointerId); focus(w); e.preventDefault();
    });
    h.addEventListener('pointermove', e => {
      if (!on) return;
      w.style.width = Math.max(260, sw + e.clientX - sx) + 'px';
      w.style.height = Math.max(140, sh + e.clientY - sy) + 'px';
    });
    const stop = () => { on = false; };
    h.addEventListener('pointerup', stop); h.addEventListener('pointercancel', stop);
  });

  /* ── Menu bars ─────────────────────────────────────────────── */
  const MENUS = {
    ie: [
      ['File', [['Close', w => close(w)]]],
      ['Edit', [['Select All', w => { const s = getSelection(); s.removeAllRanges(); const r = document.createRange(); r.selectNodeContents($('.site.on', w) || $('.pane', w)); s.addRange(r); }]]],
      ['View', [['Refresh', () => ie.refresh()], ['Full Screen', w => toggleMax(w)]]],
      ['Favorites', () => SITES.filter(s => s.id !== '404').map(s => [s.title.replace(/&amp;/g, '&'), () => ie.go(s.id)])],
      ['Tools', [['Mail and News', (w, b) => open('w-mail', b)], ['Internet Options...', () => msg('Internet Options', 'There are no options. The only setting is the year, and it is 2000.', 'i-info')]]],
      ['Help', [['Welcome to The Basement', (w, b) => open('w-welcome', b)], ['Recruiter view', () => { location.href = 'index.html'; }]]],
    ],
    notepad: [
      ['File', [['Save As...', () => msg('Notepad', 'The formatted version of this file is the résumé on the desktop.', 'i-info')], ['Close', w => close(w)]]],
      ['Edit', [['Select All', w => { const s = getSelection(); s.removeAllRanges(); const r = document.createRange(); r.selectNodeContents($('pre', w)); s.addRange(r); }]]],
      ['Help', [['About Notepad', () => msg('Notepad', 'skills.txt is read-only. It lists what I use and where I have worked.', 'i-info')]]],
    ],
    mail: [
      ['File', [['Send', () => $('[data-mail]').requestSubmit()], ['Close', w => close(w)]]],
      ['Help', [['About', () => msg('Outlook Express', 'Send opens your own mail program with the To, Subject and message filled in. Nothing is sent from this page.', 'i-info')]]],
    ],
    media: [
      ['File', [['Open channel', () => window.open('https://www.youtube.com/@EmeryReszka', '_blank', 'noopener')], ['Close', w => close(w)]]],
      ['Help', [['About', () => msg('Media Player', 'The playlist is the three latest uploads on my YouTube channel, read from its public feed.', 'i-info')]]],
    ],
    bin: [
      ['File', [['Empty Recycle Bin', () => msg('Recycle Bin', 'The Recycle Bin is already as empty as it is going to get.', 'i-info')], ['Close', w => close(w)]]],
      ['Help', [['About', () => msg('Recycle Bin', 'These are the parts of the old version of this page. They were deleted on 9/27/2026.', 'i-info')]]],
    ],
  };
  let openMenu = null;
  function closeMenu() { if (openMenu) { openMenu.el.remove(); openMenu.btn.setAttribute('aria-expanded', 'false'); openMenu = null; } }
  $$('[data-mbar]').forEach(bar => {
    const w = bar.closest('.win');
    const spec = MENUS[w.dataset.menus] || [];
    spec.forEach(([label, items]) => {
      const b = document.createElement('button');
      b.type = 'button'; b.innerHTML = `<u>${label[0]}</u>${label.slice(1)}`; b.setAttribute('aria-haspopup', 'true'); b.setAttribute('aria-expanded', 'false');
      b.addEventListener('click', e => {
        e.stopPropagation();
        if (openMenu && openMenu.btn === b) { closeMenu(); return; }
        closeMenu();
        const list = typeof items === 'function' ? items() : items;
        const m = document.createElement('div');
        m.className = 'menu'; m.setAttribute('role', 'menu');
        list.forEach(([text, fn]) => {
          const it = document.createElement('button');
          it.type = 'button'; it.setAttribute('role', 'menuitem'); it.textContent = text;
          it.addEventListener('click', () => { closeMenu(); fn(w, b); });
          m.append(it);
        });
        const r = b.getBoundingClientRect(), wr = w.getBoundingClientRect();
        m.style.left = (r.left - wr.left) + 'px'; m.style.top = (r.bottom - wr.top) + 'px';
        w.append(m);
        b.setAttribute('aria-expanded', 'true');
        openMenu = { el: m, btn: b };
        $('button', m).focus();
      });
      bar.append(b);
    });
  });
  document.addEventListener('click', e => { if (openMenu && !e.target.closest('.menu')) closeMenu(); });

  /* ── Start menu ────────────────────────────────────────────── */
  const startBtn = $('#start'), startMenu = $('#startmenu');
  function setStart(openIt) {
    startMenu.hidden = !openIt;
    startBtn.setAttribute('aria-expanded', String(openIt));
    startBtn.setAttribute('aria-pressed', String(openIt));
    if (openIt) $('button, a', startMenu).focus();
  }
  startBtn.addEventListener('click', e => { e.stopPropagation(); setStart(startMenu.hidden); });
  document.addEventListener('click', e => { if (!startMenu.hidden && !e.target.closest('#startmenu')) setStart(false); });

  /* ── Dialogs ───────────────────────────────────────────────── */
  const dMsg = $('#d-msg');
  function msg(title, text, icon = 'i-err', from) {
    retitle(dMsg, title);
    $('[data-msg-body]', dMsg).innerHTML = text.split('\n').map(t => `<p>${t}</p>`).join('');
    $('[data-msg-icon] use', dMsg).setAttribute('href', '#' + icon);
    open(dMsg, from);
  }

  const dDl = $('#d-dl');
  let pendingDl = null;
  function fileDownload(a) {
    pendingDl = a;
    $('[data-dl-name]', dDl).textContent = a.dataset.file || a.textContent.trim();
    $('[data-dl-from]', dDl).textContent = a.dataset.from || new URL(a.href).hostname;
    open(dDl, a);
  }
  // OK runs the Win98 copy phase for about a second, then the Download complete
  // dialog's Open button opens the real page. The open needs a click of its own:
  // browsers block a new tab that opens from a timer instead of a gesture.
  const dCopy = $('#d-copy'), dDone = $('#d-done');
  let copyTimer;
  $('[data-dl-ok]', dDl).addEventListener('click', () => {
    if (!pendingDl) { close(dDl); return; }
    const a = pendingDl, save = ($('input[name="dl-what"]:checked', dDl) || {}).value === 'save';
    close(dDl);
    $('[data-copy-verb]', dCopy).textContent = save ? 'Saving' : 'Opening';
    $('[data-copy-name]', dCopy).textContent = a.dataset.file || a.textContent.trim();
    $('[data-copy-from]', dCopy).textContent = a.dataset.from || new URL(a.href).hostname;
    const bar = $('.copybar i', dCopy); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
    open(dCopy, a);
    ie.status(`Copying ${a.dataset.file || ''} from ${a.dataset.from || ''}...`, 0);
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      if (dCopy.hidden) return;
      close(dCopy);
      $('[data-done-name]', dDone).textContent = a.dataset.file || a.textContent.trim();
      $('[data-done-href]', dDone).textContent = a.href;
      open(dDone, a);
      ie.status('Done', 0);
    }, reduce ? 150 : 1150);
  });
  dCopy.addEventListener('win:close', () => { clearTimeout(copyTimer); ie.status('Done', 0); });
  $('[data-done-open]', dDone).addEventListener('click', () => {
    if (pendingDl) { window.open(pendingDl.href, '_blank', 'noopener'); ie.status(`Opening ${pendingDl.href}`); }
    close(dDone);
  });
  $('[data-dl-info]', dDl).addEventListener('click', e => {
    const a = pendingDl;
    msg('File Download', (a && a.dataset.info ? a.dataset.info + '\n' : '') + `The address is ${a ? a.href : ''}. That is the real one. The sketchy parts of this site are the flashing ads.`, 'i-info', e.currentTarget);
  });

  const dSd = $('#d-shutdown'), off = $('#off');
  $('[data-sd-ok]', dSd).addEventListener('click', () => {
    const v = ($('input[name="sd"]:checked', dSd) || {}).value;
    close(dSd);
    if (v === 'pro') { location.href = 'index.html'; return; }
    if (v === 'restart') { sess.del('booted'); location.reload(); return; }
    off.dataset.mode = v === 'standby' ? 'standby' : 'off';
    if (v === 'standby') off.addEventListener('click', () => { off.dataset.mode = ''; }, { once: true });
  });
  off.addEventListener('click', e => {
    const a = e.target.closest('[data-action="poweron"]');
    if (a) { e.preventDefault(); sess.del('booted'); location.reload(); }
  });

  /* ── Global click routing ──────────────────────────────────── */
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-open]');
    if (opener) {
      // Desktop icons single-click to select on a desktop, open on a phone or via keyboard.
      if (opener.classList.contains('icon') && !phone() && e.detail > 0) {
        $$('.icon').forEach(i => i.classList.remove('selected'));
        opener.classList.add('selected');
        return;
      }
      setStart(false);
      const self = opener.closest('.win');
      open(opener.dataset.open, opener);
      if (opener.hasAttribute('data-close-self') && self) close(self);
      return;
    }
    const closer = e.target.closest('[data-close]');
    if (closer) { close(closer.closest('.win')); return; }
    const info = e.target.closest('[data-msg-info]');
    if (info) { msg(titleOf(info.closest('.win')), info.dataset.msgInfo, 'i-info', info); return; }
    const ad = e.target.closest('.ad');
    if (ad) { msg(ad.dataset.title || 'Internet Explorer', ad.dataset.msg, 'i-err', ad); return; }
    if (!e.target.closest('#desktop') && !e.target.closest('.icon')) $$('.icon.selected').forEach(i => i.classList.remove('selected'));
  });
  $$('.icon[data-open]').forEach(i => i.addEventListener('dblclick', () => { if (!phone()) open(i.dataset.open, i); }));
  // Link icons (Resume.pdf) select on one click and open on two, like the others.
  $$('a.icon').forEach(i => {
    i.addEventListener('click', e => { if (!phone() && e.detail > 0) { e.preventDefault(); $$('.icon').forEach(x => x.classList.remove('selected')); i.classList.add('selected'); } });
    i.addEventListener('dblclick', () => { if (!phone()) window.open(i.href, '_blank', 'noopener'); });
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (openMenu) { closeMenu(); return; }
    if (!startMenu.hidden) { setStart(false); startBtn.focus(); return; }
    const top = wins.filter(x => !x.hidden && isDialog(x)).sort((a, b) => (+b.style.zIndex || 0) - (+a.style.zIndex || 0))[0];
    if (top) close(top);
  });

  /* ── Internet Explorer ─────────────────────────────────────── */
  const wIe = $('#w-ie'), pane = $('#ie-pane'), addr = $('#ie-url'), statusEl = $('[data-ie-status]');
  const SITES = $$('.site').map(el => ({ id: el.id.slice(2), el, url: el.dataset.url, title: el.dataset.title }));
  const RING = ['portal', 'alpha', 'beta', 'links'];
  const byId = id => SITES.find(s => s.id === id);
  let hist = [], hidx = -1, statusTimer;

  const ie = {
    status(text, revert = 1800) {
      clearTimeout(statusTimer);
      statusEl.textContent = text;
      const loading = /^(Opening|Copying)/.test(text);
      wIe.classList.toggle('loading', loading);
      if (loading) { const bar = $('.prog i', wIe); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; }
      if (revert) statusTimer = setTimeout(() => { statusEl.textContent = 'Done'; wIe.classList.remove('loading'); }, revert);
    },
    show(id, typed) {
      const s = byId(id) || byId('404');
      SITES.forEach(x => x.el.classList.toggle('on', x === s));
      pane.scrollTop = 0;
      addr.value = s.id === '404' ? (typed || 'http://emeryzone.basement/404.htm') : s.url;
      const t = s.el.dataset.title.replace(/&amp;/g, '&');
      retitle(wIe, `${t} - Internet Explorer`);
      this.status('Done', 0);
      if (s.id !== '404' && location.hash !== '#' + s.id) history.replaceState(null, '', s.id === 'portal' ? location.pathname : '#' + s.id);
      $('[data-ie="back"]').disabled = hidx <= 0;
      $('[data-ie="fwd"]').disabled = hidx >= hist.length - 1;
    },
    go(id, typed) {
      if (!byId(id)) id = '404';
      hist = hist.slice(0, hidx + 1); hist.push(id); hidx = hist.length - 1;
      this.show(id, typed);
      const s = byId(id); if (s && s.url) this.status('Opening page ' + s.url + '...', 900);
    },
    back() { if (hidx > 0) { hidx--; this.show(hist[hidx]); } },
    fwd() { if (hidx < hist.length - 1) { hidx++; this.show(hist[hidx]); } },
    refresh() { const id = hist[hidx] || 'portal'; this.show(id); this.status('Opening page ' + (byId(id) || {}).url + '...', 700); },
  };

  $$('[data-ie]').forEach(b => b.addEventListener('click', () => {
    const a = b.dataset.ie;
    if (a === 'back') ie.back(); else if (a === 'fwd') ie.fwd(); else if (a === 'home') ie.go('portal');
    else if (a === 'refresh') ie.refresh(); else if (a === 'stop') ie.status('Done', 0);
    else if (a === 'print') msg('Print', 'The printer in the basement is out of ink. It has been out of ink since 2004.', 'i-info', b);
  }));
  $('[data-ie-form]').addEventListener('submit', e => {
    e.preventDefault();
    const typed = addr.value.trim();
    const key = typed.toLowerCase();
    const hit = RING.find(id => id !== 'portal' && key.includes(id))
      || ((key === '' || /index|home|zone|basement/.test(key)) ? 'portal' : null);
    ie.status('Opening page ' + typed + '...', 900);
    ie.go(hit || '404', typed);
  });
  pane.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const h = a.getAttribute('href');
    if (a.dataset.ieLink === 'refresh') { e.preventDefault(); ie.refresh(); return; }
    if (a.closest('.shots')) { e.preventDefault(); view(a); return; }
    if (a.classList.contains('dl-real') && a.dataset.file) { e.preventDefault(); fileDownload(a); return; }
    if (h.startsWith('#')) {
      e.preventDefault();
      const id = h.slice(1);
      if (byId(id)) { ie.go(id); return; }
      const anchor = $('#' + CSS.escape(id), pane);
      if (anchor) anchor.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
      return;
    }
    if (a.target === '_blank') ie.status('Opening page ' + a.href + '...');
  });
  // The status bar reports where a link really goes, as IE did.
  pane.addEventListener('mouseover', e => {
    const a = e.target.closest('a[href]'); if (!a) return;
    const h = a.getAttribute('href');
    let dest = a.href;
    if (h.startsWith('#')) { const s = byId(h.slice(1)); dest = s ? s.url : (byId(hist[hidx]) || {}).url + h; }
    ie.status(dest, 0);
  });
  pane.addEventListener('mouseout', e => { if (e.target.closest('a[href]')) ie.status('Done', 0); });
  pane.addEventListener('focusin', e => { const a = e.target.closest('a[href]'); if (a) { const h = a.getAttribute('href'); const s = h.startsWith('#') && byId(h.slice(1)); ie.status(s ? s.url : a.href, 0); } });

  // Webring: previous, next and random walk the four sites.
  pane.addEventListener('click', e => {
    const r = e.target.closest('[data-ring]'); if (!r) return;
    e.preventDefault(); e.stopImmediatePropagation();
    const cur = RING.indexOf(hist[hidx]); const n = RING.length;
    let next;
    if (r.dataset.ring === 'prev') next = RING[(cur - 1 + n) % n];
    else if (r.dataset.ring === 'next') next = RING[(cur + 1) % n];
    else { const pool = RING.filter(id => id !== hist[hidx]); next = pool[Math.floor(Math.random() * pool.length)]; }
    ie.go(next);
  }, true);

  wIe.addEventListener('win:open', () => { if (hidx < 0) ie.go(pendingSite || 'portal'); pendingSite = null; });
  let pendingSite = null;
  function siteFromHash() { const id = location.hash.slice(1); return byId(id) && id !== '404' ? id : null; }
  addEventListener('hashchange', () => { const id = siteFromHash(); if (id && !wIe.hidden && hist[hidx] !== id) ie.go(id); });

  /* ── Image preview ─────────────────────────────────────────── */
  const wView = $('#w-view');
  function view(a) {
    const img = $('img', a), out = $('[data-view-img]', wView);
    out.src = a.href; out.alt = img ? img.alt : '';
    retitle(wView, `${a.href.split('/').pop()} - Image Preview`);
    open(wView, a);
  }

  /* ── Hit counter: counts only this visitor, on this machine ── */
  const n = (parseInt(store.get('basement-visits'), 10) || 0) + 1;
  store.set('basement-visits', String(n));
  const digits = String(Math.min(n, 999999)).padStart(6, '0');
  $$('[data-counter]').forEach(c => { c.innerHTML = [...digits].map(d => `<i>${d}</i>`).join(''); });
  $$('[data-counter-n]').forEach(c => { c.textContent = n.toLocaleString(); });

  /* ── Outlook Express ───────────────────────────────────────── */
  $('[data-mail]').addEventListener('submit', e => {
    e.preventDefault();
    const from = $('#m-from').value.trim(), subj = $('#m-subj').value.trim() || 'Hi from the basement';
    let body = $('#m-body').value;
    if (from) body = `${body}\n\n-- ${from}`;
    location.href = `mailto:EmeryReszka@outlook.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body.trim())}`;
  });

  /* ── Media Player: the three latest uploads, from the public feed ── */
  const list = $('[data-playlist]');
  const FEED = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCECn7n2-gTo-y8TKMrVWSBQ';
  const PROXIES = [u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u), u => 'https://corsproxy.io/?url=' + encodeURIComponent(u)];
  let feedLoaded = false;
  async function loadFeed() {
    if (feedLoaded) return; feedLoaded = true;
    for (const p of PROXIES) {
      try {
        const res = await fetch(p(FEED)); if (!res.ok) continue;
        const xml = new DOMParser().parseFromString(await res.text(), 'text/xml');
        const vids = [...xml.getElementsByTagName('entry')].slice(0, 3).map(en => ({
          id: en.getElementsByTagNameNS('*', 'videoId')[0].textContent,
          title: en.getElementsByTagName('title')[0].textContent,
          date: new Date(en.getElementsByTagName('published')[0].textContent),
        }));
        if (!vids.length) continue;
        list.innerHTML = '';
        vids.forEach(v => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = `https://www.youtube.com/watch?v=${v.id}`; a.target = '_blank'; a.rel = 'noopener';
          const im = document.createElement('img'); im.src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`; im.alt = ''; im.loading = 'lazy';
          const t = document.createElement('span'); t.textContent = v.title;
          const d = document.createElement('small'); d.textContent = v.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          t.append(d); a.append(im, t); li.append(a); list.append(li);
        });
        return;
      } catch { /* try the next proxy */ }
    }
    list.innerHTML = '<li class="hint">Couldn\'t read the channel feed. Click the screen to open the channel.</li>';
  }
  $('#w-media').addEventListener('win:open', loadFeed);
  $('[data-media="play"]').addEventListener('click', () => window.open('https://www.youtube.com/@EmeryReszka', '_blank', 'noopener'));

  /* ── Welcome ───────────────────────────────────────────────── */
  const welcomeToggle = $('[data-welcome-toggle]');
  welcomeToggle.checked = store.get('basement-welcome') !== 'off';
  welcomeToggle.addEventListener('change', () => store.set('basement-welcome', welcomeToggle.checked ? 'on' : 'off'));

  /* ── Boot ──────────────────────────────────────────────────── */
  const boot = $('#boot');
  function start() {
    boot.hidden = true;
    const id = siteFromHash();
    if (id) { pendingSite = id; open('w-ie', $('.icon[data-open="w-ie"]')); }
    else if (store.get('basement-welcome') !== 'off') open('w-welcome');
  }
  if (reduce || sess.get('booted')) start();
  else {
    const lines = $$('#boot .post span');
    const timers = [];
    lines.forEach((l, i) => timers.push(setTimeout(() => l.classList.add('on'), 120 + i * 130)));
    timers.push(setTimeout(() => boot.classList.add('splash-on'), 120 + lines.length * 130 + 350));
    timers.push(setTimeout(finish, 120 + lines.length * 130 + 350 + 1100));
    function finish() { timers.forEach(clearTimeout); sess.set('booted', '1'); start(); }
    boot.addEventListener('click', finish, { once: true });
    addEventListener('keydown', function skip() { if (!boot.hidden) finish(); removeEventListener('keydown', skip); });
  }
})();
