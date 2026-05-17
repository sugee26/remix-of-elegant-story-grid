const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Sugeerth Murugesan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
