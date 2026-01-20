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
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Real-time ML Platform",
      subtitle: "Intel • Sub-100ms latency",
      tags: ["Kafka", "Flink", "Feature Store"],
      size: "medium",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "DeepCompare",
      subtitle: "IEEE CG&A Publication",
      tags: ["Model Evaluation", "Visual Analytics"],
      size: "medium",
      link: "https://sugeerth.github.io/sugeerthML/Papers/deepcompare.pdf",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Video AI Pipeline",
      subtitle: "Samba TV • 4B+ features",
      tags: ["LSTM", "RocksDB"],
      size: "small",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Brain Modulyzer",
      subtitle: "Best Paper Award",
      tags: ["Neuroscience"],
      size: "small",
      link: "https://github.com/sugeerth/BrainModulyzer",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "View All",
      subtitle: "More projects",
      size: "small",
      isPlaceholder: true,
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
                    ${project.isPlaceholder ? "border-dashed flex items-center justify-center" : ""}
                  `}
                >
                  {project.isPlaceholder ? (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                        <ArrowUpRight size={20} className="text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">{project.title}</p>
                    </div>
                  ) : (
                    <>
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
                                className="text-xs bg-secondary/50"
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
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </>
                  )}
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
