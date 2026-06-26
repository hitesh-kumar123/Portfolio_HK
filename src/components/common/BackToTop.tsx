import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle math
  const size = 44;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-[44px] h-[44px]"
          aria-label="Back to top"
        >
         
          <svg
            width={size}
            height={size}
            className="absolute top-0 left-0 -rotate-90"
          >
          
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-border"
            />
          
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="text-primary transition-all duration-150"
            />
          </svg>

         
          <div className="w-9 h-9 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group">
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
    </>
  );
};

export default BackToTop;