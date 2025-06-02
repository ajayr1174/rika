import Hero from "@/components/sections/hero";
// import Products from '@/components/sections/products';
// import Features from '@/components/sections/features';
// import Standards from '@/components/sections/standards';
// import Training from '@/components/sections/training';
import CallToAction from "@/components/sections/call-to-action";
import UpcomingEvents from "@/components/sections/upcoming-event";
import MissionSection from "@/components/sections/mission";
import VisionSection from "@/components/sections/vision";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <VisionSection />
      <UpcomingEvents />
      {/* <Products />
      <Features />
      <Standards />
      <Training /> */}
      <CallToAction />
    </>
  );
}
