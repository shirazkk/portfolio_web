
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} passHref>
      <Button variant="ghost" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
        {children}
      </Button>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 font-headline text-lg font-bold text-primary">
          <Code className="h-6 w-6 text-accent" />
          Shiraz Ali
        </Link>
        
        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>{item.label}</NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="p-6">
                <Link href="#home" className="flex items-center gap-2 font-headline text-lg font-bold text-primary mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                  <Code className="h-6 w-6 text-accent" />
                  Shiraz Ali
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink key={item.label} href={item.href}>{item.label}</NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
