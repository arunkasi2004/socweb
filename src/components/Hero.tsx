import { Button } from "@/components/ui/button";
import { Terminal, Shield, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import pikachu from "@/assets/pikachu.png";
import gengar from "@/assets/gengar.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      <div className="absolute inset-0 grid-bg opacity-20 z-0" />

      {/* Animated Pokemon */}
      <img 
        src={pikachu} 
        alt="Pikachu" 
        className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 animate-bounce-slow opacity-50 hover:opacity-100 transition-opacity duration-300 z-10 animate-pulse-glow"
      />
      <img 
        src={gengar} 
        alt="Gengar" 
        className="absolute bottom-32 right-10 w-20 h-20 md:w-28 md:h-28 animate-float opacity-50 hover:opacity-100 transition-opacity duration-300 z-10"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Terminal Icon with Glow */}
          <div className="flex justify-center animate-scale-in">
            <div className="p-4 rounded-lg bg-card border border-primary/30 box-glow animate-glow-pulse hover:scale-110 transition-transform duration-300">
              <Terminal className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-mono animate-slide-in-bottom">
            <span className="text-glow text-primary animate-pulse">SOC</span>{" "}
            <span className="text-glow-secondary text-secondary">ASSOCIATE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom stagger-1">
            Cybersecurity Enthusiast skilled in network security, cloud security, and malware analysis
          </p>

          {/* Certifications Quick View */}
          <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-in-bottom stagger-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-primary/20 hover-lift hover:border-primary/50 transition-all duration-300">
              <Shield className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-mono text-sm text-primary">Azure AZ-500 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-secondary/20 hover-lift hover:border-secondary/50 transition-all duration-300">
              <Code2 className="w-5 h-5 text-secondary animate-pulse" />
              <span className="font-mono text-sm text-secondary">IBM Cybersecurity Analyst</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4 animate-slide-in-bottom stagger-3">
            <Button 
              size="lg" 
              className="font-mono text-lg bg-primary hover:bg-primary/90 text-primary-foreground box-glow transition-all duration-300 hover:scale-110 animate-pulse-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-mono text-lg border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="scan-line absolute inset-0 pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
