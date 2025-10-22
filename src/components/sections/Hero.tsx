"use client";

import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const { name, contact } = portfolioData;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`;

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center">
        <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                {name}
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
                A final-year Computer Science student with a passion for building innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="lg">
                    <a href="#projects">View My Work</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">Get in Touch</a>
                </Button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <Link href="#about" aria-label="Scroll to about section">
                    <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce"/>
                </Link>
            </div>
        </div>
    </section>
  );
}
