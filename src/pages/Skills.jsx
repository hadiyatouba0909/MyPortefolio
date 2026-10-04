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
  const { ref: softRef, inView: softInView } = useInView({ threshold: 0.1 });

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Outils" }
  ];

  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 />, category: "frontend", color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, category: "frontend", color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, category: "frontend", color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, category: "frontend", color: "#3178C6" },
    { name: "React.js", icon: <FaReact />, category: "frontend", color: "#61DAFB" },
    { name: "React Native", icon: <FaReact />, category: "mobile", color: "#61DAFB" },
    { name: "Next.js", icon: <FaReact />, category: "frontend", color: "#000000" },
    { name: "Angular", icon: <FaCode />, category: "frontend", color: "#DD0031" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend", color: "#06B6D4" },
    { name: "PHP", icon: <FaPhp />, category: "backend", color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel />, category: "backend", color: "#FF2D20" },
    { name: "Node.js", icon: <FaNodeJs />, category: "backend", color: "#339933" },
    { name: "Spring Boot", icon: <FaCode />, category: "backend", color: "#6DB33F" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "backend", color: "#4169E1" },
    { name: "MongoDB", icon: <SiMongodb />, category: "backend", color: "#47A248" },
    { name: "Flutter", icon: <SiFlutter />, category: "mobile", color: "#02569B" },
    { name: "Firebase", icon: <SiFirebase />, category: "tools", color: "#FFCA28" },
    { name: "Git/GitHub", icon: <FaGitAlt />, category: "tools", color: "#F05032" },
    { name: "Docker", icon: <FaDocker />, category: "tools", color: "#2496ED" },
    { name: "Figma", icon: <FaFigma />, category: "tools", color: "#F24E1E" }
  ];

  const softSkills = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Communication",
      description: "Excellente capacité à communiquer et collaborer en équipe"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Autonomie & Apprentissage",
      description: "Capacité d'auto-apprentissage et maîtrise rapide de nouvelles technologies"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Clean Code",
      description: "Engagement envers les principes de Clean Code et SOLID"
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Méthodologie Agile",
      description: "Expérience en méthodologie Agile avec excellente adaptabilité"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      title: "Veille Technologique",
      description: "Adaptabilité et ouverture aux nouvelles technologies"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Documentation",
      description: "Capacité à documenter le code de manière claire et concise"
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
        <section className="mb-20">
          <h2 
            className="text-2xl font-bold mb-8"
          >
            <span className="text-gradient">Compétences Techniques</span>
          </h2>

          <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-6 rounded-2xl glass card-hover"
                >
                  {/* Skill Icon */}
                  <div
                    className="text-5xl mb-4"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-semibold dark:text-white text-gray-900">
                    {skill.name}
                  </h3>

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
          </div>
        </section>

        {/* Soft Skills */}
        <section
          ref={softRef}
        >
          <h2 
            className="text-2xl font-bold mb-8"
          >
            <span className="text-gradient">Qualités Professionnelles</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl glass card-hover"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-custom flex items-center justify-center text-white mb-4">
                  {skill.icon}
                </div>

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
        </section>
      </div>
    </div>
  );
}

export default Skills;
