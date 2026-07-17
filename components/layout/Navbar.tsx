"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../ui/Container";


const navItems = [
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            RN<span className="text-blue-500">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}