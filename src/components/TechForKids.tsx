import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Trophy, Play } from "lucide-react";
import kidsImage from "@/assets/kids-tech-education.jpg";

const TechForKids = () => {
  const programs = [
    {
      title: "Little Coders (Ages 6-8)",
      emoji: "🧸",
      duration: "1 hour",
      maxStudents: "8 kids",
      description: "Visual programming with Scratch Jr., basic computer skills, and digital creativity.",
      skills: ["Visual Programming", "Mouse & Keyboard", "Digital Art", "Problem Solving"]
    },
    {
      title: "Junior Developers (Ages 9-12)",
      emoji: "🚀",
      duration: "1.5 hours", 
      maxStudents: "10 kids",
      description: "Scratch programming, introduction to HTML/CSS, game development basics.",
      skills: ["Scratch Programming", "Web Basics", "Game Design", "Logic Building"]
    },
    {
      title: "Tech Explorers (Ages 13-16)",
      emoji: "🔥",
      duration: "2 hours",
      maxStudents: "12 teens",
      description: "Python programming, web development, mobile app basics, and tech entrepreneurship.",
      skills: ["Python Coding", "Web Development", "App Design", "Tech Business"]
    }
  ];

  const benefits = [
    "🧠 Develops logical thinking and problem-solving skills",
    "🎨 Encourages creativity through technology",
    "🤝 Builds teamwork and collaboration abilities", 
    "💪 Boosts confidence in using technology",
    "🎯 Prepares kids for future career opportunities",
    "🌟 Makes learning fun and engaging"
  ];

  return (
    <section id="kids" className="py-20 px-6 hero-gradient">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Tech Education for Kids 👦👧
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Inspire the next generation of innovators! Our fun, interactive classes teach kids 
            essential tech skills while sparking their creativity and curiosity. 🌟
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image & Benefits */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={kidsImage}
                alt="Children learning technology in a fun classroom"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-center">Why Kids Love Our Classes 💫</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-sm">
                    {benefit}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Our Programs</h3>
            {programs.map((program, index) => (
              <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{program.emoji}</span>
                      <h4 className="text-xl font-bold">{program.title}</h4>
                    </div>
                    <Badge variant="secondary" className="bg-accent text-white">
                      Popular
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">{program.description}</p>

                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>{program.maxStudents}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">What They'll Learn:</h5>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="default" className="w-full group">
                    Enroll Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Card className="p-8 bg-white/95 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="space-y-4">
              <Trophy className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold">Ready to Get Started? 🎉</h3>
              <p className="text-muted-foreground">
                Book a free trial class and watch your child discover the magic of technology!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group">
                  <Play className="h-5 w-5 mr-2" />
                  Book Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Schedule
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechForKids;