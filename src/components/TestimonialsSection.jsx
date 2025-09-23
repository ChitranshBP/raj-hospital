import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Ranchi, Jharkhand',
    rating: 5,
    text: 'Excellent care during my cardiac surgery. The doctors and staff were extremely professional and caring. Dr. Modi\'s expertise saved my life. Highly recommend Raj Hospitals.',
    treatment: 'Cardiac Surgery'
  },
  {
    name: 'Priya Sharma',
    location: 'Bokaro, Jharkhand',
    rating: 5,
    text: 'Outstanding maternity care from Dr. Anupama Mahi. The facilities are modern and clean. The nursing staff was incredibly supportive throughout my delivery. Thank you for the wonderful experience.',
    treatment: 'Maternity Care'
  },
  {
    name: 'Anil Singh',
    location: 'Dhanbad, Jharkhand',
    rating: 5,
    text: 'During COVID-19, when I needed dialysis, Raj Hospitals provided exceptional care. Dr. Avinash Kumar and his team ensured my safety while providing the best treatment. Forever grateful.',
    treatment: 'Nephrology Treatment'
  },
  {
    name: 'Sunita Devi',
    location: 'Jamshedpur, Jharkhand',
    rating: 5,
    text: 'My father\'s emergency surgery was handled with utmost care and professionalism. The 24/7 emergency service is truly commendable. The hospital staff treated us like family.',
    treatment: 'Emergency Surgery'
  },
  {
    name: 'Vikash Gupta',
    location: 'Hazaribagh, Jharkhand',
    rating: 5,
    text: 'Excellent orthopedic treatment for my knee replacement. The physiotherapy team was outstanding. Clean facilities, caring staff, and affordable quality care. Highly satisfied.',
    treatment: 'Orthopedic Surgery'
  }];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have experienced our compassionate care and medical excellence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="absolute top-6 left-6 text-primary-200">
              <SafeIcon icon={FiQuote} className="w-12 h-12" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6">

                {/* Rating Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) =>
                  <SafeIcon
                    key={i}
                    icon={FiStar}
                    className="w-6 h-6 text-yellow-400 fill-current" />

                  )}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Patient Info */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentTestimonial].treatment}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

                <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-primary-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors">

                <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-primary-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'}`
                } />

              )}
            </div>
          </div>

          {/* Thumbnail Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) =>
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">

                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) =>
                <SafeIcon
                  key={i}
                  icon={FiStar}
                  className="w-4 h-4 text-yellow-400 fill-current" />

                )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;