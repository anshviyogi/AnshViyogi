import { motion } from 'framer-motion'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import SkillSet from './components/SkillSet'
import WorkHistory from './components/WorkHistory'
import ProjectShowcase from './components/ProjectShowcase'

function App() {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
      </div>
      
      {/* Welcome Section - Full Height */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-24 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="text-white">Ansh</span>{' '}
            <span className="text-zinc-400">Viyogi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-orange-500">
            Full Stack Developer
          </h2>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-12 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Passionate MERN Stack developer with expertise in building scalable web applications.
            Specializing in React.js, Node.js, and modern web technologies to create
            exceptional user experiences and robust backend solutions.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a 
              href="https://github.com/anshviyogi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ansh-v-6b664111a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/anshviyogi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/anshviyogi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white transition-all backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600/50"
              aria-label="Facebook Profile"
            >
              <FiFacebook className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects-section')
                projectsSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all group shadow-lg shadow-orange-500/20"
            >
              BUILD SPACE
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => {
                const workSection = document.getElementById('work-section')
                workSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border border-zinc-500 hover:border-zinc-400 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all group backdrop-blur-sm"
            >
              WORK HISTORY
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => {
            const skillsSection = document.getElementById('skills-section')
            skillsSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-all shadow-lg shadow-orange-500/20"
          aria-label="Scroll to next section"
        >
          <BsChevronDoubleDown className="text-2xl text-white animate-bounce" />
        </button>
      </section>

      {/* Skills Section */}
      <SkillSet />
      <WorkHistory />
      <ProjectShowcase />

      {/* Quote Section */}
      <section className="min-h-[40vh] bg-black/90 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-9xl text-orange-500/10 font-bold">“</div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                Believe in <span className="text-orange-500 relative inline-block">HUSTLE</span> <br className="hidden md:block" />
                <span className="text-zinc-500">not in</span> <span className="line-through text-zinc-600">HOPE</span>
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl italic">— Ansh Viyogi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="min-h-screen bg-black/90 relative overflow-hidden py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider">Get In Touch</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Let's Work <span className="text-orange-500">Together</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Ready to start your next project? I'm here to turn your ideas into reality.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/20 hover:bg-zinc-900/60 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Let's Connect</h3>
                    <p className="text-zinc-400">Feel free to reach out for collaborations or just a friendly hello</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-orange-500/20 hover:bg-zinc-900/60 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:ansh.viyogi12@gmail.com" className="text-orange-500 hover:text-orange-400 transition-colors">
                      ansh.viyogi12@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                const name = e.target.elements.name.value
                const email = e.target.elements.email.value
                const message = e.target.elements.message.value
                const mailtoLink = `mailto:ansh.viyogi12@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
                window.location.href = mailtoLink
              }}
            >
              <div className="group">
                <label className="block text-zinc-400 text-sm mb-2 group-focus-within:text-orange-500 transition-colors">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 focus:border-orange-500/50 text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-zinc-400 text-sm mb-2 group-focus-within:text-orange-500 transition-colors">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 focus:border-orange-500/50 text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>
              <div className="group">
                <label className="block text-zinc-400 text-sm mb-2 group-focus-within:text-orange-500 transition-colors">Your Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 focus:border-orange-500/50 text-white placeholder:text-zinc-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all group shadow-lg shadow-orange-500/20"
              >
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
