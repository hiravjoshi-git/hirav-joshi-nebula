import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Skills", href: "skills" },
    { label: "Achievements", href: "achievements" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer hover:scale-110 transition-all duration-300">
            <a href="/">            <img
              src="/lovable-uploads/16aa588c-3911-4e5d-9c0f-c4e7f6ce146e.png"
              alt="Hirav Joshi Logo"
              className="h-14 w-auto rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:drop-shadow-lg"
            /></a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium group rounded-lg hover:bg-primary/5"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </button>
            ))}
            <div className="ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/Resume.pdf', '_blank')}
                className="relative overflow-hidden border-primary/50 text-foreground hover:text-primary-foreground hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="mr-2 w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Resume</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 hover:bg-primary/10 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              {isOpen ? (
                <X className="h-6 w-6 text-foreground relative z-10 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-foreground relative z-10 group-hover:text-primary transition-all duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/30 py-6 space-y-2 bg-background/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative block w-full text-left text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/5 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-8 transform -translate-y-1/2 rounded-full"></div>
              </button>
            ))}
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open('/Resume.pdf', '_blank');
                  setIsOpen(false);
                }}
                className="relative overflow-hidden w-full border-primary/50 text-foreground hover:text-primary-foreground hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="mr-2 w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Resume</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
