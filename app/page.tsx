'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, Moon, Sun, Code, Heart, Tv, Music, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from '../components/ProjectCard'
import GithubStats from '../components/GithubStats'
import SkillBadge from '../components/SkillBadge'
import Logo from '../components/Logo'

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-background text-foreground min-h-screen px-4 sm:px-8 py-8">
        {/* Navigation */}
        <nav className="max-w-4xl mx-auto flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Logo className="text-primary" />
            <div className="flex gap-6">
              <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                home
              </Link>
              <Link href="/projects" className="text-primary hover:text-primary/80 transition-colors">
                projects
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                contact
              </Link>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-500">
              hey, I&apos;m tushar negi
            </h1>
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MERN Developer ⚛️ | Anime Fan | Tech Enthusiast 🚀 | Creating web apps with creativity ✨
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate full-stack developer specializing in the MERN stack. With a keen eye for design and a love for clean, efficient code, I bring creative web applications to life. My enthusiasm for technology extends beyond just coding – I&apos;m always exploring the latest tech trends and finding ways to incorporate them into my projects.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-900">
            <h2 className="text-2xl font-semibold tracking-tight">my tech stack</h2>
            <div className="flex flex-wrap gap-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="Next.js" />
              <SkillBadge skill="TypeScript" />
              <SkillBadge skill="Tailwind CSS" />
              <SkillBadge skill="Git" />
              <SkillBadge skill="GitHub" />
              <SkillBadge skill="HTML" />
              <SkillBadge skill="CSS" />
              <SkillBadge skill="Javascript" />
            </div>
          </section>

          {/* GitHub Stats Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h2 className="text-2xl font-semibold tracking-tight">days i code</h2>
            <GithubStats />
          </section>

          {/* Projects Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-7 duration-1100">
            <h2 className="text-2xl font-semibold tracking-tight">featured projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce solution with real-time inventory management"
                link="/projects#ecommerce"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management tool with real-time updates"
                link="/projects#taskmanager"
              />
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </section>

          {/* Interests Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1200">
            <h2 className="text-2xl font-semibold tracking-tight">what I love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Code className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">MERN Stack</h3>
                    <p className="text-sm text-muted-foreground">Building with cutting-edge tech</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Tv className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Anime</h3>
                    <p className="text-sm text-muted-foreground">Exploring vibrant stories</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Music className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Music</h3>
                    <p className="text-sm text-muted-foreground">Creating and enjoying melodies</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-9 duration-1300">
            <h2 className="text-2xl font-semibold tracking-tight">get in touch</h2>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="https://github.com/tusharn3115" className="gap-2" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://twitter.com/tushxr05" className="gap-2" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  X (Twitter)
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact" className="gap-2" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-24 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by tushar negi
          </p>
        </footer>
      </div>
    </div>
  )
}

