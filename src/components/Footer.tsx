import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              © 2025 <span className="text-primary">Arun A</span> | SOC Associate
            </span>
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary animate-pulse">root@security</span>
            <span className="text-secondary">:~$</span>
            <span className="animate-pulse ml-1">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
