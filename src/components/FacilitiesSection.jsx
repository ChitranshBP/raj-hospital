import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMonitor, FiActivity, FiHeart, FiShield, FiTruck, FiZap } = FiIcons;

const FacilitiesSection = () => {
  const facilities = [
  {
    icon: FiMonitor,
    title: 'Advanced Diagnostics',
    description: 'MRI, CT Scan, Capsule Endoscopy, and comprehensive diagnostic services',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiActivity,
    title: 'Modern Operation Theaters',
    description: 'State-of-the-art surgical suites with latest technology',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiHeart,
    title: 'ICU/NICU/SICU Facilities',
    description: 'Specialized intensive care units for critical patient care',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiShield,
    title: '24/7 Pharmacy',
    description: 'Round-the-clock pharmaceutical services and medication support',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiTruck,
    title: 'Ambulance Services',
    description: 'Emergency ambulance services with trained medical staff',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiZap,
    title: 'Helipad for Air Ambulance',
    description: 'Rooftop helipad for critical emergency air transportation',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];


  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-primary-600">Facilities & Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hospital is equipped with the latest medical technology and modern facilities to ensure the best possible care for our patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) =>
          <motion.div
            key={facility.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">

              {/* Facility Image */}
              <div className="relative overflow-hidden h-48">
                <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <SafeIcon icon={facility.icon} className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {/* Facility Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Advanced Medical Equipment & Infrastructure
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commitment to providing the best healthcare extends to investing in the latest medical technology. From advanced imaging systems to modern surgical equipment, we ensure our patients receive world-class treatment.
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold">
              Schedule a Hospital Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FacilitiesSection;