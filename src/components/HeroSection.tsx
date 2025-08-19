import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      {/* Subtle background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading - professional and clean */}
          <div className="mb-8 animate-slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
              Hirav Joshi
            </h1>
          </div>

          {/* Tagline - simplified */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Computer Science Graduate & Aspiring Master's Student in Europe
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-2">
              Full-Stack Developer | AI Enthusiast | Problem Solver
            </p>
          </div>

          {/* CTA Buttons - minimal styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Button>
          </div>

          {/* Social Links - clean and minimal */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://github.com/hiravjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/hiravjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a 
              href="mailto:hirav.joshi@example.com" 
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;