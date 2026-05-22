"use client";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
       <Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="Gym Logo"
    width={32}
    height={32}
    className="rounded-sm"
  />

  <span className="font-bold text-white text-lg tracking-tight">
    GYM LOGO
  </span>
</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </Link>
          ))}
          
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-black border-t border-white/10 px-4 pb-4 flex flex-col gap-3 text-sm text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 hover:text-white">
              {l.label}
            </Link>
          ))}
          
          
        </div>
      )}
    </nav>
  );
}