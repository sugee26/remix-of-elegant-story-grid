import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BookOpen, Award, ExternalLink } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Brain Modulyzer / NeuroCopilot",
      description: "Interactive visual exploration tool for functional brain connectivity analysis with 3D visualization and AI-powered insights",
      venue: "IEEE VIS 2015 • Best Paper Award • IEEE TCBB 2016",
      tags: ["Neuroscience", "Visual Analytics", "fMRI", "Graph Neural Networks"],
      links: {
        paper: "https://sugeerth.github.io/sugeerthML/Papers/brainmodulyzer.pdf",
        github: "https://github.com/sugee26/brainmodulyzer-web",
        web: "https://brainmodulyzer.onrender.com",
      },
      gradient: "from-green-500/20 to-teal-500/20",
      featured: true,
    },
    {
      title: "DeepCompare",
      description: "Visual comparison and analysis of deep learning model behaviors",
      venue: "IEEE Computer Graphics & Applications",
      tags: ["Deep Learning", "Model Evaluation", "Visual Analytics"],
      links: {
        paper: "https://sugeerth.github.io/sugeerthML/Papers/deepcompare.pdf",
      },
      gradient: "from-purple-500/20 to-pink-500/20",
      featured: true,
    },
    {
      title: "CCVis",
      description: "Visual analytics for understanding classifier behavior",
      venue: "EuroVis 2017",
      tags: ["Classification", "Visual Analytics"],
      links: {
        paper: "https://sugeerth.github.io/sugeerthML/Papers/ccvis.pdf",
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "ParaGlyder",
      description: "Visual analytics for temporal patterns in parallel coordinates",
      venue: "IEEE VAST 2014",
      tags: ["Temporal Data", "Parallel Coordinates"],
      links: {
        paper: "https://sugeerth.github.io/sugeerthML/Papers/paraglyder.pdf",
      },
      gradient: "from-orange-500/20 to-yellow-500/20",
    },
  ];

  return (
    <section id="research" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Research</h2>
            <p className="text-muted-foreground text-lg">
              Publications in visual analytics, machine learning, and neuroscience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <Card
                key={pub.title}
                className={`relative overflow-hidden p-6 card-hover group ${
                  pub.featured ? "md:col-span-1" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen size={18} className="text-muted-foreground" />
                      {pub.venue.includes("Best Paper") && (
                        <Award size={16} className="text-yellow-500" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      {pub.links.web && (
                        <a
                          href={pub.links.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent/30 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {pub.links.github && (
                        <a
                          href={pub.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-accent/30 transition-colors"
                          title="GitHub"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {pub.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mb-4">
                    {pub.venue}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {pub.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {pub.links.paper && (
                    <a
                      href={pub.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                    >
                      Read Paper <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
