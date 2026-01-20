import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowUpRight } from "lucide-react";

const PrivateProjects = () => {
  const projects = [
    {
      title: "Enterprise ML Platform",
      description: "Internal machine learning infrastructure powering production models",
      tags: ["MLOps", "Kubernetes", "Feature Store"],
      status: "Active",
      gradient: "from-slate-500/20 to-zinc-500/20",
    },
    {
      title: "Recommendation Engine v3",
      description: "Next-generation personalization system with real-time inference",
      tags: ["LLM", "Embeddings", "A/B Testing"],
      status: "Active",
      gradient: "from-indigo-500/20 to-slate-500/20",
    },
    {
      title: "Data Quality Framework",
      description: "Automated data validation and monitoring for ML pipelines",
      tags: ["Data Engineering", "Monitoring"],
      status: "Shipped",
      gradient: "from-zinc-500/20 to-neutral-500/20",
    },
  ];

  return (
    <section id="private-projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Lock size={20} className="text-muted-foreground" />
              <h2 className="text-4xl md:text-5xl font-bold">Private Projects</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Internal and proprietary work (details available upon request)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="relative overflow-hidden p-6 card-hover group border-dashed"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Lock size={16} className="text-muted-foreground/50" />
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
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
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Interested in learning more?{" "}
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Get in touch <ArrowUpRight size={12} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateProjects;
