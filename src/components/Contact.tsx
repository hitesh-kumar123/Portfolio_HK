import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hiteshdevkumar2003@gmail.com",
      href: "mailto:hiteshdevkumar2003@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/hitesh-kumar-dev/",
      color: "text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/hitesh-kumar123",
      color: "text-gray-800",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute top-16 left-20 w-24 h-24 bg-primary/5 rounded-full float float-delay-1"></div>
      <div className="absolute bottom-24 right-24 w-20 h-20 bg-accent/5 rounded-lg float float-delay-2"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rounded-full float float-delay-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up animate">
          <h2 className="section-title text-reveal">
            <span className="stagger-1">C</span>
            <span className="stagger-2">o</span>
            <span className="stagger-3">n</span>
            <span className="stagger-4">t</span>
            <span className="stagger-5">a</span>
            <span className="stagger-1">c</span>
            <span className="stagger-2">t</span>
            <span className="stagger-3"> </span>
            <span className="stagger-4">M</span>
            <span className="stagger-5">e</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 slide-up animate stagger-1">
            Let's connect and discuss how we can work together to bring your
            ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="fade-in-left animate order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg h-fit hover-lift interactive-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 bounce-in animate">
                Let's Connect
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed slide-up animate stagger-1">
                I'm always excited to hear about new opportunities, interesting
                projects, or just to have a conversation about technology. Feel
                free to reach out through any of the channels below!
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 sm:p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-all duration-300 group hover-lift magnetic"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`p-2 sm:p-3 rounded-lg bg-white mr-3 sm:mr-4 ${method.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          {method.label}
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {method.value}
                        </p>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary/10 rounded-lg glow">
                <p className="text-xs sm:text-sm text-primary font-medium">
                  💡 Open to new opportunities and collaborations!
                </p>
              </div>

              {/* Floating particles */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-primary/30 rounded-full float float-delay-1"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-accent/30 rounded-full float float-delay-2"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right animate order-1 lg:order-2">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover-lift interactive-card">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 bounce-in animate">
                Send a Message
              </h3>

              {isSubmitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 sm:gap-3 text-green-800 scale-in animate">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="slide-up animate stagger-1">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input text-sm sm:text-base hover-glow focus:scale-105 transition-transform duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="slide-up animate stagger-2">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input text-sm sm:text-base hover-glow focus:scale-105 transition-transform duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="slide-up animate stagger-3">
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-input resize-none text-sm sm:text-base hover-glow focus:scale-105 transition-transform duration-300"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base hover-lift magnetic"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-3 sm:mt-4 text-center slide-up animate stagger-4">
                This form is for demonstration purposes. In a real
                implementation, you would integrate with a backend service or
                email provider.
              </p>

              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
