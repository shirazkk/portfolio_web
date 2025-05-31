
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  repoLink?: string;
}

export function ProjectCard({ title, description, technologies, imageUrl, imageHint, liveLink, repoLink }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={600} 
          height={400} 
          className="object-cover w-full h-48" 
          data-ai-hint={imageHint}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-3 text-primary">{title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2 justify-end">
        {liveLink && (
          <Link href={liveLink} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        )}
        {repoLink && (
          <Link href={repoLink} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="ghost" size="sm">
              <Github className="mr-2 h-4 w-4" /> View Code
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
