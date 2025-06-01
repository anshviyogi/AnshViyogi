import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiMongodb, 
  SiExpress, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs,
  SiRedis,
  SiApachekafka,
  SiJira,
  SiBitbucket,
  SiReactquery
} from 'react-icons/si'

const techStack = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiApachekafka, name: 'Kafka', color: '#231F20' },
  { icon: SiReactquery, name: 'React Query', color: '#FF4154' },
  { icon: SiJira, name: 'JIRA', color: '#0052CC' },
]

const skillsList = [
  {
    category: 'Frontend',
    skills: [
      'React.js with Redux & Context API',
      'Next.js for SSR & Static Sites',
      'Modern JavaScript (ES6+)',
      'TypeScript for Type Safety',
      'TailwindCSS & SCSS',
      'Responsive & Mobile-First Design',
    ]
  },
  {
    category: 'Backend',
    skills: [
      'Node.js & Express.js',
      'MongoDB with Mongoose',
      'RESTful API Design',
      'JWT Authentication',
      'Socket.io for Real-time',
      'API Security & Performance',
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git & GitHub Actions',
      'Docker Containerization',
      'AWS & Vercel Deployment',
      'Jest & React Testing Library',
      'Webpack & Vite',
      'CI/CD Pipelines',
    ]
  },
  {
    category: 'Advanced Technologies',
    skills: [
      'Kafka.js for Event Streaming',
      'Redis for Caching & Queues',
      'React Query for Data Fetching',
      'JIRA for Project Management',
      'Bitbucket & Git Workflow',
      'Advanced State Management',
    ]
  }
]

const SkillSet = () => {
  return (
    <section id="skills-section" className="min-h-screen bg-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-20">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4">Tech Stack & Expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            My <span className="text-orange-500">Skills</span>
          </h2>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-20">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 flex items-center justify-center transition-all group-hover:border-zinc-600/50 group-hover:bg-zinc-800/50">
                  <tech.icon className="w-8 h-8 lg:w-12 lg:h-12" style={{ color: tech.color }} />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900/90 rounded-full border border-zinc-800/50 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-all">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {skillsList.map((section, index) => (
            <motion.div 
              key={section.category}
              className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">{section.category}</h3>
              <ul className="space-y-3">
                {section.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex}
                    className="text-zinc-400 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSet
