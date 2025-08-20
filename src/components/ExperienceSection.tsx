import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Code2, GraduationCap, Zap } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "MIS Executive",
      company: "Parul University",
      period: "2024 - Present (Full Time)",
      description: "As an MIS Executive at Parul University, I am responsible for overseeing data management, reporting, and process optimization within the institution’s management information systems. My role involves streamlining operations by analyzing data trends, generating accurate reports, and ensuring compliance with institutional standards. Additionally, I contribute to decision-making support by maintaining databases, supervising information flow, and implementing process improvements to enhance efficiency and organizational performance.",
      icon: Building2,
      color: "neon-blue",
      skills: ["Team Leadership", "Process Optimization", "Project Management", "Operations Strategy"]
    },
    {
      title: "Operation Manager and Team lead",
      company: "Arka Infotech",
      period: "2024 0(Part Time)",
      description: "I have experience in overseeing employee management, including hiring, training, performance evaluation, and staff development. My role also involved streamlining operations by optimizing processes, managing budgets, and ensuring quality assurance and compliance across functions. Additionally, I supervised project delivery, supply chain logistics, and workplace standards to drive efficiency, maintain consistency, and achieve operational excellence",
      icon: Building2,
      color: "neon-blue",
      skills: ["Team Leadership", "Process Optimization", "Project Management", "Operations Strategy"]
    },
    {
      title: "AI Automation Engineer Intern",
      company: "EcoWoodies",
      period: "2024",
      description: "During my internship as an AI Automation Engineer at Ecowoodies, I was responsible for overseeing automation workflows and enhancing operational efficiency through AI-driven solutions. My role involved streamlining processes by designing intelligent automation systems, optimizing data handling, and ensuring accuracy and compliance. Additionally, I contributed to project delivery by implementing automation strategies, managing tasks, and maintaining high workplace standards to drive efficiency and innovation.",
      icon: Zap,
      color: "electric-purple",
      skills: ["AI/ML", "Process Automation", "Sustainability Tech", "Innovation"]
    },
    {
      title: "Software Developer Intern",
      company: "Prodigy Infotech",
      period: "2023",
      description: "Developed full-stack web applications using modern technologies. Contributed to client projects and enhanced user experience.",
      icon: Code2,
      color: "electric-purple",
      skills: ["React", "Node.js", "Database Design", "API Development"]
    },
    {
      title: "Python Developer Intern",
      company: "CodSoft",
      period: "2023",
      description: "Built automation scripts and data analysis tools. Worked on machine learning projects and backend development.",
      icon: Code2,
      color: "cyber-green",
      skills: ["Python", "Data Analysis", "Machine Learning", "Automation"]
    },
    {
      title: "Admission Assistant",
      company: "Parul University",
      period: "2022 - 2023",
      description: "Guided prospective students through admission processes. Developed communication skills and customer service expertise.",
      icon: GraduationCap,
      color: "neon-blue",
      skills: ["Communication", "Customer Service", "Documentation", "Problem Solving"]
    },

  ];

  return (
    <section id="experience" className="py-20 bg-darker-surface relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-72 h-72 bg-electric-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Experience</span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            Professional journey spanning operations management, software development, and emerging technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-electric-purple to-cyber-green"></div>

            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const borderColor = `border-${exp.color}/20`;
              const hoverBorderColor = `hover:border-${exp.color}`;
              const iconBgColor = `bg-${exp.color}/10`;
              const iconTextColor = `text-${exp.color}`;
              const timelineDotColor = `bg-${exp.color}`;
              const shadowClass = exp.color === 'neon-blue' ? 'hover:shadow-elegant' :
                exp.color === 'electric-purple' ? 'hover:shadow-glow-secondary' :
                  'hover:shadow-[0_4px_16px_hsl(var(--cyber-green)/0.2)]';

              return (
                <div
                  key={index}
                  className={`relative pl-20 mb-12 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-6 w-4 h-4 ${timelineDotColor} rounded-full shadow-lg`}></div>

                  <Card className={`bg-dark-surface ${borderColor} ${hoverBorderColor} ${shadowClass} transition-all duration-300 hover:scale-105 group`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full ${iconBgColor} group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
                          </div>
                          <div>
                            <CardTitle className="font-heading font-bold text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all">
                              {exp.title}
                            </CardTitle>
                            <p className={`font-body text-lg ${iconTextColor} font-semibold`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`border-${exp.color}/30 text-${exp.color} font-medium`}
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-silver-text mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-muted/50 text-silver-text hover:bg-muted transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;