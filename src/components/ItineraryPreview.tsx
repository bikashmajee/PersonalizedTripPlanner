import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Sun, 
  CloudRain, 
  Calendar,
  Camera,
  Utensils,
  Mountain
} from "lucide-react";

const ItineraryPreview = () => {
  const itineraryDays = [
    {
      day: 1,
      date: "March 15, 2024",
      weather: { icon: Sun, temp: "28°C", desc: "Sunny" },
      activities: [
        {
          time: "9:00 AM",
          title: "Explore Old Goa Churches",
          location: "Basilica of Bom Jesus",
          type: "Heritage",
          duration: "2 hours",
          icon: Camera
        },
        {
          time: "12:00 PM", 
          title: "Traditional Goan Lunch",
          location: "Fisherman's Wharf",
          type: "Food",
          duration: "1.5 hours",
          icon: Utensils
        },
        {
          time: "3:00 PM",
          title: "Beach Time at Calangute",
          location: "Calangute Beach",
          type: "Relaxation",
          duration: "3 hours",
          icon: Sun
        }
      ]
    },
    {
      day: 2,
      date: "March 16, 2024", 
      weather: { icon: Sun, temp: "30°C", desc: "Partly Cloudy" },
      activities: [
        {
          time: "8:00 AM",
          title: "Dudhsagar Falls Trek",
          location: "Dudhsagar Waterfalls",
          type: "Adventure", 
          duration: "6 hours",
          icon: Mountain
        },
        {
          time: "6:00 PM",
          title: "Spice Plantation Tour",
          location: "Tropical Spice Plantation",
          type: "Culture",
          duration: "2 hours", 
          icon: Camera
        }
      ]
    },
    {
      day: 3,
      date: "March 17, 2024",
      weather: { icon: CloudRain, temp: "26°C", desc: "Light Rain" },
      activities: [
        {
          time: "10:00 AM",
          title: "Panaji City Walk",
          location: "Fontainhas Latin Quarter",
          type: "Heritage",
          duration: "3 hours",
          icon: MapPin
        },
        {
          time: "2:00 PM",
          title: "River Cruise & Lunch",
          location: "Mandovi River",
          type: "Relaxation",
          duration: "4 hours",
          icon: Utensils
        }
      ]
    }
  ];

  const typeColors = {
    "Heritage": "bg-travel-blue text-white",
    "Food": "bg-accent text-white", 
    "Relaxation": "bg-travel-teal text-white",
    "Adventure": "bg-travel-green text-white",
    "Culture": "bg-primary text-white"
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your AI-Generated Itinerary
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            3-Day Goa Adventure • Heritage • Culture • Relaxation
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2 border-accent text-accent">
            Sample Itinerary
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {itineraryDays.map((day) => {
            const WeatherIcon = day.weather.icon;
            
            return (
              <Card key={day.day} className="shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary">
                        Day {day.day}
                      </CardTitle>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {day.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-travel-blue">
                        <WeatherIcon className="w-5 h-5" />
                        <span className="font-semibold">{day.weather.temp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{day.weather.desc}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {day.activities.map((activity, idx) => {
                    const ActivityIcon = activity.icon;
                    
                    return (
                      <div key={idx} className="border-l-4 border-accent/30 pl-4 pb-4 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <ActivityIcon className="w-4 h-4 text-accent" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm font-medium text-primary">
                                {activity.time}
                              </span>
                              <Badge 
                                className={`text-xs ${typeColors[activity.type as keyof typeof typeColors]}`}
                              >
                                {activity.type}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {activity.title}
                            </h4>
                            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                              <MapPin className="w-3 h-3" />
                              {activity.location}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">
                                {activity.duration}
                              </span>
                              <Button variant="travel" size="sm">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Customize This Itinerary
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPreview;