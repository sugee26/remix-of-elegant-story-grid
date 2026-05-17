const Metrics = () => {
  const stats = [
    { value: "8+", label: "Years" },
    { value: "5M+", label: "Users served" },
    { value: "150+", label: "Citations" },
    { value: "10x", label: "Revenue lift" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground tracking-wide">
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
