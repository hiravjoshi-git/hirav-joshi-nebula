import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3, Users } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      skills: ["Python", "JavaScript", "React", "Node.js", "API Development", "SQL", "Database Design", "C++"],
    },
    {
      title: "AI & Automation",
      icon: Database,
      skills: ["Machine Learning", "AI/ML Integration", "Process Automation", "Data Handling", "Intelligent Workflows"],
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      skills: ["Data Analysis", "Excel", "Power BI", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    },
    {
      title: "Management & Soft Skills",
      icon: Users,
      skills: ["Leadership", "Team Management", "Project Management", "Operations Strategy", "Problem Solving", "Communication", "Adaptability", "Innovation"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "6s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Skills & Expertise</span>
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-silver-text max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A blend of technical expertise, AI-driven innovation, and leadership capabilities.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <CardSpotlight
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm flex-shrink-0">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <CardTitle className="font-heading font-bold text-lg sm:text-xl text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-white/30 text-white justify-center py-1.5 sm:py-2 px-2 sm:px-3 font-medium transition-all hover:scale-105 text-xs sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
