import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach to problem-solving and development",
  },
  {
    icon: Trophy,
    title: "Goal-Oriented",
    description: "Focused on delivering high-quality results on time",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm currently a pre-final year Electrical Engineering undergrad at
            IIT Bombay. My field of work primarily includes Artificial
            Intelligence and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
