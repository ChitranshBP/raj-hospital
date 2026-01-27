<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us | Raj Hospitals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-white">

    <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] mt-32 py-6">
        <div class="max-w-7xl mx-auto px-4 text-center fade-in">
             <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span class="text-[#ea5234]">Raj Hospitals</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of unwavering commitment to healthcare excellence in Ranchi, Jharkhand
            </p>
        </div>
    </section>

    <!-- Our Story -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="fade-in">
                     <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                      <div class="space-y-4 text-gray-600 leading-relaxed">
                        <p>Established in 1991, Raj Hospitals has been at the forefront of healthcare delivery in Ranchi, Jharkhand for over three decades. What began as a vision to provide world-class medical care to the people of Jharkhand has evolved into one of the region's most trusted healthcare institutions.</p>
                        <p>Our journey has been marked by continuous growth, innovation, and an unwavering commitment to patient care. From a modest beginning, we have expanded to become a 100+ bed super specialty hospital, equipped with state-of-the-art technology and a team of highly qualified medical professionals.</p>
                        <p>Today, Raj Hospitals stands as a beacon of hope and healing, serving not just Ranchi but patients from across Jharkhand and neighboring states. Our partnership with MAX Saket Delhi further strengthens our commitment to providing the highest standards of medical care.</p>
                      </div>
                </div>
                <div class="fade-in">
                    <video src="assets/raj-video/raj-video.mp4" autoplay muted loop controls class="w-full rounded-2xl shadow-xl" poster="assets/About-img/The-Hospital.webp">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </section>

    <!-- Chairman Message -->
    <section class="py-12 px-4 bg-gray-50/50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-8 fade-in">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Chairman's Message</h2>
                <p class="text-gray-600">A personal message from our founder and chairman</p>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden fade-in">
                <div class="md:flex md:items-center">
                    <div class="md:w-1/4 flex justify-center p-6 bg-gray-50">
                        <img src="assets/home-img/Picture1.png" alt="Chairman - Raj Hospital" class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-lg">
                    </div>
                    <div class="md:w-3/4 p-8">
                        <div class="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6">Message from Chairman</div>
                        <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
                            <p>When we started our facility in Ranchi 30 years ago, we started very small, but we ensured that our patients got the best medical technology and treatment modalities available. In line with the same philosophy, we have created a facility that is second to none regarding medical competence, technology, and infrastructure.</p>
                            <p>We have designed this hospital keeping in view the modern healthcare needs. It has been designed to ensure maximum ease to the patient, minimize their movement and discomfort, and ensure their safety. We provide a spectrum of all major medical specialties like Cardiac Sciences, Critical care, Oncology, Neuro Sciences, Nephrology & Urology, Orthopaedics, Aesthetic & Reconstructive Surgery, Minimal Access Surgery, Obs & Gynaecology, Paediatrics, ENT, and Internal Medicine.</p>
                            <p>Another unique feature of the best hospital in Ranchi is that we have dedicated department-wise critical care units like Medical ICU, Surgical ICU, Cardiac Care Unit, and HDU, which department-specific Doctors and paramedics will manage. It ensures customized care for all our patients.</p>
                            <p>At Raj Hospitals, the best hospital in Ranchi, we have always ensured that this world-class facility is accessible for all socio-economic sections of the society without compromising the quality of treatment and patient care.</p>
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-100">
                            <div>
                                <h4 class="font-semibold text-gray-900 text-lg">Jogesh Gambhir</h4>
                                <p class="text-sm text-gray-600">Founder & Chairman, Raj Hospitals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div class="bg-white p-8 rounded-2xl shadow-lg fade-in border-t-4 border-orange-500">
                    <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                        <i data-feather="heart" class="w-8 h-8 text-orange-600"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p class="text-gray-600 leading-relaxed">To provide compassionate, high-quality healthcare services that improve the health and well-being of our community. We are committed to delivering patient-centered care with integrity, excellence, and respect for every individual we serve.</p>
                </div>
                 <div class="bg-white p-8 rounded-2xl shadow-lg fade-in border-t-4 border-[#0191C7]">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i data-feather="shield" class="w-8 h-8 text-[#0191C7]"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p class="text-gray-600 leading-relaxed">To be the leading healthcare provider in Eastern India, recognized for our clinical excellence, innovative treatments, and exceptional patient experience. We envision a healthier community where quality healthcare is accessible to all.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-10 fade-in">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Core Values</h2>
                <p class="text-gray-600">The principles that guide everything we do in delivering exceptional healthcare</p>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                 <!-- 1 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 fade-in hover:shadow-md transition">
                    <div class="flex items-start space-x-4 mb-4">
                        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="heart" class="w-6 h-6 text-white"></i>
                        </div>
                        <div><h3 class="text-xl font-bold text-gray-900">Compassion</h3></div>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed">We treat each patient as a member of our family and make them partner in their goals towards positive health by collaboration and an informed care delivery system.</p>
                </div>
                 <!-- 2 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 fade-in hover:shadow-md transition">
                    <div class="flex items-start space-x-4 mb-4">
                        <div class="w-12 h-12 bg-[#0191C7] rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="trending-up" class="w-6 h-6 text-white"></i>
                        </div>
                        <div><h3 class="text-xl font-bold text-gray-900">Commitment</h3></div>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed">We are committed to constantly provide the best of technology and skills to our patients for their holistic wellbeing.</p>
                </div>
                 <!-- 3 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 fade-in hover:shadow-md transition">
                    <div class="flex items-start space-x-4 mb-4">
                        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="user-check" class="w-6 h-6 text-white"></i>
                        </div>
                        <div><h3 class="text-xl font-bold text-gray-900">Competence</h3></div>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed">We employ credentialed, competent and experienced medical, support and managerial teams to deliver optimum quality outcomes for our patients at all times.</p>
                </div>
                 <!-- 4 -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 fade-in hover:shadow-md transition">
                    <div class="flex items-start space-x-4 mb-4">
                        <div class="w-12 h-12 bg-[#0191C7] rounded-lg flex items-center justify-center flex-shrink-0">
                            <i data-feather="activity" class="w-6 h-6 text-white"></i>
                        </div>
                        <div><h3 class="text-xl font-bold text-gray-900">Care</h3></div>
                    </div>
                    <p class="text-gray-700 text-sm leading-relaxed">We provide the best-in-class and standard of care to all our patients regardless of their socio-economic background.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Journey Timeline -->
    <section class="py-12 px-4 bg-gray-50/50">
        <div class="max-w-5xl mx-auto">
             <div class="text-center mb-12 fade-in">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Journey Through the Years</h2>
                <p class="text-gray-600">Raj Hospital & Research Centre - Three decades of excellence in healthcare</p>
            </div>
            
            <div class="relative px-4 md:px-0">
                 <!-- Central Line -->
                <div class="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0191C7] via-orange-500 to-orange-600"></div>

                <div class="space-y-12">
                     <!-- 1991 (Left) -->
                    <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">1991</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Inaugurated on November 3rd with 17 private rooms, labor room & OT</li>
                                    <li class="text-sm text-gray-700">Started Brain & Spine, Orthopedic & Maternity Surgeries</li>
                                    <li class="text-sm text-gray-700">First private hospital with complete Radiology & Diagnostic services under one roof</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/The-Hospital.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 1992-94 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">1992–94</span>
                                <ul class="space-y-2">
                                    <li class="text-sm text-gray-700">Introduced Endoscopic, ENT Microsurgeries & Laparoscopic Surgeries</li>
                                    <li class="text-sm text-gray-700">Added twin/triple sharing rooms & a 2-bed ICU (total 34 beds)</li>
                                    <li class="text-sm text-gray-700">Launched first private hospital CT Scan in Ranchi</li>
                                    <li class="text-sm text-gray-700">Pathology became a 24/7 facility</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/timeline-raj.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 1995 (Left) -->
                    <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">1995</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Opened 25-bedded General Ward (total 63 beds)</li>
                                    <li class="text-sm text-gray-700">Installed C-Arm in OT</li>
                                    <li class="text-sm text-gray-700">Began Closed Cardiac Surgeries & Pacemaker Implantations</li>
                                    <li class="text-sm text-gray-700">Added Cancer Treatment</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/1995.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 1997 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">1997</span>
                                <ul class="space-y-2">
                                    <li class="text-sm text-gray-700">Became first private hospital in the region recognized by Ministry of Health & Family Welfare for Central Govt. beneficiaries</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/1997.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 2001 (Left) -->
                    <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2001</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">New 14-bed ICU inaugurated by Jharkhand's first CM, Shri Babulal Marandi</li>
                                    <li class="text-sm text-gray-700">Started Dialysis services</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/2001.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 2003-05 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2003–05</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">First private center for HIV management in Jharkhand</li>
                                <li class="text-sm text-gray-700">Started Joint Replacement surgeries</li>
                                <li class="text-sm text-gray-700">Launched first private hospital MRI in Ranchi</li>
                                <li class="text-sm text-gray-700">Upgraded Sonography facilities</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/2003-05.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 2008 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2008</span>
                                <ul class="space-y-2 text-left md:text-right">
                                     <li class="text-sm text-gray-700">Mr. Sahil Gambhir (now CEO) joined; launched 24/7 in-house Pharmacy</li>
                                <li class="text-sm text-gray-700">Expanded ICU to 20 beds & added 10-bedded HDU</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/2008.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 2011-13 (Right) -->
                     <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2011–13</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Started Knee Replacement surgeries (with international collaboration)</li>
                                <li class="text-sm text-gray-700">Installed PSA-based Oxygen Generation facility</li>
                                <li class="text-sm text-gray-700">Expanded to 100+ beds</li>
                                <li class="text-sm text-gray-700">Opened advanced Neuro & Radio Diagnostics (1.5 Tesla MRI, EEG, EMG etc.)</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/Comprehensive-Neuro.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 2015 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2015</span>
                                <ul class="space-y-2 text-left md:text-right">
                                     <li class="text-sm text-gray-700">Major infrastructural overhaul</li>
                                <li class="text-sm text-gray-700">Added 4 Modular OTs for critical surgeries</li>
                                <li class="text-sm text-gray-700">Expanded Critical Care to 50 beds</li>
                                <li class="text-sm text-gray-700">Complete Dialysis Centre with Nephro Plus</li>
                                <li class="text-sm text-gray-700">Upgraded Maternity, Physiotherapy, Dentistry, Endoscopy</li>
                                <li class="text-sm text-gray-700">Modern utilities: Piped Gas/Suction, Fire Safety, Helipad</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/As-we-move-into-the-fourth.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 2018 (Right) -->
                     <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2018</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Launched Cath Lab & Interventional Cardiology (with Artemis Healthcare)</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/2018.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 2019 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2019</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Pre-Accredited by NABH for Patient Safety & Quality</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/NABH.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 2020-21 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">2020–21</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Key role in COVID-19 fight; successfully treated 1000+ patients</li>
                                     <li class="text-sm text-gray-700">Among first private hospitals in Jharkhand to start Vaccination Drive</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/2020-21.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- January 2022 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">January 2022</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Launched State-of-the-Art Gastroenterology Suite</li>
                                    <li class="text-sm text-gray-700">Facilities include Endoscopy, ERCP, Colonoscopy, Capsule Endoscopy</li>
                                    <li class="text-sm text-gray-700">Advanced management of liver failure with PLEX & CRRT</li>
                                    <li class="text-sm text-gray-700">Performed more than 30,000 diagnostic and therapeutic procedures</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/CRRT-pic.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 16th February 2023 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">16th February 2023</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Hospital received NABH Accreditation</li>
                                     <li class="text-sm text-gray-700">Recognition for maintaining highest standards of patient safety</li>
                                     <li class="text-sm text-gray-700">Comprehensive quality management system implementation</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/nabh-hospital-new.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 12th May 2023 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">12th May 2023</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Introduced Advanced Kidney Care with CRRT</li>
                                    <li class="text-sm text-gray-700">Comprehensive kidney care for renal failure</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/Gastro-pic.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- July 2023 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">July 2023</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Launched Leica-Provido Operating Microscope</li>
                                     <li class="text-sm text-gray-700">Complicated brain tumor & spine surgeries</li>
                                     <li class="text-sm text-gray-700">Advanced neurology diagnostics including EEG, EMG, NCS</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/neuro-pic.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                     <!-- 21st January 2025 (Left) -->
                     <div class="relative flex flex-col md:flex-row items-center gap-8 fade-in">
                         <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 md:border-l-0 md:border-r-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">21st January 2025</span>
                                <ul class="space-y-2 text-left md:text-right">
                                    <li class="text-sm text-gray-700">Emergency Department received NABH Accreditation</li>
                                    <li class="text-sm text-gray-700">Enhanced emergency care with standardized protocols</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pl-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/nabh-emergency-new.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                    <!-- 28th January 2025 (Right) -->
                    <div class="relative flex flex-col md:flex-row-reverse items-center gap-8 fade-in">
                        <div class="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-md"></div>
                        <div class="w-full md:w-5/12 pl-16 md:pl-0 md:pl-8">
                             <div class="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition">
                                <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">28th January 2025</span>
                                <ul class="space-y-2">
                                     <li class="text-sm text-gray-700">Nursing Excellence Department received NABH Accreditation</li>
                                     <li class="text-sm text-gray-700">Recognition for superior nursing care standards</li>
                                </ul>
                             </div>
                        </div>
                        <div class="hidden md:block w-5/12 pr-8">
                             <div class="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md"><img src="assets/About-img/nabh-nursing.webp" class="w-full h-full object-cover"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        feather.replace();

        // Navbar scroll effect
        const header = document.getElementById('main-header');
        const logo = document.getElementById('main-logo');
        const logoContainer = document.getElementById('logo-container');
        const navTopRow = document.getElementById('nav-top-row');

        window.addEventListener('scroll', () => {
             if (window.scrollY > 50) {
                header.classList.add('py-1');
                 logo.classList.remove('w-[90px]', 'h-[90px]', 'sm:w-[125px]', 'sm:h-[125px]', 'md:w-[145px]', 'md:h-[145px]', 'lg:w-[180px]', 'lg:h-[180px]');
                logo.classList.add('w-12', 'h-12', 'md:w-16', 'md:h-16');
                 navTopRow.style.height = '0';
                navTopRow.style.opacity = '0';
                navTopRow.style.marginTop = '0';
            } else {
                 header.classList.remove('py-1');
                  logo.classList.add('w-[90px]', 'h-[90px]', 'sm:w-[125px]', 'sm:h-[125px]', 'md:w-[145px]', 'md:h-[145px]', 'lg:w-[180px]', 'lg:h-[180px]');
                logo.classList.remove('w-12', 'h-12', 'md:w-16', 'md:h-16');
                 navTopRow.style.height = 'auto'; 
                navTopRow.style.opacity = '1';
                navTopRow.style.marginTop = '';
            }
        });

        // Fade-in animation
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    </script>
</body>
</html>
