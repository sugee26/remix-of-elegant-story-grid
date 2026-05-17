const Companies = () => {
  const companies = [
    { name: "Intuit", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Intuit_Logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" },
    { name: "Walgreens", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Walgreens_2020_primary_logo.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" },
    { name: "Samba TV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Samba_TV_Wordmark_Red.svg" },
    { name: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" },
    { name: "Berkeley Lab", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg" },
  ];

  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-center text-sm tracking-widest uppercase text-muted-foreground mb-12">
            Where I've Built
          </h2>

          {/* Logos row */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group relative h-8 w-24 md:w-28 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-center text-muted-foreground text-sm mt-12">
            8+ years shipping ML systems serving millions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
