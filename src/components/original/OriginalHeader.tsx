"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export function OriginalHeader({ onToggleTheme }: { onToggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <Code className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold">Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Moon toggle: switch to Cyberpunk/dark */}
          <button
            onClick={onToggleTheme}
            title="Switch to Cyberpunk theme"
            aria-label="Switch to Cyberpunk theme"
            className="hidden sm:flex items-center w-16 h-8 rounded-full bg-slate-900 border border-teal-700 p-1 transition-all duration-300 hover:border-teal-500 relative"
          >
            {/* track label */}
            <span className="absolute left-2 text-[9px] font-sans uppercase text-teal-400 select-none">Dark</span>
            {/* thumb with moon — sits on the right */}
            <span className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-teal-600 text-white shadow-md transition-all duration-300">
              <Moon className="w-3.5 h-3.5" />
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>

          <button
            className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto flex flex-col items-center gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full text-center font-medium text-foreground/80 transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
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

