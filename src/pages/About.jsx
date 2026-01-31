import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase, FaHeart, FaQuoteLeft, FaBuilding } from "react-icons/fa";
import { HiAcademicCap, HiLightBulb, HiCode, HiOfficeBuilding } from "react-icons/hi";

function About() {
  const { ref: bioRef, inView: bioInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      company: "VNB-IT (Finances)",
      title: "Stage en développement",
      period: "Déc 2025 - Février 2026",
      description: "Stage en développement au sein d'une entreprise spécialisée dans les solutions financières.",
      icon: <HiOfficeBuilding className="text-2xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "SARAYA TECH SENEGAL",
      title: "Développeuse",
      period: "Juillet 2025 - Octobre 2025",
      description: "Développement d'applications web et participation à des projets innovants.",
      icon: <HiCode className="text-2xl" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "Orange Finances Mobiles Sénégal",
      title: "Développeuse Full-Stack",
      period: "Déc 2024 - Mai 2025",
      description: "Conception et développement d'une application de gestion des campagnes marketing. Travail en équipe avec React, Laravel et MySQL.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const education = [
    {
      institution: "Sonatel Academy - Orange Digital Center",
      title: "Développement Web/Mobile",
      period: "2023 - 2024",
      description: "Formation intensive axée sur les technologies modernes du développement web et mobile, avec des projets pratiques en équipe.",
      icon: <HiCode className="text-2xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      institution: "ISI Suptech de Dakar",
      title: "Licence 1 en Informatique de Gestion",
      period: "2021 - 2022",
      description: "Fondamentaux de la programmation, bases de données, architecture logicielle et méthodologies de développement.",
      icon: <HiAcademicCap className="text-2xl" />,
      color: "from-pink-500 to-orange-500"
    },
    {
      institution: "1 Million de Codeurs Sénégal",
      title: "Certificate of Completion",
      period: "2022",
      description: "Programme de formation aux fondamentaux du développement web.",
      icon: <HiLightBulb className="text-2xl" />,
      color: "from-cyan-500 to-purple-500"
    }
  ];

  const certifications = [
    "Intelligence Artificielle pour Tous - FORCE-N (2025)",
    "Web Development in React.js - Coursera (2025)",
    "APIs in Node.js: RESTful API Backend - Coursera (2025)",
    "TypeScript Variables and Data Types - Coursera (2024)",
    "Préparation environnement MEAN/MERN - Coursera (2024)"
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Le développement n'est pas qu'un métier, c'est une passion qui me pousse à toujours m'améliorer."
    },
    {
      icon: <FaBriefcase />,
      title: "Professionnalisme",
      description: "Je m'engage à livrer des projets de qualité dans les délais impartis."
    },
    {
      icon: <FaGraduationCap />,
      title: "Apprentissage Continu",
      description: "La technologie évolue constamment, et je m'efforce de rester à jour avec les dernières tendances."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            À Propos de Moi
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-gray-900">Découvrez mon </span>
            <span className="text-gradient">parcours</span>
          </h1>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          ref={bioRef}
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={bioInView ? "visible" : "hidden"}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-custom rounded-3xl opacity-20 blur-xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-white/10">
                  <img
                    src="/images/nene.jpg"
                    alt="Hadiyatou BA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 p-4 rounded-2xl glass shadow-glow"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-custom flex items-center justify-center">
                      <FaGraduationCap className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold dark:text-white text-gray-900">2+ ans</p>
                      <p className="text-sm dark:text-gray-400 text-gray-600">d'expérience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-3xl glass">
                <FaQuoteLeft className="text-4xl text-purple-500/30 mb-4" />
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                  Je suis <span className="text-gradient font-semibold">Hadiyatou BA</span>, développeuse full-stack passionnée, récemment diplômée d'une formation intensive en développement web et mobile à la Sonatel Academy.
                </p>
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                  Je maîtrise les technologies modernes du front-end et du back-end, avec une approche orientée solutions. Mon parcours combine apprentissage autodidacte et formation structurée, démontrant ma capacité d'adaptation et ma curiosité technique.
                </p>
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                  Je recherche un poste de développeuse full-stack au sein d'une entreprise innovante, où je pourrai contribuer à des projets d'envergure.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experiences Section */}
        <motion.section
          ref={experienceRef}
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            <span className="text-gradient">Expériences Professionnelles</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl glass card-hover group"
                whileHover={{ y: -10 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {exp.icon}
                </div>
                <span className="text-sm text-purple-500 font-medium">{exp.period}</span>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mt-2">{exp.company}</h3>
                <p className="text-gradient font-medium mt-1">{exp.title}</p>
                <p className="dark:text-gray-400 text-gray-600 mt-3 text-sm">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Timeline */}
        <motion.section
          ref={educationRef}
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            <span className="text-gradient">Formation & Diplômes</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      className="p-6 rounded-2xl glass card-hover"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm text-purple-500 font-medium">{edu.period}</span>
                      <h3 className="text-xl font-bold dark:text-white text-gray-900 mt-2">{edu.institution}</h3>
                      <p className="text-gradient font-medium mt-1">{edu.title}</p>
                      <p className="dark:text-gray-400 text-gray-600 mt-3">{edu.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-glow z-10`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          ref={valuesRef}
          variants={containerVariants}
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            <span className="text-gradient">Mes Valeurs</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl glass overflow-hidden card-hover text-center"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto rounded-2xl bg-gradient-custom flex items-center justify-center text-white text-3xl mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">{value.title}</h3>
                <p className="dark:text-gray-400 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
