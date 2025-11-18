import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMapPin, FiMail, FiClock, FiCalendar, FiHeart, FiShield, FiAward, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } = FiIcons;

const Footer = () => {
  const location = useLocation();

  const specialties = [
  'Cardiology & Cardiac Sciences',
  'Neurosciences & Neurosurgery',
  'Nephrology & Dialysis',
  'Oncology & Cancer Care',
  'Obstetrics & Gynecology',
  'Orthopedics & Joint Replacement',
  'General & Minimally Invasive Surgery',
  'Emergency & Critical Care'];


  const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Find a Doctor', path: '/doctors' },
  { name: 'Our Specialties', path: '/specialties' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Emergency Care', action: () => scrollToSection('hero') },
  { name: 'Patient Portal', action: () => scrollToSection('contact') },
  { name: 'Health Checkups', path: '/specialties' },
  { name: 'Careers', path: '/contact' }];


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
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.jpg',
    description: 'National Accreditation Board for Hospitals'
  },
  {
    name: 'ISO Certified',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.jpg',
    description: 'Quality Management System'
  },
  {
    name: 'JCI Standards',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750920042927-WhatsApp%20Image%202025-06-26%20at%2012.10.25_286e04ed.jpg',
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
        <div className="bg-secondary-500 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Hospital Branding */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center lg:text-left">

                <div className="flex items-center justify-center lg:justify-start space-x-3 ">
                  <img
                    src="/assets/Header/main-logo_ranchi.png"
                    alt="Raj Hospitals Logo"
                    className="h-48 w-auto filter brightness-0 invert object-contain" />

                </div>
                <h3 className="text-2xl font-bold mb-2">Quality Health Care </h3>
                <p className="text-primary-100">For all stages of life</p>
              </motion.div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center">

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold mb-3 flex items-center justify-center space-x-2">
                    <SafeIcon icon={FiPhone} className="w-6 h-6" />
                    <span>24/7 Emergency</span>
                  </h4>
                  <a
                    href="tel:+919771488888"
                    className="text-3xl font-bold hover:text-primary-200 transition-colors block mb-2">

                    +91 977 14 88888
                  </a>
                  <p className="text-primary-100 text-sm">Always available for you</p>
                </div>
              </motion.div>

              {/* Quick Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center lg:text-right space-y-3">

                <Link
                  to="/contact"
                  className="w-full lg:w-auto bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2">

                  <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  to="/specialties"
                  className="w-full lg:w-auto bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center justify-center space-x-2">

                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  <span>Health Checkup</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Hospital */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1">

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src="/assets/Header/main-logo_ranchi.png"
                    alt="Raj Hospitals Logo"
                    className="h-48 w-auto filter brightness-0 invert object-contain"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A leading super specialty hospital in Ranchi, providing world-class healthcare with cutting-edge technology and compassionate care for over 30 years.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <SafeIcon icon={FiShield} className="w-4 h-4 text-primary-400" />
                    <span>NABH & ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <SafeIcon icon={FiHeart} className="w-4 h-4 text-primary-400" />
                    <span>100,000+ Patients Treated Annually</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <SafeIcon icon={FiAward} className="w-4 h-4 text-primary-400" />
                    <span>200+ Expert Doctors</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-primary-400 mb-4">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 border border-white/20 hover:border-primary-500 group">
                      <SafeIcon icon={FiFacebook} className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 border border-white/20 hover:border-primary-500 group">
                      <SafeIcon icon={FiTwitter} className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 border border-white/20 hover:border-primary-500 group">
                      <SafeIcon icon={FiInstagram} className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 border border-white/20 hover:border-primary-500 group">
                      <SafeIcon icon={FiLinkedin} className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300 border border-white/20 hover:border-primary-500 group">
                      <SafeIcon icon={FiYoutube} className="w-5 h-5 text-gray-300 group-hover:text-white" />
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

                <h4 className="text-xl font-bold mb-6 text-primary-400">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) =>
                  <li key={link.name}>
                      {link.path ?
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-primary-400 transition-colors flex items-center space-x-2 group">

                          <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:w-2 transition-all"></span>
                          <span>{link.name}</span>
                        </Link> :

                    <button
                      onClick={link.action}
                      className="text-gray-300 hover:text-primary-400 transition-colors flex items-center space-x-2 group">

                          <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:w-2 transition-all"></span>
                          <span>{link.name}</span>
                        </button>
                    }
                    </li>
                  )}
                </ul>
              </motion.div>

              {/* Medical Specialties */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>

                <h4 className="text-xl font-bold mb-6 text-primary-400">Our Specialties</h4>
                <ul className="space-y-3">
                  {specialties.map((specialty) =>
                  <li key={specialty}>
                      <Link
                      to="/specialties"
                      className="text-gray-300 hover:text-primary-400 transition-colors flex items-center space-x-2 group text-sm">

                        <span className="w-1 h-1 bg-secondary-500 rounded-full group-hover:w-2 transition-all"></span>
                        <span>{specialty}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}>

                <h4 className="text-xl font-bold mb-6 text-primary-400">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 font-medium">Raj Hospitals</p>
                      <p className="text-gray-400 text-sm">Ranchi, Jharkhand, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                    <div>
                      <a
                        href="tel:+919771488888"
                        className="text-gray-300 hover:text-primary-400 transition-colors font-medium">

                        +91 977 14 88888
                      </a>
                      <p className="text-gray-500 text-xs">24/7 Emergency & Appointments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400" />
                    <a
                      href="mailto:info@rajhospitals.com"
                      className="text-gray-300 hover:text-primary-400 transition-colors">

                      info@rajhospitals.com
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-400 mt-1" />
                    <div className="text-gray-300">
                      <p className="font-medium">24/7 Services Available</p>
                      <p className="text-gray-400 text-sm">Emergency • OPD • Diagnostics</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

   


        {/* Bottom Footer */}
        <div className="bg-gray-900 border-t border-gray-700 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p className="mb-1">© 2025 Raj Hospitals. All rights reserved.</p>
                <p className="text-gray-500 text-xs">Established 1991 | Leading Healthcare in Jharkhand | 30+ Years of Excellence</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <button className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</button>
                <span className="text-gray-600">|</span>
                <button className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</button>
                <span className="text-gray-600">|</span>
                <button className="text-gray-400 hover:text-primary-400 transition-colors">Patient Rights</button>
                <span className="text-gray-600">|</span>
                <button className="text-gray-400 hover:text-primary-400 transition-colors">Sitemap</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;