import { ChevronDown, Download } from "lucide-react";
import profileImage from "../assets/Hitesh_Kumar.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008080' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-up animate">
          {/* Profile Image - Updated positioning */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto mb-8 mt-16 lg:mt-24">
            <img
              src={profileImage}
              alt="Hitesh Kumar - Software Engineer"
              className="profile-image"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-70 -z-10"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Hitesh Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Software Engineer
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
            Think. Build. Deliver.
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm a Software Engineer with a strong foundation in web
              development and a passion for building high-quality digital
              experiences. I specialize in the{" "}
              <span className="text-primary font-semibold">MERN stack</span>
              (MongoDB, Express.js, React, Node.js) and have hands-on experience
              with Java and Python. I take pride in writing clean, efficient,
              and scalable code to deliver robust, user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I'm also interested in{" "}
              <span className="text-primary font-semibold">
                Artificial Intelligence and Machine Learning
              </span>
              , and have started exploring and building projects in this area.
              Driven by curiosity and a commitment to continuous learning, I
              stay up to date with the latest technologies to solve complex
              problems and create impactful solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center mb-16">
            <button onClick={scrollToContact} className="btn-hero group">
              Contact Me
              <ChevronDown className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            {/* <a
              href="#"
              className="btn-outline-primary group inline-flex items-center justify-center w-auto"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download feature can be added here");
              }}
            >
              <Download className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
              Download Resume
            </a> */}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce z-20"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
