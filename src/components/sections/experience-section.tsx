
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    role: 'Participant',
    company: 'Marketplace Builder Hackathon',
    duration: '7-Day Event',
    description: 'Hackathon focused on building e-commerce solutions. Developed and implemented key frontend features using Next.js, React, and Tailwind CSS. Integrated Sanity CMS for dynamic content management and Stripe for secure online payments. Created a user-friendly admin dashboard for order and product management. Collaborated with a team to optimize UI/UX for a seamless shopping experience. Deployed the project on Vercel for live demonstration.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Sanity CMS', 'Stripe', 'Vercel'],
  },
  {
    role: 'Developer',
    company: 'Resume Builder Website',
    duration: 'Personal Project',
    description: 'Key Features: User-friendly interface for entering resume details. Instant resume generation with a professional layout. Fully responsive design for seamless experience across devices. Built with HTML, CSS, and TypeScript for performance and maintainability. Deployed on Vercel for fast and reliable access.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vercel'],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        <SectionSubtitle>My professional journey and contributions in various roles and projects.</SectionSubtitle>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg overflow-hidden">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <CardTitle className="font-headline text-2xl text-primary mb-1 sm:mb-0">{exp.role} at {exp.company}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1.5" />
                    {exp.duration}
                  </div>
                </div>
                 <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => <Badge key={tech} variant="outline">{tech}</Badge>)}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
