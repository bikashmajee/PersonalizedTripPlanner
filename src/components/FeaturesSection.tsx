import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Heart, 
  CreditCard, 
  Languages, 
  Bot,
  Sparkles
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Live Itinerary Updates",
      description: "Real-time adjustments based on weather, local events, and your preferences",
      gradient: "from-travel-blue to-primary"
    },
    {
      icon: Heart,
      title: "Personalized Suggestions", 
      description: "AI learns your style to recommend experiences you'll love",
      gradient: "from-accent to-travel-green"
    },
    {
      icon: CreditCard,
      title: "One-Click Booking & Secure Payment",
      description: "Book hotels, flights, and activities instantly with secure payments",
      gradient: "from-travel-teal to-travel-blue"
    },
    {
      icon: Languages,
      title: "Supports Multiple Indian Languages",
      description: "Plan your trip in Hindi, Bengali, Tamil, Telugu, and 8 more languages",
      gradient: "from-travel-green to-accent"
    },
    {
      icon: Bot,
      title: "Smart Travel Assistant",
      description: "24/7 AI companion for instant help, local tips, and emergency support",
      gradient: "from-primary to-travel-teal"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent w-6 h-6" />
            <h2 className="text-4xl font-bold text-foreground">
              Why Choose Our AI Travel Planner?
            </h2>
            <Sparkles className="text-accent w-6 h-6" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel planning with intelligent features designed for modern travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={idx} 
                className="group hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1M+", label: "Trips Planned" },
            { number: "50k+", label: "Happy Travelers" },
            { number: "500+", label: "Destinations" },
            { number: "12", label: "Languages" }
          ].map((stat, idx) => (
            <div key={idx} className="group hover:scale-105 transition-transform duration-200">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;