import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <Star className="h-5 w-5 fill-current" />
                <span>Trusted by 500+ Clients</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Complete
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                  Tech Partner
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                From cutting-edge websites to teaching kids the magic of technology, 
                we bring your digital dreams to life with expertise, creativity, and a touch of fun! 🚀
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>100+ Websites Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>24/7 IT Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Kids Love Our Classes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Your Project
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by amazing companies</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold">TechCorp</div>
                <div className="text-2xl font-bold">StartupX</div>
                <div className="text-2xl font-bold">EduTech</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern technology and innovation"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 tech-gradient rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-2xl">💻</span>
            </div>
            <div className="absolute bottom-8 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-float">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;