"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  const { theme } = useTheme();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    function getParticleColor(theme: string | undefined) {
      return theme === "light"
        ? "rgba(0, 0, 0, 0.5)"
        : "rgba(255, 255, 255, 0.5)";
    }

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw(color: string) {
        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getParticleColor(theme);
      for (const particle of particles) {
        particle.update();
        particle.draw(color);
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center -mt-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
      />
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I'm Jaydeep
              <br />
              <span>
                a <Typewriter words={["programmer", "developer", "student"]} />
              </span>
            </h1>

            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Building digital experiences with modern technologies. Focused on
              creating elegant solutions to complex problems.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="https://github.com/JaydeepR11" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/jaydeeprawat" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/jaydeepr11" target="_blank">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:jaydeeprawat456@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
