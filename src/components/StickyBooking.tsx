
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const StickyBooking: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 z-40 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto py-3 px-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="hidden md:block">
            <span className="text-gray-800 font-medium">Prêt à booster votre visibilité ?</span>
            <span className="text-gray-600 ml-2">Réservez votre audit gratuit maintenant</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <Button
            className="bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-soft transition-all duration-200 flex items-center gap-2"
          >
            <Calendar size={16} />
            Réserver un audit gratuit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBooking;
