import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Code2, Terminal, Cpu } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-dark-surface"></div>
      
      {/* Animated particles and flowing elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary/35 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Glowing abstract lines */}
        <div className="absolute top-1/3 left-0 w-40 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-accent/15 to-transparent animate-float" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Large blur elements for depth */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-primary/[0.03] rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/[0.02] rounded-full blur-3xl animate-float" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Name */}
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl xl:text-6xl text-foreground leading-tight">
                Hirav Joshi
              </h1>
            </div>

            {/* Title */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-heading text-xl md:text-2xl xl:text-3xl text-primary font-semibold">
                Full-Stack Developer | Flutter | Data Science
              </h2>
            </div>

            {/* Tagline */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Computer Science Graduate crafting innovative solutions with modern technologies. 
                Aspiring Master's student focused on AI and full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                variant="default" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <a 
                href="https://github.com/hiravjoshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/hiravjoshi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:hirav.joshi@example.com" 
                className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Abstract Code Elements */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Abstract code blocks */}
              <div className="space-y-4">
                {/* Code block 1 */}
                <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 animate-float">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <div className="w-16 h-2 bg-primary/40 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-24 h-1.5 bg-muted-foreground/30 rounded"></div>
                    <div className="w-20 h-1.5 bg-accent/40 rounded"></div>
                    <div className="w-28 h-1.5 bg-muted-foreground/20 rounded"></div>
                  </div>
                </div>

                {/* Code block 2 */}
                <div className="bg-card/20 backdrop-blur-sm border border-accent/20 rounded-lg p-4 ml-8 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-accent" />
                    <div className="w-12 h-2 bg-accent/40 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-20 h-1.5 bg-muted-foreground/25 rounded"></div>
                    <div className="w-24 h-1.5 bg-primary/30 rounded"></div>
                  </div>
                </div>

                {/* Code block 3 */}
                <div className="bg-card/25 backdrop-blur-sm border border-primary/15 rounded-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-primary" />
                    <div className="w-14 h-2 bg-primary/30 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-32 h-1.5 bg-muted-foreground/30 rounded"></div>
                    <div className="w-16 h-1.5 bg-accent/35 rounded"></div>
                    <div className="w-20 h-1.5 bg-muted-foreground/25 rounded"></div>
                    <div className="w-24 h-1.5 bg-primary/25 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Glowing accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-md animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/25 rounded-full blur-md animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;