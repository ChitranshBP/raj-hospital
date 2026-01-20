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
            { id: 'rajesh-jha', name: 'Dr. Rajesh Kumar Jha', qualifications: 'MBBS, MD, DM', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.webp' },
            { id: 'fuzail-sarwer', name: 'Dr. Fuzail Sarwer', qualifications: 'MBBS, MD, PDCC', specialty: 'Critical Care', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Fuzail-Sarwar.webp' },
            { id: 'rahul-roy', name: 'Dr. Rahul Roy', qualifications: 'MBBS, DA, IDCCM', specialty: 'Critical Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr Rahul Roy(CCT).webp' },
            { id: 'shyam-prasad', name: 'Dr. Shyam Prasad', qualifications: 'MBBS, MD MEM', specialty: 'Emergency', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Emergency - Dr. Shyam-Prasad.webp' },
            { id: 'ravish-ranjan', name: 'Dr. Ravish Ranjan', qualifications: 'MBBS, MD, DNB', specialty: 'Gastroenterology', experience: '12 Years', image: 'assets/Doc-Side/Gastroenterologist - Dr. Ravish Ranjan.webp' },
            { id: 'ashish-modi', name: 'Dr. Ashish Kumar Modi', qualifications: 'MBBS, MS', specialty: 'Minimal Access Surgery', experience: '12+ Years', image: 'assets/Doc-Side/General Surgeon - Dr. Ashish Kumar Modi.webp', hasStaticPage: true },
            { id: 'ak-agarwal', name: 'Dr. A K Agarwal', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Agrawal.webp', hasStaticPage: true },
            { id: 'ak-sinha', name: 'Dr. A K Sinha', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Sinha.webp', hasStaticPage: true },
            { id: 'neelam-kumari', name: 'Dr. Neelam Kumari', qualifications: 'MBBS, MD, DNB', specialty: 'Internal Medicine', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/General Physician - Dr. Neelam-Kumari.webp', hasStaticPage: true },
            { id: 'avinash-dubey', name: 'Dr. Avinash Kumar Dubey', qualifications: 'MD, DM', specialty: 'Nephrology', experience: '15+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Nephrologist - Dr. Avinas- Kumar-Dubey.webp', hasStaticPage: true },
            { id: 'vivek-raj', name: 'Dr. Vivek Raj', qualifications: 'MBBS, DNB', specialty: 'Neurosciences', experience: '9+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Neurosurgeon - Dr. Vivek-Raj.webp' },
            { id: 'pk-raina', name: 'Dr. P K Raina', qualifications: 'MBBS, MS', specialty: 'Oncology (Cancer Care)', experience: '20+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Oncologist - Dr. P-K-Raina.webp' },
            { id: 'deepak-verma', name: 'Dr. Deepak Verma', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '25+ Years', image: 'assets/Doc-Side/Orthopedic Surgeon - Dr. Deepak Verma.webp' },
            { id: 'abhijit-kumar', name: 'Dr. Abhijit Kumar', qualifications: 'MBBS, MS, PDCC', specialty: 'ENT', experience: '16+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'mozammil-pheroz', name: 'Dr. Mozammil Pheroz', qualifications: 'MBBS, MS, DNB, Dip.Sports Medicine', specialty: 'Orthopaedics & Joint Replacement', experience: '11+ Years', image: 'assets/Doc-Side/dr-pheroz-raj-removebg-preview.png' },
            { id: 'ujjwal-sinha', name: 'Dr. Ujjwal Sinha', qualifications: 'MBBS, MS, DNB', specialty: 'Orthopaedics & Joint Replacement', experience: '15+ Years', image: 'assets/Doc-Side/ujjwal_sinha_ortho.webp' },
            { id: 'abhishek-roy', name: 'Dr. Abhishek Roy', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '6+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Abhishek-Roy.webp' },
            { id: 'suprova-chakraborty', name: 'Dr. Suprova Chakraborty', qualifications: 'DNB Respiratory Medicine', specialty: 'Pulmonology', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Pulmonologist - Dr. Suprova-Chakraborty.webp' },
            { id: 'sunil-kumar', name: 'Dr. Sunil Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Sunil-Kumar.webp' },
            { id: 'ved-prakash', name: 'Dr. Ved Prakash Verma', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Ved-Prakash-Verma.webp' },
            { id: 'anupama-mahli', name: 'Dr. Anupama Mahli', qualifications: 'MBBS, MS, DNB', specialty: 'Obstetrics & Gynaecology', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Anupama-Mahli.webp' },
            { id: 'pushpa-sinha', name: 'Dr. Pushpa Sinha', qualifications: 'MBBS, MD, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/Gyanecologist - Dr. Pushpa Sinha.webp' },
            { id: 'pankaj-kumar', name: 'Dr. Pankaj Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Aesthetic & Reconstructive Surgery', experience: '12+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'tanushree-chakroborty', name: 'Dr. Tanushree Chakroborty', qualifications: 'MBBS, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/tanushree_gyane.webp' },
            { id: 'suraj-mani-bhattacharjee', name: 'Dr. Suraj Mani Bhattacharjee', qualifications: 'BDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dental-Surgeon - Dr. Surajmani-bhattacharjee.webp' },
            { id: 'piyali-banerjee', name: 'Dr. Piyali Banerjee', qualifications: 'MBBS, DVDL', specialty: 'Dermatology', experience: '12+ Years', image: 'assets/Doc-Side/Dr Piyali Banerjee(Derma).webp' },
            { id: 'tgn-sinha', name: 'Dr. T.G.N. Sinha', qualifications: 'MBBS, MS, FICS', specialty: 'ENT', experience: '45+ Years', image: 'assets/Doc-Side/Dr T G N Sinha ( ENT).webp' },
            { id: 'ranajan-jha', name: 'Dr. Ranajan Kumar Jha', qualifications: 'MBBS, MS, FESS', specialty: 'ENT', experience: '15+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'abhay-pandey', name: 'Dr. Abhay Kumar Pandey', qualifications: 'BPT, MPT, PGDYT', specialty: 'Physiotherapy & Rehabilitation', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.webp' },
            { id: 'shaista-huma', name: 'Dr. Shaista Huma', qualifications: 'MBBS, MD, ACS', specialty: 'Dermatology', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'ahmad-hussain', name: 'Dr. Ahmad Hussain', qualifications: 'MBBS, MD, DrNB', specialty: 'Neurosciences', experience: '5+ Years', image: 'assets/Doc-Side/Dr Ahmad Hussain.webp' },
            { id: 'abhishek-bhattacharjee', name: 'Dr. Abhishek Bhattacharjee', qualifications: 'MBBS, MDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.webp' },
            { id: 'mohib-ahmed', name: 'Dr. Mohib Ahmed', qualifications: 'MBBS, MD, IDCCM', specialty: 'Critical Care', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Mohib-Ahmed.webp' },
            { id: 'pradeep-prasad', name: 'Dr. Pradeep Prasad', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'jitendra-prasad', name: 'Dr. Jitendra Prasad', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '9+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'kriti-kaira', name: 'Dr. Kriti Kaira', qualifications: 'MBBS, MD, PDF', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '3+ Years', image: 'assets/Doc-Side/Dr kirti_kaira_lab.webp' },
            { id: 'ajeet-singh', name: 'Dr. Ajeet Singh', qualifications: 'MBBS, PGD', specialty: 'Administration', experience: '38 Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'sanjeev-kumar-ravi', name: 'Dr. Sanjeev Kumar Ravi', qualifications: 'MBBS, DFM', specialty: 'Family Medicine', experience: '20 Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'B-kumar', name: 'Dr. B Kumar', qualifications: 'MBBS, MS', specialty: 'Minimal Access Surgery', experience: '12 Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'shubham-shekhar', name: 'Dr. Shubham Shekhar', qualifications: 'ACLS, BLS', specialty: 'Emergency', experience: '2 Years', image: 'assets/doc-dummy/male-dummy-raj.webp' },
            { id: 'anup-kumar-jha', name: 'Dr. Anup Kumar Jha', qualifications: 'MBBS, Cardio-Physician', specialty: 'Cardiology', experience: '30+ Years', image: 'assets/Doc-Side/Dr Anup Kumar Jha_.webp' },
            { id: 'shweta-sushmita', name: 'Dr. Shweta Sushmita', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '10+ Years', image: 'assets/Doc-Side/Lab - Dr. Sweta Sushmita.webp' },
            { id: 'praveen-kumar', name: 'Dr. Praveen Kumar', qualifications: 'MBBS, DCP', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '8+ Years', image: 'assets/Doc-Side/Dr Praveen Kumar (Lab).webp' },
            { id: 'sony', name: 'Dr. Sony', qualifications: 'MBBS, DNB, PDCC', specialty: 'Critical Care', experience: '4+ Years', image: 'assets/Doc-Side/Dr Sony (Interventional Pain Medicine).webp' },
            { id: 'parijat-sarkar', name: 'Mr. Parijat Sarkar', qualifications: 'B.Sc, M.Sc', specialty: 'Dietetics & Nutrition', experience: '6+ Years', image: 'assets/Doc-Side/Mr. Parijat Sarkar (Dietetian).webp' },
            { id: 'abid-akhtar', name: 'Dr. Abid Akhtar', qualifications: 'MBBS, MS', specialty: 'Eye Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr. Abid Akhtar (Opthal).webp' },
            { id: 'anil-kumar', name: 'Dr. Anil Kumar', qualifications: 'MBBS, MD', specialty: 'Psychiatry & Mental Health', experience: '40+ Years', image: 'assets/Doc-Side/Dr Anil Kumar (Psychiatry).webp' },
            { id: 'anamika-kumari', name: 'Dr. Anamika Kumari', qualifications: 'MBBS, DNB', specialty: 'Oncology (Cancer Care)', experience: '11+ Years', image: 'assets/Doc-Side/Dr Anamika Onco photo.webp' },
            { id: 'shekhar-sharma', name: 'Dr. Shekhar Sharma', qualifications: 'MBBS, DMRD', specialty: 'Radiology', experience: '20+ Years', image: 'assets/Doc-Side/Dr Shekhar Sharma (Radiologist).webp' },
            { id: 'awnindra-singh', name: 'Dr. Awnindra Kumar Singh', qualifications: 'MBBS, MD, DM', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/-Dr. Awnindra-Kumar-Singh-Cardiologist.webp' },
            { id: 'ravi-shekhar-singh', name: 'Dr. Ravi Shekhar Singh', qualifications: 'MBBS, DCH', specialty: 'Pediatrics & Neonatology', experience: '10+ Years', image: 'assets/specialties/PAEDIATRICS/dr-ravi-shekhar-singh.webp' },
            { id: 'prakash-chandra', name: 'Dr. Prakash Chandra', qualifications: 'MBBS, MS, MCH', specialty: 'Neurosciences', experience: '18+ Years', image: 'assets/Doc-Side/Dr. Prakash Chandra (Neuro Surgeon).webp' },
            { id: 'vijay-raj', name: 'Dr. Vijay Raj', qualifications: 'MBBS, MD, DM', specialty: 'Neurosciences', experience: '15+ Years', image: 'assets/Doc-Side/vijayraj.webp' }
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
