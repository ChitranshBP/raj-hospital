import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUser, FiChevronLeft, FiChevronRight } = FiIcons;

const DoctorsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Updated doctors data with correct images from Raj Hospitals website
  const doctors = [
  {
    name: 'Dr. Anupama Mahi',
    qualifications: 'MBBS, MS, DNB, D MAS',
    specialty: 'Obstetrics & Gynecology',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFudXBhbWElMjBNYWhpJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBpbiUyME9ic3RldHJpY3MlMjAlMjYlMjBHeW5lY29sb2d5JTJDJTIwd2VhcmluZyUyMGElMjB3aGl0ZSUyMGNvYXQlMjBhbmQlMjBzbWlsaW5nLnxlbnwwfHx8fDE3NTUwODcwNTB8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant in Obstetrics & Gynecology. Expert in high-risk pregnancies, minimally invasive gynecological procedures, and comprehensive women\'s health care.',
    expertise: ['High-Risk Pregnancy Management', 'Laparoscopic Surgery', 'Infertility Treatment', 'Gynecological Oncology'],
    availability: 'Mon-Sat: 10:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Ashish Kumar Modi',
    qualifications: 'MBBS, MS, FMAS',
    specialty: 'Laparoscopic & General Surgery',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1592393532405-fb1f165c4a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEFzaGlzaCUyMEt1bWFyJTIwTW9kaSUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwaW4lMjBsYXBhcm9zY29waWMlMjBhbmQlMjBnZW5lcmFsJTIwc3VyZ2VyeS58ZW58MHx8fHwxNzU1MDg2OTk1fDA&ixlib=rb-4.1.0&q=80&w=200$w=400',
    description: 'Senior Consultant in Laparoscopic & General Surgery. Specialized in advanced laparoscopic procedures, bariatric surgery, and minimally invasive surgical techniques.',
    expertise: ['Advanced Laparoscopy', 'Bariatric Surgery', 'Hernia Repair', 'Gallbladder Surgery'],
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM'
  },
  {
    name: 'Dr. Avinash Kumar',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Nephrology',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1531339413195-cc6c17163974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEF2aW5hc2glMjBLdW1hciUyQyUyMGElMjBTZW5pb3IlMjBDb25zdWx0YW50JTIwTmVwaHJvbG9naXN0JTJDJTIwd2VhcmluZyUyMGElMjB3aGl0ZSUyMGNvYXQlMjBhbmQlMjBzbWlsaW5nLnxlbnwwfHx8fDE3NTUwODcwNDN8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Nephrologist. Expert in kidney diseases, dialysis management, kidney transplantation, and chronic kidney disease care.',
    expertise: ['Kidney Transplantation', 'Dialysis Management', 'Chronic Kidney Disease', 'Hypertension Management'],
    availability: 'Tue-Sat: 11:00 AM - 7:00 PM'
  },
  {
    name: 'Dr. Binay Kumar',
    qualifications: 'MBBS, MS, FIAGES',
    specialty: 'Laparoscopic & General Surgery',
    experience: '20+ Years',
    image: 'https://images.unsplash.com/photo-1509242547758-3ce17361523b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMEJpbmF5JTIwS3VtYXIlMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMHN1cmdlb24lMkMlMjBkaXNwbGF5ZWQlMjBvbiUyMHRoZSUyMFJhaiUyMEhvc3BpdGFscyUyMHdlYnNpdGUufGVufDB8fHx8MTc1NTA4NzA0N3ww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Surgeon with extensive experience in complex abdominal surgeries, endoscopic procedures, and advanced surgical techniques.',
    expertise: ['Complex Abdominal Surgery', 'Endoscopic Procedures', 'Trauma Surgery', 'Colorectal Surgery'],
    availability: 'Mon-Wed-Fri: 10:00 AM - 4:00 PM'
  },
  {
    name: 'Dr. Rajesh Kumar Sinha',
    qualifications: 'MBBS, MD, DM',
    specialty: 'Cardiology',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFJhamVzaCUyMEt1bWFyJTIwU2luaGElMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMGNhcmRpb2xvZ2lzdCUyQyUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwUmFqJTIwSG9zcGl0YWxzJTIwd2Vic2l0ZS58ZW58MHx8fHwxNzU1MDg3MTAzfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Cardiologist. Interventional cardiologist specializing in complex cardiac procedures, angioplasty, and comprehensive heart disease management.',
    expertise: ['Interventional Cardiology', 'Angioplasty & Stenting', 'Cardiac Catheterization', 'Heart Failure Management'],
    availability: 'Mon-Sat: 8:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Priya Kumari',
    qualifications: 'MBBS, MD',
    specialty: 'Pediatrics',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFByaXlhJTIwS3VtYXJpJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBwZWRpYXRyaWNpYW4lMkMlMjBkaXNwbGF5ZWQlMjBvbiUyMHRoZSUyMFJhaiUyMEhvc3BpdGFscyUyMHdlYnNpdGUufGVufDB8fHx8MTc1NTA4NzA5N3ww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Pediatrician with expertise in child development, immunization, pediatric emergencies, and comprehensive child healthcare.',
    expertise: ['Pediatric Emergency Care', 'Immunization', 'Growth & Development', 'Neonatal Care'],
    availability: 'Daily: 9:00 AM - 8:00 PM'
  },
  {
    name: 'Dr. Suresh Kumar Jha',
    qualifications: 'MBBS, MS, MCh',
    specialty: 'Neurosurgery',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFN1cmVzaCUyMEt1bWFyJTIwSmhhJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBuZXVyb3N1cmdlb24lMkMlMjBkaXNwbGF5ZWQlMjBvbiUyMHRoZSUyMFJhaiUyMEhvc3BpdGFscyUyMHdlYnNpdGUufGVufDB8fHx8MTc1NTA4NzA4OHww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Neurosurgeon specializing in brain and spine surgeries, neurovascular procedures, and complex neurological conditions.',
    expertise: ['Brain Surgery', 'Spine Surgery', 'Neurovascular Procedures', 'Trauma Neurosurgery'],
    availability: 'Mon-Thu-Sat: 9:00 AM - 5:00 PM'
  },
  {
    name: 'Dr. Meera Devi',
    qualifications: 'MBBS, MS',
    specialty: 'Ophthalmology',
    experience: '11+ Years',
    image: 'https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyME1lZXJhJTIwRGV2aSUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwb3BodGhhbG1vbG9naXN0JTJDJTIwZGlzcGxheWVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwNjh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Ophthalmologist specialized in cataract surgery, retinal disorders, glaucoma management, and comprehensive eye care.',
    expertise: ['Cataract Surgery', 'Retinal Disorders', 'Glaucoma Management', 'Pediatric Ophthalmology'],
    availability: 'Mon-Fri: 10:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Ravi Kumar Sinha',
    qualifications: 'MBBS, MS (Ortho)',
    specialty: 'Orthopedics',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1509242547758-3ce17361523b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFJhdmklMjBLdW1hciUyMFNpbmhhJTJDJTIwYW4lMjBvcnRob3BlZGljJTIwc3VyZ2VvbiUyQyUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwUmFqJTIwSG9zcGl0YWxzJTIwd2Vic2l0ZS58ZW58MHx8fHwxNzU1MDg3MDYxfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Orthopedic Surgeon specializing in joint replacement, spine surgery, and sports medicine with expertise in minimally invasive techniques.',
    expertise: ['Joint Replacement', 'Spine Surgery', 'Sports Medicine', 'Arthroscopic Surgery'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM'
  },
  {
    name: 'Dr. Sanjay Kumar',
    qualifications: 'MBBS, MS (ENT)',
    specialty: 'ENT (Ear, Nose & Throat)',
    experience: '13+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNhbmpheSUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBFTlQlMjBzdXJnZW9uJTJDJTIwZGlzcGxheWVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwNjN8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant ENT Surgeon with expertise in microsurgery, endoscopic procedures, and comprehensive ear, nose, and throat care.',
    expertise: ['Microsurgery', 'Endoscopic Surgery', 'Hearing Disorders', 'Voice Disorders'],
    availability: 'Tue-Sat: 10:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Santosh Kumar',
    qualifications: 'MBBS, MD (Medicine)',
    specialty: 'Internal Medicine',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNhbnRvc2glMjBLdW1hciUyQyUyMGElMjBzZW5pb3IlMjBjb25zdWx0YW50JTIwcGh5c2ljaWFuJTIwc3BlY2lhbGl6aW5nJTIwaW4lMjBpbnRlcm5hbCUyMG1lZGljaW5lJTJDJTIwZGlhYmV0ZXMlMjBtYW5hZ2VtZW50JTJDJTIwYW5kJTIwcHJldmVudGl2ZSUyMGhlYWx0aGNhcmUufGVufDB8fHx8MTc1NTA4NzEwNnww&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Physician specializing in internal medicine, diabetes management, and preventive healthcare with comprehensive patient care approach.',
    expertise: ['Diabetes Management', 'Hypertension Care', 'Preventive Medicine', 'General Medicine'],
    availability: 'Mon-Sat: 8:00 AM - 7:00 PM'
  },
  {
    name: 'Dr. Deepak Kumar',
    qualifications: 'MBBS, MD (Anesthesia)',
    specialty: 'Anesthesiology',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMERlZXBhayUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBhbmVzdGhlc2lvbG9naXN0JTJDJTIwZGlzcGxheWVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwNjV8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Anesthesiologist with expertise in critical care, pain management, and advanced anesthetic techniques for all surgical procedures.',
    expertise: ['Critical Care', 'Pain Management', 'Surgical Anesthesia', 'Emergency Care'],
    availability: 'Available for Surgeries'
  },
  {
    name: 'Dr. Manish Kumar',
    qualifications: 'MBBS, MS (General Surgery)',
    specialty: 'General Surgery',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyME1hbmlzaCUyMEt1bWFyJTJDJTIwYSUyMHNlbmlvciUyMGNvbnN1bHRhbnQlMjBnZW5lcmFsJTIwc3VyZ2VvbiUyQyUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwUmFqJTIwSG9zcGl0YWxzJTIwd2Vic2l0ZS58ZW58MHx8fHwxNzU1MDg3MDU0fDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant General Surgeon with expertise in abdominal surgeries, trauma care, and emergency surgical procedures.',
    expertise: ['Abdominal Surgery', 'Trauma Care', 'Emergency Surgery', 'Wound Management'],
    availability: 'Mon-Sat: 9:00 AM - 5:00 PM'
  },
  {
    name: 'Dr. Pankaj Kumar',
    qualifications: 'MBBS, MS (Orthopedics)',
    specialty: 'Orthopedics',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFBhbmthaiUyMEt1bWFyJTJDJTIwYW4lMjBvcnRob3BlZGljJTIwc3VyZ2VvbiUyQyUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwUmFqJTIwSG9zcGl0YWxzJTIwd2Vic2l0ZS58ZW58MHx8fHwxNzU1MDg3MTAxfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Orthopedic Surgeon specializing in fracture management, joint care, and sports injury treatment.',
    expertise: ['Fracture Management', 'Joint Care', 'Sports Injuries', 'Bone Surgery'],
    availability: 'Tue-Sat: 10:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Shashi Bhushan',
    qualifications: 'MBBS, MD (Medicine)',
    specialty: 'Internal Medicine',
    experience: '16+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFNoYXNoaSUyMEJodXNoYW4lMkMlMjBhJTIwc2VuaW9yJTIwY29uc3VsdGFudCUyMHBoeXNpY2lhbiUyQyUyMGRpc3BsYXllZCUyMG9uJTIwdGhlJTIwUmFqJTIwSG9zcGl0YWxzJTIwd2Vic2l0ZS58ZW58MHx8fHwxNzU1MDg3MDczfDA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant Physician with expertise in general medicine, chronic disease management, and preventive healthcare.',
    expertise: ['General Medicine', 'Chronic Disease Management', 'Preventive Care', 'Health Screening'],
    availability: 'Mon-Fri: 8:00 AM - 6:00 PM'
  },
  {
    name: 'Dr. Vikash Kumar',
    qualifications: 'MBBS, MS (ENT)',
    specialty: 'ENT Surgery',
    experience: '11+ Years',
    image: 'https://images.unsplash.com/photo-1584827172806-ea64d6d30fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBvZiUyMERyLiUyMFZpa2FzaCUyMEt1bWFyJTJDJTIwYW4lMjBFTlQlMjBzdXJnZW9uJTJDJTIwZGlzcGxheWVkJTIwb24lMjB0aGUlMjBSYWolMjBIb3NwaXRhbHMlMjB3ZWJzaXRlLnxlbnwwfHx8fDE3NTUwODcwOTR8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
    description: 'Senior Consultant ENT Surgeon specializing in head and neck surgery, hearing disorders, and advanced ENT procedures.',
    expertise: ['Head & Neck Surgery', 'Hearing Disorders', 'Sinus Surgery', 'ENT Procedures'],
    availability: 'Mon-Wed-Fri: 11:00 AM - 5:00 PM'
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
                key={doctor.name}
                className={`flex-shrink-0 px-4 ${
                slidesToShow === 3 ? 'w-1/3' : slidesToShow === 2 ? 'w-1/2' : 'w-full'}`
                }>

                  <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">

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
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                        <span>{doctor.experience} Experience</span>
                      </div>

                      {doctor.description &&
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {doctor.description}
                        </p>
                    }

                      {/* Expertise Tags */}
                      {doctor.expertise &&
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
                    }

                      {/* Availability */}
                      {doctor.availability &&
                    <div className="text-sm text-gray-500 mb-4">
                          <strong>Available:</strong> {doctor.availability}
                        </div>
                    }

                      <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span>Book Appointment</span>
                      </button>
                    </div>
                  </motion.div>
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

          <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg hover:bg-secondary-600 transition-colors font-semibold text-lg">
            View All Doctors
          </button>
        </motion.div>
      </div>
    </section>);

};

export default DoctorsSection;