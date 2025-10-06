import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUser, FiMapPin, FiPhone, FiCheck } = FiIcons;

// Shared specialty icons (easy to extend)
const medicalIcons = {
  cardiology:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/091b9e61-b25b-4812-8cd8-7615daae1bd5.png',
  neurology:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/69f8ef93-154c-488e-9dfe-781dd286c641.png',
  oncology:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/fa4c25d9-2812-4a78-aca1-8f31f67ebe83.png',
  orthopedics:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/697b8ebb-3648-4a6b-ad86-a8d0089d3fbd.png',
  gastroenterology:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/989ec42a-aa58-4b37-b9f3-ec419fcd10a2.png',
  nephrology:
    'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6e48b8a7-bca0-4bc4-acbb-3ba5f5674077.png',
};

// Centralized doctors data — add more objects here to extend the app
export const doctorsData = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar Sinha',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Cardiology',
    experience: '16+ Years',
    image:
      'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/46a6b6ca-d18f-4dc7-9b36-60b052f0f535.png',
    specialtyIcon: medicalIcons.cardiology,
    description:
      'Dr. Rajesh Kumar Sinha is a Senior Consultant Cardiologist with over 16 years of experience in the field. He specializes in interventional cardiology, complex cardiac procedures, angioplasty, and comprehensive heart disease management.',
    expertise: [
      'Interventional Cardiology',
      'Angioplasty & Stenting',
      'Cardiac Catheterization',
      'Heart Failure Management',
      'Preventive Cardiology',
      'Coronary Artery Disease',
      'Echocardiography',
      'Cardiac Rehabilitation',
    ],
    procedures: [
      {
        name: 'Angiography & Angioplasty',
        count: '1000+',
        description:
          'Diagnostic imaging of blood vessels and minimally invasive treatment of blockages',
      },
      {
        name: 'Echocardiography',
        count: '3000+',
        description:
          'Ultrasound imaging of the heart to assess structure and function',
      },
      {
        name: 'Cardiac Stenting',
        count: '800+',
        description: 'Placement of stents to keep arteries open and improve blood flow',
      },
      {
        name: 'Pacemaker Implantation',
        count: '400+',
        description: 'Implantation of devices to regulate heart rhythm',
      },
    ],
    education: [
      {
        degree: 'DM Cardiology',
        institution: 'All India Institute of Medical Sciences (AIIMS), Delhi',
        year: '2008',
      },
      {
        degree: 'MD Medicine',
        institution: 'Patna Medical College and Hospital',
        year: '2005',
      },
      {
        degree: 'MBBS',
        institution: 'Patna Medical College and Hospital',
        year: '2001',
      },
    ],
    memberships: [
      'Cardiological Society of India (CSI)',
      'Indian Medical Association (IMA)',
      'Association of Physicians of India (API)',
      'Indian College of Cardiology (ICC)',
      'American College of Cardiology (International Associate)',
    ],
    awards: [
      { title: 'Best Cardiologist Award', organization: 'Jharkhand Medical Association', year: '2022' },
      { title: 'Excellence in Heart Care', organization: 'Indian Cardiac Society', year: '2019' },
      { title: 'Young Investigator Award', organization: 'Cardiological Society of India', year: '2012' },
    ],
    publications: [
      {
        title:
          'Outcomes of Primary Angioplasty in Acute Myocardial Infarction: A Single Center Experience',
        journal: 'Indian Heart Journal',
        year: '2021',
      },
      {
        title: 'Prevalence of Coronary Artery Disease in Eastern India: A Retrospective Study',
        journal: 'Journal of Clinical Cardiology',
        year: '2018',
      },
      {
        title: 'Management of Heart Failure in Rural Settings: Challenges and Solutions',
        journal: 'Indian Journal of Medical Research',
        year: '2016',
      },
    ],
    contact: {
      email: 'dr.rajesh@rajhospitals.com',
      phone: '+919771488888',
      clinic: 'Raj Hospitals, Cardiology Department, 3rd Floor',
      address: 'Ranchi, Jharkhand, India',
    },
  },

  // Example second doctor — extend or copy this block to add more
  {
    id: '2',
    name: 'Dr. Meera Sharma',
    qualifications: 'MBBS, MD',
    specialty: 'Neurology',
    experience: '12+ Years',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/sample-doc.png',
    specialtyIcon: medicalIcons.neurology,
    description: 'Dr. Meera Sharma is an expert Neurologist with experience in stroke care and epilepsy management.',
    expertise: ['Epilepsy Management', 'Stroke Care', 'Neurodegenerative Disorders', 'Neurophysiology'],
    procedures: [
      {
        name: 'EEG & Video EEG',
        description: 'Electrophysiological monitoring for seizure diagnosis',
      },
      {
        name: 'Thrombolysis for Acute Stroke',
        description: 'Acute reperfusion therapy for ischemic stroke',
      },
    ],
    education: [
      { degree: 'MD Neurology', institution: 'NIMHANS, Bangalore', year: '2011' },
      { degree: 'MBBS', institution: 'Delhi University', year: '2007' },
    ],
    memberships: ['Indian Academy of Neurology', 'Indian Medical Association (IMA)'],
    awards: [{ title: 'Best Neurologist Award', organization: 'INA', year: '2020' }],
    publications: [
      { title: 'Advancements in Epilepsy Treatment', journal: 'Neurology India', year: '2019' },
    ],
    contact: {
      email: 'dr.meera@cityhospital.com',
      phone: '+919876543210',
      clinic: 'City Hospital, Neuro Department',
      address: 'Bangalore, India',
    },
  },

 {
  id: '3',
  name: 'Dr. Rajesh Kumar Jha',
  qualifications: 'MBBS, MD, DM',
  specialty: 'Cardiology',
  experience: '16+ Years',
  image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/sample-doc.png',
  specialtyIcon: medicalIcons.cardiology,
  description: 'Dr. Rajesh Kumar Jha is a Cardiologist with over 16 years of experience specializing in interventional cardiology.',
  expertise: ['Interventional Cardiology'],
  education: [
    { degree: 'DM (Cardiology)', institution: 'Safdarjung Hospital, New Delhi' },
    { degree: 'MD (Medicine)', institution: 'RIMS, Ranchi' },
    { degree: 'MBBS', institution: 'TNMC, Mumbai' }
  ],
  memberships: [
    'AFESC - European Society of Cardiology',
    'Cardiological Society of India (CSI)'
  ],
  procedures: [
    {
      name: 'Angioplasty & Stenting',
      description: 'Minimally invasive procedure to open blocked coronary arteries',
      
    },
    {
      name: 'Coronary Angiography',
      description: 'Diagnostic imaging of coronary arteries',
      
    },
    {
      name: 'Pacemaker Implantation',
      description: 'Implantation of devices to regulate abnormal heart rhythms',
      
    }
  ],
  awards: [
    { title: 'Excellence in Cardiac Care', organization: 'Indian Cardiac Society', year: '2021' },
    { title: 'Outstanding Cardiologist Award', organization: 'AFESC', year: '2019' }
  ],
   publications: [
    //  no publications listed
    ],
  contact: {
    phone: '+919263630500'
  }
},

//critical care
{
  id: '4',
  name: 'Dr. Fuzail Sarwer',
  qualifications: 'MBBS, MD (Anaesthesiology), PDCC (Cardiac Anaesthesia)',
  specialty: 'Critical Care',
  experience: '8+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. Fuzail Sarwer is a renowned Anaesthesiologist and Critical Care specialist with over 20 years of experience. He is known for his precise diagnosis and empathetic patient care.',
  expertise: [
    'Anaesthesiology & Pain Management',
    'Critical Care Medicine',
    'Trauma Care & Emergency Medicine',
    'Cardiac Anesthesia',
    'POCUS (Point Of Care Ultrasound)',
    'Medical Education & Research Methodology'
  ],
  education: [
    { degree: 'MBBS', institution: 'Kaithal Medical College', year: '' },
    { degree: 'MD (Anaesthesiology)', institution: 'Kaithal Medical College', year: '' },
    { degree: 'PDCC (Cardiac Anaesthesia)', institution: 'RIMS, Ranchi', year: '' }
  ],
  memberships: [
    'Indian Medical Association',
    'Indian Society Of Anesthesiologists',
    'Indian Society of Critical Care Medicine'
  ],
  awards: [
    // { title: 'Member - Indian Medical Association', organization: '', year: '' },
    // { title: 'Member - Indian Society Of Anesthesiologists', organization: '', year: '' },
    // { title: 'Member - Indian Society of Critical Care Medicine', organization: '', year: '' }
  ],
  procedures: [], // No procedures listed
  publications: [], // No publications listed
  contact: {
    phone: '+919263630500',
    email: '', // No email provided
    clinic: '', // No clinic address provided
    address: '' // No physical address provided
  }
},

{
  id: '5',
  name: 'Dr. Shyam Prasad',
  qualifications: 'MBBS, MD MEM',
  specialty: 'Emergency',
  experience: '5+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. Shyam Prasad is an experienced emergency medicine specialist with over 5 years of practice. He serves as the Consultant Head of the Department of Emergency at Raj Hospital and is affiliated with SEMI. He is dedicated to handling all kinds of emergency medical situations and trauma care.',
  expertise: [
    'Emergency Medical Care',
    'All Types of Trauma'
  ],
  education: [
    { degree: 'MBBS', institution: 'Smolensk State Medical Academy, Russia', year: '' },
    { degree: 'MD MEM', institution: 'G.W.U & Amri Bhubaneswar', year: '' }
  ],
  memberships: [
    'SEMI'
  ],
  awards: [
    { title: 'Consultant Head', organization: 'Department Of Emergency, Raj Hospital', year: '' }
  ],
  procedures: [], // No procedures listed
  publications: [], // No publications listed
  contact: {
    phone: '+919263630500',
    email: '', // No email provided
    clinic: '', // No clinic address provided
    address: '' // No physical address provided
  }
},

//gastroenterology
{
  id: '6',
  name: 'Dr. Ravish Ranjan',
  qualifications: 'MBBS, MD (Internal Medicine), DNB Super Specialty',
  specialty: 'Gastroenterology',
  experience: '12 Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. Ravish Ranjan is an experienced gastroenterologist specializing in advanced diagnostic and therapeutic endoscopy with 12 years of expertise. He is dedicated to providing personalized and comprehensive care for complex gastrointestinal conditions.',
  expertise: [
    'Gastroenterology',
    'Therapeutic and Diagnostic Upper GI Endoscopy',
    'Lower GI Endoscopy',
    'ERCP',
    'Endoscopy and EUS',
    'IBD Clinic',
    'Hepatology Clinic',
    'Pancreatic Disorder',
    'Esophageal Disorders',
    'Enteral Stenting'
  ],
  education: [
    { degree: 'MBBS', institution: 'RIMS', year: '' },
    { degree: 'MD (Internal Medicine)', institution: 'PMCH, Patna', year: '' },
    { degree: 'DNB Super Specialty', institution: 'IGIMS, Patna', year: '' }
  ],
  memberships: [], // No memberships listed
  awards: [], // No awards listed
  procedures: [], // No specific procedures listed
  publications: [], // No publications listed
  contact: {
    phone: '+919263630500',
    email: '', // No email provided
    clinic: '', // No clinic address provided
    address: '' // No physical address provided
  }
},
 {
  id: '7',
  name: 'Dr. Ashish Kumar Modi',
  qualifications: 'MBBS, MS (General Surgery)',
  specialty: 'Bariatric Surgery, General & Laparoscopic Surgery',
  experience: '12+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. Ashish Kumar Modi is a highly skilled bariatric and laparoscopic surgeon with over 12 years of experience. He specializes in advanced laparoscopic procedures, laser surgery for proctology, and diagnostic and therapeutic endoscopy, known for his precise surgical skills and compassionate patient care.',
  expertise: [
    'Laparoscopy Surgery',
    'Laser Surgery For Proctology',
    'Diagnostic and Therapeutic Endoscopy'
  ],
  education: [
    { degree: 'MBBS', institution: 'JLNMCH, Bhagalpur', year: '' },
    { degree: 'MS (General Surgery)', institution: 'RIMS, Ranchi', year: '' }
  ],
  memberships: [
    'FMAS',
    'FIAGE',
    'Member of ASI',
    'Member of Diabetic Foot',
    'Treasurer in ASI Jharkhand Chapter'
  ],
  awards: [], // No specific awards listed
  procedures: [], // No specific procedures listed
  publications: [], // No publications listed
  contact: {
    phone: '+919263630500',
    email: '', // No email provided
    clinic: '', // No clinic address provided
    address: '' // No physical address provided
  }
},

//internal medicine
{
  id: '8',
  name: 'Dr. A K Agarwal',
  qualifications: 'MBBS, MD (Medicine)',
  specialty: 'Internal Medicine',
  experience: '18+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. A K Agarwal is a seasoned Internal Medicine specialist with over 18 years of experience, focusing on heart and chest-related issues.',
  expertise: [
    'Medicine',
    'Heart problems',
    'Chest related issues'
  ],
  education: [
    { degree: 'MBBS', institution: '', year: '' },
    { degree: 'MD (Medicine)', institution: 'PMCH, Patna', year: '' },
    { degree: 'Senior Residency (Cardiology)', institution: 'GB Pant Hospital, New Delhi', year: '' },
    { degree: '', institution: 'RIMS', year: '' }
  ],
  memberships: [], // Not specified
  awards: [], // Not specified
  procedures: [], // Not specified
  publications: [], // Not specified
  contact: {
    phone: '+919263630500',
    email: '', // Not specified
    clinic: '', // Not specified
    address: '' // Not specified
  }
},

{
  id: '9',
  name: 'Dr. A K Sinha',
  qualifications: 'MBBS, MD (Medicine)',
  specialty: 'Internal Medicine',
  experience: '25+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. A K Sinha is a highly experienced Internal Medicine specialist with over 25 years of practice, focusing on cardiology, heart problems, and chest-related issues.',
  expertise: [
    'Cardiology',
    'Heart problems',
    'Chest related issues'
  ],
  education: [
    { degree: 'MBBS', institution: 'PMCH', year: '' },
    { degree: 'MD (Medicine)', institution: '', year: '' }
  ],
  memberships: [], // Not specified
  awards: [], // Not specified
  procedures: [], // Not specified
  publications: [], // Not specified
  contact: {
    phone: '+919263630500',
    email: '', // Not specified
    clinic: '', // Not specified
    address: '' // Not specified
  }
},

//nephrology
{
  id: '10',
  name: 'Dr. Avinash Kumar Dubey',
  qualifications: 'MBBS (Gold Medalist), MD (Internal Medicine), DM (Nephrology)',
  specialty: 'Nephrology',
  experience: '10+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description:
    'Dr. Avinash Kumar Dubey is a distinguished Nephrologist with over 10 years of experience, specializing in kidney transplantation, chronic kidney disease, and preventive nephrology. He is recognized for his thorough diagnostic approach and compassionate patient care.',
  expertise: [
    'Kidney transplantation',
    'Chronic Kidney Disease (CKD)',
    'Preventive Nephrology',
    'Clinical Epidemiology'
  ],
  education: [
    { degree: 'MBBS', institution: 'Mahatma Gandhi Memorial Medical College, Indore', year: '' },
    { degree: 'MD (Internal Medicine)', institution: 'Gandhi Medical College, Indore / Bhubaneswar', year: '' },
    { degree: 'DM (Nephrology)', institution: 'Jawaharlal Institute Of Postgraduate Medical Education And Research (JIPMER), Puducherry, India', year: '' }
  ],
  memberships: [], // Not specified
  awards: [
    { title: 'Position in ISHTM National Hematology Quiz (State Level GMC Bhopal)', year: '2011 & 2012' },
    { title: 'Position in Oral Presentation (DM Thesis Work, Puducherry ISNSCCON)', year: '2017' }
  ],
  procedures: [], // Not specified
  publications: [], // Not specified
  contact: {
    phone: '+919263630500',
    email: '', // Not specified
    clinic: '', // Not specified
    address: '' // Not specified
  }
},

//neuroscience
{
  id: '11',
  name: 'Dr. Vivek Raj',
  qualifications: 'MBBS, ECFMG Certified (USA) Neurosurgery, DNB Neurosurgery (Brain & Spine Surgery)',
  specialty: 'Neurosurgery',
  experience: '9+ Years',
  image: '', // No image provided
  specialtyIcon: '', // No icon provided
  description: 'Dr. Vivek Raj is a skilled neurosurgeon with expertise in brain and spine tumor surgery, pediatric brain surgery, and emergency spine trauma. He is committed to providing advanced surgical care including awake brain surgery for better patient outcomes.',
  expertise: [
    'Headache',
    'Backache & Stroke',
    'Brain & Spine Tumor Surgery',
    'Pediatric Brain Surgery',
    'Emergency & Spine Trauma Surgery',
    'Awake Brain Surgery'
  ],
  education: [
    { degree: 'MBBS', institution: 'Kasturba Medical College, Manipal', year: '' },
    { degree: 'ECFMG Certified (USA) Neurosurgery', institution: 'Sri Sathya Sai Institute of Higher Medical Science', year: '' },
    { degree: 'DNB Neurosurgery (Brain & Spine Surgery)', institution: 'Bangalore', year: '' }
  ],
  memberships: [
    'Indian Medical Association',
    'Neurological Society of India'
  ],
  awards: [], // Not specified
  procedures: [], // Not specified
  publications: [], // Not specified
  contact: {
    phone: '+919263630500',
    email: '', // Not specified
    clinic: '', // Not specified
    address: '' // Not specified
  }
},
















];

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  // Pick doctor by id (fallback to first doctor if not found)
  const doctor = doctorsData.find((d) => d.id === doctorId) || doctorsData[0];

  if (!doctor) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Doctor profile not found</h2>
        <p className="text-gray-600 mt-2">Please check the URL or go back to the doctors listing.</p>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Two column layout container */}
          <div className="md:flex md:items-start md:gap-12">
            {/* Left Column: All doctor info */}
            <div className="md:flex-1 space-y-8">
              {/* Hero top: Image + Info */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                    }}
                  />

                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full p-2 shadow-lg border-2 border-primary-100">
                    <img src={doctor.specialtyIcon} alt={doctor.specialty} className="w-full h-full object-contain" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center md:text-left flex-1 mt-6 md:mt-0">

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                  <p className="text-xl text-primary-600 font-medium mb-2">{doctor.qualifications}</p>
                  <p className="text-lg text-secondary-600 font-medium mb-4">{doctor.specialty}</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    <span className="flex items-center text-gray-700">
                      <SafeIcon icon={FiUser} className="w-5 h-5 mr-2" />
                      {doctor.experience} Experience
                    </span>
                    <span className="flex items-center text-gray-700">
                      <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                      {doctor.contact?.address || 'Location not specified'}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button
                      onClick={() => setShowAppointmentForm(true)}
                      className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center justify-center space-x-2">

                      <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </button>

                    <a
                      href={`tel:${doctor.contact?.phone || ''}`}
                      className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold flex items-center justify-center space-x-2">

                      <SafeIcon icon={FiPhone} className="w-5 h-5" />
                      <span>Contact Now</span>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* About Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8 mt-12">
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">About {doctor.name}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{doctor.description}</p>
                </div>

                {/* Expertise */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-2xl shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {doctor.expertise.map((skill) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center space-x-3">

                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Procedures Performed</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {doctor.procedures.map((procedure) => (
                        <motion.div key={procedure.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-gray-50 p-4 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{procedure.name}</h4>
                            <span className="text-sm text-primary-600 font-semibold">{procedure.count}</span>
                          </div>
                          <p className="text-sm text-gray-600">{procedure.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Education & Training */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-2xl shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Training</h2>
                  <div className="space-y-8">
                    {doctor.education.map((edu, index) => (
                      <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} className="flex">
                        <div className="mr-4">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            {/* <span className="text-primary-600 font-bold">{edu.year.substring(2)}</span> */}
                            
                            <span className="text-primary-600 font-bold">{edu.year ? edu.year.substring(2) : 'N/A'}</span>

                          </div>
                          <div className="h-full w-0.5 bg-primary-100 mx-auto mt-2"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Memberships</h3>
                    <ul className="space-y-3">
                      {doctor.memberships.map((membership, idx) => (
                        <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }} className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-500" />
                          <span className="text-gray-700">{membership}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Awards & Recognition */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
                  <div className="space-y-4">
                    {doctor.awards.map((award, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 mt-1">
                          <SafeIcon icon={FiAward} className="w-5 h-5 text-secondary-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{award.title}</h4>
                          <p className="text-gray-600">{award.organization}, {award.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Publications */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Publications</h3>
                  <div className="space-y-4">
                    {doctor.publications.map((publication, index) => (
                      <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                        <h4 className="font-medium text-gray-900">{publication.title}</h4>
                        <p className="text-gray-600">{publication.journal}, {publication.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sticky Form */}
            <div className="w-full md:w-96 md:sticky md:top-32 self-start rounded-2xl shadow-md bg-white p-6 border border-gray-100 mt-12 md:mt-0">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter your name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter mobile number" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter email" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Query</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Type your query" required />
                </div>

                <button type="submit" className="w-full bg-primary-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">Submit</button>
              </form>

              {/* Appointment modal / inline form */}
              {showAppointmentForm && (
                <div className="mt-6 bg-primary-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">Book Appointment with {doctor.name}</h4>
                    <button onClick={() => setShowAppointmentForm(false)} className="text-sm text-gray-600">Close</button>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setShowAppointmentForm(false); }} className="space-y-3">
                    <input type="text" placeholder="Your name" className="w-full px-3 py-2 border rounded" required />
                    <input type="tel" placeholder="Mobile" className="w-full px-3 py-2 border rounded" required />
                    <input type="date" className="w-full px-3 py-2 border rounded" required />
                    <button type="submit" className="w-full bg-primary-500 text-white px-3 py-2 rounded">Confirm</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
