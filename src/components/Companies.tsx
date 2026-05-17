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
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground mb-10">
            Previously
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group relative h-7 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-auto max-w-[110px] object-contain filter grayscale opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-muted-foreground text-sm font-medium">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
