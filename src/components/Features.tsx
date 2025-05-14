
import React from "react";
import { Calendar, BarChart, Layout, Search, ZoomIn, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Barter média transparent",
      description:
        "Échangez vos produits contre des espaces publicitaires. Suivez l'utilisation de votre stock et la valeur média en temps réel dans un dashboard dédié.",
    },
    {
      icon: <ZoomIn className="h-8 w-8 text-primary" />,
      title: "Créateur de campagnes no-code",
      description:
        "Créez facilement des quizz, jeux-concours et formulaires personnalisés sans aucune connaissance technique. Interface intuitive avec templates premium.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Visuels et templates premium",
      description:
        "Bénéficiez de designs professionnels 100% personnalisés aux couleurs de votre marque. Des visuels optimisés pour tous les formats médias.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Dashboard de performance",
      description:
        "Analysez précisément le ROI de vos campagnes : visibilité, engagement, leads générés et conversions. Optimisez en continu vos actions marketing.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Animation de communauté",
      description:
        "Option de gestion complète de vos réseaux sociaux par nos experts. Création de contenu, modération et analyses de performance mensuelles.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Modes flexibles",
      description:
        "Choisissez entre une gestion autonome avec notre plateforme ou une solution clé en main gérée par nos experts. Adaptez selon vos besoins.",
    },
  ];

  return (
    <section className="section-padding bg-white" id="fonctionnalites">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Une solution marketing complète pour les PME
          </h2>
          <p className="text-lg text-gray-700">
            MediaBarter combine l'échange de produits contre des médias avec des outils d'activation interactifs pour maximiser votre impact marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-soft hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="h-14 w-14 bg-bg-light rounded-2xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
