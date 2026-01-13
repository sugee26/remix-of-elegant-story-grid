import { Github, Linkedin, Mail, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sugeerthmuru@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "sugeerthmuru@gmail.com copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's talk
          </h2>

          {/* Email button */}
          <Button
            onClick={copyEmail}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 mb-8 group"
          >
            {copied ? (
              <>
                <Check size={18} className="mr-2 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Mail size={18} className="mr-2" />
                sugeerthmuru@gmail.com
                <Copy size={14} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </>
            )}
          </Button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/sugeerth", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/sugeerth", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
