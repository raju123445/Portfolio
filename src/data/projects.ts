export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'data' | 'other'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI and secure payment integration.',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, order management, and secure payment processing. Implemented responsive design and optimized for performance.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: '2D Physics Engine',
    description: 'A lightweight 2D physics engine built from scratch for game development.',
    longDescription: 'Developed a custom 2D physics engine from scratch using JavaScript and Canvas API. Features collision detection, gravity simulation, and particle systems for game development.',
    image: '/api/placeholder/600/400',
    technologies: ['JavaScript', 'Canvas API', 'WebGL', 'Game Development'],
    liveUrl: 'https://physics-engine.example.com',
    githubUrl: 'https://github.com/username/physics-engine',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'Collaborative task management tool with team features and project tracking.',
    longDescription: 'Created a comprehensive task management application that enables teams to collaborate effectively. Includes project organization, deadline tracking, team member assignments, and progress monitoring.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Node.js', 'Express', 'Socket.io', 'MySQL'],
    liveUrl: 'https://taskmanager.example.com',
    githubUrl: 'https://github.com/username/task-manager',
    featured: true,
    category: 'web'
  },
  {
    id: '4',
    title: 'Another Mobile App',
    description: 'A cross-platform mobile application for tracking daily habits and goals.',
    longDescription: 'Built a mobile application using React Native for habit tracking and goal setting. Features include progress tracking, reminders, and social sharing capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.habitsapp',
    githubUrl: 'https://github.com/username/habits-app',
    featured: true,
    category: 'mobile'
  },
  {
    id: '5',
    title: 'Machine Learning Model',
    description: 'Developed a machine learning model for sentiment analysis of social media data.',
    longDescription: 'Developed a machine learning model that analyzes customer behavior patterns to provide personalized recommendations. Implemented using advanced algorithms and trained on large datasets.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Jupyter'],
    githubUrl: 'https://github.com/username/ml-sentiment-analysis',
    featured: true,
    category: 'data'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'This very website, built with Next.js, TypeScript, and Tailwind CSS.',
    longDescription: 'Designed and developed a modern, responsive portfolio website to showcase my work and skills. Features smooth animations, dark mode, and optimized performance.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/username/portfolio',
    featured: true,
    category: 'web'
  }
]

// Helper functions for filtering projects
export const getFeaturedProjects = () => projects.filter(project => project.featured)

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category)

export const getProjectById = (id: string) => 
  projects.find(project => project.id === id)
