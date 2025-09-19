'use client'

import { useEffect, useState } from 'react'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
]

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I&apos;m a passionate full-stack developer with over 3 years of experience building
              scalable web applications. I love creating efficient, user-friendly solutions
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Download Resume
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
                View Experience
              </button>
            </div>
          </div>

          {/* Skills */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:bg-muted transition-colors"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
