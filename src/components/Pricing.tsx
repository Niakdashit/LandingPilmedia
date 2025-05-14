
import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  const plans = [
    {
      name: "Pack Essentiel",
      description: "L'offre parfaite pour démarrer avec le barter média",
      price: {
        monthly: "980",
        yearly: "9800",
      },
      popular: false,
      features: [
        "Échange de produits valorisés jusqu'à 5000€",
        "1 campagne interactive par trimestre",
        "Plan média digital uniquement",
        "Templates de base personnalisables",
        "Accès au dashboard de performance",
        "Support par email"
      ],
      cta: "Commencer"
    },
    {
      name: "Pack Autonome",
      description: "Accès complet à la plateforme pour créer vos campagnes",
      price: {
        monthly: "1490",
        yearly: "14900",
      },
      popular: true,
      features: [
        "Échange de produits valorisés jusqu'à 10000€",
        "Nombre illimité de campagnes",
        "Plan média digital + presse",
        "Accès à tous les templates premium",
        "Dashboard de performance avancé",
        "Support prioritaire"
      ],
      cta: "Choisir ce plan"
    },
    {
      name: "Pack Premium",
      description: "Solution complète clé en main pour un impact maximal",
      price: {
        monthly: "2490",
        yearly: "24900",
      },
      popular: false,
      features: [
        "Échange de produits valorisés jusqu'à 25000€",
        "Campagnes illimitées créées par nos experts",
        "Plan média multi-canal complet",
        "Designs sur mesure exclusifs",
        "Community management inclus",
        "Consultant dédié"
      ],
      cta: "Contacter un conseiller"
    }
  ];

  return (
    <section className="section-padding bg-white" id="tarifs">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tarifs transparents, sans surprise
          </h2>
          <p className="text-lg text-gray-700">
            Choisissez la formule adaptée à vos besoins et à votre niveau d'autonomie. Tous les prix affichés sont HT.
          </p>
        </div>
        
        <div className="flex justify-center mb-12 opacity-0 animate-fade-in animate-delay-100">
          <div className="bg-bg-light p-1 rounded-full flex items-center">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? "bg-white shadow-soft text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Mensuel
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly ? "bg-white shadow-soft text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Annuel <span className="text-green-600 text-xs">-15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border ${
                plan.popular ? "border-primary shadow-md" : "border-gray-100 shadow-soft"
              } relative opacity-0 animate-fade-in`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  Recommandé
                </div>
              )}
              <CardContent className="p-6 pt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-end">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">
                      {isYearly ? plan.price.yearly : plan.price.monthly}€
                    </span>
                    <span className="text-gray-600 ml-2 mb-1">
                      {isYearly ? "/an" : "/mois"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-green-600 text-sm mt-1">
                      Économisez {Math.round(Number(plan.price.monthly) * 12 * 0.15)}€ par an
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button
                  className={`w-full rounded-2xl py-6 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover"
                      : "bg-white border border-gray-300 hover:bg-gray-50 text-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-500">
          <p className="text-gray-600">
            Besoin d'une solution sur mesure ? <a href="#" className="text-primary font-medium underline">Contactez-nous</a> pour un plan personnalisé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
