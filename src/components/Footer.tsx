import { MapPin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Company": [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    "Support": [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Live Chat", href: "#" }
    ],
    "Legal": [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };

  return (
    <footer className="bg-travel-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-accent w-8 h-8" />
              <span className="text-2xl font-bold">TripAI</span>
            </div>
            <p className="text-white/80 mb-6">
              Your intelligent travel companion for unforgettable journeys across India and beyond.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@tripai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4 text-accent">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm">
              © 2024 TripAI. All rights reserved. Built with AI for modern travelers.
            </div>
            
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;