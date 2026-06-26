import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        height: "3px",
        background: "linear-gradient(90deg, hsl(183 100% 48%), hsl(183 100% 60%), hsl(42 100% 62%))",
        scaleX,
      }}
    />
  );
};

export default ScrollProgress;
