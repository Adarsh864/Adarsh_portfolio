"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b border-primary/20',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-neon-sm' : 'bg-background/60 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
          <div className="p-2 border border-primary/50 cyber-chamfer-sm bg-primary/10 group-hover:bg-primary/20 group-hover:animate-pulse-glow transition-colors">
            <Terminal className="h-5 w-5 text-primary animate-flicker" />
          </div>
          <span className="font-display text-lg font-bold uppercase tracking-wider text-neon">Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary relative group"
            >
              <span className="group-hover:text-neon transition-colors">{link.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-neon-sm"></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
            {/* Sun toggle: switch to Original/light */}
            <button
              onClick={toggleTheme}
              title="Switch to Original theme"
              aria-label="Switch to Original theme"
              className="hidden sm:flex items-center w-16 h-8 rounded-full bg-white border border-green-300 p-1 transition-all duration-300 hover:border-green-400 relative"
            >
              {/* track label */}
              <span className="absolute right-2 text-[9px] font-sans uppercase text-green-500 select-none">Light</span>
              {/* thumb with sun */}
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-400 text-white shadow-md transition-all duration-300">
                <Sun className="w-3.5 h-3.5" />
              </span>
            </button>
            <Button asChild variant="glitch" size="sm">
                <a href="#contact">Contact</a>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden border border-primary/30 cyber-chamfer-sm hover:bg-primary/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
            </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
          <nav className="container mx-auto flex flex-col items-center gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-full text-center font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-neon py-2 border border-transparent hover:border-primary/30 cyber-chamfer-sm hover:bg-primary/5"
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
