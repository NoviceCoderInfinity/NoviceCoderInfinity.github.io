import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI ML Intern",
    company: "Wyzr Fintech",
    period: "May 2025 - Jul 2025",
    description:
      "Designed and developed an LLM-powered transaction reconciliation system, achieving 33% higher accuracy, 93.84% faster response times, and robust failure recovery with optimized prompts and MongoDB integration.",
    achievements: [
      "Led the end-to-end design and development of an LLM-powered system to reconcile transactions",
      "Improved system efficiency by achieving 33% higher accuracy and 93.84% faster response times through optimized dynamic prompts, parallelized LLM querying, and schema validation",
      "Engineered robust failure recovery mechanisms with MongoDB and enhanced database schema",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "Prof. Biplab Banerjee's Lab, IIT Bombay",
    period: "Spring 2025",
    description:
      "Implemented the Query-Key Similarity (QKS) attention mechanism for multi-modal image-text alignment, improving zero-shot performance on NUS-WIDE and MLRSNet using a ViT-B/16 backbone and asymmetric loss.",
    achievements: [
      "Implemented the Query-Key Similarity (QKS) attention mechanism from the paper `Open Vocabulary Multi-Modal Knowledge Transfer` for multi-modal alignment of image and text embeddings",
      "Applied the model to large-scale datasets NUS-WIDE and MLRSNet, simulating generalized zero-shot",
      "Used a ViT-B/16 backbone with asymmetric loss, improving mAP and Precision@k on unseen classes",
      "Validated QKS generalization across web-image and remote-sensing domains for zero-shot classification",
    ],
  },
  {
    title: "Contactless Biometrics for UIDAI",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Developed Shearishlet, a ViT-compatible shearlet-based feature extractor and classifier achieving 97% deepfake detection accuracy, earning a Letter of Recommendation for outstanding performance.",
    achievements: [
      "Contributed to 3 major product releases",
      "Improved code quality through reviews",
      "Learned multiple tech stacks",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">
                        {exp.company}
                      </span>{" "}
                      • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Key Achievements:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
