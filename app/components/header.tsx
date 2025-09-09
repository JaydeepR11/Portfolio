"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <div className="md:hidden">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">Jaydeep.dev</span>
          </Link>
        </div>
        <div className="hidden md:flex mr-4">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">
              Jaydeep.dev
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#tech-stack"
              className="transition-colors hover:text-foreground/80"
            >
              Tech Stack
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </Link>
            <Link
              href="#publications"
              className="transition-colors hover:text-foreground/80"
            >
              Publications
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <a
            href="https://drive.google.com/file/d/1hiVtgIxjcCVRS5bTt-idbbUaB4Cb0IOH/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-center items-center flex-row"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
