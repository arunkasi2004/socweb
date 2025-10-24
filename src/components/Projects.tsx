import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import dragonite from "@/assets/dragonite.png";
import snorlax from "@/assets/snorlax.png";

const projects = [
  {
    title: "Polymorphic Code Mutation Virus",
    period: "July 2021 - Aug 2021",
    description: "Developed a Python script which demonstrates key concepts in polymorphic malware by simulating code mutation, file replication, and payload decryption. It shows how code can be dynamically altered to evade detection.",
    technologies: ["Python", "Malware Analysis", "Cryptography"],
    github: "https://github.com/arunkasi2004/Polymorphic-Code-Mutation-virus"
  },
  {
    title: "SSH Brute-Force Detector",
    period: "Sep 2022",
    description: "A Python-based Security Operations Center (SOC) tool that monitors SSH authentication logs for potential brute-force attacks. This tool helps security analysts detect and respond to suspicious login attempts.",
    technologies: ["Python", "Log Analysis", "Security Monitoring"],
    github: "https://github.com/arunkasi2004/SSH"
  },
  {
    title: "LPU Navigation System",
    period: "Feb 2023 - March 2023",
    description: "Developed a Java application for Lovely Professional University that integrates a campus map visualization with Dijkstra's algorithm to find the shortest path between key locations.",
    technologies: ["Java", "Java Swing", "AWT", "Dijkstra Algorithm"],
    github: "https://github.com/arunkasi2004/Lpunav"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Animated Pokemon */}
      <img 
        src={dragonite} 
        alt="Dragonite" 
        className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float hidden lg:block"
      />
      <img 
        src={snorlax} 
        alt="Snorlax" 
        className="absolute bottom-10 right-10 w-36 h-36 opacity-20 animate-bounce-slow hidden lg:block"
      />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 scroll-reveal">
          <span className="text-glow-secondary text-secondary">SECURITY</span>{" "}
          <span className="text-glow text-primary">PROJECTS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg scroll-reveal stagger-1">
          Real-world cybersecurity implementations
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 md:p-8 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover-lift group scroll-reveal stagger-${(index % 3) + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-glow-secondary transition-all duration-300">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono">
                    <Calendar className="w-4 h-4 text-secondary animate-pulse" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="border-primary/30 text-primary font-mono hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 font-mono hover:scale-105"
                onClick={() => window.open(project.github, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
