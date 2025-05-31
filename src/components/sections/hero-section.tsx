
import { Button } from '@/components/ui/button';
import { ArrowDown, Send } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('/assets/geometric-pattern.svg')"}}></div>
      <div className="container text-center relative z-10">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="text-primary">SHIRAZ </span>
          <span className="text-accent">ALI</span>
        </h1>
        <p className="font-headline text-2xl md:text-3xl text-primary mb-8">
          Frontend Developer
        </p>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10">
          Crafting responsive, high-performance, and user-friendly web applications with a passion for clean code and modern technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects" passHref>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              View Projects <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-lg transition-transform hover:scale-105">
              Contact Me <Send className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
