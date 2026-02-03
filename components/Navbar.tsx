"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-4 ${
          scrolled ? "rounded-full bg-black/40 shadow-lg backdrop-blur-xl" : ""
        }`}
      >
        {/* Left: logo / initials */}
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-semibold tracking-wide backdrop-blur-md"
        >
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#6C63FF] via-[#9AE1FF] to-[#ffffff] shadow-[0_0_16px_rgba(154,225,255,0.8)]" />
          <span className="tracking-[0.18em] text-[0.65rem] uppercase text-white/80">
            JH
          </span>
        </Link>

        {/* Right: nav links + CTA */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#9AE1FF] via-[#6C63FF] to-transparent transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}

          {/* CTA: Featured project */}
          <Link
            href="#oil-for-the-journey"
            className="rounded-full bg-gradient-to-r from-[#6C63FF] via-[#9AE1FF] to-[#6C63FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#050716] shadow-[0_0_24px_rgba(154,225,255,0.9)] transition hover:brightness-110"
          >
            Oil for the Journey
          </Link>
        </nav>

        {/* Mobile: just show CTA button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#oil-for-the-journey"
            className="rounded-full bg-gradient-to-r from-[#6C63FF] to-[#9AE1FF] px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#050716] shadow-[0_0_18px_rgba(154,225,255,0.9)]"
          >
            Oil for the Journey
          </Link>
        </div>
      </div>
    </header>
  );
}
