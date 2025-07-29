import { DollarSign, UserX, Clock, Search, Building2, Users, Frown, Settings } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Cost Too Much",
      description: "Local staff salaries can drain your budget with high wages and benefits."
    },
    {
      icon: UserX,
      title: "Don't Stay Long",
      description: "High turnover rates lead to constant recruitment and training costs."
    },
    {
      icon: Clock,
      title: "Lack Legal Experience",
      description: "Most local candidates don't have specialized legal industry experience."
    },
    {
      icon: Search,
      title: "Hard To Find",
      description: "Quality legal staff are scarce and difficult to recruit locally."
    },
    {
      icon: Building2,
      title: "Require Office Space",
      description: "Additional overhead costs for workspace, equipment, and utilities."
    },
    {
      icon: Users,
      title: "Difficult To Manage",
      description: "Local employees often come with complex HR and management challenges."
    },
    {
      icon: Frown,
      title: "Feel Entitled",
      description: "Many local staff develop attitudes and unrealistic expectations."
    },
    {
      icon: Settings,
      title: "Need Constant HR",
      description: "Time-consuming HR tasks distract from growing your practice."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frustrated with local staff who...
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional hiring comes with hidden costs and endless headaches that drain your resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card border border-border/50 hover:shadow-legal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-destructive mb-6">
            ...and on top of all that, they cost a fortune!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#candidates">
              <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
                View Our Candidates
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

export default ProblemSection;