import { 
  Database, 
  Code, 
  Palette, 
  Server, 
  Globe, 
  GitBranch,
  Coffee,
  Cpu
} from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Database, name: 'MongoDB', color: 'text-green-600' },
    { icon: Server, name: 'Express.js', color: 'text-gray-600' },
    { icon: Code, name: 'React', color: 'text-blue-500' },
    { icon: Server, name: 'Node.js', color: 'text-green-500' },
    { icon: Globe, name: 'HTML', color: 'text-orange-500' },
    { icon: Palette, name: 'CSS', color: 'text-blue-400' },
    { icon: Palette, name: 'Bootstrap', color: 'text-purple-600' },
    { icon: Palette, name: 'Tailwind CSS', color: 'text-cyan-500' },
    { icon: Code, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: Database, name: 'MySQL', color: 'text-blue-600' },
    { icon: Code, name: 'Redux', color: 'text-purple-500' },
    { icon: GitBranch, name: 'Git', color: 'text-orange-600' },
    { icon: GitBranch, name: 'GitHub', color: 'text-gray-800' },
    { icon: Coffee, name: 'Java', color: 'text-red-600' },
    { icon: Cpu, name: 'Python', color: 'text-blue-500' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="fade-in-left animate">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a dedicated Software Engineer, I bring a unique blend of technical expertise 
                  and creative problem-solving to every project. My journey in technology has been 
                  driven by an insatiable curiosity and a desire to build solutions that make a 
                  real difference.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">What I Love Doing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Building responsive and user-friendly web applications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Exploring AI/ML technologies and their practical applications
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Writing clean, maintainable, and scalable code
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Learning new technologies and staying updated with industry trends
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Current Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently expanding my expertise in artificial intelligence and machine learning, 
                  while continuously refining my full-stack development skills. I believe in the power 
                  of technology to solve complex problems and create meaningful impact.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="fade-in-right animate">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Technical Skills</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-item group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className={`w-8 h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                      <span className="text-sm font-medium text-foreground text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;