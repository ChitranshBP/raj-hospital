import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiBrain, FiDroplet, FiShield, FiUser, FiSettings, FiZap, FiMic, FiActivity, FiAlertCircle, FiSmile, FiSun, FiMoon, FiAperture, FiPlus, FiArrowRight, FiChevronLeft, FiChevronRight } = FiIcons;

const TabbedServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  const services = [
  {
    id: 'cardiology',
    title: 'Cardiology',
    shortTitle: 'Cardiology',
    icon: FiHeart,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/091b9e61-b25b-4812-8cd8-7615daae1bd5.png',
    description: 'Comprehensive heart care with advanced cardiac procedures, interventional cardiology, and preventive heart health programs.',
    features: [
    'Advanced Cardiac Catheterization',
    'Angioplasty & Stent Placement',
    'Bypass Surgery (CABG)',
    'Pacemaker Implantation',
    'Heart Failure Management',
    'Preventive Cardiology'],

    stats: { procedures: '2000+', experience: '15+ Years' }
  },
  {
    id: 'neurosciences',
    title: 'Neurosciences',
    shortTitle: 'Neurology',
    icon: FiBrain,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/69f8ef93-154c-488e-9dfe-781dd286c641.png',
    description: 'Expert neurological care for brain, spine, and nervous system disorders with state-of-the-art technology and minimally invasive techniques.',
    features: [
    'Brain & Spine Surgery',
    'Stroke Treatment & Prevention',
    'Epilepsy Management',
    'Movement Disorders',
    'Neurocritical Care',
    'Neurological Rehabilitation'],

    stats: { procedures: '1500+', experience: '12+ Years' }
  },
  {
    id: 'nephrology',
    title: 'Nephrology',
    shortTitle: 'Nephrology',
    icon: FiDroplet,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6e48b8a7-bca0-4bc4-acbb-3ba5f5674077.png',
    description: 'Complete kidney care including dialysis services, kidney transplantation, and chronic kidney disease management with compassionate care.',
    features: [
    'Hemodialysis & Peritoneal Dialysis',
    'Kidney Transplantation',
    'Chronic Kidney Disease Management',
    'Kidney Stone Treatment',
    'Hypertension Management',
    'Acute Kidney Injury Care'],

    stats: { procedures: '3000+', experience: '18+ Years' }
  },
  {
    id: 'oncology',
    title: 'Oncology',
    shortTitle: 'Oncology',
    icon: FiShield,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/fa4c25d9-2812-4a78-aca1-8f31f67ebe83.png',
    description: 'Comprehensive cancer treatment with medical oncology, surgical oncology, and radiation therapy in a supportive environment.',
    features: [
    'Medical Oncology',
    'Surgical Oncology',
    'Radiation Therapy',
    'Chemotherapy',
    'Immunotherapy',
    'Palliative Care'],

    stats: { procedures: '1200+', experience: '14+ Years' }
  },
  {
    id: 'obstetrics',
    title: 'Obstetrics & Gynecology',
    shortTitle: 'Gynecology',
    icon: FiUser,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ce3dd90e-63eb-40f5-a9e9-2d1dc378b232.png',
    description: 'Complete women\'s health services including maternity care, gynecological surgeries, and fertility treatments with personalized care.',
    features: [
    'Normal & High-Risk Deliveries',
    'Cesarean Sections',
    'Laparoscopic Gynecology',
    'Fertility Treatments',
    'Menopause Management',
    'Gynecological Oncology'],

    stats: { procedures: '4000+', experience: '16+ Years' }
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    shortTitle: 'Orthopedics',
    icon: FiSettings,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/697b8ebb-3648-4a6b-ad86-a8d0089d3fbd.png',
    description: 'Advanced bone and joint care including joint replacement surgeries, sports medicine, and trauma care with latest techniques.',
    features: [
    'Joint Replacement Surgery',
    'Arthroscopic Procedures',
    'Sports Medicine',
    'Trauma & Fracture Care',
    'Spine Surgery',
    'Pediatric Orthopedics'],

    stats: { procedures: '2500+', experience: '20+ Years' }
  },
  {
    id: 'surgery',
    title: 'General Surgery',
    shortTitle: 'Surgery',
    icon: FiZap,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/3b9f0cf1-6571-42bc-855f-4850c129f411.png',
    description: 'Advanced surgical procedures using minimally invasive techniques for faster recovery and better outcomes.',
    features: [
    'Laparoscopic Surgery',
    'Bariatric Surgery',
    'Hernia Repair',
    'Gallbladder Surgery',
    'Colorectal Surgery',
    'Emergency Surgery'],

    stats: { procedures: '3500+', experience: '22+ Years' }
  },
  {
    id: 'ent',
    title: 'ENT',
    shortTitle: 'ENT',
    icon: FiMic,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/47c6ebb8-defe-4061-9bf9-a2d44d3e2cfa.png',
    description: 'Specialized ear, nose, and throat care with advanced microsurgical techniques and comprehensive treatment options.',
    features: [
    'Hearing Tests & Treatments',
    'Sinus Surgery',
    'Tonsillectomy',
    'Voice Disorders',
    'Sleep Apnea Treatment',
    'Head & Neck Surgery'],

    stats: { procedures: '1800+', experience: '14+ Years' }
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    shortTitle: 'Gastro',
    icon: FiActivity,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/989ec42a-aa58-4b37-b9f3-ec419fcd10a2.png',
    description: 'Comprehensive digestive system care including advanced endoscopy and treatment of gastrointestinal disorders.',
    features: [
    'Upper & Lower Endoscopy',
    'Colonoscopy Screening',
    'Liver Disease Treatment',
    'IBD Management',
    'Pancreatic Disorders',
    'Gastrointestinal Cancer Care'],

    stats: { procedures: '2200+', experience: '16+ Years' }
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    shortTitle: 'Emergency',
    icon: FiAlertCircle,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/072af0f3-f9be-48db-92cc-2521221152ac.png',
    description: '24/7 emergency services with advanced life support, trauma care, and critical care facilities for immediate medical attention.',
    features: [
    '24/7 Emergency Services',
    'Advanced Life Support',
    'Trauma Care Center',
    'Critical Care Units',
    'Emergency Surgery',
    'Air Ambulance Services'],

    stats: { procedures: '10000+', experience: '24/7 Available' }
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    shortTitle: 'Pediatrics',
    icon: FiSmile,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6182c792-a792-425b-ba05-b8f321019396.png',
    description: 'Specialized healthcare for children from infancy through adolescence with child-friendly facilities and expert pediatric care.',
    features: [
    'Newborn Care & NICU',
    'Pediatric Surgery',
    'Immunization Programs',
    'Growth & Development',
    'Pediatric Emergency Care',
    'Child Psychology Services'],

    stats: { procedures: '5000+', experience: '18+ Years' }
  },
  {
    id: 'urology',
    title: 'Urology',
    shortTitle: 'Urology',
    icon: FiDroplet,
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/48da1ef2-833a-4d51-9e18-a09bf9008e4d.png',
    description: 'Complete urological care for kidney, bladder, and male reproductive system disorders with minimally invasive techniques.',
    features: [
    'Kidney Stone Treatment',
    'Prostate Surgery',
    'Urinary Incontinence',
    'Male Infertility Treatment',
    'Bladder Cancer Care',
    'Reconstructive Urology'],

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm bg-secondary-100 text-secondary-600 border border-secondary-200 hover:bg-secondary-200 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap">

                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>View All</span>
              </motion.button>
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
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{services[activeTab].stats.procedures} Procedures</span>
                      </div>
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">

                    Learn More
                  </motion.button>
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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {services[activeTab].stats.procedures}
                        </div>
                        <div className="text-sm text-gray-600">Procedures</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary-600">
                          {services[activeTab].stats.experience.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                    </div>
                  </motion.div>
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