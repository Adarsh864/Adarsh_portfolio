"use client";

import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedDiv } from '@/components/AnimatedDiv';

const ProjectCard = ({
  project,
  delay = 0,
  className,
}: {
  project: (typeof portfolioData.projects)[0];
  delay?: number;
  className?: string;
}) => {
  const placeholder = PlaceHolderImages.find((p) => p.id === project.image);
  return (
    <AnimatedDiv delay={delay} className={className}>
      <div className="h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-100">
        {placeholder && (
          <div className="aspect-video overflow-hidden">
            <Image
              src={placeholder.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
              data-ai-hint={placeholder.imageHint}
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-headline text-xl font-semibold mb-3 text-gray-900">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export function OriginalProjects() {
  const firstRowProjects = portfolioData.projects.slice(0, 2);
  const secondRowProjects = portfolioData.projects.slice(2);

  return (
    <section id="projects" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>
        </AnimatedDiv>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firstRowProjects.map((project, index) => (
              <ProjectCard key={index} project={project} delay={0.1 * (index + 1)} />
            ))}
          </div>
          <div className="grid grid-cols-1 mt-8">
            {secondRowProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                delay={0.1 * (index + 3)}
                className="md:max-w-[calc(50%-1rem)] md:mx-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
