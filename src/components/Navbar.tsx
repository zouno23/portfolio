"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Leadership", href: "#leadership" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => item.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="text-lg font-bold tracking-tight">
            <Link href="/" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2">
            <Image
              src="/Spiderman-logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.name.toLowerCase()
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle (Simplified for now, can expand later) */}
        <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
