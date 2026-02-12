import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EarlyEducationSection from "@/components/sections/EarlyEducationSection";
import AdultEducationSection from "@/components/sections/AdultEducationSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EarlyEducationSection />
        <AdultEducationSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
