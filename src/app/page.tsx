import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import NewsSection from "@/components/NewsSection";
import CommunitySection from "@/components/CommunitySection";
import OurCultureSection from "@/components/OurCultureSection";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <NewsSection />
      <CommunitySection />
      <OurCultureSection />
    </main>
  );
}
