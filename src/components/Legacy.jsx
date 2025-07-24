import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiGift, FiUsers, FiBook, FiStar, FiExternalLink } = FiIcons;

const Legacy = () => {
  const legacyItems = [
    {
      id: 1,
      title: "Sarah's Smile Foundation",
      description: "Supporting mental health resources for young adults, continuing her passion for helping others heal.",
      icon: FiHeart,
      link: "#",
      stats: "$25,000 raised"
    },
    {
      id: 2,
      title: "Therapy Scholarship Fund",
      description: "Providing scholarships for students pursuing careers in mental health and counseling.",
      icon: FiBook,
      link: "#",
      stats: "5 scholarships awarded"
    },
    {
      id: 3,
      title: "Community Garden Project",
      description: "A healing garden at the local community center where she volunteered every weekend.",
      icon: FiGift,
      link: "#",
      stats: "Opening Spring 2025"
    },
    {
      id: 4,
      title: "Annual Art Therapy Workshop",
      description: "Free art therapy sessions for teens, inspired by her creative approach to healing.",
      icon: FiUsers,
      link: "#",
      stats: "100+ participants"
    }
  ];

  const impactStats = [
    { number: "150+", label: "Lives Touched as a Therapist" },
    { number: "500+", label: "Community Members Helped" },
    { number: "25", label: "Volunteer Organizations" },
    { number: "∞", label: "Hearts Forever Changed" }
  ];

  return (
    <section id="legacy" className="py-20 px-4 bg-cream dark:bg-midnight">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Her Living Legacy
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            Sarah's compassion and dedication continue to make a difference in the world through these meaningful initiatives.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-soft dark:bg-midnight/50 rounded-lg p-6 border border-dove/20 dark:border-gold/20"
            >
              <div className="font-playfair text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <div className="font-dm-sans text-sm text-charcoal dark:text-cream">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Legacy Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {legacyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-soft dark:bg-midnight/50 rounded-lg p-6 border border-dove/20 dark:border-gold/20 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-gold/20 rounded-full">
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-charcoal dark:text-cream" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="font-dm-sans text-charcoal dark:text-cream/80 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gold font-medium">
                      {item.stats}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-charcoal dark:text-cream hover:text-gold dark:hover:text-gold transition-colors"
                    >
                      <span className="font-dm-sans text-sm">Learn More</span>
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Donation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gold/10 to-blush/10 dark:from-gold/20 dark:to-blush/20 rounded-lg p-8 text-center border border-gold/30"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiStar} className="w-8 h-8 text-gold" />
            </div>
            
            <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream mb-4">
              Continue Her Mission
            </h3>
            
            <p className="font-dm-sans text-charcoal dark:text-cream/80 mb-6">
              Help us honor Sarah's memory by supporting causes that were close to her heart. Every contribution helps continue her work of healing and hope.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold hover:bg-gold/80 text-charcoal px-8 py-3 rounded-full font-dm-sans font-medium transition-all"
              >
                Make a Donation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cream dark:bg-midnight border-2 border-gold text-charcoal dark:text-cream hover:bg-gold/20 px-8 py-3 rounded-full font-dm-sans font-medium transition-all"
              >
                Volunteer
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;