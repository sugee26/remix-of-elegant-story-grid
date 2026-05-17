import { Github, Linkedin, Mail, FileText } from "lucide-react";
import profilePhoto from "@/assets/sugeerth-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(250 89% 55% / 0.07), transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-7">
          <div className="flex justify-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-border">
              <img
                src={profilePhoto}
                alt="Sugeerth Murugesan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Sugeerth Murugesan
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Staff ML Engineer building AI systems at scale. PhD, UC Davis. 150+ citations. ICML &amp; NeurIPS reviewer.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
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
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
