import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { doctorsData } from './DoctorProfile';

const { FiCalendar, FiAward, FiUser, FiSearch, FiFilter } = FiIcons;

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  // Get unique specialties from doctorsData
  const specialties = ['All', ...new Set(doctorsData.map(doctor => doctor.specialty))];

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Find a <span className="text-primary-600">Doctor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of highly qualified and experienced doctors are here to provide you with the best medical care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <SafeIcon
                icon={FiSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />

            </div>
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiFilter} className="text-gray-500 w-5 h-5" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">

                {specialties.map((specialty) =>
                <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDoctors.length === 0 ?
          <div className="text-center py-12">
              <p className="text-xl text-gray-600">No doctors found matching your search criteria.</p>
            </div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) =>
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">

                  {/* Doctor Image */}
                  <div className="relative overflow-hidden">
                    <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to professional placeholder if original image fails to load
                    e.target.src = `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
                  }} />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <SafeIcon icon={FiAward} className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  {/* Doctor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {doctor.qualifications}
                    </p>
                    <p className="text-secondary-600 font-medium mb-3">
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {doctor.description}
                    </p>
                    {/* Expertise Tags */}
                    {doctor.expertise && doctor.expertise.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {doctor.expertise.slice(0, 2).map((skill, idx) =>
                      <span
                        key={idx}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">

                              {skill}
                            </span>
                      )}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Link
                        to={`/doctor/${doctor.id}`}
                        className="flex-1 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">
                        <SafeIcon icon={FiUser} className="w-4 h-4" />
                        <span>View Profile</span>
                      </Link>
                      <button className="flex-1 bg-white text-primary-600 border border-primary-600 py-3 rounded-lg hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
            )}
            </div>
          }
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Medical Assistance?
            </h3>
            <p className="text-accent-100 mb-6">
              Our emergency department is available 24/7 for urgent medical care
            </p>
            <a
              href="tel:+919771488888"
              className="inline-flex items-center space-x-2 bg-white text-accent-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">

              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Call Emergency: +91 977 14 88888</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Doctors;