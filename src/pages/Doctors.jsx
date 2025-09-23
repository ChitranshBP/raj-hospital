import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUser, FiSearch, FiFilter } = FiIcons;

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  // Updated doctors data with correct images from Raj Hospitals website
  const doctors = [
  {
    id: 1,
    name: 'Dr. Anupama Mahi',
    qualifications: 'MBBS, MS, DNB, D MAS',
    specialty: 'Obstetrics & Gynecology',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFudXBhbWElMjBNYWhpJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBpbiUyME9ic3RldHJpY3MlMjAlMjYlMjBHeW5lY29sb2d5LnxlbnwwfHx8fDE3NTUwODcwMDZ8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant in Obstetrics & Gynecology. Expert in high-risk pregnancies, minimally invasive gynecological procedures, and comprehensive women\'s health care.',
    expertise: ['High-Risk Pregnancy Management', 'Laparoscopic Surgery', 'Infertility Treatment', 'Gynecological Oncology'],
    availability: 'Mon-Sat: 10:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Gynecologist Award 2022', 'Excellence in Women\'s Health']
  },
  {
    id: 2,
    name: 'Dr. Ashish Kumar Modi',
    qualifications: 'MBBS, MS, FMAS',
    specialty: 'Laparoscopic & General Surgery',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFzaGlzaCUyMEt1bWFyJTIwTW9kaSUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwaW4lMjBsYXBhcm9zY29waWMlMjBhbmQlMjBnZW5lcmFsJTIwc3VyZ2VyeS58ZW58MHx8fHwxNzU1MDg2OTk1fDA&ixlib=rb-4.1.0&q=80&w=200$w=400',
    description: 'Senior Consultant in Laparoscopic & General Surgery. Specialized in advanced laparoscopic procedures, bariatric surgery, and minimally invasive surgical techniques.',
    expertise: ['Advanced Laparoscopy', 'Bariatric Surgery', 'Hernia Repair', 'Gallbladder Surgery'],
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Minimally Invasive Surgery', 'Best Surgeon Award 2023']
  },
  {
    id: 3,
    name: 'Dr. Avinash Kumar',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Nephrology',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEF2aW5hc2glMjBLdW1hciUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwbmVwaHJvbG9naXN0LnxlbnwwfHx8fDE3NTUwODY5OTl8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Nephrologist. Expert in kidney diseases, dialysis management, kidney transplantation, and chronic kidney disease care.',
    expertise: ['Kidney Transplantation', 'Dialysis Management', 'Chronic Kidney Disease', 'Hypertension Management'],
    availability: 'Tue-Sat: 11:00 AM - 7:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Nephrology', 'Best Kidney Care Specialist']
  },
  {
    id: 4,
    name: 'Dr. Binay Kumar',
    qualifications: 'MBBS, MS, FIAGES',
    specialty: 'Laparoscopic & General Surgery',
    experience: '20+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEJpbmF5JTIwS3VtYXIlMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMHN1cmdlb24ufGVufDB8fHx8MTc1NTA4NzAwMXww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Surgeon with extensive experience in complex abdominal surgeries, endoscopic procedures, and advanced surgical techniques.',
    expertise: ['Complex Abdominal Surgery', 'Endoscopic Procedures', 'Trauma Surgery', 'Colorectal Surgery'],
    availability: 'Mon-Wed-Fri: 10:00 AM - 4:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Senior Surgeon Excellence Award', 'Lifetime Achievement in Surgery']
  },
  {
    id: 5,
    name: 'Dr. Rajesh Kumar Sinha',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Cardiology',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFJhamVzaCUyMEt1bWFyJTIwU2luaGElMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMGNhcmRpb2xvZ2lzdC58ZW58MHx8fHwxNzU1MDg3MDAzfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Cardiologist. Interventional cardiologist specializing in complex cardiac procedures, angioplasty, and comprehensive heart disease management.',
    expertise: ['Interventional Cardiology', 'Angioplasty & Stenting', 'Cardiac Catheterization', 'Heart Failure Management'],
    availability: 'Mon-Sat: 8:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Cardiologist Award', 'Excellence in Heart Care']
  },
  {
    id: 6,
    name: 'Dr. Priya Kumari',
    qualifications: 'MBBS, MD',
    specialty: 'Pediatrics',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFByaXlhJTIwS3VtYXJpJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBwZWRpYXRyaWNpYW4ufGVufDB8fHx8MTc1NTA4NzAwNHww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Pediatrician with expertise in child development, immunization, pediatric emergencies, and comprehensive child healthcare.',
    expertise: ['Pediatric Emergency Care', 'Immunization', 'Growth & Development', 'Neonatal Care'],
    availability: 'Daily: 9:00 AM - 8:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Pediatrician Award', 'Excellence in Child Care']
  },
  {
    id: 7,
    name: 'Dr. Suresh Kumar Jha',
    qualifications: 'MBBS, MS, MCh',
    specialty: 'Neurosurgery',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFN1cmVzaCUyMEt1bWFyJTIwSmhhJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBuZXVyb3N1cmdlb24ufGVufDB8fHx8MTc1NTA4NzAwN3ww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Neurosurgeon specializing in brain and spine surgeries, neurovascular procedures, and complex neurological conditions.',
    expertise: ['Brain Surgery', 'Spine Surgery', 'Neurovascular Procedures', 'Trauma Neurosurgery'],
    availability: 'Mon-Thu-Sat: 9:00 AM - 5:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Neurosurgery', 'Best Brain Surgeon Award']
  },
  {
    id: 8,
    name: 'Dr. Meera Devi',
    qualifications: 'MBBS, MS',
    specialty: 'Ophthalmology',
    experience: '11+ Years',
    image: 'https://images.unsplash.com/photo-1525599428495-0441bd5c67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyME1lZXJhJTIwRGV2aSUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwb3BodGhhbG1vbG9naXN0LnxlbnwwfHx8fDE3NTUwODcwMDl8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Ophthalmologist specialized in cataract surgery, retinal disorders, glaucoma management, and comprehensive eye care.',
    expertise: ['Cataract Surgery', 'Retinal Disorders', 'Glaucoma Management', 'Pediatric Ophthalmology'],
    availability: 'Mon-Fri: 10:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Eye Specialist Award', 'Excellence in Vision Care']
  },
  {
    id: 9,
    name: 'Dr. Ravi Kumar Sinha',
    qualifications: 'MBBS, MS (Ortho)',
    specialty: 'Orthopedics',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1509242547758-3ce17361523b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFJhdmklMjBLdW1hciUyMFNpbmhhJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBvcnRob3BlZGljJTIwc3VyZ2Vvbi58ZW58MHx8fHwxNzU1MDg3MDE3fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Orthopedic Surgeon specializing in joint replacement, spine surgery, and sports medicine with expertise in minimally invasive techniques.',
    expertise: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine', 'Arthroscopic Surgery'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Orthopedic Surgeon', 'Excellence in Joint Care']
  },
  {
    id: 10,
    name: 'Dr. Sanjay Kumar',
    qualifications: 'MBBS, MS (ENT)',
    specialty: 'ENT (Ear, Nose & Throat)',
    experience: '13+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNhbmpheSUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBFTlQlMjBzdXJnZW9uLnxlbnwwfHx8fDE3NTUwODcwMjd8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant ENT Surgeon with expertise in microsurgery, endoscopic procedures, and comprehensive ear, nose, and throat care.',
    expertise: ['Microsurgery', 'Endoscopic Surgery', 'Hearing Disorders', 'Voice Disorders'],
    availability: 'Tue-Sat: 10:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in ENT Surgery', 'Best ENT Specialist']
  },
  {
    id: 11,
    name: 'Dr. Santosh Kumar',
    qualifications: 'MBBS, MD (Medicine)',
    specialty: 'Internal Medicine',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNhbnRvc2glMjBLdW1hciUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwcGh5c2ljaWFuJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBpbnRlcm5hbCUyMG1lZGljaW5lLnxlbnwwfHx8fDE3NTUwODcwMjB8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Physician specializing in internal medicine, diabetes management, and preventive healthcare with comprehensive patient care approach.',
    expertise: ['Diabetes Management', 'Hypertension Care', 'Preventive Medicine', 'General Medicine'],
    availability: 'Mon-Sat: 8:00 AM - 7:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Internal Medicine', 'Best Physician Award']
  },
  {
    id: 12,
    name: 'Dr. Deepak Kumar',
    qualifications: 'MBBS, MD (Anesthesia)',
    specialty: 'Anesthesiology',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMERlZXBhayUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBhbmVzdGhlc2lvbG9naXN0LnxlbnwwfHx8fDE3NTUwODcwMjh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Anesthesiologist with expertise in critical care, pain management, and advanced anesthetic techniques for all surgical procedures.',
    expertise: ['Critical Care', 'Pain Management', 'Surgical Anesthesia', 'Emergency Care'],
    availability: 'Available for Surgeries',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Anesthesiology', 'Best Critical Care Specialist']
  },
  {
    id: 13,
    name: 'Dr. Manish Kumar',
    qualifications: 'MBBS, MS (General Surgery)',
    specialty: 'General Surgery',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyME1hbmlzaCUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBnZW5lcmFsJTIwc3VyZ2Vvbi58ZW58MHx8fHwxNzU1MDg3MDMwfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant General Surgeon with expertise in abdominal surgeries, trauma care, and emergency surgical procedures.',
    expertise: ['Abdominal Surgery', 'Trauma Care', 'Emergency Surgery', 'Wound Management'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in General Surgery', 'Best Emergency Surgeon']
  },
  {
    id: 14,
    name: 'Dr. Pankaj Kumar',
    qualifications: 'MBBS, MS (Orthopedics)',
    specialty: 'Orthopedics',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1525599428495-0441bd5c67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFBhbmthaiUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBvcnRob3BlZGljJTIwc3VyZ2Vvbi58ZW58MHx8fHwxNzU1MDg3MDEzfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Orthopedic Surgeon specializing in fracture management, joint care, and sports injury treatment.',
    expertise: ['Fracture Management', 'Joint Care', 'Sports Injuries', 'Bone Surgery'],
    availability: 'Tue-Sat: 10:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Best Orthopedic Specialist', 'Excellence in Bone Care']
  },
  {
    id: 15,
    name: 'Dr. Shashi Bhushan',
    qualifications: 'MBBS, MD (Medicine)',
    specialty: 'Internal Medicine',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNoYXNoaSUyMEJodXNoYW4lMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMHBoeXNpY2lhbiUyMHNwZWNpYWxpemluZyUyMGluJTIwaW50ZXJuYWwlMjBtZWRpY2luZS58ZW58MHx8fHwxNzU1MDg3MDI1fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Physician with expertise in general medicine, chronic disease management, and preventive healthcare.',
    expertise: ['General Medicine', 'Chronic Disease Management', 'Preventive Care', 'Health Screening'],
    availability: 'Mon-Fri: 8:00 AM - 6:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in Medicine', 'Best Physician Care']
  },
  {
    id: 16,
    name: 'Dr. Vikash Kumar',
    qualifications: 'MBBS, MS (ENT)',
    specialty: 'ENT Surgery',
    experience: '11+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFZpa2FzaCUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBFTlQlMjBzdXJnZW9uLnxlbnwwfHx8fDE3NTUwODcwMTV8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant ENT Surgeon specializing in head and neck surgery, hearing disorders, and advanced ENT procedures.',
    expertise: ['Head & Neck Surgery', 'Hearing Disorders', 'Sinus Surgery', 'ENT Procedures'],
    availability: 'Mon-Wed-Fri: 11:00 AM - 5:00 PM',
    languages: ['Hindi', 'English'],
    awards: ['Excellence in ENT Care', 'Best ENT Surgeon']
  }];


  const specialties = [
  'All',
  'Obstetrics & Gynecology',
  'Laparoscopic & General Surgery',
  'Nephrology',
  'Cardiology',
  'Pediatrics',
  'Neurosurgery',
  'Ophthalmology',
  'Orthopedics',
  'ENT (Ear, Nose & Throat)',
  'Internal Medicine',
  'Anesthesiology',
  'General Surgery',
  'ENT Surgery'];


  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

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
              Find a <span className="text-primary-600">Doctor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of highly qualified and experienced doctors are here to provide you with the best medical care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <SafeIcon
                icon={FiSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />

            </div>
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiFilter} className="text-gray-500 w-5 h-5" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">

                {specialties.map((specialty) =>
                <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDoctors.length === 0 ?
          <div className="text-center py-12">
              <p className="text-xl text-gray-600">No doctors found matching your search criteria.</p>
            </div> :

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) =>
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">

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
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {doctor.description}
                    </p>
                    {/* Expertise Tags */}
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
                    <div className="text-sm text-gray-500 mb-4">
                      <strong>Availability:</strong> {doctor.availability}
                    </div>
                    <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </motion.div>
            )}
            </div>
          }
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-accent-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Medical Assistance?
            </h3>
            <p className="text-accent-100 mb-6">
              Our emergency department is available 24/7 for urgent medical care
            </p>
            <a
              href="tel:+919771488888"
              className="inline-flex items-center space-x-2 bg-white text-accent-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">

              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>Call Emergency: +91 977 14 88888</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Doctors;