import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiChevronLeft, FiChevronRight, FiCalendar, FiUser, FiClock } = FiIcons;

const HealthBlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);

  const blogPosts = [
  {
    id: 1,
    title: '10 Essential Heart Health Tips for a Stronger Tomorrow',
    excerpt: 'Discover expert-recommended strategies to maintain cardiovascular health and prevent heart disease through lifestyle changes.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    author: 'Dr. Rajesh Sharma',
    specialty: 'Cardiologist',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    category: 'Cardiology',
    featured: true
  },
  {
    id: 2,
    title: 'Understanding Kidney Health: Prevention and Early Detection',
    excerpt: 'Learn about maintaining kidney function, recognizing early warning signs, and the importance of regular health screenings.',
    image: 'https://images.unsplash.com/photo-1657773952010-6941ad663ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcGhvdG9ncmFwaCUyMG9mJTIwYSUyMHNlcmVuZSUyMG5hdHVyYWwlMjBsYW5kc2NhcGUlMkMlMjBmZWF0dXJpbmclMjBhJTIwY2FsbSUyMGJvZHklMjBvZiUyMHdhdGVyJTIwc3Vycm91bmRlZCUyMGJ5JTIwbHVzaCUyMGdyZWVuZXJ5JTIwYW5kJTIwYSUyMGNsZWFyJTIwc2t5LnxlbnwwfHx8fDE3NTUwODY5OTR8MA&ixlib=rb-4.1.0&q=80&w=200$w=500',
    author: 'Dr. Avinash Kumar',
    specialty: 'Nephrologist',
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    category: 'Nephrology'
  },
  {
    id: 3,
    title: 'Women\'s Health: Comprehensive Guide to Prenatal Care',
    excerpt: 'Essential information for expecting mothers about prenatal checkups, nutrition, and maintaining health during pregnancy.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    author: 'Dr. Anupama Mahi',
    specialty: 'Gynecologist',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    category: 'Women\'s Health'
  },
  {
    id: 4,
    title: 'Mental Health Awareness: Breaking the Stigma',
    excerpt: 'Understanding mental health challenges, recognizing symptoms, and the importance of seeking professional help.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    author: 'Dr. Priya Singh',
    specialty: 'Psychiatrist',
    date: 'Dec 8, 2024',
    readTime: '8 min read',
    category: 'Mental Health'
  },
  {
    id: 5,
    title: 'Emergency Care: When to Rush to the Hospital',
    excerpt: 'Critical signs and symptoms that require immediate medical attention and how to respond in emergency situations.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    author: 'Dr. Emergency Team',
    specialty: 'Emergency Medicine',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
    category: 'Emergency Care'
  },
  {
    id: 6,
    title: 'Nutrition and Wellness: Building Healthy Eating Habits',
    excerpt: 'Expert nutritional advice for maintaining optimal health through balanced diet and lifestyle modifications.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    author: 'Dr. Nutrition Team',
    specialty: 'Dietitian',
    date: 'Dec 3, 2024',
    readTime: '6 min read',
    category: 'Nutrition'
  }];


  const slidesToShow = 3;
  const maxSlides = Math.max(0, blogPosts.length - slidesToShow);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => prev >= maxSlides ? 0 : prev + 1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev <= 0 ? maxSlides : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Health Blog & <span className="text-primary-600">Medical Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert health tips and medical advice from our specialists to help you live a healthier life
          </p>
        </motion.div>

        {/* Blog Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden lg:block">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

              <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden lg:block">
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

              <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          {/* Slider Viewport */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}>

              {blogPosts.map((post, index) =>
              <div
                key={post.id}
                className="w-full lg:w-1/3 flex-shrink-0 px-3">

                  <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group h-full">

                    {/* Image Section */}
                    <div className="relative overflow-hidden h-48">
                      <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                      
                      {/* Featured Badge */}
                      {post.featured &&
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </div>
                    }
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Meta Information */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiClock} className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <SafeIcon icon={FiUser} className="w-4 h-4 text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.specialty}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium mr-1">Read More</span>
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

              <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-primary-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

              <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: maxSlides + 1 }, (_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'}`
              } />

            )}
          </div>
        </div>

        {/* View All Blog Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 mx-auto">
            <span>View All Blog Posts</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>);

};

export default HealthBlogSection;