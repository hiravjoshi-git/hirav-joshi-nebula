import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-darker-surface relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-electric-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">About Me</span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            Driven by innovation and academic excellence, I'm a Computer Science graduate ready to make my mark in Europe's tech landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Academic Background */}
          <Card className="bg-dark-surface border-neon-blue/20 hover:border-neon-blue transition-all duration-300 hover:shadow-elegant group">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-neon-blue" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Academic Excellence</h3>
              <p className="font-body text-silver-text leading-relaxed">
                B.Tech in Computer Science Engineering from Parul University. 
                Strong foundation in algorithms, data structures, and software engineering principles.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-dark-surface border-electric-purple/20 hover:border-electric-purple transition-all duration-300 hover:shadow-glow-secondary group">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-electric-purple/10 group-hover:bg-electric-purple/20 transition-colors">
                  <Target className="w-8 h-8 text-electric-purple" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Future Vision</h3>
              <p className="font-body text-silver-text leading-relaxed">
                Pursuing Master's studies in Europe, specializing in AI, Machine Learning, and Data Analytics. 
                Ready to contribute to cutting-edge research and innovation.
              </p>
            </CardContent>
          </Card>

          {/* Innovation */}
          <Card className="bg-dark-surface border-cyber-green/20 hover:border-cyber-green hover:shadow-[0_4px_16px_hsl(var(--cyber-green)/0.2)] transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-cyber-green/10 group-hover:bg-cyber-green/20 transition-colors">
                  <Lightbulb className="w-8 h-8 text-cyber-green" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Innovation Mindset</h3>
              <p className="font-body text-silver-text leading-relaxed">
                Blending creativity with technical expertise to solve complex problems. 
                Passionate about building solutions that make a meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-lg text-silver-text leading-relaxed">
              My journey combines <span className="text-neon-blue font-semibold">technical proficiency</span> with 
              <span className="text-electric-purple font-semibold"> academic rigor</span> and 
              <span className="text-cyber-green font-semibold"> innovative thinking</span>. 
              From hands-on development experience to leadership roles, I'm prepared to excel in Europe's dynamic tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;