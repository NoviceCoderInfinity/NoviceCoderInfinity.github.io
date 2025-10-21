import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "C",
      "C++",
      "Embedded C",
      "JavaScript",
      "Assembly",
      "VHDL",
      "HTML",
      "CSS",
      "MySQL",
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "SciKit-Learn",
      "OpenCV",
      "NLTK",
      "SpaCy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Software & Development Tools",
    skills: [
      "Git",
      "Linux",
      "Arduino",
      "Keil",
      "Quartus",
      "MATLAB",
      "Spice",
      "MS Office",
      "LATEX",
      "Figma",
    ],
  },
  {
    category: "Hardware & Embedded Systems",
    skills: [
      "Arduino",
      "Embedded C",
      "VHDL",
      "CAD",
      "Quartus",
      "Keil",
      "Assembly",
      "Spice",
    ],
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10 opacity-40" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Technical Skills
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Expertise in machine learning, deep learning, embedded systems,
                and software development
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi animate-fade-in bg-gradient-card backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        {category.category}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default text-sm py-1.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
