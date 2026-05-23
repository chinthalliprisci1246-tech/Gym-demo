"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Gallery", href: "#gallery" },
  { label: "Transformations", href: "#transformations" },
  { label: "Pricing", href: "#pricing" },
  { label: "Trainers", href: "#trainers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo1.png"
            alt="GYM-LOGO"
            width={100}
            height={100}
            className="rounded-sm"
          />
          <span
            className="font-bold text-white text-lg tracking-widest uppercase"
            style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem" }}
          >
             {/* TODO */}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-yellow-400 transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-yellow-400 text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 tracking-wide"
        >
          Join Now
        </a>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-white/70 hover:text-yellow-400 transition-colors text-sm border-b border-white/5 tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 bg-yellow-400 text-black text-center font-bold py-3 rounded-full text-sm tracking-wide"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}