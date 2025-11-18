import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    image: "assets/home-img/Cardiology.png",
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
    id: "neurology",
    title: "Neurology",
    shortTitle: "Neurology",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/Neurology.png",
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
    id: "gynecology",
    title: "Obstetrics & Gynecology",
    shortTitle: "Gynecology",
    icon: FiIcons.FiUser,
    image: "assets/home-img/Gynecology.png",
    description:
      "Specialized care for women’s health, pregnancy, and gynecological conditions.",
    features: [
      "Comprehensive Obstetrics & Gynecology Services",
      "High-Risk Pregnancy Management",
      "Gynecological Surgeries",
    ],
    stats: { procedures: "2000+", experience: "15+ Years" },
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics & Joint Replacement",
    shortTitle: "Orthopaedics",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/Orthopaedics.png",
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
    id: "surgery",
    title: "Minimal Access Surgery",
    shortTitle: "Surgery",
    icon: FiIcons.FiScissors,
    image: "assets/home-img/MinimalAccess.png",
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
    image: "assets/home-img/ENT.png",
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
    image: "assets/home-img/Nephrology.png",
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
    id: "oncology",
    title: "Oncology (Cancer Care)",
    shortTitle: "Oncology",
    icon: FiIcons.FiAperture,
    image: "assets/home-img/Oncology.png",
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
    image: "assets/home-img/Gastroenterology.png",
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
    image: "assets/home-img/Emergency.png",
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
    id: "pediatrics",
    title: "Pediatrics & Neonatology",
    shortTitle: "Pediatrics",
    icon: FiIcons.FiSmile,
    image: "assets/home-img/Pediatrics.png",
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
    image: "assets/home-img/Urology.png",
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
    { name: "City Center", rating: "4.8", img: "/assets/location1.jpg" },
    { name: "Lakeside", rating: "4.7", img: "/assets/location2.jpg" },
    { name: "Green Valley", rating: "4.6", img: "/assets/location3.jpg" },
  ],
  technology: [
    {
      name: "Advanced Kidney Care with Continuous Renal Replacement Therapy (CRRT)",
      desc: "Minimally invasive with quick recovery",
      image: "assets/home-img/crrt-raj-home.webp",
    },
    {
      name: "State-of-the-Art Gastroenterology Suite at Raj Hospitals, Ranchi",
      desc: "Precise cancer treatment",
      image: "assets/About-img/Comprehensive-Neuro.png",
    },
    {
      name: "advanced Leica-Provido Operating Microscope at Raj Hospitals,",
      desc: "Complex brain and spine procedures",
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
      image: "assets/home-img/Why-Choose-Raj Hospitals/30+ Years-of-Excellence.png",
      title: "30+ Years of Excellence",
      desc: "Three decades of trusted healthcare service in Ranchi",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/State-of-the-art-Technology.png",
      title: "State-of-the-art Technology",
      desc: "Latest medical equipment and advanced treatment facilities",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/Experienced-Medical-Team.png",
      title: "Experienced Medical Team",
      desc: "Highly qualified doctors and skilled healthcare professionals",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/24-7-Emergency-Services.png",
      title: "24/7 Emergency Services",
      desc: "Round-the-clock emergency care and critical support",
    },
    {
      image: "assets/home-img/Why-Choose-Raj Hospitals/SICU-Facilities.png",
      title: "ICU/NICU/SICU Facilities",
      desc: "Specialized intensive care units for critical patient care",
    },
    {
      image: "assets/home-img/Picture1.jpg",
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
      title: "Raj Hospital launches new Cardiac Care Unit",
      date: "Oct 7, 2025",
      excerpt: "State-of-the-art facility dedicated to cardiac patients.",
      url: "#",
    },
    {
      title: "Dr. Mehta recognized for research on cancer treatment",
      date: "Sep 20, 2025",
      excerpt: "Awarded at the National Medical Congress.",
      url: "#",
    },
    {
      title: "Raj Hospital hosts free health camp in city park",
      date: "Aug 15, 2025",
      excerpt: "Thousands benefited from free screenings and consultations.",
      url: "#",
    },
    {
      title: "New Pediatric Wing inaugurated",
      date: "Jul 30, 2025",
      excerpt: "Specialized care for children with advanced neonatal ICU.",
      url: "#",
    },
    {
      title: "Raj Hospitals partners with local NGO for health awareness",
      date: "Jul 5, 2025",
      excerpt: "Community outreach programs expanding across the city.",
      url: "#",
    },
    {
      title: "Award for Excellence in Patient Care",
      date: "Jun 20, 2025",
      excerpt: "Received recognition for outstanding patient satisfaction scores.",
      url: "#",
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
      videoId: "Gi1WhJ1dR6g",
      patient: "Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals",
      desc: "The doctors and staff were exceptional.",
      thumbnail: "https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg",
    },
        {
      videoId: "Gi1WhJ1dR6g",
      patient: "Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals",
      desc: "The doctors and staff were exceptional.",
      thumbnail: "https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg",
    },
            {
      videoId: "Gi1WhJ1dR6g",
      patient: "Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals",
      desc: "The doctors and staff were exceptional.",
      thumbnail: "https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg",
    },
  ],
  patients: [
    {
      name: "A New Heart, A New Start",
      desc: "Life-saving cardiac surgery inspires a family.",
      img: "/assets/patient1.jpg",
    },
    {
      name: "Overcoming the Impossible",
      desc: "Complex spine surgery restores mobility.",
      img: "/assets/patient2.jpg",
    },
        {
      name: "Overcoming the Impossible",
      desc: "Complex spine surgery restores mobility.",
      img: "/assets/patient2.jpg",
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
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-[#F9771B]">News & Media</h2>
        <a
          href="/news"
          className="text-[#0191C7] hover:text-[#F9771B] font-semibold text-sm flex items-center gap-2 transition-colors"
        >
          View All
          <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
        </a>
      </div>
      <p className="text-gray-700 mb-8">Stay updated with our latest announcements and achievements.</p>

      {/* News Content */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* News Image */}
        <div className="hidden md:block md:w-1/3">
          <div className="w-full h-[450px] rounded-xl overflow-hidden ">
            <img
              src="assets\home-img\Why-Choose-Raj Hospitals\breaking-news-raj.png"
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
            <p className="text-gray-700 mt-1 line-clamp-3">{news.excerpt}</p>
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
            <p className="text-gray-700 mt-1 line-clamp-3">{news.excerpt}</p>
          </a>
        ))}
      </div>
      </div>
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
                className={`flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition ${
                  activeTab === index
                    ? "bg-[#F9771B] text-white shadow-lg border-transparent"
                    : "bg-white text-gray-600 border border-gray-300 hover:border-[#F9771B] hover:text-[#F9771B]"
                }`}
              >
                <SafeIcon
                  icon={spec.icon}
                  className={`w-5 h-5 ${
                    activeTab === index ? "text-white" : "text-[#F9771B]"
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
              <button className="bg-[#F9771B] hover:bg-[#F9771B]/90 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
                Book Consultation
              </button>
              <button className="bg-[#0191C7] hover:bg-[#0191C7]/90 text-white px-6 py-2 rounded-lg font-semibold shadow transition">
                Learn More
              </button>
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
  const actionButtons = [
    {
      title: "Book Appointment",
      icon: FiIcons.FiCalendar,
      bgColor: "bg-[#F9771B]",
      textColor: "text-white",
      hoverBg: "hover:bg-[#F9771B]/90",
    },
    {
      title: "Second Opinion",
      icon: FiIcons.FiUsers,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
    },
    {
      title: "Get Health Checkup",
      icon: FiIcons.FiActivity,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
    },
    // {
    //   title: "Book A Virtual Consultation",
    //   icon: FiIcons.FiVideo,
    //   bgColor: "bg-white",
    //   textColor: "text-gray-700",
    //   hoverBg: "hover:bg-gray-50",
    //   border: "border border-gray-200",
    // },
    {
      title: "Homecare",
      icon: FiIcons.FiHome,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
    },
    {
      title: "Book a Test",
      icon: FiIcons.FiClipboard,
      bgColor: "bg-white",
      textColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      border: "border border-gray-200",
    },
  ];

  return (
    <section className="py-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for Doctors and Specialties"
              className="w-full px-6 py-3.5 pr-12 rounded-full border-2 border-gray-200 focus:border-[#F9771B] focus:outline-none text-gray-700 placeholder-gray-500 shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F9771B] hover:bg-[#F9771B]/90 text-white p-2.5 rounded-full transition-colors">
              <SafeIcon icon={FiIcons.FiSearch} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {actionButtons.map((button, index) => (
            <button
              key={index}
              className={`${button.bgColor} ${button.textColor} ${button.hoverBg} ${button.border || ''} px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md`}
            >
              <SafeIcon icon={button.icon} className="w-5 h-5" />
              <span>{button.title}</span>
            </button>
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
                  <h3 className="text-2xl font-bold text-[#F9771B]">200+</h3>
                  <p className="text-gray-600 text-xs font-medium">Expert Doctors</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center bg-gradient-to-br from-[#0191C7]/10 to-[#0191C7]/5 rounded-lg p-3 border border-[#0191C7]/20"
                >
                  <h3 className="text-2xl font-bold text-[#F9771B]">1L+</h3>
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="assets/home-img/about-hospital.jpg"
                  alt="About Raj Hospitals"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#0191C7]/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <div className="bg-white">
      <Section
        title="Our Technology"
        description="Investing in globally advanced medical technology for care you can trust."
        showViewAll={true}
        viewAllLink="/technology"
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
        viewAllLink="/testimonials"
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
                <div className="text-gray-600 flex-1">{test.desc}</div>
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
          <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
          {sections.blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.url}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-[#F9771B]/20 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-36 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-bold text-[#0191C7] mb-1">{blog.title}</div>
                <div className="text-gray-600 mb-2 flex-1">{blog.excerpt}</div>
                <span className="text-[#F9771B] text-sm mt-auto hover:underline">
                  Read More
                </span>
              </div>
            </a>
          ))}
          </div>
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
