import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiMusic, FiHeart, FiMic } = FiIcons;

const AudioMessages = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const audioMessages = [
    {
      id: 1,
      title: "Her Favorite Song",
      description: "The song that always made her smile",
      duration: "3:45",
      type: "music",
      icon: FiMusic
    },
    {
      id: 2,
      title: "Birthday Message 2023",
      description: "Her last birthday message to the family",
      duration: "2:30",
      type: "voice",
      icon: FiMic
    },
    {
      id: 3,
      title: "Laughing with Friends",
      description: "A recording of her infectious laughter",
      duration: "1:20",
      type: "voice",
      icon: FiHeart
    },
    {
      id: 4,
      title: "Reading Poetry",
      description: "Her beautiful voice reading her favorite poem",
      duration: "4:15",
      type: "voice",
      icon: FiMic
    }
  ];

  const playAudio = (id) => {
    if (currentPlaying === id) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(id);
    }
  };

  return (
    <section id="audio" className="py-20 px-4 bg-soft dark:bg-midnight/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Her Voice Lives On
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            Listen to the sounds and voices that keep her memory alive in our hearts.
          </p>
        </motion.div>

        <div className="space-y-6">
          {audioMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream dark:bg-midnight/50 rounded-lg p-6 shadow-lg border border-dove/20 dark:border-gold/20"
            >
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => playAudio(message.id)}
                  className="flex-shrink-0 w-16 h-16 bg-gold/20 hover:bg-gold/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon 
                    icon={currentPlaying === message.id ? FiPause : FiPlay} 
                    className="w-6 h-6 text-charcoal dark:text-cream ml-1" 
                  />
                </motion.button>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <SafeIcon icon={message.icon} className="w-4 h-4 text-gold" />
                    <h3 className="font-playfair text-lg font-semibold text-charcoal dark:text-cream">
                      {message.title}
                    </h3>
                  </div>
                  <p className="font-dm-sans text-sage dark:text-dove text-sm mb-2">
                    {message.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-xs text-sage dark:text-dove">
                      {message.duration}
                    </span>
                    {currentPlaying === message.id && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex-1 mx-4 h-1 bg-gold/30 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-full w-8 bg-gold rounded-full"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-cream dark:bg-midnight/50 rounded-lg p-8 border border-dove/20 dark:border-gold/20">
            <h3 className="font-playfair text-xl font-semibold text-charcoal dark:text-cream mb-4">
              Memorial Playlist
            </h3>
            <p className="font-dm-sans text-sage dark:text-dove mb-6">
              Songs that remind us of her beautiful spirit and the joy she brought to our lives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold/20 hover:bg-gold/30 border-2 border-gold text-charcoal dark:text-cream px-6 py-3 rounded-full font-dm-sans font-medium transition-all"
            >
              Listen on Spotify
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioMessages;