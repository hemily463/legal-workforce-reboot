import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CandidatesSection from "@/components/CandidatesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="problems"><ProblemSection /></section>
        <section id="solutions"><SolutionSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="process"><ProcessSection /></section>
        <section id="candidates"><CandidatesSection /></section>
        <section id="pricing"><PricingSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="contact"><Footer /></section>
      </main>
    </div>
  );
};

export default Index;
