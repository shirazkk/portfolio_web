
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, CalendarDays, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Certified Agentic, and Robotic AI Engineer',
    institution: 'PIAIC',
    duration: '09/2024 – Present',
    icon: <Award className="h-8 w-8 text-accent" />,
  },
  {
    degree: 'Intermediate in Engineering',
    institution: 'NCR CET college',
    duration: '01/2021 – 01/2023',
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle>Education & Certifications</SectionTitle>
        <SectionSubtitle>My academic background and professional certifications.</SectionSubtitle>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div>{edu.icon}</div>
                <div>
                  <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                  <CardDescription className="text-muted-foreground">{edu.institution}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {edu.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
