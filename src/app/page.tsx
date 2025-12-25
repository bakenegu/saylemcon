import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";
import CommunitySection from "@/components/CommunitySection";
import OurCultureSection from "@/components/OurCultureSection";
import OurServicesSection from "@/components/OurServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <CommunitySection />
      <OurCultureSection />
      <OurServicesSection />
      <Footer />
    </main>
  );
}
