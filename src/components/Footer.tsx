import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hitesh-kumar123',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hitesh-kumar-dev/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:hiteshdevkumar2003@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold text-primary mb-6 hover:text-accent transition-colors duration-300"
          >
            HK
          </button>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <IconComponent className="w-5 h-5 text-background group-hover:text-white" />
                </a>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mb-8">
            <p className="text-lg font-medium text-primary italic">
              "Think. Build. Deliver."
            </p>
            <p className="text-background/80 mt-2">
              Passionate about creating innovative solutions that make a difference.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 text-background/80">
            <p className="flex items-center">
              © {currentYear} Hitesh Kumar. All rights reserved.
            </p>
            <span className="hidden md:block">•</span>
            <p className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;