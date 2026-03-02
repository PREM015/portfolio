"use client";

import React, { useEffect, useRef } from "react";

const ImmersiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
        };
        resize();
        window.addEventListener("resize", resize);

        // Subtle small stars only
        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.2 + 0.2,
            phase: Math.random() * Math.PI * 2,
        }));

        // Small drifting particles — very subtle, no big glows
        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * 5000,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5,
            color: ["rgba(6,182,212,", "rgba(139,92,246,", "rgba(236,72,153,", "rgba(16,185,129,"][Math.floor(Math.random() * 4)],
        }));

        const shootingStars: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            // Deep space background
            const bg = ctx.createLinearGradient(0, 0, 0, h);
            bg.addColorStop(0, "#020408");
            bg.addColorStop(0.5, "#060510");
            bg.addColorStop(1, "#020408");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            // Subtle nebula clouds
            [
                { x: 0.15, y: 0.05, r: 0.25, color: "rgba(6,182,212,0.04)" },
                { x: 0.85, y: 0.08, r: 0.22, color: "rgba(139,92,246,0.05)" },
                { x: 0.5, y: 0.18, r: 0.3, color: "rgba(236,72,153,0.03)" },
                { x: 0.2, y: 0.45, r: 0.28, color: "rgba(16,185,129,0.04)" },
                { x: 0.8, y: 0.6, r: 0.25, color: "rgba(6,182,212,0.04)" },
                { x: 0.5, y: 0.8, r: 0.3, color: "rgba(139,92,246,0.04)" },
                { x: 0.1, y: 0.9, r: 0.24, color: "rgba(236,72,153,0.03)" },
                { x: 0.9, y: 0.94, r: 0.22, color: "rgba(16,185,129,0.04)" },
            ].forEach(({ x, y, r, color }) => {
                const nx = x * w + Math.sin(time * 0.0002 + x * 8) * 30;
                const ny = y * h + Math.cos(time * 0.0002 + y * 8) * 25;
                const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * Math.min(w, h));
                grad.addColorStop(0, color);
                grad.addColorStop(1, "transparent");
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, w, h);
            });

            // Tiny stars
            stars.forEach((star) => {
                const opacity = 0.3 + Math.sin(time * 0.008 + star.phase) * 0.35 + 0.35;
                const sx = star.x * w;
                const sy = star.y * h;
                ctx.beginPath();
                ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${Math.min(1, opacity)})`;
                ctx.fill();
            });

            // Tiny drifting particles (no massive glow)
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}0.4)`;
                ctx.fill();
            });

            // Rare shooting stars
            if (shootingStars.length < 2 && Math.random() < 0.002) {
                shootingStars.push({
                    x: Math.random() * w,
                    y: Math.random() * h * 0.3,
                    length: Math.random() * 80 + 40,
                    speed: Math.random() * 8 + 6,
                    opacity: 1,
                });
            }
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];
                s.x += s.speed;
                s.y += s.speed * 0.5;
                s.opacity -= 0.015;
                if (s.opacity <= 0 || s.x > w) { shootingStars.splice(i, 1); continue; }
                const g = ctx.createLinearGradient(s.x - s.length, s.y - s.length * 0.5, s.x, s.y);
                g.addColorStop(0, "transparent");
                g.addColorStop(1, `rgba(255,255,255,${s.opacity})`);
                ctx.beginPath();
                ctx.moveTo(s.x - s.length, s.y - s.length * 0.5);
                ctx.lineTo(s.x, s.y);
                ctx.strokeStyle = g;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            time++;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        const resizeObserver = new ResizeObserver(() => {
            canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
        });
        resizeObserver.observe(document.body);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.9 }}
        />
    );
};

export default ImmersiveBackground;
