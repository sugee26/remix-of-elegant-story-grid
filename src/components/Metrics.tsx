const Metrics = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "5M+", label: "Users Served" },
    { value: "150+", label: "Citations" },
    { value: "10x", label: "Revenue Impact" },
  ];

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
