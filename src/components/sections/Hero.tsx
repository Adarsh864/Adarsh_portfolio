"use client";

import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowDown, Terminal } from 'lucide-react';
import Link from 'next/link';
import { AnimatedDiv } from '@/components/AnimatedDiv';

export function Hero() {
  const { name, contact } = portfolioData;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`;

  return (
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-circuit">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
        
        {/* Animated data streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute left-[10%] w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{animationDelay: '0s'}}></div>
          <div className="absolute left-[30%] w-px h-16 bg-gradient-to-b from-transparent via-secondary to-transparent animate-data-stream" style={{animationDelay: '1s'}}></div>
          <div className="absolute left-[50%] w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{animationDelay: '2s'}}></div>
          <div className="absolute left-[70%] w-px h-18 bg-gradient-to-b from-transparent via-secondary to-transparent animate-data-stream" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute left-[90%] w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl">
              <AnimatedDiv direction="down">
                <div className="flex items-center gap-2 mb-6 text-primary font-mono text-sm">
                  <Terminal className="w-4 h-4" />
                  <span className="terminal-cursor">&gt; initializing_portfolio.exe</span>
                </div>
                
                <h1 
                  className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6 text-neon-animated"
                  data-text={name}
                >
                  <span className="cyber-glitch animate-glitch" data-text={name}>{name}</span>
                </h1>
              </AnimatedDiv>
              
              <AnimatedDiv direction="down" delay={0.2}>
                <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground mb-10 font-mono leading-relaxed">
                  <span className="text-primary">&gt;</span> A final-year <span className="text-neon-tertiary">Computer Science</span> student with a passion for building <span className="text-neon-secondary">innovative</span> software solutions<span className="animate-blink">_</span>
                </p>
              </AnimatedDiv>
              
              <AnimatedDiv direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" variant="glitch">
                        <a href="#projects">
                          <Terminal className="w-4 h-4" />
                          View Projects
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                        <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">
                          Connect
                        </a>
                    </Button>
                </div>
              </AnimatedDiv>
            </div>
            
            {/* Floating tech badge */}
            <div className="absolute bottom-20 right-10 hidden lg:block animate-float">
              <div className="bg-card border border-primary/30 cyber-chamfer-sm p-4 shadow-neon-sm hover:shadow-neon transition-all hover:scale-105 cursor-pointer animate-border-pulse">
                <div className="flex items-center gap-2 text-primary font-mono text-xs">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow"></div>
                  <span>SYSTEM_ONLINE</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <Link href="#about" aria-label="Scroll to about section" className="block hover:text-primary transition-colors">
                    <div className="border-2 border-primary/50 cyber-chamfer-sm p-3 hover:shadow-neon transition-all animate-float-slow hover:scale-110">
                      <ArrowDown className="h-6 w-6 text-primary animate-bounce"/>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  );
}
