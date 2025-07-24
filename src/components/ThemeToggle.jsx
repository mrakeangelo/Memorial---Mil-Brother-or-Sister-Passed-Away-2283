import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-40 p-3 bg-cream/90 dark:bg-midnight/90 backdrop-blur-md rounded-full border border-dove/30 dark:border-gold/30 shadow-lg"
    >
      <SafeIcon 
        icon={darkMode ? FiSun : FiMoon} 
        className="w-5 h-5 text-charcoal dark:text-cream transition-colors" 
      />
    </motion.button>
  );
};

export default ThemeToggle;