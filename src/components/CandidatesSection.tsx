import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const CandidatesSection = () => {
  const candidates = [
    {
      name: "Maria Rodriguez",
      role: "Legal Assistant",
      experience: "5+ years",
      education: "Paralegal Certificate",
      location: "Mexico",
      specialties: ["Document Review", "Client Communication", "Case Management"]
    },
    {
      name: "David Chen",
      role: "Paralegal",
      experience: "7+ years",
      education: "Bachelor of Laws",
      location: "Philippines",
      specialties: ["Legal Research", "Trial Preparation", "Contract Review"]
    },
    {
      name: "Sarah Johnson",
      role: "Case Manager",
      experience: "4+ years",
      education: "Legal Studies Degree",
      location: "Colombia",
      specialties: ["Client Intake", "Discovery Management", "Court Filing"]
    },
    {
      name: "Michael Thompson",
      role: "Legal Researcher",
      experience: "6+ years",
      education: "Juris Doctor",
      location: "India",
      specialties: ["Motions Drafting", "Legal Briefs", "Citation Review"]
    },
    {
      name: "Ana Martinez",
      role: "Intake Specialist",
      experience: "3+ years",
      education: "Business Administration",
      location: "Argentina",
      specialties: ["Client Screening", "Data Entry", "Appointment Scheduling"]
    },
    {
      name: "Robert Kim",
      role: "Executive Assistant",
      experience: "8+ years",
      education: "Legal Assistant Certificate",
      location: "South Korea",
      specialties: ["Calendar Management", "Email Handling", "Travel Coordination"]
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet some of our qualified candidates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced legal professionals ready to join your team and make an immediate impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card border border-border/50 hover:shadow-legal transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="h-12 w-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {candidate.name}
                  </h3>
                  <p className="text-accent font-medium">{candidate.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-accent" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-2 text-accent" />
                  {candidate.experience} experience
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-2 text-accent" />
                  {candidate.education}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-foreground mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-2 py-1 bg-legal-light-blue text-legal-navy text-xs rounded-md font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-legal transition-all hover:scale-105">
              View All Candidates
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;