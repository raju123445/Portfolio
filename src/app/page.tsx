import About from '@/components/About'
import AnimatedBackground from '@/components/AnimatedBackground'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-50)' }}>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      
      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  )
}