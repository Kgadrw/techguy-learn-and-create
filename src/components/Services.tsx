import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Wifi, GraduationCap, Palette, ArrowRight, Zap, Shield, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      emoji: "💻",
      title: "Website Development",
      description: "Custom websites that convert visitors into customers. From simple landing pages to complex web applications.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      color: "primary"
    },
    {
      icon: Wifi,
      emoji: "📡", 
      title: "Internet Installation",
      description: "Professional internet setup and networking solutions for homes and businesses. Fast, reliable connections.",
      features: ["High-Speed Setup", "Network Security", "WiFi Optimization", "24/7 Support"],
      color: "secondary"
    },
    {
      icon: GraduationCap,
      emoji: "👦👧",
      title: "Tech Education for Kids",
      description: "Fun, engaging technology classes that teach children coding, digital literacy, and creative problem-solving.",
      features: ["Age-Appropriate Content", "Hands-On Learning", "Creative Projects", "Progress Tracking"],
      color: "accent"
    },
    {
      icon: Palette,
      emoji: "🎨",
      title: "Graphic Design",
      description: "Eye-catching designs that tell your brand story. From logos to marketing materials that make an impact.",
      features: ["Brand Identity", "Marketing Materials", "Digital Assets", "Print Design"],
      color: "primary"
    },
    {
      icon: Shield,
      emoji: "🔒",
      title: "IT Support",
      description: "Comprehensive technical support to keep your systems running smoothly. We're here when you need us most.",
      features: ["Remote Support", "System Maintenance", "Data Recovery", "Security Solutions"],
      color: "secondary"
    },
    {
      icon: Lightbulb,
      emoji: "💡",
      title: "Tech Consulting",
      description: "Strategic guidance to help you make the right technology decisions for your business growth.",
      features: ["Technology Strategy", "Digital Transformation", "Cost Optimization", "Future Planning"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 subtle-gradient">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From websites that wow to teaching kids to code, we've got all your tech needs covered! 
            Here's how we can help you succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card p-8 border-0 group cursor-pointer"
            >
              <div className="space-y-6">
                {/* Icon & Emoji */}
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    service.color === 'primary' ? 'bg-primary' :
                    service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                  }`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-3xl">{service.emoji}</span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Zap className="h-4 w-4 text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button variant="ghost" className="group w-full justify-between">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Get Custom Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;