import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-bg-light to-bg pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transformez vos produits en visibilité médiatique premium
            </h1>

            <p className="text-lg md:text-xl text-gray-700">
              Échangez vos produits contre de l'espace publicitaire et boostez votre présence
              digitale avec notre solution complète de barter et d'activation interactive.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary-hover text-white text-base md:text-lg px-8 py-6 rounded-2xl shadow-soft transition-all duration-200 flex items-center gap-2">
                Demander une démo
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary-light/10 text-base md:text-lg px-8 py-6 rounded-2xl transition-all duration-200"
              >
                Comment ça marche
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-600 mb-3">Ils nous font confiance :</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="h-8 w-24 bg-gray-300 rounded-md opacity-70"></div>
                <div className="h-8 w-24 bg-gray-300 rounded-md opacity-70"></div>
                <div className="h-8 w-24 bg-gray-300 rounded-md opacity-70"></div>
                <div className="h-8 w-24 bg-gray-300 rounded-md opacity-70"></div>
              </div>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-in animate-delay-200">
            {/* ✅ Badges dans la section, en absolute */}
            <div className="absolute top-0 right-0 z-[50]">
              <div
                className="bg-white rounded-xl shadow-lg p-4 rotate-6 animate-bounce"
                style={{
                  animationDuration: "3s",
                  animationDelay: "0.5s",
                  animationIterationCount: "infinite",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    +
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Engagement</p>
                    <p className="text-lg font-bold text-gray-800">+127%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-0 z-[50]">
              <div
                className="bg-white rounded-xl shadow-lg p-4 -rotate-3 animate-bounce"
                style={{
                  animationDuration: "4s",
                  animationDelay: "1s",
                  animationIterationCount: "infinite",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-secondary h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    ↗
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Conversion</p>
                    <p className="text-lg font-bold text-gray-800">+48%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Mockup principal avec l'image réelle */}
            <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/mockups/formulaire.png"
                alt="Mockup formulaire"
                className="w-[65%] h-auto object-contain rounded-xl mx-auto"
              />
            </div>

            {/* Décors */}
            <div className="absolute top-1/4 right-0 translate-x-1/4 -translate-y-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 -translate-x-1/4 translate-y-1/4 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Séparateur bas en vague */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
