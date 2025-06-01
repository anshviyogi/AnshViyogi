import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { 
  SiReact, 
  SiSupabase, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiRedis, 
  SiPostgresql, 
  SiApachekafka,
  SiNextdotjs
} from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'

const projects = [
  {
    title: "Vizabiliti",
    description: "A comprehensive platform for digital accessibility testing and compliance, helping businesses make their web applications accessible to everyone.",
    role: "Full Stack Lead",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ],
    achievements: [
      "Led a team of 3 developers in building a scalable accessibility testing platform",
      "Implemented real-time data processing with Kafka for test results",
      "Built high-performance caching system using Redis",
      "Designed and optimized PostgreSQL database schema for efficient data storage"
    ],
    live: "https://www.vizabiliti.com"
  },
  {
    title: "PostPen.AI",
    description: "AI-powered LinkedIn content generation platform helping professionals build their personal brand with automated, personalized content.",
    role: "Lead Full Stack Developer",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Deno", icon: DiJavascript1, color: "#F7DF1E" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ],
    achievements: [
      "Led end-to-end development of the platform using Deno and React",
      "Implemented AI persona builder for personalized content generation",
      "Built robust scheduling system with Supabase integration",
      "Architected scalable TypeScript-based solution for future growth"
    ],
    live: "https://postpen.ai"
  },
  {
    title: "Shopmool",
    description: "Multi-vendor e-commerce platform enabling multiple sellers to showcase and sell their products with a unified shopping experience.",
    role: "Frontend Lead",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ],
    achievements: [
      "Led frontend architecture using Next.js for optimal performance",
      "Implemented SSR and dynamic routing for better SEO",
      "Built reusable component library for consistent UI",
      "Optimized page load times and Core Web Vitals"
    ],
    live: "https://shopmool.in"
  },
  {
    title: "BRC Solar Dashboard",
    description: "Custom-built dashboard for BRC Solar GmbH to manage and track solar panel sales and installations. Developed the complete frontend while integrating with Java backend.",
    role: "Frontend Developer",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ],
    achievements: [
      "Built the complete dashboard frontend from scratch",
      "Implemented real-time solar tracking analytics",
      "Created intuitive sales management interface",
      "Integrated seamlessly with Java/Spring backend"
    ],
    live: "https://brc-solar.de/en"
  },
]

function ProjectShowcase() {
  return (
    <section id="projects-section" className="min-h-screen bg-black/90 relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-orange-500 font-medium mb-4">Featured Projects</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Project <span className="text-orange-500">Showcase</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-zinc-400 text-lg">{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">{project.role}</h4>
                      <div className="flex flex-wrap gap-4">
                        {project.tech.map((tech) => (
                          <div 
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50"
                          >
                            <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                            <span className="text-zinc-300 text-sm">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-3 text-zinc-400"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/50 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>View Project</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase
