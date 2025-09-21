import HeroSection from "@/components/HeroSection";
import TripPlannerForm from "@/components/TripPlannerForm";
import ItineraryPreview from "@/components/ItineraryPreview";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TripPlannerForm />
      <ItineraryPreview />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;