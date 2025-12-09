import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SafeIcon from "../common/SafeIcon"; // Adjust import as per your structure
import * as FiIcons from "react-icons/fi";
import HeroSection from "../components/HeroSection";

const { FiChevronLeft, FiChevronRight, FiX } = FiIcons;

const specialties = [
  {
    id: "cardiology",
    title: "Cardiology",
    shortTitle: "Cardiology",
    icon: FiIcons.FiHeart,
    image: "assets/home-img/Cardiology.webp",
    description:
      "Specialized cardiac care including advanced diagnostics, interventional procedures, and heart failure management.",
    features: [
      "Daycare Angiography",
      "Angioplasty",
      "IVUS, Coiling, RFA",
      "Leadless Pacemaker",
      "Heart Attack (MI)",
      "Heart Failure Management",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "neurosciences",
    title: "Neurology",
    shortTitle: "Neurology",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/raj-home-specialty/neurology.webp",
    description:
      "Comprehensive brain and spine care for injuries, strokes, and neurological disorders.",
    features: [
      "Head Injuries",
      "Brain Stroke Unit & Seizures",
      "Endoscopic Spine Surgery",
      "Stereotactic Tumor Surgery",
      "Trauma, Tumor & TB Surgeries",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "obstetrics-and-gynaecology",
    title: "Obstetrics & Gynecology",
    shortTitle: "Gynecology",
    icon: FiIcons.FiUser,
    image: "assets/home-img/raj-home-specialty/Obstetrics & Gynecology.webp",
    description:
      "Specialized care for women's health, pregnancy, and gynecological conditions.",
    features: [
      "Comprehensive Obstetrics & Gynecology Services",
      "High-Risk Pregnancy Management",
      "Gynecological Surgeries",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "orthopaedics-and-joint-replacement",
    title: "Orthopaedics & Joint Replacement",
    shortTitle: "Orthopaedics",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/raj-home-specialty/Orthopaedics & Joint Replacement.webp",
    description:
      "Comprehensive bone and joint care including replacements and sports injury management.",
    features: [
      "Joint Replacements - Knee, Hip, Shoulder, Elbow & Ankle",
      "Arthroscopy, Sports Injury",
      "Bone Deformity Surgeries",
    ],
    stats: { procedures: "2500+", experience: "20+ Years" },
  },
  {
    id: "minimal-access-surgery",
    title: "Minimal Access Surgery",
    shortTitle: "Surgery",
    icon: FiIcons.FiScissors,
    image: "assets/specialties/Minimal Access Surgery/Laparoscopy-Surgery.webp",
    description:
      "Laparoscopic and laser surgeries for faster recovery and minimal invasiveness.",
    features: [
      "Laparoscopic & Laser Surgery - Gall Bladder",
      "Hernia, Appendix, General Surgery",
      "Thoracoscopic (Lung) Surgeries",
      "Bariatric (Weight loss) & GI Surgeries",
    ],
    stats: { procedures: "3500+", experience: "22+ Years" },
  },
  {
    id: "ent",
    title: "ENT (Ear, Nose & Throat)",
    shortTitle: "ENT",
    icon: FiIcons.FiMic,
    image: "assets/specialties/ENT/Rhinology & Sinus-Care.webp",
    description: "Comprehensive ear, nose, and throat care for all age groups.",
    features: [
      "Diagnosis and Treatment of ENT Disorders",
      "Hearing and Sinus Surgeries",
      "Voice and Throat Care",
    ],
    stats: { procedures: "1800+", experience: "14+ Years" },
  },
  {
    id: "nephrology",
    title: "Nephrology",
    shortTitle: "Nephrology",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/raj-home-specialty/Nephrology.webp",
    description: "Advanced kidney care with dialysis and continuous renal replacement therapy.",
    features: [
      "Hypertensive & Diabetic Kidney Disease",
      "Hemodialysis, Peritoneal Dialysis",
      "Acute Kidney Injury, CKD",
      "CRRT (Continuous Renal Replacement Therapy)",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "oncology-cancer-care",
    title: "Oncology (Cancer Care)",
    shortTitle: "Oncology",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/Oncology.webp",
    description: "Comprehensive cancer care through chemotherapy and specialized surgical oncology.",
    features: [
      "Clinical Oncology (Chemotherapy)",
      "Surgical Oncology - Head & Neck, Breast, Lungs, Abdominal etc.",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    shortTitle: "Gastrology",
    icon: FiIcons.FiTrendingUp,
    image: "assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Inflammatory-Bowel-Disease.webp",
    description: "Advanced digestive and liver care through endoscopy and minimally invasive treatments.",
    features: [
      "Endoscopy & Colonoscopy",
      "ERCP, EUS, Hepatitis",
      "Pancreatitis, Reflux, Peptic Ulcer",
      "Abdominal Pain, Fatty Liver",
      "Bile Duct Obstruction & GI Stenting",
    ],
    stats: { procedures: "2200+", experience: "16+ Years" },
  },
  {
    id: "emergency",
    title: "Emergency & Trauma Care",
    shortTitle: "Emergency",
    icon: FiIcons.FiAperture,
    image: "assets/specialties/Critical Care & Emergency/Trauma.webp",
    description: "24x7 emergency and acute trauma services with life support and evacuation facilities.",
    features: [
      "Advance Life Support Ambulance",
      "Rooftop Helipad for Emergency Evacuation",
      "24x7 Emergency Care Consultants",
      "Emergency Trauma & Acute Care Services",
    ],
    stats: { procedures: "10000+", experience: "24/7 Available" },
  },
  {
    id: "pediatrics-and-neonatology",
    title: "Pediatrics & Neonatology",
    shortTitle: "Pediatrics",
    icon: FiIcons.FiSmile,
    image: "assets/home-img/Pediatrics.webp",
    description: "Comprehensive healthcare for infants, children, and adolescents.",
    features: [
      "Child and Newborn Care",
      "Pediatric Medicine & Immunization",
      "Growth and Development Monitoring",
    ],
    stats: { procedures: "5000+", experience: "18+ Years" },
  },
  {
    id: "urology",
    title: "Urology",
    shortTitle: "Urology",
    icon: FiIcons.FiDroplet,
    image: "assets/home-img/Urology.webp",
    description: "Advanced urological care including prostate, kidney, and infertility treatments.",
    features: [
      "Prostate Surgeries - TURP",
      "Kidney Stone Surgeries",
      "Female Urology Surgeries",
      "Infertility Treatment",
      "Lithotripsy",
    ],
    stats: { procedures: "1600+", experience: "15+ Years" },
  },
];

const sections = {
  locations: [
    { name: "City Center", rating: "4.8", img: "/assets/location1.webp" },
    { name: "Lakeside", rating: "4.7", img: "/assets/location2.webp" },
    { name: "Green Valley", rating: "4.6", img: "/assets/location3.webp" },
  ],
  technology: [
    {
      name: "Advanced Kidney Care with Continuous Renal Replacement Therapy (CRRT)",
      desc: "24/7 continuous dialysis support for critically ill patients with acute kidney injury",
      image: "assets/home-img/crrt-raj-home.webp",
    },
    {
      name: "State-of-the-Art Gastroenterology Suite at Raj Hospitals, Ranchi",
      desc: "Advanced endoscopy and colonoscopy facilities for precise digestive system diagnosis and treatment",
      image: "assets/About-img/Comprehensive-Neuro.webp",
    },
    {
      name: "Advanced Leica-Provido Operating Microscope at Raj Hospitals,",
      desc: "High-precision surgical microscope for complex brain, spine, and neurosurgical procedures",
      image: "assets/home-img/Complex-brain.webp",
    },
  ],
  doctorTalks: [
    {
      videoId: "x6fgmqLUabI",
      title: "What is Black Fungus? | All You Need to Know About Black Fungus | Dr. Mohon Ahmed",
      thumbnail: "https://img.youtube.com/vi/x6fgmqLUabI/maxresdefault.jpg",
    },
    {
      videoId: "taKkhV37BwE",
      title: "Nephrotic Syndrome - Dr. Avinash Kumar Dubey",
      thumbnail: "https://img.youtube.com/vi/taKkhV37BwE/maxresdefault.jpg",
    },
    {
      videoId: "cJxWXwRX-GM",
      title: "World Hepatitis Day 2023: Important Facts About Hepatitis",
      thumbnail: "https://img.youtube.com/vi/cJxWXwRX-GM/maxresdefault.jpg",
    },
  ],
  whyChoose: [
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/30+ Years-of-Excellence.webp",
      title: "30+ Years of Excellence",
      desc: "Three decades of trusted healthcare service in Ranchi",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/State-of-the-art-Technology.webp",
      title: "State-of-the-art Technology",
      desc: "Latest medical equipment and advanced treatment facilities",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/Experienced-Medical-Team.webp",
      title: "Experienced Medical Team",
      desc: "Highly qualified doctors and skilled healthcare professionals",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/24-7-Emergency-Services.webp",
      title: "24/7 Emergency Services",
      desc: "Round-the-clock emergency care and critical support",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/SICU-Facilities.webp",
      title: "ICU/NICU/SICU Facilities",
      desc: "Specialized intensive care units for critical patient care",
    },
    {
      image: "assets/home-img/Picture1.webp",
      title: "Rooftop Helipad",
      desc: "Air ambulance facility for critical emergency cases",
    },
  ],
  blogs: [
    {
      title: "10 Tips for Heart Health",
      img: "assets/home-img/blogs/Blogs-1.webp",
      excerpt: "Simple habits for a healthier heart.",
      url: "#",
    },
    {
      title: "Back Pain: Myths & Facts",
      img: "assets/home-img/blogs/Blogs-2.webp",
      excerpt: "How to prevent and manage back pain effectively.",
      url: "#",
    },
    {
      title: "Understanding Robotic Surgery",
      img: "assets/home-img/blogs/Blogs-3.webp",
      excerpt: "What is it, and who is it for?",
      url: "#",
    },
    {
      title: "Understanding Robotic Surgery",
      img: "assets/home-img/blogs/Blogs-3.webp",
      excerpt: "What is it, and who is it for?",
      url: "#",
    },
  ],
  news: [

    {
      title: "राज अस्पताल के आपातकालीन विभाग को एनएबीएच की मान्यता मिली",
      date: "Feburary 24, 2025",
      excerpt: "State-of-the-art facility dedicated to cardiac patients.",
      url: "/#/news-media",
    },
    {
      title: "रांची: राज अस्पताल में नेशनल कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर का आयोजन",
      date: "August 29, 2024",
      excerpt: "Awarded at the National Medical Congress.",
      url: "https://lagatar.in/cardiac-life-support-training-camp-organized",
    },
    {
      title: "रांचीः बाई-पास सर्जरी के लिए अब नहीं जाना होगा बाहर, राज अस्पताल में मिल रही सुविधाोजन किया",
      date: "1 January, 2024",
      excerpt: "Thousands benefited from free screenings and consultations.",
      url: "/#/news-media",
    },
    {
      title: "राज अस्पताल में पहली बार IVUS (इंट्रावास्कुलर अल्ट्रासाउंड) तकनीक से एंजियोप्लास्टी की गई।",
      date: "22 july, 2023",
      excerpt: "Specialized care for children with advanced neonatal ICU.",
      url: "/#/news-media",
    },
    {
      title: "राज अस्पताल, रांची में मनाया गया 77वां स्वतंत्रता दिवस, ध्वजारोहण कर दी तिरंगे को सलामी: आयोजन किया",
      date: "23 august, 2023",
      excerpt: "Community outreach programs expanding across the city.",
      url: "/#/news-media",
    },
    {
      title: "रांची: 28 जुलाई को मनाया जायेगा विश्व हेपेटाइटिस दिवस",
      date: "28 july, 2023",
      excerpt: "Received recognition for outstanding patient satisfaction scores.",
      url: "/#/news-media",
    },
  ],
  testimonials: [
    {
      videoId: "Gi1WhJ1dR6g",
      patient: "Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals",
      desc: "I felt cared for every step of the way.",
      thumbnail: "https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg",
    },
    {
      videoId: "HARE579wkdY",
      patient: "Knee replacement surgery | Raj Hospitals",
      desc: "The doctors and staff were exceptional.",
      thumbnail: "https://img.youtube.com/vi/HARE579wkdY/maxresdefault.jpg",
    },
    {
      videoId: "mHiO2RYdgds",
      patient: "Cancer treatment | Patient Testimonial ",
      desc: "The doctors and staff were exceptional.",
      thumbnail: "https://img.youtube.com/vi/mHiO2RYdgds/maxresdefault.jpg",
    },
    {
      videoId: "vg59yGKWz_s",
      patient: "Neurosurgery Success Story at Raj Hospitals",
      desc: "Under the expert care of Dr. Ahmad Hussain (Neurosurgeon) and Dr. Neelam Kumari, our patient has made an incredible recovery.",
      thumbnail: "https://img.youtube.com/vi/vg59yGKWz_s/maxresdefault.jpg",
    },
  ],
  patients: [
    {
      name: "A New Heart, A New Start",
      desc: "Life-saving cardiac surgery inspires a family.",
      img: "/assets/patient1.webp",
    },
    {
      name: "Overcoming the Impossible",
      desc: "Complex spine surgery restores mobility.",
      img: "/assets/patient2.webp",
    },
    {
      name: "Overcoming the Impossible",
      desc: "Complex spine surgery restores mobility.",
      img: "/assets/patient2.webp",
    },
  ],
  wellness: [
    {
      name: "Full Body Checkup",
      price: "₹3,999",
      desc: "Comprehensive diagnostics and physician consult.",
    },
    {
      name: "Heart Health Package",
      price: "₹2,499",
      desc: "ECG, 2D Echo, and Cardiologist review.",
    },
    {
      name: "Women’s Complete Care",
      price: "₹2,999",
      desc: "For women of all ages.",
    },
  ],
};

function Section({ title, description, children, showViewAll, viewAllLink }) {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#F9771B]">{title}</h2>
        {showViewAll && (
          <a
            href={viewAllLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0191C7] hover:text-[#F9771B] font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            View All
            <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
          </a>
        )}
      </div>
      {description && <p className="text-gray-700 mb-8">{description}</p>}
      {children}
    </section>
  );
}

function WhyChooseRaj() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#F9771B] mb-2">
            Why Choose Raj Hospitals?
          </h2>
          {/* <p className="text-gray-600 text-lg max-w-3xl">
            We blend medical excellence with comfort and compassion. Discover what sets us apart in modern healthcare delivery.
          </p> */}
        </motion.div>

        {/* Grid of features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.whyChoose.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F9771B]/40"
            >
              {/* Full-width Image */}
              <div className="relative w-full h-48 bg-gradient-to-br from-[#F9771B]/5 to-[#0191C7]/5 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-[#F9771B] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative accent line */}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-[#F9771B] hover:bg-[#F9771B]/90 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Book Appointment
          </button>
          <button className="bg-white hover:bg-gray-50 text-[#0191C7] px-8 py-3 rounded-lg font-semibold border-2 border-[#0191C7] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore Our Services
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}

function NewsMediaCompact() {
  const [newsTab, setNewsTab] = useState('digital'); // 'digital' or 'print'

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#F9771B]">News & Media</h2>
        <Link
          to="/news-media"
          className="text-[#0191C7] hover:text-[#F9771B] font-semibold text-sm flex items-center gap-2 transition-colors"
        >
          View All
          <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-gray-700 mb-4">Stay updated with our latest announcements and achievements.</p>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setNewsTab('digital')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${newsTab === 'digital'
              ? 'bg-[#F9771B] text-white shadow'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Digital
        </button>
        <button
          onClick={() => setNewsTab('print')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${newsTab === 'print'
              ? 'bg-[#F9771B] text-white shadow'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
        >
          Print
        </button>
      </div>

      {/* Digital Tab Content */}
      {newsTab === 'digital' && (
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* News Image */}
          <div className="hidden md:block md:w-1/3">
            <div className="w-full h-[450px] rounded-xl overflow-hidden ">
              <img
                src="assets\home-img\Why-Choose-Raj Hospitals\breaking-news-raj.webp"
                alt="News & Media"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left news cards */}
          <div className="md:w-1/3 space-y-4">
            {sections.news.slice(0, 3).map((news, idx) => (
              <a
                key={`${news.title}-${idx}`}
                href={news.url}
                className="block bg-white border border-[#F9771B]/30 rounded-lg p-4 shadow-sm hover:shadow-md transition max-w-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-[#0191C7] font-semibold text-lg mb-1">
                  {news.title}
                </h3>
                <time className="text-xs text-gray-500">{news.date}</time>
                {/* <p className="text-gray-700 mt-1 line-clamp-3">{news.excerpt}</p> */}
              </a>
            ))}
          </div>

          {/* Right news cards */}
          <div className="md:w-1/3 space-y-4">
            {sections.news.slice(3, 6).map((news, idx) => (
              <a
                key={`${news.title}-${idx + 3}`}
                href={news.url}
                className="block bg-white border border-[#F9771B]/30 rounded-lg p-4 shadow-sm hover:shadow-md transition max-w-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-[#0191C7] font-semibold text-lg mb-1">
                  {news.title}
                </h3>
                <time className="text-xs text-gray-500">{news.date}</time>
                {/* <p className="text-gray-700 mt-1 line-clamp-3">{news.excerpt}</p> */}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Print Tab Content */}
      {newsTab === 'print' && (
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Vector Image */}
          <div className="hidden md:block md:w-1/3">
            <div className="w-full h-[450px] rounded-xl overflow-hidden ">
              <img
                src="assets\home-img\Why-Choose-Raj Hospitals\breaking-news-raj.webp"
                alt="News & Media"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left newspaper clippings */}
          <div className="md:w-1/3 space-y-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="assets/press/news-1-r.webp"
                  alt="Newspaper Clipping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="assets/press/news-2-raj.webp"
                  alt="Newspaper Clipping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right newspaper clippings */}
          <div className="md:w-1/3 space-y-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="assets/press/news-3-raj.webp"
                  alt="Newspaper Clipping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="assets/press/Raj-hsopital-news-1_290824.webp"
                  alt="Newspaper Clipping"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const TabbedSpecialtiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 160;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">




        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-[#F9771B]">Specialties</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Comprehensive healthcare services across our key departments with
            expert doctors and modern technologies.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="relative mb-6">
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-[#F9771B]/20 transition"
            aria-label="Scroll Left"
          >
            <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-[#F9771B]/20 transition"
            aria-label="Scroll Right"
          >
            <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex space-x-4 px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {specialties.map((spec, index) => (
              <motion.button
                key={spec.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition ${activeTab === index
                    ? "bg-[#F9771B] text-white shadow-lg border-transparent"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-[#F9771B] hover:text-[#F9771B]"
                  }`}
              >
                <SafeIcon
                  icon={spec.icon}
                  className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-[#F9771B]"
                    }`}
                />
                <span>{spec.shortTitle}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow p-8 grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Description & Features */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {specialties[activeTab].title}
            </h3>
            <p className="text-gray-700 mb-6">
              {specialties[activeTab].description}
            </p>

            <h4 className="text-lg font-semibold mb-3">
              Key Services & Treatments
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
              {specialties[activeTab].features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="mt-auto pt-6 space-x-4 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-[#F9771B] hover:bg-[#F9771B]/90 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block"
              >
                Book Consultation
              </Link>
              <Link
                to={`/specialties/${specialties[activeTab].id}`}
                className="bg-[#0191C7] hover:bg-[#0191C7]/90 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <img
              src={specialties[activeTab].image}
              alt={specialties[activeTab].title}
              className="object-cover w-full h-full max-h-[380px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Quick Navigation CTA Bar Component
function QuickNavigationBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Search data for all doctors and specialties (matching Header.jsx and SpecialtyDetail.jsx)
  const searchData = {
    specialties: [
      // Centres of Excellence
      { name: "Cardiology", type: "specialty", link: "#/specialties/cardiology", keywords: ["cardiology-ad", "heart", "cardiac", "angiography", "angioplasty", "pacemaker", "heart attack"] },
      { name: "Critical Care", type: "specialty", link: "#/specialties/critical-care-", keywords: ["critical-care-ad", "icu", "intensive care", "critical"] },
      { name: "Emergency", type: "specialty", link: "#/specialties/emergency", keywords: ["emergency-ad", "trauma", "ambulance", "24x7", "accident", "acute care"] },
      { name: "Gastroenterology", type: "specialty", link: "#/specialties/gastroenterology", keywords: ["gastroenterology-ad", "stomach", "gastro", "endoscopy", "liver", "digestive", "colonoscopy"] },
      { name: "Minimal Access Surgery", type: "specialty", link: "#/specialties/minimal-access-surgery", keywords: ["surgery-ad", "minimal-access-ad", "laparoscopic", "laser", "hernia", "operation"] },
      { name: "Nephrology", type: "specialty", link: "#/specialties/nephrology", keywords: ["nephrology-ad", "kidney", "dialysis", "renal", "hemodialysis"] },
      { name: "Neurosciences", type: "specialty", link: "#/specialties/neurosciences", keywords: ["neurosciences-ad", "neurology-ad", "brain", "neuro", "stroke", "spine", "head injury", "neurosurgery"] },
      { name: "Oncology (Cancer Care)", type: "specialty", link: "#/specialties/oncology-cancer-care", keywords: ["oncology-ad", "cancer", "chemotherapy", "tumor", "radiation"] },
      { name: "Orthopaedics & Joint Replacement", type: "specialty", link: "#/specialties/orthopaedics-and-joint-replacement", keywords: ["orthopedics-ad", "orthopaedics-ad", "bone", "ortho", "joint", "knee", "hip", "arthroscopy"] },
      { name: "Pulmonology", type: "specialty", link: "#/specialties/pulmonology", keywords: ["pulmonology-ad", "lung", "respiratory", "asthma", "copd", "breathing"] },
      { name: "Internal Medicine", type: "specialty", link: "#/specialties/internal-medicine", keywords: ["internal-medicine-ad", "general medicine", "physician", "internal"] },
      { name: "Urology", type: "specialty", link: "#/specialties/urology", keywords: ["urology-ad", "prostate", "kidney stone", "urinary", "bladder", "infertility"] },
      { name: "Obstetrics & Gynaecology", type: "specialty", link: "#/specialties/obstetrics-and-gynaecology", keywords: ["gynecology-ad", "gynaecology-ad", "women", "pregnancy", "obstetrics", "maternity"] },

      // Allied Specialties
      { name: "Aesthetic & Reconstructive Surgery", type: "specialty", link: "#/specialties/aesthetic-and-reconstructive-surgery", keywords: ["plastic-surgery-ad", "aesthetic-ad", "cosmetic", "reconstructive", "plastic"] },
      { name: "Dental", type: "specialty", link: "#/specialties/dental", keywords: ["dental-ad", "teeth", "dentist", "root canal", "implants", "orthodontics"] },
      { name: "Dermatology", type: "specialty", link: "#/specialties/dermatology", keywords: ["dermatology-ad", "skin", "derma", "cosmetic", "laser therapy", "skin cancer"] },
      { name: "ENT", type: "specialty", link: "#/specialties/ent", keywords: ["ent-ad", "ear", "nose", "throat", "sinus", "hearing"] },
      { name: "Eye Care", type: "specialty", link: "#/specialties/eye-care", keywords: ["eye-care-ad", "ophthalmology-ad", "eye", "vision", "cataract", "lasik", "glaucoma"] },
      { name: "Nutrition & Dietetics", type: "specialty", link: "#/specialties/nutrition-and-dietetics", keywords: ["nutrition-ad", "diet", "dietetics", "nutritionist", "dietician"] },
      { name: "Pediatrics & Neonatology", type: "specialty", link: "#/specialties/pediatrics-and-neonatology", keywords: ["pediatrics-ad", "child", "kids", "newborn", "neonatology", "baby", "immunization"] },
      { name: "Physiotherapy & Rehabilitation", type: "specialty", link: "#/specialties/physiotherapy-and-rehabilitation", keywords: ["physiotherapy-ad", "rehab", "physical therapy", "exercise", "rehabilitation"] },
      { name: "Psychiatry & Mental Health", type: "specialty", link: "#/specialties/psychiatry-and-mental-health", keywords: ["psychiatry-ad", "mental health", "counseling", "depression", "anxiety", "therapy"] },

      // Advanced Diagnostics
      { name: "Radiology", type: "specialty", link: "#/specialties/radiology", keywords: ["radiology-ad", "xray", "ct scan", "mri", "ultrasound", "imaging"] },
      //{ name: "Cardiology (Advanced Diagnostics)", type: "specialty", link: "#/specialties/cardiology-ad", keywords: ["cardiology-ad", "cardiac diagnostics", "ecg", "echo", "tmt"] },
      { name: "Neurology (Advanced Diagnostics)", type: "specialty", link: "#/specialties/neurology-ad", keywords: ["neurology-ad", "neuro diagnostics", "eeg", "nerve conduction"] },
      { name: "Laboratory Investigations", type: "specialty", link: "#/specialties/laboratory-investigations", keywords: ["lab-ad", "laboratory-ad", "blood test", "biopsy", "fnac", "pathology"] },
    ],
    doctors: [
      // Cardiology
      { name: "Dr. Rajesh Kumar Jha", specialty: "Cardiology", type: "doctor", link: "#/doctors/rajesh-jha" },

      // Critical Care
      { name: "Dr. Fuzail Sarwer", specialty: "Critical Care", type: "doctor", link: "#/doctors/fuzail-sarwer" },
      { name: "Dr. Mohib Ahmed", specialty: "Critical Care", type: "doctor", link: "#/doctors/mohib-ahmed" },

      // Emergency
      { name: "Dr. Shyam Prasad", specialty: "Emergency", type: "doctor", link: "#/doctors/shyam-prasad" },

      // Gastroenterology
      { name: "Dr. Ravish Ranjan", specialty: "Gastroenterology", type: "doctor", link: "#/doctors/ravish-ranjan" },

      // Surgery
      { name: "Dr. Ashish Kumar Modi", specialty: "Bariatric Surgery, General & Laparoscopic Surgery", type: "doctor", link: "#/doctors/ashish-modi" },

      // Internal Medicine
      { name: "Dr. A K Agarwal", specialty: "Internal Medicine", type: "doctor", link: "#/doctors/ak-agarwal" },
      { name: "Dr. A K Sinha", specialty: "Internal Medicine", type: "doctor", link: "#/doctors/ak-sinha" },
      { name: "Dr. Neelam Kumari", specialty: "Internal Medicine", type: "doctor", link: "#/doctors/neelam-kumari" },

      // Nephrology
      { name: "Dr. Avinash Kumar Dubey", specialty: "Nephrology", type: "doctor", link: "#/doctors/avinash-dubey" },

      // Neurosciences
      { name: "Dr. Vivek Raj", specialty: "Neurosurgery", type: "doctor", link: "#/doctors/vivek-raj" },
      { name: "Dr. Ahmad Hussain", specialty: "Neurosciences", type: "doctor", link: "#/doctors/ahmad-hussain" },

      // Oncology
      { name: "Dr. P K Raina", specialty: "Oncology", type: "doctor", link: "#/doctors/pk-raina" },

      // ENT
      { name: "Dr. Abhijit Kumar", specialty: "Otolaryngology & Head and Neck Surgery", type: "doctor", link: "#/doctors/abhijit-kumar" },
      { name: "Dr. Ranajan Kumar Jha", specialty: "ENT", type: "doctor", link: "#/doctors/ranajan-jha" },

      // Orthopaedics
      { name: "Dr. Mozammil Feroz", specialty: "Orthopaedics & Joint Replacement", type: "doctor", link: "#/doctors/Mozammil-pheroz" },
      { name: "Dr. Abhishek Roy", specialty: "Orthopaedics (Sports Injury & Joint Replacement)", type: "doctor", link: "#/doctors/abhishek-roy" },

      // Pulmonology
      { name: "Dr. Suprova Chakraborty", specialty: "Pulmonology", type: "doctor", link: "#/doctors/suprova-chakraborty" },

      // Urology
      { name: "Dr. Sunil Kumar", specialty: "Urology", type: "doctor", link: "#/doctors/sunil-kumar" },
      { name: "Dr. Ved Prakash Verma", specialty: "Urology", type: "doctor", link: "#/doctors/ved-prakash" },

      // Obstetrics & Gynaecology
      { name: "Dr. Anupama Mahli", specialty: "Obstetrics & Gynaecology", type: "doctor", link: "#/doctors/anupama-mahli" },
      { name: "Dr. Pushpa Sinha", specialty: "Obstetrics & Gynaecology", type: "doctor", link: "#/doctors/pushpa-sinha" },

      // Dentistry
      { name: "Dr. Suraj Mani Bhattacharjee", specialty: "Dentistry", type: "doctor", link: "#/doctors/suraj-mani-bhattacharjee" },
      { name: "Dr. Abhishek Bhattacharjee", specialty: "Oral & Maxillofacial Surgery", type: "doctor", link: "#/doctors/abhishek-bhattacharjee" },
      { name: "Dr. Vikash Sharma", specialty: "Oral And Maxillofacial Surgery", type: "doctor", link: "#/doctors/vikash-sharma" },

      // Dermatology
      { name: "Dr. Piyali Banerjee", specialty: "Dermatology and Cosmetology", type: "doctor", link: "#/doctors/piyali-banerjee" },
      { name: "Dr. Shaista Huma", specialty: "Dermatology, Dermatosurgery & Aesthetics", type: "doctor", link: "#/doctors/shaista-huma" },

      // Physiotherapy
      { name: "Dr. Abhay Kumar Pandey", specialty: "Physiotherapy", type: "doctor", link: "#/doctors/abhay-pandey" },
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search page or doctors page with query
      window.location.href = `/doctors?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      // Filter suggestions with keyword support
      const specialtyMatches = searchData.specialties.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
      );
      const doctorMatches = searchData.doctors.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.specialty.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredSuggestions([...specialtyMatches, ...doctorMatches].slice(0, 8));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (link) => {
    setShowSuggestions(false);
    setSearchQuery("");
    window.location.href = link;
  };

  const actionButtons = [
    {
      title: "Book Appointment",
      icon: FiIcons.FiCalendar,
      bgColor: "bg-[#F9771B]",
      textColor: "text-white",
      hoverBg: "hover:bg-[#F9771B]/90",
      link: "/contact",
      subject: "Book Appointment"
    },
    {
      title: "Second Opinion",
      icon: FiIcons.FiUsers,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
      link: "/contact",
      subject: "Second Opinion"
    },
    {
      title: "Get Health Checkup",
      icon: FiIcons.FiActivity,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
      link: "/contact",
      subject: "Get Health Checkup"
    },
    {
      title: "Book a Test",
      icon: FiIcons.FiClipboard,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
      link: "/contact",
      subject: "Book a Test"
    },
  ];

  return (
    <section className="py-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search for Doctors and Specialties"
                className="w-full px-6 py-3.5 pr-12 rounded-full border-2 border-gray-200 focus:border-[#F9771B] focus:outline-none text-gray-700 placeholder-gray-500 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F9771B] hover:bg-[#F9771B]/90 text-white p-2.5 rounded-full transition-colors"
              >
                <SafeIcon icon={FiIcons.FiSearch} className="w-5 h-5" />
              </button>
            </form>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.link)}
                    className="w-full px-6 py-3 hover:bg-gray-50 flex items-center justify-between transition-colors text-left border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${suggestion.type === 'specialty' ? 'bg-[#0191C7]/10' : 'bg-[#F9771B]/10'}`}>
                        <SafeIcon
                          icon={suggestion.type === 'specialty' ? FiIcons.FiActivity : FiIcons.FiUser}
                          className={`w-4 h-4 ${suggestion.type === 'specialty' ? 'text-[#0191C7]' : 'text-[#F9771B]'}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{suggestion.name}</p>
                        {suggestion.specialty && (
                          <p className="text-sm text-gray-500">{suggestion.specialty}</p>
                        )}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${suggestion.type === 'specialty'
                        ? 'bg-[#0191C7]/10 text-[#0191C7]'
                        : 'bg-[#F9771B]/10 text-[#F9771B]'
                      }`}>
                      {suggestion.type === 'specialty' ? 'Specialty' : 'Doctor'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {actionButtons.map((button, index) => (
            <Link
              key={index}
              to={button.link}
              state={{ subject: button.subject }}
              className={`${button.bgColor} ${button.textColor} ${button.hoverBg} ${button.border || ''} px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md`}
            >
              <SafeIcon icon={button.icon} className="w-5 h-5" />
              <span>{button.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// YouTube Video Modal Component
function YouTubeModal({ videoId, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <SafeIcon icon={FiX} className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* YouTube Video */}
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function HomePage() {
  const [modalVideoId, setModalVideoId] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  // Fetch blogs from Raj Hospitals WordPress API
  useEffect(() => {
    fetch("https://rajhospitals.com/blog/wp-json/wp/v2/posts?_embed&per_page=4")
      .then(res => res.json())
      .then(posts => {
        const formattedBlogs = posts.map(post => ({
          title: post.title.rendered,
          img: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'assets/home-img/blogs/default-blog.webp',
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 100) + '...',
          url: post.link,
          date: new Date(post.date).toLocaleDateString()
        }));
        setBlogs(formattedBlogs);
        setLoadingBlogs(false);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
        // Fallback to static blogs if API fails
        setBlogs(sections.blogs);
        setLoadingBlogs(false);
      });
  }, []);

  return (
    <main className="bg-white">
      <HeroSection />
      {/* Quick Navigation Bar */}
      <QuickNavigationBar />

      {/* Specialties Section */}
      <TabbedSpecialtiesSection />

      {/* Why Choose Raj Hospitals */}
      <WhyChooseRaj />

      {/* About Raj Hospitals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content & Statistics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#F9771B] mb-4">About Raj Hospitals</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For over three decades, Raj Hospitals has been the cornerstone of healthcare excellence in Ranchi, Jharkhand. What started as a vision to provide world-class medical care has evolved into one of the region's most trusted super specialty hospitals.

                Our commitment to patient care, combined with state-of-the-art technology and a team of highly qualified medical professionals, has made us the preferred choice for thousands of families across Jharkhand and neighboring states.              </p>

              {/* Compact Statistics Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center bg-gradient-to-br from-[#F9771B]/10 to-[#F9771B]/5 rounded-lg p-3 border border-[#F9771B]/20"
                >
                  <h3 className="text-2xl font-bold text-[#0191C7]">30+</h3>
                  <p className="text-gray-600 text-xs font-medium">Years Excellence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center bg-gradient-to-br from-[#0191C7]/10 to-[#0191C7]/5 rounded-lg p-3 border border-[#0191C7]/20"
                >
                  <h3 className="text-2xl font-bold text-[#F9771B]">50+</h3>
                  <p className="text-gray-600 text-xs font-medium">Expert Doctors</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center bg-gradient-to-br from-[#0191C7]/10 to-[#0191C7]/5 rounded-lg p-3 border border-[#0191C7]/20"
                >
                  <h3 className="text-2xl font-bold text-[#F9771B]">3L+</h3>
                  <p className="text-gray-600 text-xs font-medium">Patients Treated</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center bg-gradient-to-br from-[#F9771B]/10 to-[#F9771B]/5 rounded-lg p-3 border border-[#F9771B]/20"
                >
                  <h3 className="text-2xl font-bold text-[#0191C7]">24/7</h3>
                  <p className="text-gray-600 text-xs font-medium">Emergency Care</p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6"
              >
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#0191C7] hover:text-[#F9771B] font-semibold text-sm flex items-center gap-2 transition-colors"
                >
                  Learn More About Us
                  <SafeIcon icon={FiIcons.FiArrowRight} className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            > */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="assets\home-img\Raj-hospital-image.webp"
                alt="About Raj Hospitals"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            {/* <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#0191C7]/10 rounded-full -z-10"></div> */}
            {/* </motion.div> */}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <div className="bg-white">
        <Section
          title="Our Technology"
          description="Investing in globally advanced medical technology for care you can trust."
          showViewAll={false}
        >
          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
              {sections.technology.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Full-width Image */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-[#0191C7]/5 to-[#F9771B]/5 overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-[#0191C7] text-xl mb-2 ">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Doctors Talk Section */}
      <div className="bg-gray-50">
        <Section
          title="Doctors Talk"
          description="Our experts share health tips and awareness."
          showViewAll={true}
          viewAllLink="/doctors-talk"
        >
          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
              {sections.doctorTalks.map((video) => (
                <div
                  key={video.videoId}
                  className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-[#F9771B]/25 rounded-xl shadow-md flex flex-col overflow-hidden"
                >
                  <button
                    onClick={() => setModalVideoId(video.videoId)}
                    className="relative group w-full text-left cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <SafeIcon icon={FiIcons.FiPlay} className="w-8 h-8 text-[#F9771B] ml-1" />
                      </div>
                    </div>
                  </button>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#0191C7]">{video.title}</div>
                    {/* <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-white bg-[#F9771B] hover:bg-[#0191C7] px-3 py-2 rounded w-max"
                >
                  Watch on YouTube
                </a> */}
                  </div>

                  </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Video Testimonials Section */}
      <div className="bg-white">
        <Section
          title="Video Testimonials"
          description="Hear from our patients their experiences and healing journeys."
          showViewAll={true}
          viewAllLink="https://youtube.com/playlist?list=PL_ZdqB1Ag8tI_BsrN7gNPrgE1_PDryEXQ&si=REeg2R8SWr258-Ob"
        >
          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
              {sections.testimonials.map((test) => (
                <div
                  key={test.videoId}
                  className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-[#F9771B]/25 rounded-xl shadow-md flex flex-col overflow-hidden"
                >
                  <button
                    onClick={() => setModalVideoId(test.videoId)}
                    className="relative group w-full text-left cursor-pointer"
                  >
                    <img
                      src={test.thumbnail}
                      alt={`Testimonial by ${test.patient}`}
                      className="w-full h-48 object-cover"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <SafeIcon icon={FiIcons.FiPlay} className="w-8 h-8 text-[#F9771B] ml-1" />
                      </div>
                    </div>
                  </button>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-[#0191C7] mb-1">{test.patient}</div>
                    {/* <div className="text-gray-600 flex-1">{test.desc}</div> */}
                    {/* <a
                  href={`https://www.youtube.com/watch?v=${test.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-white bg-[#F9771B] hover:bg-[#0191C7] px-4 py-2 rounded inline-block text-center"
                >
                  Watch Testimonial
                </a> */}
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Patient Stories Section */}
      {/* <Section
        title="Patient Stories"
        description="Lives transformed. Healing journeys."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {sections.patients.map((story) => (
            <div
              key={story.name}
              className="bg-white border border-[#0191C7]/20 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={story.img}
                alt={story.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-lg font-semibold text-[#0191C7]">
                  {story.name}
                </div>
                <div className="text-gray-600 flex-1">{story.desc}</div>
                <button className="mt-3 text-sm font-medium text-white bg-[#F9771B] hover:bg-[#0191C7] transition px-4 py-2 rounded">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section> */}

      {/* Our Blogs Section */}
      <div className="bg-gray-50">
        <Section
          title="Our Blogs"
          description="Insights, health tips, and hospital updates."
          showViewAll={true}
          viewAllLink="/blogs"
        >
          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
            {loadingBlogs ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-500">Loading blogs...</div>
              </div>
            ) : (
              <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                {blogs.map((blog, index) => (
                  <a
                    key={blog.title + index}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-[#F9771B]/20 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group"
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-36 object-cover group-hover:opacity-90 transition"
                    />
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="font-bold text-[#0191C7] mb-1">{blog.title}</div>
                      {blog.date && (
                        <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                      )}
                      <div className="text-gray-600 text-sm mb-2 flex-1">{blog.excerpt}</div>
                      <span className="text-[#F9771B] text-sm mt-auto hover:underline">
                        Read More
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Section>
      </div>

      {/* News & Media Section */}
      <div className="bg-white">
        <NewsMediaCompact />
      </div>

      {/* YouTube Video Modal */}
      <YouTubeModal
        videoId={modalVideoId}
        isOpen={!!modalVideoId}
        onClose={() => setModalVideoId(null)}
      />
    </main>
  );
}
