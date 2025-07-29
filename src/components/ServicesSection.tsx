import { 
  FileText, 
  Search, 
  Users, 
  Scale, 
  Laptop, 
  TrendingUp,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      tasks: [
        "Calendar and document management",
        "Client intake and processing", 
        "Billing and invoicing support",
        "Data entry and organization",
        "Meeting coordination",
        "Professional correspondence"
      ]
    },
    {
      icon: Search,
      title: "Research & Documentation",
      tasks: [
        "Comprehensive legal research",
        "Document drafting and review",
        "Proofreading and editing",
        "Citation verification",
        "Contract template creation",
        "Brief and memo preparation"
      ]
    },
    {
      icon: Users,
      title: "Client Relations",
      tasks: [
        "Case status updates",
        "Client relationship management",
        "Internal communication support",
        "Consultation scheduling",
        "Client inquiry handling",
        "Feedback collection and analysis"
      ]
    },
    {
      icon: Scale,
      title: "Legal Process Support",
      tasks: [
        "Electronic filing assistance",
        "Discovery management",
        "Trial preparation support",
        "Interview preparation",
        "Legal form completion",
        "Court correspondence"
      ]
    },
    {
      icon: Laptop,
      title: "Digital & Technology",
      tasks: [
        "Website content management",
        "Legal software support",
        "Digital file organization",
        "Technology troubleshooting",
        "Database management",
        "Email system administration"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      tasks: [
        "Marketing campaign support",
        "Social media management",
        "SEO and content creation",
        "Client testimonial collection",
        "Lead generation assistance",
        "Brand development support"
      ]
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What your remote legal staff can accomplish
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our qualified professionals can handle any legal or administrative task to help your firm operate more efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card border border-border/50 hover:shadow-legal transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-legal-navy to-legal-dark-navy rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">
                  {service.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {service.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#candidates">
              <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
                Browse Candidates
              </button>
            </a>
            <a href="#contact">
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                Schedule Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;