import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-dark-surface"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-electric-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Purpose Badge */}
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/10 to-electric-purple/10 border border-neon-blue/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-2 animate-glow-pulse"></div>
                <span className="text-sm font-medium text-neon-blue">Portfolio</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="font-heading font-bold text-4xl md:text-5xl xl:text-6xl text-foreground leading-tight">
                Hirav Joshi: Where Code <br />
                <span className="bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
                  Meets Innovation
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-body text-lg md:text-xl text-silver-text leading-relaxed max-w-xl">
                Computer Science Graduate crafting cutting-edge solutions with modern technologies. 
                Specializing in full-stack development, Flutter apps, and data science innovations.
              </p>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-primary hover:shadow-glow-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://github.com/hiravjoshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border hover:border-neon-blue/50 hover:bg-neon-blue/5 hover:shadow-elegant transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-neon-blue transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/hiravjoshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border hover:border-neon-blue/50 hover:bg-neon-blue/5 hover:shadow-elegant transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-neon-blue transition-colors" />
              </a>
              <a 
                href="mailto:hirav.joshi@example.com"
                className="p-3 rounded-xl border border-border hover:border-neon-blue/50 hover:bg-neon-blue/5 hover:shadow-elegant transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-neon-blue transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Featured Visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-dark-surface to-darker-surface rounded-3xl p-8 shadow-card border border-border/50">
                {/* Glow effect around container */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-electric-purple/20 rounded-3xl blur-xl opacity-20"></div>
                
                {/* Placeholder for futuristic image/3D model */}
                <div className="relative aspect-square bg-gradient-to-br from-darker-surface to-dark-surface rounded-2xl overflow-hidden">
                  {/* Futuristic tech pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--neon-blue)) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* Central tech element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Main tech orb */}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue/30 to-electric-purple/30 flex items-center justify-center backdrop-blur-sm border border-neon-blue/30 animate-glow-pulse">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-electric-purple opacity-80"></div>
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-neon-blue/60 animate-float"></div>
                      <div className="absolute -bottom-6 -left-6 w-4 h-4 rounded-full bg-electric-purple/60 animate-float" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-8 -left-8 w-3 h-3 rounded-full bg-neon-blue/40 animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                  </div>
                  
                  {/* Corner accent elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-neon-blue/30 rotate-45"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-electric-purple/30 rotate-12"></div>
                </div>
                
                {/* Additional tech elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-blue/60 rounded-full animate-glow-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-electric-purple/60 rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border border-neon-blue/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-electric-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;