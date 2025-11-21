import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { 
  ChevronDown,
  Shield,
  Zap,
  Heart,
  Globe,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

function App() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const comicsRef = useRef(null)
  
  const comics = [
    "/images/comic/comic 1.jpg",
    "/images/comic/comic 2.jpg",
    "/images/comic/comic 3.jpg",
    "/images/comic/comic 4.jpg",
    "/images/comic/comic 5.jpg",
    "/images/comic/comic 6.jpg",
    "/images/comic/comic 7.jpg",
    "/images/comic/comic 8.jpg"
  ]

  return (
    <div className="bg-comic-cream text-comic-dark overflow-x-hidden font-sans">
      <Toaster position="top-center" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-comic-orange z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-comic-beige z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-comic-dark">
              ChauApps
            </div>
            
            <Link 
              to="/portfolio"
              className="bg-comic-orange text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 hover:shadow-lg transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-comic-cream">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-comic-dark">
              Your App Journey Starts Here
            </h1>
            
            <p className="text-xl md:text-2xl text-comic-brown mb-12 max-w-2xl mx-auto">
              Turning complex ideas into simple, beautiful realities.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => document.getElementById('comic-story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown className="w-10 h-10 text-comic-tan" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comic Story Section */}
      <section id="comic-story" ref={comicsRef} className="py-20 bg-comic-beige/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-comic-dark mb-4">
              How We Turn Ideas Into Apps
            </h2>
          </div>

          <div className="relative flex flex-col">
            {comics.map((comic, index) => (
              <ComicPanel key={index} src={comic} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-comic-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-comic-dark">
              More Than Just Development
            </h2>
            <p className="text-xl text-comic-brown max-w-3xl mx-auto leading-relaxed">
              Think of me as your technical co-pilot. I guide founders from idea to launch—handling design, backend systems, and App Store complexities. I also help scale your team and transition to long-term maintainers, ensuring your product is always in good hands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-comic-dark">Our Approach</h3>
              <div className="space-y-4">
                {[
                  { icon: <Shield />, title: "No Lock-in", desc: "You own all code, accounts, and assets" },
                  { icon: <Globe />, title: "Full Transparency", desc: "Understand every decision and see every update" },
                  { icon: <Zap />, title: "Education First", desc: "We teach you how your app works" },
                  { icon: <Heart />, title: "User Obsessed", desc: "We build what users want, not just specs" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-5 bg-white rounded-xl border border-comic-beige hover:shadow-md transition-shadow"
                  >
                    <div className="text-comic-orange">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-comic-dark">{item.title}</h4>
                      <p className="text-comic-brown text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-comic-dark">What You Get</h3>
              <div className="space-y-4">
                {[
                  "Weekly progress you can see and test",
                  "Direct communication, no middleman",
                  "One solution for iOS, Android, and Web",
                  "Knowledge to maintain your app independently"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border border-comic-beige hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-comic-dark">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-24 bg-gradient-to-b from-comic-cream to-comic-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-comic-dark">
              See Our Work
            </h2>
            <p className="text-xl text-comic-brown mb-10 max-w-2xl mx-auto">
              Explore the apps we've built and the founders we've helped turn their dreams into reality.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-10 py-5 bg-comic-orange text-white rounded-full font-bold text-xl hover:bg-orange-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-comic-dark text-comic-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4">ChauApps</h3>
              <p className="text-comic-tan text-sm">
                CHAU APPS COMPANY LIMITED<br/>
                Est. 2024 | Reg: 0318597324
              </p>
            </div>
            
            <div className="md:text-center">
               <Link to="/portfolio" className="text-comic-tan hover:text-white transition-colors">
                 View Portfolio
               </Link>
            </div>

            <div className="space-y-2 md:text-right">
              <a href="mailto:contact@chauapps.com" className="flex items-center gap-2 md:justify-end text-comic-tan hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> contact@chauapps.com
              </a>
              <a href="tel:+84877111123" className="flex items-center gap-2 md:justify-end text-comic-tan hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> (+84) 877 111 123
              </a>
              <div className="flex items-center gap-2 md:justify-end text-comic-tan">
                <MapPin className="w-4 h-4" /> Ho Chi Minh City, Vietnam
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
            &copy; 2025 CHAU APPS COMPANY LIMITED. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ComicPanel({ src, index }: { src: string, index: number }) {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative group w-full md:w-[40%] mb-12 md:mb-0 ${
        isEven 
          ? 'self-start md:ml-[10%]' 
          : 'self-end md:mr-[10%]'
      } ${!isFirst ? 'md:-mt-48' : ''}`}
      style={{ zIndex: index }}
    >
      <div className={`bg-white p-2 md:p-4 rounded-sm shadow-lg border-2 border-comic-dark transform transition-transform duration-500 ${
        isEven ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
      }`}>
        <img 
          src={src} 
          alt={`Comic panel ${index + 1}`} 
          className="w-full h-auto object-contain border border-gray-200"
        />
      </div>
    </motion.div>
  )
}

export default App