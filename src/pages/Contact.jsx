import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, 
  FaPaperPlane, FaCheckCircle, FaUser, FaComment
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2, triggerOnce: true });

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Téléphone",
      value: "+221 78 016 04 74",
      link: "tel:+22178016074",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "hadiyatoubab09@gmail.com",
      link: "mailto:hadiyatoubab09@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Localisation",
      value: "Dakar, Sénégal",
      link: null,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/hadiyatou-ba", label: "LinkedIn", color: "#0077B5" },
    { icon: <FaGithub size={24} />, href: "https://github.com/hadiyatouba", label: "GitHub", color: "#333" },
    { icon: <FaEnvelope size={24} />, href: "mailto:hadiyatoubab09@gmail.com", label: "Email", color: "#EA4335" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            Restons en Contact
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="dark:text-white text-gray-900">Me </span>
            <span className="text-gradient">Contacter</span>
          </h1>
          <p className="dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Une question, un projet ou simplement envie de discuter ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            ref={contactRef}
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              <span className="text-gradient">Informations de Contact</span>
            </motion.h2>

            {/* Contact Cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-2xl glass card-hover"
                    >
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm dark:text-gray-400 text-gray-600">{info.label}</p>
                        <p className="font-semibold dark:text-white text-gray-900 group-hover:text-gradient transition-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl glass">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm dark:text-gray-400 text-gray-600">{info.label}</p>
                        <p className="font-semibold dark:text-white text-gray-900">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">
                Suivez-moi sur
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center dark:text-gray-300 text-gray-700 hover:text-white transition-all"
                    style={{ "--hover-bg": social.color }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: social.color,
                      color: "#fff"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map or Illustration */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 p-6 rounded-2xl glass overflow-hidden"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123525.09254901065!2d-17.5241!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d0fb4cd5b6b%3A0xaef9e8f2f7b7f4a!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              <span className="text-gradient">Envoyez-moi un Message</span>
            </motion.h2>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl glass"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-transparent bg-gray-50 dark:bg-white/5 focus:border-purple-500 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-transparent bg-gray-50 dark:bg-white/5 focus:border-purple-500 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet de votre message"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-transparent bg-gray-50 dark:bg-white/5 focus:border-purple-500 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FaComment className="absolute left-4 top-4 text-purple-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Votre message..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-transparent bg-gray-50 dark:bg-white/5 focus:border-purple-500 focus:bg-white dark:focus:bg-white/10 outline-none transition-all dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-custom text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
