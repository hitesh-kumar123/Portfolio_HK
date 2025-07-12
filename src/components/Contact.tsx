import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hiteshdevkumar2003@gmail.com',
      href: 'mailto:hiteshdevkumar2003@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/hitesh-kumar-dev/',
      color: 'text-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/hitesh-kumar123',
      color: 'text-gray-800'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="section-title">Contact Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="fade-in-left animate">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to hear about new opportunities, interesting projects, 
                or just to have a conversation about technology. Feel free to reach out through 
                any of the channels below!
              </p>

              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300 group"
                    >
                      <div className={`p-3 rounded-lg bg-white mr-4 ${method.color} transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{method.label}</h4>
                        <p className="text-muted-foreground text-sm">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  💡 Open to new opportunities and collaborations!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right animate">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                This form is for demonstration purposes. In a real implementation, 
                you would integrate with a backend service or email provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;