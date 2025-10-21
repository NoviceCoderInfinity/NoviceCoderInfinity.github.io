import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent font-['Space_Grotesk']"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`text-foreground/70 hover:text-foreground transition-colors ${
                  location.pathname === item.href ? "text-foreground font-semibold" : ""
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`w-full justify-start text-left py-3 ${
                  location.pathname === item.href ? "text-foreground font-semibold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
