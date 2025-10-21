import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Fine-Tuning for Number Series Reasoning",
    subtitle: "AMD AI Sprint",
    date: "July 2025",
    description:
      "Fine-tuned Qwen3-4B to build a chat-based Q&A model for aptitude tasks on a custom dataset. Applied PEFT with LoRA for memory-efficient training and tracked the pipeline using wandb.",
    tags: ["Qwen3-4B", "PEFT", "LoRA", "wandb", "Fine-tuning"],
    github: "#",
    demo: "#",
  },
  {
    title: "Medusa's Speculative Decoding Framework",
    subtitle: "Course Project | Prof. Sunita Sarawagi",
    date: "Spring 2025",
    description:
      "Implemented Medusa's speculative decoding with multiple heads to enable parallel token generation. Reduced inference time and enhanced decoding speed using beam search over parallel probability distributions. Analyzed the impact of Medusa heads on translation quality and computational efficiency in LLMs.",
    tags: [
      "Speculative Decoding",
      "LLMs",
      "Beam Search",
      "Parallel Processing",
    ],
    github: "#",
    demo: "#",
  },
];

const hackathons = [
  {
    title: "Image Super Resolution for Gaming Applications",
    subtitle: "Kaggle Competition",
    rank: "Rank 4",
    date: "April 2025",
    description:
      "Developed a deep learning pipeline using the EDSR architecture to upscale images by 4×. Implemented EDSR++ with Charbonnier Loss, achieving better performance than RCAN and SwinIR. Integrated Mixed Precision Training (AMP) with multi-GPU support, improving perceptual quality.",
    tags: [
      "EDSR",
      "Deep Learning",
      "Image Super Resolution",
      "AMP",
      "Multi-GPU",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Qualcomm VisionX: Reflection Removal",
    subtitle: "Techfest Qualcomm Hackathon",
    rank: "Rank 4 / 150+ teams",
    date: "December 2024",
    description:
      "Built Transformer-based system using Cross-Scale Attention and Multi-Scale Fusion. Improved PSNR by 22% by deploying a triple-loss framework (GAN + perceptual + adversarial). Achieved SSIM 0.835 and robustness against MSE/LPIPS attacks, validating efficiency and quality.",
    tags: ["Transformer", "GAN", "Computer Vision", "PSNR", "SSIM"],
    github: "#",
    demo: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10 opacity-40" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Key Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Research and course projects in machine learning and natural
                language processing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi group animate-fade-in bg-gradient-card backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        {project.date}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:border-primary/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:border-primary/50"
                      >
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

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Competitions & Hackathons
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Competitive achievements in computer vision and deep learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {hackathons.map((hackathon, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi group animate-fade-in bg-gradient-card backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {hackathon.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium">
                          {hackathon.subtitle}
                        </p>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        {hackathon.date}
                      </Badge>
                    </div>
                    <div className="mb-2">
                      <Badge variant="default" className="bg-gradient-primary">
                        {hackathon.rank}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {hackathon.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hackathon.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:border-primary/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:border-primary/50"
                      >
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
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
