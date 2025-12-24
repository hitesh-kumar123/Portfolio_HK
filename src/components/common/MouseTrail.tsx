import { useEffect, useState } from "react";

const MouseTrail = () => {
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Add new trail point
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId }];
        trailId++;

        // Keep only last 20 points
        if (newTrail.length > 20) {
          return newTrail.slice(-20);
        }
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main dot */}
      <div
        className="absolute w-3 h-3 bg-primary/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* Trail dots */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - index / trail.length,
            scale: 1 - (index / trail.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
