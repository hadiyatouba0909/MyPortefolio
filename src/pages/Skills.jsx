import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaNodeJs, FaLaravel, FaDatabase, FaGitAlt, FaDocker, FaFigma,
  FaBrain, FaUsers, FaCode, FaTools, FaCogs, FaBook, FaHtml5, FaCss3Alt, FaJs, FaPhp
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiFlutter, SiTypescript } from "react-icons/si";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref: techRef, inView: techInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: softRef, inView: softInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Outils" }
  ];

  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95, category: "frontend", color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, category: "frontend", color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, level: 88, category: "frontend", color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, level: 75, category: "frontend", color: "#3178C6" },
    { name: "React.js", icon: <FaReact />, level: 85, category: "frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, category: "frontend", color: "#06B6D4" },
    { name: "PHP", icon: <FaPhp />, level: 80, category: "backend", color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel />, level: 82, category: "backend", color: "#FF2D20" },
    { name: "Node.js", icon: <FaNodeJs />, level: 78, category: "backend", color: "#339933" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, category: "backend", color: "#4169E1" },
    { name: "MongoDB", icon: <SiMongodb />, level: 72, category: "backend", color: "#47A248" },
    { name: "Flutter", icon: <SiFlutter />, level: 70, category: "mobile", color: "#02569B" },
    { name: "Firebase", icon: <SiFirebase />, level: 75, category: "tools", color: "#FFCA28" },
    { name: "Git/GitHub", icon: <FaGitAlt />, level: 85, category: "tools", color: "#F05032" },
    { name: "Docker", icon: <FaDocker />, level: 65, category: "tools", color: "#2496ED" },
    { name: "Figma", icon: <FaFigma />, level: 70, category: "tools", color: "#F24E1E" }
  ];

  const softSkills = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Communication",
      description: "Excellente capacité à communiquer et collaborer en équipe",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Autonomie & Apprentissage",
      description: "Capacité d'auto-apprentissage et maîtrise rapide de nouvelles technologies",
      gradient: "from-pink-500 to-orange-500"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Clean Code",
      description: "Engagement envers les principes de Clean Code et SOLID",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Méthodologie Agile",
      description: "Expérience en méthodologie Agile avec excellente adaptabilité",
      gradient: "from-green-500 to-cyan-500"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Veille Technologique",
      description: "Adaptabilité et ouverture aux nouvelles technologies",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Documentation",
      description: "Capacité à documenter le code de manière claire et concise",
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  const filteredSkills = activeCategory === "all" 
    ? technicalSkills 
    : technicalSkills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
        <div className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
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
            Mes Compétences
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-gray-900">Technologies & </span>
            <span className="text-gradient">Expertise</span>
          </h1>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et qualités professionnelles
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-custom text-white shadow-glow"
                  : "glass dark:text-gray-300 text-gray-700 hover:bg-purple-500/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.section
          ref={techRef}
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-gradient">Compétences Techniques</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-2xl glass card-hover"
                  whileHover={{ y: -10 }}
                >
                  {/* Skill Icon */}
                  <motion.div
                    className="text-5xl mb-4 transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="font-semibold dark:text-white text-gray-900 mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={techInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  {/* Level */}
                  <p className="text-sm dark:text-gray-400 text-gray-600 mt-2">
                    {skill.level}%
                  </p>

                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section
          ref={softRef}
          variants={containerVariants}
          initial="hidden"
          animate={softInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-gradient">Qualités Professionnelles</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl glass overflow-hidden card-hover"
                whileHover={{ y: -10 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-white mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Skills;
