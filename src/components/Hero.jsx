import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown } = FiIcons;

const Hero = () => {
  const scrollToStory = () => {
    document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/20 to-cream dark:from-transparent dark:via-midnight/20 dark:to-midnight z-10" />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Peaceful landscape"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Beloved sibling"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-playfair text-4xl md:text-6xl font-bold text-charcoal dark:text-cream mb-4"
        >
          Sarah Elizabeth Chen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-dm-sans text-lg md:text-xl text-sage dark:text-dove mb-6"
        >
          April 12, 1995 – August 3, 2024
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-playfair text-xl md:text-2xl italic text-charcoal dark:text-cream mb-12 max-w-2xl mx-auto"
        >
          "A light so bright, it continues to shine in all of us. Forever in our hearts, never truly gone."
        </motion.blockquote>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToStory}
          className="group bg-gold/20 hover:bg-gold/30 border-2 border-gold text-charcoal dark:text-cream px-8 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>Begin Tribute</span>
          <SafeIcon 
            icon={FiArrowDown} 
            className="w-4 h-4 group-hover:translate-y-1 transition-transform" 
          />
        </motion.button>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-gold/30 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-6 h-6 bg-blush/40 rounded-full blur-sm"
      />
    </section>
  );
};

export default Hero;