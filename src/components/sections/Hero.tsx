import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import resumePDF from "@/AnupamRawatResume.pdf";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Space_Grotesk']">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Anupam Rawat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              AI/ML Researcher | Deep Learning Engineer | Computer Vision
              Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about advancing machine learning through research and
              innovation. Specialized in large language models, computer vision,
              and building scalable AI systems that solve real-world problems in
              healthcare, fintech, and beyond.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary"
                asChild
              >
                <a href={resumePDF} download="AnupamRawat_Resume.pdf">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
