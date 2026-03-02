import { portfolioData } from '@/data/portfolio-data';
import Link from 'next/link';
import { Mail, Terminal } from 'lucide-react';

export function Footer() {
  const { name, contact } = portfolioData;

  return (
    <footer id="contact" className="bg-circuit text-secondary-foreground py-12 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">&gt; contact.sh</span>
          </div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-neon mb-4">Get in Touch</h2>
          <p className="max-w-xl mx-auto mb-6 font-mono text-sm text-secondary-foreground/80 leading-relaxed">
            <span className="text-primary/70">&gt;</span> I'm currently seeking new opportunities. Feel free to reach out if you have any questions or just want to connect!
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          {contact.socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 border border-primary/30 cyber-chamfer-sm bg-primary/10 hover:bg-primary/20 hover:border-primary hover:shadow-neon-sm hover:scale-110 transition-all duration-300">
                <social.icon className="h-5 w-5 text-primary group-hover:text-neon group-hover:animate-pulse transition-colors" />
              </div>
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="border-t border-primary/20 pt-6">
          <p className="font-mono text-xs text-secondary-foreground/60 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {name}<span className="text-primary">.</span> All rights reserved<span className="animate-blink">_</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
