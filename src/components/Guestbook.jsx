import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiSend, FiUser } = FiIcons;

const Guestbook = () => {
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Emily Rodriguez",
      message: "Sarah was the most caring person I've ever known. She had this incredible ability to make everyone feel seen and valued. I'm so grateful for the time we had together.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "My little sister had the brightest smile and the biggest heart. She could light up any room just by walking in. I miss her laugh every single day.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Dr. Patricia Williams",
      message: "Sarah was an exceptional therapist and an even more exceptional human being. She touched so many lives with her compassion and wisdom. Her legacy will live on in all of us.",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Jessica Thompson",
      message: "I met Sarah in college and she became like a sister to me. She was always there when I needed someone to talk to, always knew the right thing to say. The world is dimmer without her light.",
      date: "3 weeks ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 px-4 bg-cream dark:bg-midnight">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Messages of Love
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            Share your memories, thoughts, and love. Let her family know how she touched your life.
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-soft dark:bg-midnight/50 rounded-lg p-8 mb-12 border border-dove/20 dark:border-gold/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-dm-sans text-sm font-medium text-charcoal dark:text-cream mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="w-full px-4 py-3 bg-cream dark:bg-midnight/50 border border-dove/30 dark:border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-charcoal dark:text-cream"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block font-dm-sans text-sm font-medium text-charcoal dark:text-cream mb-2">
                Your Message
              </label>
              <textarea
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                rows="4"
                className="w-full px-4 py-3 bg-cream dark:bg-midnight/50 border border-dove/30 dark:border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-charcoal dark:text-cream resize-none"
                placeholder="Share your memories, thoughts, or message of love..."
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gold/20 hover:bg-gold/30 border-2 border-gold text-charcoal dark:text-cream px-6 py-3 rounded-lg font-dm-sans font-medium transition-all flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiSend} className="w-4 h-4" />
              <span>Share Your Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-soft dark:bg-midnight/50 rounded-lg p-6 border border-dove/20 dark:border-gold/20 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="w-5 h-5 text-charcoal dark:text-cream" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-dm-sans font-semibold text-charcoal dark:text-cream">
                      {message.name}
                    </h4>
                    <span className="text-xs text-sage dark:text-dove">
                      {message.date}
                    </span>
                  </div>
                  
                  <p className="font-dm-sans text-charcoal dark:text-cream/80 leading-relaxed">
                    {message.message}
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex-shrink-0 text-gold hover:text-gold/80 transition-colors"
                >
                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;