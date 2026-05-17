import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/sugeerth-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-300/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-blue-300/15 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-border/50 shadow-lg">
              <img
                src={profilePhoto}
                alt="Sugeerth Murugesan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Label */}
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Staff ML Engineer
          </p>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">
            Sugeerth Murugesan
          </h1>

          {/* One liner */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building AI systems at scale. PhD UC Davis. 150+ citations. ICML & NeurIPS Reviewer.
          </p>

          {/* Action icons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { icon: FileText, href: import.meta.env.BASE_URL + "resume.pdf", label: "Resume" },
              { icon: Github, href: "https://github.com/sugeerth", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/sugeerth", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sugeerthmuru@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
