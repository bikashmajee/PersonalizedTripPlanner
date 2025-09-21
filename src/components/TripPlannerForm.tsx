import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Calendar, DollarSign, Heart, Sparkles } from "lucide-react";

const TripPlannerForm = () => {
  const [budget, setBudget] = useState([50000]);
  const [interests, setInterests] = useState<string[]>([]);

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interest]);
    } else {
      setInterests(interests.filter(i => i !== interest));
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Start Planning Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us your preferences and let AI craft the perfect journey for you
          </p>
        </div>

        <Card className="shadow-strong bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="text-accent" />
              Trip Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Destination */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-base font-semibold flex items-center gap-2">
                <MapPin className="text-primary w-4 h-4" />
                Where do you want to go?
              </Label>
              <Input 
                id="destination" 
                placeholder="e.g., Goa, Kerala, Rajasthan..." 
                className="text-lg py-6"
              />
            </div>

            {/* Budget Slider */}
            <div className="space-y-4">
              <Label className="text-base font-semibold flex items-center gap-2">
                <DollarSign className="text-travel-green w-4 h-4" />
                Budget: ₹{budget[0].toLocaleString()}
              </Label>
              <Slider
                value={budget}
                onValueChange={setBudget}
                max={200000}
                min={5000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹5,000</span>
                <span>₹2,00,000+</span>
              </div>
            </div>

            {/* Trip Duration */}
            <div className="space-y-2">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Calendar className="text-travel-teal w-4 h-4" />
                Trip Duration
              </Label>
              <Select>
                <SelectTrigger className="text-lg py-6">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekend">Weekend (2-3 days)</SelectItem>
                  <SelectItem value="week">1 Week</SelectItem>
                  <SelectItem value="two-weeks">2 Weeks</SelectItem>
                  <SelectItem value="month">1 Month</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Interests */}
            <div className="space-y-4">
              <Label className="text-base font-semibold flex items-center gap-2">
                <Heart className="text-accent w-4 h-4" />
                What interests you?
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "heritage", label: "Heritage" },
                  { id: "nightlife", label: "Nightlife" },
                  { id: "adventure", label: "Adventure" },
                  { id: "culture", label: "Culture" }
                ].map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <Checkbox 
                      id={interest.id}
                      checked={interests.includes(interest.id)}
                      onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                    />
                    <Label htmlFor={interest.id} className="font-medium cursor-pointer">
                      {interest.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">
                Preferred Language
              </Label>
              <Select>
                <SelectTrigger className="text-lg py-6">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">हिन्दी</SelectItem>
                  <SelectItem value="bengali">বাংলা</SelectItem>
                  <SelectItem value="tamil">தமிழ்</SelectItem>
                  <SelectItem value="telugu">తెలుగు</SelectItem>
                  <SelectItem value="marathi">मराठी</SelectItem>
                  <SelectItem value="gujarati">ગુજરાતી</SelectItem>
                  <SelectItem value="kannada">ಕನ್ನಡ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="accent" size="xl" className="w-full">
              Generate Itinerary
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TripPlannerForm;