import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours. 🚀");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-TECH",
      description: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      value: "hello@thetechguy.com",
      description: "We reply within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Tech Street, Digital City",
      description: "Drop by anytime!"
    }
  ];

  const services = [
    "Website Development",
    "Internet Installation", 
    "Tech Education for Kids",
    "Graphic Design",
    "IT Support",
    "Tech Consulting",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 px-6 subtle-gradient">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tech journey? We're here to help! Whether you need a website, 
            want to enroll your child in our classes, or need IT support - let's chat! 💬
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <span>Send us a message</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Tell us about your project and we'll get back to you with a custom solution!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-input rounded-lg focus:border-primary bg-background"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or what you need help with..."
                      required
                      rows={6}
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover-lift border-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 tech-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="p-6 border-0 subtle-gradient">
              <div className="space-y-4">
                <h4 className="font-bold flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Need Help Right Now?</span>
                </h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between">
                    Call Now
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" className="w-full justify-between">
                    Live Chat
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Testimonial */}
            <Card className="p-6 border-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm italic">
                  "The Tech Guy built our website in just 2 weeks and it's incredible! 
                  Their team is responsive and really knows their stuff."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-muted-foreground">CEO, StartupX</div>
                </div>
              </div>
            </Card>

            {/* Response Time Badge */}
            <div className="text-center">
              <Badge variant="secondary" className="bg-accent text-white px-4 py-2">
                ⚡ Average response time: 2 hours
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;