"use client";

import { useTheme } from '@/context/ThemeContext';

// Cyberpunk layout components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';

// Original layout components
import { OriginalHeader } from '@/components/original/OriginalHeader';
import { OriginalFooter } from '@/components/original/OriginalFooter';
import { OriginalHero } from '@/components/original/OriginalHero';
import { OriginalAbout } from '@/components/original/OriginalAbout';
import { OriginalProjects } from '@/components/original/OriginalProjects';
import { OriginalSkills } from '@/components/original/OriginalSkills';
import { OriginalEducation } from '@/components/original/OriginalEducation';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  if (theme === 'original') {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <OriginalHeader onToggleTheme={toggleTheme} />
        <main className="flex-grow">
          <OriginalHero />
          <OriginalAbout />
          <OriginalProjects />
          <OriginalSkills />
          <OriginalEducation />
        </main>
        <OriginalFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

