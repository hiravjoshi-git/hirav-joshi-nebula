import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hirav.joshi@example.com",
      href: "mailto:hirav.joshi@example.com",
      color: "neon-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 12345 67890",
      href: "tel:+911234567890",
      color: "electric-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India (Relocating to Europe)",
      href: "#",
      color: "cyber-green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hiravjoshi",
      color: "neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/hiravjoshi",
      color: "electric-purple"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hirav.joshi@example.com",
      color: "cyber-green"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-electric-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Get In Touch</span>
          </h2>
          <p className="font-body text-xl text-silver-text max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative projects or discuss opportunities in Europe. Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-dark-surface border-neon-blue/20 hover:border-neon-blue hover:shadow-elegant transition-all duration-300 animate-slide-up">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-2xl text-foreground flex items-center gap-3">
                <div className="p-2 rounded-full bg-neon-blue/10">
                  <Send className="w-6 h-6 text-neon-blue" />
                </div>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-darker-surface border-muted focus:border-neon-blue focus:ring-neon-blue/20 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-darker-surface border-muted focus:border-neon-blue focus:ring-neon-blue/20 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-darker-surface border-muted focus:border-neon-blue focus:ring-neon-blue/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-darker-surface border-muted focus:border-neon-blue focus:ring-neon-blue/20 text-foreground placeholder:text-muted-foreground resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const iconTextColor = `text-${info.color}`;
                const iconBgColor = `bg-${info.color}/10`;
                
                return (
                  <Card 
                    key={index} 
                    className={`bg-dark-surface border-${info.color}/20 hover:border-${info.color} transition-all duration-300 hover:scale-105 group`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${iconBgColor} group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-6 h-6 ${iconTextColor}`} />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                            {info.label}
                          </h3>
                          <a 
                            href={info.href}
                            className={`font-body text-silver-text hover:${iconTextColor} transition-colors`}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="bg-dark-surface border-electric-purple/20 hover:border-electric-purple hover:shadow-glow-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-heading font-bold text-xl text-foreground">
                  Connect on Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    const iconTextColor = `text-${social.color}`;
                    const borderColor = `border-${social.color}/30`;
                    const hoverBorderColor = `hover:border-${social.color}`;
                    const shadowClass = social.color === 'neon-blue' ? 'hover:shadow-glow-primary' : 
                                       social.color === 'electric-purple' ? 'hover:shadow-glow-secondary' :
                                       'hover:shadow-[0_0_20px_hsl(var(--cyber-green)/0.5)]';
                    
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full border ${borderColor} ${hoverBorderColor} ${shadowClass} transition-all duration-300 hover:scale-110 group`}
                      >
                        <IconComponent className={`w-6 h-6 text-silver-text group-hover:${iconTextColor} transition-colors`} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center p-8 rounded-lg bg-gradient-glow border border-neon-blue/20">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Ready to Innovate Together?
              </h3>
              <p className="font-body text-silver-text leading-relaxed">
                Whether you're a university in Europe, a tech company, or a fellow developer, 
                I'm excited to explore collaboration opportunities and create extraordinary solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;