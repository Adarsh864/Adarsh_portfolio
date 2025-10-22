"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Button asChild>
                <a href="#contact">Contact Me</a>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X /> : <Menu />}
            </Button>
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
