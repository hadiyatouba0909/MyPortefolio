import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDownload, FaArrowRight, FaCode, FaMobile, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleDownloadCV = () => {
    const cvPath = "/documents/CV_hadiyatouba.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "CV_hadiyatouba.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Développement Web",
      description: "Applications web modernes avec React.js, Next.js, Laravel et Node.js"
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: "Développement Mobile",
      description: "Applications mobiles cross-platform avec Flutter et React Native"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Backend & API",
      description: "APIs RESTful avec PostgreSQL, MongoDB et Firebase"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center pt-20">
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

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-4"
              >
                Développeuse web full-stack
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg dark:text-gray-400 text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Je travaille avec React et Node.js pour concevoir des applications web, de la création des interfaces jusqu'à la gestion des API.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-gradient-custom rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <FaDownload />
                  Télécharger mon CV
                </button>

                <a
                  href="/contact"
                  className="group px-8 py-4 rounded-xl font-semibold border-2 border-purple-500/50 dark:text-white text-gray-900 hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2"
                >
                  Me Contacter
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8 justify-center lg:justify-start"
              >
                {[
                  { icon: <FaGithub size={24} />, href: "https://github.com/hadiyatouba", label: "GitHub" },
                  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/hadiyatou-ba-a5742a247/", label: "LinkedIn" },
                  { icon: <FaEnvelope size={24} />, href: "mailto:hadiyatoubab09@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass dark:text-gray-300 text-gray-700 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
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
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30">
                <img
                  src="/images/neneba.jpeg"
                  alt="Nénéba BA"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Ce que je fais</span>
            </h2>
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
                className="p-8 rounded-2xl glass card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-custom flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="p-10 md:p-12 rounded-3xl glass text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-900 mb-4">
              Un projet ou une opportunité ?
            </h2>
            <p className="dark:text-gray-400 text-gray-600 mb-8">
              Je suis à la recherche d'un poste de développeuse full-stack. Écrivez-moi pour en discuter.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-custom text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Me contacter
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
