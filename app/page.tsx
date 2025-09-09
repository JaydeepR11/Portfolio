import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import { ExternalLink, Mail } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Header />
        <HeroSection />

        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 lg:px-14">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-28">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
              <ProjectCard
                title="Full-stack Job Portal"
                description="A full-stack job portal with secure authentication, real-time updates, and role-based access."
                image="/HiredHive.png?height=400&width=600"
                link="https://github.com/JaydeepR11/HiredHive"
                liveLink="https://hiredhive.vercel.app/"
                tags={[
                  "React.js",
                  "React Hook",
                  "tailwind CSS",
                  "Shadcn UI",
                  "Supabase",
                  "Clerk",
                  "Vercel",
                ]}
              />
              <ProjectCard
                title="Realtime Chat App"
                description="A full-stack chat app with secure authentication, real-time messaging, and online user tracking."
                image="/RealTimeChatApp.png?height=400&width=600"
                link="https://github.com/JaydeepR11/fullstack-chat-app"
                liveLink="https://fullstack-chat-app-e8vu.onrender.com/"
                tags={[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Socket.io",
                  "Tailwind CSS",
                  "DaisyUI",
                  "Zustand",
                ]}
              />
              <ProjectCard
                title="ADmyBRAND AI Suite"
                description="ADmyBRAND AI Suite landing page, a modern, responsive, and visually stunning website built with Next.js 14 and Tailwind CSS."
                image="/Admybrand.png?height=400&width=600"
                link="https://github.com/JaydeepR11/admybrand-ai-suite"
                liveLink="https://admybrand-ai-suite-tau.vercel.app/"
                tags={[
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "ShadcnUI",
                  "Framer Motion",
                  "Vercel",
                ]}
              />
              <ProjectCard
                title="Tesla Landing Page Clone"
                description="A Tesla landing page clone, a modern, responsive, and visually stunning website built with React.js"
                image="/TeslaClone.png?height=400&width=600"
                link="https://github.com/JaydeepR11/Tesla-Clone"
                liveLink="https://tesla-clone-jr.vercel.app/"
                tags={["React.js", "JavaScript", "CSS", "Vercel"]}
              />
            </div>
          </div>
        </section>

        <section id="publications" className="py-12 px-4 md:py-24 md:px-4">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              Publications & Research
            </h3>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-2">
                  Edge Based System For Crop Suggestion Using Sensors And Deep
                  Learning
                </h4>
                <p className="text-sm text-muted-foreground mb-3">May 2023</p>
                <Link
                  href="https://drive.google.com/file/d/19xuAn2HQeb11h4etRfyK3cgeWquFE_9s"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Publication
                </Link>
              </div>
              <div className="border rounded-lg p-6">
                <h4 className="font-semibold mb-2">
                  Medicine Vending Machine using Machine Learning
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  September 2024
                </p>
                <Link
                  href="https://drive.google.com/file/d/1tnOdrfNhQUc_eZ2KCoTMYbL6QUVjRAEa"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  View Publication
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Awards & Achievements
            </h3>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="border rounded-lg p-6 text-center">
                <div className="text-2xl mb-2">🥇</div>
                <h4 className="font-semibold mb-2">
                  IT - UTSAV 2023 (Inter-University)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Won 1st place in the 'Code Ka Boss' coding competition
                  alongside my teammate
                </p>
              </div>
              <div className="border rounded-lg p-6 text-center">
                <div className="text-2xl mb-2">🥈</div>
                <h4 className="font-semibold mb-2">
                  Techspardha 2.0 (Intra-University)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Secured 2nd position in the university-level coding
                  competition
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-8 md:py-12 lg:py-12">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <div className="text-center mb-8">
                <p className="text-muted-foreground mb-4">
                  Let's connect! Feel free to reach out for collaborations,
                  opportunities, or just to say hello.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <Link
                    href="mailto:jaydeeprawat456@gmail.com"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    jaydeeprawat456@gmail.com
                  </Link>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="flex  sm:flex-row w-full shrink-0 items-center px-4 md:px-6 h-3 py-6 sm:py-4 lg:py-6 justify-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Jaydeep.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
