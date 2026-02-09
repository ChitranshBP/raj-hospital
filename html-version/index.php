<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ================= META TAGS ================= -->

    <title>Best Multispeciality Hospital in Ranchi | Raj Hospital Jharkhand</title>

    <meta name="description"
        content="Raj Hospital is a leading multispeciality hospital in Ranchi offering advanced medical care, experienced doctors, emergency services and modern facilities." />

    <meta name="robots" content="index, follow" />

    <!-- ================= CANONICAL ================= -->

    <link rel="canonical" href="https://rajhospitals.com/" />

    <!-- ================= GEO TAGS ================= -->

    <meta name="geo.region" content="IN-JH" />
    <meta name="geo.placename" content="Ranchi" />
    <meta name="geo.position" content="23.3441;85.3096" />
    <meta name="ICBM" content="23.3441, 85.3096" />

    <!-- ================= KEYWORDS (COMMENTED) ================= -->
    <!--
Primary Keyword:
Best Hospital in Ranchi

Secondary Keywords:
Multispeciality Hospital in Ranchi
Top Hospital in Ranchi
Private Hospital in Ranchi
Best Hospital in Jharkhand
-->

    <!-- ================= ORGANIZATION / HOSPITAL SCHEMA ================= -->

    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "Raj Hospital",
  "url": "https://rajhospitals.com/",
  "logo": "https://rajhospitals.com/images/logo.png",
  "image": "https://rajhospitals.com/images/hospital-building.jpg",
  "description": "Raj Hospital is a leading multispeciality hospital in Ranchi providing advanced healthcare services across major medical specialties.",
  "telephone": "+91-9771488888",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mahatma Gandhi Main Road",
    "addressLocality": "Ranchi",
    "addressRegion": "Jharkhand",
    "postalCode": "834001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.3441",
    "longitude": "85.3096"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "380"
  }
}
</script>

    <!-- ================= WEBSITE SCHEMA ================= -->

    <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Raj Hospital",
  "url": "https://rajhospitals.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rajhospitals.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        /* Custom scrollbar hiding */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Framer Motion mimic */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Search colors matching React version */
        .search-specialty-icon {
            background-color: rgba(1, 145, 199, 0.1);
            color: #0191C7;
        }

        .search-doctor-icon {
            background-color: rgba(249, 119, 27, 0.1);
            color: #F9771B;
        }

        .search-specialty-badge {
            background-color: rgba(1, 145, 199, 0.1);
            color: #0191C7;
        }

        .search-doctor-badge {
            background-color: rgba(249, 119, 27, 0.1);
            color: #F9771B;
        }
    </style>
</head>

<body class="bg-white">

    <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Hero Section -->
    <section id="hero-section" class="relative w-full h-[60vh] min-h-[300px] overflow-hidden mt-[120px] bg-gray-100">
        <!-- Slides -->
        <div id="hero-slides" class="absolute inset-0">
            <!-- Slide 1 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100"
                data-index="0">
                <picture class="w-full h-full block">
                    <source media="(max-width: 767px)" srcset="assets/Home-Banners/jharkhand-mob-banner.webp">
                    <img src="assets/Home-Banners/jharkhand-banner.webp" alt="Slide 1"
                        class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            <!-- Slide 2 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0"
                data-index="1">
                <picture class="w-full h-full block">
                    <source media="(max-width: 767px)" srcset="assets/Home-Banners/raj-quality-healthcare-mob.webp">
                    <img src="assets/Home-Banners/quality-health-care.webp" alt="Slide 2"
                        class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            <!-- Slide 3 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0"
                data-index="2">
                <picture class="w-full h-full block">
                    <source media="(max-width: 767px)" srcset="assets/Home-Banners/raj-specialty-mob-banner.webp">
                    <img src="assets/Home-Banners/specialty-banner.webp" alt="Slide 3"
                        class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            <!-- Slide 4 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0"
                data-index="3">
                <picture class="w-full h-full block">
                    <source media="(max-width: 767px)" srcset="assets/Home-Banners/mob-banner-choose.webp">
                    <img src="assets/Home-Banners/web-banner-choose.webp" alt="Slide 4"
                        class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
        </div>

        <!-- Navigation Arrows -->
        <button id="prev-slide"
            class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group cursor-pointer">
            <i data-feather="chevron-left" class="w-5 h-5 sm:w-6 sm:h-6 text-white"></i>
        </button>
        <button id="next-slide"
            class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group cursor-pointer">
            <i data-feather="chevron-right" class="w-5 h-5 sm:w-6 sm:h-6 text-white"></i>
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <div class="flex space-x-2 sm:space-x-3" id="hero-dots">
                <button
                    class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-lg scale-125 transition-all duration-300"
                    data-index="0"></button>
                <button
                    class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300"
                    data-index="1"></button>
                <button
                    class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300"
                    data-index="2"></button>
                <button
                    class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300"
                    data-index="3"></button>
            </div>
        </div>
    </section>

    <!-- HERO_PLACEHOLDER -->

    <!-- Quick Navigation Bar -->
    <section class="py-6 bg-white shadow-sm relative z-20 -mt-8 mx-4 rounded-xl max-w-7xl lg:mx-auto">
        <div class="px-4">
            <!-- Search Bar -->
            <div class="mb-6">
                <div class="relative max-w-2xl mx-auto">
                    <form id="homepage-search-form" class="relative">
                        <input type="text" id="homepage-search" placeholder="Search for Doctors and Specialties"
                            class="w-full px-6 py-3.5 pr-12 rounded-full border-2 border-gray-200 focus:border-[#F9771B] focus:outline-none text-gray-700 placeholder-gray-500 shadow-sm"
                            autocomplete="off">
                        <button type="submit"
                            class="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F9771B] hover:bg-[#F9771B]/90 text-white p-2.5 rounded-full transition-colors">
                            <i data-feather="search" class="w-5 h-5"></i>
                        </button>
                    </form>
                    <!-- Search Results Dropdown -->
                    <div id="search-results-dropdown"
                        class="hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[400px] overflow-y-auto z-50">
                        <!-- Results will be populated by JS -->
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-3">
                <a href="contact.php"
                    class="bg-orange-500 text-white hover:bg-orange-600 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="calendar" class="w-5 h-5"></i>
                    <span>Book Appointment</span>
                </a>
                <a href="contact.php"
                    class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="users" class="w-5 h-5"></i>
                    <span>Second Opinion</span>
                </a>
                <a href="contact.php"
                    class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="activity" class="w-5 h-5"></i>
                    <span>Corporate/TPA Query</span>
                </a>
                <a href="contact.php"
                    class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="clipboard" class="w-5 h-5"></i>
                    <span>Book a Test</span>
                </a>
            </div>
        </div>
    </section>

    <!-- Specialties Section -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-10 fade-in">
                <h2 class="text-3xl font-bold text-gray-900">Our <span class="text-orange-500">Specialties</span></h2>
                <p class="text-gray-600 mt-2 max-w-2xl mx-auto">Comprehensive healthcare services across our key
                    departments with expert doctors and modern technologies.</p>
            </div>

            <!-- Tabs Navigation -->
            <div class="relative mb-6">
                <button id="scroll-left"
                    class="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-orange-100 transition"><i
                        data-feather="chevron-left" class="w-5 h-5 text-gray-700"></i></button>
                <button id="scroll-right"
                    class="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-orange-100 transition"><i
                        data-feather="chevron-right" class="w-5 h-5 text-gray-700"></i></button>

                <div id="specialty-tabs" class="overflow-x-auto scrollbar-hide flex space-x-4 px-12 pb-4"
                    style="scroll-behavior: smooth;">
                    <!-- Cardiology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-orange-500 text-white shadow-lg border-transparent"
                        data-target="cardiology">
                        <i data-feather="heart" class="w-5 h-5"></i>
                        <span>Cardiology</span>
                    </button>
                    <!-- Neurology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="neurology">
                        <i data-feather="aperture" class="w-5 h-5"></i>
                        <span>Neurology</span>
                    </button>
                    <!-- Obstetrics & Gynecology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="obstetrics-and-gynaecology">
                        <i data-feather="user" class="w-5 h-5"></i>
                        <span>Gynecology</span>
                    </button>
                    <!-- Orthopaedics -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="orthopaedics-and-joint-replacement">
                        <i data-feather="users" class="w-5 h-5"></i>
                        <span>Orthopaedics</span>
                    </button>
                    <!-- Minimal Access Surgery -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="minimal-access-surgery">
                        <i data-feather="scissors" class="w-5 h-5"></i>
                        <span>Surgery</span>
                    </button>
                    <!-- ENT -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="ent">
                        <i data-feather="mic" class="w-5 h-5"></i>
                        <span>ENT</span>
                    </button>
                    <!-- Nephrology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="nephrology">
                        <i data-feather="droplet" class="w-5 h-5"></i>
                        <span>Nephrology</span>
                    </button>
                    <!-- Oncology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="oncology-cancer-care">
                        <i data-feather="shield" class="w-5 h-5"></i>
                        <span>Oncology</span>
                    </button>
                    <!-- Gastroenterology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="gastroenterology">
                        <i data-feather="trending-up" class="w-5 h-5"></i>
                        <span>Gastrology</span>
                    </button>
                    <!-- Emergency -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="emergency">
                        <i data-feather="alert-circle" class="w-5 h-5"></i>
                        <span>Emergency</span>
                    </button>
                    <!-- Pediatrics -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="pediatrics-and-neonatology">
                        <i data-feather="smile" class="w-5 h-5"></i>
                        <span>Pediatrics</span>
                    </button>
                    <!-- Urology -->
                    <button
                        class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500"
                        data-target="urology">
                        <i data-feather="zap" class="w-5 h-5"></i>
                        <span>Urology</span>
                    </button>
                </div>
            </div>

            <!-- Content Panel -->
            <div id="specialty-content" class="bg-white rounded-xl shadow p-8 min-h-[400px]">

                <!-- Cardiology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8" id="cardiology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Cardiology</h3>
                        <p class="text-gray-700 mb-6">Specialized cardiac care including advanced diagnostics,
                            interventional procedures, and heart failure management.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Daycare Angiography</li>
                            <li>Angioplasty</li>
                            <li>IVUS, Coiling, RFA</li>
                            <li>Leadless Pacemaker</li>
                            <li>Heart Attack (MI)</li>
                            <li>Heart Failure Management</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/cardiology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/Cardiology.webp" alt="Cardiology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Neurology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="neurology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Neurology</h3>
                        <p class="text-gray-700 mb-6">Comprehensive brain and spine care for injuries, strokes, and
                            neurological disorders.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Head Injuries</li>
                            <li>Brain Stroke Unit & Seizures</li>
                            <li>Endoscopic Spine Surgery</li>
                            <li>Stereotactic Tumor Surgery</li>
                            <li>Trauma, Tumor & TB Surgeries</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/neurology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/neurology.webp" alt="Neurology"
                            class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Obstetrics & Gynecology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden"
                    id="obstetrics-and-gynaecology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Obstetrics & Gynecology</h3>
                        <p class="text-gray-700 mb-6">Specialized care for women's health, pregnancy, and gynecological
                            conditions.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Comprehensive Obstetrics & Gynecology Services</li>
                            <li>High-Risk Pregnancy Management</li>
                            <li>Gynecological Surgeries</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/obstetrics-and-gynaecology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Obstetrics & Gynecology.webp"
                            alt="Obstetrics & Gynecology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Orthopaedics & Joint Replacement Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden"
                    id="orthopaedics-and-joint-replacement">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Orthopaedics & Joint Replacement</h3>
                        <p class="text-gray-700 mb-6">Comprehensive bone and joint care including replacements and
                            sports injury management.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Joint Replacements - Knee, Hip, Shoulder, Elbow & Ankle</li>
                            <li>Arthroscopy, Sports Injury</li>
                            <li>Bone Deformity Surgeries</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/orthopaedics.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Orthopaedics & Joint Replacement.webp"
                            alt="Orthopaedics" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Minimal Access Surgery Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="minimal-access-surgery">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Minimal Access Surgery</h3>
                        <p class="text-gray-700 mb-6">Laparoscopic and laser surgeries for faster recovery and minimal
                            invasiveness.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Laparoscopic & Laser Surgery - Gall Bladder</li>
                            <li>Hernia, Appendix, General Surgery</li>
                            <li>Thoracoscopic (Lung) Surgeries</li>
                            <li>Bariatric (Weight loss) & GI Surgeries</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/minimal-access-surgery.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Minimal Access Surgery/Laparoscopy-Surgery.webp"
                            alt="Minimal Access Surgery" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- ENT Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="ent">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">ENT (Ear, Nose & Throat)</h3>
                        <p class="text-gray-700 mb-6">Comprehensive ear, nose, and throat care for all age groups.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Diagnosis and Treatment of ENT Disorders</li>
                            <li>Hearing and Sinus Surgeries</li>
                            <li>Voice and Throat Care</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/ent.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/ENT/Rhinology & Sinus-Care.webp" alt="ENT"
                            class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Nephrology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="nephrology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Nephrology</h3>
                        <p class="text-gray-700 mb-6">Advanced kidney care with dialysis and continuous renal
                            replacement therapy.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Hypertensive & Diabetic Kidney Disease</li>
                            <li>Hemodialysis, Peritoneal Dialysis</li>
                            <li>Acute Kidney Injury, CKD</li>
                            <li>CRRT (Continuous Renal Replacement Therapy)</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/nephrology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Nephrology.webp" alt="Nephrology"
                            class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Oncology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="oncology-cancer-care">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Oncology (Cancer Care)</h3>
                        <p class="text-gray-700 mb-6">Comprehensive cancer care through chemotherapy and specialized
                            surgical oncology.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Clinical Oncology (Chemotherapy)</li>
                            <li>Surgical Oncology - Head & Neck, Breast, Lungs, Abdominal etc.</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/oncology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/Oncology.webp" alt="Oncology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Gastroenterology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="gastroenterology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Gastroenterology</h3>
                        <p class="text-gray-700 mb-6">Advanced digestive and liver care through endoscopy and minimally
                            invasive treatments.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Endoscopy & Colonoscopy</li>
                            <li>ERCP, EUS, Hepatitis</li>
                            <li>Pancreatitis, Reflux, Peptic Ulcer</li>
                            <li>Abdominal Pain, Fatty Liver</li>
                            <li>Bile Duct Obstruction & GI Stenting</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/gastroenterology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Inflammatory-Bowel-Disease.webp"
                            alt="Gastroenterology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Emergency Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="emergency">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Emergency & Trauma Care</h3>
                        <p class="text-gray-700 mb-6">24x7 emergency and acute trauma services with life support and
                            evacuation facilities.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Advance Life Support Ambulance</li>
                            <li>Rooftop Helipad for Emergency Evacuation</li>
                            <li>24x7 Emergency Care Consultants</li>
                            <li>Emergency Trauma & Acute Care Services</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/emergency.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Critical Care & Emergency/Trauma.webp" alt="Emergency"
                            class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Pediatrics Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden"
                    id="pediatrics-and-neonatology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Pediatrics & Neonatology</h3>
                        <p class="text-gray-700 mb-6">Comprehensive healthcare for infants, children, and adolescents.
                        </p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Child and Newborn Care</li>
                            <li>Pediatric Medicine & Immunization</li>
                            <li>Growth and Development Monitoring</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/pediatrics.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/Pediatrics.webp" alt="Pediatrics" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Urology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="urology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Urology</h3>
                        <p class="text-gray-700 mb-6">Advanced urological care including prostate, kidney, and
                            infertility treatments.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Prostate Surgeries - TURP</li>
                            <li>Kidney Stone Surgeries</li>
                            <li>Female Urology Surgeries</li>
                            <li>Infertility Treatment</li>
                            <li>Lithotripsy</li>
                        </ul>
                        <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php"
                                class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book
                                Consultation</a>
                            <a href="specialties/urology.php"
                                class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn
                                More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/Urology.webp" alt="Urology" class="object-cover w-full h-full">
                    </div>
                </div>
            </div>
    </section>

    <!-- Why Choose Raj Hospitals -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="mb-12 fade-in">
                <h2 class="text-3xl font-bold text-orange-500 mb-2">Why Choose Raj Hospitals?</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/30+ Years-of-Excellence.webp"
                            alt="30+ Years of Excellence"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            30+ Years of Excellence</h3>
                        <p class="text-gray-600 leading-relaxed">Three decades of trusted healthcare service in Ranchi
                        </p>
                    </div>
                </div>
                <!-- Feature 2 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/State-of-the-art-Technology.webp"
                            alt="State-of-the-art Technology"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            State-of-the-art Technology</h3>
                        <p class="text-gray-600 leading-relaxed">Latest medical equipment and advanced treatment
                            facilities</p>
                    </div>
                </div>
                <!-- Feature 3 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/raj-all-doctors.webp"
                            alt="Experienced Medical Team"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Experienced Medical Team</h3>
                        <p class="text-gray-600 leading-relaxed">Highly qualified doctors and skilled healthcare
                            professionals</p>
                    </div>
                </div>
                <!-- Feature 4 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/24-7-Emergency-Services.webp"
                            alt="24/7 Emergency Services"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            24/7 Emergency Services</h3>
                        <p class="text-gray-600 leading-relaxed">Round-the-clock emergency care and critical support</p>
                    </div>
                </div>
                <!-- Feature 5 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/SICU-Facilities.webp"
                            alt="ICU/NICU/SICU Facilities"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            ICU/NICU/SICU Facilities</h3>
                        <p class="text-gray-600 leading-relaxed">Specialized intensive care units for critical patient
                            care</p>
                    </div>
                </div>
                <!-- Feature 6 -->
                <div
                    class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Picture1.webp" alt="Rooftop Helipad"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Rooftop Helipad</h3>
                        <p class="text-gray-600 leading-relaxed">Air ambulance facility for critical emergency cases</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Raj Hospitals Section -->
    <section class="py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left Side -->
                <div class="fade-in">
                    <h2 class="text-3xl font-bold text-orange-500 mb-4">About Raj Hospitals</h2>
                    <p class="text-gray-700 leading-relaxed mb-6">For over three decades, Raj Hospitals has been the
                        cornerstone of healthcare excellence in Ranchi, Jharkhand. What started as a vision to provide
                        world-class medical care has evolved into one of the region's most trusted super specialty
                        hospitals. Our commitment to patient care, combined with state-of-the-art technology and a team
                        of highly qualified medical professionals, has made us the preferred choice for thousands of
                        families across Jharkhand and neighboring states.</p>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 gap-3 mt-5">
                        <div class="text-center bg-orange-50 rounded-lg p-3 border border-orange-200">
                            <h3 class="text-2xl font-bold text-[#0191C7]">30+</h3>
                            <p class="text-gray-600 text-xs font-medium">Years Excellence</p>
                        </div>
                        <div class="text-center bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <h3 class="text-2xl font-bold text-orange-500">100+</h3>
                            <p class="text-gray-600 text-xs font-medium">Expert Doctors</p>
                        </div>
                        <div class="text-center bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <h3 class="text-2xl font-bold text-orange-500">3.5L+</h3>
                            <p class="text-gray-600 text-xs font-medium">Patients Treated</p>
                        </div>
                        <div class="text-center bg-orange-50 rounded-lg p-3 border border-orange-200">
                            <h3 class="text-2xl font-bold text-[#0191C7]">24/7</h3>
                            <p class="text-gray-600 text-xs font-medium">Emergency Care</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <a href="about.php"
                            class="inline-flex items-center gap-2 text-[#0191C7] hover:text-orange-500 font-semibold text-sm transition-colors">
                            Learn More About Us <i data-feather="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>

                <!-- Right Side - Image -->
                <div class="rounded-2xl overflow-hidden shadow-2xl fade-in">
                    <img src="assets/home-img/Raj-hospital-image.webp" alt="About Raj Hospitals"
                        class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Technology Section -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold text-orange-500">Our Technology</h2>
            </div>
            <p class="text-gray-700 mb-8">Investing in globally advanced medical technology for care you can trust.</p>

            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                    <!-- Tech 1 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                        <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/home-img/crrt-raj-home.webp" alt="CRRT"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">Advanced Kidney Care with Continuous
                                Renal Replacement Therapy (CRRT)</h3>
                            <p class="text-gray-600 leading-relaxed">24/7 continuous dialysis support for critically ill
                                patients with acute kidney injury</p>
                        </div>
                    </div>
                    <!-- Tech 2 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                        <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/About-img/Comprehensive-Neuro.webp" alt="Gastroenterology Suite"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">State-of-the-Art Gastroenterology
                                Suite at Raj Hospitals, Ranchi</h3>
                            <p class="text-gray-600 leading-relaxed">Advanced endoscopy and colonoscopy facilities for
                                precise digestive system diagnosis and treatment</p>
                        </div>
                    </div>
                    <!-- Tech 3 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                        <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/home-img/Complex-brain.webp" alt="Leica-Provido Operating Microscope"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">Advanced Leica-Provido Operating
                                Microscope at Raj Hospitals,</h3>
                            <p class="text-gray-600 leading-relaxed">High-precision surgical microscope for complex
                                brain, spine, and neurosurgical procedures</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Doctors Talk -->
    <section class="py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold text-orange-500">Doctors Talk</h2>
                <a href="https://www.youtube.com/playlist?list=PL_ZdqB1Ag8tLg15rHj8cNbQqnfUTWvn5E" target="_blank"
                    class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Our experts share health tips and awareness.</p>

            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                    <!-- Video 1 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="x6fgmqLUabI">
                            <img src="https://img.youtube.com/vi/x6fgmqLUabI/maxresdefault.jpg" alt="Black Fungus"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">What is Black Fungus? | All You Need
                                to Know About Black Fungus | Dr. Mohon Ahmed</div>
                        </div>
                    </div>
                    <!-- Video 2 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="taKkhV37BwE">
                            <img src="https://img.youtube.com/vi/taKkhV37BwE/maxresdefault.jpg" alt="Nephrotic Syndrome"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">Nephrotic Syndrome - Dr. Avinash
                                Kumar Dubey</div>
                        </div>
                    </div>
                    <!-- Video 3 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="cJxWXwRX-GM">
                            <img src="https://img.youtube.com/vi/cJxWXwRX-GM/maxresdefault.jpg" alt="Hepatitis Facts"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">World Hepatitis Day 2023: Important
                                Facts About Hepatitis</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Video Testimonials -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold text-orange-500">Video Testimonials</h2>
                <a href="https://youtube.com/playlist?list=PL_ZdqB1Ag8tI_BsrN7gNPrgE1_PDryEXQ&si=REeg2R8SWr258-Ob"
                    target="_blank"
                    class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Hear from our patients their experiences and healing journeys.</p>

            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                    <!-- Testimonial 1 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="Gi1WhJ1dR6g">
                            <img src="https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg" alt="Testimonial"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Emergency Brain Care That Saved Prem Kumar
                                Singh | Raj Hospitals</div>
                            <p class="text-gray-600 text-sm italic">"I felt cared for every step of the way."</p>
                        </div>
                    </div>
                    <!-- Testimonial 2 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="HARE579wkdY">
                            <img src="https://img.youtube.com/vi/HARE579wkdY/maxresdefault.jpg" alt="Testimonial"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Knee replacement surgery | Raj Hospitals
                            </div>
                            <p class="text-gray-600 text-sm italic">"The doctors and staff were exceptional."</p>
                        </div>
                    </div>
                    <!-- Testimonial 3 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="mHiO2RYdgds">
                            <img src="https://img.youtube.com/vi/mHiO2RYdgds/maxresdefault.jpg" alt="Testimonial"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Cancer treatment | Patient Testimonial</div>
                            <p class="text-gray-600 text-sm italic">"The doctors and staff were exceptional."</p>
                        </div>
                    </div>
                    <!-- Testimonial 4 -->
                    <div
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger"
                            data-video-id="vg59yGKWz_s">
                            <img src="https://img.youtube.com/vi/vg59yGKWz_s/maxresdefault.jpg" alt="Testimonial"
                                class="w-full h-48 object-cover">
                            <div
                                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div
                                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Neurosurgery Success Story at Raj Hospitals
                            </div>
                            <p class="text-gray-600 text-sm italic">"Under the expert care of Dr. Ahmad Hussain
                                (Neurosurgeon) and Dr. Neelam Kumari, our patient has made an incredible recovery."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Blogs -->
    <section class="py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold text-orange-500">Our Blogs</h2>
                <a href="blogs.php"
                    class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Insights, health tips, and hospital updates.</p>

            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                    <!-- Blog 1 -->
                    <a href="#"
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-1.webp" alt="Blog 1"
                            class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">10 Tips for Heart Health</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">Simple habits for a healthier heart.</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                    <!-- Blog 2 -->
                    <a href="#"
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-2.webp" alt="Blog 2"
                            class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">Back Pain: Myths & Facts</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">How to prevent and manage back pain
                                effectively.</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                    <!-- Blog 3 -->
                    <a href="#"
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-3.webp" alt="Blog 3"
                            class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">Understanding Robotic Surgery</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">What is it, and who is it for?</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                    <!-- Blog 4 -->
                    <a href="#"
                        class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-3.webp" alt="Blog 4"
                            class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">Understanding Robotic Surgery</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">What is it, and who is it for?</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- News & Media -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-2xl font-bold text-orange-500">News & Media</h2>
                <a href="news-media.php"
                    class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-4">Stay updated with our latest announcements and achievements.</p>

            <div class="flex gap-4 mb-6" id="news-tabs">
                <button class="px-4 py-2 rounded-lg font-semibold transition-all bg-orange-500 text-white shadow"
                    data-target="news-digital">Digital</button>
                <button
                    class="px-4 py-2 rounded-lg font-semibold transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"
                    data-target="news-print">Print</button>
            </div>

            <!-- Digital News -->
            <div id="news-digital" class="news-panel flex flex-col md:flex-row items-start gap-8">
                <div class="hidden md:block md:w-1/3">
                    <div class="w-full h-[450px] rounded-xl overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/breaking-news-raj.webp" alt="News"
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <a href="news-media.php"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल के आपातकालीन विभाग को एनएबीएच
                            की मान्यता मिली</h3>
                        <time class="text-xs text-gray-500">February 24, 2025</time>
                    </a>
                    <a href="https://lagatar.in/cardiac-life-support-training-camp-organized" target="_blank"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांची: राज अस्पताल में नेशनल कार्डियक लाइफ
                            सपोर्ट प्रशिक्षण शिविर का आयोजन</h3>
                        <time class="text-xs text-gray-500">August 29, 2024</time>
                    </a>
                    <a href="news-media.php"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांचीः बाई-पास सर्जरी के लिए अब नहीं जाना
                            होगा बाहर, राज अस्पताल में मिल रही सुविधाोजन किया</h3>
                        <time class="text-xs text-gray-500">1 January, 2024</time>
                    </a>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <a href="news-media.php"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल में पहली बार IVUS
                            (इंट्रावास्कुलर अल्ट्रासाउंड) तकनीक से एंजियोप्लास्टी की गई।</h3>
                        <time class="text-xs text-gray-500">22 July, 2023</time>
                    </a>
                    <a href="news-media.php"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल, रांची में मनाया गया 77वां
                            स्वतंत्रता दिवस, ध्वजारोहण कर दी तिरंगे को सलामी: आयोजन किया</h3>
                        <time class="text-xs text-gray-500">23 August, 2023</time>
                    </a>
                    <a href="news-media.php"
                        class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांची: 28 जुलाई को मनाया जायेगा विश्व
                            हेपेटाइटिस दिवस</h3>
                        <time class="text-xs text-gray-500">28 July, 2023</time>
                    </a>
                </div>
            </div>

            <!-- Print News (Hidden) -->
            <div id="news-print" class="news-panel flex flex-col md:flex-row items-start gap-8 hidden">
                <div class="hidden md:block md:w-1/3">
                    <div class="w-full h-[450px] rounded-xl overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/breaking-news-raj.webp" alt="News"
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/news-1-r.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/news-2-raj.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/news-3-raj.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/Raj-hsopital-news-1_290824.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/news-3-raj.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                            <img src="assets/press/Raj-hsopital-news-1_290824.webp"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include $base_url . 'components/footer.php'; ?>

    <!-- Video Modal -->
    <div id="video-modal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 hidden">
        <div class="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <button id="close-modal"
                class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white">
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
            <div class="relative pb-[56.25%]">
                <iframe id="video-iframe" class="absolute inset-0 w-full h-full" src="" title="YouTube video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Initialize Feather Icons
            feather.replace();

            // --- Scroll Animation Observer ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

            // --- Header Scroll Effect & Logic ---
            const header = document.getElementById('main-header');
            const navTopRow = document.getElementById('nav-top-row');
            const mainLogo = document.getElementById('main-logo');
            const logoContainer = document.getElementById('logo-container');
            const nabhLogos = document.getElementById('nabh-logos');

            let lastScrollY = 0;
            let showMiddleRow = true;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;

                // 1. Shadow Effect (IsScrolled)
                if (currentScrollY > 50) {
                    header.classList.add('shadow-lg');
                } else {
                    header.classList.remove('shadow-lg');
                }

                // 2. Scroll Direction & Hide/Show Logic
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling DOWN past 100px
                    if (showMiddleRow) {
                        showMiddleRow = false;

                        // Hide Top Row
                        navTopRow.classList.remove('h-auto', 'opacity-100');
                        navTopRow.classList.add('h-0', 'opacity-0');

                        // Shrink Main Logo
                        mainLogo.classList.remove('lg:w-[160px]', 'lg:h-[160px]');
                        mainLogo.classList.add('lg:w-[140px]', 'lg:h-[140px]');

                        // Adjust Spacing
                        logoContainer.classList.remove('lg:space-x-6');
                        logoContainer.classList.add('lg:space-x-6'); // Actually stays 6 in code, but checking logic

                        // It seems showing/hiding top row naturally adjusts height because of flex container
                    }
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling UP
                    if (!showMiddleRow) {
                        showMiddleRow = true;

                        // Show Top Row
                        navTopRow.classList.remove('h-0', 'opacity-0');
                        navTopRow.classList.add('h-auto', 'opacity-100');

                        // Expand Main Logo
                        mainLogo.classList.remove('lg:w-[140px]', 'lg:h-[140px]');
                        mainLogo.classList.add('lg:w-[160px]', 'lg:h-[160px]');
                    }
                }

                lastScrollY = currentScrollY;
            }, { passive: true });

            // --- Hero Carousel ---
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.hero-dot');
            let currentSlide = 0;
            const totalSlides = slides.length;

            function showSlide(index) {
                slides.forEach(s => {
                    s.classList.remove('opacity-100');
                    s.classList.add('opacity-0');
                });
                dots.forEach(d => {
                    d.classList.remove('scale-125', 'bg-white');
                    d.classList.add('bg-white/50');
                });

                slides[index].classList.remove('opacity-0');
                slides[index].classList.add('opacity-100');

                dots[index].classList.remove('bg-white/50');
                dots[index].classList.add('scale-125', 'bg-white');

                currentSlide = index;
            }

            function nextSlide() {
                showSlide((currentSlide + 1) % totalSlides);
            }

            function prevSlide() {
                showSlide((currentSlide - 1 + totalSlides) % totalSlides);
            }

            // Auto play
            let slideInterval = setInterval(nextSlide, 5000);

            // Controls
            document.getElementById('next-slide').addEventListener('click', () => {
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });

            document.getElementById('prev-slide').addEventListener('click', () => {
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    clearInterval(slideInterval);
                    const index = parseInt(e.target.dataset.index);
                    showSlide(index);
                    slideInterval = setInterval(nextSlide, 5000);
                });
            });

            // --- Specialty Tabs & Content ---
            const specialtyTabs = document.querySelectorAll('.specialty-tab');
            const specialtyPanels = document.querySelectorAll('.specialty-panel');

            specialtyTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = tab.dataset.target;

                    // Reset tabs style
                    specialtyTabs.forEach(t => {
                        t.classList.remove('bg-orange-500', 'text-white', 'shadow-lg', 'border-transparent');
                        t.classList.add('bg-white', 'text-gray-600', 'border-gray-300');
                    });

                    // Active tab style
                    tab.classList.remove('bg-white', 'text-gray-600', 'border-gray-300');
                    tab.classList.add('bg-orange-500', 'text-white', 'shadow-lg', 'border-transparent');

                    // Show Panel
                    specialtyPanels.forEach(p => p.classList.add('hidden'));
                    document.getElementById(target)?.classList.remove('hidden');
                });
            });

            // Horizontal Scroll Buttons for Specialties
            const scrollContainer = document.getElementById('specialty-tabs');
            document.getElementById('scroll-left').addEventListener('click', () => {
                scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
            });
            document.getElementById('scroll-right').addEventListener('click', () => {
                scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
            });


            // --- News Tabs ---
            const newsButtons = document.querySelectorAll('#news-tabs button');
            const newsPanels = document.querySelectorAll('.news-panel');

            newsButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.dataset.target;

                    // Reset buttons
                    newsButtons.forEach(b => {
                        b.classList.remove('bg-orange-500', 'text-white', 'shadow');
                        b.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                    });

                    // Active button
                    btn.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                    btn.classList.add('bg-orange-500', 'text-white', 'shadow');

                    // Show panel
                    newsPanels.forEach(p => p.classList.add('hidden'));
                    document.getElementById(target).classList.remove('hidden');
                    document.getElementById(target).classList.add('flex'); // Because flex is part of display
                });
            });

            // --- Video Modal ---
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('video-iframe');
            const closeModal = document.getElementById('close-modal');
            const videoTriggers = document.querySelectorAll('.video-trigger');

            videoTriggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const videoId = trigger.dataset.videoId;
                    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    modal.classList.remove('hidden');
                });
            });

            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
                iframe.src = '';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    iframe.src = '';
                }
            });

            // --- Homepage Search Functionality (matching React version) ---
            const searchInput = document.getElementById('homepage-search');
            const searchDropdown = document.getElementById('search-results-dropdown');
            const searchForm = searchInput ? searchInput.closest('form') : null;

            const doctors = [
                // Cardiology (3 doctors)
                { id: 'rajesh-jha', name: 'Dr. Rajesh Kr. Jha', qualifications: 'MBBS, MD, DM (Cardiology)', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.webp', profileUrl: 'doctors/rajesh-jha.php' },
                { id: 'awnindra-singh', name: 'Dr. Awnindra Kumar Singh', qualifications: 'MBBS, MD, DM', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/-Dr. Awnindra-Kumar-Singh-Cardiologist.webp', profileUrl: 'doctors/awnindra-singh.php' },
                { id: 'anup-kumar-jha', name: 'Dr. Anup Kumar Jha', qualifications: 'MBBS, Cardio-Physician (NI), IGNOU', specialty: 'Cardiology', experience: '30+ Years', image: 'assets/Doc-Side/Dr Anup Kumar Jha_.webp', profileUrl: 'doctors/anup-kumar-jha.php' },

                // Critical Care (3 doctors)
                { id: 'mohib-ahmed', name: 'Dr. Mohib Ahmed', qualifications: 'MBBS, MD, IDCCM', specialty: 'Critical Care', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Mohib-Ahmed.webp', profileUrl: 'doctors/mohib-ahmed.php' },
                { id: 'rahul-roy', name: 'Dr. Rahul Roy', qualifications: 'MBBS, DA, IDCCM', specialty: 'Critical Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr Rahul Roy(CCT).webp', profileUrl: 'doctors/rahul-roy.php' },
                { id: 'fuzail-sarwer', name: 'Dr. Fuzail Sarwer', qualifications: 'MBBS, MD, PDCC', specialty: 'Critical Care', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Fuzail-Sarwar.webp', profileUrl: 'doctors/fuzail-sarwer.php' },

                // Emergency (1 doctor)
                { id: 'shyam-prasad', name: 'Dr. Shyam Prasad', qualifications: 'MBBS, MD MEM', specialty: 'Emergency', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Emergency - Dr. Shyam-Prasad.webp', profileUrl: 'doctors/shyam-prasad.php' },

                // Gastroenterology (1 doctor)
                { id: 'ravish-ranjan', name: 'Dr. Ravish Ranjan', qualifications: 'MBBS, MD, DNB', specialty: 'Gastroenterology', experience: '12 Years', image: 'assets/Doc-Side/Gastroenterologist - Dr. Ravish Ranjan.webp', profileUrl: 'doctors/ravish-ranjan.php' },

                // Minimal Access Surgery (1 doctor)
                { id: 'ashish-modi', name: 'Dr. Ashish Kumar Modi', qualifications: 'MBBS, MS', specialty: 'Minimal Access Surgery', experience: '12+ Years', image: 'assets/Doc-Side/General Surgeon - Dr. Ashish Kumar Modi.webp', profileUrl: 'doctors/ashish-modi.php' },

                // Internal Medicine (4 doctors)
                { id: 'ak-agarwal', name: 'Dr. A K Agarwal', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Agrawal.webp', profileUrl: 'doctors/ak-agarwal.php' },
                { id: 'ak-sinha', name: 'Dr. A K Sinha', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Sinha.webp', profileUrl: 'doctors/ak-sinha.php' },
                { id: 'neelam-kumari', name: 'Dr. Neelam Kumari', qualifications: 'MBBS, MD, DNB', specialty: 'Internal Medicine', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/General Physician - Dr. Neelam-Kumari.webp', profileUrl: 'doctors/neelam-kumari.php' },
                { id: 'sony', name: 'Dr. Sony', qualifications: 'MBBS, DNB, PDCC', specialty: 'Internal Medicine', experience: '4+ Years', image: 'assets/Doc-Side/Dr Sony (Interventional Pain Medicine).webp', profileUrl: 'doctors/sony.php' },

                // Nephrology (1 doctor)
                { id: 'avinash-dubey', name: 'Dr. Avinash Kumar Dubey', qualifications: 'MD, DM', specialty: 'Nephrology', experience: '15+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Nephrologist - Dr. Avinas- Kumar-Dubey.webp', profileUrl: 'doctors/avinash-dubey.php' },

                // Neurosciences (4 doctors)
                { id: 'ahmad-hussain', name: 'Dr. Ahmad Hussain', qualifications: 'MBBS, MD, DrNB', specialty: 'Neurosciences', experience: '5+ Years', image: 'assets/Doc-Side/Dr Ahmad Hussain.webp', profileUrl: 'doctors/ahmad-hussain.php' },
                { id: 'vivek-raj', name: 'Dr. Vivek Raj', qualifications: 'MBBS, DNB', specialty: 'Neurosciences', experience: '9+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Neurosurgeon - Dr. Vivek-Raj.webp', profileUrl: 'doctors/vivek-raj.php' },
                { id: 'vijay-raj', name: 'Dr. Vijay Raj', qualifications: 'MBBS, MD, DM', specialty: 'Neurosciences', experience: '15+ Years', image: 'assets/Doc-Side/vijayraj.webp', profileUrl: 'doctors/vijay-raj.php' },
                { id: 'prakash-chandra', name: 'Dr. Prakash Chandra', qualifications: 'MBBS, MS, MCH', specialty: 'Neurosciences', experience: '18+ Years', image: 'assets/Doc-Side/Dr. Prakash Chandra (Neuro Surgeon).webp', profileUrl: 'doctors/prakash-chandra.php' },

                // Oncology (2 doctors)
                { id: 'pk-raina', name: 'Dr. P K Raina', qualifications: 'MBBS, MS', specialty: 'Oncology (Cancer Care)', experience: '20+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Oncologist - Dr. P-K-Raina.webp', profileUrl: 'doctors/pk-raina.php' },
                { id: 'anamika-kumari', name: 'Dr. Anamika Kumari', qualifications: 'MBBS, DNB', specialty: 'Oncology (Cancer Care)', experience: '11+ Years', image: 'assets/Doc-Side/Dr Anamika Onco photo.webp', profileUrl: 'doctors/anamika-kumari.php' },

                // Orthopaedics (3 doctors)
                { id: 'deepak-verma', name: 'Dr. Deepak Verma', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '25+ Years', image: 'assets/Doc-Side/Orthopedic Surgeon - Dr. Deepak Verma.webp', profileUrl: 'doctors/deepak-verma.php' },
                { id: 'ujjwal-sinha', name: 'Dr. Ujjwal Sinha', qualifications: 'MBBS, MS, DNB', specialty: 'Orthopaedics & Joint Replacement', experience: '15+ Years', image: 'assets/Doc-Side/ujjwal_sinha_ortho.webp', profileUrl: 'doctors/ujjwal-sinha.php' },
                { id: 'abhishek-roy', name: 'Dr. Abhishek Roy', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '6+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Abhishek-Roy.webp', profileUrl: 'doctors/abhishek-roy.php' },

                // Urology (2 doctors)
                { id: 'sunil-kumar', name: 'Dr. Sunil Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Sunil-Kumar.webp', profileUrl: 'doctors/sunil-kumar.php' },
                { id: 'ved-prakash', name: 'Dr. Ved Prakash Verma', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Ved-Prakash-Verma.webp', profileUrl: 'doctors/ved-prakash.php' },

                // Obstetrics & Gynaecology (3 doctors)
                { id: 'anupama-mahli', name: 'Dr. Anupama Mahli', qualifications: 'MBBS, MS, DNB', specialty: 'Obstetrics & Gynaecology', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Anupama-Mahli.webp', profileUrl: 'doctors/anupama-mahli.php' },
                { id: 'pushpa-sinha', name: 'Dr. Pushpa Sinha', qualifications: 'MBBS, MD, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/Gyanecologist - Dr. Pushpa Sinha.webp', profileUrl: 'doctors/pushpa-sinha.php' },
                { id: 'tanushree-chakroborty', name: 'Dr. Tanushree Chakroborty', qualifications: 'MBBS, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/tanushree_gyane.webp', profileUrl: 'doctors/tanushree-chakroborty.php' },

                // Pulmonology (1 doctor)
                { id: 'suprova-chakraborty', name: 'Dr. Suprova Chakraborty', qualifications: 'DNB Respiratory Medicine', specialty: 'Pulmonology', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Pulmonologist - Dr. Suprova-Chakraborty.webp', profileUrl: 'doctors/suprova-chakraborty.php' },

                // ENT (2 doctors)
                { id: 'tgn-sinha', name: 'Dr. T.G.N. Sinha', qualifications: 'MBBS, MS, FICS', specialty: 'ENT', experience: '45+ Years', image: 'assets/Doc-Side/Dr T G N Sinha ( ENT).webp', profileUrl: 'doctors/tgn-sinha.php' },
                { id: 'ranajan-jha', name: 'Dr. Ranajan Kumar Jha', qualifications: 'MBBS, MS, FESS', specialty: 'ENT', experience: '15+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/ranajan-jha.php' },

                // Dental (2 doctors)
                { id: 'suraj-mani-bhattacharjee', name: 'Dr. Suraj Mani Bhattacharjee', qualifications: 'BDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dental-Surgeon - Dr. Surajmani-bhattacharjee.webp', profileUrl: 'doctors/suraj-mani-bhattacharjee.php' },
                { id: 'abhishek-bhattacharjee', name: 'Dr. Abhishek Bhattacharjee', qualifications: 'MBBS, MDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.webp', profileUrl: 'doctors/abhishek-bhattacharjee.php' },

                // Dermatology (2 doctors)
                { id: 'piyali-banerjee', name: 'Dr. Piyali Banerjee', qualifications: 'MBBS, DVDL', specialty: 'Dermatology', experience: '12+ Years', image: 'assets/Doc-Side/Dr Piyali Banerjee(Derma).webp', profileUrl: 'doctors/piyali-banerjee.php' },
                { id: 'shaista-huma', name: 'Dr. Shaista Huma', qualifications: 'MBBS, MD, ACS', specialty: 'Dermatology', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/shaista-huma.php' },

                // Eye Care (1 doctor)
                { id: 'abid-akhtar', name: 'Dr. Abid Akhtar', qualifications: 'MBBS, MS', specialty: 'Eye Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr. Abid Akhtar (Opthal).webp', profileUrl: 'doctors/abid-akhtar.php' },

                // Radiology (1 doctor)
                { id: 'shekhar-sharma', name: 'Dr. Shekhar Sharma', qualifications: 'MBBS, DMRD', specialty: 'Radiology', experience: '20+ Years', image: 'assets/Doc-Side/Dr Shekhar Sharma (Radiologist).webp', profileUrl: 'doctors/shekhar-sharma.php' },

                // Laboratory (3 doctors)
                { id: 'shweta-sushmita', name: 'Dr. Shweta Sushmita', qualifications: 'MBBS, MD', specialty: 'Laboratory Investigations', experience: '10+ Years', image: 'assets/Doc-Side/Lab - Dr. Sweta Sushmita.webp', profileUrl: 'doctors/shweta-sushmita.php' },
                { id: 'praveen-kumar', name: 'Dr. Praveen Kumar', qualifications: 'MBBS, DCP', specialty: 'Laboratory Investigations', experience: '8+ Years', image: 'assets/Doc-Side/Dr Praveen Kumar (Lab).webp', profileUrl: 'doctors/praveen-kumar.php' },
                { id: 'kriti-kaira', name: 'Dr. Kriti Kaira', qualifications: 'MBBS, MD, PDF', specialty: 'Laboratory Investigations', experience: '3+ Years', image: 'assets/Doc-Side/Dr kirti_kaira_lab.webp', profileUrl: 'doctors/kriti-kaira.php' },

                // Psychiatry (1 doctor)
                { id: 'anil-kumar', name: 'Dr. Anil Kumar', qualifications: 'MBBS, MD', specialty: 'Psychiatry & Mental Health', experience: '40+ Years', image: 'assets/Doc-Side/Dr Anil Kumar (Psychiatry).webp', profileUrl: 'doctors/anil-kumar.php' },

                // Physiotherapy (1 doctor)
                { id: 'abhay-pandey', name: 'Dr. Abhay Kumar Pandey', qualifications: 'BPT, MPT, PGDYT', specialty: 'Physiotherapy & Rehabilitation', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.webp', profileUrl: 'doctors/abhay-pandey.php' },

                // Aesthetic & Reconstructive Surgery (1 doctor)
                { id: 'pankaj-kumar', name: 'Dr. Pankaj Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Aesthetic & Reconstructive Surgery', experience: '12+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/pankaj-kumar.php' },

                // Additional doctors from doctors/*.php
                { id: 'abhijit-kumar', name: 'Dr. Abhijit Kumar', qualifications: 'MBBS, MS (Otolaryngology), PDCC', specialty: 'ENT', experience: '16+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/abhijit-kumar.php' },
                { id: 'ajeet-singh', name: 'Dr. Ajeet Singh', qualifications: 'MBBS, Post Graduate Diploma', specialty: 'Administration & General Medicine', experience: '38 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/ajeet-singh.php' },
                { id: 'b-kumar', name: 'Dr. B Kumar', qualifications: 'MBBS, MS (General Surgery)', specialty: 'Minimal Access Surgery', experience: '12 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/b-kumar.php' },
                { id: 'jitendra-prasad', name: 'Dr. Jitendra Prasad', qualifications: 'MBBS, MD (Microbiology)', specialty: 'FNAC, Biopsy, Blood & Laboratory Investigations', experience: '9+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/jitendra-prasad.php' },
                { id: 'mozammil-pheroz', name: 'Dr. Mozammil Pheroz', qualifications: 'MBBS, MS, DNB (Ortho), Dip. Sports Medicine', specialty: 'Orthopaedics & Joint Replacement', experience: '11+ Years', image: 'assets/Doc-Side/dr-pheroz-raj-removebg-preview.png', profileUrl: 'doctors/mozammil-pheroz.php' },
                { id: 'parijat-sarkar', name: 'Mr. Parijat Sarkar', qualifications: 'M.Sc (Sports Nutrition), B.Sc (Dietetics)', specialty: 'Dietetics & Nutrition', experience: '6+ Years', image: 'assets/Doc-Side/Mr. Parijat Sarkar (Dietetian).webp', profileUrl: 'doctors/parijat-sarkar.php' },
                { id: 'pradeep-prasad', name: 'Dr. Pradeep Prasad', qualifications: 'MBBS, MD (Biochemistry)', specialty: 'FNAC, Biopsy, Blood & Laboratory Investigations', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/pradeep-prasad.php' },
                { id: 'ravi-shekhar-singh', name: 'Dr. Ravi Shekhar Singh', qualifications: 'MBBS, DCH', specialty: 'Pediatrics & Neonatology', experience: '10+ Years', image: 'assets/specialties/PAEDIATRICS/dr-ravi-shekhar-singh.webp', profileUrl: 'doctors/ravi-shekhar-singh.php' },
                { id: 'sanjeev-kumar-ravi', name: 'Dr. Sanjeev Kumar Ravi', qualifications: 'MBBS, Diploma in Family Medicine', specialty: 'Family Medicine & Ultrasonography', experience: '20 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/sanjeev-kumar-ravi.php' },
                { id: 'shubham-shekhar', name: 'Dr. Shubham Shekhar', qualifications: 'ACLS, BLS', specialty: 'Emergency', experience: '2 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', profileUrl: 'doctors/shubham-shekhar.php' }
            ];

            // Specialties Data (for search) - with keywords like React version
            const specialties = [
                { name: 'Cardiology', url: 'specialties/cardiology.php', icon: 'heart', description: 'Heart & Cardiovascular Care', keywords: ['heart', 'cardiac', 'angiography', 'angioplasty', 'pacemaker', 'heart attack'] },
                { name: 'Neurosciences', url: 'specialties/neurosciences.php', icon: 'aperture', description: 'Brain & Nervous System Care', keywords: ['brain', 'neuro', 'stroke', 'spine', 'head injury', 'neurosurgery'] },
                { name: 'Obstetrics & Gynaecology', url: 'specialties/obstetrics-and-gynaecology.php', icon: 'user', description: "Women's Health", keywords: ['women', 'pregnancy', 'obstetrics', 'maternity', 'gynecology'] },
                { name: 'Orthopaedics & Joint Replacement', url: 'specialties/orthopaedics-and-joint-replacement.php', icon: 'users', description: 'Bone & Joint Care', keywords: ['bone', 'ortho', 'joint', 'knee', 'hip', 'arthroscopy'] },
                { name: 'Minimal Access Surgery', url: 'specialties/minimal-access-surgery.php', icon: 'scissors', description: 'Laparoscopic Surgery', keywords: ['laparoscopic', 'laser', 'hernia', 'operation', 'surgery'] },
                { name: 'ENT', url: 'specialties/ent.php', icon: 'mic', description: 'Ear, Nose & Throat', keywords: ['ear', 'nose', 'throat', 'sinus', 'hearing'] },
                { name: 'Nephrology', url: 'specialties/nephrology.php', icon: 'droplet', description: 'Kidney Care', keywords: ['kidney', 'dialysis', 'renal', 'hemodialysis'] },
                { name: 'Oncology (Cancer Care)', url: 'specialties/oncology-cancer-care.php', icon: 'shield', description: 'Cancer Treatment', keywords: ['cancer', 'chemotherapy', 'tumor', 'radiation', 'oncology'] },
                { name: 'Gastroenterology', url: 'specialties/gastroenterology.php', icon: 'trending-up', description: 'Digestive Health', keywords: ['stomach', 'gastro', 'endoscopy', 'liver', 'digestive', 'colonoscopy'] },
                { name: 'Emergency', url: 'specialties/emergency.php', icon: 'alert-circle', description: '24/7 Emergency Care', keywords: ['trauma', 'ambulance', '24x7', 'accident', 'acute care'] },
                { name: 'Pediatrics & Neonatology', url: 'specialties/pediatrics-and-neonatology.php', icon: 'smile', description: 'Child Healthcare', keywords: ['child', 'kids', 'newborn', 'neonatology', 'baby', 'immunization'] },
                { name: 'Urology', url: 'specialties/urology.php', icon: 'zap', description: 'Urinary & Male Reproductive Health', keywords: ['prostate', 'kidney stone', 'urinary', 'bladder', 'infertility'] },
                { name: 'Critical Care', url: 'specialties/critical-care.php', icon: 'activity', description: 'Intensive Care Unit', keywords: ['icu', 'intensive care', 'critical'] },
                { name: 'Pulmonology', url: 'specialties/pulmonology.php', icon: 'wind', description: 'Lung & Respiratory Care', keywords: ['lung', 'respiratory', 'asthma', 'copd', 'breathing'] },
                { name: 'Dermatology', url: 'specialties/dermatology.php', icon: 'sun', description: 'Skin Care', keywords: ['skin', 'derma', 'cosmetic', 'laser therapy', 'skin cancer'] },
                { name: 'Dental', url: 'specialties/dental.php', icon: 'smile', description: 'Dental Care', keywords: ['teeth', 'dentist', 'root canal', 'implants', 'orthodontics'] },
                { name: 'Eye Care', url: 'specialties/eye-care.php', icon: 'eye', description: 'Ophthalmology', keywords: ['eye', 'vision', 'cataract', 'lasik', 'glaucoma', 'ophthalmology'] },
                { name: 'Physiotherapy & Rehabilitation', url: 'specialties/physiotherapy-and-rehabilitation.php', icon: 'activity', description: 'Physical Therapy', keywords: ['rehab', 'physical therapy', 'exercise', 'rehabilitation'] },
                { name: 'Psychiatry & Mental Health', url: 'specialties/psychiatry-and-mental-health.php', icon: 'heart', description: 'Mental Health Care', keywords: ['mental health', 'counseling', 'depression', 'anxiety', 'therapy'] },
                { name: 'Radiology', url: 'specialties/radiology.php', icon: 'radio', description: 'Imaging & Diagnostics', keywords: ['xray', 'ct scan', 'mri', 'ultrasound', 'imaging'] },
                { name: 'Internal Medicine', url: 'specialties/internal-medicine.php', icon: 'thermometer', description: 'General Medicine', keywords: ['general medicine', 'physician', 'internal'] },
                { name: 'Laboratory Investigations', url: 'specialties/laboratory-investigations.php', icon: 'file-text', description: 'Lab & Diagnostics', keywords: ['blood test', 'biopsy', 'fnac', 'pathology', 'lab'] },
                { name: 'Aesthetic & Reconstructive Surgery', url: 'specialties/aesthetic-and-reconstructive-surgery.php', icon: 'star', description: 'Cosmetic Surgery', keywords: ['cosmetic', 'reconstructive', 'plastic'] },
                { name: 'Nutrition & Dietetics', url: 'specialties/nutrition-and-dietetics.php', icon: 'coffee', description: 'Nutritional Counseling', keywords: ['diet', 'dietetics', 'nutritionist', 'dietician'] }
            ];

            if (searchInput && searchDropdown) {
                // Function to filter and show results
                function showSearchResults(query) {
                    if (query.length < 1) {
                        searchDropdown.classList.add('hidden');
                        return;
                    }

                    // 1. Search specialties with keyword support
                    const matchedSpecialties = specialties.filter(s =>
                        s.name.toLowerCase().includes(query) ||
                        s.keywords.some(keyword => keyword.toLowerCase().includes(query))
                    ).map(s => ({ ...s, type: 'specialty' }));

                    // Get list of matching specialty names to help find doctors
                    const matchingSpecialtyNames = matchedSpecialties.map(s => s.name);

                    // 2. Search doctors by name, direct specialty match, or if their specialty was found via keywords
                    const matchedDoctors = doctors.filter(d =>
                        d.name.toLowerCase().includes(query) ||
                        d.specialty.toLowerCase().includes(query) ||
                        matchingSpecialtyNames.includes(d.specialty) // Include doctors whose specialty matched via keywords
                    ).map(d => ({ ...d, type: 'doctor' }));

                    // Combine and limit (prioritize specialties then doctors)
                    const allResults = [...matchedSpecialties, ...matchedDoctors].slice(0, 8);

                    // Build results HTML (matching React version style)
                    let html = '';

                    if (allResults.length > 0) {
                        allResults.forEach(item => {
                            if (item.type === 'specialty') {
                                html += `
                                     <button type="button" onclick="window.location.href='${item.url}'" class="w-full px-6 py-3 hover:bg-gray-50 flex items-center justify-between transition-colors text-left border-b border-gray-100 last:border-b-0">
                                         <div class="flex items-center gap-3">
                                             <div class="p-2 rounded-full search-specialty-icon">
                                                 <i data-feather="activity" class="w-4 h-4"></i>
                                             </div>
                                             <div>
                                                 <p class="font-medium text-gray-900">${item.name}</p>
                                             </div>
                                         </div>
                                         <span class="text-xs px-2 py-1 rounded-full search-specialty-badge">
                                             Specialty
                                         </span>
                                     </button>
                                 `;
                            } else {
                                html += `
                                     <button type="button" onclick="window.location.href='${item.profileUrl}'" class="w-full px-6 py-3 hover:bg-gray-50 flex items-center justify-between transition-colors text-left border-b border-gray-100 last:border-b-0">
                                         <div class="flex items-center gap-3">
                                             <div class="p-2 rounded-full search-doctor-icon">
                                                 <i data-feather="user" class="w-4 h-4"></i>
                                             </div>
                                             <div>
                                                 <p class="font-medium text-gray-900">${item.name}</p>
                                                 <p class="text-sm text-gray-500">${item.specialty}</p>
                                             </div>
                                         </div>
                                         <span class="text-xs px-2 py-1 rounded-full search-doctor-badge">
                                             Doctor
                                         </span>
                                     </button>
                                 `;
                            }
                        });
                    } else {
                        html = `<div class="p-6 text-center text-gray-500">
                             <i data-feather="search" class="w-8 h-8 mx-auto mb-2 text-gray-300"></i>
                             <p>No results found for "${query}"</p>
                         </div>`;
                    }

                    searchDropdown.innerHTML = html;
                    searchDropdown.classList.remove('hidden');
                    feather.replace();
                }

                // Input event handler
                searchInput.addEventListener('input', (e) => {
                    const query = e.target.value.trim().toLowerCase();
                    showSearchResults(query);
                });

                // Focus event - show suggestions if there's a query
                searchInput.addEventListener('focus', () => {
                    const query = searchInput.value.trim().toLowerCase();
                    if (query.length > 0) {
                        showSearchResults(query);
                    }
                });

                // Blur event - hide suggestions with delay
                searchInput.addEventListener('blur', () => {
                    setTimeout(() => {
                        searchDropdown.classList.add('hidden');
                    }, 200);
                });

                // Form submit - redirect to doctors page with search query
                if (searchForm) {
                    searchForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        const query = searchInput.value.trim();
                        if (query) {
                            window.location.href = `doctors.php?search=${encodeURIComponent(query)}`;
                        }
                    });
                }

                // Close dropdown on Escape key
                searchInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        searchDropdown.classList.add('hidden');
                        searchInput.blur();
                    }
                });
            }
        });
    </script>
</body>

</html>