import React from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Application Web de Gestion Pédagogique",
      period: "Juin-Août 2024",
      technologies: ["PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/ibrahimaIS/Dev/Gestion_Pedagogique_5000221",
      isStarred: true,
    },
    {
      title: "Réseau Social pour Coiturler (Collaboration)",
      period: "En cours",
      technologies: ["MongoDB", "React.js", "NestJS", "Postgres"],
      github: "https://github.com/oumarsy97/Project0rupe5",
      isStarred: true,
    },
    {
      title: "Application de Gestion de Boutique",
      period: "Toujours en cours",
      technologies: ["PHP", "Tailwind CSS", "React.js"],
      github: "https://github.com/ibrahimaIS/Dev/gestion_boutique_projet",
      isStarred: true,
    },
    {
      title: "API de Gestion de Boutique",
      period: "En cours",
      technologies: ["Laravel", "PostgreSQL"],
      github: "https://github.com/ibrahimaIS/Dev/Team_ONAL_reve-3_Laravel",
      isStarred: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-8"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expérience de Projets
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-opacity-20 border-purple-500 rounded-lg p-6 
                       hover:border-opacity-50 transition-all dark:bg-opacity-10 
                       bg-white dark:bg-purple-900 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {project.isStarred && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <FaStar className="text-yellow-400" size={20} />
                      </motion.div>
                    )}
                    <h3 className="text-xl font-semibold dark:text-white text-black">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Période : {project.period}
                  </p>
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Technologies :
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.4 + techIndex * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      className="px-3 py-1 bg-gradient-custom text-white text-sm rounded-full
                               hover:shadow-lg transform transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
