import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiHome, FiEdit, FiImage, FiMusic, FiMessageCircle, FiGift } = FiIcons;

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('gallery');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication for demo
    if (credentials.email === 'admin@memorial.com' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const tabs = [
    { id: 'gallery', name: 'Gallery', icon: FiImage },
    { id: 'story', name: 'Life Story', icon: FiEdit },
    { id: 'audio', name: 'Audio', icon: FiMusic },
    { id: 'messages', name: 'Messages', icon: FiMessageCircle },
    { id: 'capsules', name: 'Memory Capsules', icon: FiGift },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cream dark:bg-midnight flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-soft dark:bg-midnight/50 rounded-lg p-8 w-full max-w-md border border-dove/20 dark:border-gold/20"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiLock} className="w-8 h-8 text-charcoal dark:text-cream" />
            </div>
            <h2 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream mb-2">
              Admin Access
            </h2>
            <p className="font-dm-sans text-sage dark:text-dove">
              Please sign in to manage the memorial website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-dm-sans text-sm font-medium text-charcoal dark:text-cream mb-2">
                Email
              </label>
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className="w-full px-4 py-3 bg-cream dark:bg-midnight/50 border border-dove/30 dark:border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-charcoal dark:text-cream"
                placeholder="admin@memorial.com"
                required
              />
            </div>

            <div>
              <label className="block font-dm-sans text-sm font-medium text-charcoal dark:text-cream mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-3 bg-cream dark:bg-midnight/50 border border-dove/30 dark:border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-charcoal dark:text-cream"
                placeholder="Enter password"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gold hover:bg-gold/80 text-charcoal px-6 py-3 rounded-lg font-dm-sans font-medium transition-all"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-sage dark:text-dove hover:text-charcoal dark:hover:text-cream transition-colors mx-auto"
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              <span className="font-dm-sans text-sm">Back to Memorial</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-midnight">
      {/* Header */}
      <header className="bg-soft dark:bg-midnight/50 border-b border-dove/20 dark:border-gold/20 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream">
            Memorial Admin
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-sage dark:text-dove hover:text-charcoal dark:hover:text-cream transition-colors"
            >
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              <span className="font-dm-sans text-sm">View Site</span>
            </button>
            <div className="flex items-center space-x-2 text-charcoal dark:text-cream">
              <SafeIcon icon={FiUser} className="w-4 h-4" />
              <span className="font-dm-sans text-sm">Admin</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-dm-sans font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gold text-charcoal'
                  : 'bg-dove/20 dark:bg-gold/20 text-charcoal dark:text-cream hover:bg-gold/30'
              }`}
            >
              <SafeIcon icon={tab.icon} className="w-4 h-4" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-soft dark:bg-midnight/50 rounded-lg p-6 border border-dove/20 dark:border-gold/20">
          <div className="text-center py-12">
            <SafeIcon icon={FiEdit} className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream mb-2">
              {tabs.find(tab => tab.id === activeTab)?.name} Management
            </h3>
            <p className="font-dm-sans text-sage dark:text-dove">
              Admin interface for managing {tabs.find(tab => tab.id === activeTab)?.name.toLowerCase()} content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;