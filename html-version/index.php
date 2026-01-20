<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raj Hospitals - Best Multi Specialty Hospital in Ranchi Jharkhand</title>
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
    </style>
</head>
<body class="bg-white">

    <?php include $base_url . 'components/navbar.php'; ?>
    
    <!-- Hero Section -->
    <section id="hero-section" class="relative w-full h-[60vh] min-h-[300px] overflow-hidden mt-[120px] bg-gray-100">
        <!-- Slides -->
        <div id="hero-slides" class="absolute inset-0">
            <!-- Slide 1 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100" data-index="0">
                <picture class="w-full h-full block">
                    <source media="(max-width: 767px)" srcset="assets/Home-Banners/jharkhand-mob-banner.webp">
                    <img src="assets/Home-Banners/jharkhand-banner.webp" alt="Slide 1" class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            <!-- Slide 2 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-index="1">
                <picture class="w-full h-full block">
                   <source media="(max-width: 767px)" srcset="assets/Home-Banners/raj-quality-healthcare-mob.webp">
                   <img src="assets/Home-Banners/quality-health-care.webp" alt="Slide 2" class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            <!-- Slide 3 -->
            <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-index="2">
                <picture class="w-full h-full block">
                   <source media="(max-width: 767px)" srcset="assets/Home-Banners/raj-specialty-mob-banner.webp">
                   <img src="assets/Home-Banners/specialty-banner.webp" alt="Slide 3" class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
             <!-- Slide 4 -->
             <div class="hero-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" data-index="3">
                <picture class="w-full h-full block">
                   <source media="(max-width: 767px)" srcset="assets/Home-Banners/mob-banner-choose.webp">
                   <img src="assets/Home-Banners/web-banner-choose.webp" alt="Slide 4" class="w-full h-full object-cover">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
        </div>

        <!-- Navigation Arrows -->
        <button id="prev-slide" class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group cursor-pointer">
            <i data-feather="chevron-left" class="w-5 h-5 sm:w-6 sm:h-6 text-white"></i>
        </button>
        <button id="next-slide" class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group cursor-pointer">
            <i data-feather="chevron-right" class="w-5 h-5 sm:w-6 sm:h-6 text-white"></i>
        </button>

        <!-- Dots -->
        <div class="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <div class="flex space-x-2 sm:space-x-3" id="hero-dots">
                <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-lg scale-125 transition-all duration-300" data-index="0"></button>
                <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300" data-index="1"></button>
                <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300" data-index="2"></button>
                <button class="hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300" data-index="3"></button>
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
                    <form class="relative">
                        <input type="text" placeholder="Search for Doctors and Specialties" class="w-full px-6 py-3.5 pr-12 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-500 shadow-sm">
                        <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-full transition-colors">
                            <i data-feather="search" class="w-5 h-5"></i>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center gap-3">
                <a href="contact.php" class="bg-orange-500 text-white hover:bg-orange-600 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="calendar" class="w-5 h-5"></i>
                    <span>Book Appointment</span>
                </a>
                <a href="contact.php" class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="users" class="w-5 h-5"></i>
                    <span>Second Opinion</span>
                </a>
                <a href="contact.php" class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
                    <i data-feather="activity" class="w-5 h-5"></i>
                    <span>Corporate/TPA Query</span>
                </a>
                <a href="contact.php" class="bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 px-5 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md">
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
                <p class="text-gray-600 mt-2 max-w-2xl mx-auto">Comprehensive healthcare services across our key departments with expert doctors and modern technologies.</p>
            </div>

            <!-- Tabs Navigation -->
            <div class="relative mb-6">
                <button id="scroll-left" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-orange-100 transition"><i data-feather="chevron-left" class="w-5 h-5 text-gray-700"></i></button>
                <button id="scroll-right" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hover:bg-orange-100 transition"><i data-feather="chevron-right" class="w-5 h-5 text-gray-700"></i></button>
                
                <div id="specialty-tabs" class="overflow-x-auto scrollbar-hide flex space-x-4 px-12 pb-4" style="scroll-behavior: smooth;">
                    <!-- Cardiology -->
                     <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-orange-500 text-white shadow-lg border-transparent" data-target="cardiology">
                        <i data-feather="heart" class="w-5 h-5"></i>
                        <span>Cardiology</span>
                    </button>
                    <!-- Neurology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="neurology">
                        <i data-feather="aperture" class="w-5 h-5"></i>
                        <span>Neurology</span>
                    </button>
                    <!-- Obstetrics & Gynecology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="obstetrics-and-gynaecology">
                        <i data-feather="user" class="w-5 h-5"></i>
                        <span>Gynecology</span>
                    </button>
                    <!-- Orthopaedics -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="orthopaedics-and-joint-replacement">
                        <i data-feather="users" class="w-5 h-5"></i>
                        <span>Orthopaedics</span>
                    </button>
                    <!-- Minimal Access Surgery -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="minimal-access-surgery">
                        <i data-feather="scissors" class="w-5 h-5"></i>
                        <span>Surgery</span>
                    </button>
                    <!-- ENT -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="ent">
                        <i data-feather="mic" class="w-5 h-5"></i>
                        <span>ENT</span>
                    </button>
                     <!-- Nephrology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="nephrology">
                        <i data-feather="droplet" class="w-5 h-5"></i>
                        <span>Nephrology</span>
                    </button>
                    <!-- Oncology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="oncology-cancer-care">
                        <i data-feather="shield" class="w-5 h-5"></i>
                        <span>Oncology</span>
                    </button>
                     <!-- Gastroenterology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="gastroenterology">
                        <i data-feather="trending-up" class="w-5 h-5"></i>
                        <span>Gastrology</span>
                    </button>
                     <!-- Emergency -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="emergency">
                        <i data-feather="alert-circle" class="w-5 h-5"></i>
                        <span>Emergency</span>
                    </button>
                     <!-- Pediatrics -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="pediatrics-and-neonatology">
                        <i data-feather="smile" class="w-5 h-5"></i>
                        <span>Pediatrics</span>
                    </button>
                    <!-- Urology -->
                    <button class="specialty-tab flex items-center space-x-2 whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm border transition bg-white text-gray-600 border-gray-300 hover:border-orange-500 hover:text-orange-500" data-target="urology">
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
                        <p class="text-gray-700 mb-6">Specialized cardiac care including advanced diagnostics, interventional procedures, and heart failure management.</p>
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
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/cardiology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
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
                        <p class="text-gray-700 mb-6">Comprehensive brain and spine care for injuries, strokes, and neurological disorders.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Head Injuries</li>
                            <li>Brain Stroke Unit & Seizures</li>
                            <li>Endoscopic Spine Surgery</li>
                            <li>Stereotactic Tumor Surgery</li>
                            <li>Trauma, Tumor & TB Surgeries</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/neurology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/neurology.webp" alt="Neurology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Obstetrics & Gynecology Content -->
                 <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="obstetrics-and-gynaecology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Obstetrics & Gynecology</h3>
                        <p class="text-gray-700 mb-6">Specialized care for women's health, pregnancy, and gynecological conditions.</p>
                        <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                             <li>Comprehensive Obstetrics & Gynecology Services</li>
                             <li>High-Risk Pregnancy Management</li>
                             <li>Gynecological Surgeries</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/obstetrics-and-gynaecology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Obstetrics & Gynecology.webp" alt="Obstetrics & Gynecology" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Orthopaedics & Joint Replacement Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="orthopaedics-and-joint-replacement">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Orthopaedics & Joint Replacement</h3>
                         <p class="text-gray-700 mb-6">Comprehensive bone and joint care including replacements and sports injury management.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Joint Replacements - Knee, Hip, Shoulder, Elbow & Ankle</li>
                            <li>Arthroscopy, Sports Injury</li>
                            <li>Bone Deformity Surgeries</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/orthopaedics.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Orthopaedics & Joint Replacement.webp" alt="Orthopaedics" class="object-cover w-full h-full">
                    </div>
                </div>

                <!-- Minimal Access Surgery Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="minimal-access-surgery">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Minimal Access Surgery</h3>
                         <p class="text-gray-700 mb-6">Laparoscopic and laser surgeries for faster recovery and minimal invasiveness.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Laparoscopic & Laser Surgery - Gall Bladder</li>
                            <li>Hernia, Appendix, General Surgery</li>
                            <li>Thoracoscopic (Lung) Surgeries</li>
                            <li>Bariatric (Weight loss) & GI Surgeries</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/minimal-access-surgery.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Minimal Access Surgery/Laparoscopy-Surgery.webp" alt="Minimal Access Surgery" class="object-cover w-full h-full">
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
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/ent.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/ENT/Rhinology & Sinus-Care.webp" alt="ENT" class="object-cover w-full h-full">
                    </div>
                </div>

                 <!-- Nephrology Content -->
                <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="nephrology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Nephrology</h3>
                         <p class="text-gray-700 mb-6">Advanced kidney care with dialysis and continuous renal replacement therapy.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Hypertensive & Diabetic Kidney Disease</li>
                            <li>Hemodialysis, Peritoneal Dialysis</li>
                            <li>Acute Kidney Injury, CKD</li>
                            <li>CRRT (Continuous Renal Replacement Therapy)</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/nephrology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/home-img/raj-home-specialty/Nephrology.webp" alt="Nephrology" class="object-cover w-full h-full">
                    </div>
                </div>

                 <!-- Oncology Content -->
                 <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="oncology-cancer-care">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Oncology (Cancer Care)</h3>
                         <p class="text-gray-700 mb-6">Comprehensive cancer care through chemotherapy and specialized surgical oncology.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Clinical Oncology (Chemotherapy)</li>
                            <li>Surgical Oncology - Head & Neck, Breast, Lungs, Abdominal etc.</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/oncology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
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
                         <p class="text-gray-700 mb-6">Advanced digestive and liver care through endoscopy and minimally invasive treatments.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Endoscopy & Colonoscopy</li>
                            <li>ERCP, EUS, Hepatitis</li>
                            <li>Pancreatitis, Reflux, Peptic Ulcer</li>
                            <li>Abdominal Pain, Fatty Liver</li>
                            <li>Bile Duct Obstruction & GI Stenting</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/gastroenterology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Gastroenterology & Endoscopy/Treatments we offer/Inflammatory-Bowel-Disease.webp" alt="Gastroenterology" class="object-cover w-full h-full">
                    </div>
                </div>

                 <!-- Emergency Content -->
                 <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="emergency">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Emergency & Trauma Care</h3>
                         <p class="text-gray-700 mb-6">24x7 emergency and acute trauma services with life support and evacuation facilities.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Advance Life Support Ambulance</li>
                            <li>Rooftop Helipad for Emergency Evacuation</li>
                            <li>24x7 Emergency Care Consultants</li>
                            <li>Emergency Trauma & Acute Care Services</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/emergency.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
                        </div>
                    </div>
                    <div class="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-64 lg:h-auto">
                        <img src="assets/specialties/Critical Care & Emergency/Trauma.webp" alt="Emergency" class="object-cover w-full h-full">
                    </div>
                </div>

                 <!-- Pediatrics Content -->
                 <div class="specialty-panel grid grid-cols-1 lg:grid-cols-5 gap-8 hidden" id="pediatrics-and-neonatology">
                    <div class="lg:col-span-3 flex flex-col">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Pediatrics & Neonatology</h3>
                         <p class="text-gray-700 mb-6">Comprehensive healthcare for infants, children, and adolescents.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Child and Newborn Care</li>
                            <li>Pediatric Medicine & Immunization</li>
                            <li>Growth and Development Monitoring</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/pediatrics.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
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
                         <p class="text-gray-700 mb-6">Advanced urological care including prostate, kidney, and infertility treatments.</p>
                         <h4 class="text-lg font-semibold mb-3">Key Services & Treatments</h4>
                        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside mb-6">
                            <li>Prostate Surgeries - TURP</li>
                            <li>Kidney Stone Surgeries</li>
                            <li>Female Urology Surgeries</li>
                            <li>Infertility Treatment</li>
                            <li>Lithotripsy</li>
                        </ul>
                         <div class="mt-auto pt-6 space-x-4">
                            <a href="contact.php" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Book Consultation</a>
                            <a href="specialties/urology.php" class="bg-[#0191C7] hover:bg-[#007ba8] text-white px-6 py-2 rounded-lg font-semibold shadow transition inline-block">Learn More</a>
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
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/30+ Years-of-Excellence.webp" alt="30+ Years of Excellence" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">30+ Years of Excellence</h3>
                        <p class="text-gray-600 leading-relaxed">Three decades of trusted healthcare service in Ranchi</p>
                    </div>
                </div>
                <!-- Feature 2 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/State-of-the-art-Technology.webp" alt="State-of-the-art Technology" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">State-of-the-art Technology</h3>
                        <p class="text-gray-600 leading-relaxed">Latest medical equipment and advanced treatment facilities</p>
                    </div>
                </div>
                <!-- Feature 3 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/raj-all-doctors.webp" alt="Experienced Medical Team" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">Experienced Medical Team</h3>
                        <p class="text-gray-600 leading-relaxed">Highly qualified doctors and skilled healthcare professionals</p>
                    </div>
                </div>
                <!-- Feature 4 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/24-7-Emergency-Services.webp" alt="24/7 Emergency Services" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">24/7 Emergency Services</h3>
                        <p class="text-gray-600 leading-relaxed">Round-the-clock emergency care and critical support</p>
                    </div>
                </div>
                 <!-- Feature 5 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/SICU-Facilities.webp" alt="ICU/NICU/SICU Facilities" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">ICU/NICU/SICU Facilities</h3>
                        <p class="text-gray-600 leading-relaxed">Specialized intensive care units for critical patient care</p>
                    </div>
                </div>
                 <!-- Feature 6 -->
                <div class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/40 fade-in">
                    <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                        <img src="assets/home-img/Picture1.webp" alt="Rooftop Helipad" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                         <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-gray-900 text-xl mb-3 group-hover:text-orange-500 transition-colors">Rooftop Helipad</h3>
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
                    <p class="text-gray-700 leading-relaxed mb-6">For over three decades, Raj Hospitals has been the cornerstone of healthcare excellence in Ranchi, Jharkhand. What started as a vision to provide world-class medical care has evolved into one of the region's most trusted super specialty hospitals. Our commitment to patient care, combined with state-of-the-art technology and a team of highly qualified medical professionals, has made us the preferred choice for thousands of families across Jharkhand and neighboring states.</p>
                    
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
                        <a href="about.php" class="inline-flex items-center gap-2 text-[#0191C7] hover:text-orange-500 font-semibold text-sm transition-colors">
                            Learn More About Us <i data-feather="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Right Side - Image -->
                <div class="rounded-2xl overflow-hidden shadow-2xl fade-in">
                    <img src="assets/home-img/Raj-hospital-image.webp" alt="About Raj Hospitals" class="w-full h-full object-cover">
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
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                        <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/home-img/crrt-raj-home.webp" alt="CRRT" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">Advanced Kidney Care with Continuous Renal Replacement Therapy (CRRT)</h3>
                            <p class="text-gray-600 leading-relaxed">24/7 continuous dialysis support for critically ill patients with acute kidney injury</p>
                        </div>
                    </div>
                     <!-- Tech 2 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                         <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/About-img/Comprehensive-Neuro.webp" alt="Gastroenterology Suite" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">State-of-the-Art Gastroenterology Suite at Raj Hospitals, Ranchi</h3>
                            <p class="text-gray-600 leading-relaxed">Advanced endoscopy and colonoscopy facilities for precise digestive system diagnosis and treatment</p>
                        </div>
                    </div>
                     <!-- Tech 3 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 fade-in">
                         <div class="relative w-full h-48 bg-gray-50 overflow-hidden">
                            <img src="assets/home-img/Complex-brain.webp" alt="Leica-Provido Operating Microscope" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                        <div class="p-6">
                            <h3 class="font-semibold text-[#0191C7] text-xl mb-2">Advanced Leica-Provido Operating Microscope at Raj Hospitals,</h3>
                            <p class="text-gray-600 leading-relaxed">High-precision surgical microscope for complex brain, spine, and neurosurgical procedures</p>
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
                <a href="https://www.youtube.com/playlist?list=PL_ZdqB1Ag8tLg15rHj8cNbQqnfUTWvn5E" target="_blank" class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Our experts share health tips and awareness.</p>
            
            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-3 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                     <!-- Video 1 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="x6fgmqLUabI">
                            <img src="https://img.youtube.com/vi/x6fgmqLUabI/maxresdefault.jpg" alt="Black Fungus" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">What is Black Fungus? | All You Need to Know About Black Fungus | Dr. Mohon Ahmed</div>
                        </div>
                    </div>
                     <!-- Video 2 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="taKkhV37BwE">
                            <img src="https://img.youtube.com/vi/taKkhV37BwE/maxresdefault.jpg" alt="Nephrotic Syndrome" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">Nephrotic Syndrome - Dr. Avinash Kumar Dubey</div>
                        </div>
                    </div>
                     <!-- Video 3 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="cJxWXwRX-GM">
                            <img src="https://img.youtube.com/vi/cJxWXwRX-GM/maxresdefault.jpg" alt="Hepatitis Facts" class="w-full h-48 object-cover">
                            <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] leading-tight">World Hepatitis Day 2023: Important Facts About Hepatitis</div>
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
                <a href="https://youtube.com/playlist?list=PL_ZdqB1Ag8tI_BsrN7gNPrgE1_PDryEXQ&si=REeg2R8SWr258-Ob" target="_blank" class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Hear from our patients their experiences and healing journeys.</p>
            
            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                     <!-- Testimonial 1 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="Gi1WhJ1dR6g">
                            <img src="https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg" alt="Testimonial" class="w-full h-48 object-cover">
                             <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals</div>
                            <p class="text-gray-600 text-sm italic">"I felt cared for every step of the way."</p>
                        </div>
                    </div>
                     <!-- Testimonial 2 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="HARE579wkdY">
                            <img src="https://img.youtube.com/vi/HARE579wkdY/maxresdefault.jpg" alt="Testimonial" class="w-full h-48 object-cover">
                             <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                         <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Knee replacement surgery | Raj Hospitals</div>
                            <p class="text-gray-600 text-sm italic">"The doctors and staff were exceptional."</p>
                        </div>
                    </div>
                     <!-- Testimonial 3 -->
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="mHiO2RYdgds">
                            <img src="https://img.youtube.com/vi/mHiO2RYdgds/maxresdefault.jpg" alt="Testimonial" class="w-full h-48 object-cover">
                             <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    <div class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl shadow-md flex flex-col overflow-hidden">
                        <button class="relative group w-full text-left cursor-pointer video-trigger" data-video-id="vg59yGKWz_s">
                           <img src="https://img.youtube.com/vi/vg59yGKWz_s/maxresdefault.jpg" alt="Testimonial" class="w-full h-48 object-cover">
                             <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                     <i data-feather="play" class="w-8 h-8 text-orange-500 ml-1"></i>
                                </div>
                            </div>
                        </button>
                         <div class="p-4 flex-1 flex flex-col">
                            <div class="font-semibold text-[#0191C7] mb-1">Neurosurgery Success Story at Raj Hospitals</div>
                            <p class="text-gray-600 text-sm italic">"Under the expert care of Dr. Ahmad Hussain (Neurosurgeon) and Dr. Neelam Kumari, our patient has made an incredible recovery."</p>
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
                <a href="blogs.php" class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-8">Insights, health tips, and hospital updates.</p>
            
            <div class="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 md:mx-0 px-4 md:px-0">
                <div class="flex md:grid md:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none">
                     <!-- Blog 1 -->
                    <a href="#" class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-1.webp" alt="Blog 1" class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">10 Tips for Heart Health</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">Simple habits for a healthier heart.</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                    <!-- Blog 2 -->
                    <a href="#" class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-2.webp" alt="Blog 2" class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">Back Pain: Myths & Facts</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">How to prevent and manage back pain effectively.</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                     <!-- Blog 3 -->
                    <a href="#" class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-3.webp" alt="Blog 3" class="w-full h-36 object-cover group-hover:opacity-90 transition">
                        <div class="p-4 flex-1 flex flex-col">
                            <div class="font-bold text-[#0191C7] mb-1">Understanding Robotic Surgery</div>
                            <div class="text-gray-600 text-sm mb-2 flex-1">What is it, and who is it for?</div>
                            <span class="text-orange-500 text-sm mt-auto hover:underline">Read More</span>
                        </div>
                    </a>
                    <!-- Blog 4 -->
                    <a href="#" class="flex-shrink-0 w-[85%] md:w-auto snap-center bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow hover:shadow-lg transition group">
                        <img src="assets/home-img/blogs/Blogs-3.webp" alt="Blog 4" class="w-full h-36 object-cover group-hover:opacity-90 transition">
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
                <a href="news-media.php" class="text-[#0191C7] hover:text-orange-500 font-semibold text-sm flex items-center gap-2 transition-colors">
                    View All <i data-feather="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
            <p class="text-gray-700 mb-4">Stay updated with our latest announcements and achievements.</p>
            
            <div class="flex gap-4 mb-6" id="news-tabs">
                <button class="px-4 py-2 rounded-lg font-semibold transition-all bg-orange-500 text-white shadow" data-target="news-digital">Digital</button>
                <button class="px-4 py-2 rounded-lg font-semibold transition-all bg-gray-200 text-gray-700 hover:bg-gray-300" data-target="news-print">Print</button>
            </div>
            
            <!-- Digital News -->
            <div id="news-digital" class="news-panel flex flex-col md:flex-row items-start gap-8">
                <div class="hidden md:block md:w-1/3">
                    <div class="w-full h-[450px] rounded-xl overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/breaking-news-raj.webp" alt="News" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="md:w-1/3 space-y-4">
                    <a href="news-media.php" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल के आपातकालीन विभाग को एनएबीएच की मान्यता मिली</h3>
                        <time class="text-xs text-gray-500">February 24, 2025</time>
                    </a>
                     <a href="https://lagatar.in/cardiac-life-support-training-camp-organized" target="_blank" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांची: राज अस्पताल में नेशनल कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर का आयोजन</h3>
                        <time class="text-xs text-gray-500">August 29, 2024</time>
                    </a>
                     <a href="news-media.php" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांचीः बाई-पास सर्जरी के लिए अब नहीं जाना होगा बाहर, राज अस्पताल में मिल रही सुविधाोजन किया</h3>
                        <time class="text-xs text-gray-500">1 January, 2024</time>
                    </a>
                </div>
                 <div class="md:w-1/3 space-y-4">
                    <a href="news-media.php" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल में पहली बार IVUS (इंट्रावास्कुलर अल्ट्रासाउंड) तकनीक से एंजियोप्लास्टी की गई।</h3>
                        <time class="text-xs text-gray-500">22 July, 2023</time>
                    </a>
                     <a href="news-media.php" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">राज अस्पताल, रांची में मनाया गया 77वां स्वतंत्रता दिवस, ध्वजारोहण कर दी तिरंगे को सलामी: आयोजन किया</h3>
                        <time class="text-xs text-gray-500">23 August, 2023</time>
                    </a>
                     <a href="news-media.php" class="block bg-white border border-orange-500/30 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 class="text-[#0191C7] font-semibold text-lg mb-1">रांची: 28 जुलाई को मनाया जायेगा विश्व हेपेटाइटिस दिवस</h3>
                        <time class="text-xs text-gray-500">28 July, 2023</time>
                    </a>
                </div>
            </div>
            
             <!-- Print News (Hidden) -->
            <div id="news-print" class="news-panel flex flex-col md:flex-row items-start gap-8 hidden">
                 <div class="hidden md:block md:w-1/3">
                    <div class="w-full h-[450px] rounded-xl overflow-hidden">
                        <img src="assets/home-img/Why-Choose-Raj Hospitals/breaking-news-raj.webp" alt="News" class="w-full h-full object-cover">
                    </div>
                </div>
                 <div class="md:w-1/3 space-y-4">
                     <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/news-1-r.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                     <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/news-2-raj.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                 </div>
                 <div class="md:w-1/3 space-y-4">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/news-3-raj.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/Raj-hsopital-news-1_290824.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                 </div>
                 <div class="md:w-1/3 space-y-4">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/news-3-raj.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div class="h-64 overflow-hidden">
                             <img src="assets/press/Raj-hsopital-news-1_290824.webp" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    </section>

    <?php include $base_url . 'components/footer.php'; ?>

    <!-- Video Modal -->
    <div id="video-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 hidden">
        <div class="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <button id="close-modal" class="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white">
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
            <div class="relative pb-[56.25%]">
                <iframe id="video-iframe" class="absolute inset-0 w-full h-full" src="" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

             // --- Mobile Menu ---
             const mobileMenuBtn = document.getElementById('mobile-menu-btn');
             const mobileMenu = document.getElementById('mobile-menu');
             
             mobileMenuBtn.addEventListener('click', () => {
                 mobileMenu.classList.toggle('hidden');
             });

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
        });
    </script>
</body>
</html>
