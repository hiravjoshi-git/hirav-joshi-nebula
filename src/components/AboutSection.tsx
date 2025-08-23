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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">About Me</span>
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-silver-text max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Computer Science graduate with a passion for technology and innovation. Driven to create meaningful and impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
                B.Tech in Computer Science and Engineering from Parul University with strong knowledge of programming, algorithms, and software design.
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
                Aiming to specialize in AI, Machine Learning, and Data Analytics to create solutions that drive innovation and real-world impact.
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
                Creative problem-solver with technical expertise, focused on building applications that deliver lasting value.
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
              “From hands-on development experience to leadership roles, prepared to excel in the evolving global tech landscape.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;