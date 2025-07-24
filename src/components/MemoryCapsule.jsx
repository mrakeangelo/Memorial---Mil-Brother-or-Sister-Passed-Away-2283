import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiCalendar, FiHeart, FiEdit3 } = FiIcons;

const MemoryCapsule = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const memoryCapsules = [
    {
      id: 1,
      title: "First Anniversary",
      description: "Messages to be opened on her first anniversary",
      date: "August 3, 2025",
      isLocked: true,
      messageCount: 12,
      icon: FiCalendar
    },
    {
      id: 2,
      title: "Her Birthday 2025",
      description: "Birthday wishes for her 30th birthday",
      date: "April 12, 2025",
      isLocked: true,
      messageCount: 8,
      icon: FiHeart
    },
    {
      id: 3,
      title: "Christmas Memories",
      description: "Holiday messages from the family",
      date: "December 25, 2024",
      isLocked: false,
      messageCount: 15,
      icon: FiHeart,
      messages: [
        {
          author: "Mom",
          content: "My dearest Sarah, Christmas won't be the same without your laughter filling our home. I can still hear you singing carols in the kitchen while we baked cookies together. Your joy made every holiday magical."
        },
        {
          author: "Dad",
          content: "Princess, you always made Christmas morning special with your excitement and love. I keep your stocking hanging by the fireplace. You'll always be our Christmas angel."
        },
        {
          author: "Michael",
          content: "Little sister, remember how we used to sneak downstairs to peek at presents? You were never good at keeping secrets - you'd always tell me what you got me! I miss those innocent times."
        }
      ]
    }
  ];

  const openCapsule = (capsule) => {
    if (!capsule.isLocked) {
      setSelectedCapsule(capsule);
    }
  };

  const closeCapsule = () => {
    setSelectedCapsule(null);
  };

  return (
    <section id="memory" className="py-20 px-4 bg-soft dark:bg-midnight/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Memory Capsules
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            Special messages and memories to be opened on meaningful dates. Some capsules are locked until their designated time.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {memoryCapsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-cream dark:bg-midnight/50 rounded-lg p-6 border-2 transition-all cursor-pointer ${
                capsule.isLocked 
                  ? 'border-dove/30 dark:border-gold/20' 
                  : 'border-gold/50 hover:border-gold hover:shadow-lg'
              }`}
              onClick={() => openCapsule(capsule)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    capsule.isLocked 
                      ? 'bg-dove/20 dark:bg-gold/20' 
                      : 'bg-gold/20 animate-glow'
                  }`}>
                    <SafeIcon 
                      icon={capsule.isLocked ? FiLock : FiUnlock} 
                      className="w-6 h-6 text-charcoal dark:text-cream" 
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-cream">
                      {capsule.title}
                    </h3>
                    <p className="font-dm-sans text-sage dark:text-dove">
                      {capsule.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-dm-sans text-sm text-charcoal dark:text-cream mb-1">
                    {capsule.date}
                  </p>
                  <p className="font-dm-sans text-xs text-sage dark:text-dove">
                    {capsule.messageCount} messages
                  </p>
                </div>
              </div>
              
              {capsule.isLocked && (
                <div className="mt-4 p-3 bg-dove/10 dark:bg-gold/10 rounded-lg">
                  <p className="font-dm-sans text-sm text-sage dark:text-dove text-center">
                    This capsule will unlock on {capsule.date}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Capsule Modal */}
        {selectedCapsule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeCapsule}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-cream dark:bg-midnight max-w-2xl w-full max-h-[80vh] rounded-lg p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-playfair text-2xl font-bold text-charcoal dark:text-cream">
                  {selectedCapsule.title}
                </h3>
                <button
                  onClick={closeCapsule}
                  className="text-sage dark:text-dove hover:text-charcoal dark:hover:text-cream transition-colors"
                >
                  <SafeIcon icon={FiEdit3} className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                {selectedCapsule.messages?.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-soft dark:bg-midnight/50 rounded-lg p-4 border border-dove/20 dark:border-gold/20"
                  >
                    <h4 className="font-dm-sans font-semibold text-charcoal dark:text-cream mb-2">
                      From {message.author}
                    </h4>
                    <p className="font-dm-sans text-charcoal dark:text-cream/80 leading-relaxed">
                      {message.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Add Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-cream dark:bg-midnight/50 rounded-lg p-8 border border-dove/20 dark:border-gold/20"
        >
          <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-cream mb-4 text-center">
            Add to a Memory Capsule
          </h3>
          <p className="font-dm-sans text-sage dark:text-dove text-center mb-6">
            Write a message to be opened on a special date in the future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gold/20 hover:bg-gold/30 border-2 border-gold text-charcoal dark:text-cream px-6 py-3 rounded-lg font-dm-sans font-medium transition-all"
          >
            Write a Memory
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryCapsule;