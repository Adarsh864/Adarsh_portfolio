"use client";

import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export function About() {
  const { professionalSummary } = portfolioData;

  return (
    <>
      <section id="about" className="container mx-auto py-24 px-4 md:px-6 relative">
        <AnimatedDiv>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm animate-flicker">&gt; whoami</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-neon-animated">
              Professional Summary
            </h2>
          </div>
        </AnimatedDiv>
        
        <AnimatedDiv delay={0.2}>
          <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm p-8 cyber-chamfer border border-primary/30 shadow-neon-sm relative hover:border-primary/50 hover:shadow-neon hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 border border-primary/30 cyber-chamfer-sm bg-primary/10 flex-shrink-0 animate-pulse">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-base font-mono text-card-foreground/90 leading-relaxed whitespace-pre-wrap">
                  <span className="text-primary/70">&gt;</span> {professionalSummary}
                </p>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </section>
    </>
  );
}
