import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { doctorsData } from './DoctorProfile';
import { useRef, useEffect } from 'react';



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

  const { FiCalendar, FiAward, FiUser, FiSearch, FiFilter } = FiIcons;
// Inside your component:
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const dropdownRef = useRef(null);

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br mt-24 from-primary-50 to-secondary-50 py-16">
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

<div className="max-w-7xl mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row gap-8">
    
    {/* Sidebar: Search and Filter */}
<section className="w-full md:w-1/3 bg-white border border-gray-100 rounded-xl p-6 h-fit md:sticky md:top-36 z-10">
  <div className="flex flex-col gap-6">
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search doctors by name or specialty..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>

    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
      <div className="flex-shrink-0 flex items-center justify-center sm:justify-start w-5 h-5">
        <FiFilter className="text-gray-500 w-5 h-5" />
      </div>
      
      <div className="relative flex-1 w-full" ref={dropdownRef}>
        {/* Custom Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-left text-sm sm:text-base flex items-center justify-between"
        >
          <span className="truncate">{selectedSpecialty}</span>
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Custom Dropdown Menu - Always opens downward */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                type="button"
                onClick={() => {
                  setSelectedSpecialty(specialty);
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors ${
                  selectedSpecialty === specialty ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

  </div>
</section>

    {/* Doctors Grid */}
    <section className="w-full md:w-2/3 bg-gray-50 rounded-xl p-6">
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No doctors found matching your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredDoctors.sort((a, b) => a.name.localeCompare(b.name)).map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-1">
                  {doctor.qualifications}
                </p>
                <p className="text-gray-600 text-sm mb-3">{doctor.specialty}</p>

                <div className="flex gap-2">
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="flex-1 bg-primary-500 text-white py-1.5 rounded-md hover:bg-primary-600 transition-colors text-xs font-medium text-center"
                  >
                    View Profile
                  </Link>
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="flex-1 bg-white text-primary-600 border border-primary-600 py-1.5 rounded-md hover:bg-primary-50 transition-colors text-xs font-medium text-center"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  </div>
</div>



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