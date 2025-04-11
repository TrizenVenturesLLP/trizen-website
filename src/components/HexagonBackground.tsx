import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

const HexagonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef<Point>({ x: 0, y: 0 });
  const hexagons = useRef<Point[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initHexagons();
    };

    const initHexagons = () => {
      hexagons.current = [];
      const hexSize = 40;
      const horizontalSpacing = hexSize * 1.7;
      const verticalSpacing = hexSize * 1.5;
      
      for (let y = 0; y < canvas.height + hexSize; y += verticalSpacing) {
        const offset = (Math.floor(y / verticalSpacing) % 2) * (horizontalSpacing / 2);
        for (let x = 0; x < canvas.width + hexSize; x += horizontalSpacing) {
          hexagons.current.push({ x: x - offset, y });
        }
      }
    };

    const drawHexagon = (x: number, y: number, size: number, distanceFromMouse: number) => {
      if (!ctx) return;

      const sides = 6;
      const maxDistance = 200;
      const scaleFactor = Math.max(0, 1 - distanceFromMouse / maxDistance);
      const glowIntensity = scaleFactor * 0.5;
      const actualSize = size * (1 + scaleFactor * 0.2);

      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
        const px = x + actualSize * Math.cos(angle);
        const py = y + actualSize * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();

      // Glow effect
      ctx.strokeStyle = `rgba(108, 98, 226, ${0.2 + glowIntensity})`;
      ctx.lineWidth = 1 + scaleFactor;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hexagons.current.forEach((hexagon) => {
        const dx = hexagon.x - mousePosition.current.x;
        const dy = hexagon.y - mousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        drawHexagon(hexagon.x, hexagon.y, 20, distance);
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default HexagonBackground; 