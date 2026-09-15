import { useEffect, useRef } from 'react';

export default function ParticleNetwork() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let points = [];
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      points = Array.from({ length: width < 768 ? 16 : 36 }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.x = (point.x + point.vx + width) % width;
        point.y = (point.y + point.vy + height) % height;
        ctx.beginPath(); ctx.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,229,255,0.4)'; ctx.fill();
        for (let j = i + 1; j < points.length; j++) {
          const next = points[j];
          const distance = Math.hypot(point.x - next.x, point.y - next.y);
          if (distance > 130) continue;
          ctx.beginPath(); ctx.moveTo(point.x, point.y); ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(139,92,246,${(1 - distance / 130) * 0.2})`;
          ctx.lineWidth = 0.7; ctx.stroke();
        }
      }
      frame = requestAnimationFrame(draw);
    };
    const updateAnimation = () => {
      cancelAnimationFrame(frame);
      ctx.clearRect(0, 0, width, height);
      if (!motion.matches && !document.hidden) draw();
    };
    resize(); updateAnimation();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', updateAnimation);
    motion.addEventListener('change', updateAnimation);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', updateAnimation);
      motion.removeEventListener('change', updateAnimation);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40" aria-hidden="true" />;
}
