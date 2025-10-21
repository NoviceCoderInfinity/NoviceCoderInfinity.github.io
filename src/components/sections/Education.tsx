import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
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
                <p className="text-muted-foreground mb-2">{edu.description}</p>
                <p className="text-sm font-semibold">
                  GPA: <span className="text-primary">{edu.gpa}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
