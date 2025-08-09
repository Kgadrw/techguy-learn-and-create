import { Zap, Code, Wifi, GraduationCap, Palette, Shield } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Website Development", icon: Code },
    { name: "Internet Installation", icon: Wifi },
    { name: "Tech Education", icon: GraduationCap },
    { name: "Graphic Design", icon: Palette },
    { name: "IT Support", icon: Shield }
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Tech for Kids",
    "Portfolio",
    "Contact",
    "Blog"
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">THE TECH GUY</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your complete tech partner - from cutting-edge websites to teaching kids 
              the magic of technology. Let's build the future together! 🚀
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors cursor-pointer">
                  <service.icon className="h-4 w-4" />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <div className="space-y-3 text-slate-300">
              <div>📞 +1 (555) 123-TECH</div>
              <div>✉️ hello@thetechguy.com</div>
              <div>📍 123 Tech Street, Digital City</div>
              <div className="pt-2">
                <span className="text-accent font-semibold">Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © 2024 THE TECH GUY. All rights reserved. Made with ❤️ for the community.
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Careers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;