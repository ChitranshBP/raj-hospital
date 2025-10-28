import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiBrain,FiTool,  FiAlertTriangle,FiScissors,FiTrendingUp,  FiDroplet, FiShield, FiUser, FiSettings, FiZap, FiMic, FiActivity, FiAlertCircle, FiSmile, FiSun, FiMoon, FiAperture, FiPlus, FiArrowRight, FiChevronLeft, FiChevronRight } = FiIcons;

const TabbedServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  // Map service IDs to specialty page slugs
  const serviceToSpecialtyMap = {
    'cardiology': 'cardiology',
    'neurosciences': 'neurosciences',
    'nephrology': 'nephrology',
    'oncology': 'oncology-cancer-care',
    'obstetrics': 'obstetrics-and-gynaecology',
    'orthopedics': 'orthopaedics-and-joint-replacement',
    'surgery': 'minimal-access-surgery',
    'ent': 'ent',
    'gastroenterology': 'gastroenterology',
    'emergency': 'critical-care-and-emergency',
    'pediatrics': 'pediatrics-and-neonatology',
    'urology': 'urology'
  };

  const services = [
  {
    id: 'cardiology',
    title: 'Cardiology',
    shortTitle: 'Cardiology',
    icon: FiHeart,
    image: 'assets/home-img/Cardiology.png',
    description: 'Specialized cardiac care including advanced diagnostics, interventional procedures, and heart failure management.',
    features: [
      'Daycare Angiography',
      'Angioplasty',
      'IVUS, Coiling, RFA',
      'Leadless Pacemaker',
      'Heart Attack (MI)',
      'Heart Failure Management'
    ],
    stats: { procedures: '2000+', experience: '15+ Years' }
  },

  {
    id: 'neurology',
    title: 'Neurology',
    shortTitle: 'Neurology',
    icon: FiAperture,
    image: 'assets/home-img/Neurology.png',
    description: 'Comprehensive brain and spine care for injuries, strokes, and neurological disorders.',
    features: [
      'Head Injuries',
      'Brain Stroke Unit & Seizures',
      'Endoscopic Spine Surgery',
      'Stereotactic Tumor Surgery',
      'Trauma, Tumor & TB Surgeries'
    ],
    stats: { procedures: '2000+', experience: '15+ Years' }
  },

 {
    id: 'gynecology',
    title: 'Obstetrics & Gynecology',
    shortTitle: 'Gynecology',
    icon: FiUser,
    image: 'assets/home-img/Gynecology.png',
    description: 'Specialized care for women’s health, pregnancy, and gynecological conditions.',
    features: [
      'Comprehensive Obstetrics & Gynecology Services',
      'High-Risk Pregnancy Management',
      'Gynecological Surgeries'
    ],
    stats: { procedures: '2000+', experience: '15+ Years' }
  },

 {
    id: 'nephrology',
    title: 'Nephrology',
    shortTitle: 'Nephrology',
    icon: FiAperture,
    image: 'assets/home-img/Nephrology.png',
    description: 'Advanced kidney care with dialysis and continuous renal replacement therapy.',
    features: [
      'Hypertensive & Diabetic Kidney Disease',
      'Hemodialysis, Peritoneal Dialysis',
      'Acute Kidney Injury, CKD',
      'CRRT (Continuous Renal Replacement Therapy)'
    ],
    stats: { procedures: '2000+', experience: '15+ Years' }
  },
  {
    id: 'oncology',
    title: 'Oncology (Cancer Care)',
    shortTitle: 'Oncology',
    icon: FiAperture,
    image: 'assets/home-img/Oncology.png',
    description: 'Comprehensive cancer care through chemotherapy and specialized surgical oncology.',
    features: [
      'Clinical Oncology (Chemotherapy)',
      'Surgical Oncology - Head & Neck, Breast, Lungs, Abdominal etc.'
    ],
    stats: { procedures: '2000+', experience: '15+ Years' }
  },
   {
    id: 'orthopaedics',
    title: 'Orthopaedics & Joint Replacement',
    shortTitle: 'Orthopaedics',
    icon: FiAperture,
    image: 'assets/home-img/Orthopaedics.png',
    description: 'Comprehensive bone and joint care including replacements and sports injury management.',
    features: [
      'Joint Replacements - Knee, Hip, Shoulder, Elbow & Ankle',
      'Arthroscopy, Sports Injury',
      'Bone Deformity Surgeries'
    ],
    stats: { procedures: '2500+', experience: '20+ Years' }
  },

  {
    id: 'surgery',
    title: 'Minimal Access Surgery',
    shortTitle: 'Surgery',
    icon: FiScissors,
    image: 'assets/home-img/MinimalAccess.png',
    description: 'Laparoscopic and laser surgeries for faster recovery and minimal invasiveness.',
    features: [
      'Laparoscopic & Laser Surgery - Gall Bladder',
      'Hernia, Appendix, General Surgery',
      'Thoracoscopic (Lung) Surgeries',
      'Bariatric (Weight loss) & GI Surgeries'
    ],
    stats: { procedures: '3500+', experience: '22+ Years' }
  },
  {
    id: 'ent',
    title: 'ENT (Ear, Nose & Throat)',
    shortTitle: 'ENT',
    icon: FiMic,
    image: 'assets/home-img/ENT.png',
    description: 'Comprehensive ear, nose, and throat care for all age groups.',
    features: [
      'Diagnosis and Treatment of ENT Disorders',
      'Hearing and Sinus Surgeries',
      'Voice and Throat Care'
    ],
    stats: { procedures: '1800+', experience: '14+ Years' }
  },


 {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    shortTitle: 'Gastrology',
    icon: FiTrendingUp,
    image: 'assets/home-img/Gastroenterology.png',
    description: 'Advanced digestive and liver care through endoscopy and minimally invasive treatments.',
    features: [
      'Endoscopy & Colonoscopy',
      'ERCP, EUS, Hepatitis',
      'Pancreatitis, Reflux, Peptic Ulcer',
      'Abdominal Pain, Fatty Liver',
      'Bile Duct Obstruction & GI Stenting'
    ],
    stats: { procedures: '2200+', experience: '16+ Years' }
  },
  {
    id: 'emergency',
    title: 'Emergency & Trauma Care',
    shortTitle: 'Emergency',
    icon: FiAperture,
    image: 'assets/home-img/Emergency.png',
    description: '24x7 emergency and acute trauma services with life support and evacuation facilities.',
    features: [
      'Advance Life Support Ambulance',
      'Rooftop Helipad for Emergency Evacuation',
      '24x7 Emergency Care Consultants',
      'Emergency Trauma & Acute Care Services'
    ],
    stats: { procedures: '10000+', experience: '24/7 Available' }
  },
  
  {
    id: 'pediatrics',
    title: 'Pediatrics & Neonatology',
    shortTitle: 'Pediatrics',
    icon: FiSmile,
    image: 'assets/home-img/Pediatrics.png',
    description: 'Comprehensive healthcare for infants, children, and adolescents.',
    features: [
      'Child and Newborn Care',
      'Pediatric Medicine & Immunization',
      'Growth and Development Monitoring'
    ],
    stats: { procedures: '5000+', experience: '18+ Years' }
  },
  {
    id: 'urology',
    title: 'Urology',
    shortTitle: 'Urology',
    icon: FiDroplet,
    image: 'assets/home-img/Urology.png',
    description: 'Advanced urological care including prostate, kidney, and infertility treatments.',
    features: [
      'Prostate Surgeries - TURP',
      'Kidney Stone Surgeries',
      'Female Urology Surgeries',
      'Infertility Treatment',
      'Lithotripsy'
    ],
    stats: { procedures: '1600+', experience: '15+ Years' }
  
  }];


  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Medical Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services across multiple specialties with expert doctors and modern facilities
          </p>
        </motion.div>

        {/* Horizontal Scrollable Tab Navigation */}
        <div className="relative mb-8">
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollTabs('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">

            <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-gray-600" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollTabs('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">

            <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-600" />
          </button>

          {/* Scrollable Tab Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-2 mx-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>

            <div className="flex space-x-3 min-w-max">
              {services.map((service, index) =>
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                activeTab === index ?
                'bg-primary-600 text-white shadow-lg' :
                'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'}`
                }>

                  <SafeIcon icon={service.icon} className="w-4 h-4" />
                  <span>{service.shortTitle}</span>
                </motion.button>
              )}

              {/* View All Services Button */}
              {/* <button
                onClick={() => scrollRef.current?.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' })}
                className="flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm bg-secondary-100 text-secondary-600 border border-secondary-200 hover:bg-secondary-200 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap">
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>View All</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-5 gap-8 p-8">

              {/* Content Section (60%) */}
              <div className="lg:col-span-3 space-y-6">
                {/* Title & Description */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={services[activeTab].icon} className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {services[activeTab].title}
                      </h3>
                      {/* <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{services[activeTab].stats.procedures} Procedures</span>
                      </div> */}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {services[activeTab].description}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Services & Treatments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[activeTab].features.map((feature, index) =>
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3">

                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-2">

                    <span>Book Consultation</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </motion.button>
                  <Link
                    to={`/specialties/${serviceToSpecialtyMap[services[activeTab].id] || services[activeTab].id}`}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-center">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Image Section (40%) */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full min-h-[400px] rounded-xl overflow-hidden">

                  <img
                    src={services[activeTab].image}
                    alt={services[activeTab].title}
                    className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Stats Card */}
                 
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Medical Consultation
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert medical team is available 24/7 to provide you with the best healthcare services. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Book Appointment
              </button>
              <a
                href="tel:+919771488888"
                className="bg-accent-500 text-white px-8 py-3 rounded-lg hover:bg-accent-600 transition-colors font-semibold">

                Emergency: +91 977 14 88888
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TabbedServicesSection;