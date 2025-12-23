// -------------------------
// GENERAL PAGES META
// -------------------------
const generalPagesMeta = [
  {
    page: "home",
    redirectUrl: "/",
    newSiteUrl: "https://raj-new.netlify.app/",
    metaTitle:
      "Raj Hospitals in Ranchi | Multi-Speciality Healthcare Services",
    metaDescription:
      "Raj Hospitals in Ranchi offers comprehensive multi-speciality healthcare with expert doctors, advanced diagnostics, and patient-centric care.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Hospital",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/",
      logo: "https://rajhospitals.com/assets/logo.png",
      description:
        "Raj Hospitals in Ranchi offers comprehensive multi-speciality healthcare services with expert doctors and modern medical facilities.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.3441",
        longitude: "85.3096",
      },
      openingHours: [
        "Mo 00:00-23:59",
        "Tu 00:00-23:59",
        "We 00:00-23:59",
        "Th 00:00-23:59",
        "Fr 00:00-23:59",
        "Sa 00:00-23:59",
        "Su 00:00-23:59",
      ],
      medicalSpecialty: [
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Emergency Medicine",
        "Gastroenterology",
        "Internal Medicine",
        "General Surgery",
        "Pediatrics",
        "Obstetrics and Gynecology",
      ],
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
      memberOf: {
        "@type": "Organization",
        name: "Raj Hospitals",
      },
    },
  },

  {
    page: "about",
    redirectUrl: "/about",
    newSiteUrl: "https://raj-new.netlify.app/about",
    metaTitle:
      "About Raj Hospitals in Ranchi | Trusted Healthcare Provider",
    metaDescription:
      "Learn about Raj Hospitals in Ranchi, its mission, healthcare values, expert team, and commitment to quality patient care and advanced medical services.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/about.php",
      logo: "https://rajhospitals.com/assets/logo.png",
      description:
        "Raj Hospitals is a trusted multi-speciality hospital in Ranchi offering comprehensive healthcare services with expert medical teams and advanced facilities.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
      founder: {
        "@type": "Person",
        name: "Raj Hospitals",
      },
    },
  },

  {
    page: "contact",
    redirectUrl: "/contact",
    newSiteUrl: "https://raj-new.netlify.app/contact",
    metaTitle:
      "Contact Raj Hospitals in Ranchi | Phone, Email & Address",
    metaDescription:
      "Get in touch with Raj Hospitals in Ranchi for appointments, inquiries, and 24x7 support. Call, email or visit us at Mahatma Gandhi Main Road.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/contact.php",
      description:
        "Contact Raj Hospitals in Ranchi for appointments, inquiries, emergency support, and patient services. Call, email or visit us.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
    },
  },

  {
    page: "doctors",
    redirectUrl: "/doctors",
    newSiteUrl: "https://raj-new.netlify.app/doctors",
    metaTitle: "Find a Doctor at Raj Hospitals in Ranchi | Expert Medical Team",
    metaDescription:
      "Meet our expert team of doctors and specialists at Raj Hospitals in Ranchi. Find experienced physicians across various medical specialities for quality healthcare.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/find-a-doctor.php",
      description:
        "Find experienced doctors and medical specialists at Raj Hospitals in Ranchi across various specialities including cardiology, neurology, orthopedics, and more.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
    },
  },

  {
    page: "careers",
    redirectUrl: "/careers",
    newSiteUrl: "https://raj-new.netlify.app/careers",
    metaTitle: "Careers at Raj Hospitals in Ranchi | Join Our Healthcare Team",
    metaDescription:
      "Explore career opportunities at Raj Hospitals in Ranchi. Join our team of healthcare professionals and make a difference in patient care and medical excellence.",
    schema: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      hiringOrganization: {
        "@type": "Hospital",
        name: "Raj Hospitals",
        sameAs: "https://rajhospitals.com",
        logo: "https://rajhospitals.com/assets/logo.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mahatma Gandhi Main Road, behind Central",
          addressLocality: "Ranchi",
          addressRegion: "Jharkhand",
          postalCode: "834001",
          addressCountry: "IN",
        },
      },
      description:
        "Join Raj Hospitals in Ranchi and be part of a dedicated healthcare team committed to providing quality patient care and medical excellence.",
    },
  },

  {
    page: "news-media",
    redirectUrl: "/news-media",
    newSiteUrl: "https://raj-new.netlify.app/news-media",
    metaTitle: "News & Media | Raj Hospitals in Ranchi | Latest Updates",
    metaDescription:
      "Stay updated with the latest news, press releases, and media coverage of Raj Hospitals in Ranchi. Read about our healthcare initiatives and achievements.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/news-media",
      description:
        "Latest news, press releases, and media coverage about Raj Hospitals in Ranchi, including healthcare initiatives, achievements, and community outreach programs.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
    },
  },

  {
    page: "testimonials",
    redirectUrl: "/testimonials",
    newSiteUrl: "https://raj-new.netlify.app/testimonials",
    metaTitle: "Patient Testimonials | Raj Hospitals in Ranchi | Success Stories",
    metaDescription:
      "Read real patient testimonials and success stories from Raj Hospitals in Ranchi. Discover how our expert care has transformed lives and restored health.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/testimonials",
      description:
        "Patient testimonials and success stories from Raj Hospitals in Ranchi showcasing quality healthcare, expert medical treatment, and patient satisfaction.",
      telephone: "+919771488888",
      email: "info@rajhospitals.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mahatma Gandhi Main Road, behind Central",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "City",
        name: "Ranchi",
      },
    },
  },
];

// -------------------------
// SPECIALTIES META
// -------------------------
const specialtiesMeta = [
  {
    redirectUrl: "/specialties/aesthetic-and-reconstructive-surgery",
    metaTitle: "Aesthetic & Reconstructive Surgery in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced aesthetic and reconstructive surgery in Ranchi at Raj Hospitals. Expert care for cosmetic, trauma, and reconstructive needs.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/aesthetic-&-reconstructive-surgery.php",
      description:
        "Raj Hospitals in Ranchi provides expert aesthetic and reconstructive surgery services for cosmetic enhancement, trauma repair, and corrective procedures.",
      medicalSpecialty: ["Plastic Surgery", "Reconstructive Surgery"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/cardiology",
    metaTitle: "Best Cardiologist & Heart Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert cardiologist and heart specialist in Ranchi offering advanced diagnosis and treatment for heart diseases at Raj Hospitals.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/cardiologist-and-heart-specialist-ranchi.php",
      description:
        "Raj Hospitals in Ranchi provides expert cardiology services including diagnosis and treatment of heart conditions.",
      medicalSpecialty: ["Cardiology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/critical-care",
    metaTitle: "Advanced Critical Care & ICU in Ranchi | Raj Hospitals",
    metaDescription:
      "24×7 critical care and ICU services in Ranchi with advanced monitoring and life support systems.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/critical-care.php",
      description:
        "Raj Hospitals in Ranchi offers 24×7 critical care and intensive care services with advanced medical infrastructure.",
      medicalSpecialty: ["Critical Care Medicine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/dental",
    metaTitle: "Best Dental Surgeon in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert dental surgeon in Ranchi providing advanced dental and oral surgery care.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/dental-surgeon-ranchi.php",
      description:
        "Raj Hospitals in Ranchi offers expert dental surgery and oral healthcare services.",
      medicalSpecialty: ["Dentistry", "Oral Surgery"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/dermatology",
    metaTitle: "Best Dermatologist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert dermatologist in Ranchi for skin, hair, and cosmetic treatments.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/dermatologist-ranchi.php",
      description:
        "Raj Hospitals in Ranchi offers advanced dermatology services for skin and hair conditions.",
      medicalSpecialty: ["Dermatology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/emergency",
    metaTitle: "24×7 Emergency Medicine & Care in Ranchi | Raj Hospitals",
    metaDescription:
      "24×7 emergency medicine services in Ranchi with rapid response and expert care.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/emergency-medicine.php",
      description:
        "Raj Hospitals provides round-the-clock emergency medical services in Ranchi.",
      medicalSpecialty: ["Emergency Medicine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/ent",
    metaTitle: "Best ENT Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert ENT specialist in Ranchi for ear, nose, and throat care.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/ent-specialist.php",
      description:
        "Raj Hospitals provides expert ENT care for ear, nose, and throat disorders.",
      medicalSpecialty: ["Otolaryngology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/eye-care",
    metaTitle: "Best Eye Hospital in Ranchi | Raj Hospitals",
    metaDescription:
      "Trusted eye hospital in Ranchi offering comprehensive eye care services.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/eye-hospital-ranchi.php",
      description:
        "Raj Hospitals offers comprehensive eye care and ophthalmology services in Ranchi.",
      medicalSpecialty: ["Ophthalmology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/gastroenterology",
    metaTitle: "Best Gastroenterologist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert gastroenterology care in Ranchi for digestive system disorders.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/gastroenterology-ranchi.php",
      description:
        "Raj Hospitals offers expert gastroenterology services in Ranchi.",
      medicalSpecialty: ["Gastroenterology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/minimal-access-surgery",
    metaTitle: "General & Laparoscopic Surgery in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced general and laparoscopic surgery services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/general-and-laparoscopic-surgery-ranchi.php",
      description:
        "Raj Hospitals provides expert general and laparoscopic surgery services.",
      medicalSpecialty: ["General Surgery", "Laparoscopic Surgery"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/internal-medicine",
    metaTitle: "Internal Medicine Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert internal medicine care in Ranchi for adult health conditions.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/internal-medicine.php",
      description:
        "Raj Hospitals offers comprehensive internal medicine services in Ranchi.",
      medicalSpecialty: ["Internal Medicine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/nephrology",
    metaTitle: "Best Nephrologist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert nephrology care in Ranchi for kidney-related disorders.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/nephrologist-ranchi.php",
      description:
        "Raj Hospitals provides expert nephrology services including dialysis care.",
      medicalSpecialty: ["Nephrology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/neurology",
    metaTitle: "Best Neurologist in Ranchi | Raj Hospitals",
    metaDescription:
      "Expert neurology care in Ranchi for brain and nervous system disorders.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/neurologist-ranchi.php",
      description:
        "Raj Hospitals offers advanced neurology services in Ranchi.",
      medicalSpecialty: ["Neurology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/neurosciences",
    metaTitle: "Neurosciences & Brain Care in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive neurosciences and brain care services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/neurosciences.php",
      description:
        "Raj Hospitals provides advanced neurosciences and brain care services in Ranchi.",
      medicalSpecialty: ["Neurosciences"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/obstetrics-and-gynaecology",
    metaTitle: "Maternity & Gynecologist in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive maternity and gynaecology care services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/maternity-and-gynaecology.php",
      description:
        "Raj Hospitals offers complete maternity and gynaecology services in Ranchi.",
      medicalSpecialty: ["Gynecology", "Obstetrics"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/oral-and-maxillofacial-surgery",
    metaTitle: "Oral & Maxillofacial Surgery in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced oral and maxillofacial surgery services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/oral-and-maxillofacial-surgery.php",
      description:
        "Raj Hospitals provides advanced oral and maxillofacial surgery services in Ranchi.",
      medicalSpecialty: ["Oral and Maxillofacial Surgery"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/oncology-cancer-care",
    metaTitle: "Oncologist & Cancer Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive cancer diagnosis and treatment services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/oncologist-and-cancer-specialist-ranchi.php",
      description:
        "Raj Hospitals provides comprehensive oncology services in Ranchi.",
      medicalSpecialty: ["Oncology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/orthopaedics-and-joint-replacement",
    metaTitle:
      "Orthopedic & Joint Replacement Surgery in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced orthopedic and joint replacement surgery services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url:
        "https://rajhospitals.com/orthopedic-and-joint-replacement-surgery.php",
      description:
        "Raj Hospitals offers advanced orthopedic and joint replacement surgery services.",
      medicalSpecialty: ["Orthopedics"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/pediatrics-and-neonatology",
    metaTitle: "Pediatrician & Child Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive paediatric care services in Ranchi for infants and children.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/paediatrician-and-child-specialist.php",
      description:
        "Raj Hospitals provides comprehensive paediatric healthcare services.",
      medicalSpecialty: ["Paediatrics"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/pulmonology",
    metaTitle: "Pulmonology Specialist in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced pulmonology and respiratory care services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/pulmonology-specialist.php",
      description:
        "Raj Hospitals offers expert pulmonology services in Ranchi.",
      medicalSpecialty: ["Pulmonology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/physiotherapy-and-rehabilitation",
    metaTitle: "Physiotherapy Department in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced physiotherapy and rehabilitation services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/physiotherapy.php",
      description:
        "Raj Hospitals offers physiotherapy and rehabilitation services in Ranchi.",
      medicalSpecialty: ["Physiotherapy"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/nutrition-and-dietetics",
    metaTitle: "Nutrition & Dietetics Services in Ranchi | Raj Hospitals",
    metaDescription:
      "Clinical nutrition and dietetics services in Ranchi for patient care.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/nutrition-and-dietetics.php",
      description:
        "Raj Hospitals provides nutrition and dietetics services for patient health.",
      medicalSpecialty: ["Nutrition", "Dietetics"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/psychiatry-and-mental-health",
    metaTitle: "Psychiatry & Mental Health Services in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive psychiatry and mental health services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/psychiatry-and-mental-health.php",
      description:
        "Raj Hospitals offers psychiatry and mental health care services in Ranchi.",
      medicalSpecialty: ["Psychiatry"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/radiology",
    metaTitle: "Radiology Services in Ranchi | Raj Hospitals",
    metaDescription:
      "Advanced diagnostic radiology and imaging services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/radiology.php",
      description:
        "Raj Hospitals provides advanced radiology and imaging services.",
      medicalSpecialty: ["Radiology"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

  {
    redirectUrl: "/specialties/laboratory-investigations",
    metaTitle: "Laboratory Investigations in Ranchi | Raj Hospitals",
    metaDescription:
      "Comprehensive laboratory investigations and diagnostic services in Ranchi.",
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Raj Hospitals",
      url: "https://rajhospitals.com/laboratory-investigations.php",
      description:
        "Raj Hospitals offers comprehensive laboratory investigations and diagnostics.",
      medicalSpecialty: ["Laboratory Medicine"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        addressCountry: "India",
      },
    },
  },

];

export { generalPagesMeta, specialtiesMeta };
export default specialtiesMeta;