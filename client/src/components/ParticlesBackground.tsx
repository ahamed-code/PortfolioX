import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Responsive configuration
    const isMobile = window.innerWidth < 640;
    const dpr = window.devicePixelRatio || 1;
    const particleCount = isMobile ? 40 : 120;
    const margin = isMobile ? 5 : 20;
    const colors = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981"];
    const velocityMultiplier = 0.7;
    const repulseRadius = isMobile ? 90 : 200;
    const repulsePower = isMobile ? 0.19 : 0.45;

    // Particle setup and responsive (persists reference)
    const initParticles = () => {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * (width - margin * 2) + margin,
          y: Math.random() * (height - margin * 2) + margin,
          vx: (Math.random() - 0.5) * velocityMultiplier,
          vy: (Math.random() - 0.5) * velocityMultiplier,
          size: Math.random() * 2 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // Always reposition on every screen change
    const resizeCanvas = () => {
      // Retina-ready resizing
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    // Mouse & touch cursor
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Click/Touch impulse ("push")
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let px: number, py: number;
      if ("touches" in e) {
        px = e.touches[0].clientX - rect.left;
        py = e.touches[0].clientY - rect.top;
      } else {
        px = (e as MouseEvent).clientX - rect.left;
        py = (e as MouseEvent).clientY - rect.top;
      }
      particlesRef.current.forEach((p) => {
        const dx = p.x - px;
        const dy = p.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < repulseRadius) {
          const angle = Math.atan2(dy, dx);
          const strength = (repulseRadius - dist) / repulseRadius;
          p.vx += Math.cos(angle) * strength * 2.1;
          p.vy += Math.sin(angle) * strength * 2.1;
        }
      });
    };
    canvas.addEventListener("mousedown", handlePointer);
    canvas.addEventListener("touchstart", handlePointer);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Particle motion and bounce
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.991;
        particle.vy *= 0.991;

        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        if (particle.x < margin || particle.x > width - margin)
          particle.vx *= -1;
        if (particle.y < margin || particle.y > height - margin)
          particle.vy *= -1;

        // Cursor super-cutting repulsion
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = particle.x - mouse.current.x;
          const dy = particle.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < repulseRadius) {
            const angle = Math.atan2(dy, dx);
            particle.vx += repulsePower * Math.cos(angle);
            particle.vy += repulsePower * Math.sin(angle);
          }
        }

        // Draw particle (brighter)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();

        // Draw connections (fainter)
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            const grad = ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y
            );
            grad.addColorStop(0, particle.color);
            grad.addColorStop(1, other.color);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = grad;
            ctx.globalAlpha = 0.12;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mousedown", handlePointer);
      canvas.removeEventListener("touchstart", handlePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
      }}
    />
  );
};

export default ParticlesBackground;
