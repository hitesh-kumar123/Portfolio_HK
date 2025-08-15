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
      {/* Background decoration with floating animation */}
      <div
        className="absolute inset-0 opacity-50 float float-delay-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008080' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full float float-delay-2"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-lg float float-delay-3"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full float float-delay-1"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in-up animate">
          {/* Profile Image with enhanced animations */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-6 sm:mb-8 mt-8 sm:mt-16 lg:mt-24">
            <img
              src={profileImage}
              alt="Hitesh Kumar - Software Engineer"
              className="profile-image w-full h-full magnetic hover-glow"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-70 -z-10 glow"></div>

            {/* Floating particles around profile image */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary/60 rounded-full float float-delay-1"></div>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent/60 rounded-full float float-delay-2"></div>
            <div className="absolute -bottom-3 -left-6 w-2.5 h-2.5 bg-primary/40 rounded-full float float-delay-3"></div>
          </div>

          {/* Name with text reveal animation */}
          <div className="text-reveal mb-3 sm:mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
              <span className="stagger-1">H</span>
              <span className="stagger-2">i</span>
              <span className="stagger-3">t</span>
              <span className="stagger-4">e</span>
              <span className="stagger-5">s</span>
              <span className="stagger-1">h</span>
              <span className="stagger-2"> </span>
              <span className="stagger-3">K</span>
              <span className="stagger-4">u</span>
              <span className="stagger-5">m</span>
              <span className="stagger-1">a</span>
              <span className="stagger-2">r</span>
            </h1>
          </div>

          {/* Title with slide-up animation */}
          <h2 className="slide-up animate text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6 stagger-1">
            Software Engineer
          </h2>

          {/* Tagline with bounce animation */}
          <p className="bounce-in animate text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 sm:mb-8 stagger-2">
            Think. Build. Deliver.
          </p>

          {/* Description with staggered fade-in */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="fade-in-up animate text-base sm:text-lg text-muted-foreground leading-relaxed stagger-1">
              Hi, I'm a Software Engineer with a strong foundation in web
              development and a passion for building high-quality digital
              experiences. I specialize in the{" "}
              <span className="text-primary font-semibold shimmer">
                MERN stack
              </span>
              (MongoDB, Express.js, React, Node.js) and have hands-on experience
              with Java and Python. I take pride in writing clean, efficient,
              and scalable code to deliver robust, user-friendly applications.
            </p>
            <p className="fade-in-up animate text-base sm:text-lg text-muted-foreground leading-relaxed mt-3 sm:mt-4 stagger-2">
              I'm also interested in{" "}
              <span className="text-primary font-semibold shimmer">
                Artificial Intelligence and Machine Learning
              </span>
              , and have started exploring and building projects in this area.
              Driven by curiosity and a commitment to continuous learning, I
              stay up to date with the latest technologies to solve complex
              problems and create impactful solutions.
            </p>
          </div>

          {/* Action Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <button
              onClick={scrollToContact}
              className="btn-hero group w-full sm:w-auto interactive-card hover-lift"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Scroll Indicator with pulse animation */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce z-20 hover-rotate magnetic"
            >
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
