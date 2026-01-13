import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Companies />
      <Metrics />
      <Work />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
