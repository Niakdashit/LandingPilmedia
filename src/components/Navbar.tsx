
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            MediaBarter
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#fonctionnalites"
              className="text-gray-800 hover:text-primary transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#comment-ca-marche"
              className="text-gray-800 hover:text-primary transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#tarifs"
              className="text-gray-800 hover:text-primary transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#cas-client"
              className="text-gray-800 hover:text-primary transition-colors"
            >
              Études de cas
            </a>
            <Button
              className="bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-soft transition-all duration-200"
            >
              Demander une démo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full py-4 px-4 shadow-md animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#fonctionnalites"
                className="text-gray-800 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#comment-ca-marche"
                className="text-gray-800 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comment ça marche
              </a>
              <a
                href="#tarifs"
                className="text-gray-800 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </a>
              <a
                href="#cas-client"
                className="text-gray-800 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Études de cas
              </a>
              <Button
                className="bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-soft w-full transition-all duration-200"
              >
                Demander une démo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
