import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiHeart,
  FiBrain,
  FiDroplet,
  FiShield,
  FiUser,
  FiSettings,
  FiZap,
  FiMic,
  FiActivity,
  FiAlertCircle,
  FiSmile,
  FiSun,
  FiPlus,
  FiMinus,
  FiCalendar,
  FiArrowRight,
  FiCheck,
  FiInfo,
  FiAward,
  FiUsers,
  FiPhone,
  FiMessageSquare,
  FiChevronLeft,
  FiChevronRight
} = FiIcons;

const SpecialtyDetail = () => {
  const { specialtyId } = useParams();
  const [openIndex, setOpenIndex] = useState(null);
  // Specialty data based on ID
  // In a real application, this would be fetched from an API based on the specialtyId
  const specialtyData = {
    cardiology: {
      id: 'cardiology',
      title: 'Cardiology',
      icon: FiHeart,
      bannerImage: 'assets/specialties/Cardiology/Banner-2-cardio.png',
      shortDescription: 'Expert care for heart diseases with state-of-the-art technology and experienced cardiologists',
      longDescription: 'Our Cardiology Department at Raj Hospitals is equipped with cutting-edge technology and staffed by experienced cardiologists who specialize in diagnosing and treating a wide range of heart conditions. From preventive care to complex interventions, we provide comprehensive cardiac care to improve heart health and quality of life for our patients.',
      services: [
      {
        title: 'Daycare Angiography',
        description: 'Safe and efficient angiography performed as a daycare procedure for accurate diagnosis of heart conditions.',
        image: '/assets/specialties/Cardiology/Daycare-Angiography.png'
      },
      {
        title: 'Angioplasty',
        description: 'Minimally invasive procedure to restore blood flow in narrowed or blocked coronary arteries using stents.',
        image: '/assets/specialties/Cardiology/Angioplasty.png'
      },
      {
        title: 'IVUS, Colling & RFA',
        description: 'Advanced imaging and therapeutic techniques including Intravascular Ultrasound (IVUS), Colling, and Radiofrequency Ablation (RFA).',
        image: '/assets/specialties/Cardiology/IVUS -Colling & RFA.png'
      },
      {
        title: 'Leadless Pacemaker',
        description: 'Latest generation pacemaker technology without leads, offering safer and less invasive rhythm management.',
        image: '/assets/specialties/Cardiology/Leadless-Pacemaker.png'
      },
      {
        title: 'Heart Attack (MI) Care',
        description: '24x7 emergency care for patients with myocardial infarction (heart attack) to minimize damage and save lives.',
        image: '/assets/specialties/Cardiology/Heart-Attack (MI) Care.png'
      },
      {
        title: 'Heart Failure Management',
        description: 'Comprehensive long-term management of heart failure patients with medication, lifestyle care, and device therapy.',
        image: '/assets/specialties/Cardiology/Heart-Failure.png'
      }],


      facilities: [
      'State-of-the-art Cardiac Catheterization Lab',
      'Advanced Cardiac ICU',
      'Digital ECG',
      'Echocardiography (ECHO)',
      'Treadmill Test (TMT) Facility',
      'Stress Echocardiography',
      'Holter Monitoring',
      'Comprehensive Cardiac Diagnostic Services',
      'Cardiac Rehabilitation Center'],


      specialists: [
      {
        id: '1',
        name: 'Dr. Rajesh Kr. Jha',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience: '16+ Years',
        image: '/assets/specialties/Cardiology/cardio-1.JPG',
        specialization: 'Interventional Cardiology'
      },
      {
        id: '51',
        name: 'Dr. Awnindra Kr. Jha',
        qualification: 'MBBS, MD, DM (Cardiology)',
        experience: '16+ Years',
        image: '/assets/specialties/Cardiology/cardio-2.JPG',
        specialization: 'Interventional Cardiology'
      }],









      successStories: [
      { title: 'Life-Saving Emergency Angioplasty',
        patient: 'Ramesh Kumar, 58',
        story: 'Ramesh was rushed to our emergency with severe chest pain and was diagnosed with a major heart attack. Our cardiac team performed an emergency angioplasty within the golden hour, saving his heart muscle and giving him a new lease of life. He has now returned to his normal activities with proper medication and lifestyle changes.', outcome: 'Complete recovery with 95% heart function' },
      { title: 'Complex Bypass Surgery Success',
        patient: 'Sunita Devi, 62',
        story: 'Sunita had severe blockages in multiple coronary arteries that weren\'t suitable for stenting. Our cardiac surgeons performed a complex bypass surgery, creating new routes for blood flow to her heart. Despite being a high-risk case due to her diabetes and hypertension, the surgery was successful.',
        outcome: 'Resumed normal life within 3 months' }],






      faqs: [
      { question: 'What are the warning signs of a heart attack?',
        answer: 'Warning signs include chest pain or discomfort, shortness of breath, pain or discomfort in the arms, back, neck, jaw, or stomach, cold sweat, nausea, lightheadedness. Women may experience different symptoms like unusual fatigue, sleep disturbances, and shortness of breath. If you experience these symptoms, seek medical attention immediately.' },

      { question: 'How often should I get a cardiac check-up?',
        answer: 'For adults over 40, an annual cardiac check-up is recommended. Those with risk factors like high blood pressure, diabetes, high cholesterol, family history of heart disease, or smoking should consider more frequent check-ups as advised by their doctor. Basic cardiac screening includes blood pressure measurement, cholesterol testing, and ECG.' },

      { question: 'What lifestyle changes can improve heart health?', answer: 'Key lifestyle changes include regular physical activity (at least 150 minutes of moderate exercise per week), maintaining a heart-healthy diet (low in saturated fats, trans fats, and sodium), maintaining healthy weight, quitting smoking, limiting alcohol consumption, managing stress, and getting adequate sleep.' },

      { question: 'What is the recovery time after angioplasty?',
        answer: 'Most patients can return to light activities within a week after angioplasty. Full recovery typically takes about 2-4 weeks. However, recovery time varies based on individual health conditions and the complexity of the procedure. Follow-up appointments are essential to monitor progress and adjust medications if necessary.'
      }]

    },

    neurology: {
      id: 'neurology',
      title: 'Neurosciences & Neurosurgery',
      icon: FiBrain,
      bannerImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      shortDescription: 'Advanced care for neurological disorders with cutting-edge technology and specialized neurologists',
      longDescription: 'Our Department of Neurosciences & Neurosurgery at Raj Hospitals offers comprehensive care for disorders of the brain, spine, and nervous system. Our team of highly skilled neurologists and neurosurgeons uses advanced technology to diagnose and treat a wide range of neurological conditions, from common disorders to complex neurosurgical cases.',
      services: [
      {
        title: 'Neurological Diagnostics',
        description: 'Advanced neurological assessments including EEG, EMG, NCS, and neuroimaging studies.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Neurosurgery',
        description: 'Surgical treatment of brain and spine conditions including tumors, trauma, and congenital disorders.',
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Stroke Management',
        description: 'Comprehensive stroke care including acute treatment, rehabilitation, and prevention strategies.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Movement Disorders',
        description: 'Diagnosis and treatment of conditions like Parkinson\'s disease, tremors, and dystonia.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Epilepsy Management',
        description: 'Specialized care for seizure disorders including medical management and surgical options.',
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        title: 'Neurorehabilitation',
        description: 'Comprehensive rehabilitation programs for recovery from neurological injuries and disorders.',
        image: 'https://images.unsplash.com/photo-1583241800518-8aec2693fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBpbWFnZSUyMG9mJTIwYSUyMG1lZGljYWwlMjBwcm9mZXNzaW9uYWwlMjdzJTIwaGFuZHMlMjBob2xkaW5nJTIwYSUyMHN0ZXRob3Njb3BlJTJDJTIwc3ltYm9saXppbmclMjBoZWFsdGhjYXJlJTIwYW5kJTIwbWVkaWNhbCUyMHNlcnZpY2VzLnxlbnwwfHx8fDE3NTUwODcwMzR8MA&ixlib=rb-4.1.0&q=80&w=200$w=400'
      }],

      facilities: [
      'Advanced Neurodiagnostic Lab',
      'State-of-the-art Neurosurgical Operation Theaters',
      'Neuro-Intensive Care Unit',
      'EEG, EMG, and NCS Facilities',
      'Neuroimaging Services',
      'Neurorehabilitation Center'],

      specialists: [
      {
        id: '7',
        name: 'Dr. Suresh Kumar Jha',
        qualification: 'MBBS, MS, MCh (Neurosurgery)',
        experience: '14+ Years',
        image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFN1cmVzaCUyMEt1bWFyJTIwSmhhJTJDJTIwYSUyMHNwZWNpYWxpc3QlMjBpbiUyMG5ldXJvc3VyZ2VyeS58ZW58MHx8fHwxNzU1MDg3MDU5fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
        specialization: 'Neurosurgery'
      },
      {
        id: '11',
        name: 'Dr. Priya Sharma',
        qualification: 'MBBS, MD (Neurology), DM (Neurology)',
        experience: '12+ Years',
        image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFByaXlhJTIwS3VtYXJpJTJDJTIwYSUyMHNwZWNpYWxpc3QlMjBpbiUyME5ldXJvbG9neSUyQyUyMGZlYXR1cmVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwMzh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
        specialization: 'Neurology'
      },
      {
        id: '15',
        name: 'Dr. Vikash Kumar',
        qualification: 'MBBS, MD, DM (Neurology)',
        experience: '10+ Years',
        image: 'https://images.unsplash.com/photo-1509242547758-3ce17361523b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFZpa2FzaCUyMEt1bWFyJTJDJTIwYSUyMHNwZWNpYWxpc3QlMjBpbiUyME5ldXJvbG9neSUyQyUyMGZlYXR1cmVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwNTJ8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
        specialization: 'Stroke Specialist'
      }],

      successStories: [
      {
        title: 'Brain Tumor Removal with Precision',
        patient: 'Anand Singh, 45',
        story: 'Anand was diagnosed with a complex brain tumor located in a critical area. Our neurosurgical team used advanced neuronavigation and microsurgical techniques to remove the tumor completely while preserving all neurological functions. The precision of the surgery allowed Anand to recover quickly with minimal rehabilitation needs.',
        outcome: 'Complete tumor removal with full neurological recovery'
      },
      {
        title: 'Remarkable Stroke Recovery',
        patient: 'Meera Devi, 68',
        story: 'Meera was brought to our emergency within 3 hours of stroke symptoms. Our stroke team administered thrombolytic therapy and performed necessary interventions promptly. Following the acute treatment, she underwent intensive neurorehabilitation at our center, which helped her regain most of her lost functions.',
        outcome: 'Regained 90% functionality within 6 months'
      }],

      faqs: [
      {
        question: 'What are the warning signs of a stroke?',
        answer: 'Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulties, Time to call emergency services. Other symptoms include sudden numbness, confusion, trouble seeing, difficulty walking, and severe headache. Immediate medical attention is crucial as "time is brain" - every minute counts in stroke treatment.'
      },
      {
        question: 'When should someone with recurring headaches see a neurologist?',
        answer: 'You should consult a neurologist if you experience severe headaches that interfere with daily activities, headaches that wake you from sleep, headaches accompanied by neurological symptoms (vision changes, weakness, numbness), headaches that worsen with physical activity, or if there\'s a significant change in your headache pattern.'
      },
      {
        question: 'What is epilepsy and how is it treated?',
        answer: 'Epilepsy is a neurological disorder characterized by recurrent seizures due to abnormal electrical activity in the brain. Treatment typically begins with anti-seizure medications. If medications aren\'t effective, other options include surgery, vagus nerve stimulation, responsive neurostimulation, or dietary therapy (ketogenic diet). Regular follow-ups are essential for medication adjustments and monitoring.'
      },
      {
        question: 'What is the recovery process after brain surgery?',
        answer: 'Recovery after brain surgery varies depending on the procedure\'s complexity and the patient\'s condition. Initial hospital stay is typically 3-10 days. Physical, occupational, and speech therapy may be needed. Most patients can return to light activities within 4-8 weeks. Complete recovery may take several months, with follow-up appointments to monitor progress.'
      }]

    },

   //gastro
    gastroenterology: {
    id: 'gastroenterology',
    title: 'Gastroenterology & Endoscopy',
    icon: FiDroplet,
    bannerImage: 'assets/specialties/Gastroenterology/Banner-gastro.png',
    shortDescription: 'Best gastroenterology care in Ranchi with advanced diagnostics, minimally invasive surgeries and expert gastroenterologists.',
    longDescription: 'The Department of Gastroenterology & Endoscopy at Raj Hospitals provides top medical services for digestive system disorders including gastroenterology, hepatology, and gastrointestinal surgery. Our minimally invasive procedures like laparoscopy and endoscopy offer faster recovery, fewer complications and less post-operative follow-up. We are among few centers offering scarless minimal access surgery and advanced laparoscopic, biliary, pancreatic, and colorectal oncologic procedures.',

      services: [
        { title: 'Therapeutic and Diagnostic Upper GI Endoscopy', description: 'Advanced diagnostic and therapeutic procedures for the upper gastrointestinal tract.', image: '/assets/specialties/Gastroenterology/upper-gi-endoscopy.png' },
        { title: 'Lower GI Endoscopy (Colonoscopy)', description: 'Examination and treatment of the lower gastrointestinal tract using colonoscopy techniques.', image: '/assets/specialties/Gastroenterology/lower-gi-endoscopy.png' },
        { title: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)', description: 'Diagnostic and therapeutic procedure to treat biliary and pancreatic duct disorders.', image: '/assets/specialties/Gastroenterology/ercp.png' },
        { title: 'Endoscopic Ultrasound (EUS)', description: 'Advanced imaging technique combining endoscopy and ultrasound to diagnose pancreatic and GI disorders.', image: '/assets/specialties/Gastroenterology/eus.png' },
        { title: 'Inflammatory Bowel Disease (IBD) Clinic', description: 'Specialized care for Crohn\'s disease, ulcerative colitis, and other inflammatory bowel diseases.', image: '/assets/specialties/Gastroenterology/ibd-clinic.png' },
        { title: 'Hepatology Clinic', description: 'Expert management of liver diseases including hepatitis and fatty liver disease.', image: '/assets/specialties/Gastroenterology/hepatology.png' },
        { title: 'Pancreatic Disorder Management', description: 'Comprehensive diagnosis and treatment of pancreatic disorders including pancreatitis.', image: '/assets/specialties/Gastroenterology/pancreatic-disorder.png' },
        { title: 'Esophageal Disorders', description: 'Diagnosis and treatment of esophageal diseases such as reflux and motility disorders.', image: '/assets/specialties/Gastroenterology/esophageal-disorders.png' },
        { title: 'Enteral Stenting', description: 'Minimally invasive stenting procedures for obstructive gastrointestinal conditions.', image: '/assets/specialties/Gastroenterology/enteral-stenting.png' },
        { title: 'Endoscopy & Colonoscopy', description: 'Comprehensive endoscopic examinations of the digestive tract for diagnosis and treatment.', image: '/assets/specialties/Gastroenterology/endoscopy-colonoscopy.png' },
        { title: 'ERCP, EUS, Hepatitis Care', description: 'Diagnostic and therapeutic services including ERCP, EUS, and hepatitis management.', image: '/assets/specialties/Gastroenterology/ercp-eus-hepatitis.png' },
        { title: 'Pancreatitis, Reflux, Peptic Ulcer Treatment', description: 'Expert medical and procedural management of pancreatitis, acid reflux, and peptic ulcers.', image: '/assets/specialties/Gastroenterology/pancreatitis-reflux-peptic.png' },
        { title: 'Abdominal Pain & Fatty Liver Treatment', description: 'Diagnosis and treatment of chronic abdominal pain and fatty liver disease.', image: '/assets/specialties/Gastroenterology/abdominal-pain-fatty-liver.png' },
        { title: 'Bile Duct Surgery & GI Stenting', description: 'Surgical treatments and stenting for bile duct and gastrointestinal tract disorders.', image: '/assets/specialties/Gastroenterology/bile-duct-surgery.png' }
      ],

      facilities: [
        'Minimally Invasive Laparoscopic and Endoscopic Surgery',
        'Advanced Diagnostic Endoscopy Suite',
        'Biliary and Pancreatic Endoscopy',
        'Gastrointestinal Oncology Surgery',
        'State-of-the-art Imaging and Laboratory Facilities',
        'Pre and Post-operative Care Units',
        'Multidisciplinary Gastroenterology Clinics'
      ],

      specialists: [
        {
          id: '201',
          name: 'Dr. Ravish Ranjan',
          qualification: 'MBBS, MD, DNB (Gastroenterology)',
          experience: '15+ Years',
          image: '/assets/specialties/Gastroenterology/dr-ravish-ranjan.jpg',
          specialization: 'Gastroenterology & Endoscopy'
        }
      ],

      successStories: [
        {
          title: 'Successful Gallbladder Surgery Using Laparoscopy',
          patient: 'Mr. Kumar, 48',
          story: 'Our expert surgeons performed a minimally invasive cholecystectomy on Mr. Kumar, who recovered quickly with minimal pain and was discharged within days.',
          outcome: 'Full recovery with no complications'
        },
        {
          title: 'Effective Management of Inflammatory Bowel Disease',
          patient: 'Ms. Radhika, 34',
          story: 'Ms. Radhika was diagnosed with ulcerative colitis and achieved remission through personalized therapy including medications and lifestyle changes.',
          outcome: 'Sustained remission for over 2 years'
        }
      ],

      faqs: [
        {
          question: 'What symptoms indicate I should see a gastroenterologist?',
          answer: 'Common symptoms include persistent abdominal pain, changes in bowel habits, unexplained weight loss, blood in stool, and difficulty swallowing.'
        },
        {
          question: 'How are gastroenterology procedures like endoscopy performed?',
          answer: 'They are minimally invasive techniques performed under sedation using a flexible camera to diagnose or treat digestive system conditions.'
        },
        {
          question: 'Is laparoscopic surgery safe?',
          answer: 'Yes, it is a safe and effective surgery with smaller incisions, faster recovery, fewer complications, and shorter hospital stays compared to open surgery.'
        },
        {
          question: 'What lifestyle changes can improve digestive health?',
          answer: 'Eating a balanced diet, avoiding smoking and alcohol, exercising regularly, and managing stress can improve digestive function.'
        },
        {
          question: 'How do I prepare for a colonoscopy?',
          answer: 'Your doctor will give you specific bowel preparation instructions to ensure your colon is clear for an effective examination.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 66634',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    // Critical care & emergency
    criticalEmergency: {
    id: 'criticalEmergency',
    title: 'Critical Care & Emergency',
    icon: FiActivity, 
    bannerImage: 'assets/specialties/CriticalCare/banner-critical-emergency.png',
    shortDescription: 'Comprehensive 24/7 Emergency & Critical Care, trauma, surgical, neuro & cardiac ICU services under one roof.',
    longDescription: 'At Raj Hospitals, the Critical Care & Emergency Department provides seamless, multidisciplinary care for all acute, life-threatening illnesses and injuries. With a state-of-the-art ICU, trauma center, advanced ICUs on Wheels (ambulances), and a dedicated team of consultants in emergency, critical care, cardiology, neurology, surgery, nephrology, and more, we ensure rapid response and advanced management for every medical and trauma emergency.',
    services: [
      { title: '24 × 7 Emergency & Critical Care Consultant', description: 'Continuously available consultants to handle every acute medical, trauma or accident emergency.', image: '/assets/specialties/CriticalCare/consultant.png' },
      { title: 'Cardiac & Neuro ICU', description: 'Expert cardiac and neurological intensive care with dedicated beds and advanced monitoring systems.', image: '/assets/specialties/CriticalCare/cardio-neuro-icu.png' },
      { title: 'Medical & Surgical ICU', description: 'Round the clock ICU support for all complex medical and surgical cases.', image: '/assets/specialties/CriticalCare/medical-icu.png' },
      { title: 'Emergency, Trauma & Acute Care', description: 'Immediate management for accidents, trauma, acute illnesses and multi-organ failures.', image: '/assets/specialties/CriticalCare/emergency-trauma.png' },
      { title: 'ICU On Wheels (Advanced Life-Support Ambulances)', description: 'Ambulances equipped as mobile ICUs start critical care during transit.', image: '/assets/specialties/CriticalCare/ambulance.png' },
      { title: 'Dedicated Emergency Unit (10 Beds)', description: 'Multiple well-equipped emergency beds for simultaneous management of cases.', image: '/assets/specialties/CriticalCare/emergency-beds.png' },
      { title: 'Neuro Critical Care', description: 'Comprehensive care for stroke, head injuries, and neurological emergencies.', image: '/assets/specialties/CriticalCare/neuro-care.png' },
      { title: 'Multidisciplinary ICU Team', description: 'Specialists include emergency physicians, surgeons, cardiologists, orthopaedists, nephrologists, urologists, and more.', image: '/assets/specialties/CriticalCare/multidisciplinary-team.png' },
      { title: 'Haemodialysis', description: 'Renal support and dialysis services for patients with kidney injury.', image: '/assets/specialties/CriticalCare/dialysis.png' },
      { title: 'Advanced Ventilatory Support (Mechanical Ventilation)', description: 'Non-invasive and invasive ventilation for respiratory emergencies.', image: '/assets/specialties/CriticalCare/ventilator.png' },
      { title: 'Temporary Pacemaker & Cardiac Emergency', description: 'Emergency cardiac pacing and acute cardiac intervention for life-threatening arrhythmias.', image: '/assets/specialties/CriticalCare/cardiac-pacing.png' },
      { title: 'ECMO (Extra Corporeal Membrane Oxygenation)', description: 'Advanced life support for severe cardiac and respiratory conditions.', image: '/assets/specialties/CriticalCare/ecmo.png' },
      { title: 'Difficult Airway Management', description: 'Expert handling of challenging airway scenarios for safe ventilation.', image: '/assets/specialties/CriticalCare/airway-management.png' },
      { title: 'Positive & Negative Pressure Isolation Rooms', description: 'Infection control zones to manage high-risk infectious cases.', image: '/assets/specialties/CriticalCare/isolation-room.png' },
      { title: 'Pre & Post-Procedure Monitoring', description: 'Continuous observation for patients before and after emergency interventions.', image: '/assets/specialties/CriticalCare/monitoring.png' },
      { title: 'Ultrasound in ICU (POCUS)', description: 'Bedside ultrasound diagnostics for rapid assessment.', image: '/assets/specialties/CriticalCare/ultrasound.png' },
      { title: 'Special Minor Procedure Room', description: 'Dedicated for immediate surgical and therapeutic procedures.', image: '/assets/specialties/CriticalCare/procedure-room.png' },
      { title: 'Research in Critical Care', description: 'Ongoing innovation and research for improving critical outcomes.', image: '/assets/specialties/CriticalCare/research.png' }
    ],
    facilities: [
      'State-of-the-art ICU & Emergency infrastructure',
      'Advanced monitors and ventilators',
      'Central oxygen/vacuum lines, minor procedure room',
      'Pre- and post-treatment patient areas',
      'Dedicated isolation rooms with advanced filtration',
      'ICU-equipped ambulances (ICUs on Wheels)',
      'On-site multidisciplinary medical team 24/7'
    ],
    specialists: [
      { id: '301', name: 'Dr. Shyam Prasad', qualification: 'MBBS, MD MEM', experience: '14+ Years', image: '/assets/specialties/Emergency/dr-shyam-prasad.jpg', specialization: 'Emergency Medicine' },
      { id: '302', name: 'Dr. Mohib Ahmed', qualification: 'MBBS, MD, IDCCM, EDM', experience: '12+ Years', image: '/assets/specialties/CriticalCare/dr-mohib-ahmed.jpg', specialization: 'Critical Care & ICU' },
      { id: '303', name: 'Dr. Fuzail Sarwer', qualification: 'MBBS, MD, PDCC', experience: '10+ Years', image: '/assets/specialties/CriticalCare/dr-fuzail-sarwer.jpg', specialization: 'Critical Care & ICU' },
      { id: '304', name: 'Dr. Rahul Roy', qualification: 'MBBS, DA, IDCCM', experience: '8+ Years', image: '/assets/specialties/CriticalCare/dr-rahul-roy.jpg', specialization: 'Critical Care & Anesthesia' }
    ],
    successStories: [
      { title: 'Stroke Survival & ICU Recovery', patient: 'Mr. Gupta, 62', story: 'Received rapid neurocritical care after a major stroke, including mechanical ventilation and advanced monitoring. Recovered mobility and speech with ICU and post-care rehabilitation.', outcome: 'Regained independence after 3 months.' },
      { title: 'Cardiac Emergency Saved', patient: 'Mr. Rajesh, 59', story: 'Rushed in with a heart attack, treatment began in ambulance and continued in ICU. Fully recovered after prompt intervention and ICU support.', outcome: 'Discharged in stable condition.' }
    ],
    faqs: [
      { question: 'What types of emergencies are managed?', answer: 'All acute medical, trauma, cardiac, neurological, respiratory and multi-organ system emergencies are managed 24/7.' },
      { question: 'How are ambulance services equipped?', answer: 'Ambulances at Raj Hospitals function as ICUs on Wheels with full life support systems and rapid response.' },
      { question: 'Is the ICU and Emergency Unit available 24/7?', answer: 'Yes, all critical and emergency services have round-the-clock consultants and staff.' },
      { question: 'How is infection controlled in critical areas?', answer: 'Strict protocols, filtered isolation rooms and monitored zones ensure safety.' }
    ],
    contactInfo: {
      helpline: '+91 97714 88888',
      appointmentLink: 'https://rajhospitals.com/contact.php',
      address: 'Raj Hospitals, Ranchi, Jharkhand'
    }
  },

  // minimal access surgery
      minimalaccessSurgery: {
      id: 'minimalaccessSurgery',
      title: 'Minimal Access Surgery',
      icon: FiUser,
      bannerImage: 'assets/specialties/GeneralSurgery/banner-general-surgery.png',
      shortDescription: 'Advanced laparoscopic, laser, and general surgery with highly skilled surgeons and comprehensive care in Ranchi.',
      longDescription: 'The Department of General and Minimally Invasive Surgery at Raj Hospitals offers complete evaluation, diagnosis, and surgical treatment for a wide range of disorders. Our surgeons provide state-of-the-art patient care, using minimally invasive and laser techniques for improved recovery and outcomes. We specialize in abdominal, breast, skin, hernia, and soft tissue surgeries, delivering personalized care and excellent results. ICU and emergency services ensure patients receive the highest level of surgical care, with a multidisciplinary team approach.',

      services: [
        { title: 'Laparoscopic & Laser Surgery', description: 'Gall Bladder, Hernia, Appendix & advanced general surgery using minimal access and laser technology.', image: '/assets/specialties/GeneralSurgery/laparoscopic-laser.png' },
        { title: 'Thoracoscopic (Lung) Surgeries', description: 'Minimally invasive surgical management of chest and lung conditions.', image: '/assets/specialties/GeneralSurgery/thoracoscopic.png' },
        { title: 'Bariatric (Weight Loss) & GI Surgeries', description: 'Weight-loss and gastrointestinal surgeries for obesity and digestive disorders.', image: '/assets/specialties/GeneralSurgery/bariatric-gi.png' },
        { title: 'Laparoscopy Surgery', description: 'Keyhole procedures for faster recovery, less scarring and better results.', image: '/assets/specialties/GeneralSurgery/laparoscopy.png' },
        { title: 'Laser Surgery For Proctology', description: 'Painless, advanced treatment for fissures, fistulas, piles, and hemorrhoids using laser.', image: '/assets/specialties/GeneralSurgery/laser-proctology.png' },
        { title: 'Diagnostic and Therapeutic Endoscopy', description: 'Procedures for both diagnosis and treatment using advanced endoscopic techniques.', image: '/assets/specialties/GeneralSurgery/endoscopy.png' }
      ],

      facilities: [
        'Advanced operation theatres with state-of-the-art equipment',
        'Dedicated Laparoscopic and Laser Surgery suites',
        '24/7 ICU and Emergency facilities',
        'Post-surgical care and rehabilitation',
        'In-house pathology and diagnostics',
        'Integrated surgical team and multidisciplinary approach'
      ],

      specialists: [
        {
          id: '501',
          name: 'Dr. Ashish Kumar Modi',
          qualification: 'MBBS, MS',
          experience: '15+ Years',
          image: '/assets/specialties/GeneralSurgery/dr-ashish-kumar-modi.jpg',
          specialization: 'General & Laparoscopic Surgery'
        }
      ],

      successStories: [
        {
          title: 'Complex Abdominal Surgery Success',
          patient: 'Jassi',
          story: 'I underwent surgery for a complicated abdominal wall problem at Raj Hospitals. The surgeon’s laparoscopic skill and the care I received resulted in a quick and satisfying recovery.',
          outcome: 'Full recovery post-laparoscopic repair.'
        },
        {
          title: 'Life-changing Weight Loss Surgery',
          patient: 'Justin',
          story: 'I came for gastric problems but was diagnosed and treated for a hiatus hernia with laparoscopic Nissen Fundoplication. The entire process was seamless and I’m grateful for the care.',
          outcome: 'Excellent surgical outcome and improved quality of life.'
        },
        {
          title: 'Gallbladder Stone Removal',
          patient: 'Gokul',
          story: 'I was facing gallbladder stones and the Raj Hospitals surgical team treated me so well and performed the surgery efficiently. The team is fantastic.',
          outcome: 'Problem solved, fast recovery.'
        }
      ],

      faqs: [
        {
          question: 'How long after surgery can you go home?',
          answer: 'Most patients are observed in the recovery room for 45 minutes to 2 hours post-surgery, and can usually go home between 1 and 4 hours after outpatient surgery. Overnight stay is seldom required, unless specified by the surgeon.'
        },
        {
          question: 'What are minimally invasive/laparoscopic surgeries?',
          answer: 'Laparoscopic surgeries use small cuts, a camera, and fine instruments for surgery inside your body, allowing quicker recovery, less pain and smaller scars compared to open surgery.'
        },
        {
          question: 'Is laser surgery painful?',
          answer: 'Laser surgeries for hemorrhoids, fistulas etc. are usually painless and offer faster healing as compared to traditional procedures.'
        },
        {
          question: 'What precautions are needed after surgery?',
          answer: 'Your surgeon will guide you on wound care, medications, and activity restrictions. Early mobilization and a healthy diet are encouraged for swift recovery.'
        },
        {
          question: 'Can all hernias be treated laparoscopically?',
          answer: 'Most hernias can be repaired using laparoscopy, but some complex or recurrent hernias might need open surgery depending on individual evaluation.'
        }
      ],

      contactInfo: {
        helpline: '+91 977 14 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

      nephrology: {
      id: 'nephrology',
      title: 'Nephrology',
      icon: FiDroplet, 
      bannerImage: 'assets/specialties/Nephrology/banner-nephrology.png',
      shortDescription: 'Best kidney care and dialysis services in Ranchi with advanced equipment and top nephrologists.',
      longDescription: 'The Department of Nephrology & Dialysis Services at Raj Hospitals is among the most advanced in the state, providing evaluation, diagnosis, and comprehensive treatment for hypertension, kidney disease, dialysis, and renal disorders. Our nephrology experts serve adults and children, offering diagnostic, management, operative services, and chronic dialysis therapy for acute kidney failure. Dedicated to prevention and early diagnosis, we deliver personalized, compassionate care for every kidney-related condition.',
      services: [
        { title: 'Hypertensive & Diabetic Kidney Disease', description: 'Specialized management and treatment of kidney disorders caused by hypertension and diabetes.', image: '/assets/specialties/Nephrology/hypertensive-diabetic.png' },
        { title: 'Hemodialysis', description: 'Regular and emergency dialysis treatments using state-of-the-art dialysis machines.', image: '/assets/specialties/Nephrology/hemodialysis.png' },
        { title: 'Peritoneal Dialysis', description: 'Continuous ambulatory peritoneal dialysis (CAPD) for chronic kidney disease patients.', image: '/assets/specialties/Nephrology/peritoneal-dialysis.png' },
        { title: 'Acute Kidney Injury & CKD', description: 'Expert care for acute kidney injury and chronic kidney disease, including assessment, management, and rehabilitation.', image: '/assets/specialties/Nephrology/acute-ckd.png' },
        { title: 'CRRT (Continuous Renal Replacement Therapy)', description: 'Advanced therapy for critically ill patients requiring continuous renal support.', image: '/assets/specialties/Nephrology/crrt.png' },
      //   { title: 'Kidney Biopsy', description: 'Diagnosis of kidney conditions through percutaneous biopsy procedures.', image: '/assets/specialties/Nephrology/kidney-biopsy.png' },
      //   { title: 'Kidney Stone Treatment', description: 'Management of kidney stones through medications, minimally invasive procedures, and surgery.', image: '/assets/specialties/Nephrology/kidney-stones.png' },
      //   { title: 'Permanent/Temporary Catheter Insertion', description: 'Catheter placement for dialysis and renal therapies.', image: '/assets/specialties/Nephrology/catheter.png' },
      //   { title: 'TPE/Plasmapheresis', description: 'Plasma exchange therapies for certain kidney and systemic conditions.', image: '/assets/specialties/Nephrology/plasmapheresis.png' },
      //   { title: 'Urinary Tract Infection (UTI) Management', description: 'Diagnosis and treatment of acute/chronic UTIs impacting kidney health.', image: '/assets/specialties/Nephrology/uti.png' },
      //   { title: 'CAPD Patient Management', description: 'Personalized management of CAPD for chronic dialysis patients.', image: '/assets/specialties/Nephrology/capd.png' },
      //   { title: 'Post-Kidney Transplantation Care', description: 'Specialized care and monitoring after kidney transplant for long-term recovery.', image: '/assets/specialties/Nephrology/transplant-care.png' }
      ],
      facilities: [
        'Dedicated nephrology ward and dialysis center',
        'State-of-the-art dialysis machines for adult and pediatric patients',
        'Continuous monitoring and expert nursing care',
        'Advanced diagnostic lab services',
        'Kidney transplant preparation and post-care support',
        'Personalized dietary and lifestyle counseling'
      ],
      specialists: [
        {
          id: '601',
          name: 'Dr. Avinash Kumar Dubey',
          qualification: 'MBBS, MD, DM',
          experience: '12+ Years',
          image: '/assets/specialties/Nephrology/dr-avinash-kumar-dubey.jpg',
          specialization: 'Nephrology & Dialysis'
        }
      ],
      successStories: [
        {
          title: 'Life-saving Dialysis for Acute Kidney Failure',
          patient: 'Mr. Kumar',
          story: 'Emergency dialysis restored my kidney function after sudden acute kidney injury. The caring nephrologists ensured my quick stabilization and recovery.',
          outcome: 'Full recovery and regular follow-up.'
        },
        {
          title: 'Successful Kidney Stone Management',
          patient: 'Mrs. Sharma',
          story: 'I was treated with minimally invasive techniques for painful kidney stones and am now symptom-free thanks to Raj Hospitals.',
          outcome: 'Pain-free and healthy.'
        }
      ],
      faqs: [
        {
          question: 'What causes chronic kidney disease?',
          answer: 'Common causes include diabetes, long-standing hypertension, recurrent urinary tract infections, and family history of kidney disease.'
        },
        {
          question: 'How is dialysis performed?',
          answer: 'Hemodialysis cleans your blood using a machine, while peritoneal dialysis uses the lining of your abdomen to filter blood. The method depends on your specific medical needs.'
        },
        {
          question: 'What lifestyle changes support kidney health?',
          answer: 'Healthy diet, regular exercise, controlled blood pressure, avoiding smoking/alcohol, and monitoring medications help prevent kidney damage.'
        },
        {
          question: 'How often are follow-ups required after treatment?',
          answer: 'Patients need regular checkups to monitor kidney function and adjust medications, especially after dialysis or transplant.'
        },
        {
          question: 'Can children get nephrology care at Raj Hospitals?',
          answer: 'Yes, our nephrology department provides care for children as well as adults, including dialysis, diagnostics, and long-term management.'
        }
      ],
      contactInfo: {
        helpline: '+91 97714 66634',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    // Neuroscience

      neurosciences: {
      id: 'neurosciences',
      title: 'Neurosciences',
      icon: FiBrain,
      bannerImage: 'assets/specialties/Neurosciences/banner-neurosciences.png',
      shortDescription: 'Best Neurologist Hospital in Ranchi offering comprehensive brain and spine care by expert neuro physicians.',
      longDescription:
        'The Department of Neurosciences at Raj Hospitals provides comprehensive and multidisciplinary care for brain and spine disorders. Our team of expert neurologists, neurosurgeons, and interventional neuro-radiologists utilize the latest technologies to diagnose and treat a wide range of neurological conditions. We provide integrated care for stroke, epilepsy, movement disorders, neuro infections, brain tumors, spinal injuries, and more with specialized emergency and surgical services.',
      services: [
        { title: 'Stroke- (Ischemic & Haemorrhagic)', description: 'Comprehensive care and rehabilitation for all kinds of stroke.', image: '/assets/specialties/Neurosciences/stroke.png' },
        { title: 'Epilepsy', description: 'Diagnosis, medical management, and surgical options for seizure disorders.', image: '/assets/specialties/Neurosciences/epilepsy.png' },
        { title: 'Dementias', description: 'Evaluation and treatment of Alzheimer’s disease, vascular dementia, and other dementias.', image: '/assets/specialties/Neurosciences/dementia.png' },
        { title: 'Parkinson\'s Disease and Atypical Parkinsonism', description: 'Advanced management of Parkinson’s and related movement disorders.', image: '/assets/specialties/Neurosciences/parkinsons.png' },
        { title: 'Autoimmune & Demyelinating Disorders', description: 'Care for Multiple Sclerosis, ADEM, NMOSD & MOGAD.', image: '/assets/specialties/Neurosciences/demyelinating.png' },
        { title: 'Myasthenia Gravis', description: 'Diagnosis and treatment of this neuromuscular condition.', image: '/assets/specialties/Neurosciences/myasthenia-gravis.png' },
        { title: 'Neuro Infectious Disorders', description: 'Treatment for meningitis, encephalitis, CNS tuberculosis, Pott’s spine, etc.', image: '/assets/specialties/Neurosciences/neuro-infections.png' },
        { title: 'Neuropathies', description: 'Management of GBS, CIDP and other peripheral nerve disorders.', image: '/assets/specialties/Neurosciences/neuropathies.png' },
        { title: 'Motor Neuron Disease', description: 'Comprehensive care and symptom management.', image: '/assets/specialties/Neurosciences/mn-disease.png' },
        { title: 'Myopathies', description: 'Diagnosis and treatment of muscle disorders.', image: '/assets/specialties/Neurosciences/myopathies.png' },
        { title: 'Movement Disorders', description: 'Extensive care for complex movement disorders.', image: '/assets/specialties/Neurosciences/movement-disorders.png' },
        { title: 'Head Injuries', description: 'Emergency and rehabilitative care for traumatic brain injuries.', image: '/assets/specialties/Neurosciences/head-injuries.png' },
        { title: 'Brain Stroke Unit & Seizures', description: 'Specialized stroke unit with continuous monitoring and seizure control.', image: '/assets/specialties/Neurosciences/stroke-unit.png' },
        { title: 'Spinal Cord Injury, Spine Surgery', description: 'Expert treatment and surgeries for spine trauma and disorders.', image: '/assets/specialties/Neurosciences/spine-injury.png' },
        { title: 'Stereotactic & Tumor Surgeries', description: 'Minimally invasive procedures for brain tumors and neurological lesions.', image: '/assets/specialties/Neurosciences/tumor-surgery.png' },
        { title: 'Trauma, Tumor & TB Surgeries', description: 'Specialized surgical interventions for neurological trauma and tubercular involvement.', image: '/assets/specialties/Neurosciences/trauma-surgery.png' },
        { title: 'Headache', description: 'Diagnosis and treatment of chronic and severe headaches.', image: '/assets/specialties/Neurosciences/headache.png' },
        { title: 'Backache & Stroke', description: 'Comprehensive management of back pain and stroke complications.', image: '/assets/specialties/Neurosciences/backache.png' },
        { title: 'Brain & Spine Tumor Surgery', description: 'Advanced neurosurgical removal and care for tumors.', image: '/assets/specialties/Neurosciences/brain-spine-tumor.png' },
        { title: 'Pediatric Brain Surgery', description: 'Expert neurosurgery for pediatric neurological conditions.', image: '/assets/specialties/Neurosciences/pediatric-brain-surgery.png' },
        { title: 'Emergency & Spine Trauma Surgery', description: 'Urgent surgical care for traumatic neurologic injuries.', image: '/assets/specialties/Neurosciences/emergency-trauma.png' },
        { title: 'Awake Brain Surgery', description: 'State-of-the-art awake craniotomy for tumor and functional brain surgery.', image: '/assets/specialties/Neurosciences/awake-brain-surgery.png' }
      ],
      facilities: [
        'Advanced neuroimaging (MRI, CT, PET)',
        'Dedicated stroke and epilepsy units',
        'Modern operating rooms with endoscopes and microscopes',
        '24/7 emergency neurology and neurosurgery services',
        'Multidisciplinary neuro-rehabilitation programs',
        'State-of-the-art electrophysiology labs',
        'Interventional neuro-radiology facilities'
      ],
      specialists: [
        {
          id: '701',
          name: 'Dr. Vijay Raj',
          qualification: 'MBBS, MS, MCh',
          experience: '18+ Years',
          image: '/assets/specialties/Neurosciences/dr-vijay-raj.jpg',
          specialization: 'Neurology & Neurosurgery'
        },
        {
          id: '702',
          name: 'Dr. Vivek Raj',
          qualification: 'MBBS, ECFMG, DNB',
          experience: '15+ Years',
          image: '/assets/specialties/Neurosciences/dr-vivek-raj.jpg',
          specialization: 'Neurology'
        },
        {
          id: '703',
          name: 'Dr. Ahmad Hussain',
          qualification: 'MBBS, MD, DrNB',
          experience: '12+ Years',
          image: '/assets/specialties/Neurosciences/dr-ahmad-hussain.jpg',
          specialization: 'Neurology'
        }
      ],
      successStories: [
        {
          title: 'Stroke Recovery Success',
          patient: 'Mr. Gupta, 62',
          story: 'Rapid emergency neurological care helped me recover optimal function after a major stroke. Their dedicated stroke unit made all the difference.',
          outcome: 'Regained independence after 3 months rehabilitation.'
        },
        {
          title: 'Effective Epilepsy Treatment',
          patient: 'Ms. Sharma',
          story: 'I have been seizure-free after comprehensive medication management and proper monitoring by the neurology team.',
          outcome: 'Improved quality of life and seizure control.'
        }
      ],
      faqs: [
        {
          question: 'What are common neurological disorders treated?',
          answer: 'Stroke, epilepsy, Parkinson’s disease, multiple sclerosis, neuropathies, brain and spine tumors, and movement disorders.'
        },
        {
          question: 'How is stroke managed at Raj Hospitals?',
          answer: 'We provide rapid assessment, acute treatment, and multidisciplinary rehabilitation in our dedicated stroke unit with advanced technologies.'
        },
        {
          question: 'Are pediatric neurological surgeries available?',
          answer: 'Yes, we have expert pediatric neurosurgeons for congenital and acquired brain and spine conditions.'
        },
        {
          question: 'What is awake brain surgery?',
          answer: 'Awake brain surgery allows monitoring of brain functions during tumor removal near critical brain areas to preserve neurological functions.'
        }
      ],
      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //Oncology(cancer care)

      oncology: {
      id: 'oncology',
      title: 'Oncology',
      icon: FiAward, 
      bannerImage: 'assets/specialties/Oncology/banner-oncology.png',
      shortDescription: 'World-class cancer care and radiation oncology services in Ranchi with multi-disciplinary, personalized treatments.',
      longDescription: 'The Department of Oncology at Raj Hospitals is committed to providing comprehensive cancer care, including screening, diagnosis, staging, treatment, and management of various cancer types. We offer surgical oncology, chemotherapy, radiation therapy, and supportive care for all solid organ malignancies including head & neck, breast, GI, gynae, and uro oncology. Our experienced oncologists use advanced diagnostic tools and individualized treatment protocols to ensure the best outcomes.',
      
      services: [
        { title: 'Medical Oncology & Chemotherapy', description: 'Safe administration of chemotherapy and advanced drug therapies for various cancers.', image: '/assets/specialties/Oncology/medical-oncology.png' },
        { title: 'Surgical Oncology', description: 'Expert surgeries for cancer including head & neck, breast, lung, abdominal cancers, and more.', image: '/assets/specialties/Oncology/surgical-oncology.png' },
        { title: 'Head & Neck Cancer Treatment', description: 'Specialized surgical and non-surgical treatments targeting cancers of the head and neck region.', image: '/assets/specialties/Oncology/head-neck.png' },
        { title: 'Breast Cancer Treatment', description: 'Comprehensive care involving breast conservative surgery, reconstruction, and medical therapies.', image: '/assets/specialties/Oncology/breast-cancer.png' },
        { title: 'Gynaecologic Oncology', description: 'Treatment for cancers of female reproductive organs including radical hysterectomy and ovarian surgery.', image: '/assets/specialties/Oncology/gynae-oncology.png' }
      ],
      
      facilities: [
        'Advanced modular operation theaters with ICU and HDU support',
        'State-of-the-art diagnostic imaging including CT, MRI, PET scans',
        'On-site pathology labs with IHC, Cytogenetics, FISH testing',
        'Dedicated chemotherapy infusion center with chemo port facilities',
        'Radiation oncology with precise therapy delivery',
        'Multidisciplinary oncology team for personalized care'
      ],
      
      specialists: [
        {
          id: '801',
          name: 'Dr. P K Raina',
          qualification: 'MBBS, MS',
          experience: '20+ Years',
          image: '/assets/specialties/Oncology/dr-pk-raina.jpg',
          specialization: 'Oncology & Surgical Oncology'
        },
        {
          id: '802',
          name: 'Dr. Abhijit Kumar',
          qualification: 'MBBS, MS, PDCC',
          experience: '16+ Years',
          image: '/assets/specialties/Oncology/dr-abhijit-kumar.jpg',
          specialization: 'Medical Oncology'
        }
      ],
      
      successStories: [
        {
          title: 'Successful Head & Neck Cancer Treatment',
          patient: 'Mr. Singh',
          story: 'Received comprehensive combined surgery and radiotherapy leading to successful remission. The entire care team was supportive and professional.',
          outcome: 'Complete remission with excellent quality of life.'
        },
        {
          title: 'Breast Cancer Reconstruction Success',
          patient: 'Ms. Sharma',
          story: 'Underwent breast conservation surgery with oncoplastic reconstruction and chemotherapy. Excellent recovery and follow-up care.',
          outcome: 'Healthy and cancer-free after 5 years.'
        }
      ],
      
      faqs: [
        {
          question: 'What types of cancer are treated?',
          answer: 'We treat all solid organ malignancies including breast, head & neck, lung, gastrointestinal, gynecologic, and urologic cancers.'
        },
        {
          question: 'What treatments do you provide?',
          answer: 'Our comprehensive options include surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies.'
        },
        {
          question: 'Do you offer support services?',
          answer: 'Yes, including pain management, nutritional counseling, psychological support, and palliative care.'
        },
        {
          question: 'How is cancer diagnosis done?',
          answer: 'Using imaging (CT, MRI, PET), biopsy, tumor markers, and advanced pathology tests like IHC and molecular studies.'
        },
        {
          question: 'Is personalized treatment available?',
          answer: 'Yes, every patient receives an individualized treatment plan from a multidisciplinary oncology team.'
        }
      ],
      
      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //orthopaedics - joint replacement
      orthopedics: {
      id: 'orthopedics',
      title: 'Orthopaedics & Joint Replacement',
      icon: FiActivity, 
      bannerImage: 'assets/specialties/Orthopedics/banner-orthopedics.png', 
      shortDescription: 'Comprehensive orthopaedic and joint replacement care with advanced surgical techniques in Ranchi.',
      longDescription: 'The Department of Orthopaedics & Joint Replacement at Raj Hospitals provides expert treatment for musculoskeletal conditions including joint pain, trauma, sports injuries, and deformities. Our specialised surgeons perform minimally invasive surgeries, joint replacements, arthroscopy, and complex trauma management using latest technology for optimal patient outcomes and speedy recovery. We also offer pediatric orthopaedics and comprehensive rehabilitation services.',
      
      services: [
        { title: 'Joint Replacements – Knee, Hip, Shoulder, Elbow & Ankle', description: 'Advanced joint replacement surgeries for multiple joints ensuring mobility and pain relief.', image: 'assets/specialties/Orthopedics/joint-replacement.png' },
        { title: 'Arthroscopy and Sports Injury', description: 'Minimally invasive procedures and expert care for sports-related injuries.', image: 'assets/specialties/Orthopedics/arthroscopy-sports.png' },
        { title: 'Bone Deformity and CTEV Correction', description: 'Surgical correction of bone deformities including clubfoot (CTEV).', image: 'assets/specialties/Orthopedics/deformity-correction.png' },
        { title: 'Trauma Surgery and Geriatric Care', description: 'Emergency trauma management and specialized geriatric orthopaedic care.', image: 'assets/specialties/Orthopedics/trauma-geriatric.png' },
        { title: 'Complex Trauma and Multiple Ligament Injuries', description: 'Comprehensive care for severe trauma and ligament reconstructions like ACL, PCL.', image: 'assets/specialties/Orthopedics/complex-trauma.png' },
        { title: 'Arthritis and Autoimmune Disorders', description: 'Treatment for osteoarthritis, rheumatoid arthritis, and associated autoimmune issues.', image: 'assets/specialties/Orthopedics/arthritis.png' },
        { title: 'Paediatric Orthopaedics', description: 'Specialized treatment for children including deformity corrections and injury management.', image: 'assets/specialties/Orthopedics/paediatric-orthopedics.png' }
      ],
      
      facilities: [
        'State-of-the-art operation theatres',
        'Advanced joint replacement technology',
        'Comprehensive rehabilitation and physiotherapy',
        'Dedicated pediatric orthopaedic care',
        'Multidisciplinary orthopedic team',
        '24/7 Emergency trauma care'
      ],
      
      specialists: [
        {
          id: '901',
          name: 'Dr. Mozammil Pheroz',
          qualification: 'MBBS, MS (Orthopaedics), DNB',
          experience: '11+ Years',
          image: 'assets/specialties/Orthopedics/dr-mozammil-pheroz.jpg',
          specialization: 'Orthopaedics & Joint Replacement Surgery'
        },
       
        {
          id: '904',
          name: 'Dr. Abhishek Roy',
          qualification: 'MBBS, MS, MAMC, FIJR, FIASM',
          experience: '15+ Years',
          image: 'assets/specialties/Orthopedics/dr-abhishek-roy.jpg',
          specialization: 'Orthopaedics & Joint Replacement'
        }
      ],
      
      successStories: [
        {
          title: 'Successful Knee Replacement',
          patient: 'Mohit',
          story: 'I underwent a left knee replacement at Raj Hospitals and got excellent care. The entire surgical process and recovery was smooth and professional.',
          outcome: 'Complete mobility restored, pain-free life.'
        },
        {
          title: 'Orthopaedic Trauma Surgery',
          patient: 'Raja',
          story: 'Raj Hospitals provided top quality treatment for my trauma injury, including surgical repair and rehabilitation. The surgeons and staff were supportive.',
          outcome: 'Full functional recovery.'
        }
      ],
      
      faqs: [
        {
          question: 'How long does recovery take after joint replacement?',
          answer: 'Recovery varies per individual but generally patients regain mobility and return to daily activities within 6-12 weeks.'
        },
        {
          question: 'Are minimally invasive techniques used?',
          answer: 'Yes, minimally invasive surgeries including arthroscopy and laparoscopic approaches are frequently used for better outcomes.'
        },
        {
          question: 'Do you provide pediatric orthopaedic care?',
          answer: 'Yes, we specialize in pediatric cases including deformity correction and injury management.'
        },
        {
          question: 'Is pain managed effectively post-surgery?',
          answer: 'Dedicated pain management protocols ensure patient comfort and promote fast recovery.'
        },
        {
          question: 'Are costs affordable?',
          answer: 'Raj Hospitals is committed to providing world-class care at affordable prices for all sections of society.'
        }
      ],
      
      contactInfo: {
        helpline: '+91 977 14 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //pulmonology

      pulmonology: {
      id: 'pulmonology',
      title: 'Pulmonology',
      icon: FiActivity, 
      bannerImage: 'assets/specialties/Pulmonology/banner-pulmonology.png', 
      shortDescription: 'High-quality pulmonology care in Ranchi by expert pulmonologists with comprehensive lung and respiratory treatment.',
      longDescription: 'Raj Hospital in Ranchi is proud to offer specialized pulmonology services to patients suffering from lung and respiratory system conditions. Our experienced pulmonologists provide personalized care for diseases such as asthma, COPD, pneumonia, tuberculosis, sleep disorders, and more. Equipped with advanced diagnostic and treatment facilities, we ensure accurate diagnosis and effective management tailored to every patient’s needs.',

      services: [
        { title: 'Asthma & COPD', description: 'Comprehensive management of asthma, chronic obstructive pulmonary disease, and related lung conditions.', image: '/assets/specialties/Pulmonology/asthma-copd.png' },
        { title: 'Chronic Bronchitis', description: 'Diagnosis and treatment of chronic bronchitis to improve respiratory function.', image: '/assets/specialties/Pulmonology/chronic-bronchitis.png' },
        { title: 'Sleep Disorders', description: 'Expert care for sleep-related breathing disorders including obstructive sleep apnea.', image: '/assets/specialties/Pulmonology/sleep-disorders.png' },
        { title: 'All Lungs & Chest Ailments', description: 'Treatment of various lung and chest diseases including infections and inflammatory conditions.', image: '/assets/specialties/Pulmonology/lung-chest-ailments.png' },
        { title: 'Allergology & Allergies', description: 'Diagnosis and management of respiratory allergies and immunologic conditions.', image: '/assets/specialties/Pulmonology/allergies.png' },
        { title: 'Asthma & Lung Disease Treatment', description: 'Tailored treatments to manage asthma and a variety of lung diseases.', image: '/assets/specialties/Pulmonology/asthma-lung.png' },
        { title: 'Obstructive Sleep Apnea & Other Sleep Disorders', description: 'Diagnosis and treatment options including CPAP therapy for sleep apnea.', image: '/assets/specialties/Pulmonology/sleep-apnea.png' },
        { title: 'Tuberculosis & Bronchitis', description: 'Comprehensive care for tuberculosis, bronchitis, and other chronic lung infections.', image: '/assets/specialties/Pulmonology/tuberculosis-bronchitis.png' },
        { title: 'Pneumonia & COVID Care', description: 'Treatment of pneumonia due to lung inflammation, including COVID-19 management.', image: '/assets/specialties/Pulmonology/pneumonia-covid.png' },
        { title: 'Pulmonary Rehabilitation', description: 'Rehabilitation for COPD, interstitial lung disease (ILD), and recovery from long COVID.', image: '/assets/specialties/Pulmonology/pulmonary-rehab.png' },
        { title: 'Pulmonary Function Test', description: 'Advanced tests to assess lung function and capacity.', image: '/assets/specialties/Pulmonology/pulmonary-function-test.png' }
      ],

      facilities: [
        'State-of-the-art pulmonology diagnostics and treatment center',
        'Advanced respiratory therapy and pulmonary rehabilitation',
        'Dedicated sleep lab and disorder clinics',
        'Modern bronchoscopy and imaging facilities',
        'Multidisciplinary team for comprehensive lung care'
      ],

      specialists: [
        {
          id: '1001',
          name: 'Dr. Suprova Chakraborty',
          qualification: 'DNB',
          experience: '10+ Years',
          image: '/assets/specialties/Pulmonology/dr-suprova-chakraborty.jpg',
          specialization: 'Pulmonology & Respiratory Medicine'
        }
      ],

      successStories: [
        {
          title: 'Effective COPD Management',
          patient: 'Mr. Kumar',
          story: 'Thanks to personalized care at Raj Hospitals, my COPD symptoms are well-controlled and my quality of life has improved significantly.',
          outcome: 'Improved lung function and symptom relief.'
        },
        {
          title: 'COVID-19 Pneumonia Recovery',
          patient: 'Ms. Mehta',
          story: 'Received excellent care for COVID pneumonia with full respiratory support and rehabilitation, leading to a full recovery.',
          outcome: 'Complete lung function restoration.'
        }
      ],

      faqs: [
        {
          question: 'What conditions does the pulmonology department treat?',
          answer: 'Asthma, COPD, pneumonia, tuberculosis, sleep disorders, lung cancer, and other respiratory illnesses.'
        },
        {
          question: 'How is obstructive sleep apnea treated?',
          answer: 'Treatment options include CPAP therapy, lifestyle modifications, and, if needed, surgical interventions.'
        },
        {
          question: 'What is pulmonary rehabilitation?',
          answer: 'It is a program of exercise, education, and support to help patients improve lung function and quality of life.'
        },
        {
          question: 'Are pulmonology services available for children?',
          answer: 'Yes, pediatric pulmonary care is offered for respiratory conditions in children.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },
    
    // Internal Medicine

//     internalMedicine: {
//   id: 'internalMedicine',
//   title: 'Department of Internal Medicine',
//   icon: FiUser, // Choose appropriate icon
//   bannerImage: 'assets/specialties/InternalMedicine/banner-internal-medicine.png', // Update with actual path
//   shortDescription: 'Comprehensive adult care with state-of-the-art diagnostics and personalized treatments in Ranchi.',
//   longDescription: 'The Department of Internal Medicine at Raj Hospitals provides expert care using advanced diagnostic facilities and tailored treatment plans. Our physicians specialize in managing chronic diseases like diabetes, hypertension, arthritis, and infectious diseases with a holistic approach. We emphasize preventive care, lifestyle modification, and patient education to improve health outcomes. The department is known for compassion, professionalism, and excellence in managing complex medical conditions.',

//   services: [
//     { title: 'Infectious Diseases', description: 'Diagnosis and treatment of various infectious diseases impacting adult and pediatric patients.', image: 'assets/specialties/InternalMedicine/infectious-diseases.png' },
//     { title: 'Diabetes & Endocrinology', description: 'Comprehensive management of diabetes, thyroid, and hormonal disorders.', image: 'assets/specialties/InternalMedicine/diabetes-endocrinology.png' },
//     { title: 'Non-Communicable Diseases', description: 'Care for chronic lifestyle diseases including hypertension and cardiovascular diseases.', image: 'assets/specialties/InternalMedicine/non-communicable-diseases.png' },
//     { title: 'Master Health Checkup', description: 'Preventive health screening and diagnostic packages for early disease detection.', image: 'assets/specialties/InternalMedicine/health-checkup.png' },
//     { title: 'Pulmonary Medicine', description: 'Treatment of respiratory conditions including asthma and COPD.', image: 'assets/specialties/InternalMedicine/pulmonary-medicine.png' },
//     { title: 'Gastroenterology', description: 'Integrated care for digestive and liver diseases.', image: 'assets/specialties/InternalMedicine/gastroenterology.png' },
//     { title: 'Cardiology', description: 'Management of heart diseases and vascular disorders.', image: 'assets/specialties/InternalMedicine/cardiology.png' },
//     { title: 'General Medicine', description: 'Treatment of adult medical conditions, acute and chronic.', image: 'assets/specialties/InternalMedicine/general-medicine.png' }
//   ],

//   facilities: [
//     'State-of-the-art modular operation theaters',
//     'Advanced diagnostic imaging services (CT, MRI, X-ray)',
//     'Comprehensive laboratory services including pathology',
//     'Specialized units for diabetes and endocrine disorders',
//     'Dedicated pulmonary and cardiac diagnostic sections',
//     'Well-equipped emergency and intensive care units',
//     'Multidisciplinary team approach with seamless coordination'
//   ],

//   specialists: [
//     {
//       id: '1101',
//       name: 'Dr. A K Agarwal',
//       qualification: 'MBBS, MD Medicine',
//       experience: '25+ Years',
//       image: 'assets/specialties/InternalMedicine/dr-ak-agarwal.png',
//       specialization: 'Internal Medicine'
//     },
//     {
//       id: '1102',
//       name: 'Dr. A K Sinha',
//       qualification: 'MBBS, MD',
//       experience: '20+ Years',
//       image: 'assets/specialties/InternalMedicine/dr-ak-sinha.png',
//       specialization: 'Internal Medicine'
//     },
//     {
//       id: '1103',
//       name: 'Dr. Neelam',
//       qualification: 'MBBS, MD',
//       experience: '15+ Years',
//       image: 'assets/specialties/InternalMedicine/dr-neelam.png',
//       specialization: 'Internal Medicine'
//     }
//   ],

//   faqs: [
//     {
//       question: 'What diseases are managed by internal medicine?',
//       answer: 'Chronic diseases like diabetes, hypertension, arthritis and infectious diseases are treated by internal medicine specialists.'
//     },
//     {
//       question: 'What preventive services do you offer?',
//       answer: 'Health checkups, vaccination, lifestyle counseling and preventive care for all ages.'
//     },
//     {
//       question: 'How often should I get a health checkup?',
//       answer: 'Depends on age, medical history and risk factors; generally annually or biannually is advised.'
//     },
//     {
//       question: 'Who should see an internal medicine doctor?',
//       answer: 'Adults with chronic illness, complex health issues or undiagnosed symptoms.'
//     },
//     {
//       question: 'Do you provide pulmonary medicine services?',
//       answer: 'Yes, integrated care for respiratory conditions is part of our department.'
//     }
//   ],

//   contactInfo: {
//     helpline: '+91 977 14 8888',
//     appointmentLink: 'https://rajhospitals.com/contact.php',
//     address: 'Raj Hospitals, Ranchi, Jharkhand'
//   }
// },


//urology
urology: {
  id: 'urology',
  title: 'Urology',
  icon: FiZap, // Icon from react-icons/fi or any preferred icon
  bannerImage: 'assets/specialties/Urology/banner-urology.png', // Provide the correct image path
  shortDescription: 'Best Urology Hospital in Ranchi offering comprehensive urological care for adults and children with advanced medical technology.',
  longDescription: 'Raj Hospitals is committed to providing compassionate and timely care for disorders of the urinary system. Our skilled urologists offer diagnosis and treatment for a wide range of urological diseases including urinary tract infections, kidney stones, urologic cancers, infertility, and male reproductive issues. The department is equipped with cutting-edge technology delivering expert adult and pediatric urology care and minimally invasive surgical options.',
  
  services: [
    { title: 'Prostate Surgeries – TURP', description: 'Treatment for benign prostatic hyperplasia and related conditions using Transurethral Resection of Prostate.', image: '/assets/specialties/Urology/prostate-surgery.png' },
    { title: 'Kidney Stone Surgeries', description: 'Minimally invasive and surgical removal of kidney and bladder stones.', image: '/assets/specialties/Urology/kidney-stones.png' },
    { title: 'Female Urology Surgeries', description: 'Treatment for female urinary tract conditions including incontinence and prolapse.', image: '/assets/specialties/Urology/female-urology.png' },
    { title: 'Infertility Treatment', description: 'Care and surgical management of male and female infertility in the reproductive age group.', image: '/assets/specialties/Urology/infertility.png' },
    { title: 'Lithotripsy', description: 'Non-invasive shock wave therapy for breaking down kidney stones.', image: '/assets/specialties/Urology/lithotripsy.png' },
    { title: 'Robotic Surgery', description: 'Advanced robotic-assisted surgical techniques for precision and quicker recovery.', image: '/assets/specialties/Urology/robotic-surgery.png' },
    { title: 'Renal Transplantation', description: 'Comprehensive pre-op and post-op care and surgery for kidney transplant patients.', image: '/assets/specialties/Urology/kidney-transplant.png' },
    { title: 'Laparoscopic Surgery', description: 'Minimally invasive surgeries for urological conditions including tumors and reconstructions.', image: '/assets/specialties/Urology/laparoscopy.png' },
    { title: 'Pancreatic Disorders', description: 'Diagnosis and treatment of pancreatic and adjacent genitourinary disorders.', image: '/assets/specialties/Urology/pancreatic-disorder.png' },
    { title: 'Endourology', description: 'Minimally invasive procedures for urinary tract disorders via endoscopic techniques.', image: '/assets/specialties/Urology/endourology.png' },
    { title: 'Uro-Oncology', description: 'Management of urological cancers including bladder, prostate, and renal tumors.', image: '/assets/specialties/Urology/uro-oncology.png' },
    { title: 'Male Infertility & Andrology', description: 'Evaluation and treatment of male reproductive health issues.', image: '/assets/specialties/Urology/andrology.png' },
    { title: 'Vascular Access for Hemodialysis (AVF)', description: 'Creation and maintenance of arteriovenous fistulas for dialysis patients.', image: '/assets/specialties/Urology/vascular-access.png' },
    { title: 'Reconstructive Urology', description: 'Surgical repair and reconstruction of genitourinary tract anomalies.', image: '/assets/specialties/Urology/reconstructive-urology.png' }
  ],

  facilities: [
    'Advanced endoscopic and laparoscopic surgical suites',
    'Robotic surgical system for precision treatments',
    'Dedicated dialysis access and renal transplant support',
    'Comprehensive diagnostic imaging and laboratory services',
    'Specialized pediatric urology care',
    'Multidisciplinary urology team for holistic management'
  ],

  specialists: [
    {
      id: '1201',
      name: 'Dr. Sunil Kumar',
      qualification: 'MBBS, MS (Gen Surgery), MCh (Urology)',
      experience: '18+ Years',
      image: '/assets/specialties/Urology/dr-sunil-kumar.jpg',
      specialization: 'Urology & Surgical Oncology'
    },
    {
      id: '1202',
      name: 'Dr. Ved Prakash',
      qualification: 'MBBS, MS (Gen Surgery), MCh (Urology)',
      experience: '15+ Years',
      image: '/assets/specialties/Urology/dr-ved-prakash.jpg',
      specialization: 'Urology'
    }
  ],

  successStories: [
    {
      title: 'Successful Kidney Stone Removal',
      patient: 'Mr. Sharma',
      story: 'Raj Hospitals provided minimally invasive stone removal treatment which was quick and effective. I experienced little pain and a fast recovery.',
      outcome: 'Stone-free with restored kidney function.'
    },
    {
      title: 'Robotic Prostate Surgery Success',
      patient: 'Mr. Singh',
      story: 'The advanced robotic surgery for prostate cancer was state-of-the-art and led to minimal complications and fast rehabilitation.',
      outcome: 'Cancer remission and improved quality of life.'
    }
  ],

  faqs: [
    {
      question: 'What urological conditions are treated?',
      answer: 'Urinary infections, stones, cancers, infertility, erectile dysfunction, and pediatric urology conditions.'
    },
    {
      question: 'Is robotic surgery available?',
      answer: 'Yes, we offer robotic-assisted surgeries for precision and faster recovery.'
    },
    {
      question: 'Do you perform kidney transplants?',
      answer: 'Yes, including pre and post transplantation comprehensive care.'
    },
    {
      question: 'Are pediatric urology services offered?',
      answer: 'Our team specializes in managing congenital and acquired urological conditions in children.'
    }
  ],

  contactInfo: {
    helpline: '+91 97714 66634',
    appointmentLink: 'https://rajhospitals.com/contact.php',
    address: 'Raj Hospitals, Ranchi, Jharkhand'
  }
}, 










    



     

};



  


  // Conditions data for each specialty
  const conditionsData = {
    cardiology: [
    'Coronary Artery Disease',
    'Heart Attack (Myocardial Infarction)',
    'Heart Failure',
    'Arrhythmias & Irregular Heartbeat',
    'Hypertension (High Blood Pressure)',
    'Heart Valve Disorders',
    'Cardiomyopathy',
    'Atrial Fibrillation',
    'Chest Pain (Angina)',
    'Pericarditis',
    'Cardiac Arrest',
    'Deep Vein Thrombosis',
    'Pulmonary Embolism',
    'Aortic Aneurysm',
    'Peripheral Artery Disease',
    'Congenital Heart Defects',
    'Bradycardia & Tachycardia',
    'Heart Murmurs'],

    neurology: [
    'Stroke (Ischemic & Hemorrhagic)',
    'Brain Tumors',
    'Epilepsy & Seizure Disorders',
    'Parkinson\'s Disease',
    'Multiple Sclerosis',
    'Alzheimer\'s Disease & Dementia',
    'Migraine & Headache Disorders',
    'Spinal Cord Injuries',
    'Traumatic Brain Injury',
    'Movement Disorders',
    'Neuropathy',
    'Meningitis & Encephalitis',
    'Brain Aneurysms',
    'Hydrocephalus',
    'Cerebral Palsy',
    'Huntington\'s Disease',
    'Sleep Disorders',
    'Vertigo & Balance Disorders'],

    orthopedics: [
    'Fractures & Trauma',
    'Arthritis (Osteo & Rheumatoid)',
    'Joint Replacement (Hip, Knee)',
    'Sports Injuries',
    'Spinal Disorders',
    'Herniated Disc',
    'Osteoporosis',
    'Torn Ligaments & Tendons',
    'Carpal Tunnel Syndrome',
    'Shoulder Impingement',
    'Tennis Elbow',
    'Plantar Fasciitis',
    'Scoliosis',
    'Bone Tumors',
    'Muscle Strains',
    'Joint Dislocation'],

    gastroenterology: [
    'Acid Reflux (GERD)',
    'Peptic Ulcer Disease',
    'Inflammatory Bowel Disease',
    'Crohn\'s Disease',
    'Ulcerative Colitis',
    'Irritable Bowel Syndrome',
    'Hepatitis',
    'Liver Cirrhosis',
    'Gallstones',
    'Pancreatitis',
    'Colorectal Cancer',
    'Celiac Disease',
    'Diverticulitis',
    'Barrett\'s Esophagus',
    'Fatty Liver Disease',
    'Hemorrhoids'],

    oncology: [
    'Lung Cancer',
    'Breast Cancer',
    'Colorectal Cancer',
    'Prostate Cancer',
    'Leukemia',
    'Lymphoma',
    'Brain Tumors',
    'Ovarian Cancer',
    'Pancreatic Cancer',
    'Liver Cancer',
    'Skin Cancer (Melanoma)',
    'Kidney Cancer',
    'Bladder Cancer',
    'Cervical Cancer',
    'Thyroid Cancer',
    'Bone Cancer'],

    pediatrics: [
    'Childhood Asthma',
    'Allergies',
    'Growth Disorders',
    'Developmental Delays',
    'ADHD',
    'Autism Spectrum Disorder',
    'Childhood Obesity',
    'Ear Infections',
    'Respiratory Infections',
    'Skin Conditions (Eczema)',
    'Childhood Diabetes',
    'Digestive Disorders',
    'Sleep Disorders',
    'Behavioral Issues',
    'Immunization Schedules',
    'Nutritional Deficiencies'],

    urology: [
    'Kidney Stones',
    'Urinary Tract Infections',
    'Prostate Enlargement (BPH)',
    'Prostate Cancer',
    'Bladder Cancer',
    'Kidney Cancer',
    'Erectile Dysfunction',
    'Male Infertility',
    'Urinary Incontinence',
    'Overactive Bladder',
    'Kidney Disease',
    'Testicular Disorders',
    'Varicocele',
    'Hydrocele',
    'Penile Disorders',
    'Urethral Stricture'],

    obstetrics: [
    'Pregnancy Care',
    'High-Risk Pregnancy',
    'Gestational Diabetes',
    'Preeclampsia',
    'Miscarriage Management',
    'Infertility Treatment',
    'PCOS',
    'Endometriosis',
    'Ovarian Cysts',
    'Uterine Fibroids',
    'Menstrual Disorders',
    'Menopause Management',
    'Cervical Cancer Screening',
    'Contraceptive Counseling',
    'STD Testing & Treatment',
    'Pelvic Pain'],

    ent: [
    'Hearing Loss',
    'Ear Infections',
    'Tinnitus',
    'Sinusitis',
    'Nasal Polyps',
    'Deviated Septum',
    'Tonsillitis',
    'Throat Infections',
    'Voice Disorders',
    'Sleep Apnea',
    'Vertigo',
    'Allergic Rhinitis',
    'Thyroid Nodules',
    'Salivary Gland Disorders',
    'Facial Trauma',
    'Head & Neck Cancers'],

    nephrology: [
    'Chronic Kidney Disease',
    'Kidney Failure',
    'Dialysis Management',
    'Kidney Transplant Care',
    'Hypertension',
    'Electrolyte Disorders',
    'Kidney Stones',
    'Proteinuria',
    'Hematuria (Blood in Urine)',
    'Polycystic Kidney Disease',
    'Glomerulonephritis',
    'Nephrotic Syndrome',
    'Acid-Base Disorders',
    'Fluid Retention',
    'Diabetic Nephropathy',
    'Autoimmune Kidney Disease']

  };
function SidebarSpecialistsSlider({ specialists }) {
  const [index, setIndex] = useState(0);

  if (!specialists?.length) return null;

  const prev = () => setIndex(i => (i === 0 ? specialists.length - 1 : i - 1));
  const next = () => setIndex(i => (i === specialists.length - 1 ? 0 : i + 1));

  const doc = specialists[index];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <FiUsers className="w-5 h-5 text-primary-600 mr-2" />
        Meet Our Specialists
      </h3>
      <div className="relative">
        {specialists.length > 1 && (
          <>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-primary-100 z-10"
              style={{ left: "-1.5rem" }}
              onClick={prev}
              aria-label="Previous"
              type="button"
            >
              <FiChevronLeft className="w-5 h-5 text-primary-600" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-primary-100 z-10"
              style={{ right: "-1.5rem" }}
              onClick={next}
              aria-label="Next"
              type="button"
            >
              <FiChevronRight className="w-5 h-5 text-primary-600" />
            </button>
          </>
        )}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden border border-gray-100">
          <div className="relative h-48 overflow-hidden">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-full object-cover object-top"
              onError={e => {
                e.target.src = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{doc.name}</h4>
            <p className="text-primary-600 text-sm mb-1">{doc.qualification}</p>
            <p className="text-secondary-600 text-xs mb-2">{doc.specialization}</p>
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <FiAward className="w-4 h-4 mr-1" />
              <span>{doc.experience} Experience</span>
            </div>
            <Link
              to={`/doctors/${doc.id}`}
              className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 text-sm"
            >
              <FiCalendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
        {specialists.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {specialists.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full border border-primary-300 ${index === i ? "bg-primary-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


  // Function to get conditions for a specific specialty
  const getConditionsForSpecialty = (specialtyId) => {
    return conditionsData[specialtyId] || conditionsData.cardiology;
  };

  // Default to cardiology if specialtyId doesn't exist in our data
  const specialty = specialtyData[specialtyId] || specialtyData.cardiology;

  return (
    <div>
      {/* Hero Section */}
 <section className="relative h-[50vh] mt-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
            src={specialty.bannerImage}
            alt={specialty.title}
            className="w-full h-full object-cover" />

    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-4">
      <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white">

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-primary-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <SafeIcon icon={specialty.icon} className="w-6 h-6 text-white" />
          </div>
          <div className="text-lg font-medium">Department of</div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{specialty.title}</h1>
        <p className="text-xl text-gray-200">{specialty.shortDescription}</p>
      </motion.div>
    </div>
  </div>
      </section>



      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{specialty.longDescription}</p>
                
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <SafeIcon icon={FiInfo} className="w-5 h-5 text-primary-600 mr-2" />
                    Why Choose Our {specialty.title} Department
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Team of experienced specialists with advanced training and expertise</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">State-of-the-art diagnostic and treatment facilities</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive care from diagnosis to rehabilitation</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Multidisciplinary approach for complex cases</span>
                    </li>
                    <li className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">24/7 emergency care for critical conditions</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Key Facilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12">

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Facilities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {specialty.facilities.map((facility, index) =>
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8">

              {/* Appointment Card */}
              {/* <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book an Appointment</h3>
                <p className="text-gray-700 mb-6">Schedule a consultation with our {specialty.title} specialists.</p>
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                  <span>Book Now</span>
                </button>
              </div> */}

              {/* Department Stats 
                                                                                                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                                                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Department Statistics</h3>
                                                                                                    <div className="space-y-4">
                                                                                                      <div className="flex justify-between items-center">
                                                                                                        <div className="text-gray-700">Successful Procedures</div>
                                                                                                        <div className="text-xl font-bold text-primary-600">5,000+</div>
                                                                                                      </div>
                                                                                                      <div className="flex justify-between items-center">
                                                                                                        <div className="text-gray-700">Specialist Doctors</div>
                                                                                                        <div className="text-xl font-bold text-primary-600">{specialty.specialists.length}+</div>
                                                                                                      </div>
                                                                                                      <div className="flex justify-between items-center">
                                                                                                        <div className="text-gray-700">Patient Satisfaction</div>
                                                                                                        <div className="text-xl font-bold text-primary-600">98%</div>
                                                                                                      </div>
                                                                                                      <div className="flex justify-between items-center">
                                                                                                        <div className="text-gray-700">Years of Excellence</div>
                                                                                                        <div className="text-xl font-bold text-primary-600">15+</div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                   </div>
                                                                                                   */}
              {/* Emergency Contact */}
              {/* <div className="bg-accent-50 p-6 rounded-xl border border-accent-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-accent-600 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-gray-700 mb-4">For medical emergencies related to {specialty.title.split(' ')[0]} conditions:</p>
                <div className="bg-white p-4 rounded-lg">
                  <a href="tel:+919771488888" className="text-2xl font-bold text-accent-600 hover:text-accent-700 transition-colors flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                    +91 977 14 88888
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-1">Available 24/7</p>
                </div>
              </div> */}
               <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center items-center">
                  {/* <SafeIcon icon={FiAlertCircle} className="w-5 h-5 text-accent-600 mr-2" /> */}
                    Meet Our Specialists
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
      {specialty.specialists.map((doctor, index) =>
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full sm:w-[320px] md:w-[300px] lg:w-[340px]">

          <div className="relative h-48 overflow-hidden">
            <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src =
                    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                  }} />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {doctor.name}
            </h3>
            <p className="text-primary-600 font-medium mb-2">
              {doctor.qualification}
            </p>
            <p className="text-secondary-600 text-sm mb-3">
              {doctor.specialization}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
              <span>{doctor.experience} Experience</span>
            </div>
            <Link
                  to={`/doctors/${doctor.id}`}
                  className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">

              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </motion.div>
            )}
    </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatments we offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive {specialty.title.split(' ')[0]} care with advanced techniques and personalized treatment plans
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialty.services.map((service, index) =>
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">

                <div className="h-48 overflow-hidden">
                  <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {/*
                  <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </button>
                  */}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

        {/* Conditions We Treat Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-3">Conditions We Treat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common conditions we diagnose and treat in our {specialty.title.split(' ')[0]} department
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {getConditionsForSpecialty(specialtyId).map((condition, index) =>
              <div key={index} className="flex items-center space-x-3 py-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{condition}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>







      {/* Meet Our Specialists */}
      {/* <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Meet Our Specialists
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experienced {specialty.title.split(" ")[0]} specialists dedicated to
        providing exceptional patient care
      </p>
    </motion.div>

    {/* Keep card size same, center if less than 3 *
    <div className="flex flex-wrap justify-center gap-8">
      {specialty.specialists.map((doctor, index) =>
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full sm:w-[320px] md:w-[300px] lg:w-[340px]">

          <div className="relative h-64 overflow-hidden">
            <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src =
                    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                  }} />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {doctor.name}
            </h3>
            <p className="text-primary-600 font-medium mb-2">
              {doctor.qualification}
            </p>
            <p className="text-secondary-600 text-sm mb-3">
              {doctor.specialization}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
              <span>{doctor.experience} Experience</span>
            </div>
            <Link
                  to={`/doctors/${doctor.id}`}
                  className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">

              <SafeIcon icon={FiCalendar} className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </motion.div>
            )}
    </div>

    <div className="text-center mt-10">
      <Link
              to="/doctors"
              className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">

        <SafeIcon icon={FiUsers} className="w-5 h-5" />
        <span>View All Specialists</span>
      </Link>
    </div>
  </div>
      </section> */}


      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of healing and recovery from our {specialty.title} department
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialty.successStories.map((story, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md">

                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                </div>
                <p className="text-gray-500 mb-4">Patient: {story.patient}</p>
                <p className="text-gray-700 mb-6">{story.story}</p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-800">Outcome: {story.outcome}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about {specialty.title} conditions and treatments
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {specialty.faqs.map((faq, index) =>
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}>

                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  {openIndex === index ?
                  <FiIcons.FiMinus className="text-2xl text-primary-500" /> :

                  <FiIcons.FiPlus className="text-2xl text-primary-500" />
                  }
                </div>
                <div
                  className={`text-gray-700 transition-max-height duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"}`
                  }>

                  {openIndex === index &&
                  <p>
                      {faq.answer}
                    </p>
                  }
                </div>
              </div>
              )}
          </div>
  
        </div>
      </div>
    </section>



    </div>
  );

};

export default SpecialtyDetail;