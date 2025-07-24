import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiCamera, FiBook, FiMusic, FiGift } = FiIcons;

const LifeStory = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      year: '1995',
      title: 'A Beautiful Beginning',
      description: 'Born on a spring morning, Sarah brought joy and laughter into our lives from day one.',
      icon: FiHeart,
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      quote: '"She was sunshine from the very beginning."'
    },
    {
      year: '2005',
      title: 'The Dreamer',
      description: 'Elementary school years filled with art projects, dance recitals, and endless curiosity about the world.',
      icon: FiStar,
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80',
      quote: '"Every day was an adventure with Sarah."'
    },
    {
      year: '2013',
      title: 'High School Adventures',
      description: 'Student council president, drama club star, and the friend everyone could count on.',
      icon: FiCamera,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      quote: '"She made everyone feel like they belonged."'
    },
    {
      year: '2017',
      title: 'College & Growth',
      description: 'Studying psychology at UC Berkeley, discovering her passion for helping others heal.',
      icon: FiBook,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: '"Her empathy knew no bounds."'
    },
    {
      year: '2021',
      title: 'Following Her Heart',
      description: 'Became a therapist, touching countless lives with her gentle wisdom and infectious optimism.',
      icon: FiMusic,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
      quote: '"She had a gift for healing hearts."'
    },
    {
      year: '2024',
      title: 'Forever in Our Hearts',
      description: 'Though her time was too short, the love and light she shared continues to inspire us all.',
      icon: FiGift,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      quote: '"Her legacy lives on in every life she touched."'
    }
  ];

  return (
    <section id="story" className="py-20 px-4 bg-soft dark:bg-midnight/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Her Beautiful Journey
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            A life lived with purpose, love, and endless compassion for others.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative cursor-pointer ${
                  selectedMilestone === index ? 'scale-105' : ''
                } transition-transform duration-300`}
                onClick={() => setSelectedMilestone(index)}
              >
                <div className={`p-6 rounded-lg border-2 ${
                  selectedMilestone === index 
                    ? 'border-gold bg-gold/5 dark:bg-gold/10' 
                    : 'border-dove/30 dark:border-gold/20 bg-cream/50 dark:bg-midnight/30'
                } transition-all duration-300`}>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-full ${
                      selectedMilestone === index 
                        ? 'bg-gold text-charcoal' 
                        : 'bg-dove/20 dark:bg-gold/20 text-charcoal dark:text-cream'
                    }`}>
                      <SafeIcon icon={milestone.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream">
                        {milestone.year}
                      </h3>
                      <p className="font-dm-sans text-sage dark:text-dove">
                        {milestone.title}
                      </p>
                    </div>
                  </div>
                  <p className="font-dm-sans text-charcoal dark:text-cream/80 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Milestone Detail */}
          <motion.div
            key={selectedMilestone}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-cream dark:bg-midnight/50 rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-6">
              <img
                src={milestones[selectedMilestone].image}
                alt={milestones[selectedMilestone].title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream mb-2">
              {milestones[selectedMilestone].year} - {milestones[selectedMilestone].title}
            </h3>
            
            <p className="font-dm-sans text-charcoal dark:text-cream/80 mb-4">
              {milestones[selectedMilestone].description}
            </p>
            
            <blockquote className="font-playfair text-lg italic text-gold border-l-4 border-gold pl-4">
              {milestones[selectedMilestone].quote}
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeStory;