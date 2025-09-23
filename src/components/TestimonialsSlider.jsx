import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight, FiQuote, FiUser } = FiIcons;

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);

  const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Ranchi, Jharkhand',
    rating: 5,
    text: 'The cardiac surgery team at Raj Hospitals saved my life. Dr. Modi\'s expertise and the caring staff made all the difference. The facilities are world-class and I felt safe throughout my treatment.',
    treatment: 'Cardiac Surgery',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bokaro, Jharkhand',
    rating: 5,
    text: 'Outstanding maternity care from Dr. Anupama Mahi and her team. The delivery was smooth and the nursing staff was incredibly supportive. Clean facilities and excellent post-delivery care.',
    treatment: 'Maternity Care',
    image: 'https://images.unsplash.com/photo-1543430720-fa600c67e423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjB3b21hbiUyMHdpdGglMjBhJTIwYmx1cnJlZCUyMGJhY2tncm91bmQufGVufDB8fHx8MTc1NTA4Njk5MXww&ixlib=rb-4.1.0&q=80&w=200$w=150'
  },
  {
    id: 3,
    name: 'Anil Singh',
    location: 'Dhanbad, Jharkhand',
    rating: 5,
    text: 'During the pandemic, Raj Hospitals provided exceptional dialysis care. Dr. Avinash Kumar ensured my safety while maintaining the highest treatment standards. Truly grateful for their dedication.',
    treatment: 'Nephrology Treatment',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 4,
    name: 'Sunita Devi',
    location: 'Jamshedpur, Jharkhand',
    rating: 5,
    text: 'My father\'s emergency surgery was handled with utmost professionalism. The 24/7 emergency service is commendable and the staff treated our family with compassion during a difficult time.',
    treatment: 'Emergency Surgery',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 5,
    name: 'Vikash Gupta',
    location: 'Hazaribagh, Jharkhand',
    rating: 5,
    text: 'Excellent knee replacement surgery and rehabilitation. The orthopedic team and physiotherapy staff were outstanding. Clean facilities, caring approach, and affordable quality healthcare.',
    treatment: 'Orthopedic Surgery',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 6,
    name: 'Meera Kumari',
    location: 'Ranchi, Jharkhand',
    rating: 5,
    text: 'The neurology department provided exceptional care for my stroke treatment. Quick response, advanced facilities, and continuous monitoring helped in my complete recovery.',
    treatment: 'Neurology Treatment',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }];


  const slidesToShow = 2;
  const maxSlides = Math.max(0, testimonials.length - slidesToShow);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => prev >= maxSlides ? 0 : prev + 1);
      }, 6000);
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who trust Raj Hospital for their healthcare needs
          </p>
        </motion.div>

        {/* Testimonials Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden lg:block">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-100">

              <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden lg:block">
            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-100">

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

              {testimonials.map((testimonial, index) =>
              <div
                key={testimonial.id}
                className="w-full lg:w-1/2 flex-shrink-0 px-4">

                  <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full relative">

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary-100">
                      <SafeIcon icon={FiQuote} className="w-8 h-8" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) =>
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className="w-5 h-5 text-yellow-400 fill-current" />

                    )}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover" />

                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {testimonial.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                              {testimonial.treatment}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-200">

              <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-primary-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-200">

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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Quality Healthcare
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied patients who trust Raj Hospitals for their healthcare needs.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              Book Your Appointment Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TestimonialsSlider;