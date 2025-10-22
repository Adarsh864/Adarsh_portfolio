import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import { cn } from '@/lib/utils';

export function Projects() {
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
            {firstRowProjects.map((project, index) => {
              const placeholder = PlaceHolderImages.find(p => p.id === project.image);
              return (
                <AnimatedDiv key={index} delay={0.1 * (index + 1)}>
                  <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      {placeholder && (
                         <div className="aspect-video overflow-hidden rounded-t-lg mb-4">
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
                      <CardTitle className="font-headline">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {secondRowProjects.map((project, index) => {
              const placeholder = PlaceHolderImages.find(p => p.id === project.image);
              return (
                <AnimatedDiv key={index} delay={0.1 * (index + 3)} className="md:col-start-2">
                   <Card className="h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      {placeholder && (
                         <div className="aspect-video overflow-hidden rounded-t-lg mb-4">
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
                      <CardTitle className="font-headline">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedDiv>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
