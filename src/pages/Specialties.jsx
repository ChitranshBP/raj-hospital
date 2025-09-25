import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiBrain, FiActivity, FiShield, FiUser, FiZap, FiEye, FiMic, FiSettings, FiAlertCircle, FiSmile, FiDroplet, FiSun, FiMoon, FiAperture } = FiIcons;

const Specialties = () => {
  const specialties = [
  {
    icon: FiHeart,
    title: 'Cardiology',
    description: 'Comprehensive heart care including interventional cardiology, cardiac surgery, and preventive heart health programs.',
    services: ['Angioplasty', 'Bypass Surgery', 'Pacemaker Implantation', 'Heart Failure Management'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiBrain,
    title: 'Neurosciences & Neurosurgery',
    description: 'Advanced neurological care for brain, spine, and nervous system disorders with state-of-the-art technology.',
    services: ['Brain Surgery', 'Spine Surgery', 'Stroke Treatment', 'Epilepsy Management'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiDroplet,
    title: 'Nephrology & Dialysis',
    description: 'Complete kidney care including dialysis services, kidney transplantation, and chronic kidney disease management.',
    services: ['Hemodialysis', 'Peritoneal Dialysis', 'Kidney Transplant', 'Stone Treatment'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiShield,
    title: 'Oncology & Cancer Care',
    description: 'Comprehensive cancer treatment with medical oncology, surgical oncology, and radiation therapy.',
    services: ['Chemotherapy', 'Radiation Therapy', 'Cancer Surgery', 'Palliative Care'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiUser,
    title: 'Obstetrics & Gynecology',
    description: 'Complete women\'s health services including maternity care, gynecological surgeries, and fertility treatments.',
    services: ['Normal Delivery', 'C-Section', 'Laparoscopic Surgery', 'Fertility Treatment'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiSettings,
    title: 'Orthopedics & Joint Replacement',
    description: 'Advanced bone and joint care including joint replacement surgeries and sports medicine.',
    services: ['Joint Replacement', 'Arthroscopy', 'Fracture Treatment', 'Sports Injuries'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiZap,
    title: 'General & Minimally Invasive Surgery',
    description: 'Advanced surgical procedures using minimally invasive techniques for faster recovery.',
    services: ['Laparoscopic Surgery', 'Bariatric Surgery', 'Hernia Repair', 'Gallbladder Surgery'],
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiMic,
    title: 'ENT & Microsurgery',
    description: 'Specialized care for ear, nose, and throat conditions with advanced microsurgical techniques.',
    services: ['Hearing Tests', 'Sinus Surgery', 'Tonsillectomy', 'Voice Disorders'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiActivity,
    title: 'Gastroenterology',
    description: 'Comprehensive digestive system care including endoscopy and treatment of GI disorders.',
    services: ['Endoscopy', 'Colonoscopy', 'Liver Treatment', 'IBD Management'],
    image: 'https://images.unsplash.com/photo-1665231795856-769fb08a90bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwdmlzdWFsbHklMjBhcHBlYWxpbmclMjBpbWFnZSUyMHNob3djYXNpbmclMjBhJTIwc2VyZW5lJTIwYW5kJTIwcHJvZmVzc2lvbmFsJTIwZW52aXJvbm1lbnQlMkMlMjBzdWl0YWJsZSUyMGZvciUyMG1lZGljYWwlMjBvciUyMGhlYWx0aGNhcmUtcmVsYXRlZCUyMHRoZW1lcy58ZW58MHx8fHwxNzU1MDg2OTgzfDA&ixlib=rb-4.1.0&q=80&w=200$w=400'
  },
  {
    icon: FiAlertCircle,
    title: 'Emergency & Critical Care',
    description: '24/7 emergency services with advanced life support and critical care facilities.',
    services: ['Emergency Care', 'ICU Services', 'Trauma Care', 'Ambulance Services'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiSmile,
    title: 'Pediatrics',
    description: 'Specialized healthcare for children from infancy through adolescence with child-friendly facilities.',
    services: ['Immunization', 'Growth Monitoring', 'Pediatric Surgery', 'NICU Care'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiDroplet,
    title: 'Urology',
    description: 'Complete urological care for kidney, bladder, and male reproductive system disorders.',
    services: ['Kidney Stone Treatment', 'Prostate Surgery', 'Urinary Disorders', 'Male Infertility'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiSun,
    title: 'Dermatology',
    description: 'Comprehensive skin care including medical dermatology, cosmetic procedures, and skin surgery.',
    services: ['Skin Treatments', 'Cosmetic Procedures', 'Skin Cancer Screening', 'Laser Therapy'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: FiMoon,
    title: 'Psychiatry',
    description: 'Mental health services including counseling, therapy, and treatment of psychiatric disorders.',
    services: ['Counseling', 'Depression Treatment', 'Anxiety Management', 'Addiction Treatment'],
    image: 'https://images.unsplash.com/photo-1665231795856-769fb08a90bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwdmlzdWFsbHklMjBhcHBlYWxpbmclMjBpbWFnZSUyMHNob3djYXNpbmclMjBhJTIwc2VyZW5lJTIwYW5kJTIwcHJvZmVzc2lvbmFsJTIwZW52aXJvbm1lbnQlMkMlMjBzdWl0YWJsZSUyMGZvciUyMG1lZGljYWwlMjBvciUyMGhlYWx0aGNhcmUtcmVsYXRlZCUyMHRoZW1lcy58ZW58MHx8fHwxNzU1MDg2OTgzfDA&ixlib=rb-4.1.0&q=80&w=200$w=400'
  },
  {
    icon: FiAperture,
    title: 'Dental Sciences',
    description: 'Complete dental care including preventive dentistry, oral surgery, and cosmetic dental procedures.',
    services: ['Dental Checkup', 'Root Canal', 'Dental Implants', 'Orthodontics'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];


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
              Our Medical <span className="text-primary-600">Specialties</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services across 15+ specialties with expert doctors, modern facilities, and patient-centered care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) =>
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

                  </div>
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={specialty.icon} className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {specialty.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {specialty.description}
                        </p>
                      </div>
                    </div>
                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Services:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {specialty.services.map((service) =>
                      <div key={service} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{service}</span>
                          </div>
                      )}
                      </div>
                    </div>
                    {/* CTA */}
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-2 transition-colors">
                      <span>Learn More</span>
                      <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

            <h3 className="text-3xl font-bold text-white mb-4">
              Need Medical Consultation?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Our expert doctors are ready to provide you with the best medical care. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                Book Appointment
              </button>
              <a
                href="tel:+919771488888"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors font-semibold text-lg">

                Call: +91 977 14 88888
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

};

export default Specialties;