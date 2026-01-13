import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/sugeerth/BrainModulyzer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Brain size={16} />
            BrainModulyzer - Interactive Visual Analysis of Brain Connectivity
          </a>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sugeerth Murugesan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
