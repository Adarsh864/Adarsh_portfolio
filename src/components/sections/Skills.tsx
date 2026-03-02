"use client";

import { portfolioData } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Programming Languages": Code2,
  "Web Technologies": Code2,
  "Databases": Database,
  "Tools & Technologies": Wrench,
  "default": Code2
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/5 to-background/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedDiv>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm animate-flicker">&gt; cat skills.json</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-neon-animated">
              Technical Skills
            </h2>
          </div>
        </AnimatedDiv>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {Object.entries(portfolioData.skills).map(([category, skills], index) => {
            const Icon = categoryIcons[category] || categoryIcons.default;
            return (
              <motion.div 
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.92, filter: 'blur(6px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <Card className="h-full group hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm hover:scale-[1.02] hover:shadow-neon-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-primary/30 cyber-chamfer-sm bg-primary/10 group-hover:animate-pulse-glow transition-all">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
