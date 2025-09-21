"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        scrolled ? "bg-white/80 shadow-sm" : "bg-white/60"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Left: logo */}
        <Link href="#hero" className="flex items-center gap-2">
          <Image
            src="/sh_logo.png"
            alt="SH logo"
            width={120}            // set to the image’s natural px width
            height={60}            // set to the image’s natural px height
            priority
            className="h-6 w-auto" // displays at 24px tall; keeps aspect
          />
          <span className="sr-only">Home</span>
        </Link>

        {/* Right: nav + divider + button */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm md:text-base hover:opacity-80">
              {item.label}
            </a>
          ))}
          <span className="mx-2 h-6 w-px bg-gray-200" />
          <a href="/Sloane_Holtby_CV.pdf" className="btn rounded-full px-4 py-2" download>
            Download CV
          </a>
        </nav>

        <div className="md:hidden" />
      </div>
    </header>
  );
}
