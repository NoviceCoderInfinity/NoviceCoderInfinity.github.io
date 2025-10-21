import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const education = [
  {
    degree: "Bachelors + Masters in Electrical Engineering",
    school: "IIT Bombay",
    period: "2022 - 2027 (Dual Degree)",
    description:
      "While focusing on Electrical Engineering, I have developed a strong interest and skills in Artificial Intelligence and Machine Learning through various projects and coursework.",
    gpa: "3.2/4.0",
  },
  {
    degree: "Bachelor of Science in Data Science and Applications",
    school: "IIT Madras",
    period: "2023 - 2027",
    description:
      "Strong foundation in software engineering principles, data structures, ML algorithms, and projects.",
    gpa: "3.5/4.0",
  },
];

const coursework = [
  "Computer Graphics",
  "Advanced Computer Architecture",
  "Discrete Structures",
  "Advanced Machine Learning",
  "Digital Image Processing",
  "Analog & Digital Signal Processing",
  "Machine Learning for Remote Sensing",
  "Game Theory and Algorithmic Mechanism Design",
  "Data Structures and Algorithms",
  "App Development I & II",
  "Database Management Systems",
  "Electromagnetic Waves",
  "Communication Systems",
  "Automata Theory",
  "Electronic Devices & Circuits",
  "Control Systems",
  "Microprocessors",
  "Analog Circuits",
  "Digital Systems",
  "Signal Processing",
  "Probability and Random Processes",
  "Power Engineering",
  "Linear Algebra",
  "Differential Equations",
  "Calculus I & II",
];

const EducationPage = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10 opacity-40" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Education
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Academic background, qualifications, and relevant coursework
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Education Cards */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Degrees
                </h2>
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi animate-slide-in-left bg-gradient-card backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                          <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-1">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-semibold text-foreground">
                              {edu.school}
                            </span>{" "}
                            • {edu.period}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        {edu.description}
                      </p>
                      <p className="text-sm font-semibold">
                        GPA: <span className="text-primary">{edu.gpa}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Coursework Section */}
              <div
                className="animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-2xl font-semibold text-center mb-6">
                  Relevant Coursework
                </h2>
                <Card className="border-border/50 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center shadow-glow">
                        <BookOpen className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">
                        Academic Foundation
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {coursework.map((course, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-sm py-1.5 px-3 hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default"
                        >
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
      </main>
      <Footer />
    </div>
  );
};

export default EducationPage;
