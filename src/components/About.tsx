import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Target, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We love what we do and it shows in every project we deliver."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Excellence isn't an accident - it's our standard."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "We measure our success by the impact we create for you."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Meet <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">THE TECH GUY</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're not just another tech company. We're your partners in digital transformation, 
                education enthusiasts, and problem solvers who believe technology should be accessible to everyone! 🌟
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize technology by making it accessible, understandable, and exciting for everyone - 
                  from business owners looking to grow their digital presence to children taking their first 
                  steps into the world of coding and creativity.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-secondary">What Makes Us Different</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine technical expertise with genuine care for education and community impact. 
                  Whether we're building your dream website or teaching a 8-year-old to code their first game, 
                  we bring the same passion and attention to detail.
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn Our Story
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">Our Values</h3>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover-lift border-0 subtle-gradient">
                  <div className="space-y-4 text-center">
                    <div className="w-16 h-16 mx-auto tech-gradient rounded-2xl flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">200+</div>
              <div className="text-muted-foreground">Kids Taught</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5⭐</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;