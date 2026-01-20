<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Profile | Raj Hospitals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
    <style>
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }
    </style>
     <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#fef5f3',
                            100: '#fde9e6',
                            200: '#fbd7d0',
                            300: '#f8b8a9',
                            400: '#f4917a',
                            500: '#fc684b',
                            600: '#ea5234',
                            700: '#c4401f',
                            800: '#a2381c',
                            900: '#86341d'
                        },
                        secondary: {
                            50: '#f0fbff',
                            100: '#e0f6fe',
                            200: '#b9edfe',
                            300: '#7cdcfd',
                            400: '#36c8fa',
                            500: '#0eb3e9',
                            600: '#0191c7',
                            700: '#0274a1',
                            800: '#066185',
                            900: '#0b516e'
                        },
                         accent: {
                            100: '#ffedd5',
                            500: '#f97316',
                            600: '#ea580c',
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">

   <?php include $base_url . 'components/navbar.php'; ?>

    <div id="profile-container">
        <!-- Content injected via JS -->
    </div>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <!-- Booking Modal -->
    <div id="booking-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-[9999] p-2 fade-in">
        <div class="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto">
             <div class="sticky top-0 bg-white border-b border-gray-200 px-4 py-2.5 flex justify-between items-center rounded-t-lg z-10">
                <h4 class="font-bold text-gray-900 text-base">Book Appointment</h4>
                <button id="close-modal-btn" class="text-gray-500 hover:text-gray-700 transition-colors">
                    <i data-feather="x" class="w-5 h-5"></i>
                </button>
            </div>
             <div class="p-4">
                 <div class="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
                    <div class="grid grid-cols-2 gap-3 text-xs">
                        <div><p class="text-gray-600 mb-0.5">Doctor</p><p class="font-semibold text-gray-900" id="modal-doctor-name"></p></div>
                        <div><p class="text-gray-600 mb-0.5">Specialty</p><p class="font-semibold text-gray-900" id="modal-doctor-specialty"></p></div>
                    </div>
                </div>
                <form class="space-y-3" onsubmit="event.preventDefault(); alert('Appointment request submitted!');">
                     <input type="hidden" name="doctor_name" id="form-doctor-name">
                     <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">Patient Name <span class="text-red-500">*</span></label>
                        <input type="text" required class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Enter your full name">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-gray-700 mb-1">Phone Number <span class="text-red-500">*</span></label>
                        <input type="tel" required pattern="[0-9]{10}" class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Enter 10-digit mobile number">
                    </div>
                     <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm">
                        <i data-feather="calendar" class="w-4 h-4"></i> Submit Request
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script>
        const doctorsData = [
             // Default / Template Profile (Dr. A K Agarwal)
             {
                id: 'ak-agarwal',
                name: 'Dr. A K Agarwal',
                qualifications: 'MBBS, MD (Medicine)',
                specialty: 'Internal Medicine',
                experience: '25+ Years',
                image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Agrawal.webp',
                specialtyIcon: '',
                description: 'Dr. A K Agarwal is a seasoned Internal Medicine specialist with over 18 years of experience, focusing on heart and chest-related issues.',
                expertise: [
                     'Medicine',
                     'Heart problems',
                     'Chest related issues'
                ],
                education: [
                    { degree: 'MBBS', institution: '', year: '' },
                    { degree: 'MD (Medicine)', institution: 'PMCH, Patna', year: '' },
                    { degree: 'Senior Residency (Cardiology)', institution: 'GB Pant Hospital, New Delhi', year: '' },
                    { degree: 'Senior Residency (Medicine)', institution: 'RIMS', year: '' }
                ],
                memberships: [],
                awards: [],
                publications: [],
                contact: { phone: '+919263630500' }
            },

            // 1. Dr. Rajesh Kumar Jha
            {
                id: 'rajesh-jha',
                name: 'Dr. Rajesh Kumar Jha',
                qualifications: 'MBBS, MD, DM',
                specialty: 'Cardiology',
                experience: '16+ Years',
                image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.webp',
                // specialtyIcon: medicalIcons.cardiology, // logic for icons handled via raw html fallback if needed or add map
                description: 'Dr. Rajesh Kumar Jha is a Cardiologist with over 16 years of experience specializing in interventional cardiology.',
                expertise: ['Interventional Cardiology'],
                education: [
                  { degree: 'DM (Cardiology)', institution: 'Safdarjung Hospital, New Delhi' },
                  { degree: 'MD (Medicine)', institution: 'RIMS, Ranchi' },
                  { degree: 'MBBS', institution: 'TNMC, Mumbai' }
                ],
                memberships: [
                  'AFESC - European Society of Cardiology',
                  'Cardiological Society of India (CSI)'
                ],
                contact: {
                  phone: '+919263630500'
                }
            },

            // 2. Dr. Fuzail Sarwer
            {
                id: 'fuzail-sarwer',
                name: 'Dr. Fuzail Sarwer',
                qualifications: 'MBBS, MD (Anaesthesiology), PDCC (Cardiac Anaesthesia)',
                specialty: 'Critical Care',
                experience: '8+ Years',
                image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Fuzail-Sarwar.webp',
                description: 'Dr. Fuzail Sarwer is a renowned Anaesthesiologist and Critical Care specialist with over 20 years of experience. He is known for his precise diagnosis and empathetic patient care.',
                expertise: [
                  'Anaesthesiology & Pain Management',
                  'Critical Care Medicine',
                  'Trauma Care & Emergency Medicine',
                  'Cardiac Anesthesia',
                  'POCUS (Point Of Care Ultrasound)',
                  'Medical Education & Research Methodology'
                ],
                education: [
                  { degree: 'MBBS', institution: 'Kathihar Medical College', year: '' },
                  { degree: 'MD (Anaesthesiology)', institution: 'Kathihar Medical College', year: '' },
                  { degree: 'PDCC (Cardiac Anaesthesia)', institution: 'RIMS, Ranchi', year: '' }
                ],
                memberships: [
                  'Indian Medical Association',
                  'Indian Society Of Anesthesiologists',
                  'Indian Society of Critical Care Medicine'
                ],
                contact: {
                  phone: '+919263630500'
                }
            },

            // 3. Dr. Rahul Roy
            {
                id: 'rahul-roy',
                name: 'Dr. Rahul Roy',
                qualifications: 'MBBS, DA (Diploma Anesthesia), IDCCM (Critical Care), MBA (Hospital Administration)',
                specialty: 'Critical Care',
                experience: '20+ Years',
                image: 'assets/Doc-Side/Dr Rahul Roy(CCT).webp',
                description: 'Dr. Rahul Roy is a highly experienced Anesthesiologist and Critical Care specialist with over 20 years of expertise. He specializes in critical care medicine, anesthesia, pain management, and end of life care, providing comprehensive and compassionate patient care.',
                expertise: [
                  'Critical Care',
                  'Anesthesia',
                  'Pain Management',
                  'End of Life Care'
                ],
                education: [
                  { degree: 'MBBS', institution: 'MGIMS, Wardha', year: '' },
                  { degree: 'DA (Diploma Anesthesia)', institution: 'MGIMS, Wardha', year: '' },
                  { degree: 'IDCCM (Critical Care)', institution: 'Nagpur University', year: '' },
                  { degree: 'MBA (Hospital Administration)', institution: '', year: '' }
                ],
                memberships: [
                  'Indian Medical Association',
                  'Indian Society of Critical Care Medicine',
                  'European Society of Intensive Care Medicine'
                ],
                contact: {
                  phone: '+919263630500'
                }
            },

            // 4. Dr. Shyam Prasad
            {
                id: 'shyam-prasad',
                name: 'Dr. Shyam Prasad',
                qualifications: 'MBBS, MD MEM',
                specialty: 'Emergency',
                experience: '12+ Years',
                image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Emergency - Dr. Shyam-Prasad.webp',
                description: 'Dr. Shyam Prasad is an experienced emergency medicine specialist with over 12 years of practice. He serves as the Consultant Head of the Department of Emergency at Raj Hospital and is affiliated with SEMI. He is dedicated to handling all kinds of emergency medical situations and trauma care.',
                expertise: [
                  'Emergency Medical Care',
                  'All Types of Trauma'
                ],
                education: [
                  { degree: 'MBBS', institution: 'Smolensk State Medical Academy, Russia', year: '' },
                  { degree: 'MD MEM', institution: 'G.W.U & Amri Bhubaneswar', year: '' }
                ],
                memberships: [
                  'SEMI'
                ],
                awards: [
                  { title: 'Consultant Head', organization: 'Department Of Emergency, Raj Hospital', year: '' }
                ],
                contact: {
                  phone: '+919263630500'
                }
            },

            // 5. Dr. Ravish Ranjan
            {
                id: 'ravish-ranjan',
                name: 'Dr. Ravish Ranjan',
                qualifications: 'MBBS, MD (Internal Medicine), DNB Super Specialty',
                specialty: 'Gastroenterology',
                experience: '12 Years',
                image: 'assets/Doc-Side/Gastroenterologist - Dr. Ravish Ranjan.webp',
                description: 'Dr. Ravish Ranjan is an experienced gastroenterologist specializing in advanced diagnostic and therapeutic endoscopy with 12 years of expertise. He is dedicated to providing personalized and comprehensive care for complex gastrointestinal conditions.',
                expertise: [
                  'Therapeutic and Diagnostic Advance Upper GI Endoscopy',
                  'Therapeutic and Diagnostic Advance Lower GI Endoscopy (Colonoscopy)',
                  'ERCP – Management of advanced CBD, Pancreatic Duct & Gallbladder Diseases',
                  'EUS',
                  'Fibro Scan',
                  'Capsule Endoscopy',
                  'Hepatology Unit – Dealing with ALF and Complications of CLD',
                  'Breath Test',
                  'Manometry – Esophageal & Anal',
                  'IBD Clinic',
                  'Pancreatic Disorder',
                  'Esophageal Disorder',
                  'Enteral Stenting'
                ],
                education: [
                  { degree: 'MBBS', institution: 'RIMS', year: '' },
                  { degree: 'MD (Internal Medicine)', institution: 'PMCH, Patna', year: '' },
                  { degree: 'DNB Super Specialty', institution: 'IGIMS, Patna', year: '' }
                ],
                contact: {
                  phone: '+919263630500'
                }
            }
        ];

        // Ensure we cover the case where 'ak-agarwal' is requested
        // The ID in previous file was 'ak-agarwal'. In React file it was 'ashok-kr-agarwal' commented out.
        // I've mapped 'ak-agarwal' to the full data above.

        document.addEventListener('DOMContentLoaded', () => {
            const params = new URLSearchParams(window.location.search);
            const doctorId = params.get('id') || 'ak-agarwal'; // Default to AK Agarwal if no ID, per instruction
            
            const doctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];

            if (!doctor) {
                 document.getElementById('profile-container').innerHTML = `<div class="py-20 text-center"><h2 class="text-2xl font-semibold">Doctor profile not found</h2></div>`;
                 return;
            }

            // Render Profile
            const container = document.getElementById('profile-container');
            container.innerHTML = `
                <section class="bg-gradient-to-br from-primary-50 to-secondary-50 mt-28 py-12 fade-in">
                    <div class="max-w-7xl mx-auto px-4">
                        <div class="md:flex md:items-start md:gap-12">
                             <!-- Left: Image & Info -->
                             <div class="md:flex-1 space-y-8">
                                <div class="flex flex-col md:flex-row md:items-center md:gap-8 items-center text-center md:text-left">
                                     <div class="relative w-48 h-48 md:w-64 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
                                        <img src="${doctor.image}" alt="${doctor.name}" class="w-full h-full object-cover object-top" onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'">
                                    </div>
                                    <div class="flex-1 mt-6 md:mt-0">
                                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">${doctor.name}</h1>
                                        <p class="text-xl text-primary-600 font-medium mb-2">${doctor.qualifications}</p>
                                        <p class="text-lg text-secondary-600 font-medium mb-4">${doctor.specialty}</p>

                                        <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-gray-700">
                                            <span class="flex items-center"><i data-feather="user" class="w-5 h-5 mr-2 text-gray-500"></i> ${doctor.experience} Experience</span>
                                        </div>

                                        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                            <button onclick="openBookingBase()" class="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-md">
                                                <i data-feather="calendar" class="w-5 h-5"></i><span>Book Appointment</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                 <!-- About Section -->
                                ${doctor.description ? `
                                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">About ${doctor.name}</h2>
                                    <p class="text-gray-700 leading-relaxed">${doctor.description}</p>
                                </div>` : ''}

                                <!-- Expertise -->
                                ${doctor.expertise && doctor.expertise.length > 0 ? `
                                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Areas of Expertise</h2>
                                    <div class="grid md:grid-cols-2 gap-4">
                                        ${doctor.expertise.map(skill => `
                                            <div class="flex items-center space-x-3">
                                                <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                <span class="text-gray-700">${skill}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>` : ''}

                                <!-- Education -->
                                ${doctor.education && doctor.education.length > 0 ? `
                                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Education & Training</h2>
                                    <div class="space-y-6">
                                        ${doctor.education.map(edu => `
                                            <div>
                                                <h3 class="text-lg font-semibold text-gray-900">${edu.degree}</h3>
                                                ${edu.institution ? `<p class="text-gray-600">${edu.institution}</p>` : ''}
                                                ${edu.year ? `<p class="text-sm text-gray-500">${edu.year}</p>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>` : ''}
                             </div>

                             <!-- Right: Contact Form -->
                             <div class="w-full md:w-96 md:sticky md:top-32 self-start rounded-2xl shadow-md bg-white p-6 border border-gray-100 mt-12 md:mt-0">
                                <form class="space-y-6" onsubmit="event.preventDefault(); alert('Message sent!');">
                                    <h3 class="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Quick Contact</h3>
                                    <input type="text" placeholder="Enter your name" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                                    <input type="tel" placeholder="Enter mobile number" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                                    <input type="email" placeholder="Enter email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                                    <textarea rows="3" placeholder="Type your query" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                                    <button type="submit" class="w-full bg-primary-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors shadow-sm">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            `;
            
            // Re-run feather icons
            feather.replace();

            // Trigger animations
            setTimeout(() => {
                document.querySelector('.fade-in').classList.add('fade-in-visible');
            }, 100);

            // Populate Modal Data
            window.openBookingBase = () => {
                document.getElementById('modal-doctor-name').textContent = doctor.name;
                document.getElementById('modal-doctor-specialty').textContent = doctor.specialty;
                document.getElementById('form-doctor-name').value = doctor.name;
                document.getElementById('booking-modal').classList.remove('hidden');
                document.getElementById('booking-modal').classList.add('flex');
            };
        });

        // Modal Close Logic
        const modal = document.getElementById('booking-modal');
        const closeBtn = document.getElementById('close-modal-btn');
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });

         // Header Scroll
        const header = document.getElementById('main-header');
        const logo = document.getElementById('main-logo');
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

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    </script>
</body>
</html>
