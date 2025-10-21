import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type ExperienceType = "corporate" | "research";

interface Experience {
  title: string;
  company: string;
  period: string;
  type: ExperienceType;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Undergraduate AI ML Intern",
    company: "Prof. Amit Sethi, MeDaL Lab, IIT Bombay",
    period: "Jul 2025 - Present",
    type: "research",
    description:
      "Working on calibrating large language models (LLMs) and Deep Learning models for generalization tasks in the medical domain, focusing on improving accuracy and reliability.",
    achievements: [
      "Conducting research on calibrating LLMs and Deep Learning models for medical applications",
      "Developing techniques to enhance model generalization and reliability in healthcare tasks",
      "Collaborating with a team of researchers to publish findings in reputed conferences",
    ],
  },
  {
    title: "AI ML Intern",
    company: "Wyzr Fintech",
    period: "May 2025 - Jul 2025",
    type: "corporate",
    description:
      "Designed and developed an LLM-powered transaction reconciliation system, achieving 33% higher accuracy, 93.84% faster response times, and robust failure recovery with optimized prompts and MongoDB integration.",
    achievements: [
      "Led the end-to-end design and development of an LLM-powered system to reconcile transactions",
      "Improved system efficiency by achieving 33% higher accuracy and 93.84% faster response times through optimized dynamic prompts, parallelized LLM querying, and schema validation",
      "Engineered robust failure recovery mechanisms with MongoDB and enhanced database schema",
    ],
  },
  {
    title: "Undergraduate AI ML Researcher",
    company: "Prof. Biplab Banerjee's Lab, IIT Bombay",
    period: "Spring 2025",
    type: "research",
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
    title: "Undergraduate AI ML Researcher",
    company: "Contactless Biometrics for UIDAI Aadhar",
    period: "Dec 2023 - Jul 2024",
    type: "corporate / research",
    description:
      "Developed Shearishlet, a ViT-compatible shearlet-based feature extractor and classifier achieving 97% deepfake detection accuracy, earning a Letter of Recommendation for outstanding performance.",
    achievements: [
      "Received a Letter of Recommendation for extraordinary performance",
      "Developed Shearishlet, an efficient ViT-compatible feature extraction using Shearlet wavelets",
      "Designed a robust wavelet-based classifier achieving 97% accuracy in detecting deepfakes, enhancing security in fingerprint SDKs by identifying subtle artifacts lost by traditional minutiae-based systems",
    ],
  },
];

const ExperiencePage = () => {
  const getTypeColor = (type: ExperienceType) => {
    return type === "research"
      ? "bg-gradient-accent text-white"
      : "bg-gradient-secondary text-white";
  };

  const getTypeLabel = (type: ExperienceType) => {
    return type === "research" ? "Research" : "Corporate";
  };

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10 opacity-40" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Experience
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My professional journey across corporate and research roles
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi animate-slide-in-left bg-gradient-card backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <CardTitle className="text-2xl">
                            {exp.title}
                          </CardTitle>
                          <Badge
                            className={`${getTypeColor(exp.type)} border-0`}
                          >
                            {getTypeLabel(exp.type)}
                          </Badge>
                        </div>
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
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
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
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
