<?php $base_url = '../'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obstetrics & Gynaecology - Raj Hospitals</title>
    <meta name="description"
        content="Best Hospital in Ranchi for Pregnancy Delivery & Gynecology Care with expert gynecologists for high-risk pregnancy and infertility.">
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
                            300: '#7cdcfd',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }

        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

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

    <!-- Top Header Bar -->
    <div
        class="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 sm:py-1 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-3 sm:px-4">
            <!-- Mobile Layout -->
            <div class="flex flex-col space-y-2 sm:hidden">
                <div class="flex items-center justify-center space-x-4">
                    <div class="flex items-center space-x-3">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="facebook"
                                class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="instagram"
                                class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="youtube"
                                class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9"
                        class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-xs font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-xs font-medium hover:underline">(24x7) Helpline: +91
                            97714 88888</a>
                    </div>
                </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden sm:flex justify-between items-center gap-4">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="facebook"
                                class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="instagram"
                                class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank"
                            class="hover:text-orange-200 transition-colors"><i data-feather="youtube"
                                class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9"
                        class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-sm font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-sm font-medium hover:underline">(24x7) Helpline: +91
                            97714 88888</a>
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
            <img src="../assets/specialties/Obstetrics & Gynaecology/Obstetrics & Gynaecology.webp"
                alt="Obstetrics & Gynaecology" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 h-full flex items-center">
            <div class="max-w-7xl mx-auto px-4 w-full">
                <div class="max-w-3xl text-white fade-in">
                    <h1 class="text-4xl lg:text-5xl font-bold mb-4">Obstetrics & Gynaecology</h1>
                    <p class="text-xl text-gray-200">Best Hospital in Ranchi for Pregnancy Delivery & Gynecology Care
                        with expert gynecologists for high-risk pregnancy and infertility.</p>
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
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">Our Obstetrics & Gynaecology department at
                            Raj Hospitals is dedicated to providing comprehensive care for women at every stage of life.
                            From adolescence to menopause, we offer expert services in maternity care, high-risk
                            pregnancy management, infertility treatment, and minimally invasive gynaecological
                            surgeries. With a team of highly experienced gynaecologists and a patient-centric approach,
                            we ensure the safest delivery experience and best health outcomes for mother and child.</p>

                        <!-- Why Choose Us Box -->
                        <div class="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-8">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                <i data-feather="info" class="w-5 h-5 text-primary-600 mr-2"></i>
                                Why Choose Our OB-GYN Department
                            </h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i data-feather="check"
                                        class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Expert team of gynaecologists and obstetricians</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check"
                                        class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Dedicated Labour Delivery Recovery (LDR) rooms</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check"
                                        class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Advanced neonatal intensive care unit (NICU)</span>
                                </li>
                                <li class="flex items-start">
                                    <i data-feather="check"
                                        class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0"></i>
                                    <span class="text-gray-700">Specialized Infertility and IVF clinic</span>
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
                                    <span class="text-gray-700">Modern Labour Rooms with Fetal Monitoring</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Advanced 4D Ultrasound and Fetal Medicine</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Laparoscopic and Hysteroscopic Surgery Unit</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Well Women Clinic and Menopause Care</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">24x7 Emergency Obstetric Care</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <div class="flex items-center space-x-3">
                                    <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                    <span class="text-gray-700">Comprehensive Infertility Management Services</span>
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
                    <div class="flex flex-col gap-8 overflow-y-auto"
                        style="max-height: 1000px; max-width: 340px; margin: 0 auto;">

                        <!-- Doctor 1 -->
                        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full"
                            style="min-height: 500px;">
                            <div class="relative h-48 overflow-hidden">
                                <img src="../assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Anupama-Mahli.webp"
                                    alt="Dr. Anupama Mahli" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Anupama Mahli</h3>
                                <p class="text-primary-600 font-medium mb-2">MBBS, MS, DNB, D.MAS</p>
                                <p class="text-secondary-600 text-sm mb-3">Obstetrics & Gynaecology</p>
                                <div class="flex items-center text-sm text-gray-500 mb-4">
                                    <i data-feather="award" class="w-4 h-4 mr-2"></i>
                                    <span>10+ Years Experience</span>
                                </div>
                                <a href="../contact.php"
                                    class="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 mb-2">
                                    <i data-feather="calendar" class="w-4 h-4"></i>
                                    <span>Book Appointment</span>
                                </a>
                                <a href="../doctors.php"
                                    class="w-full bg-white text-primary-600 py-2 rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2">
                                    <i data-feather="user" class="w-4 h-4"></i>
                                    <span>View Profile</span>
                                </a>
                            </div>
                        </div>

                        <!-- Doctor 2 -->
                        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full"
                            style="min-height: 500px;">
                            <div class="relative h-48 overflow-hidden">
                                <img src="../assets/Doc-Side/Gyanecologist - Dr. Pushpa Sinha.webp"
                                    alt="Dr. Pushpa Sinha" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Pushpa Sinha</h3>
                                <p class="text-primary-600 font-medium mb-2">MBBS, MD, DGO</p>
                                <p class="text-secondary-600 text-sm mb-3">Obstetrics & Gynaecology</p>
                                <div class="flex items-center text-sm text-gray-500 mb-4">
                                    <i data-feather="award" class="w-4 h-4 mr-2"></i>
                                    <span>15+ Years Experience</span>
                                </div>
                                <a href="../contact.php"
                                    class="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 mb-2">
                                    <i data-feather="calendar" class="w-4 h-4"></i>
                                    <span>Book Appointment</span>
                                </a>
                                <a href="../doctors.php"
                                    class="w-full bg-white text-primary-600 py-2 rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2">
                                    <i data-feather="user" class="w-4 h-4"></i>
                                    <span>View Profile</span>
                                </a>
                            </div>
                        </div>

                        <!-- Doctor 3 -->
                        <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 w-full"
                            style="min-height: 500px;">
                            <div class="relative h-48 overflow-hidden">
                                <img src="../assets/Doc-Side/tanushree_gyane.webp"
                                    alt="Dr. Tanushree Chakroborty" class="w-full h-full object-cover object-top">
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-900 mb-1">Dr. Tanushree Chakroborty</h3>
                                <p class="text-primary-600 font-medium mb-2">MBBS, DGO</p>
                                <p class="text-secondary-600 text-sm mb-3">Obstetrics & Gynecology, VIA, Colposcopy</p>
                                <div class="flex items-center text-sm text-gray-500 mb-4">
                                    <i data-feather="award" class="w-4 h-4 mr-2"></i>
                                    <span>15+ Years Experience</span>
                                </div>
                                <a href="../contact.php"
                                    class="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center space-x-2 mb-2">
                                    <i data-feather="calendar" class="w-4 h-4"></i>
                                    <span>Book Appointment</span>
                                </a>
                                <a href="../doctors.php"
                                    class="w-full bg-white text-primary-600 py-2 rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors font-medium flex items-center justify-center space-x-2">
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

    <!-- Conditions We Treat Section -->
    <section class="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Conditions We Treat</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Common conditions we diagnose and treat in our Obstetrics & Gynaecology department
                </p>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-sm border border-gray-100 fade-in">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Normal & High-Risk Pregnancy Care</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Gestational Diabetes</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Preeclampsia & Eclampsia</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Miscarriage Management</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Infertility Treatment</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Polycystic Ovary Syndrome (PCOS)</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Endometriosis</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Uterine Fibroids</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Ovarian Cysts</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Menstrual Disorders</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Menopause Management</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Cervical Cancer</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Ovarian Cancer</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Uterine Cancer</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Pelvic Inflammatory Disease</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Ectopic Pregnancy</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Cesarean Section</span>
                    </div>
                    <div class="flex items-center space-x-3 py-2">
                        <div class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span class="text-gray-700 text-base">Gynecological Laparoscopic Surgery</span>
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
                    Complete women's healthcare services under one roof
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Gynaec-Laparoscopic-Surgeries.webp"
                            alt="Laparoscopic Surgery"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Gynaec Laparoscopic Surgeries</h3>
                        <p class="text-gray-600 mb-4">Minimally invasive surgeries for ovarian cysts, fibroids,
                            endometriosis, and hysterectomy with faster recovery.</p>
                    </div>
                </div>

                <!-- Service 2 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/High-Risk-Pregnancy.webp"
                            alt="High Risk Pregnancy"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">High Risk Pregnancy</h3>
                        <p class="text-gray-600 mb-4">Specialized care for complicated pregnancies ensuring safety of
                            both mother and baby.</p>
                    </div>
                </div>

                <!-- Service 3 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Infertility-Treatment_1.webp"
                            alt="Infertility Treatment"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Infertility Treatment</h3>
                        <p class="text-gray-600 mb-4">Advanced fertility solutions including IUI, IVF, and hormonal
                            therapies for couples planning a family.</p>
                    </div>
                </div>

                <!-- Service 4 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Normal-Delivery.webp"
                            alt="Normal Delivery"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Normal & Painless Delivery</h3>
                        <p class="text-gray-600 mb-4">Promoting natural birth with options for painless labour and
                            epidural analgesia.</p>
                    </div>
                </div>

                <!-- Service 5 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Caesarean-Section.webp"
                            alt="Caesarean Section"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Caesarean Section (C-Section)</h3>
                        <p class="text-gray-600 mb-4">Safe surgical delivery procedures when necessary, performed by
                            expert obstetricians.</p>
                    </div>
                </div>

                <!-- Service 6 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Menopause-Clinic.webp"
                            alt="Menopause Clinic"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Menopause Clinic</h3>
                        <p class="text-gray-600 mb-4">Comprehensive care and counselling for menopause related symptoms
                            and health issues.</p>
                    </div>
                </div>

                <!-- Service 7 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Cancer-Screening.webp"
                            alt="Cancer Screening"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Cancer Screening (Pap Smear & Colposcopy)
                        </h3>
                        <p class="text-gray-600 mb-4">Preventive screening for cervical, uterine, and ovarian cancers
                            for early detection.</p>
                    </div>
                </div>

                <!-- Service 8 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Family-Planning.webp"
                            alt="Family Planning"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Family Planning Services</h3>
                        <p class="text-gray-600 mb-4">Counselling and provision of various contraceptive methods for
                            family planning.</p>
                    </div>
                </div>

                <!-- Service 9 -->
                <div
                    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in">
                    <div class="h-48 overflow-hidden">
                        <img src="../assets/specialties/Obstetrics & Gynaecology/Hysterectomy.webp" alt="Hysterectomy"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">Hysterectomy</h3>
                        <p class="text-gray-600 mb-4">Surgical removal of the uterus via laparoscopic, vaginal, or open
                            abdominal methods.</p>
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
                    Joyful stories of new beginnings and restored health
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Story 1 -->
                <div class="bg-white p-8 rounded-xl shadow-md fade-in">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <i data-feather="heart" class="w-5 h-5 text-primary-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">High-Risk Pregnancy Success</h3>
                    </div>
                    <p class="text-gray-500 mb-4">Patient: Mrs. Riya</p>
                    <p class="text-gray-700 mb-6">"I had a complicated pregnancy with high BP. The doctors at Raj
                        Hospitals took exceptional care of me and delivered my healthy baby girl safely."</p>
                    <div class="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div class="flex items-center space-x-2">
                            <i data-feather="check" class="w-5 h-5 text-green-600"></i>
                            <span class="font-medium text-green-800">Outcome: Safe delivery of a healthy baby.</span>
                        </div>
                    </div>
                </div>

                <!-- Story 2 -->
                <div class="bg-white p-8 rounded-xl shadow-md fade-in">
                    <div class="flex items-center space-x-3 mb-4">
                        <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <i data-feather="heart" class="w-5 h-5 text-primary-600"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900">Infertility Treatment Joy</h3>
                    </div>
                    <p class="text-gray-500 mb-4">Patient: Mrs. Anjali</p>
                    <p class="text-gray-700 mb-6">"After years of trying, we consulted Dr. Sweta Lal. With her expert
                        guidance and treatment, we are now proud parents of twins."</p>
                    <div class="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div class="flex items-center space-x-2">
                            <i data-feather="check" class="w-5 h-5 text-green-600"></i>
                            <span class="font-medium text-green-800">Outcome: Successful conception and delivery.</span>
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
                    Common questions about pregnancy and women's health
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- FAQs Column -->
                <div>
                    <div class="space-y-4">
                        <!-- FAQ 1 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Is painless delivery available at
                                    Raj Hospitals?</h3>
                                <i data-feather="plus"
                                    class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Yes, we offer painless normal delivery options such as epidural analgesia for a
                                    comfortable birthing experience.</p>
                            </div>
                        </div>

                        <!-- FAQ 2 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">What services are offered for
                                    infertility?</h3>
                                <i data-feather="plus"
                                    class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>We provide comprehensive infertility evaluation, IUI, IVF, hormonal treatment, and
                                    laparoscopic fertility enhancing surgeries.</p>
                            </div>
                        </div>

                        <!-- FAQ 3 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Do you handle high-risk
                                    pregnancies?</h3>
                                <i data-feather="plus"
                                    class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Absolutely. Our hospital is equipped with a NICU and critical care support to manage
                                    high-risk pregnancies effectively.</p>
                            </div>
                        </div>

                        <!-- FAQ 4 -->
                        <div class="faq-item bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onclick="toggleFaq(this)">
                            <div class="flex justify-between items-center">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Is laparoscopic hysterectomy
                                    better?</h3>
                                <i data-feather="plus"
                                    class="text-2xl text-primary-500 flex-shrink-0 ml-4 faq-icon"></i>
                            </div>
                            <div class="faq-content text-gray-700 transition-all duration-300 overflow-hidden max-h-0">
                                <p>Laparoscopic hysterectomy is less invasive, involves less pain, smaller scars, and a
                                    faster recovery compared to open surgery.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form Column -->
                <div class="lg:sticky lg:top-24 h-fit">
                    <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 shadow-lg">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Have More Questions?</h3>
                        <p class="text-gray-600 mb-6">Get in touch with our Gynaecologists</p>

                        <form class="space-y-4">
                            <!-- Name -->
                            <div>
                                <label for="inquiry_name" class="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="inquiry_name" name="inquiry_name" required
                                    class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Enter your name">
                            </div>

                            <!-- Email -->
                            <div>
                                <label for="inquiry_email" class="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span class="text-red-500">*</span>
                                </label>
                                <input type="email" id="inquiry_email" name="inquiry_email" required
                                    class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Enter your email">
                            </div>

                            <!-- Phone -->
                            <div>
                                <label for="inquiry_phone" class="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span class="text-red-500">*</span>
                                </label>
                                <input type="tel" id="inquiry_phone" name="inquiry_phone" required pattern="[0-9]{10}"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Enter 10-digit mobile number">
                            </div>

                            <!-- Message -->
                            <div>
                                <label for="inquiry_message" class="block text-sm font-medium text-gray-700 mb-1">
                                    Your Question <span class="text-red-500">*</span>
                                </label>
                                <textarea id="inquiry_message" name="inquiry_message" required rows="4"
                                    class="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                    placeholder="Describe your question or concern..."></textarea>
                            </div>

                            <!-- Hidden field for specialty -->
                            <input type="hidden" name="specialty" value="Obstetrics & Gynaecology">

                            <!-- Submit Button -->
                            <button type="submit"
                                class="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
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