import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiFeather } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Those we love never truly leave us, they walk beside us every day.",
    "Her light continues to shine in every act of kindness we share.",
    "Death is not the opposite of life, but a part of it.",
    "The love we shared becomes the love we keep forever.",
    "In every sunset, every smile, every gentle breeze, she is there."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-soft dark:bg-midnight/50 py-16 px-4 border-t border-dove/20 dark:border-gold/20">
      <div className="max-w-4xl mx-auto">
        {/* Quote Carousel */}
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <blockquote className="font-playfair text-xl md:text-2xl italic text-charcoal dark:text-cream mb-4">
            "{quotes[currentQuote]}"
          </blockquote>
          <div className="flex justify-center space-x-2">
            {quotes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentQuote ? 'bg-gold' : 'bg-dove/40 dark:bg-gold/40'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative flex justify-center mb-12">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold opacity-60"
          >
            <SafeIcon icon={FiFeather} className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Memorial Info */}
        <div className="text-center mb-8">
          <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream mb-2">
            Sarah Elizabeth Chen
          </h3>
          <p className="font-dm-sans text-sage dark:text-dove mb-4">
            April 12, 1995 – August 3, 2024
          </p>
          <p className="font-dm-sans text-charcoal dark:text-cream/80 max-w-2xl mx-auto">
            Forever remembered, forever loved, forever missed. Her spirit lives on in every life she touched and every heart she healed.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
          >
            <SafeIcon icon={FiHeart} className="w-4 h-4" />
            <span className="font-dm-sans text-sm">Memorial Service</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
          >
            <SafeIcon icon={FiStar} className="w-4 h-4" />
            <span className="font-dm-sans text-sm">Foundation</span>
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-dove/20 dark:border-gold/20">
          <p className="font-dm-sans text-xs text-sage dark:text-dove">
            This memorial website was created with love by her family. 
            <br />
            <span className="text-gold">Designed by Mrake Agency</span> • Built with reverence and care
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [-20, -40, -20],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-gold/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [-30, -50, -30],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-16 right-1/3 w-3 h-3 bg-blush/40 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;