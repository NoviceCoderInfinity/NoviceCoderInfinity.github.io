import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anupam.rawat.iitb@gmail.com",
    href: "mailto:anupam.rawat.iitb@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 89282 74275",
    href: "tel:+918928274275",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/NoviceCoderInfinity",
    username: "@NoviceCoderInfinity",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/anupamrawat001",
    username: "@anupamrawat001",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/_AnupamRawat_",
    username: "@_AnupamRawat_",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all hover:shadow-card group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all">
                    <contact.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <a
                    href={contact.href}
                    className="font-semibold hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card
            className="border-border/50 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-primary/5"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-6 w-6" />
                      <div className="text-center">
                        <p className="font-semibold">{social.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
