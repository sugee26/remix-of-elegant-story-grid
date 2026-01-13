import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Stack = () => {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "JAX", icon: "⚡" },
    { name: "Spark", icon: "✨" },
    { name: "Kafka", icon: "📨" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "AWS", icon: "☁️" },
    { name: "LangChain", icon: "🔗" },
    { name: "HuggingFace", icon: "🤗" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section id="stack" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Stack
          </h2>

          {/* Icon grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="aspect-square rounded-xl bg-card border border-border/50 flex items-center justify-center text-3xl md:text-4xl hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 cursor-default card-hover">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
