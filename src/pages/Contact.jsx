import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFlag } from 'react-icons/fa';

function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Téléphone",
      value: "+221 78 016 04 74",
      link: "tel:+22178016074"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "hadiyatoubab09@gmail.com",
      link: "mailto:hadiyatoubab09@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Localisation",
      value: "Dakar, Sénégal",
      link: null
    },
    {
      icon: <FaFlag />,
      label: "Nationalité",
      value: "Senegalaise",
      link: null
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
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto p-8">
        <motion.h2 
          className="text-3xl bg-gradient-custom text-transparent bg-clip-text font-bold mb-12"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Mes Coordonnées
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: info.link ? 1.02 : 1,
                  transition: { duration: 0.2 }
                }}
                className="flex items-center gap-4 p-4 rounded-lg border border-purple-500 border-opacity-20 
                           dark:bg-purple-900/10 bg-white/50 hover:border-opacity-50 transition-all"
              >
                {info.link ? (
                  <a 
                    href={info.link}
                    className="flex items-center gap-4 w-full text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <div className="text-purple-600 dark:text-purple-400 text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white text-black">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 w-full">
                    <div className="text-purple-600 dark:text-purple-400 text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white text-black">{info.label}</div>
                      <div className="text-gray-600 dark:text-gray-300 text-sm">{info.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 dark:text-white text-black">
              Envoyez-moi un message
            </h3>
            
            <motion.form 
              variants={itemVariants}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium dark:text-white text-black mb-2">
                  Nom complet
                </label>
                <input 
                  type="text"
                  className="w-full p-3 rounded-lg border border-purple-500 border-opacity-20 
                           dark:bg-purple-900/10 bg-white/50 focus:border-opacity-50 
                           outline-none transition-all dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium dark:text-white text-black mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full p-3 rounded-lg border border-purple-500 border-opacity-20 
                           dark:bg-purple-900/10 bg-white/50 focus:border-opacity-50 
                           outline-none transition-all dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium dark:text-white text-black mb-2">
                  Message
                </label>
                <textarea 
                  rows="5"
                  className="w-full p-3 rounded-lg border border-purple-500 border-opacity-20 
                           dark:bg-purple-900/10 bg-white/50 focus:border-opacity-50 
                           outline-none transition-all dark:text-white"
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-custom text-white py-3 rounded-lg 
                         hover:opacity-90 transition-opacity"
              >
                Envoyer le message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;