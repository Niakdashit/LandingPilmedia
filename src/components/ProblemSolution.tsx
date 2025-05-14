
import React from "react";
import { CheckCircle, Zap } from "lucide-react";

const ProblemSolution: React.FC = () => {
  return (
    <section className="section-padding bg-white" id="probleme-solution">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Les défis marketing des PME françaises
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-red-500 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Budget publicitaire limité</h3>
                  <p className="text-gray-700 mt-1">
                    Les coûts médias traditionnels sont prohibitifs pour les PME souhaitant développer leur notoriété.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-red-500 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Manque de visibilité digitale</h3>
                  <p className="text-gray-700 mt-1">
                    Difficile de se démarquer face aux grands groupes sur les canaux digitaux et traditionnels.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-red-500 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Complexité technique</h3>
                  <p className="text-gray-700 mt-1">
                    Les solutions marketing digitales exigent des compétences techniques que les PME ne possèdent pas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-red-500 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">ROI difficile à mesurer</h3>
                  <p className="text-gray-700 mt-1">
                    Le retour sur investissement des campagnes marketing reste souvent flou et difficile à quantifier.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Notre solution : MediaBarter 360°
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-500 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Échangez vos produits contre de la publicité</h3>
                  <p className="text-gray-700 mt-1">
                    Transformez votre stock en visibilité média premium sans impact sur votre trésorerie.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-500 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Plateforme no-code d'activation</h3>
                  <p className="text-gray-700 mt-1">
                    Créez vos quizz, jeux-concours et formulaires sans compétence technique.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-500 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Visibilité multi-canal</h3>
                  <p className="text-gray-700 mt-1">
                    Bénéficiez d'un plan média complet : presse, digital, affichage extérieur et réseaux sociaux.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 text-green-500 flex-shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-gray-900">Transparence totale</h3>
                  <p className="text-gray-700 mt-1">
                    Suivez précisément l'utilisation de votre stock et la valeur média générée en temps réel.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex">
                <a 
                  href="#fonctionnalites" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
                >
                  Découvrir toutes nos fonctionnalités
                  <Zap size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
