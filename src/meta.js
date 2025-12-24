const pagesMeta = [
  {
    page: "home",
    metaTitle: "Raj Hospitals in Ranchi | Multi-Speciality Healthcare Services",
    metaDescription: "Raj Hospitals in Ranchi offers comprehensive multi-speciality healthcare with expert doctors, advanced diagnostics, and patient-centric care."
  },
  {
    page: "about",
    metaTitle: "About Raj Hospitals in Ranchi | Trusted Healthcare Provider",
    metaDescription: "Learn about Raj Hospitals in Ranchi, its mission, healthcare values, expert team, and commitment to quality patient care and advanced medical services."
  },
  {
    page: "contact",
    metaTitle: "Contact Raj Hospitals in Ranchi | Phone, Email & Address",
    metaDescription: "Get in touch with Raj Hospitals in Ranchi for appointments, inquiries, and 24x7 support. Call, email or visit us at Mahatma Gandhi Main Road."
  },
  {
    page: "doctors",
    metaTitle: "Find a Doctor at Raj Hospitals in Ranchi | Expert Medical Team",
    metaDescription: "Meet our expert team of doctors and specialists at Raj Hospitals in Ranchi. Find experienced physicians across various medical specialities for quality healthcare."
  },
  {
    page: "careers",
    metaTitle: "Careers at Raj Hospitals in Ranchi | Join Our Healthcare Team",
    metaDescription: "Explore career opportunities at Raj Hospitals in Ranchi. Join our team of healthcare professionals and make a difference in patient care and medical excellence."
  },
  {
    page: "news-media",
    metaTitle: "News & Media | Raj Hospitals in Ranchi | Latest Updates",
    metaDescription: "Stay updated with the latest news, press releases, and media coverage of Raj Hospitals in Ranchi. Read about our healthcare initiatives and achievements."
  },
  {
    page: "testimonials",
    metaTitle: "Patient Testimonials | Raj Hospitals in Ranchi | Success Stories",
    metaDescription: "Read real patient testimonials and success stories from Raj Hospitals in Ranchi. Discover how our expert care has transformed lives and restored health."
  },

  // -------- Specialties --------

  {
    page: "aesthetic-reconstructive-surgery",
    metaTitle: "Aesthetic & Reconstructive Surgery in Ranchi | Raj Hospitals",
    metaDescription: "Advanced aesthetic and reconstructive surgery in Ranchi at Raj Hospitals. Expert care for cosmetic, trauma, and reconstructive needs."
  },
  {
    page: "cardiology",
    metaTitle: "Best Cardiologist & Heart Specialist in Ranchi | Raj Hospitals",
    metaDescription: "Expert cardiologist and heart specialist in Ranchi at Raj Hospitals. Advanced diagnosis and treatment for heart diseases with modern care."
  },
  {
    page: "critical-care-icu",
    metaTitle: "Advanced Critical Care & ICU in Ranchi | Raj Hospitals",
    metaDescription: "24x7 critical care and ICU services in Ranchi at Raj Hospitals with expert doctors, advanced monitoring, and emergency support."
  },
  {
    page: "dental",
    metaTitle: "Best Dental Surgeon in Ranchi | Advanced Dental Care",
    metaDescription: "Expert dental surgeon in Ranchi at Raj Hospitals offering safe, advanced dental treatments for healthy teeth and confident smiles."
  },
  {
    page: "dermatology",
    metaTitle: "Best Dermatologist in Ranchi | Skin Specialist Care",
    metaDescription: "Expert dermatologist in Ranchi at Raj Hospitals for skin, hair, and nail conditions with safe diagnosis and advanced treatments."
  },
  {
    page: "emergency-medicine",
    metaTitle: "24x7 Emergency Medicine & Care in Ranchi | Raj Hospitals",
    metaDescription: "24x7 emergency medicine services in Ranchi at Raj Hospitals with rapid response, expert doctors, and advanced life-saving care."
  },
  {
    page: "ent",
    metaTitle: "Best ENT Specialist in Ranchi | Ear Nose Throat Care",
    metaDescription: "Expert ENT specialist in Ranchi at Raj Hospitals for ear, nose, and throat problems with advanced diagnosis and treatment care."
  },
  {
    page: "eye-care",
    metaTitle: "Best Eye Hospital in Ranchi | Advanced Eye Care",
    metaDescription: "Trusted eye hospital in Ranchi at Raj Hospitals offering advanced diagnosis and treatment for vision and eye-related conditions."
  },
  {
    page: "gastroenterology",
    metaTitle: "Best Gastroenterologist in Ranchi | Digestive Care",
    metaDescription: "Expert gastroenterology care in Ranchi at Raj Hospitals for liver, stomach, and digestive disorders with advanced diagnosis."
  },
  {
    page: "general-laparoscopic-surgery",
    metaTitle: "General & Laparoscopic Surgery in Ranchi | Raj Hospitals",
    metaDescription: "Advanced general and laparoscopic surgery in Ranchi at Raj Hospitals with safe, minimally invasive procedures and expert surgeons."
  },
  {
    page: "internal-medicine",
    metaTitle: "Internal Medicine Specialist in Ranchi | Raj Hospitals",
    metaDescription: "Expert internal medicine care in Ranchi at Raj Hospitals for adult health, chronic diseases, and accurate medical diagnosis."
  },
  {
    page: "nephrology",
    metaTitle: "Best Nephrologist in Ranchi | Kidney Specialist Care",
    metaDescription: "Expert nephrologist in Ranchi at Raj Hospitals for kidney disease diagnosis, treatment, and long-term renal care services."
  },
  {
    page: "neurology",
    metaTitle: "Best Neurologist in Ranchi | Brain & Nerve Care",
    metaDescription: "Expert neurologist in Ranchi at Raj Hospitals for brain, spine, and nerve disorders with accurate diagnosis and advanced care."
  },
  {
    page: "neurosciences-brain-care",
    metaTitle: "Neurosciences & Brain Care in Ranchi | Raj Hospitals",
    metaDescription: "Comprehensive neurosciences and brain care services in Ranchi at Raj Hospitals with expert neurologists & advanced neuro care treatments."
  },
  {
    page: "orthopedics-joint-replacement",
    metaTitle: "Orthopedic & Joint Replacement Surgery in Ranchi | Raj Hospitals",
    metaDescription: "Expert orthopedic and joint replacement surgery in Ranchi at Raj Hospitals for bone, joint, and mobility-related conditions."
  },
  {
    page: "pediatrics",
    metaTitle: "Best Pediatrician & Child Specialist in Ranchi | Raj Hospitals",
    metaDescription: "Expert pediatrician and child specialists in Ranchi at Raj Hospitals for newborn, child, and adolescent healthcare needs."
  },
  {
    page: "physiotherapy",
    metaTitle: "Best Physiotherapy Department in Ranchi | Raj Hospitals",
    metaDescription: "Advanced physiotherapy services in Ranchi at Raj Hospitals for pain relief, injury recovery, and improved mobility care."
  },
  {
    page: "pulmonology",
    metaTitle: "Best Pulmonologist in Ranchi | Lung & Respiratory Care",
    metaDescription: "Expert pulmonology and respiratory care in Ranchi at Raj Hospitals for lung conditions, asthma, COPD, and breathing disorders."
  },
  {
    page: "psychiatry-mental-health-services",
    metaTitle: "Psychiatry & Mental Health Services in Ranchi | Raj Hospitals",
    metaDescription: "Expert psychiatry and mental health services in Ranchi at Raj Hospitals for mental wellness, counselling & psychiatric care."
  },
  {
    page: "nutrition-dietetics-services",
    metaTitle: "Nutrition & Dietetics Services in Ranchi | Raj Hospitals",
    metaDescription: "Professional nutrition and dietetics services in Ranchi at Raj Hospitals for personalised diet plans and wellness support."
  },
  {
    page: "urology",
    metaTitle: "Best Urologist in Ranchi | Urinary & Kidney Care",
    metaDescription: "Expert urologist in Ranchi at Raj Hospitals for urinary, kidney, bladder, and prostate disorders with advanced care."
  },
  {
    page: "laboratory-investigations",
    metaTitle: "Laboratory Investigations in Ranchi | Raj Hospitals",
    metaDescription: "Professional laboratory investigations in Ranchi at Raj Hospitals with accurate diagnostics, blood tests, pathology services, and timely reports."
  },
  {
    page: "advanced-radiology-services",
    metaTitle: "Advanced Radiology Services in Ranchi | Raj Hospitals",
    metaDescription: "Expert radiology and imaging services in Ranchi at Raj Hospitals offering X-ray, ultrasound, MRI, CT scan and accurate diagnostic support."
  }
];

export default pagesMeta;