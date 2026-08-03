#!/usr/bin/env python3
"""
Emery Reszka — Portfolio Web Server
Run: python3 server.py
Visit: http://localhost:8080
"""

import http.server
import socketserver
import os
import sys

# Windows consoles default to cp1252, which can't encode the box-drawing and
# star glyphs in the banner below — printing it raised UnicodeEncodeError and
# killed the server before it ever served a request.
sys.stdout.reconfigure(encoding="utf-8")  # type: ignore[attr-defined]

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class PortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"  [{self.address_string()}] {format % args}")


def run():
    with socketserver.TCPServer(("", PORT), PortfolioHandler) as httpd:
        print(f"\n  ✦ Emery Reszka — Portfolio Server")
        print(f"  ─────────────────────────────────")
        print(f"  Serving at → http://localhost:{PORT}")
        print(f"  Press Ctrl+C to stop\n")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n  Server stopped.")


if __name__ == "__main__":
    run()
