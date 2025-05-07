import { useEffect, useRef } from 'react';
import React from 'react';
import "./Background.css";

const Background = ({ minParticles = 40, density = 10000 }) => {
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const particles = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return;

    const ctx = canvas.getContext('2d');
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.baseX = x;
        this.baseY = y;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.10)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width) this.x = canvas.width;
        if (this.x < 0) this.x = 0;
        if (this.y > canvas.height) this.y = canvas.height;
        if (this.y < 0) this.y = 0;
      
        this.x += (Math.random() - 0.5) * 0.5;
        this.y += (Math.random() - 0.5) * 0.5;
      
        // Repulsion logic to avoid overlap
        particles.current.forEach((other) => {
          if (other !== this) {
            const dx = this.x - other.x;
            const dy = this.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < 70) {
              const angle = Math.atan2(dy, dx);
              const force = (70 - distance) / 70;
              this.x += Math.cos(angle) * force;
              this.y += Math.sin(angle) * force;
            }
          }
        });
      
        this.draw();
      }
      
    }

    // const init = () => {
    //   particles.current = [];
    //   const area = canvas.width * canvas.height;
    //   const numParticles = Math.max(Math.floor(area / density), minParticles);

    //   for (let i = 0; i < numParticles; i++) {
    //     const x = Math.random() * canvas.width;
    //     const y = Math.random() * canvas.height;
    //     const size = Math.random() * 3 + 1;
    //     particles.current.push(new Particle(x, y, size));
    //   }
    // };
    const init = () => {
      particles.current = [];
      const boxArea = canvas.width * canvas.height;
      
      // Calculate particles based on THIS box's size
      const numParticles = Math.max(
        Math.floor(boxArea / density),  // Density scales with area
        minParticles                    // But never below minimum
      );
    
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 1;
        particles.current.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            size
          )
        );
      }
    };

    const drawLines = () => {
      const maxDistance = 100;
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / maxDistance) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawCursorLines = () => {
      for (let i = 0; i < particles.current.length; i++) {
        const dx = mouse.x - particles.current[i].x;
        const dy = mouse.y - particles.current[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance < 100) {
          ctx.strokeStyle = 'rgba(187, 173, 128, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particles.current[i].x, particles.current[i].y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => particle.update());
      drawLines();
      drawCursorLines();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const updateCanvasSize = () => {
      const { width, height } = box.getBoundingClientRect();
      
      // Only resize if dimensions actually changed
      if (Math.abs(canvas.width - width) > 5 || 
      Math.abs(canvas.height - height) > 5) {
    canvas.width = width;
    canvas.height = height;
    init(); // Reinitialize particles for new dimensions
      }
    };

    // Initial setup
    updateCanvasSize();
    animate();

    // Mouse movement handler
    const handleMouseMove = (e) => {
      const boxBounds = box.getBoundingClientRect();
      mouse.x = e.clientX - boxBounds.left;
      mouse.y = e.clientY - boxBounds.top;
    };

    // Resize observer for container changes
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(box);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [minParticles, density]);

  return (
    <div ref={boxRef} className="background-wrapper">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Background;