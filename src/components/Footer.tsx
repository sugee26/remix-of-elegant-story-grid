const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sugeerth Murugesan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
