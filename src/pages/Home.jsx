import React from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaUserTie, FaDownload } from "react-icons/fa";

function Home() {
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

  // Fonction pour gérer le téléchargement du CV
  const handleDownloadCV = () => {
    // Chemin vers votre fichier CV (ajustez selon votre structure de projet)
    const cvPath = "/documents/HadiyatouCV_ba.pdf";
    
    // Créer un élément <a> pour le téléchargement
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "HadiyatouCV_ba.pdf"; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto p-8">
        {/* Section Principale */}
        <motion.div
          className="flex items-center justify-between mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl mb-4 text-pink-500"
              variants={itemVariants}
            >
              Bonjour, Je suis{" "}
              <span className="bg-gradient-custom text-transparent bg-clip-text">
                Hadiyatou BA
              </span>
            </motion.h1>
            <motion.p
              className="text-xl mb-4 dark:text-white text-black"
              variants={itemVariants}
            >
              Développeuse Web/Mobile Full-stack, passionnée par la création
              d'applications innovantes.
            </motion.p>
            <motion.p
              className="text-xl mb-8 dark:text-white text-black"
              variants={itemVariants}
            >
              Maîtrisant les fondamentaux du développement moderne (HTML/CSS,
              JavaScript, PHP).
            </motion.p>
            <motion.button
              className="bg-gradient-custom text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
            >
              <FaDownload /> Télécharger mon CV
            </motion.button>
          </div>
          <motion.div
            className="w-96 h-96 bg-gradient-custom rounded-full opacity-80 mt-20 overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/nene.jpg"
              alt="Hadiyatou BA"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Section Langues et Références */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Langues */}
          <motion.div
            className="p-6 rounded-lg border border-purple-500 border-opacity-20 dark:bg-purple-900/10 bg-white/50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaLanguage className="text-2xl text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold dark:text-white text-black">
                Langues
              </h2>
            </div>
            <ul className="space-y-3">
              {[
                { langue: "Français", niveau: "Courant" },
                { langue: "Wolof", niveau: "Courant" },
                { langue: "Anglais", niveau: "Intermédiaire débutant" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex justify-between items-center p-3 rounded-lg border border-purple-500 border-opacity-10 hover:border-opacity-30 transition-all"
                >
                  <span className="font-medium dark:text-white text-black">
                    {item.langue}
                  </span>
                  <span className="text-sm text-purple-600 dark:text-purple-400">
                    {item.niveau}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Références */}
          <motion.div
            className="p-6 rounded-lg border border-purple-500 border-opacity-20 dark:bg-purple-900/10 bg-white/50"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUserTie className="text-2xl text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-semibold dark:text-white text-black">
                Référence
              </h2>
            </div>
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-lg border border-purple-500 border-opacity-10 hover:border-opacity-30 transition-all"
            >
              <p className="dark:text-white text-black mb-2">
                Coachs Formateurs à la Sonatel Academy :
              </p>
              <p className="text-purple-600 dark:text-purple-400">
                Birane Bailla Wane :{" "}
                <a href="tel:+221777669595" className="hover:underline">
                  +221 77 766 95 95
                </a>
              </p>
              <p className="text-purple-600 dark:text-purple-400">
                Aly Tall Niang :{" "}
                <a href="tel:+221777669595" className="hover:underline">
                  +221 77 182 54 14
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;