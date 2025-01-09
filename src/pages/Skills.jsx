import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaUsers,
  FaCode,
  FaTools,
  FaCogs,
  FaBook,
} from "react-icons/fa";

function Skills() {
  const skills = {
    technicalSkills: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "React.js",
      "Node.js",
      "PHP/Laravel",
      "MySQL/PostgreSQL",
      "Git/GitHub",
      "RESTful APIs",
      "Tailwind CSS",
      "MongoDB",
      "Docker",
      "Figma",
      "Cloudnary",
      "FireBase",
      "Swagger",
      

    ],

    softSkills: [
      {
        icon: <FaUsers />,
        title: "Communication",
        details: "Excellente capacité à communiquer et collaborer en équipe",
      },
      {
        icon: <FaBrain />,
        title: "Autonomie et apprentissage",
        details:
          "Capacité d'auto-apprentissage démontrée par la maîtrise rapide de nouvelles technologies",
      },
      {
        icon: <FaCode />,
        title: "Clean Code",
        details:
          "Engagement envers les principes de Clean Code, SOLID et les meilleures pratiques de développement",
      },
      {
        icon: <FaTools />,
        title: "Méthodologie Agile",
        details:
          "Expérience en méthodologie Agile avec une excellente capacité d'adaptation",
      },
      {
        icon: <FaCogs />,
        title: "Veille technologique",
        details:
          "Adaptabilité et ouverture aux nouvelles technologies, avec une veille technologique constante",
      },
      {
        icon: <FaBook />,
        title: "Documentation",
        details:
          "Capacité à documenter le code et les processus de manière claire et concise",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="min-h-screen pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto p-8">
        <motion.h2
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-12"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Compétences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <motion.div
            className="p-6 rounded-lg border border-purple-500 border-opacity-20 dark:bg-purple-900 dark:bg-opacity-10 bg-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Compétences Techniques
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-custom text-white px-4 py-2 rounded-full text-center text-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Qualités Professionnelles
            </h3>
            <div className="space-y-4">
              {skills.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-purple-500 border-opacity-20 
                   dark:bg-purple-900/10 bg-white/50 hover:border-opacity-50 transition-all"
                >
                  <div className="text-purple-600 dark:text-purple-400 text-2xl">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white text-black">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
