import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
  {
    desktop: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/bc43a805-6045-42e8-91bd-c7175d289af0.png',
    mobile: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80'
  },
  {
    desktop: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/feba88c8-eae0-47af-acba-b09465673731.png',
    mobile: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80'
  },
  {
    desktop: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/8f9d7646-b5dc-4f4a-8b95-3d67630baa04.png',
    mobile: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80'
  },
  {
    desktop: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f65b0380-448a-43da-bf13-109fd6a09ae6.png',
    mobile: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80'
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[50vh] min-h-[300px] overflow-hidden" style={{ marginTop: '80px' }}>
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            custom={currentSlide}
            initial={{
              x: "100%",
              opacity: 0
            }}
            animate={{
              x: "0%",
              opacity: 1
            }}
            exit={{
              x: "-100%",
              opacity: 0
            }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.6
            }}
            className="absolute inset-0">

            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                type: "tween",
                ease: [0.22, 1, 0.36, 1],
                duration: 0.8
              }}
              className="w-full h-full relative">
              
              {/* Image element for better control */}
              <img
                src={isMobile ? slides[currentSlide].mobile : slides[currentSlide].desktop}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-contain lg:object-cover bg-gray-100"
                style={{
                  objectPosition: 'center center'
                }} />


            </motion.div>

            {/* Subtle overlay for better dot visibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
        <SafeIcon icon={FiChevronLeft} className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white/90 transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
        <SafeIcon icon={FiChevronRight} className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-white/90 transition-colors" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) =>
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ?
            'bg-white shadow-lg scale-125' :
            'bg-white/50 hover:bg-white/70'}`
            }>
              {/* Active dot glow effect */}
              {index === currentSlide &&
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 bg-white/30 rounded-full blur-sm" />
            }
            </button>
          )}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-black/20">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-white/70" />
      </div>
    </section>);

};

export default HeroSection;