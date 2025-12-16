import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMapPin, FiMail, FiClock, FiCalendar, FiHeart, FiShield, FiAward, FiFacebook, FiInstagram, FiYoutube, FiChevronRight } = FiIcons;

const Footer = () => {
  const location = useLocation();

  // Helper function to convert specialty name to URL slug
  const specialtyToSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/\s*\([^)]*\)/g, '') // Remove content in parentheses
      .replace(/&/g, 'and')
      .replace(/,/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const centresOfExcellence = [
    "Cardiology",
    "Critical Care",
    "Emergency",
    "Gastroenterology",
    "Minimal Access Surgery",
    "Nephrology",
    "Neurosciences",
    "Oncology (Cancer Care)",
    "Pulmonology",
    "Internal Medicine",
    "Urology",
    "Obstetrics & Gynaecology"
  ];

  const alliedSpecialties = [
    "Aesthetic & Reconstructive Surgery",
    "Dental",
    "Dermatology",
    "ENT",
    "Eye Care",
    "Nutrition & Dietetics",
    "Pediatrics & Neonatology",
    "Physiotherapy & Rehabilitation",
    "Psychiatry & Mental Health"
  ];

  const advancedDiagnostics = [
    "Radiology",
    "Neurology",
    "FNAC, Biopsy, Blood & Laboratory Investigations"
  ];

  const quickLinks = [
    { name: 'About Raj Hospitals', path: '/about' },
    { name: 'Find a Doctor', path: '/doctors' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'News & Media', path: '/news-media' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'BioMedical Waste Reports', path: '/biomedical-waste-reports' }


  ];



  const scrollToSection = (sectionId) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const certifications = [
  {
    name: 'NABH Accredited',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.webp',
    description: 'National Accreditation Board for Hospitals'
  },
  {
    name: 'ISO Certified',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.webp',
    description: 'Quality Management System'
  },
  {
    name: 'JCI Standards',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.webp',
    description: 'International Healthcare Standards'
  }];


  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section - Hospital Info & Quick Actions */}
   

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* About Hospital */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2">

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src="/assets/Header/main-logo_ranchi-below.webp"
                    alt="Raj Hospitals Logo"
                    className="h-28 w-auto filter brightness-0 invert object-contain"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  Raj Hospitals is a leading multi-specialty healthcare provider in Ranchi, Jharkhand, delivering comprehensive medical care with state-of-the-art technology and a patient-centric approach since 1991.
                </p>
                {/* <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-200 text-sm font-medium">NABH Accredited Hospital</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-200 text-sm font-medium">3 Lakh+ Happy Patients</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-200 text-sm font-medium">30+ Years of Excellence</span>
                  </div>
                </div> */}

                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiPhone} className="w-4 h-4 text-orange-400" />
                    <a href="tel:+919771488888" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                      +91 977 14 88888
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMail} className="w-4 h-4 text-orange-400" />
                    <a href="mailto:info@rajhospitals.com" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                      info@rajhospitals.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 text-orange-400 mt-0.5" />
                    <a
                      href="https://maps.google.com/?q=Raj+Hospitals+Bariatu+Road+Ranchi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                      Ranchi, Jharkhand - 834009
                    </a>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-4">Connect With Us</h5>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.facebook.com/RajHospitals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110">
                      <SafeIcon icon={FiFacebook} className="w-5 h-5 text-orange-300 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/raj.hospitals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110">
                      <SafeIcon icon={FiInstagram} className="w-5 h-5 text-orange-300 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110">
                      <SafeIcon icon={FiYoutube} className="w-5 h-5 text-orange-300 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}>

                <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) =>
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 group text-sm">
                        <SafeIcon icon={FiChevronRight} className="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </motion.div>

              {/* Centres of Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>

                <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Centres of Excellence</h4>
                <ul className="space-y-2.5">
                  {centresOfExcellence.map((specialty) =>
                    <li key={specialty}>
                      <Link
                        to={`/specialties/${specialtyToSlug(specialty)}`}
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 group text-sm">
                        <SafeIcon icon={FiChevronRight} className="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        <span>{specialty}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </motion.div>

              {/* Allied Specialties */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}>

                <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wide">Allied Specialties</h4>
                <ul className="space-y-2.5">
                  {alliedSpecialties.map((specialty) =>
                    <li key={specialty}>
                      <Link
                        to={`/specialties/${specialtyToSlug(specialty)}`}
                        className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 group text-sm">
                        <SafeIcon icon={FiChevronRight} className="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        <span>{specialty}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-black/50 border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p className="mb-1">© 2025 <span className="text-white font-semibold">Raj Hospitals</span>. All rights reserved.</p>
                <p className="text-gray-500 text-xs">
                  Established 1991 • NABH Accredited • Leading Healthcare Provider in Jharkhand
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
                <span className="text-gray-700">•</span>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</Link>
                <span className="text-gray-700">•</span>
                <Link to="/biomedical-waste-reports" className="text-gray-400 hover:text-orange-400 transition-colors">BMW Reports</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;