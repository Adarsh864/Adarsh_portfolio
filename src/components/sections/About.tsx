"use client";

import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';

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
        <AnimatedDiv delay={0.2}>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-lg relative">
            <p className="text-lg text-card-foreground/90 leading-relaxed whitespace-pre-wrap">
              {professionalSummary}
            </p>
          </div>
        </AnimatedDiv>
      </section>
    </>
  );
}
