"use client";

import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { motion } from 'framer-motion';

export function About() {
  const { professionalSummary } = portfolioData;

  return (
    <>
      <section id="about" className="container mx-auto py-24 px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Summary
          </h2>
        </AnimatedDiv>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
        >
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-lg relative hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-card-foreground/90 leading-relaxed whitespace-pre-wrap">
              {professionalSummary}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
