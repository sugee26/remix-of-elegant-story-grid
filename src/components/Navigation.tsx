import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = ["work", "stack", "contact"];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="glass rounded-full px-6 py-3">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-semibold text-gradient"
          >
            SM
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                {item}
              </button>
            ))}
            <a
              href="https://github.com/sugeerth/BrainModulyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Brain size={14} />
              BrainModulyzer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 glass rounded-xl p-4 min-w-[150px]">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize text-left px-2 py-1"
              >
                {item}
              </button>
            ))}
            <a
              href="https://github.com/sugeerth/BrainModulyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              <Brain size={14} />
              BrainModulyzer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
