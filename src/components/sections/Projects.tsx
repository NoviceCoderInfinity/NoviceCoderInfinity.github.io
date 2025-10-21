import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation tool using machine learning to generate marketing copy and blog posts.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms with beautiful visualizations.",
    tags: ["Vue.js", "D3.js", "Express", "Redis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first application for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
    tags: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Real Estate Marketplace",
    description: "Property listing platform with advanced search filters, virtual tours, and mortgage calculator.",
    tags: ["Angular", "Spring Boot", "MySQL", "AWS"],
    github: "#",
    demo: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of projects I've worked on, showcasing various skills and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
