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
  // {
  //   id: 'rajesh-sinha',
  //   name: 'Dr. Rajesh Kumar Sinha',
  //   qualifications: 'MBBS, MD, DM',
  //   specialty: 'Cardiology',
  //   experience: '16+ Years',
  //   image:
  //     'assets/Doc-Side/Cardiologist - Dr. Rajesh Kumar Jha.png',
  //   specialtyIcon: medicalIcons.cardiology,
  //   description:
  //     'Dr. Rajesh Kumar Sinha is a Senior Consultant Cardiologist with over 16 years of experience in the field. He specializes in interventional cardiology, complex cardiac procedures, angioplasty, and comprehensive heart disease management.',
  //   expertise: [
  //     'Interventional Cardiology',
  //     'Angioplasty & Stenting',
  //     'Cardiac Catheterization',
  //     'Heart Failure Management',
  //     'Preventive Cardiology',
  //     'Coronary Artery Disease',
  //     'Echocardiography',
  //     'Cardiac Rehabilitation',
  //   ],
  //   procedures: [
  //     {
  //       name: 'Angiography & Angioplasty',
  //       count: '1000+',
  //       description:
  //         'Diagnostic imaging of blood vessels and minimally invasive treatment of blockages',
  //     },
  //     {
  //       name: 'Echocardiography',
  //       count: '3000+',
  //       description:
  //         'Ultrasound imaging of the heart to assess structure and function',
  //     },
  //     {
  //       name: 'Cardiac Stenting',
  //       count: '800+',
  //       description: 'Placement of stents to keep arteries open and improve blood flow',
  //     },
  //     {
  //       name: 'Pacemaker Implantation',
  //       count: '400+',
  //       description: 'Implantation of devices to regulate heart rhythm',
  //     },
  //   ],
  //   education: [
  //     {
  //       degree: 'DM Cardiology',
  //       institution: 'All India Institute of Medical Sciences (AIIMS), Delhi',
  //       year: '2008',
  //     },
  //     {
  //       degree: 'MD Medicine',
  //       institution: 'Patna Medical College and Hospital',
  //       year: '2005',
  //     },
  //     {
  //       degree: 'MBBS',
  //       institution: 'Patna Medical College and Hospital',
  //       year: '2001',
  //     },
  //   ],
  //   memberships: [
  //     'Cardiological Society of India (CSI)',
  //     'Indian Medical Association (IMA)',
  //     'Association of Physicians of India (API)',
  //     'Indian College of Cardiology (ICC)',
  //     'American College of Cardiology (International Associate)',
  //   ],
  //   awards: [
  //     { title: 'Best Cardiologist Award', organization: 'Jharkhand Medical Association', year: '2022' },
  //     { title: 'Excellence in Heart Care', organization: 'Indian Cardiac Society', year: '2019' },
  //     { title: 'Young Investigator Award', organization: 'Cardiological Society of India', year: '2012' },
  //   ],
  //   publications: [
  //     {
  //       title:
  //         'Outcomes of Primary Angioplasty in Acute Myocardial Infarction: A Single Center Experience',
  //       journal: 'Indian Heart Journal',
  //       year: '2021',
  //     },
  //     {
  //       title: 'Prevalence of Coronary Artery Disease in Eastern India: A Retrospective Study',
  //       journal: 'Journal of Clinical Cardiology',
  //       year: '2018',
  //     },
  //     {
  //       title: 'Management of Heart Failure in Rural Settings: Challenges and Solutions',
  //       journal: 'Indian Journal of Medical Research',
  //       year: '2016',
  //     },
  //   ],
  //   contact: {
  //     email: 'dr.rajesh@rajhospitals.com',
  //     phone: '+919771488888',
  //     clinic: 'Raj Hospitals, Cardiology Department, 3rd Floor',
  //     address: 'Ranchi, Jharkhand, India',
  //   },
  // },

  // Example second doctor — extend or copy this block to add more
  {
    id: 'meera-sharma',
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
  id: 'rajesh-jha',
  name: 'Dr. Rajesh Kumar Jha',
  qualifications: 'MBBS, MD, DM',
  specialty: 'Cardiology',
  experience: '16+ Years',
  image: 'assets/Doc-Side/Cardiologist - Dr. Rajesh Kumar Jha.png',
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
  id: 'fuzail-sarwer',
  name: 'Dr. Fuzail Sarwer',
  qualifications: 'MBBS, MD (Anaesthesiology), PDCC (Cardiac Anaesthesia)',
  specialty: 'Critical Care',
  experience: '8+ Years',
  image: 'assets/Doc-Side/Anaesthesiologist - Dr. Fuzail Sarwar.png', 
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
  id: 'shyam-prasad',
  name: 'Dr. Shyam Prasad',
  qualifications: 'MBBS, MD MEM',
  specialty: 'Emergency',
  experience: '5+ Years',
  image: 'assets/Doc-Side/Emergency - Dr. Shyam Prasad.png',
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
  id: 'ravish-ranjan',
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
  id: 'ashish-modi',
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
  id: 'ak-agarwal',
  name: 'Dr. A K Agarwal',
  qualifications: 'MBBS, MD (Medicine)',
  specialty: 'Internal Medicine',
  experience: '18+ Years',
  image: 'assets/Doc-Side/Internal Medicine - Dr. A K Agrawal.png', 
  // specialtyIcon: '', // No icon provided
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
  id: 'ak-sinha',
  name: 'Dr. A K Sinha',
  qualifications: 'MBBS, MD (Medicine)',
  specialty: 'Internal Medicine',
  experience: '25+ Years',
  image: 'assets/Doc-Side/Internal Medicine - Dr. A K Sinha.png', 
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
{
  id: 'neelam',
  name: 'Dr. Neelam',
  qualifications: 'MBBS, MD, DNB (Orthopaedics)',
  specialty: 'Internal Medicine',
  experience: '8+ Years',
  image: '',
  specialtyIcon: medicalIcons.internalMedicine,
  description:
    'Dr. Neelam is an internal medicine specialist with over 8 years of experience. She has qualifications from Banaras Hindu University (BHU), Varanasi, and DNB in Orthopaedics from VMMC, Safdarjung, New Delhi.',
  expertise: [
    'Pulmonary Medicine',
    'Gastroenterology'
  ],
  procedures: [],
  education: [
    {
      degree: 'MD',
      institution: 'Banaras Hindu University (BHU), Varanasi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'Banaras Hindu University (BHU), Varanasi',
      year: ''
    },
    {
      degree: 'DNB (Orthopaedics)',
      institution: 'VMMC, CIO Safdarjung, New Delhi',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},


//nephrology
{
  id: 'avinash-dubey',
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
  id: 'vivek-raj',
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

//oncology
{
  id: 'pk-raina',
  name: 'Dr. P K Raina',
  qualifications: 'MBBS, MS (Surgery)',
  specialty: 'Oncology',
  experience: '14+ Years',
  image: 'assets/specialties/Oncology/Dr.image-front.jpg',
  specialtyIcon: medicalIcons.oncology,
  description:
    'Dr. P K Raina is a skilled oncologist and surgeon with over 14 years of experience. His areas of interest include Head & Neck Cancer, Breast Cancer, and Gynae Oncology, focusing on comprehensive cancer care and surgical oncology.',
  expertise: [
    'Head & Neck Cancer',
    'Breast Cancer',
    'Gynae Oncology'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (Surgery)',
      institution: 'Banaras Hindu University (BHU)',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: '',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: '',
  }
},

//orthopaedics & joint replacement
{
  id: 'abhijit-kumar',
  name: 'Dr. Abhijit Kumar',
  qualifications: 'MBBS, MS (Otolaryngology), PDCC (Head and Neck Oncology)',
  specialty: 'Otolaryngology & Head and Neck Surgery',
  experience: '16+ Years',
  image: '',
  specialtyIcon: medicalIcons.ent,
  description:
    'Dr. Abhijit Kumar is a Consultant Otolaryngologist and Head & Neck Surgeon with over 16 years of experience across premier surgical centers in India. His special interest includes endoscopic skull base surgery, head and neck cancer surgeries, cochlear implants, and implantable hearing aids. He has extensive academic and clinical experience, along with numerous research publications in national and international journals.',
  expertise: [
    'Endoscopic Skull Base Surgery',
    'Head & Neck Cancer Surgery',
    'Cochlear Implant',
    'Implantable Hearing Aids',
    'Otolaryngology Procedures',
    'Laser Surgery in ENT'
  ],
  procedures: [],
  education: [
    {
      degree: 'PDCC (Head and Neck Oncology)',
      institution: 'Tata Memorial Centre, Mumbai',
      year: '2010-11'
    },
    {
      degree: 'MS (Otolaryngology)',
      institution: 'Kasturba Medical College, Mangalore, Manipal University',
      year: '2004-2006'
    },
    {
      degree: 'MBBS',
      institution: 'Government Medical College, Thiruvananthapuram, Kerala University',
      year: '2000-2001'
    }
  ],
  memberships: [
    'Indian Medical Association (IMA)',
    'Association of Otolaryngologists of India (AOI)',
    'Indian Society of Otology'
  ],
  awards: [],
  publications: [
    {
      title: 'Myoparasitism: A Rare Differential in a Case of Parotid Swelling',
      journal: 'J Head Neck Spine Surg',
      year: '2021'
    },
    {
      title: 'Aggressive Invasive Fungal Sinusitis with MDR Pseudomonas co-infection',
      journal: 'Int J Otorhinolaryngol Head Neck Surg',
      year: '2021'
    },
    {
      title: 'Bilateral Central Retinal Artery Occlusion in Post-COVID Mucormycosis',
      journal: 'Cureus',
      year: '2021'
    },
    {
      title: 'Berry-Treacher Collins Syndrome with Congenital Bells Palsy',
      journal: 'Cureus',
      year: '2021'
    },
    {
      title: 'The Role of Oral Vitamin D3 in Chronic Rhinosinusitis',
      journal: 'J Family Med Prim Care',
      year: '2020'
    },
    {
      title: 'Sphenopalatine Ganglion Block in Endoscopic Sinus Surgery: A Comparative Study',
      journal: 'J Allergy Ther',
      year: '2020'
    },
    {
      title: 'Balloon Catheter Sinusotomy – Review of Literature',
      journal: 'J Allergy Ther',
      year: '2020'
    },
    {
      title: 'Osteomyelitis of the Temporal Bone: Terminology, Diagnosis, and Management',
      journal: 'J Neurol Surg B Skull Base',
      year: '2014'
    },
    {
      title: 'Oral Microflora – A Comparative Study in HIV and Normal Patients',
      journal: 'Indian J Otolaryngol Head Neck Surg',
      year: '2014'
    },
    {
      title: 'Management of Head and Neck Trauma in a Developing Country',
      journal: 'Indian J Otolaryngol Head Neck Surg',
      year: '2009'
    }
  ],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

{
  id: 'Muzammil-pheroz',
  name: 'Dr. Muzammil Pheroz',
  qualifications: 'MBBS, MS (Orthopaedics), DNB (Orthopaedics)',
  specialty: 'Orthopaedics & Joint Replacement',
  experience: '9+ Years',
  image: 'assets/specialties/Orthopaedics/Doctor-Orthio-w.png',
  specialtyIcon: medicalIcons.orthopaedics,
  description:
    'Dr. Muzammil Pheroz is an experienced orthopaedist with over 9 years of practice. His expertise includes trauma surgery, geriatric trauma, joint replacement (hip and knee), arthroscopic surgery, spine surgery, paediatric orthopaedics, and deformity correction.',
  expertise: [
    'Trauma Surgery',
    'Geriatric Trauma',
    'Hip & Knee Joint Replacement',
    'Arthroscopic Surgery',
    'Spine Surgery',
    'Paediatric Orthopaedics',
    'Deformity Correction'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (Orthopaedics)',
      institution: 'VMMC & Safdarjung Hospital, New Delhi',
      year: ''
    },
    {
      degree: 'DNB (Orthopaedics)',
      institution: 'VMMC, CIO Safdarjung, New Delhi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'Patna Medical College and Hospital (PMCH)',
      year: ''
    }
  ],
  memberships: [
    'National Academy Of Medical Science (MNAMS), New Delhi',
    'Delhi Orthopaedics Association (DOA)',
    'JOA',
    'CZIOA',
    'Indian Orthopaedic Association (IOA)',
    'SICOT',
    'Spine Surgery',
    'Sports Medicine, Switzerland'
  ],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},
{
  id: 'abhishek-roy',
  name: 'Dr. Abhishek Roy',
  qualifications: 'MBBS, MS (Orthopaedics), FIJR, FIASM',
  specialty: 'Orthopaedics (Sports Injury & Joint Replacement)',
  experience: '6+ Years',
  image: 'assets/specialties/Orthopaedics/Dr. Abhishek Roy.png',
  specialtyIcon: medicalIcons.orthopaedics,
  description:
    'Dr. Abhishek Roy specializes in orthopaedics with a focus on sports injury and joint replacement. He has over 6 years of experience and expertise in managing complex trauma, arthritis, and autoimmune neurological disorders.',
  expertise: [
    'Joint Replacement',
    'Sports Injury',
    'Complex Trauma',
    'General Arthritis',
    'Autoimmune & Demyelinating Disorders (Multiple Sclerosis, ADEM, NMOSD, MOGAD)'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (Orthopaedics)',
      institution: 'MAMC, New Delhi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'RIMS, Ranchi',
      year: ''
    },
    {
      degree: 'FIJR',
      institution: 'D.Y. Patil University',
      year: ''
    },
    {
      degree: 'FIASM',
      institution: 'Indian Arthroscopy Society, Kolkata',
      year: ''
    }
  ],
  memberships: [
    'Delhi Orthopaedic Association'
  ],
 awards: [
  { title: 'MBBS Gold Medalist', year: '' },
  { title: 'Delhi Orthopaedic Association Best Paper Award', year: '' },
  { title: 'Healthcare Excellence Award, FIAMA', year: '' },
  { title: 'Position in ISHTM National Hematology Quiz (State Level GMC Bhopal)', year: '2011 & 2012' },
  { title: 'Position in Oral Presentation (DM Thesis Work, Puducherry ISNSCCON)', year: '2017' }
],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//pulmonology
{
  id: 'suprova-chakraborty',
  name: 'Dr. Suprova Chakraborty',
  qualifications: 'DNB Respiratory Medicine',
  specialty: 'Pulmonology',
  experience: '18+ Years',
  image: 'assets/Doc-Side/Pulmonologist - Dr. Suprova Chakraborty.png',
  specialtyIcon: medicalIcons.pulmonology,
  description:
    'Dr. Suprova Chakraborty is an experienced pulmonologist with over 18 years specializing in respiratory medicine. She has worked as Senior Resident at IPGMER-SSKM Hospital Kolkata and AIIMS Deoghar, and as Consultant at Hayat Hospital & Down Town Hospital in Guwahati.',
  expertise: [
    'Allergies',
    'Asthma and Lung Disease Treatment',
    'Obstructive Sleep Apnea and Other Sleep Disorders',
    'Tuberculosis, Bronchitis and Other Lung Conditions',
    'Pneumonia including Covid Care Treatment',
    'Pulmonary Rehabilitation for COPD, ILD and Long Covid',
    'Pulmonary Function Testing'
  ],
  procedures: [],
  education: [
    {
      degree: 'DNB Respiratory Medicine',
      institution: '',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//urology

{
  id: 'sunil-kumar',
  name: 'Dr. Sunil Kumar',
  qualifications: 'MBBS, MS (General Surgery), MCh (Urology)',
  specialty: 'Urology',
  experience: '12+ Years',
  image: '',
  specialtyIcon: medicalIcons.urology,
  description:
    'Dr. Sunil Kumar is a senior urologist with over 12 years of experience. He specializes in robotic surgery, renal transplantation, laparoscopic procedures, endourology, uro-oncology, male infertility, and vascular access for hemodialysis.',
  expertise: [
    'Robotic Surgery',
    'Renal Transplantation',
    'Laparoscopic Surgery',
    'Pancreatic Disorders',
    'Endourology',
    'Uro-Oncology',
    'Male Infertility',
    'Vascular Access for Hemodialysis'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (General Surgery)',
      institution: 'RIMS, Ranchi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'PMCH, Patna',
      year: ''
    },
    {
      degree: 'MCh (Urology)',
      institution: 'JIPMER, Puducherry',
      year: ''
    }
  ],
  memberships: [
    'Urological Society of India',
    'North Zone Urological Society of India',
    'South Zone Urological Society of India'
  ],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},
{
  id: 'ved-prakash',
  name: 'Dr. Ved Prakash',
  qualifications: 'MBBS, MS (General Surgery), MCh (Urology)',
  specialty: 'Urology',
  experience: '9+ Years',
  image: '',
  specialtyIcon: medicalIcons.urology,
  description:
    'Dr. Ved Prakash is a urologist with over 9 years of experience specializing in endourology, reconstructive urology, uro-oncology, laparoscopic surgery, and andrology including male infertility.',
  expertise: [
    'Endourology',
    'Reconstructive Urology',
    'Uro-oncology',
    'Laparoscopic Surgery',
    'Andrology',
    'Male Infertility'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (General Surgery)',
      institution: 'UCMS & GTB Hospital, Delhi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'MAMC, New Delhi',
      year: ''
    },
    {
      degree: 'MCh (Urology)',
      institution: 'KGMU, Lucknow',
      year: ''
    }
  ],
  memberships: [
    'Europe Fellowship Award (USI)',
    'Urological Society of India',
    'East Zone Urological Society of India',
    'North Zone Urological Society of India'
  ],
  awards: [
    { title: 'Europe Fellowship Award (USI)', year: '' }
  ],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//obstetrics & gynecology

{
  id: 'anupama-mahli',
  name: 'Dr. Anupama Mahli',
  qualifications: 'MBBS, MS (Obstetrics), DNB (Obs & Gyn), D.MAS',
  specialty: 'Obstetrics & Gynaecology',
  experience: '10+ Years',
  image: '',
  specialtyIcon: medicalIcons.obstetricsGynecology,
  description:
    'Dr. Anupama Mahli has over 10 years of experience in obstetrics and gynaecology with expertise in laparoscopy, hysteroscopy, infertility treatment, and sonology (ultrasound).',
  expertise: [
    'Laparoscopy & Hysteroscopy',
    'Infertility',
    'Sonologist (USG)'
  ],
  procedures: [],
  education: [
    {
      degree: 'MS (Obstetrics)',
      institution: 'West Bengal University of Health Sciences (WBUHS)',
      year: ''
    },
    {
      degree: 'DNB (Obs & Gyn)',
      institution: '',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'RIMS',
      year: ''
    },
    {
      degree: 'D.MAS',
      institution: '',
      year: ''
    }
  ],
  memberships: [
    'Senior Resident - PGIMER, Kolkata',
    'The Federation of Obstetric and Gynaecological Societies of India (FOGSI)',
    'Bengal Obstetrics & Gynaecological Society (BOGS)'
  ],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},
{
  id: 'pushpa-sinha',
  name: 'Dr. Pushpa Sinha',
  qualifications: 'MBBS, MD (OBG), DGO',
  specialty: 'Obstetrics & Gynaecology',
  experience: '10+ Years',
  image: '',
  specialtyIcon: medicalIcons.obstetricsGynecology,
  description:
    'Dr. Pushpa Sinha has over 10 years of experience in obstetrics and gynaecology, with interests in research on gynae and obstetric care, high-risk pregnancy, adolescent gynecology, puberty, infertility, menopause, infectious diseases, and ultrasound with color Doppler.',
  expertise: [
    'Research in Gynae & Obstetric Care',
    'High Risk of Pregnancy',
    'Adolescent Gynecology',
    'Puberty',
    'Infertility',
    'Menopause',
    'Infectious Diseases',
    'Ultrasound & Colour Doppler'
  ],
  procedures: [],
  education: [
    {
      degree: 'MD (OBG)',
      institution: 'Patna Medical College',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: '',
      year: ''
    },
    {
      degree: 'DGO',
      institution: '',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//aesthetics & critical care

{
  id: 'pankaj-kumar',
  name: 'Dr. Pankaj Kumar',
  qualifications: 'MBBS, MS (General Surgery), MCh (Plastic Surgery)',
  specialty: 'Aesthetic and Reconstructive Surgery',
  experience: '10+ Years',
  image: '',
  specialtyIcon: medicalIcons.plasticSurgery,
  description:
    'Dr. Pankaj Kumar is a renowned Plastic, Cosmetic, and Reconstructive Surgeon based in Ranchi with over 10 years of experience. He is associated with Raj Hospital and Srijan Plastic Cosmetic and Micro Surgery Clinic, known for attention to accurate diagnosis and empathetic patient care.',
  expertise: [
    'Nose Reshaping',
    'Lower Body Lift',
    'Scar Revision Surgery',
    'Ear Reconstruction',
    'Acne/Pimple Scar Treatment',
    'Non-Surgical Eye Lift'
  ],
  procedures: [],
  education: [
    {
      degree: 'MCh (Plastic Surgery)',
      institution: 'Patna Medical College',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'Tilka Manjhi Bhagalpur University',
      year: ''
    }
  ],
  memberships: [],
  awards: [
    { title: 'Global Healthcare Excellence Award', year: '' }
  ],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: 'Srijan Plastic Cosmetic & Micro Surgery Clinic, Kanka, Ranchi',
    address: '2nd Floor, Roshpa Tower, Mahatma Gandhi Main Road, Ranchi'
  }
},

//dental care
{
  id: 'suraj-mani-bhattacharjee',
  name: 'Dr. Suraj Mani Bhattacharjee',
  qualifications: 'BDS',
  specialty: 'Dentistry',
  experience: '10+ Years',
  image: '',
  specialtyIcon: medicalIcons.dentistry,
  description:
    'Dr. Suraj Mani Bhattacharjee is an experienced dentist with over 10 years of expertise, having performed 5000+ root canal treatments and multiple mouth rehabilitations. He has served as clinical head in leading dental chains and worked as a cosmetic dentist for Mahavir International NGO.',
  expertise: [
    'Cosmetic Dentistry',
    'Implantology',
    'Laser Specialist',
    'Smile Designer',
    'Dental Filling',
    'Root Canal Treatment (RCT)',
    'Crowns & Bridges',
    'Teeth Whitening (Bleaching)',
    'General Dentistry',
    'Scaling & Polishing',
    'Preventive Dentistry',
    'Veneers',
    'Removable Partial Dentures',
    'Complete Dentures',
    'Extractions and Surgical Extractions',
    'Implant Surgery',
    'Laser Gum Surgery',
    'Treatment of Pyorrhea',
    'Child Dentistry',
    'Braces and Realignment of Crooked Teeth'
  ],
  procedures: [],
  education: [
    {
      degree: 'BDS',
      institution: 'Rajiv Gandhi University of Health Science, Bangalore, Karnataka',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//dermatology
{
  id: 'piyali-banerjee',
  name: 'Dr. Piyali Banerjee',
  qualifications: 'MBBS, DVDL (Dermatology, Venereology, Leprosy)',
  specialty: 'Dermatology and Cosmetology',
  experience: '5+ Years',
  image: 'assets/specialties/Dermatology/front.jpeg',
  specialtyIcon: medicalIcons.dermatology,
  description:
    'Dr. Piyali Banerjee is a skilled dermatologist and cosmetologist with over 5 years of experience, specializing in hair disorders, acne, and cosmetology. She has held advisory roles and received multiple awards for her academic and clinical excellence.',
  expertise: [
    'Hair Disorder',
    'Acne',
    'Cosmetology'
  ],
  procedures: [],
  education: [
    {
      degree: 'DVDL (Dermatology, Venereology, Leprosy)',
      institution: 'RIMS, Ranchi',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: '',
      year: ''
    }
  ],
  memberships: [
    'Life Membership IADV (LM/J/7586)'
  ],
  awards: [
    { title: 'First Prize in Award Paper Presentation, Asia Aesthetica', year: '2019' },
    { title: 'Award Paper Presentation, International Dermacon, New Delhi', year: '2013' }
  ],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  },
  pastRoles: [
    'Advisory Dermatologist at Dr. Pauls Multispeciality Clinic (Dec 2015 - May 2019)'
  ]
},

//ent
{
  id: 'abhishek-ramadhin',
  name: 'Dr. Abhishek KR Ramadhin',
  qualifications: 'MBBS, MD (ENT), MS (ENT), FARS',
  specialty: 'ENT',
  experience: '14+ Years',
  image: 'assets/specialties/ENT/ENT-dr.side.png',
  specialtyIcon: medicalIcons.ent,
  description:
    'Dr. Abhishek KR Ramadhin is a leading ENT specialist at Raj Hospital, Ranchi, with over 14 years of experience. He specializes in Rhinology, Advanced Skull Base Treatment, Allergy Rhinitis, and Sleep Apnea. Dr. Ramadhin is known for his accurate diagnosis, empathetic patient care, and expertise in complex ENT surgeries.',
  expertise: [
    'Rhinology',
    'Advanced Skull Base Treatment',
    'Allergy Rhinitis',
    'Sleep Apnea'
  ],
  procedures: [
    'Functional Endoscopic Sinus Surgery (FESS)',
    'Reconstructive Middle Ear Surgery',
    'Skull Base Surgery'
  ],
  education: [
    {
      degree: 'MBBS',
      institution: 'G.S. Medical College',
      year: ''
    },
    {
      degree: 'MS (ENT)',
      institution: 'Jawaharlal Nehru Medical College',
      year: ''
    },
    {
      degree: 'MD (ENT)',
      institution: 'American Rhinologic Society, USA',
      year: ''
    },
    {
      degree: 'Fellowship of the American Rhinologic Society (FARS)',
      institution: '',
      year: ''
    }
  ],
  memberships: [
    'American Rhinologic Society',
    'Fellowship of the American Rhinologic Society (FARS)'
  ],
  awards: [
    { title: 'Award in ENT Surgery', year: '' }
  ],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: 'Raj Hospital, Ranchi',
    address: 'Behind Central, Opposite Roshpa Tower, Ratu Road, Ranchi'
  }
},

//chatgpt content about ent doctor
{
  id: 'tg-n-sinha',
  name: 'Dr. T G N Sinha',
  qualifications: 'MBBS, MS, FICS',
  specialty: 'ENT',
  experience: '40+ Years',
  image: '',
  specialtyIcon: medicalIcons.ent,
  description:
    'Dr. T G N Sinha is a distinguished ENT specialist at Raj Hospital, Ranchi, with over 40 years of experience. He is renowned for providing expert care in diagnosing and treating a wide range of ear, nose, and throat disorders with advanced technology and personalized patient care.',
  expertise: [
    'Ear, Nose, and Throat Disorders',
    'Phonosurgery',
    'Laryngology',
    'Voice Disorders',
    'ENT Emergencies',
    'Audiology',
    'Speech Therapy'
  ],
  procedures: [],
  education: [
    {
      degree: 'MBBS',
      institution: '',
      year: ''
    },
    {
      degree: 'MS',
      institution: '',
      year: ''
    },
    {
      degree: 'Fellow of the International College of Surgeons (FICS)',
      institution: '',
      year: ''
    }
  ],
  memberships: [
    'International College of Surgeons (FICS)'
  ],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: 'Raj Hospital, Ranchi',
    address: 'Behind Central, Opposite Roshpa Tower, Ratu Road, Ranchi'
  }
},

{
  id: 'ranajan-jha',
  name: 'Dr. Ranajan Kumar Jha',
  qualifications: 'MBBS, MS, FESS',
  specialty: 'ENT',
  experience: '15+ Years',
  image: '',
  specialtyIcon: medicalIcons.ent,
  description:
    'Dr. Ranajan Kumar Jha is an experienced ENT specialist at Raj Hospital, Ranchi, with expertise in functional endoscopic sinus surgery (FESS) and comprehensive treatment of ear, nose, and throat conditions. He is recognized for his patient-centric approach and advanced surgical skills.',
  expertise: [
    'Functional Endoscopic Sinus Surgery (FESS)',
    'Management of Nasal and Sinus Disorders',
    'Ear, Nose, and Throat Care',
    'Skull Base and Endoscopic Surgeries'
  ],
  procedures: [
  {
    name: 'FESS',
    description: 'Minimally invasive surgery using an endoscope to clear blockages and improve sinus drainage and function.'
  },
  {
    name: 'Microsurgery',
    description: 'Surgical procedures performed under magnification to operate on tiny anatomical structures with precision.'
  },
  {
    name: 'Endoscopic Surgeries',
    description: 'Surgeries performed with the aid of an endoscope, allowing minimally invasive access to internal organs and cavities.'
  }
],

  education: [
    {
      degree: 'MS (ENT)',
      institution: '',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: '',
      year: ''
    },
    {
      degree: 'Fellowship in Functional Endoscopic Sinus Surgery (FESS)',
      institution: '',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: 'Raj Hospital, Ranchi',
    address: 'Behind Central, Opposite Roshpa Tower, Ratu Road, Ranchi'
  }
},

//eyecare
//no doctors avl 

//nutrition & dietetics


//pediatrics 
{
  id: 'sainik-dutta',
  name: 'Dr. Sainik Dutta',
  qualifications: 'MBBS, MD Pediatrics',
  specialty: 'Pediatrics and Neonatology',
  experience: '10+ Years',
  image: '',
  specialtyIcon: medicalIcons.pediatrics,
  description:
    'Dr. Sainik Dutta is a senior consultant in Pediatrics and Neonatology with expertise in respiratory distress requiring ventilatory support, neonatal jaundice, neonatal sepsis, convulsions, and common pediatric ailments such as pneumonia and allergic disorders.',
  expertise: [
    'Respiratory distress requiring ventilatory support and surfactant therapy',
    'Neonatal jaundice requiring DVET',
    'Neonatal sepsis',
    'Neonatal convulsion',
    'Pneumonia',
    'Pediatric asthma and allergic disorders',
    'Gastrointestinal diseases',
    'Convulsions'
  ],
  procedures: [],
  education: [
    {
      degree: 'MD Pediatrics',
      institution: 'PGIMS, Rohtak',
      year: ''
    },
    {
      degree: 'MBBS',
      institution: 'N.R.S Medical College, Kolkata',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: '',
    address: ''
  }
},

//physiotherapy & rehabilitation
{
  id: 'abhay-pandey',
  name: 'Dr. Abhay Kr Pandey',
  qualifications: 'BPT, MPT, PGDYT, COMT, MIAP',
  specialty: 'Physiotherapy',
  experience: '25+ Years',
  image: 'assets/specialties/Physiotherapy & Rehabilitation/Physiotherapy-side.png',
  specialtyIcon: medicalIcons.physiotherapy,
  description:
    'Dr. Abhay Kr Pandey is a senior physiotherapist at Raj Hospital, Ranchi, with over 25 years of experience specializing in orthopedic and traumatology physiotherapy, yoga therapy, and manual therapy. His interests include cardiology, heart problems, and chest-related issues.',
  expertise: [
    'Orthopedic & Traumatology Physiotherapy',
    'Yoga Therapy',
    'Manual Therapy',
    'Cardiology',
    'Chest Related Issues'
  ],
  procedures: [
    {
      name: 'Short Wave Diathermy (SWD)',
      description: 'Use of high-frequency electromagnetic waves for deep tissue heating to relieve pain and promote healing.'
    },
    {
      name: 'TENS Therapy',
      description: 'Transcutaneous electrical nerve stimulation for pain relief by stimulating nerves through the skin.'
    },
    {
      name: 'IFT Therapy',
      description: 'Interferential therapy using electrical currents to reduce pain and inflammation.'
    },
    {
      name: 'Pelvic & Cervical Traction',
      description: 'Mechanical pulling of the spine or pelvis to relieve pressure on spinal nerves and relieve pain.'
    },
    {
      name: 'CPM Machine',
      description: 'Continuous passive motion therapy to improve joint mobility post-surgery or injury.'
    },
    {
      name: 'Laser Therapy',
      description: 'Use of focused light to reduce inflammation, pain, and accelerate tissue repair.'
    },
    {
      name: 'Ultrasonic Therapy',
      description: 'Ultrasound waves used to promote tissue healing and reduce pain.'
    },
    {
      name: 'Hot Pack Therapy',
      description: 'Application of heat to relax muscles and improve blood flow.'
    },
    {
      name: 'Wax Therapy',
      description: 'Use of warm paraffin wax to relieve stiffness and pain in joints.'
    },
    {
      name: 'Infra-Red Lamp Therapy',
      description: 'Heat therapy using infrared lamps to increase circulation and reduce muscle pain.'
    },
    {
      name: 'Electrical Stimulation',
      description: 'Application of electrical currents to muscles to improve strength and reduce pain.'
    },
    {
      name: 'Microwave Diathermy',
      description: 'Deep heating therapy using microwave energy to relieve pain and promote healing.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Physiotherapy (BPT)',
      institution: 'Meenakshi Medical College, Chennai',
      year: ''
    },
    {
      degree: 'Master Of Physiotherapy (MPT) - Yoga Therapy',
      institution: 'Saveetha Medical College, Chennai',
      year: ''
    },
    {
      degree: 'Post Graduate Diploma In Yoga (COMT)',
      institution: 'Annamalai University, Chidambaram',
      year: ''
    },
    {
      degree: 'Certificate Of Manual Therapy (COMT)',
      institution: '',
      year: ''
    }
  ],
  memberships: [],
  awards: [],
  publications: [],
  contact: {
    email: '',
    phone: '+919263630500',
    clinic: 'Raj Hospital, Main Road, Ranchi',
    address: 'Opposite Roshpa Tower, Mahatma Gandhi Main Rd, Ranchi, Jharkhand'
  }
},

//psychiatry & mental health

// no doctors avl



























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
    <div className="md:flex md:items-start md:gap-12">
      {/* Left Column: All doctor info */}
      <div className="md:flex-1 space-y-8">
        {/* Hero top: Image + Info */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
          >
            <img
              src={
                doctor.image?.trim()
                  ? doctor.image
                  : "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
              alt={doctor.name}
              className="w-full h-full object-cover object-center"
            />
            {doctor.specialtyIcon && (
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full p-2 shadow-lg border-2 border-primary-100">
                <img
                  src={doctor.specialtyIcon}
                  alt={doctor.specialty}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left flex-1 mt-6 md:mt-0"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {doctor.name}
            </h1>
            {doctor.qualifications && (
              <p className="text-xl text-primary-600 font-medium mb-2">
                {doctor.qualifications}
              </p>
            )}
            {doctor.specialty && (
              <p className="text-lg text-secondary-600 font-medium mb-4">
                {doctor.specialty}
              </p>
            )}

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-gray-700">
              {doctor.experience && (
                <span className="flex items-center">
                  <SafeIcon icon={FiUser} className="w-5 h-5 mr-2" />
                  {doctor.experience} Experience
                </span>
              )}
              {doctor.contact?.address && (
                <span className="flex items-center">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                  {doctor.contact.address}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowAppointmentForm(true)}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              {doctor.contact?.phone && (
                <a
                  href={`tel:${doctor.contact.phone}`}
                  className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Contact Now</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        {doctor.description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About {doctor.name}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {doctor.description}
            </p>
          </motion.div>
        )}

        {/* Expertise */}
        {doctor.expertise?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {doctor.expertise.map((skill, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Procedures */}
        {doctor.procedures?.length > 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Procedures Performed
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {doctor.procedures.map((p, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {p.name}
                  </h4>
                  {p.count && (
                    <span className="text-sm text-primary-600 font-semibold">
                      {p.count}
                    </span>
                  )}
                  {p.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education & Memberships */}
        {(doctor.education?.length > 0 || doctor.memberships?.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            {doctor.education?.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Education & Training
                </h2>
                <div className="space-y-6">
                  {doctor.education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      {edu.institution && (
                        <p className="text-gray-600">{edu.institution}</p>
                      )}
                      {edu.year && (
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {doctor.memberships?.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Professional Memberships
                </h3>
                <ul className="space-y-3">
                  {doctor.memberships.map((m, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <SafeIcon
                        icon={FiCheck}
                        className="w-5 h-5 text-primary-500"
                      />
                      <span className="text-gray-700">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Awards */}
        {doctor.awards?.length > 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {doctor.awards.map((a, i) => (
                <div key={i} className="flex">
                  <SafeIcon
                    icon={FiAward}
                    className="w-5 h-5 text-secondary-500 mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{a.title}</h4>
                    {(a.organization || a.year) && (
                      <p className="text-gray-600">
                        {a.organization}
                        {a.year && `, ${a.year}`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Publications */}
        {doctor.publications?.length > 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Publications
            </h3>
            <div className="space-y-4">
              {doctor.publications.map((pub, i) => (
                <div
                  key={i}
                  className="pb-4 border-b border-gray-100 last:border-0"
                >
                  <h4 className="font-medium text-gray-900">{pub.title}</h4>
                  {(pub.journal || pub.year) && (
                    <p className="text-gray-600">
                      {pub.journal}
                      {pub.year && `, ${pub.year}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Sticky Form */}
      <div className="w-full md:w-96 md:sticky md:top-32 self-start rounded-2xl shadow-md bg-white p-6 border border-gray-100 mt-12 md:mt-0">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>

          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Enter mobile number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <textarea
            rows={3}
            placeholder="Type your query"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-primary-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Appointment form toggle */}
        {showAppointmentForm && (
          <div className="mt-6 bg-primary-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold">
                Book Appointment with {doctor.name}
              </h4>
              <button
                onClick={() => setShowAppointmentForm(false)}
                className="text-sm text-gray-600"
              >
                Close
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowAppointmentForm(false);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="tel"
                placeholder="Mobile"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="date"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-primary-500 text-white px-3 py-2 rounded"
              >
                Confirm
              </button>
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
