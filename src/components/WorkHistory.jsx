import { motion } from 'framer-motion'
import { HiOutlineBriefcase } from 'react-icons/hi'

const experiences = [
  {
    role: "Senior Technical Architect",
    promotion: {
      from: "Technical Architect",
      date: "April 2025"
    },
    company: "SparxIT Solutions Pvt Ltd",
    duration: "Mar 2023 - Present",
    description: [
      "Spearheaded MERN stack development (MongoDB, Express.js, React, Node.js) with Redis caching and Kafka event streaming",
      "Architected microservices using TypeScript, implemented CI/CD pipelines, and maintained 90%+ test coverage",
      "Led agile ceremonies and client communications while mentoring junior developers in modern JavaScript practices"
    ]
  },
  {
    role: "Project Lead",
    company: "INADEV India Pvt Ltd",
    promotion: {
      from: "React JS Developer",
      date: "September 2023"
    },
    duration: "Aug 2023 - Dec 2023",
    description: [
      "Led and mentored a team of 15 frontend developers, driving best practices in React development and code quality",
      "Achieved 50% performance boost through React hooks optimization and GraphQL implementation for efficient data fetching",
      "Established weekly technical mentoring program, elevating team's expertise in modern React patterns and client-side architecture"
    ]
  },
  {
    role: "Sr. Full Stack Developer",
    company: "Tophat Software Pvt Ltd",
    duration: "Nov 2022 - June 2023",
    description: [
      "Drove 85% client retention through microservices architecture using Docker containerization and CI/CD pipelines",
      "Architected full-stack solutions with Next.js SSR, Redux Toolkit for state management, and MongoDB aggregation pipelines",
      "Led technical mentoring on advanced React patterns, custom hooks, and containerized development workflows",
      "Established coding standards focusing on TypeScript, unit testing (Jest/RTL), and component reusability"
    ]
  },
  {
    role: "Full Stack Web Developer",
    company: "44Kart",
    duration: "Jan 2019 - Oct 2022",
    description: [
      "Led full-stack development of e-commerce platform using React, Node.js, and MongoDB",
      "Architected scalable microservices architecture with Docker containerization",
      "Implemented real-time inventory tracking with WebSockets and Redis",
      "Developed RESTful APIs with Express.js and integrated with third-party services"
    ]
  }
]

const WorkHistory = () => {
  return (
    <section id="work-section" className="min-h-screen bg-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 py-20">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4">Professional Journey</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Work <span className="text-orange-500">History</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-zinc-800" />
              )}
              
              <div className="flex gap-6 p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <HiOutlineBriefcase className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      {exp.promotion && (
                        <p className="text-sm text-orange-500 mt-1">
                          Promoted from {exp.promotion.from} in {exp.promotion.date}
                        </p>
                      )}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-orange-500 mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                        className="text-zinc-400 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkHistory
