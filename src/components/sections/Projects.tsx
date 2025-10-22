import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AnimatedDiv } from '@/components/AnimatedDiv';

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Projects
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={0.2}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {portfolioData.projects.map((project, index) => {
                const placeholder = PlaceHolderImages.find(p => p.id === project.image);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
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
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex"/>
            <CarouselNext className="hidden sm:flex"/>
          </Carousel>
        </AnimatedDiv>
      </div>
    </section>
  );
}
