import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with glow effect */}
          <div className="mb-8 animate-slide-up">
            <h1 className="font-heading font-extrabold text-6xl md:text-8xl lg:text-9xl mb-4">
              <span className="text-transparent bg-gradient-primary bg-clip-text animate-glow-pulse">
                HIRAV
              </span>
              <br />
              <span className="text-silver-text">JOSHI</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-silver-text leading-relaxed">
              <span className="text-neon-blue font-semibold">Extraordinary Developer</span> | 
              <span className="text-electric-purple font-semibold"> Computer Science Graduate</span> | 
              <span className="text-cyber-green font-semibold"> Future Master's Student in Europe</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              <span>View My Work</span>
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="neon" 
              size="xl" 
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" />
              <span>Contact Me</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://github.com/hiravjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-neon-blue/30 hover:border-neon-blue hover:shadow-glow-primary transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-silver-text group-hover:text-neon-blue transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/hiravjoshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-electric-purple/30 hover:border-electric-purple hover:shadow-glow-secondary transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-silver-text group-hover:text-electric-purple transition-colors" />
            </a>
            <a 
              href="mailto:hirav.joshi@example.com" 
              className="p-4 rounded-full border border-cyber-green/30 hover:border-cyber-green hover:shadow-[0_0_20px_hsl(var(--cyber-green)/0.5)] transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-silver-text group-hover:text-cyber-green transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-neon-blue opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;