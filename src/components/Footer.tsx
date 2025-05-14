
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 px-4 md:px-6">
          <div>
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-white">
                MediaBarter
              </a>
              <p className="mt-3 text-gray-300">
                Transformez vos produits en visibilité médiatique et campagnes interactives.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-gray-400" />
                <span className="text-gray-300">contact@mediabarter.fr</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 text-gray-400" />
                <span className="text-gray-300">01 23 45 67 89</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-gray-400" />
                <span className="text-gray-300">15 Rue du Barter, 75008 Paris</span>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65687 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9304 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3C5.239 3 3 5.239 3 8V16C3 18.761 5.239 21 8 21H16C18.761 21 21 18.761 21 16V8C21 5.239 18.761 3 16 3H8ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.5583 6.80773 4.24665 5.75097 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17869 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.345 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.264 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.23009 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#fonctionnalites" className="text-gray-300 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#comment-ca-marche" className="text-gray-300 hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#tarifs" className="text-gray-300 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#cas-client" className="text-gray-300 hover:text-white transition-colors">Études de cas</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Ressources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guide du barter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Templates marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Études de marché</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partenaires médias</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Recevez nos derniers conseils et actualités sur le barter média.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-800 w-full px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-primary text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white w-full py-2 rounded-lg transition-colors duration-200"
              >
                S'inscrire
              </button>
            </form>
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5CAA48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11.5L11 14.5L16 9.5" stroke="#5CAA48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-300 text-sm">Barter 100% transparent</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5CAA48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11.5L11 14.5L16 9.5" stroke="#5CAA48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-300 text-sm">Conforme RGPD</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 MediaBarter. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Politique des cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
