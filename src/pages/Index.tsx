import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Metrics from "@/components/Metrics";
import Work from "@/components/Work";
import AlternativeWork from "@/components/AlternativeWork";
import Stack from "@/components/Stack";
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
      <AlternativeWork />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
