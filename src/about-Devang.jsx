import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Target, Eye, Users, Zap, 
  TrendingUp, Globe, ChevronRight, Mail, Phone, 
  MapPin, Rocket, BrainCircuit, ArrowLeft, ArrowRight 
} from 'lucide-react';

const DarkAboutUs = () => {
  const [activeSection, setActiveSection] = useState('vision');
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const y1 = useTransform(smoothScrollProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(smoothScrollProgress, [0, 1], ['0%', '-30%']);
  const rotate = useTransform(smoothScrollProgress, [0, 1], [0, 5]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const horizontalItems = [
    {
      icon: BrainCircuit,
      title: "Expertise",
      description: "Our team possesses extensive experience in data analytics, ensuring high-quality solutions tailored to your specific needs.",
      gradient: "from-purple-600 via-purple-700 to-purple-800",
      color: "purple",
      stats: "15+ Years",
      statLabel: "Industry Experience"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay at the forefront of technological advancements to provide innovative solutions that drive business growth.",
      gradient: "from-orange-600 via-orange-500 to-orange-700",
      color: "orange",
      stats: "100+",
      statLabel: "Innovative Solutions"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We prioritize client satisfaction and collaborate closely to understand unique challenges and deliver customized solutions.",
      gradient: "from-purple-600 via-pink-600 to-purple-800",
      color: "purple",
      stats: "98%",
      statLabel: "Client Satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Our solutions are designed to deliver tangible results, enabling clients to unlock the full potential of their data.",
      gradient: "from-orange-600 via-amber-500 to-orange-700",
      color: "orange",
      stats: "50%",
      statLabel: "Avg. Growth Achieved"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every solution is crafted with meticulous attention to detail, ensuring accuracy and reliability in every deliverable.",
      gradient: "from-purple-600 via-violet-600 to-purple-800",
      color: "purple",
      stats: "99.9%",
      statLabel: "Accuracy Rate"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % horizontalItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % horizontalItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + horizontalItems.length) % horizontalItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden pt-16">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-purple-900/20 to-orange-900/20 blur-3xl"
        />
        <motion.div 
          style={{ y: y2, rotate }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-orange-900/20 to-purple-900/20 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh'
              }}
              animate={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 z-50"
        style={{ scaleX: smoothScrollProgress }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <BrainCircuit className="w-12 h-12 text-purple-500/30" />
              </div>
              
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-600"></div>
                <span className="text-purple-400 font-mono text-sm tracking-widest">THE SOLUTION ENGINE</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-600"></div>
              </div>
              
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 via-orange-300 to-purple-400 bg-clip-text text-transparent">
                  About Arithwise
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Where innovation meets expertise, and solutions are engineered with precision to drive your strategic growth.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600/20 to-orange-600/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <span className="flex items-center gap-3 text-lg">
                  Explore Our Vision
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-orange-600/0 group-hover:from-purple-600/10 group-hover:via-orange-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">
                    Partnering for Success
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  We're committed to revolutionizing how businesses leverage data for strategic growth
                </p>
              </div>
            </motion.div>

            {/* Interactive Tab Selection */}
            <div className="flex justify-center gap-4 mb-12">
              {['vision', 'mission'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white shadow-lg shadow-purple-900/30'
                      : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item === 'vision' ? (
                    <span className="flex items-center gap-3">
                      <Eye className="w-5 h-5" /> Our Vision
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Target className="w-5 h-5" /> Our Mission
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Animated Content Cards */}
            <AnimatePresence mode="wait">
              {activeSection === 'vision' ? (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 shadow-2xl shadow-purple-900/10">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-purple-900/30">
                          <Eye className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-3xl font-bold">Our Vision</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        To become the trusted partner for organizations seeking actionable insights from their data, 
                        driving strategic growth and competitive advantage.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Comprehensive consulting services and SaaS platform development",
                          "Revolutionizing how businesses leverage data for success",
                          "Driving strategic growth through actionable insights"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 group-hover:scale-150 transition-transform" />
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-orange-600/10 blur-xl rounded-full" />
                    <div className="relative p-8">
                      <Globe className="w-64 h-64 text-purple-500/30 mx-auto" />
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-2 md:order-1">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 shadow-2xl shadow-orange-900/10">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-orange-900/30">
                          <Target className="w-8 h-8 text-orange-400" />
                        </div>
                        <h3 className="text-3xl font-bold">Our Mission</h3>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        To foster long-term partnerships built on trust, reliability, and a shared dedication 
                        to driving impactful outcomes through informed decision-making.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Excellence in data analysis, reporting, and forecasting",
                          "Enabling organizations to unlock their full potential",
                          "Building trust through reliable partnerships"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 group">
                            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 group-hover:scale-150 transition-transform" />
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-orange-600/10 to-purple-600/10 blur-xl rounded-full" />
                    <div className="relative p-8">
                      <Users className="w-64 h-64 text-orange-500/30 mx-auto" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Animated Horizontal Scrolling Component */}
        <section className="py-20 md:py-32 px-4 md:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-orange-400">Arithwise</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Choosing the right service partner is crucial to achieving optimal performance
              </p>
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 mx-auto mb-12"></div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="flex justify-end gap-4 mb-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors group"
              >
                <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors group"
              >
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Horizontal Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden"
            >
              {/* Animated background for active slide */}
              <AnimatePresence custom={1} mode="wait">
                <motion.div
                  key={activeSlide}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${horizontalItems[activeSlide].gradient} opacity-20`} />
                </motion.div>
              </AnimatePresence>

              {/* Slide Content */}
              <AnimatePresence custom={1} mode="wait">
                <motion.div
                  key={activeSlide}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 flex items-center"
                >
                  <div className="p-8 md:p-12 lg:p-16 w-full">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Left side - Icon and Stats */}
                      <div className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center md:justify-start gap-6 mb-8">
                          <div className={`p-5 rounded-2xl bg-gradient-to-br ${horizontalItems[activeSlide].gradient} shadow-2xl`}>
                            {React.createElement(horizontalItems[activeSlide].icon, { className: "w-16 h-16 text-white" })}
                          </div>
                          <div>
                            <div className="text-5xl md:text-6xl font-bold mb-2">
                              {horizontalItems[activeSlide].stats}
                            </div>
                            <div className="text-gray-400 text-lg">
                              {horizontalItems[activeSlide].statLabel}
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress indicators */}
                        <div className="flex gap-2 justify-center md:justify-start">
                          {horizontalItems.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveSlide(index)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                index === activeSlide
                                  ? 'w-8 bg-gradient-to-r from-purple-500 to-orange-500'
                                  : 'w-2 bg-gray-700 hover:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Right side - Content */}
                      <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-purple-600"></div>
                          <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">
                            {String(activeSlide + 1).padStart(2, '0')} / {String(horizontalItems.length).padStart(2, '0')}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                          {horizontalItems[activeSlide].title}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          {horizontalItems[activeSlide].description}
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-600 text-white font-medium flex items-center gap-3 group"
                          >
                            Learn More
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${horizontalItems[activeSlide].gradient} opacity-30`} />
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Desk */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-orange-600/10 blur-3xl" />
              
              <div className="text-center mb-16 relative">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-600"></div>
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  <span className="text-purple-400 font-mono text-sm tracking-widest">LEADERSHIP</span>
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-600"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Founder's <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">Desk</span>
                </h2>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/20 backdrop-blur-sm">
                  <div className="absolute top-6 left-6 text-6xl font-serif text-purple-900/30">"</div>
                  <div className="absolute bottom-6 right-6 text-6xl font-serif text-orange-900/30">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                      "At arithwise, we don't just offer services; we embody a philosophy – we are 'The Solution Engine' your business deserves."
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <p className="text-gray-400 leading-relaxed">
                          Welcome to arithwise, where innovation meets expertise, and solutions are not just provided; 
                          they're engineered with precision and care.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          We believe in the power of talent and invest in our team's growth, both personally and professionally, 
                          because we understand that their success translates into our clients' success.
                        </p>
                      </div>
                      <div className="space-y-6">
                        <p className="text-gray-400 leading-relaxed">
                          Our ethos revolves around fairness – fair prices, fair treatment, and fair opportunities. 
                          We believe that every business deserves access to top-tier technology consulting services.
                        </p>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-orange-900/20 border border-purple-500/20">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">VA</span>
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold">Mr. Vishvesh Algeri</h4>
                              <p className="text-gray-400 text-sm">CEO & Founder, Arithwise</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Get In <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">Touch</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    content: [
                      "arithwise Solutions Pvt Ltd",
                      "1st Floor, 'Sadguru' building, Plot No 91-D,",
                      "Metro Pole 52, Karve Nagar road, Fetri, Somalwada,",
                      "Nr Bank of Maharashtra, off Wardha Road",
                      "Nagpur - 440025"
                    ],
                    gradient: "from-purple-600/20 to-purple-900/10"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: ["info@arithwise.com", "career@arithwise.com"],
                    gradient: "from-orange-600/20 to-orange-900/10"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: ["+91-9987020905", "+91-9987000905"],
                    gradient: "from-purple-600/20 to-orange-600/20"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${item.gradient} border border-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/30`}>
                      <div className="mb-6">
                        <div className="p-3 rounded-xl bg-white/5 inline-block group-hover:rotate-12 transition-transform duration-300">
                          <item.icon className="w-8 h-8 text-gray-300" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                      <div className="space-y-3">
                        {item.content.map((line, idx) => (
                          <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-orange-600/10 to-purple-600/10 blur-3xl rounded-full" />
              
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 backdrop-blur-sm">
                <Rocket className="w-16 h-16 mx-auto mb-8 text-purple-500" />
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Experience <span className="bg-gradient-to-r from-purple-400 to-orange-300 bg-clip-text text-transparent">The Solution Engine</span>?
                </h2>
                
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                  Join us on this journey, and let's build a brighter future together. Welcome to Arithwise – where solutions come to life.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-4 rounded-full font-bold text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 animate-gradient-x" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
                  <span className="relative z-10 flex items-center gap-3">
                    Partner With Us
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DarkAboutUs;