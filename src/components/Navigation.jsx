import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiHeart, FiCamera, FiMusic, FiBook, FiGift, FiStar } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Story', href: '#story', icon: FiBook },
    { name: 'Gallery', href: '#gallery', icon: FiCamera },
    { name: 'Audio', href: '#audio', icon: FiMusic },
    { name: 'Guestbook', href: '#guestbook', icon: FiHeart },
    { name: 'Memory Capsule', href: '#memory', icon: FiGift },
    { name: 'Legacy', href: '#legacy', icon: FiStar },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream/90 dark:bg-midnight/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-playfair text-xl font-bold text-charcoal dark:text-cream"
          >
            In Loving Memory
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span className="font-dm-sans">{item.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal dark:text-cream"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="md:hidden bg-cream/95 dark:bg-midnight/95 backdrop-blur-md border-t border-dove/20 dark:border-gold/20"
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ x: 10 }}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center space-x-3 w-full text-left px-3 py-2 text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
            >
              <SafeIcon icon={item.icon} className="w-4 h-4" />
              <span className="font-dm-sans">{item.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;