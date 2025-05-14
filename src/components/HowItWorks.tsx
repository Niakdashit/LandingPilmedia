
import React from "react";
import { Check } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Audit et valorisation des actifs",
      description:
        "Nous analysons vos produits/services et déterminons leur valeur média. Définition conjointe de vos objectifs marketing et des KPIs.",
      highlights: ["Analyse de stock", "Valorisation média", "Définition des objectifs"]
    },
    {
      number: "02",
      title: "Plan média et création visuelle",
      description:
        "Création de votre plan média personnalisé et développement des créations visuelles pour votre campagne interactive.",
      highlights: ["Plan média multi-canal", "Designs premium", "Templates d'activation"]
    },
    {
      number: "03",
      title: "Diffusion et engagement",
      description:
        "Lancement de la campagne sur nos médias partenaires avec activation simultanée des quizz, jeux ou formulaires interactifs.",
      highlights: ["Diffusion média", "Animations interactives", "Optimisation en temps réel"]
    },
    {
      number: "04",
      title: "Reporting et optimisation",
      description:
        "Suivi détaillé des performances, gestion du stock échangé et optimisation continue pour maximiser vos résultats.",
      highlights: ["Dashboard temps réel", "Suivi du stock", "Optimisation continue"]
    }
  ];

  return (
    <section className="section-padding bg-bg-light" id="comment-ca-marche">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comment fonctionne MediaBarter?
          </h2>
          <p className="text-lg text-gray-700">
            Un processus simple et transparent pour transformer vos produits en visibilité médiatique et acquérir de nouveaux clients.
          </p>
        </div>

        <div className="space-y-8 md:space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number - visible on desktop, alternating left/right */}
              <div className={`hidden md:block md:col-span-1 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              
              {/* Content - alternating left/right on desktop */}
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-2'}`}>
                {/* Mobile number */}
                <div className="flex items-center gap-3 md:hidden">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                
                {/* Desktop title - only shown on desktop */}
                <h3 className="hidden md:block text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-700 mt-3 md:mt-0">
                  {step.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  {step.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-primary" />
                      <span className="text-gray-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Image - alternating left/right on desktop */}
              <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:order-last' : 'md:order-first'}`}>
                <div className="bg-white rounded-2xl shadow-soft p-4 aspect-video">
                  {/* This would be replaced with an actual image */}
                  <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Illustration {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
