import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    username: "@yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    username: "Anupam Rawat",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    username: "@yourusername",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-mesh -z-10 opacity-40" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
                Get In Touch
              </h1>
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
                    className="border-border/50 hover:border-primary/50 transition-all hover:shadow-glow-multi group animate-fade-in bg-gradient-card backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-multi transition-all">
                        <contact.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      <a
                        href={contact.href}
                        className="font-semibold hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent transition-all"
                      >
                        {contact.value}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card
                className="border-border/50 animate-fade-in bg-gradient-card backdrop-blur-sm"
                style={{ animationDelay: "0.3s" }}
              >
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6 text-center">
                    Connect With Me
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto py-4 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-gradient-primary/10"
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
                  className="bg-gradient-primary hover:shadow-glow-multi transition-all"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Me an Email
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
