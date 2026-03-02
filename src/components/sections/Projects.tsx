"use client";

import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project, delay = 0, className }: { project: typeof portfolioData.projects[0], delay?: number, className?: string }) => {
  const placeholder = PlaceHolderImages.find(p => p.id === project.image);
  return (
    <Card className="h-full flex flex-col group hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm hover:scale-[1.02] hover:shadow-neon">
      <CardHeader>
          {placeholder && (
             <div className="aspect-video overflow-hidden cyber-chamfer-sm mb-4 relative border border-primary/20 group-hover:border-primary/50 transition-all">
              <Image
                src={placeholder.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                data-ai-hint={placeholder.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
             </div>
          )}
          <div className="flex items-start gap-2">
            <FolderGit2 className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:animate-pulse" />
            <CardTitle>{project.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-muted-foreground text-sm mb-4 flex-grow font-mono leading-relaxed">
            <span className="text-primary/70">&gt;</span> {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
  );
};

export function Projects() {
  const firstRowProjects = portfolioData.projects.slice(0, 2);
  const secondRowProjects = portfolioData.projects.slice(2);

  return (
    <section id="projects" className="bg-circuit py-24 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedDiv>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm animate-flicker">&gt; cd /projects</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wider text-neon-animated">
              Projects
            </h2>
          </div>
        </AnimatedDiv>
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {firstRowProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(8px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <ProjectCard project={project} delay={0} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.15
                }
              }
            }}
          >
             {secondRowProjects.map((project, index) => (
               <motion.div
                key={index}
                className="md:max-w-[calc(50%-1rem)] md:mx-auto w-full"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(8px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
              >
                <ProjectCard project={project} delay={0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
