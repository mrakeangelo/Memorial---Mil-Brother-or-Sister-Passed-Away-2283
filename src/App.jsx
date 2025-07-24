import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LifeStory from './components/LifeStory';
import Gallery from './components/Gallery';
import AudioMessages from './components/AudioMessages';
import Guestbook from './components/Guestbook';
import MemoryCapsule from './components/MemoryCapsule';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import BackgroundParticles from './components/BackgroundParticles';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-cream dark:bg-midnight flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="font-playfair text-charcoal dark:text-cream text-lg">
          Loading memories...
        </p>
      </div>
    </motion.div>
  );

  const MainContent = () => (
    <div className="min-h-screen bg-cream dark:bg-midnight text-charcoal dark:text-cream transition-colors duration-500">
      <BackgroundParticles />
      <Navigation />
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <LifeStory />
        <Gallery />
        <AudioMessages />
        <Guestbook />
        <MemoryCapsule />
        <Legacy />
      </main>
      
      <Footer />
    </div>
  );

  return (
    <Router>
      <div className="relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;