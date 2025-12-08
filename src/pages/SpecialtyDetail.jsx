import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {

  FiEye,
  FiHeart,
  FiFeather,
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
          id: 'rajesh-jha',
          name: 'Dr. Rajesh Kr. Jha',
          qualification: 'MBBS, MD, DM (Cardiology)',
          experience: '16+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.png',
          specialization: 'Interventional Cardiology'
        },
        {
          id: 'awnindra-singh',
          name: 'Dr. Awnindra Kumar Singh',
          qualification: 'MBBS, MD, DM',
          experience: '16+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/-Dr. Awnindra-Kumar-Singh-Cardiologist.png',
          specialization: 'Interventional Cardiology'
        },
        {
          id: 'anup-kumar-jha',
          name: 'Dr. Anup Kumar Jha',
          qualification: 'MBBS, Cardio-Physician (NI), IGNOU',
          experience: '30+ Years',
          image: 'assets/Doc-Side/Dr Anup Kumar Jha_.webp',
          specialization: 'Non-Invasive Cardiology'
        },

      ],





      successStories: [
        {
          title: 'Life-Saving Emergency Angioplasty',
          patient: 'Ramesh Kumar, 58',
          story: 'Ramesh was rushed to our emergency with severe chest pain and was diagnosed with a major heart attack. Our cardiac team performed an emergency angioplasty within the golden hour, saving his heart muscle and giving him a new lease of life. He has now returned to his normal activities with proper medication and lifestyle changes.', outcome: 'Complete recovery with 95% heart function'
        },
        {
          title: 'Complex Bypass Surgery Success',
          patient: 'Sunita Devi, 62',
          story: 'Sunita had severe blockages in multiple coronary arteries that weren\'t suitable for stenting. Our cardiac surgeons performed a complex bypass surgery, creating new routes for blood flow to her heart. Despite being a high-risk case due to her diabetes and hypertension, the surgery was successful.',
          outcome: 'Resumed normal life within 3 months'
        }],






      faqs: [
        {
          question: 'What are the warning signs of a heart attack?',
          answer: 'Warning signs include chest pain or discomfort, shortness of breath, pain or discomfort in the arms, back, neck, jaw, or stomach, cold sweat, nausea, lightheadedness. Women may experience different symptoms like unusual fatigue, sleep disturbances, and shortness of breath. If you experience these symptoms, seek medical attention immediately.'
        },

        {
          question: 'How often should I get a cardiac check-up?',
          answer: 'For adults over 40, an annual cardiac check-up is recommended. Those with risk factors like high blood pressure, diabetes, high cholesterol, family history of heart disease, or smoking should consider more frequent check-ups as advised by their doctor. Basic cardiac screening includes blood pressure measurement, cholesterol testing, and ECG.'
        },

        { question: 'What lifestyle changes can improve heart health?', answer: 'Key lifestyle changes include regular physical activity (at least 150 minutes of moderate exercise per week), maintaining a heart-healthy diet (low in saturated fats, trans fats, and sodium), maintaining healthy weight, quitting smoking, limiting alcohol consumption, managing stress, and getting adequate sleep.' },

        {
          question: 'What is the recovery time after angioplasty?',
          answer: 'Most patients can return to light activities within a week after angioplasty. Full recovery typically takes about 2-4 weeks. However, recovery time varies based on individual health conditions and the complexity of the procedure. Follow-up appointments are essential to monitor progress and adjust medications if necessary.'
        }]

    },


    //gastro
    gastroenterology: {
      id: 'gastroenterology',
      title: 'Gastroenterology & Endoscopy',
      icon: FiDroplet,
      bannerImage: 'assets/specialties/Gastroenterology & Endoscopy/Gastro-banner-image.png',
      shortDescription: 'Best gastroenterology care in Ranchi with advanced diagnostics, minimally invasive surgeries and expert gastroenterologists.',
      longDescription: 'The Department of Gastroenterology & Endoscopy at Raj Hospitals provides top medical services for digestive system disorders including gastroenterology, hepatology, and gastrointestinal surgery. Our minimally invasive procedures like laparoscopy and endoscopy offer faster recovery, fewer complications and less post-operative follow-up. We are among few centers offering scarless minimal access surgery and advanced laparoscopic, biliary, pancreatic, and colorectal oncologic procedures.',

      services: [
        { title: 'Therapeutic and Diagnostic Upper GI Endoscopy', description: 'Advanced diagnostic and therapeutic procedures for the upper gastrointestinal tract.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Therapeutic and Diagnostic.png' },
        { title: 'Lower GI Endoscopy (Colonoscopy)', description: 'Examination and treatment of the lower gastrointestinal tract using colonoscopy techniques.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Lower GI Endoscopy (Colonoscopy).png' },
        { title: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)', description: 'Diagnostic and therapeutic procedure to treat biliary and pancreatic duct disorders.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/ERCP (Endoscopic-Retrograde).png' },
        { title: 'Endoscopic Ultrasound (EUS)', description: 'Advanced imaging technique combining endoscopy and ultrasound to diagnose pancreatic and GI disorders.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/ERCP,-EUS,-Hepatitis-Care.png' },
        { title: 'Inflammatory Bowel Disease (IBD) Clinic', description: 'Specialized care for Crohn\'s disease, ulcerative colitis, and other inflammatory bowel diseases.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Inflammatory-Bowel-Disease.png' },
        { title: 'Hepatology Clinic', description: 'Expert management of liver diseases including hepatitis and fatty liver disease.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Hepatology-Clinic.png' },
        { title: 'Pancreatic Disorder Management', description: 'Comprehensive diagnosis and treatment of pancreatic disorders including pancreatitis.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Pancreatic-Disorder-Management.png' },
        { title: 'Esophageal Disorders', description: 'Diagnosis and treatment of esophageal diseases such as reflux and motility disorders.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Esophageal-Disorders.png' },
        { title: 'Enteral Stenting', description: 'Minimally invasive stenting procedures for obstructive gastrointestinal conditions.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Enteral-Stenting.png' },
        { title: 'Endoscopy & Colonoscopy', description: 'Comprehensive endoscopic examinations of the digestive tract for diagnosis and treatment.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Endoscopy & Colonoscopy.png' },
        { title: 'ERCP, EUS, Hepatitis Care', description: 'Diagnostic and therapeutic services including ERCP, EUS, and hepatitis management.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/ERCP,-EUS,-Hepatitis-Care.png' },
        { title: 'Pancreatitis, Reflux, Peptic Ulcer Treatment', description: 'Expert medical and procedural management of pancreatitis, acid reflux, and peptic ulcers.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Pancreatitis,-Reflux,-Peptic-Ulcer-Treatment.png' },
        { title: 'Abdominal Pain & Fatty Liver Treatment', description: 'Diagnosis and treatment of chronic abdominal pain and fatty liver disease.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Abdominal-Pain & Fatty-Liver-Treatment.png' },
        { title: 'Bile Duct Surgery & GI Stenting', description: 'Surgical treatments and stenting for bile duct and gastrointestinal tract disorders.', image: 'assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Bile-Duct-Surgery & GI-Stenting.png' },
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
          id: 'ravish-ranjan',
          name: 'Dr. Ravish Ranjan',
          qualification: 'MBBS, MD, DNB (Gastroenterology)',
          experience: '15+ Years',
          image: '/assets/Doc-Side/Gastroenterologist - Dr. Ravish Ranjan.webp',
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
    //   'critical-care-and-emergency': {
    //   id: 'critical-care-and-emergency',
    //   title: 'Critical Care & Emergency',
    //   icon: FiActivity, 
    //   bannerImage: 'assets/specialties/Critical Care & Emergency/Critical-Care & Emergency.png',
    //   shortDescription: 'Comprehensive 24/7 Emergency & Critical Care, trauma, surgical, neuro & cardiac ICU services under one roof.',
    //   longDescription: 'At Raj Hospitals, the Critical Care & Emergency Department provides seamless, multidisciplinary care for all acute, life-threatening illnesses and injuries. With a state-of-the-art ICU, trauma center, advanced ICUs on Wheels (ambulances), and a dedicated team of consultants in emergency, critical care, cardiology, neurology, surgery, nephrology, and more, we ensure rapid response and advanced management for every medical and trauma emergency.',
    //   services: [
    //     { title: '24 × 7 Emergency & Critical Care Consultant', description: 'Continuously available consultants to handle every acute medical, trauma or accident emergency.', image: 'assets/specialties/Critical Care & Emergency/24-7consultant.png' },
    //     { title: 'Cardiac & Neuro ICU', description: 'Expert cardiac and neurological intensive care with dedicated beds and advanced monitoring systems.', image: 'assets/specialties/Critical Care & Emergency/Cardiac & Neuro ICU.png' },
    //     { title: 'Medical & Surgical ICU', description: 'Round the clock ICU support for all complex medical and surgical cases.', image: 'assets/specialties/Critical Care & Emergency/Medical & Surgical-ICU.png' },
    //     { title: 'Emergency, Trauma & Acute Care', description: 'Immediate management for accidents, trauma, acute illnesses and multi-organ failures.', image: 'assets/specialties/Critical Care & Emergency/Trauma.png' },
    //     { title: 'ICU On Wheels (Advanced Life-Support Ambulances)', description: 'Ambulances equipped as mobile ICUs start critical care during transit.', image: 'assets/specialties/Critical Care & Emergency/ICU-On-Wheels.png' },
    //     { title: 'Dedicated Emergency Unit (10 Beds)', description: 'Multiple well-equipped emergency beds for simultaneous management of cases.', image: 'assets/specialties/Critical Care & Emergency/bed.png' },
    //     { title: 'Neuro Critical Care', description: 'Comprehensive care for stroke, head injuries, and neurological emergencies.', image: 'assets/specialties/Critical Care & Emergency/Neuro-Care.png' },
    //     { title: 'Multidisciplinary ICU Team', description: 'Specialists include emergency physicians, surgeons, cardiologists, orthopaedists, nephrologists, urologists, and more.', image: 'assets/specialties/Critical Care & Emergency/Multidisciplinary.png' },
    //     { title: 'Haemodialysis', description: 'Renal support and dialysis services for patients with kidney injury.', image: 'assets/specialties/Critical Care & Emergency/Haemodialysis.png' },
    //     { title: 'Advanced Ventilatory Support (Mechanical Ventilation)', description: 'Non-invasive and invasive ventilation for respiratory emergencies.', image: 'assets/specialties/Critical Care & Emergency/Advanced-Ventilatory-Support.png' },
    //     { title: 'Temporary Pacemaker & Cardiac Emergency', description: 'Emergency cardiac pacing and acute cardiac intervention for life-threatening arrhythmias.', image: 'assets/specialties/Critical Care & Emergency/Temporary-Pacemaker.png' },
    //     { title: 'ECMO (Extra Corporeal Membrane Oxygenation)', description: 'Advanced life support for severe cardiac and respiratory conditions.', image: 'assets/specialties/Critical Care & Emergency/ECMO.png' },
    //     { title: 'Difficult Airway Management', description: 'Expert handling of challenging airway scenarios for safe ventilation.', image: 'assets/specialties/Critical Care & Emergency/Difficult-Airway-Management.png' },
    //     { title: 'Positive & Negative Pressure Isolation Rooms', description: 'Infection control zones to manage high-risk infectious cases.', image: 'assets/specialties/Critical Care & Emergency/Positive & Negative-Pressure-Isolation-Rooms.png' },
    //     { title: 'Pre & Post-Procedure Monitoring', description: 'Continuous observation for patients before and after emergency interventions.', image: 'assets/specialties/Critical Care & Emergency/Pre & Post-Procedure-Monitoring.png' },
    //     { title: 'Ultrasound in ICU (POCUS)', description: 'Bedside ultrasound diagnostics for rapid assessment.', image: 'assets/specialties/Critical Care & Emergency/Ultrasound-in-ICU.png' },
    //     { title: 'Special Minor Procedure Room', description: 'Dedicated for immediate surgical and therapeutic procedures.', image: 'assets/specialties/Critical Care & Emergency/Special-Mino- Procedure-Room.png' },
    //     { title: 'Research in Critical Care', description: 'Ongoing innovation and research for improving critical outcomes.', image: 'assets/specialties/Critical Care & Emergency/Research in-Critical-Care.png' }
    //   ],
    //   facilities: [
    //     'State-of-the-art ICU & Emergency infrastructure',
    //     'Advanced monitors and ventilators',
    //     'Central oxygen/vacuum lines, minor procedure room',
    //     'Pre- and post-treatment patient areas',
    //     'Dedicated isolation rooms with advanced filtration',
    //     'ICU-equipped ambulances (ICUs on Wheels)',
    //     'On-site multidisciplinary medical team 24/7'
    //   ],
    //   specialists: [
    //     { id: 'shyam-prasad', name: 'Dr. Shyam Prasad', qualification: 'MBBS, MD MEM', experience: '14+ Years', image: 'assets/Doc-Front/Emergency - Dr. Shyam Prasad.png', specialization: 'Emergency Medicine' },
    //     { id: 'fuzail-sarwer', name: 'Dr. Fuzail Sarwer', qualification: 'MBBS, MD, PDCC', experience: '10+ Years', image: 'assets/Doc-Front/Anaesthesiologist - Dr. Fuzail Sarwar.png', specialization: 'Critical Care & ICU' }
    //   ],
    //   successStories: [
    //     { title: 'Stroke Survival & ICU Recovery', patient: 'Mr. Gupta, 62', story: 'Received rapid neurocritical care after a major stroke, including mechanical ventilation and advanced monitoring. Recovered mobility and speech with ICU and post-care rehabilitation.', outcome: 'Regained independence after 3 months.' },
    //     { title: 'Cardiac Emergency Saved', patient: 'Mr. Rajesh, 59', story: 'Rushed in with a heart attack, treatment began in ambulance and continued in ICU. Fully recovered after prompt intervention and ICU support.', outcome: 'Discharged in stable condition.' }
    //   ],
    //   faqs: [
    //     { question: 'What types of emergencies are managed?', answer: 'All acute medical, trauma, cardiac, neurological, respiratory and multi-organ system emergencies are managed 24/7.' },
    //     { question: 'How are ambulance services equipped?', answer: 'Ambulances at Raj Hospitals function as ICUs on Wheels with full life support systems and rapid response.' },
    //     { question: 'Is the ICU and Emergency Unit available 24/7?', answer: 'Yes, all critical and emergency services have round-the-clock consultants and staff.' },
    //     { question: 'How is infection controlled in critical areas?', answer: 'Strict protocols, filtered isolation rooms and monitored zones ensure safety.' }
    //   ],
    //   contactInfo: {
    //     helpline: '+91 97714 88888',
    //     appointmentLink: 'https://rajhospitals.com/contact.php',
    //     address: 'Raj Hospitals, Ranchi, Jharkhand'
    //   }
    // },

    'critical-care-': {
      id: 'critical-care',
      title: 'Critical Care',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Critical Care & Emergency/Critical-Care & Emergency.png',
      shortDescription: 'Advanced ICU services for medical, surgical, cardiac, and neuro-critical patients.',
      longDescription: 'Raj Hospitals’ Critical Care Department provides intensive, round-the-clock monitoring and management for patients with life-threatening medical and surgical conditions. With modern ICUs, specialized life-support technology, and an expert multidisciplinary team, we deliver world-class care to critically ill patients.',
      services: [
        { title: 'Cardiac & Neuro ICU', description: 'Expert cardiac and neurological intensive care with advanced monitoring systems.', image: 'assets/specialties/Critical Care & Emergency/Cardiac & Neuro ICU.png' },
        { title: 'Medical & Surgical ICU', description: '24/7 support for complex medical and surgical cases.', image: 'assets/specialties/Critical Care & Emergency/Medical & Surgical-ICU.png' },
        { title: 'Neuro Critical Care', description: 'Comprehensive neurocritical management for stroke and head injuries.', image: 'assets/specialties/Critical Care & Emergency/Neuro-Care.png' },
        { title: 'Haemodialysis', description: 'Critical renal support for acute or chronic kidney injuries.', image: 'assets/specialties/Critical Care & Emergency/Haemodialysis.png' },
        { title: 'Advanced Ventilatory Support', description: 'Invasive and non-invasive ventilation for respiratory distress.', image: 'assets/specialties/Critical Care & Emergency/Advanced-Ventilatory-Support.png' },
        { title: 'Temporary Pacemaker & Cardiac Support', description: 'Emergency pacing and cardiac stabilization procedures.', image: 'assets/specialties/Critical Care & Emergency/Temporary-Pacemaker.png' },
        { title: 'ECMO (Extra Corporeal Membrane Oxygenation)', description: 'Life-saving advanced circulatory and respiratory support.', image: 'assets/specialties/Critical Care & Emergency/ECMO.png' },
        { title: 'Difficult Airway Management', description: 'Expert critical airway handling for ventilated patients.', image: 'assets/specialties/Critical Care & Emergency/Difficult-Airway-Management.png' },
        { title: 'Isolation Rooms', description: 'Positive and negative pressure rooms for infection-controlled therapy.', image: 'assets/specialties/Critical Care & Emergency/Positive & Negative-Pressure-Isolation-Rooms.png' },
        { title: 'ICU Ultrasound (POCUS)', description: 'Bedside ultrasound diagnostics and interventions.', image: 'assets/specialties/Critical Care & Emergency/Ultrasound-in-ICU.png' },
        { title: 'Pre & Post-Procedure Monitoring', description: 'Continuous patient observation before and after interventions.', image: 'assets/specialties/Critical Care & Emergency/Pre & Post-Procedure-Monitoring.png' },
        { title: 'Research in Critical Care', description: 'Ongoing innovation in life support and intensive monitoring.', image: 'assets/specialties/Critical Care & Emergency/Research in-Critical-Care.png' }
      ],
      facilities: [
        'Dedicated medical, surgical, neuro & cardiac ICUs',
        'Ventilators, dialysis units, and monitoring beds',
        'Infection-controlled isolation rooms',
        'Central oxygen and vacuum lines',
        'Round-the-clock intensivist availability'
      ],
      specialists:
        [
          {
            id: 'mohib-ahmed',
            name: 'Dr. Mohib Ahmed',
            qualification: 'MBBS, MD, IDCCM, EDM',
            experience: '16+ Years',
            image: 'assets/Doc-Front/Anaesthesiologist - Dr. Mohib Ahmed.png',
            specialization: 'Critical Care, Neuro Critical Care, Research, Airway Management, Ultrasound in ICU (POCUS)'
          },
          //new added
          {
            id: 'rahul-roy',
            name: 'Dr. Rahul Roy',
            qualification: 'MBBS, D.A, IDCCM, MBA',
            experience: '20+ Years',
            image: 'assets/Doc-Side/Dr Rahul Roy(CCT).webp',
            specialization: 'Critical Care, Anesthesia, Pain Management, End of Life Care'
          },

          {
            id: 'fuzail-sarwer',
            name: 'Dr. Fuzail Sarwer',
            qualification: 'MBBS, MD, PDCC',
            experience: '10+ Years',
            image: 'assets/Doc-Front/Anaesthesiologist - Dr. Fuzail Sarwar.png',
            specialization: 'Critical Care & ICU'
          }
        ],
      successStories: [
        { title: 'Stroke Survival & ICU Recovery', patient: 'Mr. Gupta, 62', story: 'Recovered with neurocritical care, ventilatory support, and comprehensive ICU rehabilitation.', outcome: 'Regained independence after 3 months.' }
      ],
      faqs: [
        { question: 'What conditions are treated in Critical Care?', answer: 'Critically ill patients with cardiac, neurological, respiratory, or post-surgical complications receive 24/7 care.' },
        { question: 'Are isolation rooms available?', answer: 'Yes, both positive and negative pressure isolation rooms are provided for infection control.' }
      ],
      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    'emergency': {
      id: 'emergency',
      title: 'Emergency',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Critical Care & Emergency/Critical-Care & Emergency.png',
      shortDescription: '24/7 Emergency & Trauma Care with rapid response systems.',
      longDescription: 'The Emergency Medicine Department at Raj Hospitals ensures immediate and effective care for all acute medical and trauma cases. Our experienced emergency consultants, trained paramedics, and ICUs on Wheels team guarantee lifesaving interventions within the golden hour.',
      services: [
        { title: '24 × 7 Emergency Consultant', description: 'Immediate response to medical, trauma, cardiac, and accident emergencies.', image: 'assets/specialties/Critical Care & Emergency/24-7consultant.png' },
        { title: 'Emergency, Trauma & Acute Care', description: 'Swift management of accidents, trauma, and acute medical conditions.', image: 'assets/specialties/Critical Care & Emergency/Trauma.png' },
        { title: 'ICU On Wheels', description: 'Fully equipped ambulances start advanced life support during transfer.', image: 'assets/specialties/Critical Care & Emergency/ICU-On-Wheels.png' },
        { title: 'Dedicated Emergency Unit (10 Beds)', description: 'Multi-bed setup to handle concurrent emergencies.', image: 'assets/specialties/Critical Care & Emergency/bed.png' },
        { title: 'Special Minor Procedure Room', description: 'Space for emergency surgical and stabilizing procedures.', image: 'assets/specialties/Critical Care & Emergency/Special-Mino- Procedure-Room.png' },
        { title: 'Multidisciplinary Emergency Team', description: 'Emergency physicians, surgeons, cardiologists, and orthopaedists working in coordination.', image: 'assets/specialties/Critical Care & Emergency/Multidisciplinary.png' }
      ],
      facilities: [
        '24/7 staffed emergency bay',
        'Dedicated triage and resuscitation zones',
        'On-site trauma and cardiac response',
        'Rapid diagnostics and imaging access',
        'Ambulance dispatch for critical transfers'
      ],
      specialists:
        [
          { id: 'shyam-prasad', name: 'Dr. Shyam Prasad', qualification: 'MBBS, MD MEM', experience: '12+ Years', image: 'assets/Doc-Front/Emergency - Dr. Shyam Prasad.png', specialization: 'Emergency Medicine' }
        ],
      successStories: [
        { title: 'Cardiac Emergency Saved', patient: 'Mr. Rajesh, 59', story: 'Immediate intervention started en route in ambulance and continued in ICU.', outcome: 'Discharged in stable condition.' }
      ],
      faqs: [
        { question: 'Is the emergency unit operational 24/7?', answer: 'Yes, all emergency services are available round the clock.' },
        { question: 'How are trauma cases handled?', answer: 'A trauma protocol is activated instantly involving emergency, surgical, and critical care teams.' }
      ],
      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },


    // minimal access surgery
    'minimal-access-surgery': {
      id: 'minimal-access-surgery',
      title: 'Minimal Access Surgery',
      icon: FiUser,
      bannerImage: 'assets/specialties/Minimal Access Surgery/Minimal-Access-Surgery.png',
      shortDescription: 'Advanced laparoscopic, laser, and general surgery with highly skilled surgeons and comprehensive care in Ranchi.',
      longDescription: 'The Department of General and Minimally Invasive Surgery at Raj Hospitals offers complete evaluation, diagnosis, and surgical treatment for a wide range of disorders. Our surgeons provide state-of-the-art patient care, using minimally invasive and laser techniques for improved recovery and outcomes. We specialize in abdominal, breast, skin, hernia, and soft tissue surgeries, delivering personalized care and excellent results. ICU and emergency services ensure patients receive the highest level of surgical care, with a multidisciplinary team approach.',

      services: [
        { title: 'Laparoscopic & Laser Surgery', description: 'Gall Bladder, Hernia, Appendix & advanced general surgery using minimal access and laser technology.', image: 'assets/specialties/Minimal Access Surgery/Laparoscopic & Laser-Surgery.png' },
        { title: 'Thoracoscopic (Lung) Surgeries', description: 'Minimally invasive surgical management of chest and lung conditions.', image: 'assets/specialties/Minimal Access Surgery/Thoracoscopic.png' },
        { title: 'Bariatric (Weight Loss) & GI Surgeries', description: 'Weight-loss and gastrointestinal surgeries for obesity and digestive disorders.', image: 'assets/specialties/Minimal Access Surgery/Bariatric.png' },
        { title: 'Laparoscopy Surgery', description: 'Keyhole procedures for faster recovery, less scarring and better results.', image: 'assets/specialties/Minimal Access Surgery/Laparoscopy-Surgery.png' },
        { title: 'Laser Surgery For Proctology', description: 'Painless, advanced treatment for fissures, fistulas, piles, and hemorrhoids using laser.', image: 'assets/specialties/Minimal Access Surgery/Laser-Surgery-For-Proctology.png' },
        { title: 'Diagnostic and Therapeutic Endoscopy', description: 'Procedures for both diagnosis and treatment using advanced endoscopic techniques.', image: 'assets/specialties/Minimal Access Surgery/Diagnostic-and-Therapeutic-Endoscopy.png' }
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
          id: 'ashish-modi',
          name: 'Dr. Ashish Kumar Modi',
          qualification: 'MBBS, MS',
          experience: '15+ Years',
          image: '/assets/Doc-Side/General Surgeon - Dr. Ashish Kumar Modi.webp',
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

    //nephrology
    nephrology: {
      id: 'nephrology',
      title: 'Nephrology',
      icon: FiDroplet,
      bannerImage: 'assets/specialties/Nephrology/Nephrology.png',
      shortDescription: 'Best kidney care and dialysis services in Ranchi with advanced equipment and top nephrologists.',
      longDescription: 'The Department of Nephrology & Dialysis Services at Raj Hospitals is among the most advanced in the state, providing evaluation, diagnosis, and comprehensive treatment for hypertension, kidney disease, dialysis, and renal disorders. Our nephrology experts serve adults and children, offering diagnostic, management, operative services, and chronic dialysis therapy for acute kidney failure. Dedicated to prevention and early diagnosis, we deliver personalized, compassionate care for every kidney-related condition.',
      services: [
        { title: 'Hypertensive & Diabetic Kidney Disease', description: 'Specialized management and treatment of kidney disorders caused by hypertension and diabetes.', image: 'assets/specialties/Nephrology/Hypertensive & Diabetic-Kidney-Disease.png' },
        { title: 'Hemodialysis', description: 'Regular and emergency dialysis treatments using state-of-the-art dialysis machines.', image: 'assets/specialties/Nephrology/Hemodialysis.png' },
        { title: 'Peritoneal Dialysis', description: 'Continuous ambulatory peritoneal dialysis (CAPD) for chronic kidney disease patients.', image: 'assets/specialties/Nephrology/Peritoneal-Dialysis.png' },
        { title: 'Acute Kidney Injury & CKD(Chronic Kidney Disease)', description: 'Expert care for acute kidney injury and chronic kidney disease, including assessment, management, and rehabilitation.', image: 'assets/specialties/Nephrology/Acute-Kidney Injury & CKD.png' },
        { title: 'CRRT (Continuous Renal Replacement Therapy)', description: 'Advanced therapy for critically ill patients requiring continuous renal support.', image: 'assets/specialties/Nephrology/CRRT.png' },
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
        'State-of-the-art dialysis machines for adult',
        'Continuous monitoring and expert nursing care',
        'Advanced diagnostic lab services',
        'Kidney transplant preparation and post-care support',
        'Personalized dietary and lifestyle counseling'
      ],
      specialists: [
        {
          id: 'avinash-dubey',
          name: 'Dr. Avinash Kumar Dubey',
          qualification: 'MBBS, MD, DM',
          experience: '15+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Nephrologist - Dr. Avinas- Kumar-Dubey.png',
          specialization: 'Nephrology & Dialysis'
        },
        // {

        //   id: '602',
        //   name: 'Dr. Yogendra Rai',
        //   qualification: '',
        //   experience: '',
        //   image: '/assets/specialties/Neurology/dr-yogendra-rai.jpg',
        //   specialization: 'Neurology'

        // }

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
      bannerImage: 'assets/specialties/Neuroscience/Neurological-Diagnostics.png',
      shortDescription: 'Best Neurologist Hospital in Ranchi offering comprehensive brain and spine care by expert neuro physicians.',
      longDescription:
        'The Department of Neurosciences at Raj Hospitals provides comprehensive and multidisciplinary care for brain and spine disorders. Our team of expert neurologists, neurosurgeons, and interventional neuro-radiologists utilize the latest technologies to diagnose and treat a wide range of neurological conditions. We provide integrated care for stroke, epilepsy, movement disorders, neuro infections, brain tumors, spinal injuries, and more with specialized emergency and surgical services.',
      services: [
        { title: 'Autoimmune & Demyelinating Disorders', description: 'Care for Multiple Sclerosis, ADEM, NMOSD & MOGAD.', image: 'assets/specialties/Neurology/Autoimmune & Demyelinating -isorders.png' },
        { title: 'Awake Brain Surgery', description: 'State-of-the-art awake craniotomy for tumor and functional brain surgery.', image: 'assets/specialties/Neurology/Awake-Brain-Surgery.png' },
        { title: 'Backache & Stroke', description: 'Comprehensive management of back pain and stroke complications.', image: 'assets/specialties/Neurology/Backache & Stroke.png' },
        { title: 'Brain Stroke Unit & Seizures', description: 'Specialized stroke unit with continuous monitoring and seizure control.', image: 'assets/specialties/Neurology/Brai- Stroke-Unit & Seizures.png' },
        { title: 'Brain & Spine Tumor Surgery', description: 'Advanced neurosurgical removal and care for tumors.', image: 'assets/specialties/Neurology/Brain & Spine-Tumor-Surgery.png' },
        { title: 'Dementias', description: 'Evaluation and treatment of Alzheimer’s disease, vascular dementia, and other dementias.', image: 'assets/specialties/Neurology/Dementias.png' },
        { title: 'Emergency & Spine', description: 'Urgent surgical care for traumatic neurologic injuries.', image: 'assets/specialties/Neurology/Emergency & Spine.png' },
        { title: 'Epilepsy', description: 'Diagnosis, medical management, and surgical options for seizure disorders.', image: 'assets/specialties/Neurology/Epilepsy.png' },
        { title: 'Headache', description: 'Diagnosis and treatment of chronic and severe headaches.', image: 'assets/specialties/Neurology/Headache.png' },
        { title: 'Head Injuries', description: 'Emergency and rehabilitative care for traumatic brain injuries.', image: 'assets/specialties/Neurology/Head-Injuries.png' },
        { title: 'Motor Neuron Disease', description: 'Comprehensive care and symptom management.', image: 'assets/specialties/Neurology/Motor-Neuron-Disease.png' },
        { title: 'Movement Disorders', description: 'Extensive care for complex movement disorders.', image: 'assets/specialties/Neurology/Movement-Disorders.png' },
        { title: 'Myasthenia Gravis', description: 'Diagnosis and treatment of this neuromuscular condition.', image: 'assets/specialties/Neurology/Myasthenia-Gravis.png' },
        { title: 'Myopathies', description: 'Diagnosis and treatment of muscle disorders.', image: 'assets/specialties/Neurology/Myopathies.png' },
        { title: 'Neuro Infectious Disorders', description: 'Treatment for meningitis, encephalitis, CNS tuberculosis, Pott’s spine, etc.', image: 'assets/specialties/Neurology/Neur- Infectious-Disorders.png' },
        { title: 'Neurology', description: 'Comprehensive neurological evaluations and treatments.', image: 'assets/specialties/Neurology/Neurology.png' },
        { title: 'Neuropathies', description: 'Management of GBS, CIDP and other peripheral nerve disorders.', image: 'assets/specialties/Neurology/Neuropathies.png' },
        { title: 'Parkinson’s Disease and Atypical Parkinsonism', description: 'Advanced management of Parkinson’s and related movement disorders.', image: 'assets/specialties/Neurology/parkin.png' },
        { title: 'Pediatric Brain Surgery', description: 'Expert neurosurgery for pediatric neurological conditions.', image: 'assets/specialties/Neurology/Pediatric-Brain-Surgery.png' },
        { title: 'Spinal Cord Injury', description: 'Expert treatment and surgeries for spine trauma and disorders.', image: 'assets/specialties/Neurology/Spinal-Cor- Injury.png' },
        { title: 'Stereotactic & Tumor Surgeries', description: 'Minimally invasive procedures for brain tumors and neurological lesions.', image: 'assets/specialties/Neurology/stereotactic & tumor-surgeries.png' },
        { title: 'Stroke', description: 'Comprehensive care and rehabilitation for all kinds of stroke.', image: 'assets/specialties/Neurology/Stroke.png' },
        { title: 'Trauma, Tumor & TB Surgeries', description: 'Specialized surgical interventions for neurological trauma and tubercular involvement.', image: 'assets/specialties/Neurology/Trauma,-Tumor & TB Surgeries.png' }
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
          id: 'vivek-raj',
          name: 'Dr. Vivek Raj',
          qualification: 'MBBS, MS, MCh',
          experience: '18+ Years',
          image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Neurosurgeon - Dr. Vivek-Raj.png',
          specialization: 'Neurology & Neurosurgery'
        },
        // {
        //   id: 'vivek-raj-2',
        //   name: 'Dr. Vivek Raj',
        //   qualification: 'MBBS, ECFMG, DNB',
        //   experience: '15+ Years',
        //   image: '/assets/specialties/Neurosciences/dr-vivek-raj.jpg',
        //   specialization: 'Neurology'
        // },
        {
          id: 'ahmad-hussain',
          name: 'Dr. Ahmad Hussain',
          qualification: 'MBBS, MD, DrNB',
          experience: '5+ Years',
          image: 'assets/Doc-Side/Dr Ahmad Hussain.webp',
          specialization: 'Neurology'
        },
        // add new profile 

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

    'oncology-cancer-care': {
      id: 'oncology-cancer-care',
      title: 'Oncology',
      icon: FiAward,
      bannerImage: 'assets/specialties/Oncology/Oncology.png',
      shortDescription: 'World-class cancer care and radiation oncology services in Ranchi with multi-disciplinary, personalized treatments.',
      longDescription: 'The Department of Oncology at Raj Hospitals is committed to providing comprehensive cancer care, including screening, diagnosis, staging, treatment, and management of various cancer types. We offer surgical oncology, chemotherapy, radiation therapy, and supportive care for all solid organ malignancies including head & neck, breast, GI, gynae, and uro oncology. Our experienced oncologists use advanced diagnostic tools and individualized treatment protocols to ensure the best outcomes.',

      services: [
        { title: 'Medical Oncology & Chemotherapy', description: 'Safe administration of chemotherapy and advanced drug therapies for various cancers.', image: 'assets/specialties/Oncology/Medical-Oncology.jpg' },
        { title: 'Surgical Oncology', description: 'Expert surgeries for cancer including head & neck, breast, lung, abdominal cancers, and more.', image: 'assets/specialties/Oncology/Surgical-Oncology.jpg' },
        { title: 'Head & Neck Cancer Treatment', description: 'Specialized surgical and non-surgical treatments targeting cancers of the head and neck region.', image: '/assets/specialties/Oncology/Head & Neck-Cancer.jpg' },
        { title: 'Breast Cancer Treatment', description: 'Comprehensive care involving breast conservative surgery, reconstruction, and medical therapies.', image: '/assets/specialties/Oncology/breast-cancer.jpg' },
        { title: 'Gynaecologic Oncology', description: 'Treatment for cancers of female reproductive organs including radical hysterectomy and ovarian surgery.', image: '/assets/specialties/Oncology/Gynaecologic-Oncology.jpg' }
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
          id: 'pk-raina',
          name: 'Dr. P K Raina',
          qualification: 'MBBS, MS',
          experience: '20+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Oncologist - Dr. P-K-Raina.png',
          specialization: 'Oncology & Surgical Oncology'
        },
        {
          id: 'anamika-kumari',
          name: 'Dr. Anamika Kumari',
          qualification: 'MBBS, DNB (Radiotherapy)',
          experience: '11+ Years',
          image: 'assets/Doc-Side/Dr Anamika Onco photo.webp',
          specialization: 'Radiotherapy, Head & Neck Oncology, Breast Oncology'
        },

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
    'orthopaedics-and-joint-replacement': {
      id: 'orthopaedics-and-joint-replacement',
      title: 'Orthopaedics & Joint Replacement',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Orthopaedics/Orthopaedics.jpg',
      shortDescription: 'Comprehensive orthopaedic and joint replacement care with advanced surgical techniques in Ranchi.',
      longDescription: 'The Department of Orthopaedics & Joint Replacement at Raj Hospitals provides expert treatment for musculoskeletal conditions including joint pain, trauma, sports injuries, and deformities. Our specialised surgeons perform minimally invasive surgeries, joint replacements, arthroscopy, and complex trauma management using latest technology for optimal patient outcomes and speedy recovery. We also offer pediatric orthopaedics and comprehensive rehabilitation services.',

      services: [
        {
          title: 'Spine Osteoporosis',
          description: 'Comprehensive diagnosis and treatment for spine osteoporosis to prevent fractures and maintain bone strength.',
          image: 'assets/specialties/Orthopaedics/Spine-Osteoporosis.jpg'
        },
        {
          title: 'Arthritis',
          description: 'Expert care and advanced therapies for arthritis to reduce pain, improve joint function, and enhance quality of life.',
          image: 'assets/specialties/Orthopaedics/Arthritis.jpg'
        },

        { title: 'Joint Replacements – Knee, Hip, Shoulder, Elbow & Ankle', description: 'Advanced joint replacement surgeries for multiple joints ensuring mobility and pain relief.', image: 'assets/specialties/Orthopaedics/Joint-Replacements.jpg' },
        { title: 'Bone Deformity and CTEV Correction', description: 'Surgical correction of bone deformities including clubfoot (CTEV).', image: 'assets/specialties/Orthopaedics/Bone Deformity.jpg' },
        { title: 'Trauma Surgery and Geriatric Care', description: 'Emergency trauma management and specialized geriatric orthopaedic care.', image: 'assets/specialties/Orthopaedics/Trauma-Surgery.jpg' },
        { title: 'Complex Trauma and Multiple Ligament Injuries', description: 'Comprehensive care for severe trauma and ligament reconstructions like ACL, PCL.', image: 'assets/specialties/Orthopaedics/Complex-Trauma.jpg' },
        { title: 'Arthroscopy and Sports Injury', description: 'Minimally invasive procedures and expert care for sports-related injuries.', image: 'assets/specialties/Orthopaedics/Arthroscopy-sports.jpg' },
        { title: 'Arthritis and Autoimmune Disorders', description: 'Treatment for osteoarthritis, rheumatoid arthritis, and associated autoimmune issues.', image: 'assets/specialties/Orthopaedics/arthritis.jpg' },
        { title: 'Paediatric Orthopaedics', description: 'Specialized treatment for children including deformity corrections and injury management.', image: 'assets/specialties/Orthopaedics/Paediatric-Orthopaedics.jpg' },
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
        // new profile added
        {
          id: 'deepak-verma',
          name: 'Dr. Deepak Verma',
          qualification: 'MBBS, MS (Ortho)',
          experience: '25+ Years',
          image: '/assets/Doc-Side/Orthopedic Surgeon - Dr. Deepak Verma.webp',
          specialization: 'Fractures, Difficult Trauma, Total Hip Replacement, Total Knee Replacement'
        },

        {
          id: 'Mozammil-pheroz',
          name: 'Dr Mozammil Pheroz',
          qualification: 'MBBS, MS (Orthopaedics), DNB',
          experience: '11+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Muzammil-Feroz.png',
          specialization: 'Orthopaedics & Joint Replacement Surgery'
        },
        // new profile added
        {
          id: 'ujjwal-sinha',
          name: 'Dr. Ujjwal Sinha',
          qualification: 'MBBS, MS, DNB (Ortho), MNAMS, Fellowship in Sports Medicine',
          experience: '15+ Years',
          image: '/assets/Doc-Side/ujjwal_sinha_ortho.webp',
          specialization: 'Joint Replacement, Arthroscopy, Sports Medicine, Complex Trauma, Pediatric Orthopaedics, Deformity Correction, Polytrauma'
        },
        {
          id: 'abhishek-roy',
          name: 'Dr. Abhishek Roy',
          qualification: 'MBBS, MS, MAMC, FIJR, FIASM',
          experience: '6+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Abhishek-Roy.png',
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
      bannerImage: 'assets/specialties/Pulmonology/Pulmonology.png',
      shortDescription: 'High-quality pulmonology care in Ranchi by expert pulmonologists with comprehensive lung and respiratory treatment.',
      longDescription: 'Raj Hospital in Ranchi is proud to offer specialized pulmonology services to patients suffering from lung and respiratory system conditions. Our experienced pulmonologists provide personalized care for diseases such as asthma, COPD, pneumonia, tuberculosis, sleep disorders, and more. Equipped with advanced diagnostic and treatment facilities, we ensure accurate diagnosis and effective management tailored to every patient’s needs.',

      services: [
        { title: 'Asthma & COPD', description: 'Comprehensive management of asthma, chronic obstructive pulmonary disease, and related lung conditions.', image: 'assets/specialties/Pulmonology/Asthma & COPD.png' },
        { title: 'Chronic Bronchitis', description: 'Diagnosis and treatment of chronic bronchitis to improve respiratory function.', image: 'assets/specialties/Pulmonology/Chronic-Bronchitis.png' },
        { title: 'Sleep Disorders', description: 'Expert care for sleep-related breathing disorders including obstructive sleep apnea.', image: 'assets/specialties/Pulmonology/Sleep-Disorders.png' },
        { title: 'All Lungs & Chest Ailments', description: 'Treatment of various lung and chest diseases including infections and inflammatory conditions.', image: 'assets/specialties/Pulmonology/Lungs & Chest-Ailments.png' },
        { title: 'Allergology & Allergies', description: 'Diagnosis and management of respiratory allergies and immunologic conditions.', image: 'assets/specialties/Pulmonology/Allergology.png' },
        { title: 'Asthma & Lung Disease Treatment', description: 'Tailored treatments to manage asthma and a variety of lung diseases.', image: 'assets/specialties/Pulmonology/Asthma & Lung-Disease.png' },
        { title: 'Obstructive Sleep Apnea & Other Sleep Disorders', description: 'Diagnosis and treatment options including CPAP therapy for sleep apnea.', image: 'assets/specialties/Pulmonology/Obstructive-Sleep-Apnea.png' },
        { title: 'Tuberculosis & Bronchitis', description: 'Comprehensive care for tuberculosis, bronchitis, and other chronic lung infections.', image: 'assets/specialties/Pulmonology/Tuberculosis & Bronchitis.png' },
        { title: 'Pneumonia & COVID Care', description: 'Treatment of pneumonia due to lung inflammation, including COVID-19 management.', image: 'assets/specialties/Pulmonology/Pneumonia & COVID Care.png' },
        { title: 'Pulmonary Rehabilitation', description: 'Rehabilitation for COPD, interstitial lung disease (ILD), and recovery from long COVID.', image: 'assets/specialties/Pulmonology/Pulmonary-Rehabilitation.png' },
        { title: 'Pulmonary Function Test', description: 'Advanced tests to assess lung function and capacity.', image: 'assets/specialties/Pulmonology/Pulmonary-Function-Test.png' }
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
          id: 'suprova-chakraborty',
          name: 'Dr. Suprova Chakraborty',
          qualification: 'DNB',
          experience: '12+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Pulmonologist - Dr. Suprova-Chakraborty.png',
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

    'internal-medicine': {
      id: 'internal-medicine',
      title: 'Internal Medicine',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Internal Medicine//Internal Medicine/Internal-Medicine.png',
      shortDescription: 'Best Internal Medicine Hospital in Ranchi with expert doctors for diabetes, heart, chest, gastro & chronic diseases.',
      longDescription: 'Raj Hospitals is recognized as one of the best Internal Medicine hospitals in Ranchi, Jharkhand. Our department provides advanced diagnostic services, preventive care, and treatment for lifestyle and chronic diseases. With a team of highly experienced physicians and state-of-the-art technology, we specialize in diabetes care, heart problems, chest and lung diseases, gastroenterology, infectious diseases, and more. We focus on holistic patient wellness with preventive counselling, lifestyle guidance, and compassionate care for both acute and long-term illnesses.',

      services: [
        {
          title: 'Medicine',
          description: 'Comprehensive Internal Medicine care in Ranchi for acute and chronic illnesses with expert diagnosis and treatment.',
          image: 'assets/specialties/Internal Medicine/Internal Medicine/Medicine.png'
        },
        {
          title: 'Heart Problems',
          description: 'Best doctors in Ranchi for diagnosis and management of heart diseases, hypertension, and cardiovascular conditions.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Heart-Problems.png'
        },
        {
          title: 'Chest Related Issues',
          description: 'Expert care in Ranchi for chest pain, lung infections, tuberculosis, and thoracic conditions.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Chest-Related-Issues.png'
        },
        {
          title: 'Pulmonary Medicine',
          description: 'Specialized treatment in Ranchi for asthma, COPD, allergies, and other lung diseases by pulmonary specialists.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Pulmonary-Medicine.png'
        },
        {
          title: 'Gastroenterology',
          description: 'Advanced care for digestive system disorders including acidity, ulcers, liver and intestinal diseases in Ranchi.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Gastroenterology.png'
        },
        {
          title: 'Cardiology',
          description: 'Expert cardiologists in Ranchi providing diagnosis, preventive care, and treatment for heart problems.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Cardiology.png'
        },
        {
          title: 'Infectious Diseases',
          description: 'Comprehensive care for viral, bacterial, and parasitic infections with infection control measures in Ranchi.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Infectious-Diseases.png'
        },
        {
          title: 'Diabetes & Endocrinology',
          description: 'Best diabetes hospital in Ranchi with specialized endocrinologists for diabetes, thyroid, and hormonal disorders.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Diabetes & Endocrinology.png'
        },
        {
          title: 'Non-Communicable Diseases',
          description: 'Management of lifestyle diseases including obesity, high blood pressure, and high cholesterol in Ranchi.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Non-Communicable-Diseases.png'
        },
        {
          title: 'Chronic Medical Conditions',
          description: 'Long-term management of chronic conditions such as diabetes, hypertension, arthritis, and kidney diseases in Ranchi.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Chronic-Medical-Conditions.png'
        },
        {
          title: 'Master Health Checkup',
          description: 'Affordable master health checkup packages in Ranchi for early detection and preventive healthcare.',
          image: '/assets/specialties/Internal Medicine/Internal Medicine/Master-Health-Checkup.png'
        }
      ],

      facilities: [
        'State-of-the-art diagnostic and imaging facilities in Ranchi',
        '24x7 modular and well-equipped Emergency unit',
        'Preventive and executive health check-up packages',
        'Dedicated lifestyle and chronic disease management programs',
        'Specialized treatment for diabetes, hypertension, and cardiac care',
        'Comprehensive laboratory and infection control services',
        'Integrated care with multidisciplinary specialists',
        'Emergency services for trauma and urgent medical care'
      ],

      specialists: [
        {
          id: 'ak-agarwal',
          name: 'Dr. A K Agarwal',
          qualification: 'MBBS, M.D (Medicine) P.M.C.H',
          experience: '20+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Agrawal.png',
          specialization: 'Internal Medicine & Diabetes Specialist in Ranchi'
        },
        {
          id: 'ak-sinha',
          name: 'Dr. A K Sinha',
          qualification: 'MBBS, MD',
          experience: '25+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Sinha.png',
          specialization: 'General Medicine & Preventive Care'
        },
        {
          id: 'neelam-kumari',
          name: 'Dr. Neelam Kumari',
          qualification: 'MBBS, MD',
          experience: '15+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/General Physician - Dr. Neelam-Kumari.png',
          specialization: 'Internal Medicine & Lifestyle Diseases'
        },
        {
          id: 'sony',
          name: 'Dr. Sony',
          qualification: 'MBBS, DNB (Anaesthesiology), PDCC (IAPC), CCEPC',
          experience: '4+ Years',
          image: 'assets/Doc-Side/Dr Sony (Interventional Pain Medicine).webp', // No image provided
          specialization: 'Interventional Pain Medicine, Regenerative Therapy, Spine Interventions, Chronic Pain Management'
        }
      ],

      successStories: [
        {
          title: 'Successful Diabetes Management in Ranchi',
          patient: 'Mr. Amit',
          story: 'My father was severely diabetic and dependent on insulin. At Raj Hospitals Ranchi, the best diabetologists managed his sugar levels with advanced treatment and lifestyle changes.',
          outcome: 'Sugar levels under control with reduced medicines and better quality of life.'
        },
        {
          title: 'Hypertension Controlled with Expert Care',
          patient: 'Mr. Ravindra',
          story: 'I struggled with uncontrolled blood pressure for years. At Raj Hospitals Ranchi, doctors gave personalized treatment and effective counselling.',
          outcome: 'Stable blood pressure, improved health, and lifestyle guidance.'
        }
      ],

      faqs: [
        {
          question: 'Who is the best doctor for diabetes in Ranchi?',
          answer: 'Raj Hospitals has some of the best diabetologists in Ranchi with years of experience in treating diabetes, thyroid disorders, and hormonal problems.'
        },
        {
          question: 'Which is the best hospital in Ranchi for Internal Medicine?',
          answer: 'Raj Hospitals is among the top hospitals in Ranchi for Internal Medicine, offering advanced care for diabetes, heart problems, chest issues, infections, and chronic diseases.'
        },
        {
          question: 'What tests are included in a Master Health Checkup in Ranchi?',
          answer: 'Our Master Health Checkup includes blood tests, heart checkup (ECG), diabetes screening, liver and kidney tests, chest X-ray, and more depending on the package.'
        },
        {
          question: 'Can Raj Hospitals treat both acute and chronic diseases?',
          answer: 'Yes, our Internal Medicine specialists in Ranchi provide complete care for both short-term illnesses like infections and long-term conditions like hypertension, diabetes, and asthma.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },



    //urology
    urology: {
      id: 'urology',
      title: 'Urology',
      icon: FiZap,
      bannerImage: 'assets/specialties/Urology/Urology.png',
      shortDescription: 'Best Urology Hospital in Ranchi offering comprehensive urological care for adults and children with advanced medical technology.',
      longDescription: 'Raj Hospitals is committed to providing compassionate and timely care for disorders of the urinary system. Our skilled urologists offer diagnosis and treatment for a wide range of urological diseases including urinary tract infections, kidney stones, urologic cancers, infertility, and male reproductive issues. The department is equipped with cutting-edge technology delivering expert adult and pediatric urology care and minimally invasive surgical options.',

      services: [
        { title: 'Prostate Surgeries – TURP', description: 'Treatment for benign prostatic hyperplasia and related conditions using Transurethral Resection of Prostate.', image: 'assets/specialties/Urology/Prostate-Surgeries.png' },
        { title: 'Kidney Stone Surgeries', description: 'Minimally invasive and surgical removal of kidney and bladder stones.', image: '/assets/specialties/Urology/Kidney-Stone-Surgeries.png' },
        { title: 'Female Urology Surgeries', description: 'Treatment for female urinary tract conditions including incontinence and prolapse.', image: '/assets/specialties/Urology/Female-Urology-Surgeries.png' },
        { title: 'Infertility Treatment', description: 'Care and surgical management of male and female infertility in the reproductive age group.', image: '/assets/specialties/Urology/Infertility-Treatment.png' },
        { title: 'Lithotripsy', description: 'Non-invasive shock wave therapy for breaking down kidney stones.', image: '/assets/specialties/Urology/Lithotripsy.png' },
        { title: 'Robotic Surgery', description: 'Advanced robotic-assisted surgical techniques for precision and quicker recovery.', image: '/assets/specialties/Urology/Robotic-Surgery.png' },
        { title: 'Renal Transplantation', description: 'Comprehensive pre-op and post-op care and surgery for kidney transplant patients.', image: '/assets/specialties/Urology/Renal-Transplantation.png' },
        { title: 'Laparoscopic Surgery', description: 'Minimally invasive surgeries for urological conditions including tumors and reconstructions.', image: '/assets/specialties/Urology/Laparoscopi- Surgery.png' },
        { title: 'Pancreatic Disorders', description: 'Diagnosis and treatment of pancreatic and adjacent genitourinary disorders.', image: '/assets/specialties/Urology/Pancreatic-Disorders.png' },
        { title: 'Endourology', description: 'Minimally invasive procedures for urinary tract disorders via endoscopic techniques.', image: '/assets/specialties/Urology/Endourology.png' },
        { title: 'Uro-Oncology', description: 'Management of urological cancers including bladder, prostate, and renal tumors.', image: '/assets/specialties/Urology/Uro-Oncology.png' },
        { title: 'Male Infertility & Andrology', description: 'Evaluation and treatment of male reproductive health issues.', image: '/assets/specialties/Urology/Mal- Infertility.png' },
        { title: 'Vascular Access for Hemodialysis (AVF)', description: 'Creation and maintenance of arteriovenous fistulas for dialysis patients.', image: '/assets/specialties/Urology/Vascular-Access for-Hemodialysis.png' },
        { title: 'Reconstructive Urology', description: 'Surgical repair and reconstruction of genitourinary tract anomalies.', image: '/assets/specialties/Urology/Reconstructive-Urology.png' }
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
          id: 'sunil-kumar',
          name: 'Dr. Sunil Kumar',
          qualification: 'MBBS, MS (Gen Surgery), MCh (Urology)',
          experience: '18+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Sunil-Kumar.png',
          specialization: 'Urology & Surgical Oncology'
        },
        {
          id: 'ved-prakash',
          name: 'Dr. Ved Prakash Verma',
          qualification: 'MBBS, MS (Gen Surgery), MCh (Urology)',
          experience: '18+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Ved-Prakash-Verma.png',
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

    //obstetrics & gynecology
    'obstetrics-and-gynaecology': {
      id: 'obstetrics-and-gynaecology',
      title: 'Obstetrics & Gynaecology',
      icon: FiHeart,
      bannerImage: 'assets/specialties/Obstetrics & Gynaecology/Obstetrics & Gynaecology.png',
      shortDescription: 'Expert maternity and gynaecological care in Ranchi with advanced minimally invasive treatments.',
      longDescription: 'The Department of Obstetrics & Gynaecology at Raj Hospitals offers world-class care for women’s health, pregnancy, and reproductive needs. Our team of renowned gynaecologists, obstetricians, radiologists, and counsellors provide treatments ranging from routine care to advanced minimally invasive laparoscopic & robotic surgeries. We specialize in high-risk pregnancies, menstrual disorders, infertility solutions, and comprehensive maternity care. With state-of-the-art technology, dedicated maternity services, and compassionate care, we ensure safe deliveries, faster recovery, and holistic women’s wellness.',

      services: [
        { title: 'Complete Maternity Care', description: 'Holistic antenatal, delivery, and postnatal care ensuring the well-being of mother and child.', image: 'assets/specialties/Obstetrics & Gynaecology/Complete-Maternity-Care.png' },
        { title: 'High-Risk Pregnancies', description: 'Expert management for complicated and late pregnancies with advanced monitoring.', image: 'assets/specialties/Obstetrics & Gynaecology/High-Risk-Pregnancies.png' },
        { title: 'Gestational Diabetes Mellitus', description: 'Comprehensive care for pregnancy-related diabetes to prevent maternal and fetal complications.', image: 'assets/specialties/Obstetrics & Gynaecology/Gestational-Diabetes-Mellitus.png' },
        { title: 'Menstrual Abnormalities', description: 'Treatment for irregular, painful, or abnormal menstrual cycles with advanced diagnostic support.', image: 'assets/specialties/Obstetrics & Gynaecology/Menstrual-Abnormalities.png' },
        { title: 'Endometriosis, Fibroids & Ovarian Cysts', description: 'Laparoscopic and non-invasive treatments for endometriosis, fibroids, ovarian cysts, and obesity-related complications.', image: 'assets/specialties/Obstetrics & Gynaecology/Endometriosis-Fibroids.png' },
        { title: 'Laparoscopy & Hysteroscopy', description: 'Minimally invasive surgical solutions for fibroids, ovarian cysts, adhesions, and malformations.', image: 'assets/specialties/Obstetrics & Gynaecology/Laparoscopy & Hysteroscopy.png' },
        { title: 'Infertility Solutions', description: 'Advanced evaluation and treatments including laparoscopic tuboplasty and assisted reproductive care.', image: 'assets/specialties/Obstetrics & Gynaecology/Infertility-Solutions.png' },
        { title: 'Adolescent & Puberty Care', description: 'Specialized care for teenage girls addressing hormonal, reproductive, and developmental health issues.', image: 'assets/specialties/Obstetrics & Gynaecology/Adolescent.png' },
        { title: 'Menopause & Hormonal Care', description: 'Supportive therapies and treatments for menopausal symptoms, osteoporosis, and hormonal issues.', image: 'assets/specialties/Obstetrics & Gynaecology/Menopause & Hormonal Care.png' },
        { title: 'Ultrasound & Colour Doppler', description: 'Accurate diagnostic imaging including USG and colour Doppler for pregnancy and gynaecology care.', image: 'assets/specialties/Obstetrics & Gynaecology/Ultrasound & Colour-Doppler.png' }
      ],

      facilities: [
        'Well-equipped maternity complex with fetal monitors',
        'Facility for painless and natural delivery',
        'Dedicated operation theatres for cesarean section',
        'Laparoscopic & hysteroscopic surgical facilities',
        'Neonatal intensive care with advanced newborn care',
        'State-of-the-art diagnostic & radiology support',
        'Comprehensive pre and postnatal care',
        'Specialized units for high-risk pregnancies'
      ],

      specialists: [
        {
          id: 'anupama-mahli',
          name: 'Dr. Anupama Mahli',
          qualification: 'MBBS, MS, DNB, D.MAS',
          experience: '10+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Anupama-Mahli.png',
        },
        {
          id: 'pushpa-sinha',
          name: 'Dr. Pushpa Sinha',
          qualification: 'MBBS, MD, DGO',
          experience: '15+ Years',
          image: '/assets/Doc-Side/Gyanecologist - Dr. Pushpa Sinha.webp',
          specialization: 'Obstetrics & Gynaecology'
        },
        // {
        //   id: '203',
        //   name: 'Dr. Neena Jha',
        //   qualification: 'MBBS, MS (OBG)',
        //   experience: '20+ Years',
        //   image: 'assets/specialties/Gynaecology/dr-neena-jha.jpg',
        //   specialization: 'High-risk pregnancy & Women’s health'
        // },
        {
          id: 'tanushree-chakroborty',
          name: 'Dr. Tanushree Chakroborty',
          qualification: 'MBBS, DGO',
          experience: '15+ Years',
          image: '/assets/Doc-Side/tanushree_gyane.webp',
          specialization: 'Obstetrics & Gynecology, VIA, Colposcopy'
        }

      ],

      successStories: [
        {
          title: 'High-Risk Pregnancy Managed Successfully',
          patient: 'Priya',
          story: 'I had gestational diabetes during pregnancy. The doctors at Raj Hospitals provided specialist care and ensured my safe delivery and recovery.',
          outcome: 'Healthy mother and baby with smooth recovery.'
        },
        {
          title: 'Fibroid Removal with Laparoscopy',
          patient: 'Meera',
          story: 'I underwent laparoscopic fibroid removal surgery. The recovery was quick, and I received excellent support from the hospital staff.',
          outcome: 'Symptom-free life with minimal incision and early mobility.'
        }
      ],

      faqs: [
        {
          question: 'Do you provide care for high-risk pregnancies?',
          answer: 'Yes, our department specializes in managing high-risk and late pregnancies with advanced technology and 24/7 monitoring.'
        },
        {
          question: 'Are minimally invasive laparoscopic surgeries available?',
          answer: 'Yes, laparoscopic and hysteroscopic procedures are available for fibroids, cysts, infertility, and uterine conditions.'
        },
        {
          question: 'Do you offer infertility treatments?',
          answer: 'Yes, infertility is managed with comprehensive evaluation, advanced laparoscopy, tuboplasty, and personalized care.'
        },
        {
          question: 'Is painless normal delivery possible at Raj Hospitals?',
          answer: 'Yes, we provide painless delivery options with advanced anesthesia care under expert supervision.'
        },
        {
          question: 'Do you provide adolescent and menopause support?',
          answer: 'Yes, our team focuses on adolescent gynaecology, puberty-related issues, and menopause care with evidence-based therapies.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 66634',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    // Specialties List
    'aesthetic-and-reconstructive-surgery': {
      id: 'aesthetic-and-reconstructive-surgery',
      title: 'Aesthetic & Reconstructive Surgery',
      icon: FiSmile,
      bannerImage: 'assets/specialties/Aesthetic & Reconstructive Surgery/Aesthetic & Reconstructive-Surgery.png',
      shortDescription: 'Best hospital for aesthetic & reconstructive surgery in Ranchi with expert plastic surgeons and cutting-edge technology.',
      longDescription: 'The Department of Aesthetic & Reconstructive Surgery at Raj Hospitals, Ranchi, combines advanced cosmetic procedures with reconstructive expertise to deliver world-class care. Established by eminent plastic surgeons, the department provides individualized treatments for scars, birth defects, facial reconstruction, and body reshaping. Using state-of-the-art technology and minimally invasive techniques, our expert plastic and maxillofacial surgeons improve aesthetics, self-esteem, and functional outcomes. Whether it is corrective surgery after trauma, congenital defect management, or cosmetic enhancement, Raj Hospitals ensures safe, precise, and natural-looking results.',

      services: [
        { title: 'Brow Lift', description: 'Enhance forehead and eye appearance by correcting sagging brows.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Brow-Lift.png' },
        { title: 'Facial Implants', description: 'Jaw, cheek, and chin implants to balance facial aesthetics.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Facia- Implants.png' },
        { title: 'Wrinkle Filling', description: 'Safe dermal fillers to reduce signs of aging and restore youthful look.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Wrinkle-Filling.png' },
        { title: 'Lip Augmentation', description: 'Enhancement procedures to improve lip shape and volume.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Lip-Augmentation.png' },
        { title: 'Hair Restoration Surgery', description: 'Advanced hair transplantation and restoration techniques.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Hair-Restoration-Surgery.png' },
        { title: 'Buttock & Thigh Lift', description: 'Reshaping procedures for better contour and body proportion.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Buttock & Thigh-Lift.png' },
        { title: 'Liposuction', description: 'Surgical fat removal for body shaping and sculpting.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Liposuction.png' },
        { title: 'Blepharoplasty (Eyelid Surgery)', description: 'Correct drooping eyelids and rejuvenate the eye area.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Blepharoplasty.png' },
        { title: 'Chin & Facial Surgery', description: 'Corrective surgeries to enhance jawline and chin structure.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Chin & Facial-Surgery.png' },
        { title: 'Non-surgical Face Rejuvenation', description: 'Advanced non-invasive treatments for anti-aging & skin tightening.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Non-surgical-Face-Rejuvenation.png' },
        { title: 'Non-surgical Rhinoplasty', description: 'Non-invasive reshaping of the nose for balanced facial aesthetics.', image: 'assets/specialties/Aesthetic & Reconstructive Surgery/Non-surgical-Rhinoplasty.png' }
      ],

      facilities: [
        'Expert team of plastic and reconstructive surgeons',
        'Individualized treatments tailored to patient needs',
        'State-of-the-art operating theatres',
        'Advanced anti-aging & skin rejuvenation treatments',
        'Minimally invasive surgical approaches',
        'Precision surgical techniques ensuring safety',
        'Well-equipped aesthetic recovery units',
        'Affordable treatment packages for patients'
      ],

      specialists: [
        {
          id: 'pankaj-kumar',
          name: 'Dr. Pankaj Kumar',
          qualification: 'MBBS, MS, M.Ch (Plastic Surgery)',
          experience: '12+ Years',
          image: 'assets/specialties/Aesthetic/dr-pankaj-kumar.jpg',
          specialization: 'Aesthetic & Reconstructive Surgery, Plastic Surgery'
        }
      ],

      successStories: [
        {
          title: 'Scar Revision & Reconstructive Surgery',
          patient: 'Mr. Gill',
          story: 'Raj Hospital provided me with the best reconstructive surgery experience. The scars I had were treated with great precision, and now I feel confident again.',
          outcome: 'Significant scar reduction and improved appearance.'
        },
        {
          title: 'Facial Cosmetic Enhancement',
          patient: 'Mrs. Kaur',
          story: 'I underwent facial rejuvenation at Raj Hospital. The doctors were supportive, and the results looked natural and safe. Truly one of the best facilities in Ranchi.',
          outcome: 'Youthful look with natural aesthetic results.'
        },
        {
          title: 'Complete Reconstructive Care',
          patient: 'Mr. Sinha',
          story: 'The reconstructive team at Raj Hospital helped me after corrective surgery. They use cutting-edge technology and ensure full recovery with high-quality results.',
          outcome: 'Improved function and balanced aesthetics.'
        },
        {
          title: 'Aesthetic Face Surgery',
          patient: 'Mr. Singh',
          story: 'The surgery was smooth, comfortable, and highly professional. The results perfectly matched my expectations.',
          outcome: 'Enhanced appearance and confidence restored.'
        }
      ],

      faqs: [
        {
          question: 'Is reconstructive surgery the same as plastic surgery?',
          answer: 'Plastic surgery includes both aesthetic (cosmetic) and reconstructive procedures. Aesthetic surgery focuses on enhancing appearance, while reconstructive surgery corrects abnormalities caused by congenital defects, trauma, or cancer surgery.'
        },
        {
          question: 'How long does recovery take after facial reconstruction surgery?',
          answer: 'Recovery depends on the procedure but usually ranges from 2 to 6 weeks. Patients are guided with personalized post-operative care for faster healing.'
        },
        {
          question: 'What are examples of aesthetics?',
          answer: 'Aesthetic procedures include treatments like wrinkle reduction, lip augmentation, nose reshaping, facelifts, and facial rejuvenation.'
        },
        {
          question: 'What qualities define beauty in aesthetic treatments?',
          answer: 'Balance in facial features, symmetry, natural proportions, and rejuvenation are key elements addressed in aesthetic surgery.'
        },
        {
          question: 'What is the cost of aesthetic and reconstructive surgery in Ranchi?',
          answer: 'Raj Hospitals provides affordable packages for cosmetic & reconstructive surgeries, ensuring high-quality results at cost-effective pricing.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //dentalcare

    dental: {
      id: 'dental',
      title: 'Dental',
      icon: FiSmile,
      bannerImage: '/assets/specialties/Dental/Dental-banner.png',
      shortDescription: 'Expert dental & maxillofacial care in Ranchi with advanced technology, cosmetic dentistry, implantology, and preventive treatments.',
      longDescription: 'The Dental Care Department at Raj Hospitals, Ranchi, offers comprehensive oral health care ranging from preventive dentistry to advanced cosmetic and maxillofacial surgeries. With a specialized team of dentists, oral surgeons, implantologists, orthodontists, periodontists, and dental hygienists, we deliver world-class dental treatments with precision and safety. Our focus is on pain-free, affordable, and aesthetic oral health services, helping patients achieve healthy gums, perfect teeth alignment, and confident smiles. Equipped with the latest dental technology, Raj Hospitals is committed to providing personalized treatment plans, minimally invasive procedures, and safe recovery protocols for both adults and children.',

      services: [
        { title: 'Cosmetic Dentistry & Smile Designing', description: 'Aesthetic treatments including smile designing, veneers, and teeth whitening to enhance your smile.', image: 'assets/specialties/Dental/Cosmetic-Dentistry & Smile-Designing.png' },
        { title: 'Dental Filling', description: 'Advanced tooth-colored fillings to treat cavities and restore teeth functionally and aesthetically.', image: 'assets/specialties/Dental/Dental-Filling.png' },
        { title: 'Root Canal Treatment (RCT)', description: 'Pain-free root canal treatments with advanced rotary endodontics for permanent tooth preservation.', image: 'assets/specialties/Dental/Root-Canal-Treatment.png' },
        { title: 'Crowns & Bridges', description: 'Prosthetic restorations for missing or damaged teeth ensuring long-lasting strength and functionality.', image: 'assets/specialties/Dental/Crowns & Bridges.png' },
        { title: 'Scaling & Polishing', description: 'Professional cleaning to maintain oral hygiene and prevent gum disease.', image: 'assets/specialties/Dental/Scaling & Polishing.png' },
        { title: 'Preventive Dentistry', description: 'Regular cleanings, fluoride treatments, and sealants to prevent cavities and gum issues early.', image: 'assets/specialties/Dental/Preventive-Dentistry.png' },
        { title: 'Teeth Whitening (Bleaching)', description: 'Safe and effective whitening treatments to brighten stained or yellowed teeth.', image: 'assets/specialties/Dental/Teeth-Whitening.png' },
        { title: 'Removable & Complete Dentures', description: 'Custom dentures for lost teeth ensuring functional bite and natural aesthetics.', image: 'assets/specialties/Dental/Removable & Complete-Dentures.png' },
        { title: 'Extractions & Surgical Extractions', description: 'Safe tooth extractions, including complex impacted wisdom tooth removal.', image: 'assets/specialties/Dental/Extractions & Surgical-Extractions.png' },
        { title: 'Implant Surgery', description: 'Permanent solution for missing teeth with titanium dental implants.', image: 'assets/specialties/Dental/Implant-Surgery.png' },
        { title: 'Laser Gum Surgery & Pyorrhea Care', description: 'Advanced laser treatments for gum diseases and periodontal therapy.', image: 'assets/specialties/Dental/Laser-Gum-Surgery & Pyorrhea-Care.png' },
        { title: 'Orthodontics & Braces', description: 'Treatment for crooked teeth including traditional braces and modern aligners.', image: 'assets/specialties/Dental/Orthodontics & Braces.png' },
        { title: 'Paediatric Dentistry', description: 'Comprehensive dental care for children including preventive and corrective treatments.', image: 'assets/specialties/Dental/Paediatric-Dentistry.png' }
      ],

      facilities: [
        'Team of cosmetic dentists, implantologists & orthodontists',
        'Painless dentistry with advanced anesthesia and laser technology',
        'Well-equipped dental operation rooms',
        'Comprehensive oral cancer screening & diagnosis',
        'Digital X-ray, 3D imaging & advanced diagnostics',
        'High standards of hygiene with sterilization protocols',
        'Affordable treatment packages',
        'Preventive, restorative, and cosmetic treatments under one roof'
      ],

      specialists: [
        {
          id: 'suraj-mani-bhattacharjee',
          name: 'Dr. Suraj Mani Bhattacharjee',
          qualification: 'BDS',
          experience: '10+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dental-Surgeon - Dr. Surajmani-bhattacharjee.png',
          specialization: 'Cosmetic Dentistry, Implantology & Preventive Dentistry'
        },
        {
          id: 'abhishek-bhattacharjee',
          name: 'Dr. Abhishek Bhattacharjee',
          qualification: 'BDS, MDS',
          experience: '12+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.png',
          specialization: 'Maxillofacial Surgery & Dental Implants'
        }
      ],

      successStories: [
        {
          title: 'Smile Designing & Whitening',
          patient: 'Rohit',
          story: 'I consulted Raj Hospitals for stained teeth. The cosmetic dentistry team designed my smile with whitening and veneers. I now feel much more confident.',
          outcome: 'Perfectly aligned, whiter teeth with natural aesthetics.'
        },
        {
          title: 'Dental Implants & Full Restoration',
          patient: 'Meera',
          story: 'I underwent implant surgery at Raj Hospitals. The team handled everything meticulously, and the results exceeded my expectations.',
          outcome: 'Strong teeth replacement with improved bite and smile.'
        }
      ],

      faqs: [
        {
          question: 'Do you provide painless dental treatments?',
          answer: 'Yes, we use advanced pain management and laser dentistry techniques for painless procedures.'
        },
        {
          question: 'What is the lifespan of dental implants?',
          answer: 'Dental implants can last a lifetime with proper oral care, hygiene, and regular dental check-ups.'
        },
        {
          question: 'When should children visit a dentist?',
          answer: 'Children should have their first dental visit by the age of one year or within six months of their first tooth eruption.'
        },
        {
          question: 'Can crooked teeth be aligned without braces?',
          answer: 'Yes, clear aligners and invisible braces offer an advanced alternative to traditional braces for realignment.'
        },
        {
          question: 'Is teeth whitening safe?',
          answer: 'Yes, our expert dentists use clinically approved whitening methods that are safe and effective under supervision.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //dermatology
    dermatology: {
      id: 'dermatology',
      title: 'Dermatology',
      icon: FiFeather,
      bannerImage: 'assets/specialties/Dermatology/Dermatology.jpg',
      shortDescription: 'Comprehensive dermatology & cosmetology treatments in Ranchi for skin, hair, and cosmetic concerns.',
      longDescription: 'The Department of Dermatology & Cosmetology at Raj Hospitals, Ranchi, is dedicated to providing advanced medical and cosmetic skincare solutions. Our expert dermatologists and cosmetologists specialize in treatments for acne, pigmentation, eczema, psoriasis, vitiligo, hair loss, and various pediatric skin concerns. We also provide advanced cosmetic procedures including anti-aging therapies, chemical peels, laser skin rejuvenation, and hair transplant surgeries. Equipped with state-of-the-art diagnostic and treatment technologies, Raj Hospitals ensures effective, safe, and personalized care for every skin and hair condition. As a leading skincare center in Ranchi, we combine clinical dermatology with cosmetic innovations for holistic skincare solutions.',

      services: [
        { title: 'Hair Disorder Treatments', description: 'Comprehensive care for alopecia, hair fall, hair thinning, and baldness with hair restoration and transplant procedures.', image: 'assets/specialties/Dermatology/Hair-Disorder-Treatments.jpg' },
        { title: 'Acne & Acne Scar Treatment', description: 'Advanced medical and cosmetic dermatology solutions for acne, scars, and skin rejuvenation.', image: 'assets/specialties/Dermatology/Acne & Acne-Scar-Treatment.jpg' },
        { title: 'Cosmetology & Anti-Aging', description: 'Specialized cosmetic dermatology treatments including laser therapy, chemical peels, wrinkle reduction, and scar removal.', image: 'assets/specialties/Dermatology/Cosmetology & Anti-Aging.jpg' }
      ],

      facilities: [
        'Expert dermatologists and cosmetology specialists in Ranchi',
        'Comprehensive dermatology covering medical, pediatric, and cosmetic care',
        'Cutting-edge technology for diagnosis including skin biopsies and digital imaging',
        'Advanced treatment options for acne, psoriasis, eczema, pigmentation, and vitiligo',
        'Laser skin rejuvenation and cosmetic dermatology procedures',
        'Hair transplant and restoration therapies for baldness and hair loss',
        'Specialized pediatric dermatology services',
        'Focus on non-invasive cosmetic treatments for skin and hair rejuvenation'
      ],

      specialists: [
        {
          id: 'piyali-banerjee',
          name: 'Dr. Piyali Banerjee',
          qualification: 'MBBS, DVDL',
          experience: '12+ Years',
          image: 'assets/Doc-Side/Dr Piyali Banerjee(Derma).webp',
          specialization: 'Dermatology, Cosmetology & Hair Disorders'
        },
        {
          id: 'shaista-huma',
          name: 'Dr. Shaista Huma',
          qualification: 'M.B.B.S (Gold Medalist), M.D. (Dermatology, Venereology & Leprosy), M.D. (Physiology), A.C.S.I Fellowship in Dermatosurgery',
          experience: '10+ Years',
          image: 'assets/Doc-Front/Dr-Shaista-Huma.png',
          specialization: 'Dermatology, Cosmetology & Aesthetics'
        }

      ],

      successStories: [
        {
          title: 'Acne Treatment Success',
          patient: 'Tara',
          story: 'I struggled with acne for years until I started treatment at Raj Hospitals Dermatology Department. Within 3 weeks, my acne was fully under control.',
          outcome: 'Clear, blemish-free skin with restored confidence.'
        },
        {
          title: 'Pigmentation & Scar Removal',
          patient: 'Esha',
          story: 'Raj Hospitals helped me treat pigmentation and acne scars with advanced dermatology procedures. My skin feels brighter, smoother, and completely renewed.',
          outcome: 'Skin rejuvenation with long-lasting, natural results.'
        }
      ],

      faqs: [
        {
          question: 'What happens during the first visit to a dermatologist?',
          answer: 'During your first dermatology consultation, the doctor will examine your skin, discuss your medical history, and suggest a personalized treatment plan.'
        },
        {
          question: 'How often should I visit a dermatologist?',
          answer: 'It is recommended to visit a dermatologist at least once a year for skin evaluation, or more frequently if you have ongoing skin concerns.'
        },
        {
          question: 'Is it worth visiting a dermatologist for acne?',
          answer: 'Yes, dermatologists offer medically supervised treatments that are more effective than home remedies, especially for persistent acne or scarring.'
        },
        {
          question: 'Do you provide hair loss treatments?',
          answer: 'Yes, we specialize in hair disorder management including advanced transplant procedures and medical therapies for hair regrowth.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //ENT

    ent: {
      id: 'ent',
      title: 'ENT',
      icon: FiMic,
      bannerImage: 'assets/specialties/ENT/ENT.jpg',
      shortDescription: 'Best ENT hospital in Ranchi with advanced treatments for ear, nose, throat, and voice disorders.',
      longDescription: 'The ENT Department at Raj Hospitals, Ranchi, is recognized as one of the best in Jharkhand for comprehensive ear, nose, and throat treatments. With advanced diagnostic tools, modern surgical equipment, and highly skilled ENT specialists, we provide world-class care for patients suffering from ear infections, sinus problems, throat disorders, hearing loss, allergies, and balance issues. Our facilities include advanced audiology, speech therapy, and minimally invasive surgical procedures. With dedicated care for both adults and pediatric ENT cases, Raj Hospitals ensures patient comfort, precise diagnosis, and effective treatments for improved quality of life.',

      services: [
        { title: 'Rhinology & Sinus Care', description: 'Advanced diagnosis and minimally invasive procedures for sinusitis, nasal polyps, and rhinology-related conditions.', image: 'assets/specialties/ENT/Rhinology & Sinus-Care.jpg' },
        { title: 'Advanced Skull Base Treatment', description: 'Specialized surgical care for complex skull base and inner ear conditions.', image: 'assets/specialties/ENT/Advanced-Skull-Base-Treatment.jpg' },
        { title: 'Allergic Rhinitis Treatments', description: 'Comprehensive therapies and immunotherapy for managing allergic rhinitis and chronic nasal allergies.', image: 'assets/specialties/ENT/Allergic-Rhinitis-Treatments.jpg' },
        { title: 'Sleep Apnea & Snoring Disorders', description: 'Specialized diagnosis and treatment for obstructive sleep apnea and snoring-related ENT conditions.', image: 'assets/specialties/ENT/Sleep-Apnea & Snoring-Disorders.jpg' },
        { title: 'Functional Endoscopic Sinus Surgery (FESS)', description: 'Minimally invasive sinus surgery for chronic sinusitis and nasal blockages.', image: 'assets/specialties/ENT/Functional.jpg' },
        { title: 'Audiology & Hearing Aids', description: 'Hearing assessments, audiometry, and advanced hearing aids for hearing loss.', image: 'assets/specialties/ENT/Audiology & Hearing-Aids.jpg' },
        { title: 'Speech Therapy & Voice Disorders', description: 'Phonosurgery, voice rehabilitation, and speech therapy programs.', image: 'assets/specialties/ENT/Speech-Therapy & Voice-Disorders.jpg' },
        { title: 'Pediatric ENT Care', description: 'Dedicated treatments for children including tonsillitis, adenoidectomy, and ear infections.', image: 'assets/specialties/ENT/Pediatric-ENT-Care.jpg' }
      ],

      facilities: [
        'Round-the-clock emergency ENT care',
        'Voice disorder and phonosurgery unit',
        'Vertigo clinic and vestibular rehab program',
        'Endoscopic assessment of ear, nose & throat issues',
        'Advanced diagnostic audiology services',
        'State-of-the-art operating theatres',
        'Comprehensive care for skull base and inner ear conditions',
        'Multidisciplinary ENT team with pediatric and adult care'
      ],

      specialists: [
        // {
        //   id: 'abhishek-ramadhin',
        //   name: 'Dr. Abhishek Kr. Ramadhin',
        //   qualification: 'MBBS, MD, MS, FARS',
        //   experience: '15+ Years',
        //   image: 'assets/specialties/ENT/ENT-dr.png',
        //   specialization: 'Advanced ENT Surgeries & Voice Disorders'
        // },
        {
          id: 'tgn-sinha',
          name: 'Dr. T.G.N. Sinha',
          qualification: 'MBBS, MS, FICS',
          experience: '45+ Years',
          image: '/assets/Doc-Side/Dr T G N Sinha ( ENT).webp',
          specialization: 'ENT, Head & Neck Surgery'
        },

        {
          id: 'ranajan-jha',
          name: 'Dr. Ranajan Kumar Jha',
          qualification: 'MBBS, MS, FESS',
          experience: '15+ Years',
          image: '',
          specialization: 'ENT Surgery'
        }
        // {
        //   id: '602-old',
        //   name: 'Dr. T G N Sinha',
        //   qualification: 'MBBS, MS, FICS',
        //   experience: '20+ Years',
        //   image: 'assets/specialties/ENT/dr-tgn-sinha.jpg',
        //   specialization: 'Head & Neck Surgery, Rhinology'
        // },
        // {
        //   id: '603',
        //   name: 'Dr. Ranajan Kumar Jha',
        //   qualification: 'MBBS, MS, FESS',
        //   experience: '12+ Years',
        //   image: 'assets/specialties/ENT/dr-ranajan-jha.jpg',
        //   specialization: 'Functional Endoscopic Sinus Surgery (FESS)'
        // }
      ],

      successStories: [
        {
          title: 'Successful Sinus Surgery',
          patient: 'Ravi',
          story: 'I was suffering from chronic sinusitis for years. At Raj Hospitals, ENT specialists performed a FESS surgery and my breathing improved drastically.',
          outcome: 'Sinus problem resolved with improved breathing and comfort.'
        },
        {
          title: 'Voice Disorder Treatment',
          patient: 'Sneha',
          story: 'I had severe voice issues due to vocal cord strain. The ENT team provided phono surgery and speech therapy that completely restored my voice.',
          outcome: 'Voice restored with excellent clarity and pitch.'
        }
      ],

      faqs: [
        {
          question: 'What are common symptoms of ENT problems?',
          answer: 'Ear pain, hearing loss, chronic sinusitis, allergies, sore throat, snoring, and persistent headaches are indicators of ENT issues.'
        },
        {
          question: 'Do you treat sleep apnea?',
          answer: 'Yes, we provide comprehensive care for obstructive sleep apnea including diagnostics, medical therapies, and surgical interventions.'
        },
        {
          question: 'Is surgery always needed for sinus problems?',
          answer: 'Not always. Initial treatments include medicines, sprays, and lifestyle changes. Surgery like FESS is only recommended for chronic cases.'
        },
        {
          question: 'Do you offer pediatric ENT treatment?',
          answer: 'Yes, our ENT department provides specialized care for children suffering from tonsillitis, adenoid problems, and middle ear infections.'
        },
        {
          question: 'Can hearing loss be treated?',
          answer: 'Yes, we provide audiology assessments, hearing aids, and surgical options for conditions like otosclerosis or acoustic neuroma.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    //Eye Care

    'eye-care': {
      id: 'eye-care',
      title: 'Eye Care',
      icon: FiEye,
      bannerImage: 'assets/specialties/Eye Care/Eye-Care.jpg',
      shortDescription: 'Best eye hospital in Ranchi offering advanced treatments for cataract, LASIK, glaucoma, and comprehensive vision care.',
      longDescription: `The Eye Care Department at Raj Hospitals, Ranchi, is recognized as a leading center for comprehensive eye care in Jharkhand. Equipped with state-of-the-art clinical care and infrastructure, we offer a full spectrum of diagnostic, medical, and surgical services for eye conditions. Our team of expert ophthalmologists and surgeons provides personalized treatment using the latest technologies for LASIK (WaveFront & Standard), cataract surgery, glaucoma care, eye ultrasounds, cornea and retina procedures, pediatric ophthalmology, and low vision aids. Raj Hospitals is committed to providing high-quality eye care with a focus on patient comfort, precise diagnosis, and outstanding treatment outcomes for patients of all ages.`,

      services: [
        { title: 'LASIK (WaveFront & Standard)', description: 'Advanced laser vision correction procedures to reduce dependence on glasses and contact lenses.', image: 'assets/specialties/Eye Care/LASIK.jpg' },
        { title: 'Cataract Surgery', description: 'Phacoemulsification and intraocular lens implantation for restoring clear vision.', image: 'assets/specialties/Eye Care/Cataract-Surgery.jpg' },
        { title: 'Glaucoma Diagnosis & Surgery', description: 'Comprehensive diagnostics (including intraocular pressure measurement) and advanced glaucoma surgeries.', image: 'assets/specialties/Eye Care/Glaucoma-Diagnosis & Surgery.jpg' },
        { title: 'Cornea Care & Surgery', description: 'Diagnosis, medical and surgical management of corneal diseases and injuries.', image: 'assets/specialties/Eye Care/Cornea-Care & Surgery.jpg' },
        { title: 'Retina & Vitreous Services', description: 'Advanced diagnostics (including OCT) and treatments for retinal and vitreous disorders, including diabetic retinopathy and AMD.', image: 'assets/specialties/Eye Care/Retina & Vitreous-Services.jpg' },
        { title: 'Pediatric Ophthalmology', description: 'Specialized eye care for children including squint correction and pediatric eye disorders.', image: 'assets/specialties/Eye Care/Pediatric-Ophthalmology.jpg' },
        { title: 'Low Vision Aids', description: 'Provision of advanced low vision aids for patients with reduced vision.', image: 'assets/specialties/Eye Care/Low-Vision-Aids.jpg' },
        { title: 'Comprehensive Eye Examination', description: 'Routine and specialized diagnostic tests including eye ultrasound, visual acuity, and imaging.', image: 'assets/specialties/Eye Care/Comprehensive-Eye-Examination.jpg' }
      ],

      facilities: [
        'Modern operation theatres for eye surgeries',
        'State-of-the-art diagnostic imaging (OCT, ultrasound)',
        'Facilities for LASIK and advanced laser treatments',
        'Comprehensive pediatric eye care unit',
        'Dedicated retina and cornea treatment zones',
        'Day care and in-patient eye care facilities',
        'Contact lens and low vision aid services',
        '24x7 emergency eye care'
      ],

      specialists: [
        // Doctors & specialist details not available;
        {
          id: 'abid-akhtar',
          name: 'Dr. Abid Akhtar',
          qualification: 'MBBS, MS (Ophthalmology)',
          experience: '20+ Years',
          image: 'assets/Doc-Side/Dr. Abid Akhtar (Opthal).webp', // No image provided
          specialization: 'Anterior Segment Surgeon, Cataract & Refractive Surgery, Cornea & External Diseases'
        },

      ],

      successStories: [
        {
          title: 'Cataract Improved Within a Week',
          patient: 'Anus',
          story: 'Visited Raj Hospitals after years of redness in the eyes, found drastic improvement (almost 80%) in a week with the suggested medication and cataract treatment.',
          outcome: 'Significant recovery from chronic eye redness and improved vision.'
        },
        {
          title: 'Effective Treatment for Chronic Conjunctivitis',
          patient: 'Simran',
          story: 'Struggled with conjunctivitis for years, found relief in just one week after treatment by Raj Hospitals\' eye specialists.',
          outcome: 'Quick resolution of chronic conjunctivitis with professional care.'
        },
        {
          title: 'Successful LASIK for Clear Vision',
          patient: 'John',
          story: 'Opted for LASIK surgery at Raj Hospitals and experienced perfect vision without complications. Highly impressed by the expertise and care.',
          outcome: 'Successful LASIK surgery and excellent visual outcome.'
        },
        {
          title: 'Consistently Positive Eye Care Experience',
          patient: 'Akash',
          story: 'Long-term patient; experienced consistently positive, caring, and professional eye care services at Raj Hospitals.',
          outcome: 'Sustained high-quality care for varied eye concerns.'
        }
      ],

      faqs: [
        {
          question: 'What is the best treatment for eyesight?',
          answer: 'Laser vision surgery is a popular treatment for refractive errors. It can reduce or eliminate the need for glasses or contacts by reshaping the cornea for optimal focus.'
        },
        {
          question: 'How long after eye surgery can I see?',
          answer: 'Most patients start noticing improvement within a day or two, but full vision stabilization may take a few weeks depending on the surgery and individual healing.'
        },
        {
          question: 'Can the eye repair itself?',
          answer: 'The eye has a limited ability to heal minor injuries, but many eye conditions and diseases require professional medical intervention and treatment.'
        },
        {
          question: 'Which fruit is best for the eyes?',
          answer: 'Fruits like oranges, papayas, and carrots rich in Vitamin A and C are beneficial for eye health.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },
    // Paediatrics & Neonatology
    'pediatrics-and-neonatology': {
      id: 'pediatrics-and-neonatology',
      title: 'Paediatrics & Neonatology',
      icon: FiUser,
      bannerImage: 'assets/specialties/Paediatrics & Neonatology/Paediatrics & Neonatology.jpg',
      shortDescription: 'Best child hospital in Ranchi with complete, compassionate pediatric care from birth to adolescence.',
      longDescription: `The Paediatrics Department at Raj Hospitals delivers comprehensive, state-of-the-art healthcare services tailored for children from birth up to sixteen years. With dedicated pediatricians, skilled nurses, and child life experts, the department ensures the highest standards in child healthcare, diagnosis, compassionate support, preventive medicine, and advanced treatments. Specialized services range from pediatric and neonatal intensive care to immunization and surgical management for various childhood diseases and health concerns.`,

      services: [
        { title: 'Respiratory support (Ventilation & Surfactant)', description: 'Advanced management for respiratory distress in newborns requiring ventilators and surfactant therapy.', image: 'assets/specialties/Paediatrics & Neonatology/Respiratory-support.jpg' },
        { title: 'Neonatal jaundice (DVET)', description: 'Management of severe newborn jaundice with double volume exchange transfusion (DVET).', image: 'assets/specialties/Paediatrics & Neonatology/Neonatal-jaundice.jpg' },
        { title: 'Neonatal sepsis & convulsions', description: 'Critical care for life-threatening newborn infections and treatment for neonatal convulsions.', image: 'assets/specialties/Paediatrics & Neonatology/Neonatal-sepsis.jpg' },
        { title: 'Common pediatric ailments', description: 'Comprehensive care for conditions such as pneumonia, pediatric asthma, allergic disorders, gastrointestinal (GI) diseases, and childhood convulsions.', image: 'assets/specialties/Paediatrics & Neonatology/Common-pediatric-ailments.jpg' }
      ],

      facilities: [
        'State-of-the-art Pediatric Intensive Care Unit (PICU) and Neonatal ICU (NICU)',
        'Paediatric and neonatal ventilatory support',
        'Isolation wards for infection control',
        '24x7 emergency pediatric care',
        'Child-friendly outpatient and in-patient environments',
        'Latest diagnostics for childhood diseases',
        'Immunization clinic and vaccination services',
        'Family education and pediatric counseling services'
      ],

      specialists: [
        // {
        //   id: 'sainik-dutta',
        //   name: 'Dr. Sainik Dutta',
        //   qualification: 'MBBS, DCH',
        //   image: 'assets/specialties/PAEDIATRICS/dr-sainik-dutta.jpg',
        //   specialization: 'Pediatric Medicine & Neonatal Care',
        //   profileLink: 'https://rajhospitals.com/dr-sainik-dutta.php'
        // },
        {
          id: 'ravi-shekhar-singh',
          name: 'Dr. Ravi Shekhar Singh',
          qualification: 'MBBS, DCH',
          image: 'assets/specialties/PAEDIATRICS/dr-ravi-shekhar-singh.jpg',
          specialization: 'Pediatric Medicine & Critical Care',
          profileLink: 'https://rajhospitals.com/dr-ravi-shekhar-singh.php'
        }
      ],

      successStories: [
        {
          title: 'Life-saving Neonatal Intensive Care',
          patient: 'Local Family',
          story: 'Our newborn suffered severe respiratory distress and was admitted to the NICU immediately after birth. The timely use of ventilatory support and surfactant therapy saved our baby\'s life. Outstanding care and round-the-clock monitoring by the Raj Hospitals team.',
          outcome: 'Full recovery; healthy and thriving child.'
        },
        {
          title: 'Complex Pediatric Sepsis Managed Successfully',
          patient: 'Amit\'s Parents',
          story: 'Our infant was diagnosed with neonatal sepsis and convulsions. The pediatric team provided critical treatments and constant support, resulting in a swift and remarkable recovery.',
          outcome: 'Safe discharge and stable health of the child.'
        }
      ],

      faqs: [
        {
          question: 'What are the signs of serious pediatric illness?',
          answer: 'Signs include high fever, breathing difficulties, seizures, lethargy, poor feeding, and persistent vomiting or diarrhea.'
        },
        {
          question: 'Do you provide vaccinations at the hospital?',
          answer: 'Yes, our immunization clinic provides all essential vaccines as per the National Immunization Schedule and special vaccines as needed.'
        },
        {
          question: 'How do you manage severe infections in newborns?',
          answer: 'We use intensive monitoring, IV antibiotics, and advanced NICU facilities for treating neonatal sepsis and related complications.'
        },
        {
          question: 'Are you equipped to manage respiratory problems in infants?',
          answer: 'Our NICU and PICU are fully equipped for ventilatory support and advanced respiratory therapies for infants and children.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },


    'physiotherapy-and-rehabilitation': {
      id: 'physiotherapy-and-rehabilitation',
      title: 'Physiotherapy & Rehabilitation',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Physiotherapy & Rehabilitation/Physiotherapy & Rehabilitation.jpg',
      shortDescription: 'Comprehensive physiotherapy center in Ranchi for orthopaedic, neurological, cardiac, and sports rehabilitation services.',
      longDescription: `The Physiotherapy Department at Raj Hospitals provides expert rehabilitative care tailored for patients with orthopaedic, neurological, cardiological, gynecological, and sports injuries. Our physiotherapists use advanced techniques and state-of-the-art equipment to ensure efficient pain management, post-surgical rehabilitation, injury recovery, and mobility restoration. Special emphasis is placed on cardiac physiotherapy, ergonomic lifestyle interventions, bedside physiotherapy for ICU and ward patients, and pediatric rehabilitation for children with developmental challenges. Our aim is to maximize functional independence and enhance the quality of life for every patient.`,

      rehabilitationDescription: `Rehabilitation at Raj Hospitals is a holistic process aimed at restoring optimal function and independence after injury, surgery, or illness. Our multidisciplinary approach integrates physiotherapy, occupational therapy, pain management, and functional training tailored to individual patient needs. Rehabilitation programs cover stroke recovery, orthopedic post-operative care, cardiac rehabilitation, neurological conditions, and sports injury management. We focus on improving mobility, strength, balance, coordination, and daily living skills to help patients return to their normal lives with confidence and improved quality of life.`,

      services: [
        { title: 'Osteopathy', description: 'Holistic manual therapy focusing on treating musculoskeletal conditions through manipulation and movement.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Osteopathy.jpg' },
        { title: 'Cupping Therapy', description: 'Traditional therapy using suction cups to improve blood flow and relieve muscle tension.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Cupping Therapy.jpg' },
        { title: 'Cardiology Rehabilitation', description: 'Specialized physiotherapy protocols for cardiac rehabilitation and recovery post-cardiac events.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Cardiology Rehabilitation.jpg' },
        { title: 'Spinal Rehabilitation', description: 'Comprehensive treatment for spinal injuries, back pain, and postural corrections.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Spinal Rehabilitation.jpg' },
        { title: 'Post Traumatic Physiotherapy', description: 'Recovery programs for patients following trauma, accidents, or major injuries.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Post Traumatic Physiotherapy.jpg' },
        { title: 'Sport Rehabilitation', description: 'Specialized rehabilitation for sports injuries helping athletes return to peak performance.', image: '/assets/specialties/Physiotherapy & Rehabilitation/Sport Rehabilitation.jpg' },
        { title: 'Dry Needling', description: 'Technique using fine needles to release muscle tension and treat trigger points.', image: '/assets/specialties/Physiotherapy & Rehabilitation/dryniddling.jpg' },
        { title: 'IASTM', description: 'Instrument-Assisted Soft Tissue Mobilization for treating soft tissue dysfunction and promoting healing.', image: '/assets/specialties/Physiotherapy & Rehabilitation/IASTM.jpg' }
      ],

      facilities: [
        'Short Wave Diathermy (SWD) & Microwave Diathermy',
        'TENS Therapy, IFT Therapy, Electrical Stimulation',
        'Pelvic & Cervical Traction',
        'Continuous Passive Movement (CPM) Machine',
        'Laser & Ultrasonic Therapy',
        'Hot & Cold Pack Therapy, Wax Therapy, Infra-Red Lamp Therapy',
        'Advanced balance, mobility and exercise equipment',
        'Bedside physiotherapy for ICU, HDU & wards'
      ],

      specialists: [
        {
          id: 'abhay-pandey',
          name: 'Dr. Abhay Kumar Pandey',
          qualification: 'BPT, MPT, PGDYT, FOMT, FDM, FNMT, MIAP',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.png',
          experience: '16+ Years',
          specialization: 'Orthopaedic, Neurological, and Cardiac Rehabilitation',
          profileLink: 'https://rajhospitals.com/dr-abhay-kr-pandey.php'
        }
      ],

      successStories: [
        {
          title: 'Stroke Rehabilitation Success',
          patient: 'Mr. Mehta',
          story: 'Post-stroke, I underwent neurological physiotherapy at Raj Hospitals, regaining mobility and independence far quicker than expected.',
          outcome: 'Full stroke rehabilitation and improved quality of life.'
        },
        {
          title: 'Cardiac Recovery',
          patient: 'Mrs. Sharma',
          story: 'After cardiac surgery, structured physiotherapy plans helped with breathing exercises and a safe return to routine activities.',
          outcome: 'Improved heart function and daily endurance.'
        }
      ],

      faqs: [
        {
          question: 'What conditions do physiotherapists treat?',
          answer: 'We manage pain, mobility problems, injuries, neurological and cardiac conditions, breathing issues, and both acute and chronic musculoskeletal disorders.'
        },
        {
          question: 'How is cardiac physiotherapy different?',
          answer: 'Cardiac physiotherapy focuses on safe rehabilitation after heart surgery, heart attacks, and chronic cardiac conditions, emphasizing breathing, endurance and safe mobility.'
        },
        {
          question: 'Do you provide bedside physiotherapy services?',
          answer: 'Yes, we offer comprehensive bedside physiotherapy for patients in ICU, HDU and wards to promote recovery and prevent complications.'
        },
        {
          question: 'Can physiotherapy help children with developmental delays?',
          answer: 'Absolutely. Pediatric physiotherapy aids in muscle strengthening, posture correction, and physical therapy for children with delayed milestones or deformities.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },



    //Nutrition & Dietetics- chatgpt generated data

    'nutrition-and-dietetics': {
      id: 'nutrition-and-dietetics',
      title: 'Nutrition & Dietetics',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Nutrition & Dietetics/Nutrition & Dietetics.jpg',
      shortDescription: 'Comprehensive nutrition and dietary planning services to promote health, manage diseases, and support recovery.',
      longDescription: `The Nutrition & Dietetics Department at Raj Hospitals offers personalized nutritional assessments and dietary management plans aimed at optimizing health and supporting recovery from illness. Our expert dietitians provide counseling for a wide range of conditions including diabetes, cardiovascular diseases, digestive disorders, obesity, and pediatric nutrition. We emphasize evidence-based dietary interventions, lifestyle modifications, and nutritional education to help patients achieve their wellness goals and improve quality of life.`,

      services: [
        { title: 'Medical Nutrition Therapy', description: 'Personalized diet plans for chronic diseases such as diabetes, hypertension, and kidney disorders.', image: 'assets/specialties/Nutrition & Dietetics/Medical-Nutrition-Therapy.jpg' },
        { title: 'Weight Management', description: 'Healthy weight loss and gain programs tailored to individual needs.', image: 'assets/specialties/Nutrition & Dietetics/Weight-Management.jpg' },
        { title: 'Pediatric Nutrition', description: 'Specialized dietary care for infants, children, and adolescents to support growth and development.', image: 'assets/specialties/Nutrition & Dietetics/Pediatric-Nutrition.jpg' },
        { title: 'Prenatal & Postnatal Nutrition', description: 'Dietary counseling for mothers during pregnancy and after childbirth to support maternal and infant health.', image: 'assets/specialties/Nutrition & Dietetics/Prenatal & Postnatal-Nutrition.jpg' },
        { title: 'Nutritional Counseling', description: 'Guidance on balanced diets, nutrient intake, and healthy eating habits.', image: 'assets/specialties/Nutrition & Dietetics/Nutritional-Counseling.jpg' }
      ],

      facilities: [
        'Comprehensive nutritional assessment and body composition analysis',
        'Dietary planning for disease management',
        'Lifestyle and behavior modification programs',
        'Patient education and group workshops',
        'Support for enteral and parenteral nutrition',
        'Collaboration with medical teams for integrated care'
      ],

      specialists: [
        {
          id: 'parijat-sarkar',
          name: 'Mr. Parijat Sarkar',
          qualification: 'B.Sc (Dietetics & Nutrition), M.Sc (Sports Nutrition Specialist), ISSA, B.Ed',
          experience: '6+ Years',
          image: '/assets/Doc-Side/Mr. Parijat Sarkar (Dietetian).jpg',
          specialization: 'Clinical Dietetics, Sports Nutrition, Preventive Healthcare, Metabolic & Lifestyle Disorder Nutrition'
        },

        // {
        //   id: '902',
        //   name: 'Mr. Rahul Verma',
        //   qualification: 'M.Sc. Nutrition',
        //   image: 'assets/specialties/NUTRITION/mr-rahul-verma.jpg',
        //   specialization: 'Weight Management and Pediatric Nutrition'
        // }
      ],

      successStories: [
        {
          title: 'Diabetes Controlled with Diet',
          patient: 'Mr. Singh',
          story: 'Tailored nutrition and lifestyle changes helped me control blood sugar levels effectively and avoid medication escalation.',
          outcome: 'Improved glycemic control and well-being.'
        },
        {
          title: 'Healthy Pregnancy Nutrition',
          patient: 'Mrs. Gupta',
          story: 'Nutritional counseling during pregnancy ensured a healthy weight gain and smooth delivery with no complications.',
          outcome: 'Healthy mother and baby.'
        }
      ],

      faqs: [
        {
          question: 'What is Medical Nutrition Therapy?',
          answer: 'It is a therapeutic approach to treating medical conditions through a regulated diet developed by expert dietitians.'
        },
        {
          question: 'How can diet help in weight management?',
          answer: 'Personalized meal plans, portion control, and behavioral changes help achieve and maintain healthy weight.'
        },
        {
          question: 'Do you offer nutrition advice for children?',
          answer: 'Yes, we provide specialized dietary plans to support proper growth, immunity, and development in children.'
        },
        {
          question: 'Can nutrition counseling help chronic disease management?',
          answer: 'Absolutely, diet plays a critical role in managing diabetes, heart disease, kidney disorders, and digestive conditions.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },


    //psychiatry & mental health - chatgpt generated data

    'psychiatry-and-mental-health': {
      id: 'psychiatry-and-mental-health',
      title: 'Psychiatry & Mental Health',
      icon: FiHeart,
      bannerImage: 'assets/specialties/Psychiatry & Mental Health/Psychiatry & Mental-Health.jpg',
      shortDescription: 'Comprehensive mental health services for diagnosis, treatment, and rehabilitation of psychiatric disorders.',
      longDescription: `The Psychiatry & Mental Health Department at Raj Hospitals offers compassionate, evidence-based care for individuals facing mental health challenges. Our multidisciplinary team provides diagnosis, medical management, psychotherapy, and rehabilitation for a range of psychiatric conditions including depression, anxiety disorders, bipolar disorder, schizophrenia, and stress-related illnesses. We are committed to reducing stigma and promoting mental wellness through patient-centered care, family support, and community outreach.`,

      services: [
        { title: 'Psychiatric Evaluation & Diagnosis', description: 'Comprehensive assessment and identification of mental health conditions.', image: 'assets/specialties/Psychiatry & Mental Health/Psychiatric-Evaluation & Diagnosis.jpg' },
        { title: 'Medication Management', description: 'Safe and effective use of psychiatric medications tailored to individual needs.', image: 'assets/specialties/Psychiatry & Mental Health/Medication-Management.jpg' },
        { title: 'Psychotherapy & Counseling', description: 'Individual, family, and group therapy sessions to aid coping, recovery, and behavioral change.', image: 'assets/specialties/Psychiatry & Mental Health/Psychotherapy & Counseling.jpg' },
        { title: 'Addiction Treatment', description: 'Rehabilitation and support for substance use disorders.', image: 'assets/specialties/Psychiatry & Mental Health/Addiction-Treatment.jpg' },
        { title: 'Child & Adolescent Psychiatry', description: 'Specialized services addressing developmental and behavioral issues in young patients.', image: 'assets/specialties/Psychiatry & Mental Health/Child & Adolescent-Psychiatry.jpg' }
      ],

      facilities: [
        'Inpatient psychiatric care and crisis intervention',
        'Outpatient psychiatric consultation and follow-up',
        'Psychological testing and assessment services',
        'Electroconvulsive therapy (ECT) with modern safety protocols',
        'Community mental health programs and awareness workshops',
        'Support groups and rehabilitation services'
      ],

      specialists: [
        {
          id: 'anil-kumar',
          name: 'Dr. Anil Kumar',
          qualification: 'MBBS, MD (Psychiatry)',
          experience: '40+ Years',
          image: 'assets/Doc-Side/Dr Anil Kumar (Psychiatry).webp', // No image provided
          specialization: 'Neuro-Psychiatry, Clinical Neurology, CBT, EMG/EEG Techniques'
        },

        // {
        //   id: '1002',
        //   name: 'Dr. Rajeev Kumar',
        //   qualification: 'MD Psychiatry',
        //   image: 'assets/specialties/PSYCHIATRY/dr-rajeev-kumar.jpg',
        //   specialization: 'Child and Adolescent Psychiatry'
        // }
      ],

      successStories: [
        {
          title: 'Recovery from Severe Depression',
          patient: 'Ms. Priya',
          story: 'With therapy and medication, I found hope and was able to return to a fulfilling life after battling severe depression.',
          outcome: 'Sustained mental health and improved quality of life.'
        },
        {
          title: 'Overcoming Anxiety and Panic Attacks',
          patient: 'Mr. Ajay',
          story: 'Counseling sessions taught me coping strategies that helped me manage anxiety symptoms effectively.',
          outcome: 'Reduced anxiety, better daily functioning.'
        }
      ],

      faqs: [
        {
          question: 'What conditions does the psychiatry department treat?',
          answer: 'We treat a wide range of disorders including depression, anxiety, bipolar disorder, schizophrenia, stress, and substance abuse.'
        },
        {
          question: 'Is mental illness treatable?',
          answer: 'Yes, with timely medical and psychological interventions most psychiatric illnesses can be managed or resolved.'
        },
        {
          question: 'Do you offer child psychiatry services?',
          answer: 'Yes, we have specialized psychiatrists for treating children and adolescents with mental health needs.'
        },
        {
          question: 'Are medications necessary for treatment?',
          answer: 'Treatment plans are individualized and may include medications, therapy, or both depending on the condition.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    // Advanced Dignosis


    'laboratory-investigations': {
      id: 'laboratory-investigations',
      title: 'All Blood and Laboratory Investigations',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Blood and Laboratory Investigations/Blood and Laboratory.jpg',
      shortDescription: 'Comprehensive and reliable blood tests and laboratory investigations in Ranchi with advanced diagnostic technology.',
      longDescription: 'The All Blood and Laboratory Investigations Department at Raj Hospitals, Ranchi, offers precise, reliable, and timely diagnostic services that support early disease detection and effective treatment decisions. Equipped with state-of-the-art analyzers and automated systems, our modern laboratory ensures high accuracy for every test conducted. From basic blood work and hormone analysis to specialized investigations like FNAC and Biopsy, all tests are performed under strict quality control by experienced medical experts. Raj Hospitals is known for top-tier diagnostic accuracy, efficiency, and patient safety across Ranchi and Jharkhand.',

      services: [

        {
          title: 'Comprehensive Blood Testing',
          description: 'Routine and advanced testing including CBC, lipid profile, blood glucose, liver and kidney function, thyroid and hormonal analysis.',
          image: 'assets/specialties/Blood and Laboratory Investigations/Comprehensive-Blood-Testing.jpg'
        },
        {
          title: 'FNAC (Fine Needle Aspiration Cytology)',
          description: 'A safe and minimally invasive procedure to evaluate swellings, nodules, and suspected tumors for quick diagnosis.',
          image: 'assets/specialties/Blood and Laboratory Investigations/fnac.jpg'
        },
        {
          title: 'Biopsy Evaluation',
          description: 'Accurate tissue examination for cancer detection, chronic inflammations, or abnormal growths.',
          image: 'assets/specialties/Blood and Laboratory Investigations/Biopsy-Evaluation.jpg'
        },
        {
          title: 'Infection Marker Analysis',
          description: 'Diagnostic testing for infections including CRP, dengue, HIV, hepatitis, and other markers.',
          image: 'assets/specialties/Blood and Laboratory Investigations/Infection-Marker-Analysis.jpg'
        },
        {
          title: 'Preventive Health Checkups',
          description: 'Comprehensive preventive screening packages designed for early detection of health issues.',
          image: 'assets/specialties/Blood and Laboratory Investigations/Preventive-Health-Checkups.jpg'
        }

      ],

      facilities: [
        'Fully automated, computerized laboratory',
        '24/7 availability for emergency diagnostics',
        'Strict sample safety and hygiene protocols',
        'Specialized testing for hormonal and metabolic disorders',
        'Digital reporting and online result access',
        'Quality control adherence to NABL guidelines',
        'Highly skilled technicians and pathologists',
        'Rapid turnaround time for results'
      ],

      specialists: [
        // profile added

        {
          id: 'pradeep-prasad',
          name: 'Dr. Pradeep Prasad',
          qualification: 'MBBS, MD (Biochemistry)',
          experience: '10+ Years',
          image: '', // No image provided
          specialization: 'Consultant Biochemistry, Molecular Testing, Genomic Testing'
        },
        {
          id: 'jitendra-prasad',
          name: 'Dr. Jitendra Prasad',
          qualification: 'MBBS, MD (Microbiology)',
          experience: '9+ Years',
          image: '', // No image provided
          specialization: 'Microbiology'
        },
        {
          id: 'kriti-kaira',
          name: 'Dr. Kriti Kaira',
          qualification: 'MBBS, MD (Pathology), Post Doctoral Fellowship (Oncopathology)',
          experience: '3+ Years',
          image: '/assets/Doc-Side/Dr kirti_kaira_lab.webp',
          specialization: 'Pathology, Histopathology, Cytology, Hematology, Clinical Pathology'
        },
        {
          id: 'shweta-sushmita',
          name: 'Dr. Shweta Sushmita',
          qualification: 'MBBS, MD (Pathology)',
          experience: '10+ Years',
          image: 'assets/Doc-Side/Lab - Dr. Sweta Sushmita.webp',
          specialization: 'Pathology, Histopathology, Cytopathology, Hematology'
        },
        {
          id: 'praveen-kumar',
          name: 'Dr. Praveen Kumar',
          qualification: 'MBBS, DCP (Pathology)',
          experience: '8+ Years',
          image: 'assets/Doc-Side/Dr Praveen Kumar (Lab).webp',
          specialization: 'Consultant Pathology, Clinical Hematology, Cytology, Bone Marrow Biopsy, Histopathology'
        },






      ],

      successStories: [
        {
          title: 'Accurate Diagnosis through FNAC',
          patient: 'Suman',
          story: 'Raj Hospital’s laboratory team diagnosed my thyroid nodule accurately using FNAC. The results helped start treatment early and effectively.',
          outcome: 'Early detection and timely treatment ensured full recovery.'
        },
        {
          title: 'Comprehensive Preventive Testing',
          patient: 'Ramesh',
          story: 'The preventive checkup helped detect high cholesterol and early diabetes indicators. The detailed report guided my doctor effectively.',
          outcome: 'Preventive care led to better long-term health management.'
        }
      ],

      faqs: [
        {
          question: 'What blood tests can I get at Raj Hospitals?',
          answer: 'We offer all types of blood and biochemical tests including CBC, LFT, KFT, lipid profile, thyroid, infection markers, and hormonal assays.'
        },
        {
          question: 'What is FNAC and when is it needed?',
          answer: 'FNAC is a fine needle aspiration cytology test used to evaluate lumps or swellings for infections, benign, or cancerous conditions.'
        },
        {
          question: 'How soon are test results available?',
          answer: 'Most routine test results are available within a few hours. Specialized investigations may take 24 to 48 hours depending on complexity.'
        },
        {
          question: 'Is the testing process safe?',
          answer: 'Yes, all samples are handled in sterile, controlled conditions under NABL guidelines to ensure patient safety and test accuracy.'
        },
        {
          question: 'Do you provide digital reports?',
          answer: 'Yes, Raj Hospitals provides secure digital reporting and email/SMS alerts once the reports are ready.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    'neurology-ad': {
      id: 'neurology-ad',
      title: 'Neurology',
      icon: FiBrain,
      bannerImage: 'assets/specialties/Neurology-ad/Neurology.jpg',
      shortDescription: 'Comprehensive neurology care in Ranchi with advanced EEG, NCS, and expert neurologists for accurate diagnosis and treatment.',
      longDescription: 'The Department of Neurology at Raj Hospitals, Ranchi, provides cutting-edge diagnosis and treatment for disorders of the brain, nerves, and muscles. Our team of highly qualified neurologists specializes in managing conditions such as stroke, epilepsy, migraine, neuropathy, Parkinson’s disease, and muscle disorders. Supported by advanced neuro-diagnostic tools like EEG (Electroencephalogram) and NCS (Nerve Conduction Study), we ensure accurate detection and effective management of neurological conditions. Focused on patient comfort, efficiency, and clinical precision, Raj Hospitals continues to be a leader in neurological care across Ranchi and Jharkhand.',

      services: [
        {
          title: 'Stroke & Neuro-Rehabilitation',
          description: 'Comprehensive rehabilitation and therapy plans for patients recovering from stroke and neurological impairment.',
          image: 'assets/specialties/Neurology-ad/Stroke.jpg'
        },
        {
          title: 'Epilepsy Treatment & Monitoring',
          description: 'Specialized programs for epilepsy management including regular EEG monitoring and medication review.',
          image: 'assets/specialties/Neurology-ad/Epilepsy-Treatment.jpg'
        },
        {
          title: 'Neuro Infectious Disorder',
          description: "Expert management of neurological infections including Meningitis, Encephalitis, CNS Tuberculosis, and Pott's Spine.",
          image: 'assets/specialties/Neurology-ad/Neuro-Infectious-Disorder.jpg'
        },
        {
          title: 'Movement Disorder',
          description: 'Comprehensive care for movement disorders including Tremor, Dystonia, Chorea, and Athetosis.',
          image: 'assets/specialties/Neurology-ad/Movement-Disorder.jpg'
        },
        {
          title: 'Parkinson Disease and Atypical Parkinsonism',
          description: "Specialized treatment and management for Parkinson's Disease and Atypical Parkinsonism.",
          image: 'assets/specialties/Neurology-ad/Parkinson-Disease.jpg'
        },
        {
          title: 'Spine Disorders',
          description: 'Treatment for spine-related neurological conditions including Cervical and Lumbosacral Spondylosis.',
          image: 'assets/specialties/Neurology-ad/Spine-Disorders.jpg'
        },
        {
          title: 'EEG (Electroencephalogram)',
          description: 'A painless test to record brain\'s electrical activity used for diagnosing epilepsy, seizures, and sleep disorders.',
          image: 'assets/specialties/Neurology-ad/EEG.jpg'
        },
        {
          title: 'NCS (Nerve Conduction Study)',
          description: 'Measures the speed and strength of electrical signals in the nerves to detect neuropathy and nerve injuries.',
          image: 'assets/specialties/Neurology-ad/NCS.jpg'
        },

        {
          title: 'Migraine & Headache Management',
          description: 'Advanced diagnosis and personalized treatment plans for chronic headaches and migraines.',
          image: 'assets/specialties/Neurology-ad/Migraine & Headache.jpg'
        },

        {
          title: 'Neuropathy & Muscle Disorder Care',
          description: 'Targeted therapies and diagnostics for nerve pain, muscle weakness, and neuromuscular disorders.',
          image: 'assets/specialties/Neurology-ad/Neuropathy.jpg'
        }

      ],

      facilities: [
        'Modern EEG and NCS testing facilities',
        'Advanced neuro-diagnostic systems with digital data monitoring',
        '24/7 emergency support for stroke and neurological care',
        'Team approach involving neurologists and neurosurgeons',
        'Comfortable and safe test environment',
        'Accurate and timely digital reporting',
        'Rehabilitation and physiotherapy support',
        'Skilled and trained neuro-technicians'
      ],

      specialists: [
        {
          id: 'ahmad-hussain',
          name: 'Dr. Ahmad Hussain',
          qualification: 'MBBS, MD, DrNB',
          experience: '5+ Years',
          image: 'assets/Doc-Side/Dr Ahmad Hussain.webp',
          specialization: 'Neurology'
        },
        {
          id: '801',
          name: 'Dr. Prakash Chandra',
          qualification: 'MBBS, MS, MCH',
          experience: '18+ Years',
          image: "assets/Doc-Side/Dr. Prakash Chandra (Neuro Surgeon).webp",
          specialization: 'Neurology, Epileptology, and Neurophysiology'
        },
        {
          id: 'vijay-raj',
          name: 'Dr. Vijay Raj',
          qualification: 'MBBS, MD, DM (Neurology)',
          experience: '15+ Years',
          image: 'assets/Doc-Side/vijayraj.webp',
          specialization: 'Neurodiagnostics and Stroke Management'
        },
        // {
        //   id: '803',
        //   name: 'Dr. Ujjwal Roy',
        //   qualification: 'MBBS, DM (Neurology)',
        //   experience: '10+ Years',
        //   image: 'assets/specialties/Neurology/dr-ujjwal-roy.jpg',
        //   specialization: 'Headache, Migraine, and Movement Disorders'
        // }
      ],

      successStories: [
        {
          title: 'Accurate Epilepsy Diagnosis with EEG',
          patient: 'Sunita',
          story: 'I visited Raj Hospitals for recurring seizures. The EEG test quickly helped diagnose epilepsy and the doctor started the right treatment immediately.',
          outcome: 'Seizures well-controlled with targeted medication and care.'
        },
        {
          title: 'Recovery from Stroke',
          patient: 'Ravi',
          story: 'After a stroke, I received neurology care and rehabilitation at Raj Hospitals. The coordinated approach by doctors and therapists helped me regain strength and balance.',
          outcome: 'Steady recovery and improved quality of life post-stroke.'
        }
      ],

      faqs: [
        {
          question: 'What conditions are treated in the Neurology Department?',
          answer: 'We treat epilepsy, stroke, migraine, neuropathy, Parkinson’s disease, multiple sclerosis, and muscle disorders among others.'
        },
        {
          question: 'What is an EEG test used for?',
          answer: 'EEG helps record the brain’s electrical activity to detect conditions like seizures, epilepsy, and sleep disorders.'
        },
        {
          question: 'What is the purpose of NCS?',
          answer: 'Nerve Conduction Study measures how well signals pass through nerves, helping diagnose neuropathy, nerve injuries, and muscle weakness.'
        },
        {
          question: 'Are EEG and NCS painful?',
          answer: 'No, both EEG and NCS are safe, non-invasive, and painless diagnostic procedures.'
        },
        {
          question: 'Do you offer emergency neurology care?',
          answer: 'Yes, Raj Hospitals has 24/7 emergency neurology support for stroke, seizures, and other acute conditions.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 88888',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },

    // 'cardiology-ad': {
    //   id: 'cardiology-ad',
    //   title: 'Cardiology',
    //   icon: FiHeart,
    //   bannerImage: 'assets/specialties/Cardiology-ad/Cardiology-banner.jpg',
    //   shortDescription: 'Comprehensive heart care with advanced diagnostics, expert cardiologists, and complete cardiac evaluation under one roof.',
    //   longDescription: 'Raj Hospital’s Department of Cardiology in Ranchi provides advanced diagnostic and preventive heart care with the latest technology and expert supervision. The department ensures accurate testing through non-invasive procedures such as ECG, ECHO, TMT, Stress ECHO, and Holter Monitoring. Managed by skilled cardiologists and trained technicians, the center offers safe, precise, and compassionate cardiac evaluation to guide effective treatment plans.',

    //   services: [
    //     {
    //       title: 'ECG (Electrocardiogram)',
    //       description: 'A simple and quick test recording the heart’s electrical activity. Detects arrhythmias, heart attacks, and other cardiac issues.',
    //       image: 'assets/specialties/Cardiology-ad/ECG.jpg'
    //     },
    //     {
    //       title: 'ECHO (Echocardiography)',
    //       description: 'Ultrasound-based test showing heart structure and function. Diagnoses valve disorders, heart failure, and congenital defects.',
    //       image: 'assets/specialties/Cardiology-ad/ECHO.jpg'
    //     },
    //     {
    //       title: 'TMT (Treadmill Test)',
    //       description: 'Stress test evaluating heart performance during exercise. Identifies coronary artery disease and exercise-related issues.',
    //       image: 'assets/specialties/Cardiology-ad/TMT.jpg'
    //     },
    //     {
    //       title: 'Stress ECHO',
    //       description: 'Combines echocardiography with exercise or medical stress to assess blood flow and detect blockages or weak heart areas.',
    //       image: 'assets/specialties/Cardiology-ad/Stress-ECHO.jpg'
    //     },
    //     {
    //       title: 'Holter Monitoring',
    //       description: 'Portable ECG device worn for 24–48 hours to record continuous heart activity and identify irregular rhythms not captured in a standard ECG.',
    //       image: 'assets/specialties/Cardiology-ad/Holter-Monitoring.jpg'
    //     }
    //   ],

    //   facilities: [
    //     'Modern ECG, ECHO, TMT, and Stress ECHO machines',
    //     '24x7 Cardiac Monitoring Unit',
    //     'Holter Monitoring Facility',
    //     'Non-invasive and Preventive Cardiac Care Unit',
    //     'Dedicated Cardiology Technicians and Support Staff',
    //     'Computerized Diagnostic Reporting System',
    //     'Comfortable and Patient-centered Diagnostic Environment'
    //   ],

    //   specialists: [
    //     // {
    //     //   id: '401',
    //     //   name: 'Dr. Rajesh Kr. Jha',
    //     //   qualification: 'MBBS, MD, DM (Cardiology)',
    //     //   experience: '16+ Years',
    //     //   image: 'assets/specialties/Cardiology/dr-rajesh-jha.png',
    //     //   specialization: 'Interventional Cardiology'
    //     // },
    //     // {
    //     //   id: '402',
    //     //   name: 'Dr. Awnindra Kr. Jha',
    //     //   qualification: 'MBBS, MD, DM (Cardiology)',
    //     //   experience: '16+ Years',
    //     //   image: 'assets/specialties/Cardiology/dr-awnindra-jha.png',
    //     //   specialization: 'Interventional Cardiology'
    //     // }
    //   ],

    //   successStories: [
    //     {
    //       title: 'Timely Diagnosis Prevented Cardiac Arrest',
    //       patient: 'Mr. Suresh, 55',
    //       story: 'During a routine checkup, ECG and TMT revealed early-stage blockage. Immediate medication and lifestyle corrections prevented a potential cardiac arrest.',
    //       outcome: 'Full recovery with normal heart function.'
    //     },
    //     {
    //       title: 'Advanced ECHO Testing Saved a Life',
    //       patient: 'Mrs. Lata, 62',
    //       story: 'Echocardiography detected a valve disorder that required prompt intervention. After treatment, her heart health stabilized within weeks.',
    //       outcome: 'Improved heart performance and continued recovery.'
    //     }
    //   ],

    //   faqs: [
    //     {
    //       question: 'How often should I get a heart checkup?',
    //       answer: 'Adults over 40 or with risk factors like diabetes, high blood pressure, or family history should undergo annual cardiac screening.'
    //     },
    //     {
    //       question: 'Is the TMT safe for older adults?',
    //       answer: 'Yes, TMT is conducted under medical supervision with continuous monitoring to ensure safety and immediate response if needed.'
    //     },
    //     {
    //       question: 'What does the ECHO test reveal?',
    //       answer: 'ECHO evaluates heart valves, pumping efficiency, structure, and blood flow, helping in detection of heart disease or weakness.'
    //     },
    //     {
    //       question: 'How should I prepare for a cardiac test?',
    //       answer: 'Wear comfortable clothes, avoid heavy meals before TMT, and bring your medications or previous cardiac reports for review.'
    //     },
    //     {
    //       question: 'Can heart diseases be prevented?',
    //       answer: 'Yes, with regular exercise, balanced diet, stress management, avoiding smoking and alcohol, and routine checkups.'
    //     }
    //   ],

    //   contactInfo: {
    //     helpline: '+91 97714 66634',
    //     appointmentLink: 'https://rajhospitals.com/contact.php',
    //     address: 'Raj Hospitals, Ranchi, Jharkhand'
    //   }
    // },

    //  oral & maxillofacial surgery
    'oral-maxillofacial-surgery-ad': {
      id: 'oral-maxillofacial-surgery-ad',
      title: 'Oral & Maxillofacial Surgery',
      icon: FiActivity,
      bannerImage: 'assets/specialties/OralMaxillofacial-ad/oral-maxillofacial-banner.jpg',

      shortDescription:
        'Specialized surgical care for the mouth, teeth, jaws, and facial structures with advanced techniques and expert oral & maxillofacial surgeons.',

      longDescription:
        'Raj Hospital’s Department of Oral & Maxillofacial Surgery in Ranchi provides comprehensive surgical care for conditions affecting the mouth, jawbones, teeth, and facial region. Our specialized surgeons are trained in managing complex facial trauma, jaw misalignment, cysts and tumors, impacted wisdom teeth, TMJ disorders, and oral pathology. With advanced diagnostic support, sterile OT environments, and minimally invasive techniques, we ensure safe, precise, and comfortable treatment with faster healing and long-term results.',

      services: [
        {
          title: 'Wisdom Tooth (Third Molar) Removal',
          description:
            'Expert extraction of impacted or partially erupted wisdom teeth using minimally invasive techniques to reduce pain, swelling, and complications.',
          image: 'assets/specialties/OralMaxillofacial-ad/wisdom-tooth-removal.jpg'
        },
        {
          title: 'Facial & Jaw Trauma Surgery',
          description:
            'Comprehensive treatment for fractures of the jaw, cheekbone, nasal bone, and eye socket. Restores facial function, symmetry, and aesthetics.',
          image: 'assets/specialties/OralMaxillofacial-ad/facial-trauma-surgery.jpg'
        },
        {
          title: 'Cyst & Tumor Removal (Oral Pathology)',
          description:
            'Diagnosis and surgical removal of oral cysts, benign tumors, and other abnormal growths to prevent infection, bone loss, or recurrence.',
          image: 'assets/specialties/OralMaxillofacial-ad/cyst-tumor-removal.jpg'
        },
        {
          title: 'Orthognathic (Corrective Jaw) Surgery',
          description:
            'Corrective surgery for jaw deformities, bite problems, and facial asymmetry using digital planning and modern surgical techniques.',
          image: 'assets/specialties/OralMaxillofacial-ad/orthognathic-surgery.jpg'
        },
        {
          title: 'TMJ Disorder Management',
          description:
            'Diagnosis and treatment of temporomandibular joint disorders causing jaw pain, locking, clicking, or restricted movement.',
          image: 'assets/specialties/OralMaxillofacial-ad/tmj-treatment.jpg'
        },
        {
          title: 'Dental Implants & Bone Grafting',
          description:
            'Implant placement for missing teeth supported by sinus lift, ridge augmentation, and bone grafting when required.',
          image: 'assets/specialties/OralMaxillofacial-ad/dental-implants.jpg'
        },
        {
          title: 'Pre-Prosthetic Surgery',
          description:
            'Adjustments to jawbone and soft tissues to improve denture fit and comfort, ensuring long-term stability.',
          image: 'assets/specialties/OralMaxillofacial-ad/pre-prosthetic-surgery.jpg'
        }
      ],

      facilities: [
        'Dedicated Oral & Maxillofacial Surgery OT',
        'Advanced Digital X-ray, OPG & CBCT Imaging',
        'Modern Dental Implant Systems',
        'Emergency Facial Trauma Management Unit',
        'Sedation & Anesthesia Support for Surgeries',
        'Sterile and Patient-friendly Surgical Environment',
        'Computerized Treatment Planning for Jaw Surgery'
      ],

      specialists: [
        {
          id: 'abhishek-bhattacharjee',
          name: 'Dr. Abhishek Bhattacharjee',
          qualification: 'BDS, MDS',
          experience: '12+ Years',
          image: '/assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.png',
          specialization: 'Maxillofacial Surgery & Dental Implants'
        }
      ],

      successStories: [
        {
          title: 'Complex Jaw Fracture Repaired Successfully',
          patient: 'Mr. Arvind, 28',
          story:
            'After a road accident, the patient suffered fractures in the lower jaw and cheekbone. The surgical team performed open reduction and fixation using titanium plates.',
          outcome: 'Full recovery with restored facial symmetry and normal jaw function.'
        },
        {
          title: 'Pain-free Wisdom Tooth Extraction',
          patient: 'Ms. Ruchi, 21',
          story:
            'The patient had severe pain due to an impacted wisdom tooth. A minimally invasive extraction was performed with no postoperative complications.',
          outcome: 'Quick healing with complete symptom relief.'
        }
      ],

      faqs: [
        {
          question: 'When should wisdom teeth be removed?',
          answer:
            'Impacted, infected, or painful wisdom teeth should be removed early to prevent swelling, decay, or damage to nearby teeth.'
        },
        {
          question: 'Is jaw surgery painful?',
          answer:
            'Jaw surgery is performed under anesthesia, and pain is well-managed with medications. Most patients return to normal activities within a few weeks.'
        },
        {
          question: 'How are facial fractures treated?',
          answer:
            'Surgeons use titanium plates and screws to realign and stabilize fractured bones, restoring function and appearance.'
        },
        {
          question: 'Are dental implants safe?',
          answer:
            'Yes, dental implants are highly safe and have a success rate of over 95% when placed by trained oral surgeons using proper planning.'
        },
        {
          question: 'How long is recovery after oral surgery?',
          answer:
            'Recovery varies by procedure, but most minor surgeries heal in 3–7 days, while larger surgeries may take a few weeks.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 66634',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },



    'radiology': {
      id: 'radiology',
      title: 'Radiology',
      icon: FiActivity,
      bannerImage: 'assets/specialties/Radiology-ad/radiology banner.jpg',
      shortDescription: 'Comprehensive, high-precision radiology and imaging services with advanced MRI, CT, Ultrasound, and more under one roof.',
      longDescription: 'Raj Hospital’s Department of Radiology in Ranchi offers a complete range of imaging and diagnostic facilities under one roof. Equipped with cutting-edge MRI, CT Scan, OPG, MRCP, Ultrasound, Full Body BMD, and Image Intensifier systems, our unit ensures the most accurate diagnosis to guide effective treatment. Managed by expert radiologists and technologists, we combine precision, safety, and compassionate care to deliver the best outcomes for every patient.',

      services: [

        {
          title: 'MRI (Magnetic Resonance Imaging)',
          description: 'Provides detailed, high-resolution images of the brain, spine, joints, and internal organs without radiation exposure. Ideal for neurological, orthopedic, and soft-tissue evaluations.',
          image: 'assets/specialties/Radiology-ad/MRI.jpg'
        },
        {
          title: 'CT Scan (Computed Tomography)',
          description: 'Produces cross-sectional images of organs, bones, and blood vessels to help detect tumors, fractures, and internal injuries.',
          image: 'assets/specialties/Radiology-ad/CT Scan.jpg'
        },
        {
          title: 'OPG (Orthopantomogram)',
          description: 'Panoramic dental X-ray of teeth, jawbones, and surrounding structures. Essential for dental and orthodontic planning.',
          image: 'assets/specialties/Radiology-ad/OPG.jpg'
        },
        {
          title: 'MRCP (Magnetic Resonance Cholangiopancreatography)',
          description: 'Specialized MRI to visualize the liver, gallbladder, bile ducts, and pancreas to detect stones or obstructions.',
          image: 'assets/specialties/Radiology-ad/MRCP.jpg'
        },
        {
          title: 'Ultrasound',
          description: 'A safe and painless non-invasive procedure using sound waves to visualize soft tissues, organs, and blood flow.',
          image: 'assets/specialties/Radiology-ad/Ultrasound.jpg'
        },
        {
          title: 'Full Body BMD (Bone Mineral Densitometry)',
          description: 'Measures bone density to evaluate osteoporosis risk and monitor bone health.',
          image: 'assets/specialties/Radiology-ad/Full Body BMD.jpg'
        },
        {
          title: 'Image Intensifier',
          description: 'Real-time X-ray imaging used in surgeries and orthopedic procedures for precision and safety.',
          image: 'assets/specialties/Radiology-ad/Image Intensifier.jpg'
        }


      ],

      facilities: [
        'Fully Digital Radiology and Imaging Department',
        'State-of-the-art MRI and CT Scan Units',
        'Ultrasound and Color Doppler Imaging',
        'Dental Imaging and OPG',
        'Advanced MRCP and BMD Services',
        'Real-time Surgical Imaging (Image Intensifier)',
        'Certified and Experienced Radiology Technicians'
      ],

      specialists: [
        {
          id: 'shekhar-sharma',
          name: 'Dr. Shekhar Sharma',
          qualification: 'MBBS, DMRD (Radiodiagnosis)',
          experience: '20+ Years',
          image: 'assets/Doc-Side/Dr Shekhar Sharma (Radiologist).webp', // No image provided
          specialization: 'Radiodiagnosis, MRI, CT, Conventional Radiology'
        },

      ],

      successStories: [
        {
          title: 'Early Tumor Detection through MRI',
          patient: 'Mr. Rakesh, 52',
          story: 'An MRI scan performed at Raj Hospital detected a small brain tumor at an early stage, enabling timely surgery and successful recovery.',
          outcome: 'Full recovery after treatment with no complications.'
        },
        {
          title: 'Accurate Bone Density Diagnosis',
          patient: 'Mrs. Anita, 60',
          story: 'BMD testing helped diagnose osteoporosis early, allowing preventive treatment that improved her mobility and bone health.',
          outcome: 'Improved bone strength and quality of life.'
        }
      ],

      faqs: [
        {
          question: 'Are the imaging tests safe?',
          answer: 'Yes, all imaging tests are conducted using international safety protocols, with minimal or no radiation exposure depending on the type of scan.'
        },
        {
          question: 'Do I need a doctor’s referral for diagnostic tests?',
          answer: 'It is recommended to have a referral for appropriate test selection, but some basic screenings can be booked directly.'
        },
        {
          question: 'How long does it take to get scan reports?',
          answer: 'Most reports are available within a few hours, while specialized scans may take up to 24 hours.'
        },
        {
          question: 'What should I bring for my diagnostic test?',
          answer: 'Bring your valid ID, any previous medical reports, and prescriptions related to your current condition.'
        },
        {
          question: 'How do you ensure patient comfort during scans?',
          answer: 'We use modern, low-noise scanners, comfortable patient positioning, and a caring staff to ensure stress-free experience.'
        }
      ],

      contactInfo: {
        helpline: '+91 97714 66634',
        appointmentLink: 'https://rajhospitals.com/contact.php',
        address: 'Raj Hospitals, Ranchi, Jharkhand'
      }
    },


    //new doctors added- no specialists mentioned 
    // {
    //   id: 'ashok-kr-agarwal',
    //   name: 'Dr. Ashok Kr Agarwal',
    //   qualification: 'MBBS, MD (Medicine)',
    //   experience: '8 Years',
    //   image: '', // No image provided
    //   specialization: 'Consultant Physician, Diabetic Specialist, Heart Specialist, Chest Specialist'
    // },
    //   {
    //   id: 'ajeet-singh',
    //     name: 'Dr. Ajeet Singh',
    //       qualification: 'MBBS (1982), Post Graduate Diploma (1988)',
    //         experience: '38 Years',
    //           image: '', // No image provided
    //             specialization: 'Strategic Planning, Compliance, COVID-19 Nodal Officer, Health Programs, CME Training'
    // },
    // {
    // id: 'sanjeev-kumar-ravi',
    //   name: 'Dr. Sanjeev Kumar Ravi',
    //     qualification: 'MBBS, Ultrasound Training Course, Diploma in Family Medicine',
    //       experience: '20 Years',
    //         image: '', // No image provided
    //             specialization: 'Ultrasonography, Casualty, ICU, HDU, General Ward'
    // },
    // {
    //   id: 'ashish-kumar',
    //   name: 'Dr. Ashish Kumar',
    //   qualification: 'MBBS, MS (General Surgery)',
    //   experience: '12 Years',
    //   image: '', // No image provided
    //   specialization: 'Laparoscopic Surgery, Laser Proctology, Diagnostic & Therapeutic Endoscopy'
    // },
    //     {
    //   id: 'shubham-shekhar',
    //   name: 'Dr. Shubham Shekhar',
    //   qualification: 'ACLS, BLS',
    //   experience: '2 Years',
    //   image: '', // No image provided
    //   specialization: 'Emergency Medicine, Trauma Care, ICU, Casualty, OPD Management'
    // },


















  };






  // Conditions data for each specialty

  const conditionsData = {
    // 1. Cardiology
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
      'Heart Murmurs'
    ],

    // 2. Gastroenterology
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


    // 3. Critical Care
    'critical-care-': [
      'Sepsis & Septic Shock',
      'Acute Respiratory Distress Syndrome (ARDS)',
      'Multi-Organ Failure',
      'Respiratory Failure',
      'Cardiac Arrest & Post-Cardiac Arrest Care',
      'Severe Trauma & Polytrauma',
      'Acute Kidney Injury (AKI)',
      'Diabetic Ketoacidosis (DKA)',
      'Status Epilepticus',
      'Severe Pneumonia',
      'Acute Liver Failure',
      'Hemorrhagic Shock',
      'Severe Burns',
      'Acute Pancreatitis (Severe)',
      'Cardiogenic Shock',
      'Neurocritical Emergencies',
      'Post-Operative Critical Care',
      'Ventilator-Associated Complications'
    ],

    // 4. Emergency
    emergency: [
      'Acute Chest Pain & Heart Attack',
      'Stroke & TIA (Transient Ischemic Attack)',
      'Trauma & Major Injuries',
      'Severe Bleeding & Hemorrhage',
      'Fractures & Dislocations',
      'Head Injuries & Concussions',
      'Burns & Smoke Inhalation',
      'Poisoning & Overdose',
      'Allergic Reactions & Anaphylaxis',
      'Asthma Attacks & Severe Breathlessness',
      'Seizures & Convulsions',
      'Acute Abdominal Pain',
      'Road Traffic Accidents',
      'Snake Bites & Animal Attacks',
      'Drowning & Near-Drowning',
      'Electric Shock Injuries',
      'Heatstroke & Hypothermia',
      'Foreign Body Ingestion'
    ],

    // 5. Minimal Access Surgery
    'minimal-access-surgery': [
      'Laparoscopic Cholecystectomy (Gallbladder Removal)',
      'Laparoscopic Appendectomy',
      'Hernia Repair (Inguinal, Umbilical, Hiatal)',
      'Laparoscopic Bariatric Surgery',
      'Laparoscopic Colorectal Surgery',
      'Laparoscopic Gastric Surgery',
      'Thyroid & Parathyroid Surgery',
      'Breast Surgery (Lumps, Fibroadenomas)',
      'Soft Tissue Tumor Excision',
      'Varicose Veins Treatment',
      'Pilonidal Sinus Surgery',
      'Fistula-in-Ano Treatment',
      'Hemorrhoids (Piles) Surgery',
      'Laser Surgery for Various Conditions',
      'Abdominal Wall Reconstruction',
      'Splenic Surgery'
    ],

    // 6. Nephrology
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
      'Autoimmune Kidney Disease'
    ],

    // 7. Neurosciences
    neurosciences: [
      'Stroke (Ischemic & Hemorrhagic)',
      'Brain Tumors (Benign & Malignant)',
      'Spinal Cord Tumors',
      'Traumatic Brain Injury (TBI)',
      'Spinal Cord Injuries',
      'Brain Aneurysms & AVM',
      'Hydrocephalus',
      'Epilepsy & Seizure Disorders',
      'Parkinson\'s Disease',
      'Brain Hemorrhage & Hematoma',
      'Spinal Stenosis',
      'Herniated Disc & Sciatica',
      'Trigeminal Neuralgia',
      'Movement Disorders',
      'Cerebrovascular Diseases',
      'Spinal Deformities',
      'Peripheral Nerve Disorders',
      'Neuro-Infections'
    ],

    // 8. Oncology (Cancer Care)
    'oncology-cancer-care': [
      'Breast Cancer',
      'Lung Cancer',
      'Colorectal Cancer',
      'Stomach Cancer',
      'Liver Cancer',
      'Pancreatic Cancer',
      'Prostate Cancer',
      'Ovarian Cancer',
      'Cervical Cancer',
      'Uterine Cancer',
      'Head & Neck Cancers',
      'Thyroid Cancer',
      'Kidney Cancer',
      'Bladder Cancer',
      'Esophageal Cancer',
      'Oral Cancer',
      'Skin Cancer & Melanoma',
      'Bone & Soft Tissue Sarcomas'
    ],

    // 9. Orthopaedics & Joint Replacement
    'orthopaedics-and-joint-replacement': [
      'Knee Replacement (Total & Partial)',
      'Hip Replacement',
      'Shoulder Replacement',
      'Osteoarthritis',
      'Rheumatoid Arthritis',
      'Fractures & Trauma',
      'Sports Injuries',
      'ACL & PCL Tears',
      'Meniscus Tears',
      'Rotator Cuff Injuries',
      'Spinal Disorders & Deformities',
      'Herniated Disc & Sciatica',
      'Osteoporosis',
      'Bone Infections',
      'Limb Deformities',
      'Pediatric Orthopaedic Conditions',
      'Joint Dislocations',
      'Tendon & Ligament Injuries'
    ],

    // 10. Pulmonology
    pulmonology: [
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Asthma',
      'Pneumonia',
      'Tuberculosis (TB)',
      'Bronchitis (Acute & Chronic)',
      'Interstitial Lung Disease',
      'Pulmonary Fibrosis',
      'Lung Cancer',
      'Pleural Effusion',
      'Pneumothorax (Collapsed Lung)',
      'Pulmonary Embolism',
      'Sleep Apnea',
      'Bronchiectasis',
      'Pulmonary Hypertension',
      'Sarcoidosis',
      'Occupational Lung Diseases',
      'Allergic Respiratory Disorders',
      'Respiratory Infections'
    ],

    // 11. Internal Medicine
    'internal-medicine': [
      'Diabetes Mellitus (Type 1 & 2)',
      'Hypertension',
      'Thyroid Disorders (Hypo/Hyperthyroidism)',
      'Chronic Kidney Disease',
      'Anemia & Blood Disorders',
      'Infectious Diseases',
      'Dengue Fever',
      'Malaria',
      'Typhoid',
      'Viral Infections',
      'Metabolic Syndrome',
      'Obesity Management',
      'Dyslipidemia (High Cholesterol)',
      'Rheumatological Disorders',
      'Autoimmune Diseases',
      'Chronic Fatigue Syndrome',
      'Fever of Unknown Origin',
      'Lifestyle Disease Management'
    ],

    // 12. Urology
    urology: [
      'Kidney Stones (Urolithiasis)',
      'Urinary Tract Infections (UTI)',
      'Benign Prostatic Hyperplasia (BPH)',
      'Prostate Cancer',
      'Bladder Cancer',
      'Kidney Cancer (Renal Cell Carcinoma)',
      'Erectile Dysfunction',
      'Male Infertility',
      'Urinary Incontinence',
      'Overactive Bladder (OAB)',
      'Testicular Cancer',
      'Varicocele',
      'Hydrocele',
      'Urethral Stricture',
      'Pelvic Organ Prolapse',
      'Penile Disorders',
      'Pediatric Urological Conditions',
      'Hematuria (Blood in Urine)'
    ],

    // 13. Obstetrics & Gynaecology
    'obstetrics-and-gynaecology': [
      'Normal & High-Risk Pregnancy Care',
      'Gestational Diabetes',
      'Preeclampsia & Eclampsia',
      'Miscarriage Management',
      'Infertility Treatment',
      'Polycystic Ovary Syndrome (PCOS)',
      'Endometriosis',
      'Uterine Fibroids',
      'Ovarian Cysts',
      'Menstrual Disorders',
      'Menopause Management',
      'Cervical Cancer',
      'Ovarian Cancer',
      'Uterine Cancer',
      'Pelvic Inflammatory Disease',
      'Ectopic Pregnancy',
      'Cesarean Section',
      'Gynecological Laparoscopic Surgery'
    ],

    // 14. Aesthetic & Reconstructive Surgery
    'aesthetic-and-reconstructive-surgery': [
      'Cleft Lip & Palate Repair',
      'Burn Reconstruction',
      'Scar Revision & Management',
      'Facial Trauma Reconstruction',
      'Breast Reconstruction',
      'Hand Surgery & Reconstruction',
      'Congenital Deformity Correction',
      'Post-Accident Reconstructive Surgery',
      'Rhinoplasty (Nose Reshaping)',
      'Facial Aesthetic Procedures',
      'Liposuction',
      'Body Contouring',
      'Hair Transplantation',
      'Skin Grafting',
      'Microvascular Surgery',
      'Craniofacial Surgery'
    ],

    // 15. Dental
    dental: [
      'Tooth Decay & Cavities',
      'Gum Disease (Gingivitis & Periodontitis)',
      'Tooth Extraction',
      'Root Canal Treatment',
      'Dental Implants',
      'Orthodontic Treatment (Braces)',
      'Teeth Whitening',
      'Dental Crowns & Bridges',
      'Dentures (Removable)',
      'Oral Cancer',
      'Jaw Disorders (TMJ)',
      'Impacted Wisdom Teeth',
      'Dental Trauma',
      'Pediatric Dental Care',
      'Cosmetic Dentistry',
      'Maxillofacial Surgery',
      'Oral Infections & Abscesses',
      'Teeth Alignment Issues'
    ],

    // 16. Dermatology
    dermatology: [
      'Acne & Acne Scars',
      'Eczema (Atopic Dermatitis)',
      'Psoriasis',
      'Vitiligo',
      'Hair Loss (Alopecia)',
      'Dandruff & Scalp Disorders',
      'Skin Infections (Bacterial, Fungal)',
      'Pigmentation Disorders',
      'Melasma',
      'Skin Allergies',
      'Warts & Moles',
      'Skin Cancer',
      'Rosacea',
      'Urticaria (Hives)',
      'Contact Dermatitis',
      'Aging Skin & Wrinkles',
      'Chemical Peels',
      'Laser Skin Treatments'
    ],

    // 17. ENT (Ear, Nose, Throat)
    ent: [
      'Hearing Loss (Conductive & Sensorineural)',
      'Ear Infections (Otitis Media)',
      'Tinnitus (Ringing in Ears)',
      'Chronic Sinusitis',
      'Nasal Polyps',
      'Deviated Nasal Septum',
      'Allergic Rhinitis',
      'Tonsillitis & Adenoiditis',
      'Throat Infections',
      'Voice Disorders & Hoarseness',
      'Sleep Apnea & Snoring',
      'Vertigo & Balance Disorders',
      'Thyroid & Neck Swellings',
      'Salivary Gland Disorders',
      'Head & Neck Tumors',
      'Facial Nerve Disorders',
      'Foreign Bodies in Ear/Nose/Throat',
      'Nosebleeds (Epistaxis)'
    ],

    // 18. Eye Care
    'eye-care': [
      'Cataract',
      'Glaucoma',
      'Diabetic Retinopathy',
      'Age-Related Macular Degeneration',
      'Refractive Errors (Myopia, Hyperopia)',
      'LASIK & Refractive Surgery',
      'Corneal Disorders',
      'Retinal Detachment',
      'Conjunctivitis (Pink Eye)',
      'Dry Eye Syndrome',
      'Eye Infections',
      'Strabismus (Squint)',
      'Amblyopia (Lazy Eye)',
      'Pterygium',
      'Eye Injuries & Trauma',
      'Uveitis',
      'Pediatric Eye Disorders',
      'Low Vision Rehabilitation'
    ],

    // 19. Paediatrics & Neonatology
    'pediatrics-and-neonatology': [
      'Neonatal Jaundice',
      'Premature Birth Complications',
      'Birth Asphyxia',
      'Neonatal Infections',
      'Congenital Anomalies',
      'Childhood Asthma',
      'Pneumonia in Children',
      'Diarrhea & Dehydration',
      'Malnutrition',
      'Growth & Development Disorders',
      'Childhood Diabetes',
      'Epilepsy in Children',
      'ADHD & Behavioral Issues',
      'Autism Spectrum Disorder',
      'Childhood Obesity',
      'Immunization & Vaccination',
      'Pediatric Infections',
      'Congenital Heart Disease'
    ],

    // 20. Physiotherapy & Rehabilitation
    'physiotherapy-and-rehabilitation': [
      'Post-Stroke Rehabilitation',
      'Post-Surgical Rehabilitation',
      'Sports Injury Rehabilitation',
      'Joint Pain & Stiffness',
      'Back Pain & Neck Pain',
      'Spinal Cord Injury Rehabilitation',
      'Fracture Rehabilitation',
      'Arthritis Management',
      'Neurological Rehabilitation',
      'Cardiac Rehabilitation',
      'Respiratory Physiotherapy',
      'Pediatric Developmental Delays',
      'Geriatric Rehabilitation',
      'Balance & Gait Training',
      'Post-Amputation Rehabilitation',
      'Chronic Pain Management',
      'Ergonomic Consultations',
      'ICU Mobility Programs'
    ],

    // 21. Nutrition & Dietetics
    'nutrition-and-dietetics': [
      'Diabetes Diet Management',
      'Weight Loss Programs',
      'Obesity Management',
      'Cardiovascular Disease Diet',
      'Renal Diet Planning',
      'Liver Disease Nutrition',
      'Gastrointestinal Diet Management',
      'Pregnancy & Lactation Nutrition',
      'Pediatric Nutrition',
      'Sports Nutrition',
      'Eating Disorders',
      'Food Allergies & Intolerances',
      'Malnutrition',
      'Post-Surgical Nutrition',
      'Cancer Nutrition Support',
      'Thyroid Disorder Diet',
      'PCOS Diet Management',
      'Geriatric Nutrition'
    ],

    // 22. Psychiatry & Mental Health
    'psychiatry-and-mental-health': [
      'Depression',
      'Anxiety Disorders',
      'Bipolar Disorder',
      'Schizophrenia',
      'Obsessive-Compulsive Disorder (OCD)',
      'Post-Traumatic Stress Disorder (PTSD)',
      'Panic Attacks',
      'Phobias',
      'Attention Deficit Hyperactivity Disorder (ADHD)',
      'Eating Disorders (Anorexia, Bulimia)',
      'Substance Abuse & Addiction',
      'Sleep Disorders',
      'Personality Disorders',
      'Stress Management',
      'Suicidal Tendencies',
      'Dementia & Cognitive Disorders',
      'Relationship Issues',
      'Child & Adolescent Psychiatry'
    ],

    // 23. Neurology-ad
    'neurology-ad': [
      'Stroke (Acute Management)',
      'Epilepsy & Seizures',
      'Migraine & Headaches',
      'Parkinson\'s Disease',
      'Multiple Sclerosis',
      'Alzheimer\'s Disease',
      'Neuropathy (Peripheral Nerve Damage)',
      'Myasthenia Gravis',
      'Motor Neuron Disease',
      'Bell\'s Palsy',
      'Vertigo & Dizziness',
      'Dementia',
      'Memory Disorders',
      'Tremors & Movement Disorders',
      'Meningitis & Encephalitis',
      'Brain Fog & Cognitive Issues',
      'Nerve Conduction Studies',
      'EEG Monitoring'
    ],

    // 24. Cardiology-ad
    'cardiology-ad': [
      'Coronary Artery Disease',
      'Heart Attack Prevention',
      'Cardiac Arrhythmias',
      'Heart Failure Management',
      'Hypertension Control',
      'Lipid Disorders',
      'Valvular Heart Disease',
      'Cardiomyopathy',
      'Atrial Fibrillation',
      'Ventricular Tachycardia',
      'Stress Testing & Evaluation',
      'ECG & Echocardiography',
      'Holter Monitoring',
      'Treadmill Test (TMT)',
      'Stress ECHO',
      'Cardiac Risk Assessment',
      'Preventive Cardiology',
      'Post-Heart Attack Care'
    ],

    // 25. Radiology
    radiology: [
      'MRI Imaging (Brain, Spine, Joints)',
      'CT Scan (Head, Chest, Abdomen)',
      'Ultrasound (Abdominal, Pelvic, Obstetric)',
      'X-Ray Imaging',
      'Mammography (Breast Screening)',
      'MRCP (Pancreatic & Biliary)',
      'Bone Density Scan (BMD)',
      'OPG (Dental Panoramic X-Ray)',
      'Image Intensifier Studies',
      'Contrast Studies',
      'Doppler Studies',
      'Interventional Radiology',
      'Fluoroscopy',
      'Nuclear Medicine Imaging',
      'Cardiac Imaging',
      'Vascular Imaging',
      'Emergency Radiology',
      'Pediatric Imaging'
    ],

    // 26. Laboratory Investigations
    'laboratory-investigations': [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting & PP)',
      'HbA1c (Diabetes Monitoring)',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT)',
      'Lipid Profile',
      'Thyroid Function Test (TSH, T3, T4)',
      'Urine Routine & Microscopy',
      'Blood Culture & Sensitivity',
      'Cardiac Markers (Troponin, CPK-MB)',
      'Dengue NS1 & Antibodies',
      'Malaria Test',
      'COVID-19 RT-PCR',
      'Vitamin D & B12',
      'Tumor Markers (PSA, CEA, AFP)',
      'Pregnancy Test (Beta hCG)',
      'Semen Analysis',
      'Histopathology & Biopsy',
      'Fine Needle Aspiration Cytology (FNAC)',
      'Hormonal Assays'
    ]
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
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center items-center">
                Meet Our Specialists
              </h3>
              <div
                className="flex flex-col gap-8 overflow-y-auto"
                style={{ maxHeight: "1000px", maxWidth: "340px", margin: "0 auto" }}
              >
                {specialty.specialists.map((doctor, index) => (
                  <motion.div
                    key={doctor.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full"
                    style={{ minHeight: "500px" }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                        }}
                      />
                      <div className="absolute inset-0"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                      <p className="text-primary-600 font-medium mb-2">{doctor.qualification}</p>
                      <p className="text-secondary-600 text-sm mb-3">{doctor.specialization}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FiAward className="w-4 h-4 mr-2" />
                        <span>{doctor.experience} Experience</span>
                      </div>
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 mb-2"
                      >
                        <FiCalendar className="w-4 h-4" />
                        <span>Book Appointment</span>
                      </Link>
                      <Link
                        to={`/doctors/${doctor.id}`}
                        className="w-full bg-white text-primary-600 py-2 rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2"
                      >
                        <FiUser className="w-4 h-4" />
                        <span>View Profile</span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
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

      {/* FAQs and Contact Form */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FAQs Column */}
            <div>
              <div className="space-y-4">
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
                        <FiIcons.FiMinus className="text-2xl text-primary-500 flex-shrink-0 ml-4" /> :
                        <FiIcons.FiPlus className="text-2xl text-primary-500 flex-shrink-0 ml-4" />
                      }
                    </div>
                    <div
                      className={`text-gray-700 transition-max-height duration-300 overflow-hidden ${openIndex === index ? "max-h-40" : "max-h-0"}`
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

            {/* Contact Form Column */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Have More Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our {specialty.title} specialists
                </p>

                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="inquiry_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="inquiry_name"
                      name="inquiry_name"
                      required
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="inquiry_email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="inquiry_email"
                      name="inquiry_email"
                      required
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="inquiry_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="inquiry_phone"
                      name="inquiry_phone"
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="inquiry_message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Question <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="inquiry_message"
                      name="inquiry_message"
                      required
                      rows="4"
                      className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Describe your question or concern..."
                    ></textarea>
                  </div>

                  {/* Hidden field for specialty */}
                  <input type="hidden" name="specialty" value={specialty.title} />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <FiIcons.FiSend className="w-5 h-5" />
                    Submit Inquiry
                  </button>

                  {/* Info Text */}
                  <p className="text-xs text-gray-600 text-center mt-3">
                    Our team will respond within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );

};

export default SpecialtyDetail;