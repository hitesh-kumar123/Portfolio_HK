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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden pt-20 sm:pt-24"
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
          {/* Profile Image - Updated positioning and sizing */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-6 sm:mb-8 mt-8 sm:mt-16 lg:mt-24">
            <img
              src={profileImage}
              alt="Hitesh Kumar - Software Engineer"
              className="profile-image w-full h-full"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-70 -z-10"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-4">
            Hitesh Kumar
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6">
            Software Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 sm:mb-8">
            Think. Build. Deliver.
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hi, I'm a Software Engineer with a strong foundation in web
              development and a passion for building high-quality digital
              experiences. I specialize in the{" "}
              <span className="text-primary font-semibold">MERN stack</span>
              (MongoDB, Express.js, React, Node.js) and have hands-on experience
              with Java and Python. I take pride in writing clean, efficient,
              and scalable code to deliver robust, user-friendly applications.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-3 sm:mt-4">
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
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <button
              onClick={scrollToContact}
              className="btn-hero group w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce z-20"
            >
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
