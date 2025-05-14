
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      title: "Comment valoriser efficacement vos produits en barter média",
      excerpt: "Découvrez les meilleures pratiques pour maximiser la valeur de vos produits lors d'opérations de barter média et optimiser votre ROI.",
      category: "Guide Barter",
      date: "14 Mai 2025",
      image: "barter-guide"
    },
    {
      title: "5 tendances de gamification marketing à suivre en 2025",
      excerpt: "Analyse des dernières innovations en matière de gamification marketing pour engager votre audience et collecter des données qualifiées.",
      category: "Tendances",
      date: "07 Mai 2025",
      image: "gamification"
    },
    {
      title: "Cas d'étude: Comment TravelSense a triplé son audience avec le barter",
      excerpt: "Découvrez comment une agence de voyage traditionnelle a réussi sa transition digitale grâce au barter média et aux campagnes interactives.",
      category: "Cas Client",
      date: "02 Mai 2025",
      image: "case-study"
    }
  ];

  return (
    <section className="section-padding" id="blog">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 opacity-0 animate-fade-in">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Ressources et actualités
            </h2>
            <p className="text-lg text-gray-700">
              Nos derniers articles et guides sur le barter et le marketing interactif
            </p>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors"
          >
            Voir tous les articles
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 shadow-soft overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* This would be replaced with actual image */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500">
                Image: {post.image}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="px-0 text-primary hover:text-primary-hover">
                  Lire l'article
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
