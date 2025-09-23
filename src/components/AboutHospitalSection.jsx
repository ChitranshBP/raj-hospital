import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiHeart, FiShield, FiCalendar, FiPhone } = FiIcons;

const AboutHospitalSection = () => {
  const highlights = [
  {
    icon: FiAward,
    number: '30+',
    label: 'Years of Excellence',
    color: 'primary'
  },
  {
    icon: FiUsers,
    number: '50+',
    label: 'Expert Doctors',
    color: 'secondary'
  },
  {
    icon: FiHeart,
    number: '100+',
    label: 'Hospital Beds',
    color: 'accent'
  },
  {
    icon: FiShield,
    number: '15+',
    label: 'Medical Specialties',
    color: 'primary'
  }];


  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8">

            {/* Hospital Branding */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About <span className="text-primary-600">Raj Hospitals</span>
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Leading Healthcare in Ranchi Since 1991
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                For over three decades, Raj Hospitals has been the cornerstone of healthcare excellence in Ranchi, Jharkhand. What started as a vision to provide world-class medical care has evolved into one of the region's most trusted super specialty hospitals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to patient care, combined with state-of-the-art technology and a team of highly qualified medical professionals, has made us the preferred choice for thousands of families across Jharkhand and neighboring states.
              </p>
            </div>

      

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center space-x-2">

                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Appointment</span>
              </motion.button>
              <motion.a
                href="tel:+919771488888"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 text-white px-8 py-3 rounded-lg hover:bg-accent-600 transition-colors font-semibold flex items-center justify-center space-x-2">

                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Emergency Call</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative">

            {/* Main Hospital Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/8ca4205c-5e55-4caf-a4c6-09d0c5f5acba.png"
                alt="Raj Hospitals Building"
                className="w-full h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">24/7 Emergency Care</span>
                </div>
              </div>
            </div>

     

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">

              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">1991</div>
                <div className="text-sm text-gray-600">Established</div>
                <div className="text-xs text-gray-500 mt-1">Trusted Since</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AboutHospitalSection;