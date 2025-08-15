import {
  Database,
  Code,
  Palette,
  Server,
  Globe,
  GitBranch,
  Coffee,
  Cpu,
} from "lucide-react";

const About = () => {
  const skills = [
    { icon: Database, name: "MongoDB", color: "text-green-600" },
    { icon: Server, name: "Express.js", color: "text-gray-600" },
    { icon: Code, name: "React", color: "text-blue-500" },
    { icon: Server, name: "Node.js", color: "text-green-500" },
    { icon: Globe, name: "HTML", color: "text-orange-500" },
    { icon: Palette, name: "CSS", color: "text-blue-400" },
    { icon: Palette, name: "Bootstrap", color: "text-purple-600" },
    { icon: Palette, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: Code, name: "JavaScript", color: "text-yellow-500" },
    { icon: Database, name: "MySQL", color: "text-blue-600" },
    { icon: Code, name: "Redux", color: "text-purple-500" },
    { icon: GitBranch, name: "Git", color: "text-orange-600" },
    { icon: GitBranch, name: "GitHub", color: "text-gray-800" },
    { icon: Coffee, name: "Java", color: "text-red-600" },
    { icon: Cpu, name: "Python", color: "text-blue-500" },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full float float-delay-1"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-lg float float-delay-2"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full float float-delay-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up animate">
          <h2 className="section-title text-reveal">
            <span className="stagger-1">A</span>
            <span className="stagger-2">b</span>
            <span className="stagger-3">o</span>
            <span className="stagger-4">u</span>
            <span className="stagger-5">t</span>
            <span className="stagger-1"> </span>
            <span className="stagger-2">M</span>
            <span className="stagger-3">e</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 slide-up animate stagger-1">
            Passionate about creating innovative solutions and continuously
            learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* About Content */}
          <div className="fade-in-left animate order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="scale-in animate stagger-1">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  My Journey
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  As a dedicated Software Engineer, I bring a unique blend of
                  technical expertise and creative problem-solving to every
                  project. My journey in technology has been driven by an
                  insatiable curiosity and a desire to build solutions that make
                  a real difference.
                </p>
              </div>

              <div className="scale-in animate stagger-2">
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  What I Love Doing
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start slide-up animate stagger-1">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 glow"></span>
                    <span className="text-sm sm:text-base">
                      Building responsive and user-friendly web applications
                    </span>
                  </li>
                  <li className="flex items-start slide-up animate stagger-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 glow"></span>
                    <span className="text-sm sm:text-base">
                      Exploring AI/ML technologies and their practical
                      applications
                    </span>
                  </li>
                  <li className="flex items-start slide-up animate stagger-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 glow"></span>
                    <span className="text-sm sm:text-base">
                      Writing clean, maintainable, and scalable code
                    </span>
                  </li>
                  <li className="flex items-start slide-up animate stagger-4">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 glow"></span>
                    <span className="text-sm sm:text-base">
                      Learning new technologies and staying updated with
                      industry trends
                    </span>
                  </li>
                </ul>
              </div>

              <div className="scale-in animate stagger-3">
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  Current Focus
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I'm currently expanding my expertise in artificial
                  intelligence and machine learning, while continuously refining
                  my full-stack development skills. I believe in the power of
                  technology to solve complex problems and create meaningful
                  impact.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="fade-in-right animate order-1 lg:order-2">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover-lift interactive-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center bounce-in animate">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-item group magnetic hover-glow"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      />
                      <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                        {skill.name}
                      </span>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  );
                })}
              </div>

              {/* Floating skill particles */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/30 rounded-full float float-delay-1"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent/30 rounded-full float float-delay-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
