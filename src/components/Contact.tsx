import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Code2, Terminal } from "lucide-react";
import { toast } from "sonner";
import charizard from "@/assets/charizard.png";
import lapras from "@/assets/lapras.png";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Thank you for reaching out."
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Animated Pokemon */}
      <img 
        src={charizard} 
        alt="Charizard" 
        className="absolute top-10 right-5 w-36 h-36 opacity-20 animate-float hidden lg:block"
      />
      <img 
        src={lapras} 
        alt="Lapras" 
        className="absolute bottom-10 left-5 w-32 h-32 opacity-20 animate-bounce-slow hidden lg:block"
      />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-4 scroll-reveal">
          <span className="text-glow text-primary">GET IN</span>{" "}
          <span className="text-glow-secondary text-secondary">TOUCH</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg scroll-reveal stagger-1">
          Looking for a cybersecurity professional? Let's discuss how I can help secure your organization.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 scroll-reveal stagger-2">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover-lift transition-all duration-300">
              <h3 className="text-2xl font-bold font-mono mb-6 text-primary animate-pulse">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:arunkasi2004@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:box-glow transition-all duration-300 group-hover:animate-pulse">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono">arunkasi2004@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/arunsoftdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:box-glow-secondary transition-all duration-300 group-hover:animate-pulse">
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-mono">linkedin.com/in/arunsoftdev</span>
                </a>
                <a 
                  href="https://github.com/arunkasi2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 transition-all duration-300 group-hover:animate-pulse">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-mono">github.com/arunkasi2004</span>
                </a>
                <a 
                  href="https://leetcode.com/u/arun_codex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:box-glow transition-all duration-300 group-hover:animate-pulse">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono">leetcode.com/u/arun_codex</span>
                </a>
                <a 
                  href="https://www.hackerrank.com/profile/arunkasi2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/30 group-hover:box-glow-secondary transition-all duration-300 group-hover:animate-pulse">
                    <Terminal className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-mono">hackerrank.com/arunkasi2004</span>
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur border-primary/20 hover-lift">
              <p className="text-sm text-muted-foreground font-mono">
                <span className="text-primary animate-pulse">$</span> Available for consulting and full-time opportunities
              </p>
              <p className="text-sm text-muted-foreground font-mono mt-2">
                <span className="text-secondary animate-pulse">›</span> Open to remote and hybrid positions
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card/50 backdrop-blur border-secondary/20 hover-lift scroll-reveal stagger-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-secondary mb-2">
                  NAME
                </label>
                <Input 
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50 border-border focus:border-primary font-mono transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-secondary mb-2">
                  EMAIL
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/50 border-border focus:border-primary font-mono transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-secondary mb-2">
                  MESSAGE
                </label>
                <Textarea 
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary font-mono resize-none transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full font-mono bg-secondary hover:bg-secondary/90 text-secondary-foreground box-glow-secondary transition-all duration-300 hover:scale-105"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
