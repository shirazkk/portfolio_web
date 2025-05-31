
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Card className="overflow-hidden shadow-xl w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-primary">
              <Image 
                src="https://placehold.co/300x300.png" 
                alt="Shiraz Ali" 
                width={300} 
                height={300} 
                className="object-cover w-full h-full" 
                data-ai-hint="professional portrait"
              />
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Results-driven Frontend Developer with expertise in Next.js, React, Sanity, TypeScript, JavaScript, HTML, and CSS. Adept at designing and developing responsive, high-performance, and user-friendly web applications.
                </p>
                <p className="mt-4 text-lg text-foreground leading-relaxed">
                  Experienced in building e-commerce platforms, optimizing UI/UX, and implementing modern web technologies to enhance functionality and scalability. Passionate about clean code, performance optimization, and accessibility standards. Successfully participated in hackathons, showcasing problem-solving skills and innovative solutions. Seeking to contribute technical expertise to a dynamic development team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
