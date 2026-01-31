import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaReact, FaLaravel, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiPrisma, SiExpress, SiMysql, SiNeo4J } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";

function Projects() {
  const [filter, setFilter] = useState("all");
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Application de Gestion de Campagnes Marketing — OFMS",
      description: "Conception et développement complet d'une application de gestion des campagnes marketing pour Orange Finances Mobiles Sénégal. L'application permet la création, le suivi et la gestion des campagnes marketing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React 18", "Vite", "Tailwind CSS", "Laravel", "MySQL", "Cloudinary"],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaLaravel key="laravel" />, <SiMysql key="mysql" />],
      github: "https://github.com/ofms-campagne/back-campagne-ofms/tree/devhadiyatou.ba",
      status: "Terminé",
      category: "web",
      featured: true,
      team: true
    },
    {
      id: 2,
      title: "Maraba Fashion — Plateforme E-commerce",
      description: "Conception et développement complet d'une plateforme e-commerce pour une boutique de mode africaine, comprenant un site vitrine client, un panneau d'administration et une API REST.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["React 18", "Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT"],
      techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiPrisma key="prisma" />, <SiPostgresql key="postgres" />],
      github: "https://github.com/hadiyatouba0909/maraba_fashion",
      status: "Terminé",
      category: "web",
      featured: true,
      team: false
    },
    {
      id: 3,
      title: "Application de Réseau Social",
      description: "Conception et développement d'une application de réseau social permettant la gestion des profils, des publications et des interactions entre utilisateurs. Déploiement avec Docker.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      technologies: ["React 18", "Node.js", "Prisma", "PostgreSQL", "Neo4j", "Docker"],
      techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiPostgresql key="postgres" />, <FaDocker key="docker" />],
      github: "https://github.com/oumarsy97/reactProjectGroupe5/tree/hadiyatou",
      status: "Terminé",
      category: "web",
      featured: true,
      team: true
    }
  ];

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "web", label: "Applications Web" },
    { id: "mobile", label: "Applications Mobile" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
        <div className="absolute top-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
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
            <HiSparkles className="inline mr-2" />
            Mon Portfolio
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-gray-900">Mes </span>
            <span className="text-gradient">Projets</span>
          </h1>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations récentes et les technologies que j'ai utilisées
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
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
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

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-2xl overflow-hidden glass card-hover"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-custom text-white text-xs font-semibold flex items-center gap-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <HiSparkles /> Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Terminé" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 dark:text-purple-300 text-purple-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Tech Icons */}
                  <div className="flex gap-3 mb-4 text-2xl dark:text-gray-400 text-gray-500">
                    {project.techIcons.map((icon, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                        className="transition-colors"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code Source
                    </motion.a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-8 rounded-3xl glass max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
              Vous avez un projet en tête ?
            </h3>
            <p className="dark:text-gray-400 text-gray-600 mb-6">
              Je suis toujours à la recherche de nouveaux défis et de projets intéressants. 
              N'hésitez pas à me contacter pour discuter de votre idée !
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-custom text-white font-semibold rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discutons ensemble
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
