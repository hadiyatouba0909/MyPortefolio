import React from "react";
import { motion } from "framer-motion";
function About() {
  const technologies = [
    { name: "HTML/CSS", image: "https://www.pierre-giraud.com/html-css/cours-complet/imgs/logo-html5-css3.png", type: "Frontend" },
    { name: "Javascript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDGcHGK8GlCFHWwkzLt0rIgRVwx5gZMoplQ&s", type: "Frontend" },
    {
      name: "Typescript",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      type: "Frontend/Backend",
    },
    { name: "PHP", image: "https://images.sftcdn.net/images/t_app-icon-m/p/f8f40004-96d5-11e6-88c2-00163ec9f5fa/1688065098/php-logo.jpg", type: "Backend" },
    { name: "Tailwindcss", image: "/images/tailwind.png", type: "Frontend" },
    { name: "NodeJs Express", image: "https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg", type: "Backend" },
    { name: "React JS", image: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png", type: "Frontend" },
    { name: "Laravel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p7xDZNood0BXe_5aR6pkFwS0ENdCcsiDTg&s", type: "Backend" },
  ];

  const education = [
    {
      institution: "Sonatel Academy",
      title:"Formation Intensive en développement d'applications web et mobile",
      period: "Février 2024 - Décembre 2024",
      details: ["Focus sur les technologies modernes", "Projets pratiques"],
    },
    {
      institution: "Groupe ISI Suptech",
      title: "Licence 1 en informatique",
      period: "Décembre 2022 - Février 2024",
      details: [
        "Certificate of Completion Option: Programming Fundamentals(HTML,CSS et JAVASCRIPT)",
        "Préparation de L'environnement de Développement",
        "MEAN/MERN",
        "Guided Projects Grade Achieved: 83.33%",
      ],
    },
    {
      institution: "Assalar",
      title: "Baccalauréat L2 (Sciences)",
      period: "Juillet 2021",
      details: [],
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
    <div className="min-h-screen pt-16">
      <motion.div
        className="container mx-auto p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-8"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Présentation
        </motion.h2>
        <motion.p
          className="text-xl mb-12 dark:text-white text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Je m'appelle Hadiyatou BA. Je suis développeuse Web/Mobile Full-stack,
          passionnée par la création d'applications innovantes. Maîtrisant les
          fondamentaux du développement moderne (HTML/CSS, JavaScript, React et
          Angular), je consolide quotidiennement mes compétences à travers des
          projets pratiques. Mon parcours autodidacte et ma formation intensive
          témoignent de ma capacité d'apprentissage rapide et de mon engagement.
          Je cherche une opportunité professionnelle pour mettre en pratique mes
          connaissances et continuer à évoluer au sein d'une équipe technique
          dynamique.
        </motion.p>

        <motion.h2
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-8"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Formation et Diplômes
        </motion.h2>

        <motion.div
          className="space-y-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-purple-500 border-opacity-20 rounded-lg p-6 dark:bg-purple-900 dark:bg-opacity-10 bg-white
                         transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                         hover:border-opacity-50 cursor-pointer"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold dark:text-white text-black">
                  {edu.institution}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg mb-2 text-purple-600 dark:text-purple-400">
                {edu.title}
              </p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-inside space-y-1">
                  {edu.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-8"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Compétences techniques
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-custom p-6 rounded-lg text-center transform transition-all duration-300
                         hover:shadow-lg hover:rotate-1"
            >
              <div
                className="bg-white rounded-lg p-2 w-20 h-20 mx-auto mb-4
                            transform transition-transform duration-300 hover:rotate-6"
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl mb-2 text-white">{tech.name}</h3>
              <p className="text-sm text-white">({tech.type})</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
