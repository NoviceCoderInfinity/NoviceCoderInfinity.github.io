import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "Redux", "React Query"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express", "Python", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Jenkins", "Nginx", "Linux"]
  },
  {
    category: "Other Skills",
    skills: ["REST APIs", "WebSocket", "Testing", "Agile", "System Design", "Microservices", "Machine Learning"]
  }
];

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Machine Learning",
  "Distributed Systems",
  "Web Development",
  "Mobile App Development",
  "Cloud Computing"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Skills & Coursework
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technical expertise and academic foundation
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-6 text-center">Relevant Coursework</h3>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {coursework.map((course, i) => (
                    <Badge key={i} variant="outline" className="text-base py-1.5 px-3">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
