"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 backdrop-blur-md bg-zinc-950/70">
      <nav className="section-wrap h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-zinc-100">
          Tata Nikhil Dharma Sai
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm transition-colors ${
                  active === link.id ? "text-emerald-400" : "text-zinc-300 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-zinc-200"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95">
          <ul className="section-wrap py-3 space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm ${active === link.id ? "text-emerald-400" : "text-zinc-300"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
