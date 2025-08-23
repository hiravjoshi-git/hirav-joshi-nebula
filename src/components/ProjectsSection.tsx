import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Cloud,
  Gamepad2,
  QrCode,
  PenTool,
  ShoppingCart,
  Ticket,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sushiman Website",
      description:
        "Japanese cuisine-themed landing page showcasing sushi menus, trending items, customer testimonials, and newsletter integration. Features modern design, smooth navigation, and engaging UI elements.",
      icon: Cloud,
      techStack: ["HTML", "CSS"],
      color: "neon-blue",
      github: "https://github.com/hiravjoshi-git/sushiman", // ✅ example GitHub
      demo: "https://sushiman-hiravjoshi.web.app/",
    },
    {
      title: "Sudoku Solver & Game",
      description:
        "Interactive Sudoku game with automated solver using backtracking algorithm. Includes difficulty levels and hint system.",
      icon: Gamepad2,
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms"],
      color: "electric-purple",
      github: "https://joshihirav.vercel.app/",
      demo: "https://joshihirav.vercel.app/",
    },
    {
      title: "QR Code Scanner & Generator",
      description:
        "Versatile QR code utility supporting generation, scanning, and batch processing. Mobile-optimized with camera integration.",
      icon: QrCode,
      techStack: ["React", "WebRTC", "Canvas API", "Mobile UI"],
      color: "cyber-green",
      github: "https://github.com/hiravjoshi-git/qr-generator-scanner",
      demo: "https://github.com/hiravjoshi-git/qr-generator-scanner",
    },
    {
      title: "Shoe-Branding Website",
      description:
        "A sleek and modern interface inspired by Nike’s bold and dynamic brand identity Responsive layouts crafted with HTML and CSS.",
      icon: PenTool,
      techStack: ["HTML", "CSS"],
      color: "neon-blue",
      github: "https://github.com/hiravjoshi-git/Shoe-Branding",
      demo: "https://github.com/hiravjoshi-git/Shoe-Branding",
    },
    {
      title: "Amazon Clone",
      description:
        "E-commerce platform replica with shopping cart, payment integration, and user management. Scalable architecture.",
      icon: ShoppingCart,
      techStack: ["React", "Redux", "Firebase", "Stripe API", "Material-UI"],
      color: "electric-purple",
      github: "https://github.com/hiravjoshi-git/Amazon-Clone",
      demo: "https://amaz0n-c1one.web.app/",
    },
    {
      title: "Ticketing Tool (MERN)",
      description:
        "Customer support ticketing system with real-time updates, priority management, and analytics dashboard.",
      icon: Ticket,
      techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      color: "cyber-green",
      github: "https://joshihirav.vercel.app/",
      demo: "https://joshihirav.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-electric-purple/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions built with cutting-edge
            technologies and modern development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const borderColor = `border-${project.color}/20`;
            const hoverBorderColor = `hover:border-${project.color}`;
            const iconBgColor = `bg-${project.color}/10`;
            const iconTextColor = `text-${project.color}`;
            const shadowClass =
              project.color === "neon-blue"
                ? "hover:shadow-elegant"
                : project.color === "electric-purple"
                  ? "hover:shadow-glow-secondary"
                  : "hover:shadow-[0_4px_16px_hsl(var(--cyber-green)/0.2)]";

            return (
              <Card
                key={index}
                className={`bg-dark-surface ${borderColor} ${hoverBorderColor} ${shadowClass} transition-all duration-300 hover:scale-105 group animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${iconBgColor} group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2 h-8 w-8"
                          onClick={() =>
                            window.open(project.github, "_blank", "noopener,noreferrer")
                          }
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="p-2 h-8 w-8"
                          onClick={() =>
                            window.open(project.demo, "_blank", "noopener,noreferrer")
                          }
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="font-heading font-bold text-xl text-foreground group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-silver-text mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 transition-colors`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
