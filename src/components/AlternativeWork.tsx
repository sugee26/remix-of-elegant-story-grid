import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AlternativeWork = () => {
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      title: "DeepCompare",
      subtitle: "IEEE Computer Graphics & Applications, 2019",
      description: "Visual and interactive comparison of deep learning model performance across architectures and datasets.",
      tags: ["Deep Learning", "Visual Analytics"],
      link: "https://doi.org/10.1109/MCG.2019.2919033",
      gradient: "from-purple-400/15 to-pink-400/15",
    },
    {
      title: "Brain Modulyzer",
      subtitle: "IEEE/ACM TCBB, 2016",
      description: "Interactive visual analysis tool for functional brain connectivity, integrating correlation matrices with anatomical views.",
      tags: ["Neuroscience", "IEEE/ACM TCBB"],
      link: "https://doi.org/10.1109/TCBB.2016.2564970",
      gradient: "from-green-400/15 to-teal-400/15",
    },
    {
      title: "NetoStat",
      subtitle: "Cluster Computing, 2022",
      description: "Analyzing dynamic flow patterns in high-speed networks at Lawrence Berkeley National Lab.",
      tags: ["Network Analysis", "HPC"],
      link: "https://doi.org/10.1007/s10586-022-03543-0",
      gradient: "from-cyan-400/15 to-blue-400/15",
    },
    {
      title: "BrainKDD Best Paper",
      subtitle: "ACM-BCB, 2016",
      description: "Hierarchical spatio-temporal visual analysis of cluster evolution in electrocorticography data.",
      tags: ["Best Paper", "Spatio-Temporal"],
      link: "https://doi.org/10.1145/2975167.2985688",
      gradient: "from-amber-400/15 to-orange-400/15",
    },
  ];

  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm tracking-widest uppercase">
              Research & Publications
            </span>
            {expanded ? (
              <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          {/* Google Scholar link */}
          <div className={`text-center transition-all duration-300 ${expanded ? "mt-2 opacity-100" : "mt-0 opacity-0"}`}>
            <a
              href="https://scholar.google.com/citations?user=Ki9alDwAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline"
            >
              View all on Google Scholar
            </a>
          </div>

          {/* Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 overflow-hidden ${
              expanded ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {projects.map((project) => (
              <Card
                key={project.title}
                className="relative overflow-hidden p-6 card-hover group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                    <p className="text-accent text-xs font-medium mb-2">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeWork;
