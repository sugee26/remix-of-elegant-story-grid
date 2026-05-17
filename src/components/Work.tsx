import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "LLM Recommendations",
      subtitle: "Intuit • 5M+ users • 10x revenue lift",
      tags: ["LangGraph", "PyTorch", "Tecton"],
      size: "large",
      gradient: "from-blue-400/15 to-purple-400/15",
    },
    {
      title: "Real-time ML Platform",
      subtitle: "Intel • Sub-100ms latency • 300+ models",
      tags: ["Kafka", "Flink", "Feature Store"],
      size: "medium",
      gradient: "from-cyan-400/15 to-blue-400/15",
    },
    {
      title: "Video AI Pipeline",
      subtitle: "Samba TV • 4B+ features • 50M+ devices",
      tags: ["LSTM", "RocksDB", "Spark"],
      size: "medium",
      gradient: "from-orange-400/15 to-red-400/15",
    },
    {
      title: "DeepCompare",
      subtitle: "IEEE CG&A Publication",
      tags: ["Model Evaluation", "Visual Analytics"],
      size: "small",
      link: "https://dl.acm.org/doi/10.1109/MCG.2019.2919033",
      gradient: "from-purple-400/15 to-pink-400/15",
    },
    {
      title: "Brain Modulyzer",
      subtitle: "Best Paper Award",
      tags: ["Neuroscience", "Open Source"],
      size: "small",
      link: "https://github.com/sugeerth/BrainModulyzer",
      gradient: "from-green-400/15 to-teal-400/15",
    },
    {
      title: "Walgreens ML",
      subtitle: "Personalized recommendations at scale",
      tags: ["A/B Testing", "Deep Learning"],
      size: "small",
      gradient: "from-rose-400/15 to-orange-400/15",
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Selected Work
          </h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => {
              const isLarge = project.size === "large";
              const isMedium = project.size === "medium";

              return (
                <Card
                  key={project.title}
                  className={`
                    relative overflow-hidden p-6 card-hover group cursor-pointer
                    ${isLarge ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                    ${isMedium ? "lg:row-span-1" : ""}
                  `}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`font-semibold mb-2 ${isLarge ? "text-2xl" : "text-lg"}`}>
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Link indicator */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
