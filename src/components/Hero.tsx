import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-legal-team.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-legal-light-blue via-background to-neutral-50">
      <div className="container max-w-screen-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Staff your law firm with</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  expert legal professionals
                </span>{" "}
                <span className="text-foreground">starting at</span>{" "}
                <span className="text-accent font-extrabold">$15/hr</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                We connect U.S. law firms with highly qualified remote legal staff. 
                Reduce costs by 60% while maintaining exceptional quality and expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#candidates">
                <Button variant="hero" size="lg" className="group">
                  View Available Candidates
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">
                  Schedule Free Consultation
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Fully Managed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Month-to-Month</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-legal">
              <img
                src={heroImage}
                alt="Professional legal team working together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-legal-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-6 border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-legal-navy">500+</div>
                <div className="text-sm text-muted-foreground">Law Firms Served</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-card p-6 border border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">60%</div>
                <div className="text-sm text-muted-foreground">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;