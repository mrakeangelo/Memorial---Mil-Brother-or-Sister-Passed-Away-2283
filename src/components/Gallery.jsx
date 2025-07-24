import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Memories' },
    { id: 'childhood', name: 'Growing Up Together' },
    { id: 'family', name: 'Family Moments' },
    { id: 'friends', name: 'Her Beautiful Spirit' },
    { id: 'celebration', name: 'Celebration of Life' },
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      category: 'childhood',
      caption: 'Sarah at age 5, always full of wonder'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80',
      category: 'childhood',
      caption: 'Her first day of school - so excited!'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'friends',
      caption: 'Graduation day - so proud of her achievements'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'family',
      caption: 'Family vacation memories'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
      category: 'friends',
      caption: 'Her infectious laugh and joy'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'celebration',
      caption: 'Celebrating life and love'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      category: 'family',
      caption: 'Sunday family dinner'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80',
      category: 'celebration',
      caption: 'Her beautiful smile'
    },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo, index) => {
    setLightboxImage(photo);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredPhotos[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? filteredPhotos.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-cream dark:bg-midnight">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal dark:text-cream mb-4">
            Treasured Memories
          </h2>
          <p className="font-dm-sans text-lg text-sage dark:text-dove max-w-2xl mx-auto">
            A collection of moments that capture her beautiful spirit and the joy she brought to our lives.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-dm-sans font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gold text-charcoal shadow-lg'
                  : 'bg-dove/20 dark:bg-gold/20 text-charcoal dark:text-cream hover:bg-gold/30'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(photo, index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-dm-sans text-center px-4">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  className="w-full h-full object-contain"
                />
                
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-8 h-8" />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-8 h-8" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-8 h-8" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-dm-sans bg-black/50 px-4 py-2 rounded-lg">
                    {lightboxImage.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;