
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "Comment fonctionne le barter média chez MediaBarter ?",
      answer:
        "Le barter média consiste à échanger vos produits ou services contre de la visibilité publicitaire. Nous valorisons vos actifs, créons un plan média personnalisé, puis diffusons vos campagnes sur nos médias partenaires. Vous suivez en temps réel l'utilisation de votre stock et la valeur média générée via votre tableau de bord dédié.",
    },
    {
      question: "Quels types de campagnes interactives puis-je créer ?",
      answer:
        "Notre plateforme no-code permet de créer facilement des quizz, jeux-concours, formulaires d'inscription, sondages et enquêtes satisfaction. Tous les templates sont personnalisables aux couleurs de votre marque et optimisés pour générer un maximum d'engagement et de leads qualifiés.",
    },
    {
      question: "Sur quels canaux médias seront diffusées mes campagnes ?",
      answer:
        "Selon votre formule, nous pouvons diffuser vos campagnes sur des médias digitaux (sites d'actualités, réseaux sociaux), de la presse écrite, de l'affichage digital extérieur (DOOH) et des plateformes vidéo. Chaque plan média est personnalisé selon vos objectifs et votre cible.",
    },
    {
      question: "Combien de produits dois-je échanger pour démarrer ?",
      answer:
        "Le montant minimal varie selon la formule choisie, mais notre pack Essentiel débute à partir de produits valorisés à 5000€. Cette valeur est déterminée lors de l'audit initial en fonction du prix de vente public de vos produits et de leur potentiel média.",
    },
    {
      question: "Comment mesurer le retour sur investissement de mes campagnes ?",
      answer:
        "Votre dashboard de performance vous donne accès à tous les KPIs pertinents : impressions, taux d'engagement, nombre de leads générés, taux de conversion et valeur média générée. Pour les formules Premium, nous fournissons également des rapports d'analyse mensuels avec recommandations d'optimisation.",
    },
    {
      question: "Puis-je utiliser la plateforme en autonomie ou avez-vous une offre clé en main ?",
      answer:
        "Nous proposons deux modes d'utilisation : autonome (vous gérez vous-même la création et le suivi des campagnes via notre plateforme) ou clé en main (nos experts s'occupent de tout). Vous pouvez choisir la formule qui correspond le mieux à vos ressources internes et à votre niveau d'expertise.",
    },
    {
      question: "MediaBarter est-il adapté pour les petites entreprises en transition digitale ?",
      answer:
        "Absolument ! Notre solution est particulièrement conçue pour les PME en transition digitale qui souhaitent développer leur présence en ligne sans mobiliser d'important budget publicitaire. Notre plateforme no-code et nos templates prêts à l'emploi permettent de créer des campagnes professionnelles sans compétence technique.",
    },
    {
      question: "Comment démarrer avec MediaBarter ?",
      answer:
        "Le processus est simple : prenez rendez-vous pour un audit gratuit, nous évaluons ensemble vos produits/services et définissons vos objectifs marketing. Nous élaborons ensuite un plan média et mettons en place votre première campagne interactive en moins de 15 jours.",
    },
  ];

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-700">
            Tout ce que vous devez savoir sur notre solution de barter média et nos campagnes interactives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in animate-delay-100">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-lg py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-200">
          <p className="text-lg text-gray-700">
            Vous avez d'autres questions ?
          </p>
          <a 
            href="#" 
            className="inline-block mt-2 text-primary font-medium hover:text-primary-hover transition-colors"
          >
            Consultez notre centre d'aide complet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
