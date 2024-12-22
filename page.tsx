// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Github, Twitter, Moon, Sun, Code, Heart, Tv, Music, Layout, Zap, GitBranch, Briefcase } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import ProjectCard from './components/ProjectCard'
// import AnimatedLogo from './components/AnimatedLogo'

// export default function Portfolio() {
//   const [isDark, setIsDark] = useState(true)

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
//       <div className="bg-background text-foreground min-h-screen px-4 sm:px-8 py-8">
//         {/* Navigation */}
//         <nav className="max-w-4xl mx-auto flex items-center justify-between mb-16">
//           <div className="flex gap-6">
//             <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
//               home
//             </Link>
//             <Link href="/projects" className="text-primary hover:text-primary/80 transition-colors">
//               projects
//             </Link>
//           </div>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsDark(!isDark)}
//             className="rounded-full"
//           >
//             {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </Button>
//         </nav>

//         {/* Main Content */}
//         <main className="max-w-4xl mx-auto space-y-16">
//           {/* Hero Section */}
//           <section className="space-y-6">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-500">
//               hey, I'm tushar negi
//             </h1>
//             <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 MERN Developer ⚛️ | Anime Fan | Tech Enthusiast 🚀 | Creating web apps with creativity ✨
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 I'm a passionate full-stack developer specializing in the MERN stack. With a keen eye for design and a love for clean, efficient code, I bring creative web applications to life. My enthusiasm for technology extends beyond just coding – I'm always exploring the latest tech trends and finding ways to incorporate them into my projects.
//               </p>
//             </div>
//           </section>

//           {/* Skills Section */}
//           <section className="space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-900">
//             <h2 className="text-2xl font-semibold tracking-tight">my tech stack</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <Layout className="h-6 w-6 text-primary" />
//                     <h3 className="font-medium">Frontend</h3>
//                   </div>
//                   <ul className="space-y-2 text-sm text-muted-foreground">
//                     <li>HTML5</li>
//                     <li>CSS3</li>
//                     <li>React.js</li>
//                     <li>Next.js</li>
//                     <li>TypeScript</li>
//                     <li>Tailwind CSS</li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <Zap className="h-6 w-6 text-primary" />
//                     <h3 className="font-medium">Animation</h3>
//                   </div>
//                   <ul className="space-y-2 text-sm text-muted-foreground">
//                     <li>GSAP</li>
//                     <li>Framer Motion</li>
//                   </ul>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <GitBranch className="h-6 w-6 text-primary" />
//                     <h3 className="font-medium">Version Control & IDE</h3>
//                   </div>
//                   <ul className="space-y-2 text-sm text-muted-foreground">
//                     <li>Git</li>
//                     <li>GitHub</li>
//                     <li>VS Code</li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>

//           {/* Interests Section */}
//           <section className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
//             <h2 className="text-2xl font-semibold tracking-tight">what I love</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <Card>
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <Code className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">MERN Stack</h3>
//                     <p className="text-sm text-muted-foreground">Building with cutting-edge tech</p>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <Tv className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Anime</h3>
//                     <p className="text-sm text-muted-foreground">Exploring vibrant stories</p>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6 flex items-center gap-4">
//                   <Music className="h-6 w-6 text-primary" />
//                   <div>
//                     <h3 className="font-medium">Music</h3>
//                     <p className="text-sm text-muted-foreground">Creating and enjoying melodies</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>

//           {/* Links Section */}
//           <section className="space-y-6 animate-in fade-in slide-in-from-bottom-7 duration-1100">
//             <h2 className="text-2xl font-semibold tracking-tight">find me online</h2>
//             <div className="flex flex-wrap gap-4">
//               <Button variant="outline" asChild>
//                 <Link href="https://github.com/tusharnegi" className="gap-2">
//                   <Github className="h-4 w-4" />
//                   GitHub
//                 </Link>
//               </Button>
//               <Button variant="outline" asChild>
//                 <Link href="https://twitter.com/tusharnegi" className="gap-2">
//                   <Twitter className="h-4 w-4" />
//                   X (Twitter)
//                 </Link>
//               </Button>
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1200">
//             <h2 className="text-2xl font-semibold tracking-tight">featured projects</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <ProjectCard
//                 title="Project 1"
//                 description="A brief description of Project 1"
//                 link="/projects#project1"
//               />
//               <ProjectCard
//                 title="Project 2"
//                 description="A brief description of Project 2"
//                 link="/projects#project2"
//               />
//             </div>
//             <div className="text-center mt-8">
//               <Button asChild>
//                 <Link href="/projects">View All Projects</Link>
//               </Button>
//             </div>
//           </section>

//         </main>

//         {/* Footer */}
//         <footer className="max-w-4xl mx-auto mt-24 pt-8 border-t">
//           <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
//             Made with <Heart className="h-4 w-4 text-red-500" /> by tushar negi
//           </p>
//         </footer>
//       </div>
//     </div>
//   )
// }

