import { motion } from "framer-motion";
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React", icon: <Code size={24} />, level: "Advanced" },
    { name: "Node.js", icon: <Server size={24} />, level: "Advanced" },
    { name: "MongoDB", icon: <Database size={24} />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <Layout size={24} />, level: "Advanced" },
    { name: "JavaScript", icon: <Code size={24} />, level: "Advanced" },
    { name: "HTML/CSS", icon: <Globe size={24} />, level: "Advanced" },
    { name: "Responsive Design", icon: <Smartphone size={24} />, level: "Advanced" },
    { name: "Git/GitHub", icon: <Code size={24} />, level: "Intermediate" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello! I'm Hitesh Kumar, a dedicated Software Engineer based in India. 
                My journey in tech started with a curiosity about how things work on the web, 
                which quickly turned into a passion for building them.
              </p>
              <p>
                I specialize in the <span className="text-primary font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js) 
                and love creating seamless, user-friendly applications. I'm always eager to learn 
                new technologies and improve my skills to stay ahead in the ever-evolving tech landscape.
              </p>
              <p>
                When I'm not coding, you can find me exploring new places, reading tech blogs, 
                or experimenting with new design trends.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">20+</h4>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">1+</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl -z-10"></div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border transition-colors gap-2 text-center group"
                  >
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
