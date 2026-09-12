import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Max tilt in degrees (default 6)
  spotlight?: boolean; // Show cursor radial spotlight effect
  spotlightColor?: string; // CSS color string (default "rgba(64, 87, 255, 0.08)")
  disabled?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 5,
  spotlight = true,
  spotlightColor = "rgba(64, 87, 255, 0.08)",
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 200, mass: 0.1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isTouch || !cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const xPos = e.clientX - left;
    const yPos = e.clientY - top;

    rawX.set(xPos);
    rawY.set(yPos);

    mouseX.set(xPos / width);
    mouseY.set(yPos / height);
  };

  const handleMouseEnter = () => {
    if (!disabled && !isTouch) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  if (disabled || isTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 transition-shadow duration-300 ${className}`}
    >
      {children}

      {/* Dynamic Cursor Spotlight Overlay */}
      {spotlight && isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30"
          style={{
            background: `radial-gradient(400px circle at ${rawX.get()}px ${rawY.get()}px, ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
};
