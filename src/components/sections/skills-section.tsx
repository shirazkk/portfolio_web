
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Database, GitFork, Layers, Palette, Server, ShoppingCart, TabletSmartphone, Zap } from 'lucide-react';

const skillsData = [
  { name: 'Next.js', icon: <Layers className="h-6 w-6 text-accent" /> },
  { name: 'React', icon: <Layers className="h-6 w-6 text-accent" /> },
  { name: 'E-Commerce', icon: <ShoppingCart className="h-6 w-6 text-accent" /> },
  { name: 'CMS (Sanity)', icon: <Database className="h-6 w-6 text-accent" /> },
  { name: 'Git', icon: <GitFork className="h-6 w-6 text-accent" /> },
  { name: 'TypeScript', icon: <Cpu className="h-6 w-6 text-accent" /> },
  { name: 'JavaScript', icon: <Cpu className="h-6 w-6 text-accent" /> },
  { name: 'Tailwind CSS', icon: <Palette className="h-6 w-6 text-accent" /> },
  { name: 'HTML', icon: <TabletSmartphone className="h-6 w-6 text-accent" /> },
  { name: 'CSS', icon: <Palette className="h-6 w-6 text-accent" /> },
  { name: 'Stripe', icon: <Server className="h-6 w-6 text-accent" /> },
  { name: 'Vercel', icon: <Server className="h-6 w-6 text-accent" /> },
  { name: 'Web Performance', icon: <Zap className="h-6 w-6 text-accent" /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle>Skills & Technologies</SectionTitle>
        <SectionSubtitle>A showcase of my technical abilities and the tools I use to build modern web experiences.</SectionSubtitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <Card key={skill.name} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-3">
                {skill.icon}
                <p className="text-sm font-medium text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
