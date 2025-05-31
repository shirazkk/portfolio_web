
"use client";
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Send } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (titleRef.current) {
      tl.fromTo(titleRef.current.children, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.8 }
      );
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.5"
      );
    }
    if (descriptionRef.current) {
      tl.fromTo(descriptionRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.6"
      );
    }
    if (buttonsRef.current) {
      tl.fromTo(buttonsRef.current.children, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, stagger: 0.2, duration: 0.5 }, 
        "-=0.5"
      );
    }
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url('/assets/geometric-pattern.svg')"}}></div>
      <div className="container text-center relative z-10">
        <h1 ref={titleRef} className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="text-primary inline-block">SHIRAZ </span>
          <span className="text-accent inline-block">ALI</span>
        </h1>
        <p ref={subtitleRef} className="font-headline text-2xl md:text-3xl text-primary mb-8">
          Frontend Developer
        </p>
        <p ref={descriptionRef} className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10">
          Crafting responsive, high-performance, and user-friendly web applications with a passion for clean code and modern technologies.
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
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
