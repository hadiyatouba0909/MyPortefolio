import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaDownload, FaArrowRight, FaCode, FaMobile, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function Home() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Développeuse Full-Stack",
    "Passionnée React & Laravel",
    "Créatrice d'Applications Web",
    "Mobile Developer (Flutter)"
  ];

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    const cvPath = "/documents/HadiyatouCV_ba.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Hadiyatou_BA_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Développement Web",
      description: "Applications web modernes avec React, Laravel, Node.js",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: "Développement Mobile",
      description: "Applications mobiles cross-platform avec Flutter",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Backend & API",
      description: "APIs RESTful robustes avec PostgreSQL, MongoDB",
      gradient: "from-cyan-500 to-purple-500"
    }
  ];

  const stats = [
    { value: 10, suffix: "+", label: "Projets Réalisés" },
    { value: 2, suffix: "+", label: "Années d'Expérience" },
    { value: 15, suffix: "+", label: "Technologies Maîtrisées" },
    { value: 100, suffix: "%", label: "Passion & Dévouement" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.div
          ref={heroRef}
          className="container mx-auto px-6 relative z-10"
          style={{ y, opacity }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
              >
                <HiSparkles className="text-purple-500" />
                <span className="text-sm font-medium dark:text-purple-300 text-purple-600">
                  Disponible pour de nouvelles opportunités
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="dark:text-white text-gray-900">Bonjour, je suis</span>
                <br />
                <span className="text-gradient">Hadiyatou BA</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="h-12 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentText}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl dark:text-gray-300 text-gray-600"
                  >
                    {texts[currentText]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg dark:text-gray-400 text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Passionnée par la création d'applications web et mobiles innovantes. 
                Je transforme vos idées en solutions numériques élégantes et performantes.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={handleDownloadCV}
                  className="group relative px-8 py-4 bg-gradient-custom rounded-xl text-white font-semibold overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaDownload />
                    Télécharger mon CV
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.a
                  href="/contact"
                  className="group px-8 py-4 rounded-xl font-semibold border-2 border-purple-500/50 dark:text-white text-gray-900 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Me Contacter
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8 justify-center lg:justify-start"
              >
                {[
                  { icon: <FaGithub size={24} />, href: "https://github.com/hadiyatouba", label: "GitHub" },
                  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/hadiyatou-ba", label: "LinkedIn" },
                  { icon: <FaEnvelope size={24} />, href: "mailto:hadiyatoubab09@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass dark:text-gray-300 text-gray-700 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end"
              variants={itemVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <motion.div
                className="relative"
                animate={floatingAnimation}
              >
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                  style={{ transform: "scale(1.1)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-pink-500/30"
                  style={{ transform: "scale(1.2)" }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-custom rounded-full blur-2xl opacity-40" />
                
                {/* Image container */}
                <motion.div
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/images/nene.jpg"
                    alt="Hadiyatou BA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
                </motion.div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-custom rounded-full text-white text-sm font-semibold shadow-glow"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Full-Stack
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-secondary rounded-full text-white text-sm font-semibold shadow-glow"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  React & Laravel
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-purple-500 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl glass card-hover"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {statsInView && (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <p className="dark:text-gray-400 text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Ce que je fais</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
              Je propose des services de développement complets pour donner vie à vos projets digitaux
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl glass overflow-hidden card-hover"
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                  {service.description}
                </p>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-purple-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  En savoir plus <FaArrowRight />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="relative p-12 md:p-16 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-custom opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
            
            <div className="relative z-10 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Prêt à collaborer ensemble ?
              </motion.h2>
              <motion.p
                className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Je suis toujours ouverte à discuter de nouveaux projets, d'idées créatives ou d'opportunités de rejoindre votre équipe.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discutons de votre projet
                <FaArrowRight />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
