import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes with staggered delays
          const target = entry.target;

          if (target.classList.contains("fade-in-up")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("fade-in-left")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("fade-in-right")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("scale-in")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("slide-up")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("bounce-in")) {
            target.classList.add("animate");
          }

          if (target.classList.contains("rotate-in")) {
            target.classList.add("animate");
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-up, .bounce-in, .rotate-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
