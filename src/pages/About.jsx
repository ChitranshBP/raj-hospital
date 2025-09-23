import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiTrendingUp, FiUserCheck, FiActivity, Heart, TrendingUp, UserCheck, Activity, Sparkles, FiStar } = FiIcons;

const About = () => {


  const values = [
  {
    icon: FiHeart,
    title: 'Compassion',
    description: 'We treat each patient as a member of our family and make them partner in their goals towards positive health by collaboration and an informed care delivery system.',
    iconBg: 'bg-orange-500'
  },
  {
    icon: FiTrendingUp,
    title: 'Commitment',
    description: 'We are committed to constantly provide the best of technology and skills to our patients for their holistic wellbeing.',
    iconBg: 'bg-blue-500'
  },
  {
    icon: FiUserCheck,
    title: 'Competence',
    description: 'We employ credentialed, competent and experienced medical, support and managerial teams to deliver optimum quality outcomes for our patients at all times.',
    iconBg: 'bg-orange-500'
  },
  {
    icon: FiActivity,
    title: 'Care',
    description: 'We provide the best-in-class and standard of care to all our patients regardless of their socio-economic background.',
    iconBg: 'bg-blue-500'
  }];




  const milestones = [
  {
    year: "1991",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ffee0efd-09c0-46af-95f4-cab22f98cba5.png",
    achievements: [
    "Inaugurated on November 3rd with 17 private rooms, labor room & OT",
    "Started Brain & Spine, Orthopedic & Maternity Surgeries",
    "First private hospital with complete Radiology & Diagnostic services under one roof"]

  },
  {
    year: "1992–94",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    achievements: [
    "Introduced Endoscopic, ENT Microsurgeries & Laparoscopic Surgeries",
    "Added twin/triple sharing rooms & a 2-bed ICU (total 34 beds)",
    "Launched first private hospital CT Scan in Ranchi",
    "Pathology became a 24/7 facility"]

  },
  {
    year: "1995",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/1c7b93ee-2de9-4f60-aa2d-c7c80281057d.png",
    achievements: [
    "Opened 25-bedded General Ward (total 63 beds)",
    "Installed C-Arm in OT",
    "Began Closed Cardiac Surgeries & Pacemaker Implantations",
    "Added Cancer Treatment"]

  },
  {
    year: "1997",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/97e84c53-c6d6-4747-a566-5153fd349d84.png",
    achievements: [
    "Became first private hospital in the region recognized by Ministry of Health & Family Welfare for Central Govt. beneficiaries"]

  },
  {
    year: "2001",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f73c15cc-e505-40ea-b27c-b1a83b39c70e.png",
    achievements: [
    "New 14-bed ICU inaugurated by Jharkhand's first CM, Shri Babulal Marandi",
    "Started Dialysis services"]

  },
  {
    year: "2003–05",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
    achievements: [
    "First private center for HIV management in Jharkhand",
    "Started Joint Replacement surgeries",
    "Launched first private hospital MRI in Ranchi",
    "Upgraded Sonography facilities"]

  },
  {
    year: "2008",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/7bd1ee32-0776-4f42-b0a6-80f29b1ec193.png",
    achievements: [
    "Mr. Sahil Gambhir (now CEO) joined; launched 24/7 in-house Pharmacy",
    "Expanded ICU to 20 beds & added 10-bedded HDU"]

  },
  {
    year: "2011–13",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/af19871c-820a-4891-b4e3-c514e726198e.png",
    achievements: [
    "Started Knee Replacement surgeries (with international collaboration)",
    "Installed PSA-based Oxygen Generation facility",
    "Expanded to 100+ beds",
    "Opened advanced Neuro & Radio Diagnostics (1.5 Tesla MRI, EEG, EMG etc.)"]

  },
  {
    year: "2015",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/28391532-9014-4156-b298-61def4bf3eff.png",
    achievements: [
    "Major infrastructural overhaul",
    "Added 4 Modular OTs for critical surgeries",
    "Expanded Critical Care to 50 beds",
    "Complete Dialysis Centre with Nephro Plus",
    "Upgraded Maternity, Physiotherapy, Dentistry, Endoscopy",
    "Modern utilities: Piped Gas/Suction, Fire Safety, Helipad"]

  },
  {
    year: "2018",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/67de5ab5-38ae-4223-bd84-da34f5b6cbc6.png",
    achievements: [
    "Launched Cath Lab & Interventional Cardiology (with Artemis Healthcare)"]

  },
  {
    year: "2019",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ae943d30-379a-4c6a-a289-e2cf84fb8bb5.png",
    achievements: [
    "Pre-Accredited by NABH for Patient Safety & Quality"]

  },
  {
    year: "2020–21",
    image: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/cd4ce479-ea50-493e-9be5-3dd2d67ed504.png",
    achievements: [
    "Key role in COVID-19 fight; successfully treated 1000+ patients",
    "Among first private hospitals in Jharkhand to start Vaccination Drive"]

  },
  {
    "year": "January 2022",
    "image": "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/47f34d9e-b7c1-4797-8a62-e208fef73c13.jpg",
    "achievements": [
    "Launched State-of-the-Art Gastroenterology Suite at Raj Hospitals, Ranchi",
    "Facilities include Endoscopy, ERCP, Colonoscopy, Capsule Endoscopy, and Sigmoidoscopy",
    "Advanced management of liver failure with PLEX & CRRT",
    "Performed more than 30,000 diagnostic and therapeutic procedures"]


  },
  {
    "year": "12th May 2023",
    "image": "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/47ae173a-d49c-42ba-9d2a-63b6c279e973.jpg",
    "achievements": [
    "Introduced Advanced Kidney Care with Continuous Renal Replacement Therapy (CRRT) at Raj Hospitals, Ranchi",
    "Led by Dr. Avinash Kumar Dubey (MD Medicine, DM Nephrology) and Dr. Ravish Ranjan (MD Medicine, DNB Gastroenterology)",
    "Comprehensive kidney care for patients with renal failure and multi-organ failure"]


  },
  {
    "year": "July 2023",
    "image": "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f7b9a31d-cc98-4ac1-a047-5463af7250f1.jpg",
    "achievements": [
    "Launched the advanced Leica-Provido Operating Microscope at Raj Hospitals, Ranchi",
    "Capabilities include complicated brain tumor surgeries, complex spine surgeries, and vascular surgeries",
    "Neuro consultants with decades of experience offering neuro and spine surgery",
    "Advanced neurology diagnostics including EEG, EMG, NCS; comprehensive stroke and emergency services available 24/7"]

  }];






  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-32 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Raj Hospitals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of unwavering commitment to healthcare excellence in Ranchi, Jharkhand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 1991, Raj Hospitals has been at the forefront of healthcare delivery in Ranchi, Jharkhand for over three decades. What began as a vision to provide world-class medical care to the people of Jharkhand has evolved into one of the region's most trusted healthcare institutions.
                </p>
                <p>
                  Our journey has been marked by continuous growth, innovation, and an unwavering commitment to patient care. From a modest beginning, we have expanded to become a 100+ bed super specialty hospital, equipped with state-of-the-art technology and a team of highly qualified medical professionals.
                </p>
                <p>
                  Today, Raj Hospitals stands as a beacon of hope and healing, serving not just Ranchi but patients from across Jharkhand and neighboring states. Our partnership with MAX Saket Delhi further strengthens our commitment to providing the highest standards of medical care.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>

              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hospital Building"
                className="w-full rounded-2xl shadow-2xl" />

            </motion.div>
          </div>
        </div>
      </section>

                    {/* Chairman Message */}


       <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
             Chairman's Message
          </h2>
          <p className="text-gray-600">
            A personal message from our founder and chairman
          </p>
        </div>

        {/* Chairman Message Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            {/* Chairman Image */}
            <div className="md:w-1/3">
              <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/7e8b49d0-d180-4632-9377-daff6b3f256c.png"
                  alt="Chairman - Raj Hospital"
                  className="w-full h-64 md:h-full object-cover" />

            </div>
            
            {/* Message Content */}
            <div className="md:w-2/3 p-6">
              {/* Quote Icon */}
              <div className="inline-flex items-center px-1 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-4">
                Message from Chairman
              </div>
              
              {/* Chairman Message */}
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  When we started our facility in Ranchi 30 years ago, we started very small, but we ensured that our patients got the best medical technology and treatment modalities available. In line with the same philosophy, we have created a facility that is second to none regarding medical competence, technology, and infrastructure.
                </p>
                
                <p>
                  We have designed this hospital keeping in view the modern healthcare needs. It has been designed to ensure maximum ease to the patient, minimize their movement and discomfort, and ensure their safety. We provide a spectrum of all major medical specialties like Cardiac Sciences, Critical care, Oncology, Neuro Sciences, Nephrology & Urology, Orthopaedics, Aesthetic & Reconstructive Surgery, Minimal Access Surgery, Obs & Gynaecology, Paediatrics, ENT, and Internal Medicine.
                </p>
                
                <p>
                  Another unique feature of the best hospital in Ranchi is that we have dedicated department-wise critical care units like Medical ICU, Surgical ICU, Cardiac Care Unit, and HDU, which department-specific Doctors and paramedics will manage. It ensures customized care for all our patients.
                </p>
                
                <p>
                  At Raj Hospitals, the best hospital in Ranchi, we have always ensured that this world-class facility is accessible for all socio-economic sections of the society without compromising the quality of treatment and patient care.
                </p>
              </div>
              
              {/* Chairman Name and Title */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-end space-x-3">
                 
                  <div>
                    <h4 className="font-semibold text-gray-900">Jogesh Gambhir</h4>
                    <p className="text-sm text-gray-600">Founder & Chairman, Raj Hospitals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg">

              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide compassionate, high-quality healthcare services that improve the health and well-being of our community. We are committed to delivering patient-centered care with integrity, excellence, and respect for every individual we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg">

              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare provider in Eastern India, recognized for our clinical excellence, innovative treatments, and exceptional patient experience. We envision a healthier community where quality healthcare is accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
  <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
           Our Core Values
          </h2>
          <p className="text-gray-600">
            The principles that guide everything we do in delivering exceptional healthcare
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 ${value.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>);

            })}
        </div>
      </div>
    </section>

 <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
             Journey Through the Years
          </h2>
          <p className="text-gray-600">
            Raj Hospital & Research Centre - Three decades of excellence in healthcare
          </p>
        </div>

        {/* Compact Alternating Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-orange-600"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) =>
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`
                }>

                {/* Year Circle */}
                <div className="absolute left-3 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-3 border-orange-500 rounded-full shadow-md">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 ml-12 md:ml-0">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 border-l-3 border-orange-500">
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-3">
                      {milestone.year}
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      {milestone.achievements.map((achievement, achievementIndex) =>
                      <div key={achievementIndex} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image on opposite side */}
                <div className="hidden md:block w-3/12">
                  <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={milestone.image}
                      alt={`Raj Hospital ${milestone.year}`}
                      className="w-full h-full object-cover object-top  hover:scale-105 transition-transform duration-300" />
                      {/*
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                      {milestone.year} Milestone
                      </div>
                      </div>
                      */}
                  </div>
                </div>

                {/* Mobile Image - Below card on mobile */}
                <div className="md:hidden ml-12 mt-3">
                  <div className="relative h-32 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={milestone.image}
                      alt={`Raj Hospital ${milestone.year}`}
                      className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                        {milestone.year} Milestone
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    </section>

    </div>);

};

export default About;