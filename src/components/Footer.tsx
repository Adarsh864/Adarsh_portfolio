import { portfolioData } from '@/data/portfolio-data';
import Link from 'next/link';

export function Footer() {
  const { name, contact } = portfolioData;

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="max-w-xl mx-auto mb-6 text-secondary-foreground/80">
          I'm currently seeking new opportunities. Feel free to reach out if you have any questions or just want to connect!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          {contact.socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <social.icon className="h-6 w-6" />
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
        <div className="border-t border-secondary-foreground/10 pt-6">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
