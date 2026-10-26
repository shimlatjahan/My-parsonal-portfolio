"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d1d]/95 backdrop-blur-xl">

      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >

        {/* LOGO */}

        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Sonia
          <span className="text-violet-400">.</span>
        </Link>

        {/* DESKTOP LINKS */}

        <div className="hidden items-center gap-7 md:flex">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-violet-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-violet-400"
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* CONTACT BUTTON */}

        <Link
          href="/#contact"
          className="hidden rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-500 lg:inline-flex"
        >
          Let&apos;s Talk
          <span className="ml-2">↗</span>
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-2xl text-white md:hidden"
        >
          {open ? "×" : "☰"}
        </button>

      </nav>

      {/* MOBILE NAVIGATION */}

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#0e1428] px-5 py-4 md:hidden"
        >

          <nav className="mx-auto flex max-w-7xl flex-col gap-1">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-violet-500/15 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

          </nav>

        </div>
      )}

    </header>
  );
}