import DashboardPreviewSection from "@/components/DashboardPreviewSection/DashboardPreviewSection";
import CommunicationSection from "@/components/landing-page/CommunicationSection/CommunicationSection";

import HeroSection from "@/components/landing-page/HeroSection/HeroSection";
import FeaturesSection from "@/components/landing-page/Overview/FeatureSection";



export default function Home() {
  return (<>
  <HeroSection/>
  <FeaturesSection/>
  <CommunicationSection/>
  <DashboardPreviewSection/>
  
  </>
  );
}
