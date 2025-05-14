
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      clientName: "TravelSense",
      sector: "Agence de voyage",
      image: "travel-agency",
      stats: {
        leads: "+145%",
        visibility: "+210%",
        roi: "3.8x"
      },
      quote: "MediaBarter nous a permis de troquer nos invendus contre des campagnes publicitaires ciblées qui ont transformé notre visibilité digitale.",
      author: "Marie Dupont, Directrice Marketing"
    },
    {
      clientName: "BistroFresh",
      sector: "Restauration",
      image: "restaurant",
      stats: {
        leads: "+92%",
        visibility: "+175%",
        roi: "2.5x"
      },
      quote: "Grâce aux quizz et jeux-concours personnalisés, nous avons constitué une base de données qualifiée tout en gagnant en notoriété.",
      author: "Thomas Martin, Gérant"
    },
    {
      clientName: "EcoBeauty",
      sector: "Cosmétiques bio",
      image: "cosmetics",
      stats: {
        leads: "+187%",
        visibility: "+240%",
        roi: "4.2x"
      },
      quote: "Le barter nous a permis de démocratiser notre marque sans impact sur notre trésorerie. Une solution parfaite pour notre croissance.",
      author: "Lucie Bernard, Fondatrice"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="section-padding bg-bg-light" id="cas-client">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ils ont transformé leur marketing avec MediaBarter
          </h2>
          <p className="text-lg text-gray-700">
            Découvrez comment des entreprises françaises ont boosté leur visibilité et acquis de nouveaux clients grâce à notre solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in animate-delay-100">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              {/* This would be replaced with actual image */}
              <div className="aspect-[4/3] bg-gray-200 rounded-xl mb-8 flex items-center justify-center text-gray-500">
                Image: {caseStudies[activeIndex].image}
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {caseStudies[activeIndex].stats.leads}
                  </div>
                  <div className="text-sm text-gray-600">Leads générés</div>
                </div>
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {caseStudies[activeIndex].stats.visibility}
                  </div>
                  <div className="text-sm text-gray-600">Visibilité</div>
                </div>
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {caseStudies[activeIndex].stats.roi}
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-soft transition-all duration-200">
                  Télécharger l'étude de cas complète
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <div className="relative bg-white rounded-2xl shadow-soft p-6 md:p-8">
              <svg 
                className="absolute top-8 left-8 text-bg-dark opacity-50" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M10 11C10 12.1046 9.10457 13 8 13C6.89543 13 6 12.1046 6 11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11Z" 
                  fill="currentColor"
                />
                <path 
                  d="M18 11C18 12.1046 17.1046 13 16 13C14.8954 13 14 12.1046 14 11C14 9.89543 14.8954 9 16 9C17.1046 9 18 9.89543 18 11Z" 
                  fill="currentColor"
                />
                <path 
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
              
              <div className="pl-10 pt-10">
                <blockquote className="text-lg md:text-xl text-gray-800 italic mb-6">
                  "{caseStudies[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">
                    {caseStudies[activeIndex].author}
                  </div>
                  <div className="text-gray-600">
                    {caseStudies[activeIndex].clientName} - {caseStudies[activeIndex].sector}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index}
                  className={`flex-1 cursor-pointer transition-all ${
                    activeIndex === index 
                      ? "border-primary shadow-md" 
                      : "border-gray-100 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900">{study.clientName}</h3>
                    <p className="text-gray-600 text-sm">{study.sector}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ils nous font confiance
              </h3>
              
              <div className="flex flex-wrap gap-4 items-center">
                {/* These would be replaced with actual client logos */}
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="h-10 w-20 bg-gray-200 rounded-md"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
