import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';

export function Education() {
  return (
    <section id="education" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Education
          </h2>
        </AnimatedDiv>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -z-10"></div>
          {portfolioData.education.map((edu, index) => (
            <AnimatedDiv key={index} delay={0.1 * (index + 1)}>
              <div className="relative pl-12 pb-12">
                <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-secondary"></div>
                <p className="text-sm text-muted-foreground mb-1">{edu.duration}</p>
                <h3 className="font-headline text-xl font-semibold">{edu.institution}</h3>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
                <p className="text-sm mt-1 font-semibold text-primary">{edu.result}</p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
