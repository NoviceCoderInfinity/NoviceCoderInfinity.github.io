import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
            using React & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Anupam Rawat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
