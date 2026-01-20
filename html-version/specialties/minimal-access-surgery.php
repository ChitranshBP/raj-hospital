<?php $base_url = '../'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimal Access Surgery - Best Laparoscopic & Laser Surgery Hospital in Ranchi | Raj Hospitals</title>
    <meta name="description" content="Advanced laparoscopic, laser, and general surgery with highly skilled surgeons and comprehensive care in Ranchi. Expert minimal access surgery at Raj Hospitals.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#fff7ed',
                            100: '#ffedd5',
                            200: '#fed7aa',
                            300: '#fdba74',
                            400: '#fb923c',
                            500: '#f97316',
                            600: '#ea580c',
                            700: '#c2410c',
                            800: '#9a3412',
                            900: '#7c2d12',
                        },
                        secondary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            500: '#0ea5e9',
                            600: '#0284c7',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="bg-white">

    <!-- Top Header Bar -->
    <div class="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 sm:py-1 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-3 sm:px-4">
            <!-- Mobile Layout -->
            <div class="flex flex-col space-y-2 sm:hidden">
                <div class="flex items-center justify-center space-x-4">
                    <div class="flex items-center space-x-3">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="facebook" class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="instagram" class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="youtube" class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9" class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-xs font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-xs font-medium hover:underline">(24x7) Helpline: +91 97714 88888</a>
                    </div>
                </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden sm:flex justify-between items-center gap-4">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="facebook" class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="instagram" class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="youtube" class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9" class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-sm font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-sm font-medium hover:underline">(24x7) Helpline: +91 97714 88888</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Hero Section -->
    <section class="relative h-[50vh] mt-20 overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="../assets/specialties/Minimal Access Surgery/Minimal-Access-Surgery.webp" alt="Minimal Access Surgery" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4 w-full">
                <div class="max-w-3xl text-white fade-in">
                    <h1 class="text-4xl lg:text-5xl font-bold mb-4">Minimal Access Surgery</h1>
                    <p class="text-xl text-gray-200">Advanced laparoscopic, laser, and general surgery with highly skilled surgeons and comprehensive care in Ranchi.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Overview Section -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid lg:grid-cols-3 gap-12">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    <div class="fade-in">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">The Department of General and Minimally Invasive Surgery at Raj Hospitals offers complete evaluation, diagnosis, and surgical treatment for a wide range of disorders. Our surgeons provide state-of-the-art patient care, using minimally invasive and laser techniques for improved recovery and outcomes. We specialize in abdominal, breast, skin, hernia, and soft tissue surgeries, delivering personalized care and excellent results. ICU and emergency services ensure patients receive the highest level of surgical care, with a multidisciplinary team approach.</p>

                        <!-- Why Choose Us Box -->
                        <div class="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-8">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <i data-feather="info" class="w-5 h-5 text-primary-600 mr-2"></i>
                                Why Choose Our Minimal Access Surgery Department
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i data-feather="check" class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Team of experienced specialists with advanced training and expertise</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check" class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">State-of-the-art diagnostic and treatment facilities</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check" class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Comprehensive care from diagnosis to rehabilitation</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check" class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Multidisciplinary approach for complex cases</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check" class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">24/7 emergency care for critical conditions</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Key Facilities -->
                    <div class="fade-in mb-12">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Key Facilities</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Advanced operation theatres with state-of-the-art equipment</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Dedicated Laparoscopic and Laser Surgery suites</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">24/7 ICU and Emergency facilities</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Post-surgical care and rehabilitation</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">In-house pathology and diagnostics</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Integrated surgical team and multidisciplinary approach</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar - Meet Our Specialists -->
                <div class="space-y-8 fade-in">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4 flex justify-center items-center">
                        Meet Our Specialists
                    </h3>
                    <div class="flex flex-col gap-8 overflow-y-auto" style="max-height: 1000px; max-width: 340px; margin: 0 auto;">

                        <!-- Doctor 1 -->
                        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full" style="min-height: 500px;">
                            <div class="relative h-48 overflow-hidden">
                                <img src="../assets/Doc-Side/General Surgeon - Dr. Ashish Kumar Modi.webp" alt="Dr. Ashish Kumar Modi" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Ashish Kumar Modi</h3>
                                <p class="text-primary-600 font-medium mb-2">MBBS, MS</p>
                                <p class="text-secondary-600 text-sm mb-3">General & Laparoscopic Surgery</p>
                                <div class="flex items-center text-sm text-gray-500 mb-4">
                                    <i data-feather="award" class="w-4 h-4 mr-2"></i>
                                    <span>15+ Years Experience</span>
                                </div>
                                <a href="../contact.php" class="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 mb-2">
                                    <i data-feather="calendar" class="w-4 h-4"></i>
                                    <span>Book Appointment</span>
                                </a>
                                <a href="../doctors.php" class="w-full bg-white text-primary-600 py-2 rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2">
                                    <i data-feather="user" class="w-4 h-4"></i>
                                    <span>View Profile</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Treatments We Offer Section -->
    <section class="py-8 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Treatments We Offer</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive Minimal Access Surgery care with advanced techniques and personalized treatment plans
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Laparoscopic & Laser-Surgery.webp" alt="Laparoscopic & Laser Surgery" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Laparoscopic & Laser Surgery</h3>
                        <p class="text-gray-600 mb-4">Gall Bladder, Hernia, Appendix & advanced general surgery using minimal access and laser technology.</p>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Thoracoscopic.webp" alt="Thoracoscopic (Lung) Surgeries" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Thoracoscopic (Lung) Surgeries</h3>
                        <p class="text-gray-600 mb-4">Minimally invasive surgical management of chest and lung conditions.</p>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Bariatric.webp" alt="Bariatric (Weight Loss) & GI Surgeries" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Bariatric (Weight Loss) & GI Surgeries</h3>
                        <p class="text-gray-600 mb-4">Weight-loss and gastrointestinal surgeries for obesity and digestive disorders.</p>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Laparoscopy-Surgery.webp" alt="Laparoscopy Surgery" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Laparoscopy Surgery</h3>
                        <p class="text-gray-600 mb-4">Keyhole procedures for faster recovery, less scarring and better results.</p>
                    </div>
                </div>

                <!-- Service 5 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Laser-Proctology-Indian.webp" alt="Laser Surgery For Proctology" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Laser Surgery For Proctology</h3>
                        <p class="text-gray-600 mb-4">Painless, advanced treatment for fissures, fistulas, piles, and hemorrhoids using laser.</p>
                    </div>
                </div>

                <!-- Service 6 -->
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Minimal Access Surgery/Diagnostic-and-Therapeutic-Endoscopy.webp" alt="Diagnostic and Therapeutic Endoscopy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Diagnostic and Therapeutic Endoscopy</h3>
                        <p class="text-gray-600 mb-4">Procedures for both diagnosis and treatment using advanced endoscopic techniques.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Conditions We Treat Section -->
    <section class="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Common conditions we diagnose and treat in our Minimal Access Surgery department
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 fade-in">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Laparoscopic Cholecystectomy (Gallbladder Removal)</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Laparoscopic Appendectomy</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Hernia Repair (Inguinal, Umbilical, Hiatal)</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Laparoscopic Bariatric Surgery</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Laparoscopic Colorectal Surgery</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Laparoscopic Gastric Surgery</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Hemorrhoids (Piles)</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Anal Fissures</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Anal Fistula</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Pilonidal Sinus</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Breast Lumps</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Thyroid Surgery</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Varicose Veins</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Lipoma Removal</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Skin Cysts</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Patient Success Stories Section -->
    <section class="py-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Real stories of healing and recovery from our Minimal Access Surgery department
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Story 1 -->
                <div class="bg-white p-8 rounded-xl shadow-md fade-in">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <i data-feather="settings" class="w-5 h-5 text-primary-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Complex Abdominal Surgery Success</h3>
                    </div>
                    <p class="text-gray-500 mb-4">Patient: Jassi</p>
                    <p class="text-gray-700 mb-6">I underwent surgery for a complicated abdominal wall problem at Raj Hospitals. The surgeon's laparoscopic skill and the care I received resulted in a quick and satisfying recovery.</p>
                    <div class="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div class="flex items-center space-x-2">
                            <i data-feather="check" class="w-5 h-5 text-green-600"></i>
                            <span class="font-medium text-green-800">Outcome: Full recovery post-laparoscopic repair.</span>
                        </div>
                    </div>
                </div>

                <!-- Story 2 -->
                <div class="bg-white p-8 rounded-xl shadow-md fade-in">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <i data-feather="settings" class="w-5 h-5 text-primary-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Gallbladder Stone Removal</h3>
                    </div>
                    <p class="text-gray-500 mb-4">Patient: Gokul</p>
                    <p class="text-gray-700 mb-6">I was facing gallbladder stones and the Raj Hospitals surgical team treated me so well and performed the surgery efficiently. The team is fantastic.</p>
                    <div class="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div class="flex items-center space-x-2">
                            <i data-feather="check" class="w-5 h-5 text-green-600"></i>
                            <span class="font-medium text-green-800">Outcome: Problem solved, fast recovery.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQs and Contact Form Section -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Common questions about Minimal Access Surgery conditions and treatments
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- FAQs Column -->
                <div>
                    <div class="space-y-4">
                        <!-- FAQ 1 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">How long after surgery can you go home?</h3>
                                <i data-feather="plus" class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Most patients are observed in the recovery room for 45 minutes to 2 hours post-surgery, and can usually go home between 1 and 4 hours after outpatient surgery.</p>
                            </div>
                        </div>

                        <!-- FAQ 2 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">What are minimally invasive/laparoscopic surgeries?</h3>
                                <i data-feather="plus" class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Laparoscopic surgeries use small cuts, a camera, and fine instruments for surgery inside your body, allowing quicker recovery, less pain and smaller scars compared to open surgery.</p>
                            </div>
                        </div>

                        <!-- FAQ 3 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Is laser surgery painful?</h3>
                                <i data-feather="plus" class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Laser surgeries for hemorrhoids, fistulas etc. are usually painless and offer faster healing as compared to traditional procedures.</p>
                            </div>
                        </div>

                        <!-- FAQ 4 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Can all hernias be treated laparoscopically?</h3>
                                <i data-feather="plus" class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Most hernias can be repaired using laparoscopy, but some complex or recurrent hernias might need open surgery depending on individual evaluation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form Column -->
                <div class="lg:sticky lg:top-24 h-fit">
                    <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 shadow-lg">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Have More Questions?</h3>
                        <p class="text-gray-600 mb-6">Get in touch with our Minimal Access Surgery specialists</p>

                        <form class="space-y-4">
                            <!-- Name -->
                            <div>
                                <label for="inquiry_name" class="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="inquiry_name" name="inquiry_name" required class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Enter your name">
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="inquiry_email" class="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span class="text-red-500">*</span>
                                </label>
                                <input type="email" id="inquiry_email" name="inquiry_email" required class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Enter your email">
                            </div>

                            <!-- Phone -->
                            <div>
                                <label for="inquiry_phone" class="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span class="text-red-500">*</span>
                                </label>
                                <input type="tel" id="inquiry_phone" name="inquiry_phone" required pattern="[0-9]{10}" class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Enter 10-digit mobile number">
                            </div>

                            <!-- Message -->
                            <div>
                                <label for="inquiry_message" class="block text-sm font-medium text-gray-700 mb-1">
                                    Your Question <span class="text-red-500">*</span>
                                </label>
                                <textarea id="inquiry_message" name="inquiry_message" required rows="4" class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Describe your question or concern..."></textarea>
                            </div>

                            <!-- Hidden field for specialty -->
                            <input type="hidden" name="specialty" value="Minimal Access Surgery">

                            <!-- Submit Button -->
                            <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                <i data-feather="send" class="w-5 h-5"></i>
                                Submit Inquiry
                            </button>

                            <!-- Info Text -->
                            <p class="text-xs text-gray-600 text-center mt-3">Our team will respond within 24 hours</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // Initialize Feather Icons
            feather.replace();

            // Scroll Animation Observer
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

            // Header Scroll Effect
            const header = document.getElementById('main-header');
            const navTopRow = document.getElementById('nav-top-row');
            const mainLogo = document.getElementById('main-logo');

            let lastScrollY = 0;
            let showMiddleRow = true;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > 50) {
                    header.classList.add('shadow-lg');
                } else {
                    header.classList.remove('shadow-lg');
                }

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    if (showMiddleRow) {
                        showMiddleRow = false;
                        navTopRow.classList.remove('h-auto', 'opacity-100');
                        navTopRow.classList.add('h-0', 'opacity-0');
                        mainLogo.classList.remove('lg:w-[160px]', 'lg:h-[160px]');
                        mainLogo.classList.add('lg:w-[140px]', 'lg:h-[140px]');
                    }
                } else if (currentScrollY < lastScrollY) {
                    if (!showMiddleRow) {
                        showMiddleRow = true;
                        navTopRow.classList.remove('h-0', 'opacity-0');
                        navTopRow.classList.add('h-auto', 'opacity-100');
                        mainLogo.classList.remove('lg:w-[140px]', 'lg:h-[140px]');
                        mainLogo.classList.add('lg:w-[160px]', 'lg:h-[160px]');
                    }
                }

                lastScrollY = currentScrollY;
            }, { passive: true });

            // Mobile Menu
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        });

        // FAQ Toggle Function
        function toggleFaq(element) {
            const content = element.querySelector('.faq-content');
            const icon = element.querySelector('.faq-icon');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                const itemContent = item.querySelector('.faq-content');
                const itemIcon = item.querySelector('.faq-icon');
                itemContent.style.maxHeight = '0px';
                itemIcon.setAttribute('data-feather', 'plus');
            });

            // Toggle current FAQ
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.setAttribute('data-feather', 'minus');
            }

            // Re-initialize feather icons
            feather.replace();
        }
    </script>
</body>
</html>
