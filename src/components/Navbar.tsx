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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Hirav Joshi Logo" 
              className="h-8 w-8 rounded-md"
              onError={(e) => {
                // Fallback to initials if logo doesn't exist
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLDivElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div 
              className="hidden h-8 w-8 bg-primary rounded-md items-center justify-center text-primary-foreground font-bold text-sm"
            >
              HJ
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Hirav Joshi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-4 bg-background/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setIsOpen(false);
              }}
              className="w-full border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;