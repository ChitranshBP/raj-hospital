import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiSettings, FiUsers, FiClock, FiHeart, FiZap } = FiIcons;

const WhyChooseUs = () => {
  const reasons = [
  {
    icon: FiAward,
    title: '30+ Years of Excellence',
    description: 'Three decades of trusted healthcare service in Ranchi',
    color: 'primary',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/4b7d8650-3649-4291-af1d-0348dbd5ae51.png'
  },
  {
    icon: FiSettings,
    title: 'State-of-the-art Technology',
    description: 'Latest medical equipment and advanced treatment facilities',
    color: 'secondary',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/5d3c6aaa-80d1-4bf6-a251-94473bd1fda2.png'
  },
  {
    icon: FiUsers,
    title: 'Experienced Medical Team',
    description: 'Highly qualified doctors and skilled healthcare professionals',
    color: 'accent',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/eabcadd6-f753-4f2b-8e2c-6be036878918.png'
  },
  {
    icon: FiClock,
    title: '24/7 Emergency Services',
    description: 'Round-the-clock emergency care and critical support',
    color: 'primary',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/25a07976-a879-4d79-b147-694dc90103bd.png'
  },
  {
    icon: FiHeart,
    title: 'ICU/NICU/SICU Facilities',
    description: 'Specialized intensive care units for critical patient care',
    color: 'secondary',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/eadba9ff-63a6-4d9b-a1f2-eca07afe6d07.png'
  },
  {
    icon: FiZap,
    title: 'Rooftop Helipad',
    description: 'Air ambulance facility for critical emergency cases',
    color: 'accent',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/740ee279-6944-4ae9-9d7c-6438b0e16f2e.png'
  }];


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
            Why Choose <span className="text-primary-600">Raj Hospitals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of experience with modern technology to provide exceptional healthcare services that you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) =>
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 overflow-hidden">

              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <SafeIcon icon={reason.icon} className={`w-5 h-5 text-${reason.color}-600`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyChooseUs;