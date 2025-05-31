
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import { ProjectCard } from '@/components/ui/project-card';

const projects = [
  {
    title: 'Marketplace Builder Hackathon',
    description: 'Successfully participated in and completed a 7-day hackathon focused on building an e-commerce marketplace. Developed key frontend features, integrated Sanity CMS and Stripe, and created an admin dashboard. Collaborated with a team to optimize UI/UX and deployed on Vercel.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Sanity CMS', 'Stripe', 'Vercel'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce marketplace',
    liveLink: '#', // Replace with actual link if available
  },
  {
    title: 'Resume Builder Website',
    description: 'A user-friendly interface for entering resume details and generating a professional layout instantly. Fully responsive design built with HTML, CSS, and TypeScript for performance and maintainability. Deployed on Vercel for fast and reliable access.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vercel'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'resume cv',
    liveLink: '#', // Replace with actual link
  },
  // Add more projects here if needed
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <SectionSubtitle>Here are some of the projects I've worked on, showcasing my skills and passion for web development.</SectionSubtitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
