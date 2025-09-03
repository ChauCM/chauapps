import { useState, useRef } from 'react'
import { motion, useScroll, useInView, AnimatePresence } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Rocket,
  Code2,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Mail,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Globe,
  Building2,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeService, setActiveService] = useState(0)
  
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const showcaseRef = useRef(null)
  const journeyRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const showcaseInView = useInView(showcaseRef, { once: true, amount: 0.3 })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create email content
    const subject = `New App Project Inquiry from ${formData.name}`;
    const body = `
Hello ChauApps Team,

I'm interested in discussing a new app project with you.

My Details:
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType || 'Not specified'}
Budget Range: ${formData.budget || 'Not specified'}

Project Description:
${formData.message || 'No additional details provided'}

Looking forward to hearing from you!

Best regards,
${formData.name}
    `.trim();

    // Encode for URL
    const mailtoLink = `mailto:hello@chauapps.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      toast.success('Opening your email client...', {
        duration: 3000,
        style: {
          background: '#10B981',
          color: '#fff',
        },
      })
      
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
      
      setIsSubmitting(false)
    }, 500)
  }

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "From Idea to Blueprint",
      description: "Transform your vision into a clear roadmap",
      features: [
        "Understand what users really want",
        "Define features that matter most",
        "Create a realistic timeline and budget"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Design & Build Your App",
      description: "Beautiful designs that users love",
      features: [
        "Build once, launch everywhere (iOS & Android)",
        "Regular updates so you see progress weekly",
        "Your app, your code, your ownership"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Grow",
      description: "From app stores to millions of users",
      features: [
        "Submit to App Store and Google Play",
        "Set up analytics to track success",
        "Train you to manage independently"
      ],
      gradient: "from-pink-500 to-orange-600"
    }
  ]

  const showcaseProjects = [
    {
      name: "Cohart",
      tagline: "Where Art Meets Community",
      description: "Started with an artist's vision for connecting creators",
      stats: "120,000+ art lovers worldwide",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop&q=80",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      name: "ELSA Speak",
      tagline: "Making English Accessible",
      description: "Helped transform their mobile experience",
      stats: "Millions improving their English daily",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop&q=80",
      gradient: "from-blue-600 to-teal-600"
    }
  ]

  const journeySteps = [
    { number: "1", title: "Discovery Call", description: "Share your idea, we'll show you the path" },
    { number: "2", title: "Planning Phase", description: "Turn ideas into actionable roadmap (1-2 weeks)" },
    { number: "3", title: "Design Sprint", description: "See your app come to life visually (2-3 weeks)" },
    { number: "4", title: "Build & Test", description: "Weekly updates, always something new to see" },
    { number: "5", title: "Launch Together", description: "We handle the technical, you handle the celebration" },
    { number: "6", title: "Your Independence", description: "You're equipped to run your app solo" }
  ]

  const stats = [
    { value: "10+", label: "Apps Launched", icon: <Rocket className="w-5 h-5" /> },
    { value: "20+", label: "Happy App Owners", icon: <Heart className="w-5 h-5" /> },
    { value: "500K+", label: "End Users Served", icon: <Users className="w-5 h-5" /> }
  ]

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Toaster position="top-center" />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              ChauApps
            </motion.div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#showcase" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#journey" className="text-gray-600 hover:text-gray-900 transition-colors">Process</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Let's Talk
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-gray-100"
            >
              <div className="px-4 py-4 space-y-3">
                <a href="#services" className="block text-gray-600 hover:text-gray-900">Services</a>
                <a href="#showcase" className="block text-gray-600 hover:text-gray-900">Projects</a>
                <a href="#journey" className="block text-gray-600 hover:text-gray-900">Process</a>
                <a href="#contact" className="block text-gray-600 hover:text-gray-900">Contact</a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 opacity-30 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_200%]"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6 border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Your App, From Idea to Reality</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Turn Your App Idea
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Into Reality
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From a simple idea to millions of users - we handle the journey, you own the destination
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Discuss Your Idea
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                See Success Stories
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2 text-purple-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Complete App Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We guide you through every step, from that first spark to a successful launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setActiveService(index)}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl text-white mb-6`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={activeService === index ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" ref={showcaseRef} className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Apps We've Brought to Life
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real success stories from founders just like you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {showcaseProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={showcaseInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg mb-2 opacity-90">{project.tagline}</p>
                  <p className="text-sm mb-4 opacity-80">{project.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">{project.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                <Sparkles className="w-4 h-4" />
                Coming Soon
              </div>
              <h3 className="text-3xl font-bold mb-2">Stepo - Social Media Reimagined</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                Our upcoming social platform that combines meaningful connections with privacy-first design
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Join the Waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Success Is Our Priority
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're guides, not gatekeepers. You own everything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
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
                    className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="text-purple-600">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
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
              <h3 className="text-2xl font-bold mb-6">What You Get</h3>
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
                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "They made me feel like a tech founder, not just a client"
                </p>
                <p className="text-sm text-gray-500 mt-2">- Happy App Owner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" ref={journeyRef} className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Simple, Clear, Successful
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we work together to bring your app to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Have an App Idea? Let's Talk
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No technical jargon, no confusing contracts, just a friendly conversation about your vision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="new-app">New App from Scratch</option>
                    <option value="redesign">App Redesign</option>
                    <option value="features">Add Features</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="10-25k">$10k - $25k</option>
                    <option value="25-50k">$25k - $50k</option>
                    <option value="50-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your idea</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="I have an idea for an app that..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book a Free Discovery Call
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <div className="text-center text-gray-600">
                <p>Or email us directly at</p>
                <a href="mailto:hello@chauapps.com" className="text-purple-600 font-semibold hover:text-purple-700">
                  hello@chauapps.com
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ChauApps
              </h3>
              <p className="text-gray-400 mb-3">
                Your App, From Idea to Reality
              </p>
              <p className="text-xs text-gray-500">
                CHAU APPS COMPANY LIMITED
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#journey" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5" />
                  <div>
                    <a href="mailto:contact@chauapps.com" className="hover:text-white transition-colors">
                      contact@chauapps.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5" />
                  <a href="tel:+84877111123" className="hover:text-white transition-colors">
                    (+84) 877 111 123
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <div className="text-sm">
                    Ho Chi Minh City, Vietnam
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Est. 2024</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Reg: 0318597324</span>
                </li>
                <li>Apps Launched: 10+</li>
                <li>Happy App Owners: 20+</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-400 text-sm">
              <p>&copy; 2025 CHAU APPS COMPANY LIMITED. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Business Registration: 0318597324</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App