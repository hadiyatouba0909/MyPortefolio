import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaBuilding } from "react-icons/fa";
import { HiAcademicCap, HiLightBulb, HiCode, HiOfficeBuilding } from "react-icons/hi";

function About() {
  const { ref: bioRef, inView: bioInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const experiences = [
    {
      company: "VNB-IT (Finances)",
      title: "Développeuse Full-Stack",
      period: "Décembre 2025 - Mars 2026",
      description: "Développement d'applications web et mobiles pour la gestion financière, conception et intégration d'API REST sécurisées, ainsi que collaboration avec les équipes pour analyser les besoins et livrer des solutions.",
      icon: <HiOfficeBuilding className="text-2xl" />
    },
    {
      company: "SARAYA TECH SENEGAL",
      title: "Développeuse Full-Stack",
      period: "Juillet 2025 - Octobre 2025",
      description: "Développement de solutions web performantes avec React, Node.js et PostgreSQL, mise en place d'architectures backend et intégration des services cloud, tests, déploiement et maintenance des applications.",
      icon: <HiCode className="text-2xl" />
    },
    {
      company: "Orange Finances Mobiles Sénégal",
      title: "Développeuse Full-Stack",
      period: "Décembre 2024 - Mai 2025",
      description: "Participation au développement de plateformes internes et outils digitaux, création d'interfaces utilisateur modernes et responsives, optimisation des performances et amélioration continue des applications.",
      icon: <FaBuilding className="text-2xl" />
    }
  ];

  const education = [
    {
      institution: "Sonatel Academy - Orange Digital Center",
      title: "Développement Web/Mobile",
      period: "2023 - 2024",
      description: "Formation intensive axée sur les technologies modernes du développement web et mobile, avec des projets pratiques en équipe.",
      icon: <HiCode className="text-2xl" />
    },
    {
      institution: "ISI Suptech de Dakar",
      title: "Licence 1 en Informatique de Gestion",
      period: "2021 - 2022",
      description: "Fondamentaux de la programmation, bases de données, architecture logicielle et méthodologies de développement.",
      icon: <HiAcademicCap className="text-2xl" />
    },
    {
      institution: "1 Million de Codeurs Sénégal",
      title: "Certificate of Completion",
      period: "2022",
      description: "Programme de formation aux fondamentaux du développement web.",
      icon: <HiLightBulb className="text-2xl" />
    },
    {
      institution: "FORCE-N",
      title: "Certificat en Intelligence Artificielle pour Tous",
      period: "2025",
      description: "Exploration des concepts fondamentaux de l'intelligence artificielle et de leurs applications pratiques.",
      icon: <HiAcademicCap className="text-2xl" />
    },
    {
      institution: "Coursera Project Network",
      title: "Certificat en préparation de l'environnement MEAN/MERN",
      period: "2025",
      description: "Formation pratique consacrée à la préparation et à la configuration d'un environnement de développement MEAN/MERN.",
      icon: <HiCode className="text-2xl" />
    },
    {
      institution: "Coursera Project Network",
      title: "Web Development in React.js: Build a Web App",
      period: "2025",
      description: "Formation pratique sur le développement d'applications web modernes avec React.js.",
      icon: <HiCode className="text-2xl" />
    },
    {
      institution: "Coursera Project Network",
      title: "APIs in Node.js: Write a RESTful API Backend Application",
      period: "2025",
      description: "Formation pratique sur la conception et le développement d'API RESTful avec Node.js.",
      icon: <HiCode className="text-2xl" />
    },
    {
      institution: "Coursera Project Network",
      title: "TypeScript Variables and Data Types",
      period: "2024",
      description: "Formation consacrée aux variables, types de données et concepts fondamentaux de TypeScript.",
      icon: <HiCode className="text-2xl" />
    },
    {
      institution: "Coursera Project Network",
      title: "Certificat en préparation de l'environnement MEAN/MERN",
      period: "2024",
      description: "Formation pratique sur la préparation de l'environnement de développement MEAN/MERN.",
      icon: <HiCode className="text-2xl" />
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-4"
          >
            À Propos de Moi
          </span>
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
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-purple-500/30">
                <img
                  src="/images/neneba.jpeg"
                  alt="Nénéba BA"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-3xl glass">
                <FaQuoteLeft className="text-4xl text-purple-500/30 mb-4" />
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                  Je suis <span className="text-gradient font-semibold">Hadiyatou BA</span>, développeuse full-stack. J'ai suivi la formation en développement web et mobile de la Sonatel Academy (2023-2024), puis travaillé chez Orange Finances Mobiles Sénégal, SARAYA TECH SENEGAL et VNB-IT.
                </p>
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                  Je travaille avec React et Node.js pour concevoir des applications web, de la création des interfaces jusqu'à la gestion des API, avec PostgreSQL pour les données.
                </p>
                <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                  Je recherche un poste de développeuse full-stack.
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
                className="p-6 rounded-2xl glass card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-custom flex items-center justify-center text-white mb-4">
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
            <span className="text-gradient">Formations & Certifications</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500/40 rounded-full hidden md:block" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-2xl glass card-hover">
                      <span className="text-sm text-purple-500 font-medium">{edu.period}</span>
                      <h3 className="text-xl font-bold dark:text-white text-gray-900 mt-2">{edu.institution}</h3>
                      <p className="text-gradient font-medium mt-1">{edu.title}</p>
                      <p className="dark:text-gray-400 text-gray-600 mt-3">{edu.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-custom flex items-center justify-center text-white z-10">
                    {edu.icon}
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default About;
