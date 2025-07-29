import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Martinez, Esq.",
      firm: "Martinez Immigration Law",
      practice: "Immigration Law",
      quote: "Legal Workforce Inc. made it possible for us to scale our operations without the overhead. Our remote paralegal has been incredible - professional, experienced, and cost-effective.",
      rating: 5
    },
    {
      name: "Sarah Thompson, Esq.",
      firm: "Thompson & Associates",
      practice: "Personal Injury Law",
      quote: "From client intake to legal research, our remote staff handles everything seamlessly. It's freed me up to focus on what generates revenue - practicing law.",
      rating: 5
    },
    {
      name: "Michael Chen, Esq.",
      firm: "Chen Family Law",
      practice: "Family Law",
      quote: "We saved 5-8 hours weekly on administrative tasks. The efficiency gains have been remarkable, and the quality of work exceeds our expectations.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez, Esq.",
      firm: "Rodriguez Criminal Defense",
      practice: "Criminal Defense",
      quote: "Before Legal Workforce Inc., I struggled to find qualified staff locally. Their candidates not only have law degrees but real legal experience that makes a difference.",
      rating: 5
    },
    {
      name: "James Wilson, Esq.",
      firm: "Wilson Estate Planning",
      practice: "Estate Planning",
      quote: "Our remote legal assistant has transformed our practice. Client communication, document prep, and scheduling - everything runs smoothly now.",
      rating: 5
    },
    {
      name: "Maria Garcia, Esq.",
      firm: "Garcia Business Law",
      practice: "Business Law",
      quote: "The cost savings alone justified the decision, but the quality and professionalism of our remote staff exceeded all expectations. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from law firm owners who have transformed their practices with our remote legal staff
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card border border-border/50 hover:shadow-legal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-accent mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-accent font-medium">
                  {testimonial.firm}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.practice}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
              View All Success Stories
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;