import { useEffect, useState, useRef } from "react";

interface Point {
  x: number;
  y: number;
  id: number;
  age: number;
}

const MouseTrail = () => {
  const [trail, setTrail] = useState<Point[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const trailIdRef = useRef(0);
  const trailRef = useRef<Point[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const newPoint: Point = {
        x: e.clientX,
        y: e.clientY,
        id: trailIdRef.current++,
        age: Date.now(),
      };

      const updated = [...trailRef.current, newPoint].slice(-25);
      trailRef.current = updated;
      setTrail(updated);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Fade out points over time even when mouse stops moving
    const interval = setInterval(() => {
      const now = Date.now();
      const filtered = trailRef.current.filter((p) => now - p.age < 500);
      if (filtered.length !== trailRef.current.length) {
        trailRef.current = filtered;
        setTrail(filtered);
      }
    }, 30);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Main cursor dot */}
      <div
        className="absolute w-3 h-3 bg-primary/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
        }}
      />

      {/* Trail dots */}
      {trail.map((point) => {
        const agePercent = (Date.now() - point.age) / 500; // 0 to 1
        const opacity = Math.max(0, 1 - agePercent) * 0.4;
        const scale = Math.max(0, 1 - agePercent);

        return (
          <div
            key={point.id}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: point.x,
              top: point.y,
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              boxShadow: "0 0 6px hsl(var(--primary) / 0.3)",
            }}
          />
        );
      })}
    </div>
  );
};

export default MouseTrail;
