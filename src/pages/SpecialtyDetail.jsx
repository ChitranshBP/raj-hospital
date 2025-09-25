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

    }
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