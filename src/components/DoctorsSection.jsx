import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUser, FiChevronLeft, FiChevronRight } = FiIcons;

const DoctorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Real doctors data from Raj Hospitals
  const doctors = [
  {
    id: 'rajesh-jha',
    name: 'Dr. Rajesh Kumar Jha',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Cardiology',
    experience: '16+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.png',
    description: 'Dr. Rajesh Kumar Jha is a Cardiologist with over 16 years of experience specializing in interventional cardiology.',
    expertise: ['Interventional Cardiology'],
    availability: ''
  },
  {
    id: 'ashish-modi',
    name: 'Dr. Ashish Kumar Modi',
    qualifications: 'MBBS, MS (General Surgery)',
    specialty: 'Bariatric Surgery, General & Laparoscopic Surgery',
    experience: '12+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/General Surgeon - Dr. Ashish-Kumar-Modi.png',
    description: 'Dr. Ashish Kumar Modi is a highly skilled bariatric and laparoscopic surgeon with over 12 years of experience.',
    expertise: ['Laparoscopy Surgery', 'Laser Surgery For Proctology', 'Diagnostic and Therapeutic Endoscopy'],
    availability: ''
  },
  {
    id: 'avinash-dubey',
    name: 'Dr. Avinash Kumar Dubey',
    qualifications: 'MD (Internal Medicine), DM (Nephrology)',
    specialty: 'Nephrology',
    experience: '10+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Nephrologist - Dr. Avinas- Kumar-Dubey.png',
    description: 'Dr. Avinash Kumar Dubey is a distinguished Nephrologist with over 10 years of experience.',
    expertise: ['Kidney transplantation', 'Chronic Kidney Disease (CKD)', 'Preventive Nephrology'],
    availability: ''
  },
  {
    id: 'ravish-ranjan',
    name: 'Dr. Ravish Ranjan',
    qualifications: 'MBBS, MD (Internal Medicine), DNB Super Specialty',
    specialty: 'Gastroenterology',
    experience: '12 Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gastroenterologist - Dr. Ravish-Ranjan.png',
    description: 'Dr. Ravish Ranjan is an experienced gastroenterologist specializing in advanced diagnostic and therapeutic endoscopy.',
    expertise: ['Gastroenterology', 'Therapeutic and Diagnostic Upper GI Endoscopy', 'ERCP'],
    availability: ''
  },
  {
    id: 'fuzail-sarwer',
    name: 'Dr. Fuzail Sarwer',
    qualifications: 'MBBS, MD (Anaesthesiology), PDCC (Cardiac Anaesthesia)',
    specialty: 'Critical Care',
    experience: '8+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Fuzail-Sarwar.png',
    description: 'Dr. Fuzail Sarwer is a renowned Anaesthesiologist and Critical Care specialist with over 20 years of experience.',
    expertise: ['Anaesthesiology & Pain Management', 'Critical Care Medicine', 'Trauma Care & Emergency Medicine'],
    availability: ''
  },
  {
    id: 'Muzammil-pheroz',
    name: 'Dr. Muzammil Feroz',
    qualifications: 'MBBS, MS (Orthopaedics), DNB (Orthopaedics)',
    specialty: 'Orthopaedics & Joint Replacement',
    experience: '9+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Muzammil-Feroz.png',
    description: 'Dr. Muzammil Pheroz is an experienced orthopaedist with over 9 years of practice.',
    expertise: ['Trauma Surgery', 'Geriatric Trauma', 'Hip & Knee Joint Replacement'],
    availability: ''
  },
  {
    id: 'tanushree-chatterjee',
    name: 'Dr. Tanushree Chatterjee',
    qualifications: 'MBBS, MS (Obstetrics), DNB (Obs & Gyn), D.MAS',
    specialty: 'Obstetrics & Gynaecology',
    experience: '10+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Tanushree-Chatterjee.png',
    description: 'Dr. Tanushree Chatterjee has over 10 years of experience in obstetrics and gynaecology.',
    expertise: ['Laparoscopy & Hysteroscopy', 'Infertility', 'Sonologist (USG)'],
    availability: ''
  },
  {
    id: 'pk-raina',
    name: 'Dr. P K Raina',
    qualifications: 'MBBS, MS (Surgery)',
    specialty: 'Oncology',
    experience: '14+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Oncologist - Dr. P-K-Raina.png',
    description: 'Dr. P K Raina is a skilled oncologist and surgeon with over 14 years of experience.',
    expertise: ['Head & Neck Cancer', 'Breast Cancer', 'Gynae Oncology'],
    availability: ''
  },
  {
    id: 'suprova-chakraborty',
    name: 'Dr. Suprova Chakraborty',
    qualifications: 'DNB Respiratory Medicine',
    specialty: 'Pulmonology',
    experience: '18+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Pulmonologist - Dr. Suprova-Chakraborty.png',
    description: 'Dr. Suprova Chakraborty is an experienced pulmonologist with over 18 years specializing in respiratory medicine.',
    expertise: ['Allergies', 'Asthma and Lung Disease Treatment', 'Tuberculosis, Bronchitis'],
    availability: ''
  },
  {
    id: 'sunil-kumar',
    name: 'Dr. Sunil Kumar',
    qualifications: 'MBBS, MS (General Surgery), MCh (Urology)',
    specialty: 'Urology',
    experience: '12+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Sunil-Kumar.png',
    description: 'Dr. Sunil Kumar is a senior urologist with over 12 years of experience.',
    expertise: ['Robotic Surgery', 'Renal Transplantation', 'Laparoscopic Surgery'],
    availability: ''
  },
  {
    id: 'ved-prakash',
    name: 'Dr. Ved Prakash Verma',
    qualifications: 'MBBS, MS (General Surgery), MCh (Urology)',
    specialty: 'Urology',
    experience: '9+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Ved-Prakash-Verma.png',
    description: 'Dr. Ved Prakash is a urologist with over 9 years of experience.',
    expertise: ['Endourology', 'Reconstructive Urology', 'Uro-oncology'],
    availability: ''
  },
  {
    id: 'abhay-pandey',
    name: 'Dr. Abhay Kumar Pandey',
    qualifications: 'BPT, MPT, PGDYT, COMT, MIAP',
    specialty: 'Physiotherapy',
    experience: '25+ Years',
    image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.png',
    description: 'Dr. Abhay Kr Pandey is a senior physiotherapist at Raj Hospital, Ranchi.',
    expertise: ['Orthopedic & Traumatology Physiotherapy', 'Yoga Therapy', 'Manual Therapy'],
    availability: ''
  }];


  // Responsive slides configuration
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 cards
      if (window.innerWidth >= 768) return 2; // Tablet: 2 cards
      return 1; // Mobile: 1 card
    }
    return 3;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, doctors.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev <= 0 ? maxSlides : prev - 1);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-primary-600">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly qualified and experienced specialists are committed to providing you with the best medical care
          </p>
        </motion.div>

        {/* Horizontal Scrollable Doctors Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden lg:block">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-100">

              <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden lg:block">
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-100">

              <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-primary-600" />
            </button>
          </div>

          {/* Doctors Slider */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}>

              {doctors.map((doctor, index) =>
              <div
                key={doctor.id || doctor.name}
                className={`flex-shrink-0 px-4 ${
                slidesToShow === 3 ? 'w-1/3' : slidesToShow === 2 ? 'w-1/2' : 'w-full'}`
                }>

                  <Link to={`/doctors/${doctor.id}`}>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full cursor-pointer">

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
                      {/* <div className="flex items-center text-sm text-gray-500 mb-3">
                        <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                        <span>{doctor.experience} Experience</span>
                      </div> */}

                      {/* {doctor.description &&
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {doctor.description}
                        </p>
                    } */}

                      {/* Expertise Tags */}
                      {/* {doctor.expertise &&
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
                    } */}

                      {/* Availability */}
                      {/* {doctor.availability &&
                    <div className="text-sm text-gray-500 mb-4">
                          <strong>Available:</strong> {doctor.availability}
                        </div>
                    } */}

                      <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span>View Profile</span>
                      </button>
                    </div>
                  </motion.div>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-200">

              <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-primary-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors border border-gray-200">

              <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: maxSlides + 1 }, (_, index) =>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'}`
              } />

            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <Link to="/doctors" className="inline-block bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors font-semibold text-lg">
            View All Doctors
          </Link>
        </motion.div>
      </div>
    </section>);

};

export default DoctorsSection;