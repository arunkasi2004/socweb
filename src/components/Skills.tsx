import { Shield, Cloud, Terminal, Code2, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import charizard from "@/assets/charizard.png";
import lapras from "@/assets/lapras.png";

const skills = [
  {
    category: "Cybersecurity Skills",
    icon: Shield,
    items: [
      "Threat Modeling",
      "Vulnerability Assessment",
      "Malware Analysis",
      "Cloud Security",
      "Identity & Access Management",
      "Risk Mitigation",
      "Secure Networking",
      "Microsoft Defender for Cloud",
      "Microsoft Sentinel"
    ]
  },
  {
    category: "Azure Security (AZ-500)",
    icon: Cloud,
    items: [
      "Secure Identity and Access",
      "Azure Firewall & NSGs",
      "Microsoft Entra ID",
      "Key Vault Security",
      "Compute & Storage Security",
      "Database Security"
    ]
  },
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "Python", "R"]
  },
  {
    category: "Technologies & Frameworks",
    icon: Terminal,
    items: [
      "Git",
      "Burp Suite",
      "Microsoft Entra ID",
      "Azure Firewall",
      "Network Security Groups",
      "Azure Key Vault"
    ]
  },
  {
    category: "Soft Skills",
    icon: Network,
    items: [
      "Communication",
      "Teamwork",
      "Adaptability",
      "Problem-Solving",
      "Leadership"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Animated Pokemon */}
      <img 
        src={charizard} 
        alt="Charizard" 
        className="absolute top-10 right-10 w-32 h-32 opacity-20 animate-float hidden lg:block"
      />
      <img 
        src={lapras} 
        alt="Lapras" 
        className="absolute bottom-10 left-10 w-28 h-28 opacity-20 animate-bounce-slow hidden lg:block"
      />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 scroll-reveal">
          <span className="text-glow text-primary">TECHNICAL</span>{" "}
          <span className="text-glow-secondary text-secondary">SKILLS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg scroll-reveal stagger-1">
          Cybersecurity expertise and technical proficiency
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift transition-all duration-300 border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur scroll-reveal stagger-${(index % 6) + 1} group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:animate-pulse">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-mono text-lg font-semibold text-primary group-hover:text-glow transition-all duration-300">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 hover:text-foreground transition-colors duration-200">
                    <span className="text-secondary mt-1 animate-pulse">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
