import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaReact, FaLaravel, FaNodeJs, FaDocker, FaTimes, FaUsers, FaUser, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiPrisma, SiExpress, SiMysql, SiNeo4J, SiCloudinary, SiJsonwebtokens, SiSwagger, SiVite } from "react-icons/si";
import { HiSparkles, HiEye } from "react-icons/hi";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Application de Gestion de Campagnes Marketing — OFMS",
      shortDescription: "Plateforme de gestion des campagnes marketing pour Orange Finances Mobiles Sénégal.",
      fullDescription: "Conception et développement complet d'une application de gestion des campagnes marketing pour Orange Finances Mobiles Sénégal (OFMS). L'application permet la création, le suivi et la gestion des campagnes marketing avec des tableaux de bord interactifs, des rapports détaillés et un système de notifications en temps réel.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React 18", "Vite", "Tailwind CSS", "Laravel", "MySQL", "Cloudinary", "Nodemailer"],
      techIcons: [<FaReact key="react" />, <SiVite key="vite" />, <SiTailwindcss key="tailwind" />, <FaLaravel key="laravel" />, <SiMysql key="mysql" />, <SiCloudinary key="cloud" />],
      github: "https://github.com/pharell98/front-ofms-campagne/tree/dev-hadiyatou.ba",
      status: "Terminé",
      category: "web",
      featured: true,
      team: true,
      role: "Développeuse Full-Stack",
      duration: "Déc 2024 - Mai 2025",
      features: [
        "Création et gestion des campagnes marketing",
        "Tableaux de bord avec statistiques en temps réel",
        "Système de rapports et exports",
        "Gestion des utilisateurs et permissions",
        "Notifications par email",
        "Upload d'images via Cloudinary"
      ],
      architecture: "API REST, Architecture MVC"
    },
    {
      id: 2,
      title: "Maraba Fashion — Plateforme E-commerce",
      shortDescription: "Plateforme e-commerce pour une boutique de mode africaine.",
      fullDescription: "Conception et développement complet d'une plateforme e-commerce pour une boutique de mode africaine, comprenant un site vitrine client élégant, un panneau d'administration complet et une API REST sécurisée. Le projet inclut la gestion des produits, des commandes, des paiements et des utilisateurs.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["React 18", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "JWT", "Cloudinary", "Nodemailer"],
      techIcons: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />, <FaNodeJs key="node" />, <SiPrisma key="prisma" />, <SiPostgresql key="postgres" />, <SiJsonwebtokens key="jwt" />],
      github: "https://github.com/hadiyatouba0909/maraba_fashion",
      liveDemo: "https://maraba-fashion.vercel.app/",
      status: "Terminé",
      category: "web",
      featured: true,
      team: false,
      role: "Développeuse Full-Stack (Solo)",
      duration: "Projet personnel",
      features: [
        "Catalogue produits avec filtres et recherche",
        "Panier d'achat et checkout",
        "Authentification JWT sécurisée",
        "Panel d'administration complet",
        "Gestion des commandes",
        "Upload d'images produits"
      ],
      architecture: "API REST, JWT Authentication"
    },
    {
      id: 3,
      title: "Application de Réseau Social",
      shortDescription: "Réseau social avec gestion des profils et interactions.",
      fullDescription: "Conception et développement d'une application de réseau social permettant la gestion des profils, des publications et des interactions entre utilisateurs. L'application utilise une architecture moderne avec PostgreSQL pour les données relationnelles et Neo4j pour les graphes de relations sociales. Déploiement containerisé avec Docker.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      technologies: ["React 18", "Vite", "Tailwind CSS", "Node.js", "Prisma ORM", "PostgreSQL", "Neo4j", "Docker", "Swagger", "Render"],
      techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiPrisma key="prisma" />, <SiPostgresql key="postgres" />, <FaDocker key="docker" />, <SiSwagger key="swagger" />],
      github: "https://github.com/oumarsy97/reactProjectGroupe5/tree/hadiyatou",
      status: "Terminé",
      category: "web",
      featured: true,
      team: true,
      role: "Développeuse Full-Stack",
      duration: "Projet académique",
      features: [
        "Création et gestion de profils utilisateurs",
        "Système de publications et commentaires",
        "Relations d'amitié (follow/unfollow)",
        "Fil d'actualité personnalisé",
        "Documentation API avec Swagger",
        "Déploiement Docker sur Render"
      ],
      architecture: "API REST, JWT Authentication, Graph Database"
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
                className="group relative rounded-2xl overflow-hidden glass card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
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

                {/* Team Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                  {project.team ? <FaUsers /> : <FaUser />}
                  {project.team ? "Équipe" : "Solo"}
                </div>

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
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 rounded-full bg-white/90 text-purple-600 font-semibold flex items-center gap-2"
                    >
                      <HiEye /> Voir détails
                    </motion.div>
                  </div>
                  
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
                  <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2 group-hover:text-gradient transition-all line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex gap-3 mb-4 text-xl dark:text-gray-400 text-gray-500">
                    {project.techIcons.slice(0, 4).map((icon, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                        className="transition-colors"
                      >
                        {icon}
                      </motion.span>
                    ))}
                    {project.techIcons.length > 4 && (
                      <span className="text-sm text-purple-500">+{project.techIcons.length - 4}</span>
                    )}
                  </div>

                  {/* Click to view */}
                  <div className="text-sm text-purple-500 font-medium flex items-center gap-1">
                    <HiEye /> Cliquez pour voir les détails
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
                
                {/* Status & Team Badges */}
                <div className="absolute bottom-4 left-6 flex gap-3">
                  <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    selectedProject.status === "Terminé" 
                      ? "bg-green-500 text-white" 
                      : "bg-yellow-500 text-black"
                  }`}>
                    <FaCheckCircle className="inline mr-2" />
                    {selectedProject.status}
                  </div>
                  <div className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">
                    {selectedProject.team ? <><FaUsers className="inline mr-2" />Projet en équipe</> : <><FaUser className="inline mr-2" />Projet solo</>}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-900 mb-2">
                  {selectedProject.title}
                </h2>

                {/* Role & Duration */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-2 text-purple-500">
                    <FaUser /> {selectedProject.role}
                  </span>
                  <span className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                    <FaCalendarAlt /> {selectedProject.duration}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Description</h3>
                  <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Fonctionnalités</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 dark:text-gray-300 text-gray-700">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-purple-500/10 dark:text-purple-300 text-purple-600 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Architecture</h3>
                  <p className="dark:text-gray-300 text-gray-700">{selectedProject.architecture}</p>
                </div>

                {/* Tech Icons */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-3">Stack technique</h3>
                  <div className="flex flex-wrap gap-4 text-3xl dark:text-gray-400 text-gray-500">
                    {selectedProject.techIcons.map((icon, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.2, color: "#8B5CF6" }}
                        className="transition-colors cursor-pointer"
                      >
                        {icon}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveDemo && (
                    <motion.a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-custom text-white font-semibold hover:opacity-90 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={18} />
                      Voir le site en ligne
                    </motion.a>
                  )}
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-gray-700 text-white font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={20} />
                    Voir le code source
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Fermer
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
