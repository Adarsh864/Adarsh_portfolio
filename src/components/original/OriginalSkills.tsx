import { portfolioData } from '@/data/portfolio-data';
import { AnimatedDiv } from '@/components/AnimatedDiv';

export function OriginalSkills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
        </AnimatedDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <AnimatedDiv key={category} delay={0.1 * (index + 1)}>
              <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <h3 className="font-headline text-xl font-semibold mb-4 text-gray-900">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-gray-100 text-gray-700 text-sm font-medium py-1 px-3 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
