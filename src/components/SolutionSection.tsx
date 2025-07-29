import { 
  DollarSign, 
  Zap, 
  Clock, 
  Globe, 
  Shield, 
  Users, 
  CheckCircle, 
  TrendingDown,
  Smile,
  UserCheck
} from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Efficient",
      description: "Hire experienced legal professionals at 60% less than local rates"
    },
    {
      icon: TrendingDown,
      title: "No Hidden Costs",
      description: "Transparent flat rate with no taxes, benefits, or surprise fees"
    },
    {
      icon: Zap,
      title: "Quick Placement",
      description: "Find and onboard qualified staff in as little as one week"
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access to skilled professionals worldwide with legal expertise"
    },
    {
      icon: Shield,
      title: "Zero Interruptions",
      description: "Work distraction-free with dedicated remote professionals"
    },
    {
      icon: Users,
      title: "Full HR Management",
      description: "We handle payroll, benefits, performance reviews, and more"
    },
    {
      icon: CheckCircle,
      title: "Easy Replacement",
      description: "Unsatisfied? We'll find you new staff at no additional cost"
    },
    {
      icon: UserCheck,
      title: "Reduced Liability",
      description: "Minimize employment risks with our managed staffing solution"
    },
    {
      icon: Smile,
      title: "Positive Culture",
      description: "Work with grateful, motivated professionals who value their roles"
    },
    {
      icon: Clock,
      title: "No Office Politics",
      description: "Enjoy a drama-free work environment focused on results"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Remote legal staff can revolutionize your practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your firm with cost-effective, experienced professionals who are ready to contribute from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-legal transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 bg-gradient-to-br from-legal-navy to-legal-dark-navy rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
              View Available Candidates
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;