import Hero from "@/components/sections/hero";
// import Products from '@/components/sections/products';
// import Features from '@/components/sections/features';
// import Standards from '@/components/sections/standards';
// import Training from '@/components/sections/training';
import UpcomingEvents from "@/components/sections/upcoming-event";
import MissionSection from "@/components/sections/mission";
import VisionSection from "@/components/sections/vision";
import ContactSection from "@/components/sections/contactus";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <VisionSection />
      <UpcomingEvents />
      <ContactSection />
      
    </>
  );
}
