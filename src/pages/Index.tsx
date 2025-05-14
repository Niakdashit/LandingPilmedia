
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";

const Index = () => {
  // Set document title for SEO
  React.useEffect(() => {
    document.title = "MediaBarter - Transformez vos produits en visibilité médiatique";
  }, []);
  
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Pricing />
        <CaseStudies />
        <Faq />
        <BlogPreview />
        <CallToAction />
      </main>
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
