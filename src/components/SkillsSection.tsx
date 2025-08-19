import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, BarChart3, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "neon-blue",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "electric-purple", 
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "cyber-green",
      skills: ["Machine Learning", "Data Analysis", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Excel", "Power BI"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "neon-blue",
      skills: ["Leadership", "Team Management", "Problem Solving", "Communication", "Project Management", "Innovation", "Adaptability", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-electric-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Skills & Expertise</span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern technologies, data science, and leadership capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const borderColor = `border-${category.color}/20`;
            const hoverBorderColor = `hover:border-${category.color}`;
            const iconBgColor = `bg-${category.color}/10`;
            const iconTextColor = `text-${category.color}`;
            const shadowClass = category.color === 'neon-blue' ? 'hover:shadow-elegant' : 
                               category.color === 'electric-purple' ? 'hover:shadow-glow-secondary' :
                               'hover:shadow-[0_4px_16px_hsl(var(--cyber-green)/0.2)]';

            return (
              <Card 
                key={index}
                className={`bg-dark-surface ${borderColor} ${hoverBorderColor} ${shadowClass} transition-all duration-300 hover:scale-105 group animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${iconBgColor} group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
                    </div>
                    <CardTitle className="font-heading font-bold text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className={`
                          border-${category.color}/30 text-${category.color} 
                          hover:bg-${category.color}/10 hover:border-${category.color} 
                          transition-all duration-300 justify-center py-2 px-3
                          hover:scale-105 hover:shadow-sm font-medium
                        `}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional skill highlights */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl mb-8 text-foreground">
              <span className="text-neon-blue">Technical Proficiency</span> + 
              <span className="text-electric-purple"> Creative Problem Solving</span>
            </h3>
            <p className="font-body text-lg text-silver-text leading-relaxed">
              My diverse skill set combines cutting-edge technical expertise with strong leadership and analytical capabilities. 
              From full-stack development to data science and team management, I bring a holistic approach to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;