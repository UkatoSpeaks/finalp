"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
      <div className={`
        max-w-7xl mx-auto w-full pointer-events-auto
        flex flex-col md:flex-row justify-between items-center 
        bg-white border-[3px] border-black transition-all duration-300
        ${isScrolled ? "py-2 px-4 shadow-brutal" : "py-4 px-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"}
      `}>
        {/* Left: Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="bg-black text-white px-2 py-0.5 font-bold text-sm tracking-tighter group-hover:bg-accent group-hover:text-black transition-colors">
            C:\&gt;
          </div>
          <span className="font-heading text-xl tracking-tight uppercase group-hover:italic transition-all">
            ANURAG<span className="text-accent-pink">.</span>exe
          </span>
        </Link>

        {/* Right: Command-style Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4 mt-4 md:mt-0 font-mono text-[10px] md:text-sm font-bold">
          <NavLink href="#about">/ABOUT</NavLink>
          <NavLink href="#skills">/SKILLS</NavLink>
          <NavLink href="#projects">/PROJECTS</NavLink>
          <NavLink href="#logs">/LOGS</NavLink>
          <NavLink href="#contact">/CONTACT</NavLink>
          
          <Link 
            href="#hire-me" 
            className="ml-2 bg-accent border-2 border-black px-4 py-1.5 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group"
          >
            HIRE_ME 
            <span className="hidden sm:inline group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="px-2 py-1 relative group overflow-hidden"
    >
      <span className="relative z-10 group-hover:text-white transition-colors duration-200">
        {children}
      </span>
      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"></div>
    </Link>
  );
}
