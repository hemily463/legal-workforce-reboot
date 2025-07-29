import { Check, X, DollarSign } from "lucide-react";

const PricingSection = () => {
  const comparisonItems = [
    { feature: "Hourly Rate", local: "Starting at $35/hr", remote: "Starting at $15/hr" },
    { feature: "Eager To Work", local: false, remote: true },
    { feature: "Easy to Hire", local: false, remote: true },
    { feature: "Easy to Replace", local: false, remote: true },
    { feature: "Fully Managed", local: false, remote: true },
    { feature: "Benefits Included", local: false, remote: true },
    { feature: "No Insurance or Taxes", local: false, remote: true },
    { feature: "No Office Equipment", local: false, remote: true },
    { feature: "No Long Term Commitments", local: false, remote: true },
    { feature: "Scalable", local: false, remote: true }
  ];

  const noCosts = [
    "No Payroll Taxes",
    "No Retirement Benefits", 
    "No Unemployment Taxes",
    "No Workers Comp Insurance",
    "No Time Spent on HR",
    "No Office Space Costs",
    "No Recruiting Fees",
    "No Equipment Costs"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-screen-xl">
        {/* Pricing Hero */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Transparent pricing that saves you money
          </h2>
          <div className="bg-gradient-hero text-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-5xl font-bold mb-2">$15</div>
            <div className="text-xl mb-4">/hour</div>
            <ul className="text-left space-y-2 text-sm">
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Includes all HR & management fees
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                No commitment (month-to-month)
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Can replace staff at any time
              </li>
              <li className="flex items-center">
                <Check className="h-4 w-4 mr-2" />
                Bilingual staff available
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Local staff vs. remote legal staff
          </h3>
          <div className="bg-white rounded-xl shadow-card border border-border/50 overflow-hidden">
            <div className="grid grid-cols-3 bg-neutral-100">
              <div className="p-4 font-semibold text-center">Feature</div>
              <div className="p-4 font-semibold text-center border-l border-border">Local Staff</div>
              <div className="p-4 font-semibold text-center border-l border-border">Remote Staff</div>
            </div>
            {comparisonItems.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-t border-border">
                <div className="p-4 font-medium">{item.feature}</div>
                <div className="p-4 text-center border-l border-border">
                  {typeof item.local === 'string' ? (
                    <span className="text-destructive font-semibold">{item.local}</span>
                  ) : item.local ? (
                    <Check className="h-5 w-5 text-accent mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </div>
                <div className="p-4 text-center border-l border-border">
                  {typeof item.remote === 'string' ? (
                    <span className="text-accent font-semibold">{item.remote}</span>
                  ) : item.remote ? (
                    <Check className="h-5 w-5 text-accent mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-destructive mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Additional Costs */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Say goodbye to resources associated with in-house staff
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {noCosts.map((cost, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <X className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-medium text-center">{cost}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#candidates">
              <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
                View Candidates
              </button>
            </a>
            <a href="#contact">
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                Book Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;