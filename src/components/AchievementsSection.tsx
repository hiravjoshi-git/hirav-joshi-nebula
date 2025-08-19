import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Users, BookOpen } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Intercollege Cricket Tournament Winner",
      description: "Led the university cricket team to victory in the intercollege championship, demonstrating teamwork and leadership skills.",
      icon: Trophy,
      category: "Sports Leadership",
      year: "2023",
      color: "neon-blue"
    },
    {
      title: "Campaigning Coordinator",
      description: "Served as Campaigning Coordinator for 'The Projection', organizing events and managing promotional activities.",
      icon: Users,
      category: "Leadership",
      year: "2022-2023", 
      color: "electric-purple"
    },
    {
      title: "NPTEL Certifications",
      description: "Successfully completed multiple NPTEL courses in Computer Science and Engineering with excellent grades.",
      icon: BookOpen,
      category: "Academic Excellence",
      year: "2022-2023",
      color: "cyber-green"
    },
    {
      title: "Multiple Internship Completions",
      description: "Successfully completed 5 professional internships across different domains, gaining diverse industry experience.",
      icon: Award,
      category: "Professional Growth",
      year: "2022-2023",
      color: "neon-blue"
    },
    {
      title: "Project Innovation Recognition",
      description: "Developed innovative solutions across 6+ major projects, showcasing technical creativity and problem-solving skills.",
      icon: Star,
      category: "Technical Innovation",
      year: "2022-2024",
      color: "electric-purple"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-darker-surface relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-electric-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Achievements</span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in academics, leadership, sports, and professional development.
          </p>
        </div>

        {/* Timeline layout for achievements */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-electric-purple to-cyber-green hidden md:block"></div>
            
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isEven = index % 2 === 0;
              const borderColor = `border-${achievement.color}/20`;
              const hoverBorderColor = `hover:border-${achievement.color}`;
              const iconBgColor = `bg-${achievement.color}/10`;
              const iconTextColor = `text-${achievement.color}`;
              const shadowClass = achievement.color === 'neon-blue' ? 'hover:shadow-elegant' : 
                                 achievement.color === 'electric-purple' ? 'hover:shadow-glow-secondary' :
                                 'hover:shadow-[0_4px_16px_hsl(var(--cyber-green)/0.2)]';

              return (
                <div 
                  key={index}
                  className={`relative mb-12 animate-slide-up ${
                    isEven 
                      ? 'md:pr-1/2 md:pr-8 md:text-right' 
                      : 'md:pl-1/2 md:pl-8 md:text-left'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-${achievement.color} rounded-full shadow-lg hidden md:block`}></div>
                  
                  <Card className={`bg-dark-surface ${borderColor} ${hoverBorderColor} ${shadowClass} transition-all duration-300 hover:scale-105 group`}>
                    <CardContent className="p-6">
                      <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`p-3 rounded-full ${iconBgColor} group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
                        </div>
                        
                        <div className="flex-grow">
                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                            <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all">
                              {achievement.title}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={`border-${achievement.color}/30 text-${achievement.color} font-medium`}
                            >
                              {achievement.year}
                            </Badge>
                          </div>
                          
                          <Badge 
                            variant="secondary" 
                            className="mb-3 bg-muted/50 text-silver-text"
                          >
                            {achievement.category}
                          </Badge>
                          
                          <p className="font-body text-silver-text leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-extrabold text-neon-blue mb-2">5+</div>
                <p className="font-body text-silver-text">Professional Internships</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-extrabold text-electric-purple mb-2">6+</div>
                <p className="font-body text-silver-text">Major Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-extrabold text-cyber-green mb-2">Multiple</div>
                <p className="font-body text-silver-text">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;