"use client";

import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="bg-circuit py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedDiv>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm animate-flicker">&gt; ls -la /education</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-neon-animated">
              Education
            </h2>
          </div>
        </AnimatedDiv>
        <motion.div 
          className="relative max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <div className="absolute left-6 top-0 h-full w-0.5 bg-primary/30 -z-10 shadow-neon-sm animate-pulse"></div>
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95, filter: 'blur(6px)' },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1, 
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }
              }}
            >
              <div className="relative pl-16 pb-12">
                <div className="absolute left-6 top-1 -translate-x-1/2 w-3 h-3 bg-primary border-2 border-background shadow-neon-sm cyber-chamfer-sm animate-pulse-glow"></div>
                <div className="bg-card/50 backdrop-blur-sm p-6 cyber-chamfer border border-primary/30 hover:border-primary/50 hover:shadow-neon-sm hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 border border-primary/30 cyber-chamfer-sm bg-primary/10 flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-primary mb-2">{edu.duration}</p>
                      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-neon-tertiary">{edu.institution}</h3>
                      <p className="font-mono text-sm mt-1">{edu.degree}</p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">&gt; {edu.location}</p>
                      <p className="font-mono text-sm mt-2 font-semibold text-primary">{edu.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
