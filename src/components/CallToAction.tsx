
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="section-padding bg-primary text-white" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Prêt à révolutionner votre marketing avec MediaBarter ?
            </h2>
            
            <p className="text-lg opacity-90">
              Prenez rendez-vous pour un audit gratuit et découvrez comment transformer vos produits en visibilité médiatique et campagnes interactives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-white text-primary hover:bg-gray-100 text-base md:text-lg px-8 py-6 rounded-2xl shadow-soft transition-all duration-200 flex items-center gap-2"
              >
                <Calendar size={18} />
                Réserver un audit gratuit
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 text-base md:text-lg px-8 py-6 rounded-2xl transition-all duration-200"
              >
                Voir une démo
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 opacity-0 animate-fade-in animate-delay-200">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Ce qui est inclus dans l'audit gratuit :</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Valorisation de vos produits/services</h4>
                    <p className="text-white/80 text-sm mt-1">
                      Estimation précise de la valeur média de votre stock disponible
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Analyse de vos besoins marketing</h4>
                    <p className="text-white/80 text-sm mt-1">
                      Identification des leviers d'acquisition pertinents pour votre activité
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Présentation des solutions MediaBarter</h4>
                    <p className="text-white/80 text-sm mt-1">
                      Démonstration de la plateforme et des templates disponibles
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Proposition de plan média personnalisé</h4>
                    <p className="text-white/80 text-sm mt-1">
                      Recommandations concrètes et estimation des résultats attendus
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Durée de l'audit</div>
                      <div className="text-sm text-white/80">45 minutes</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-medium">Valeur</div>
                    <div className="text-sm text-white/80"><s>450€</s> <span className="font-bold">Gratuit</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
