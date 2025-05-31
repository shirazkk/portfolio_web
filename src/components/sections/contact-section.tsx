
"use client";
import React, { useState } from 'react';
import { SectionTitle, SectionSubtitle } from '@/components/ui/section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API endpoint)
    console.log({ name, email, message });
    toast({
      title: "Message Sent (Simulated)",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</SectionSubtitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-headline text-primary">Contact Information</h3>
            <Card className="shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:Shirazkk8@gmail.com" className="text-foreground hover:text-accent transition-colors">Shirazkk8@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+923273599802" className="text-foreground hover:text-accent transition-colors">+92 327 3599802</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-foreground">A11 phase II ghazi town malir karachi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
             <h3 className="text-2xl font-semibold font-headline text-primary pt-4">Interests</h3>
             <Card className="shadow-md">
                <CardContent className="p-6">
                    <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li>Front-end development</li>
                        <li>Modern web technologies</li>
                        <li>User interface design</li>
                        <li>Artificial intelligence & Agentic AI</li>
                        <li>Continuous learning in the tech field</li>
                    </ul>
                </CardContent>
             </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold font-headline text-primary mb-6">Send Me a Message</h3>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      placeholder="Your Name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                      className="bg-background/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                    <Input 
                      type="email" 
                      id="email" 
                      placeholder="your.email@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="bg-background/70"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={5} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required 
                      className="bg-background/70"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
