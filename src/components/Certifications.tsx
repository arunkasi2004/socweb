import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2 } from "lucide-react";
import pikachu from "@/assets/pikachu.png";
import gengar from "@/assets/gengar.png";

const certifications = [
  {
    name: "Microsoft Azure Security Engineer Associate (AZ-500)",
    issuer: "Microsoft",
    date: "Oct 2025",
    credential: "Credential ID: 77F662A7540EE0FF | Certification: CAB535-E5AD2C",
    description: "Advanced certification validating expertise in implementing security controls, maintaining security posture, and managing identity and access in Azure.",
    skills: [
      "Azure Security",
      "Identity & Access Management",
      "Platform Protection",
      "Security Operations",
      "Data & Application Security",
      "Microsoft Entra ID",
      "Azure Firewall & NSGs"
    ],
    color: "primary"
  },
  {
    name: "IBM Cybersecurity Analyst",
    issuer: "IBM via Coursera",
    date: "Nov 2022",
    description: "Comprehensive cybersecurity program covering network security, penetration testing, incident response, and security architecture.",
    skills: [
      "Threat Modeling",
      "Vulnerability Assessment",
      "Network Security",
      "Penetration Testing",
      "Incident Response",
      "Security Architecture",
      "Threat Intelligence"
    ],
    color: "secondary"
  },
  {
    name: "Java Training Course",
    issuer: "Cipher Schools",
    date: "Aug 2023",
    description: "Comprehensive Java programming training covering core concepts and advanced programming techniques.",
    skills: [
      "Java Programming",
      "Object-Oriented Design",
      "Data Structures"
    ],
    color: "accent"
  },
  {
    name: "Java Programming: Arrays, Lists, and Structured Data",
    issuer: "Coursera",
    date: "May 2023",
    description: "Specialized course focusing on data structures and algorithms in Java programming.",
    skills: [
      "Java Arrays",
      "Data Structures",
      "Algorithm Design"
    ],
    color: "accent"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Animated Pokemon */}
      <img 
        src={pikachu} 
        alt="Pikachu" 
        className="absolute top-20 left-5 w-24 h-24 opacity-20 animate-wiggle hidden lg:block"
      />
      <img 
        src={gengar} 
        alt="Gengar" 
        className="absolute bottom-20 right-5 w-28 h-28 opacity-20 animate-float hidden lg:block"
      />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 scroll-reveal">
          <span className="text-glow-accent text-accent">PROFESSIONAL</span>{" "}
          <span className="text-glow text-primary">CERTIFICATIONS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg scroll-reveal stagger-1">
          Industry-recognized credentials and achievements
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card/50 backdrop-blur border-${cert.color}/30 hover:border-${cert.color}/60 transition-all duration-300 hover-lift group relative overflow-hidden scroll-reveal stagger-${(index % 4) + 1}`}
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${cert.color}/20 to-transparent rounded-bl-full`} />
              
              <div className="relative z-10">
                <div className={`flex items-start gap-4 mb-6`}>
                  <div className={`p-4 rounded-lg bg-${cert.color}/10 border border-${cert.color}/30 transition-all duration-300 flex-shrink-0 group-hover:animate-glow-pulse`}>
                    <Award className={`w-8 h-8 text-${cert.color} group-hover:animate-pulse`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold text-${cert.color} mb-2 font-mono group-hover:text-glow transition-all duration-300`}>
                      {cert.name}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground font-mono">
                      <span>{cert.issuer}</span>
                      <span className={`text-${cert.color}`}>Issued: {cert.date}</span>
                      {cert.credential && (
                        <span className="text-xs text-muted-foreground mt-1">{cert.credential}</span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {cert.description}
                </p>

                <div>
                  <h4 className={`text-sm font-bold text-${cert.color} mb-3 font-mono flex items-center gap-2`}>
                    <CheckCircle2 className="w-4 h-4 animate-pulse" />
                    VERIFIED SKILLS:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className={`border-${cert.color}/30 text-${cert.color} font-mono text-xs hover:bg-${cert.color}/10 transition-colors duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
