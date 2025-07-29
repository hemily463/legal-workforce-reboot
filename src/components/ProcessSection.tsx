import { Phone, Users, Play, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Phone,
      title: "Schedule Consultation",
      description: "Book a call with our team to discuss your specific staffing needs and requirements."
    },
    {
      icon: Users,
      title: "Review Candidates",
      description: "Interview 3-5 pre-screened candidates that match your qualifications and preferences."
    },
    {
      icon: Play,
      title: "Staff Starts Working",
      description: "Your chosen professional begins working under our full management and supervision."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How remote legal staffing works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets you working with qualified legal professionals in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-legal">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-legal-navy font-bold text-sm">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-legal-navy to-neutral-300 -translate-x-1/2 z-0"></div>
                )}
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#candidates">
              <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
                View Available Candidates
              </button>
            </a>
            <a href="#contact">
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                Schedule Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;