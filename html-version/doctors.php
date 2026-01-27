<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find a Doctor | Raj Hospitals</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/feather-icons"></script>
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

<body class="bg-white">

    <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Main Content -->
    <main class="mt-20">
        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 mt-24">
            <div class="max-w-7xl mx-auto px-4 text-center fade-in">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Find a <span class="text-primary-600">Doctor</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our team of highly qualified and experienced doctors are here to provide you with the best medical
                    care
                </p>
            </div>
        </section>

        <div class="max-w-7xl mx-auto px-4 py-10">
            <div class="flex flex-col md:flex-row gap-8">

                <!-- Sidebar: Search and Filter -->
                <aside class="w-full md:w-1/3 h-fit md:sticky md:top-36 z-10">
                    <div class="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                        <div class="flex flex-col gap-6">
                            <!-- Search -->
                            <div class="relative">
                                <i data-feather="search"
                                    class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input id="search-input" type="text"
                                    placeholder="Search doctors by name or specialty..."
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow">
                            </div>

                            <!-- Filter Dropdown -->
                            <div class="relative">
                                <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <i data-feather="filter" class="w-4 h-4"></i> Filter by Specialty
                                </label>
                                <div class="relative">
                                    <button id="specialty-dropdown-btn"
                                        class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-left text-sm sm:text-base flex items-center justify-between">
                                        <span id="selected-specialty">All Specialties</span>
                                        <i data-feather="chevron-down"
                                            class="w-5 h-5 text-gray-400 transition-transform" id="dropdown-arrow"></i>
                                    </button>
                                    <div id="specialty-dropdown-menu"
                                        class="hidden absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50 transition-all duration-200">
                                        <!-- Options populated by JS -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Doctors Grid -->
                <!-- Exact Layout Match: grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 -->
                <section class="w-full md:w-2/3 bg-gray-50 rounded-xl p-6 min-h-[500px]">
                    <div id="doctors-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        <!-- Cards populated by JS -->
                    </div>
                    <div id="no-results" class="hidden text-center py-12">
                        <p class="text-xl text-gray-600">No doctors found matching your search criteria.</p>
                        <button id="clear-filters-btn" class="mt-4 text-primary-600 font-medium hover:underline">Clear
                            Filters</button>
                    </div>
                </section>
            </div>
        </div>

        <!-- Emergency Contact -->
        <section class="py-12 bg-orange-600">
            <div class="max-w-7xl mx-auto px-4 text-center fade-in">
                <h3 class="text-2xl font-bold text-white mb-4">
                    Need Immediate Medical Assistance?
                </h3>
                <p class="text-orange-100 mb-6">
                    Our emergency department is available 24/7 for urgent medical care
                </p>
                <a href="tel:+919771488888"
                    class="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                    <i data-feather="phone-call" class="w-5 h-5"></i>
                    <span>Call Emergency: +91 977 14 88888</span>
                </a>
            </div>
        </section>
        <script>
            const doctors = [
                { id: 'rajesh-jha', name: 'Dr. Rajesh Kumar Jha', qualifications: 'MBBS, MD, DM', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Cardiologist - Dr. Rajesh-Kumar Jha.webp', hasStaticPage: true },
                { id: 'fuzail-sarwer', name: 'Dr. Fuzail Sarwer', qualifications: 'MBBS, MD, PDCC', specialty: 'Critical Care', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Fuzail-Sarwar.webp', hasStaticPage: true },
                { id: 'rahul-roy', name: 'Dr. Rahul Roy', qualifications: 'MBBS, DA, IDCCM', specialty: 'Critical Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr Rahul Roy(CCT).webp', hasStaticPage: true },
                { id: 'shyam-prasad', name: 'Dr. Shyam Prasad', qualifications: 'MBBS, MD MEM', specialty: 'Emergency', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Emergency - Dr. Shyam-Prasad.webp', hasStaticPage: true },
                { id: 'ravish-ranjan', name: 'Dr. Ravish Ranjan', qualifications: 'MBBS, MD, DNB', specialty: 'Gastroenterology', experience: '12 Years', image: 'assets/Doc-Side/Gastroenterologist - Dr. Ravish Ranjan.webp', hasStaticPage: true },
                { id: 'ashish-modi', name: 'Dr. Ashish Kumar Modi', qualifications: 'MBBS, MS', specialty: 'Minimal Access Surgery', experience: '12+ Years', image: 'assets/Doc-Side/General Surgeon - Dr. Ashish Kumar Modi.webp', hasStaticPage: true },
                { id: 'ak-agarwal', name: 'Dr. A K Agarwal', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Agrawal.webp', hasStaticPage: true },
                { id: 'ak-sinha', name: 'Dr. A K Sinha', qualifications: 'MBBS, MD', specialty: 'Internal Medicine', experience: '25+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Internal Medicine - Dr. A K-Sinha.webp', hasStaticPage: true },
                { id: 'neelam-kumari', name: 'Dr. Neelam Kumari', qualifications: 'MBBS, MD, DNB', specialty: 'Internal Medicine', experience: '8+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/General Physician - Dr. Neelam-Kumari.webp', hasStaticPage: true },
                { id: 'avinash-dubey', name: 'Dr. Avinash Kumar Dubey', qualifications: 'MD, DM', specialty: 'Nephrology', experience: '15+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Nephrologist - Dr. Avinas- Kumar-Dubey.webp', hasStaticPage: true },
                { id: 'vivek-raj', name: 'Dr. Vivek Raj', qualifications: 'MBBS, DNB', specialty: 'Neurosciences', experience: '9+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Neurosurgeon - Dr. Vivek-Raj.webp', hasStaticPage: true },
                { id: 'pk-raina', name: 'Dr. P K Raina', qualifications: 'MBBS, MS', specialty: 'Oncology (Cancer Care)', experience: '20+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Oncologist - Dr. P-K-Raina.webp', hasStaticPage: true },
                { id: 'deepak-verma', name: 'Dr. Deepak Verma', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '25+ Years', image: 'assets/Doc-Side/Orthopedic Surgeon - Dr. Deepak Verma.webp', hasStaticPage: true },
                { id: 'abhijit-kumar', name: 'Dr. Abhijit Kumar', qualifications: 'MBBS, MS, PDCC', specialty: 'ENT', experience: '16+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'mozammil-pheroz', name: 'Dr. Mozammil Pheroz', qualifications: 'MBBS, MS, DNB, Dip.Sports Medicine', specialty: 'Orthopaedics & Joint Replacement', experience: '11+ Years', image: 'assets/Doc-Side/dr-pheroz-raj-removebg-preview.png', hasStaticPage: true },
                { id: 'ujjwal-sinha', name: 'Dr. Ujjwal Sinha', qualifications: 'MBBS, MS, DNB', specialty: 'Orthopaedics & Joint Replacement', experience: '15+ Years', image: 'assets/Doc-Side/ujjwal_sinha_ortho.webp', hasStaticPage: true },
                { id: 'abhishek-roy', name: 'Dr. Abhishek Roy', qualifications: 'MBBS, MS', specialty: 'Orthopaedics & Joint Replacement', experience: '6+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Orthopedic Surgeon - Dr. Abhishek-Roy.webp', hasStaticPage: true },
                { id: 'suprova-chakraborty', name: 'Dr. Suprova Chakraborty', qualifications: 'DNB Respiratory Medicine', specialty: 'Pulmonology', experience: '12+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Pulmonologist - Dr. Suprova-Chakraborty.webp', hasStaticPage: true },
                { id: 'sunil-kumar', name: 'Dr. Sunil Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Sunil-Kumar.webp' },
                { id: 'ved-prakash', name: 'Dr. Ved Prakash Verma', qualifications: 'MBBS, MS, MCh', specialty: 'Urology', experience: '18+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Urologist - Dr. Ved-Prakash-Verma.webp' },
                { id: 'anupama-mahli', name: 'Dr. Anupama Mahli', qualifications: 'MBBS, MS, DNB', specialty: 'Obstetrics & Gynaecology', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Gyanecologist - Dr. Anupama-Mahli.webp', hasStaticPage: true },
                { id: 'pushpa-sinha', name: 'Dr. Pushpa Sinha', qualifications: 'MBBS, MD, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/Gyanecologist - Dr. Pushpa Sinha.webp', hasStaticPage: true },
                { id: 'pankaj-kumar', name: 'Dr. Pankaj Kumar', qualifications: 'MBBS, MS, MCh', specialty: 'Aesthetic & Reconstructive Surgery', experience: '12+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'tanushree-chakroborty', name: 'Dr. Tanushree Chakroborty', qualifications: 'MBBS, DGO', specialty: 'Obstetrics & Gynaecology', experience: '15+ Years', image: 'assets/Doc-Side/tanushree_gyane.webp', hasStaticPage: true },
                { id: 'suraj-mani-bhattacharjee', name: 'Dr. Suraj Mani Bhattacharjee', qualifications: 'BDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dental-Surgeon - Dr. Surajmani-bhattacharjee.webp', hasStaticPage: true },
                { id: 'piyali-banerjee', name: 'Dr. Piyali Banerjee', qualifications: 'MBBS, DVDL', specialty: 'Dermatology', experience: '12+ Years', image: 'assets/Doc-Side/Dr Piyali Banerjee(Derma).webp', hasStaticPage: true },
                { id: 'tgn-sinha', name: 'Dr. T.G.N. Sinha', qualifications: 'MBBS, MS, FICS', specialty: 'ENT', experience: '45+ Years', image: 'assets/Doc-Side/Dr T G N Sinha ( ENT).webp', hasStaticPage: true },
                { id: 'ranajan-jha', name: 'Dr. Ranajan Kumar Jha', qualifications: 'MBBS, MS, FESS', specialty: 'ENT', experience: '15+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'abhay-pandey', name: 'Dr. Abhay Kumar Pandey', qualifications: 'BPT, MPT, PGDYT', specialty: 'Physiotherapy & Rehabilitation', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Physiotherapist - Dr. Abhay-Kumar-Pandey.webp', hasStaticPage: true },
                { id: 'shaista-huma', name: 'Dr. Shaista Huma', qualifications: 'MBBS, MD, ACS', specialty: 'Dermatology', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'ahmad-hussain', name: 'Dr. Ahmad Hussain', qualifications: 'MBBS, MD, DrNB', specialty: 'Neurosciences', experience: '5+ Years', image: 'assets/Doc-Side/Dr Ahmad Hussain.webp', hasStaticPage: true },
                { id: 'abhishek-bhattacharjee', name: 'Dr. Abhishek Bhattacharjee', qualifications: 'MBBS, MDS', specialty: 'Dental', experience: '10+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Maxillofacial Surgeon - Dr. Abhishek-Bhattacharjee.webp', hasStaticPage: true },
                { id: 'mohib-ahmed', name: 'Dr. Mohib Ahmed', qualifications: 'MBBS, MD, IDCCM', specialty: 'Critical Care', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/Dr. Mohib-Ahmed.webp', hasStaticPage: true },
                { id: 'pradeep-prasad', name: 'Dr. Pradeep Prasad', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '10+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'jitendra-prasad', name: 'Dr. Jitendra Prasad', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '9+ Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'kriti-kaira', name: 'Dr. Kriti Kaira', qualifications: 'MBBS, MD, PDF', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '3+ Years', image: 'assets/Doc-Side/Dr kirti_kaira_lab.webp', hasStaticPage: true },
                { id: 'ajeet-singh', name: 'Dr. Ajeet Singh', qualifications: 'MBBS, PGD', specialty: 'Administration', experience: '38 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'sanjeev-kumar-ravi', name: 'Dr. Sanjeev Kumar Ravi', qualifications: 'MBBS, DFM', specialty: 'Family Medicine', experience: '20 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'B-kumar', name: 'Dr. B Kumar', qualifications: 'MBBS, MS', specialty: 'Minimal Access Surgery', experience: '12 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'shubham-shekhar', name: 'Dr. Shubham Shekhar', qualifications: 'ACLS, BLS', specialty: 'Emergency', experience: '2 Years', image: 'assets/doc-dummy/male-dummy-raj.webp', hasStaticPage: true },
                { id: 'anup-kumar-jha', name: 'Dr. Anup Kumar Jha', qualifications: 'MBBS, Cardio-Physician', specialty: 'Cardiology', experience: '30+ Years', image: 'assets/Doc-Side/Dr Anup Kumar Jha_.webp', hasStaticPage: true },
                { id: 'shweta-sushmita', name: 'Dr. Shweta Sushmita', qualifications: 'MBBS, MD', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '10+ Years', image: 'assets/Doc-Side/Lab - Dr. Sweta Sushmita.webp', hasStaticPage: true },
                { id: 'praveen-kumar', name: 'Dr. Praveen Kumar', qualifications: 'MBBS, DCP', specialty: 'FNAC, Biopsy, Blood & Laboratory', experience: '8+ Years', image: 'assets/Doc-Side/Dr Praveen Kumar (Lab).webp', hasStaticPage: true },
                { id: 'sony', name: 'Dr. Sony', qualifications: 'MBBS, DNB, PDCC', specialty: 'Critical Care', experience: '4+ Years', image: 'assets/Doc-Side/Dr Sony (Interventional Pain Medicine).webp', hasStaticPage: true },
                { id: 'parijat-sarkar', name: 'Mr. Parijat Sarkar', qualifications: 'B.Sc, M.Sc', specialty: 'Dietetics & Nutrition', experience: '6+ Years', image: 'assets/Doc-Side/Mr. Parijat Sarkar (Dietetian).webp', hasStaticPage: true },
                { id: 'abid-akhtar', name: 'Dr. Abid Akhtar', qualifications: 'MBBS, MS', specialty: 'Eye Care', experience: '20+ Years', image: 'assets/Doc-Side/Dr. Abid Akhtar (Opthal).webp', hasStaticPage: true },
                { id: 'anil-kumar', name: 'Dr. Anil Kumar', qualifications: 'MBBS, MD', specialty: 'Psychiatry & Mental Health', experience: '40+ Years', image: 'assets/Doc-Side/Dr Anil Kumar (Psychiatry).webp', hasStaticPage: true },
                { id: 'anamika-kumari', name: 'Dr. Anamika Kumari', qualifications: 'MBBS, DNB', specialty: 'Oncology (Cancer Care)', experience: '11+ Years', image: 'assets/Doc-Side/Dr Anamika Onco photo.webp', hasStaticPage: true },
                { id: 'shekhar-sharma', name: 'Dr. Shekhar Sharma', qualifications: 'MBBS, DMRD', specialty: 'Radiology', experience: '20+ Years', image: 'assets/Doc-Side/Dr Shekhar Sharma (Radiologist).webp', hasStaticPage: true },
                { id: 'awnindra-singh', name: 'Dr. Awnindra Kumar Singh', qualifications: 'MBBS, MD, DM', specialty: 'Cardiology', experience: '16+ Years', image: 'assets/Raj-hospital-doctor-image/Raj-hospital-doctor-image/-Dr. Awnindra-Kumar-Singh-Cardiologist.webp', hasStaticPage: true },
                { id: 'ravi-shekhar-singh', name: 'Dr. Ravi Shekhar Singh', qualifications: 'MBBS, DCH', specialty: 'Pediatrics & Neonatology', experience: '10+ Years', image: 'assets/specialties/PAEDIATRICS/dr-ravi-shekhar-singh.webp', hasStaticPage: true },
                { id: 'prakash-chandra', name: 'Dr. Prakash Chandra', qualifications: 'MBBS, MS, MCH', specialty: 'Neurosciences', experience: '18+ Years', image: 'assets/Doc-Side/Dr. Prakash Chandra (Neuro Surgeon).webp', hasStaticPage: true },
                { id: 'vijay-raj', name: 'Dr. Vijay Raj', qualifications: 'MBBS, MD, DM', specialty: 'Neurosciences', experience: '15+ Years', image: 'assets/Doc-Side/vijayraj.webp', hasStaticPage: true }
            ];

            const doctorsGrid = document.getElementById('doctors-grid');
            const specialtyDropdownBtn = document.getElementById('specialty-dropdown-btn');
            const searchInput = document.getElementById('search-input');
            const specialtyDropdownMenu = document.getElementById('specialty-dropdown-menu');
            const selectedSpecialtyText = document.getElementById('selected-specialty');
            const dropdownArrow = document.getElementById('dropdown-arrow');
            const noResults = document.getElementById('no-results');
            const clearFiltersBtn = document.getElementById('clear-filters-btn');

            // State
            let searchTerm = '';
            let selectedSpecialty = 'All';

            // Initialize
            document.addEventListener('DOMContentLoaded', () => {
                // Populate dropdown
                const specialties = ['All', ...new Set(doctors.map(d => d.specialty).filter(Boolean))];
                specialties.sort().forEach(specialty => {
                    const btn = document.createElement('button');
                    btn.className = `w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors ${specialty === 'All' ? 'font-medium' : 'text-gray-700'}`;
                    btn.textContent = specialty;
                    btn.addEventListener('click', () => {
                        selectedSpecialty = specialty;
                        selectedSpecialtyText.textContent = specialty === 'All' ? 'All Specialties' : specialty;
                        specialtyDropdownMenu.classList.add('hidden');
                        dropdownArrow.classList.remove('rotate-180');
                        filterDoctors();
                    });
                    specialtyDropdownMenu.appendChild(btn);
                });

                renderDoctors(doctors.sort((a, b) => a.name.localeCompare(b.name)));
                feather.replace();
            });

            // Toggle Dropdown
            specialtyDropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                specialtyDropdownMenu.classList.toggle('hidden');
                dropdownArrow.classList.toggle('rotate-180');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                specialtyDropdownMenu.classList.add('hidden');
                dropdownArrow.classList.remove('rotate-180');
            });

            // Search Input
            searchInput.addEventListener('input', (e) => {
                searchTerm = e.target.value;
                filterDoctors();
            });

            // Clear Filters
            clearFiltersBtn.addEventListener('click', () => {
                searchTerm = '';
                selectedSpecialty = 'All';
                searchInput.value = '';
                selectedSpecialtyText.textContent = 'All Specialties';
                filterDoctors();
            });

            function filterDoctors() {
                const filtered = doctors.filter(doctor => {
                    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (doctor.specialty && doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()));
                    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
                    return matchesSearch && matchesSpecialty;
                });
                renderDoctors(filtered);
            }

            function renderDoctors(data) {
                doctorsGrid.innerHTML = '';

                if (data.length === 0) {
                    noResults.classList.remove('hidden');
                } else {
                    noResults.classList.add('hidden');
                    data.forEach((doctor, index) => {
                        const card = document.createElement('div');
                        card.className = "bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group fade-in flex flex-col h-full";
                        card.style.animationDelay = `${index * 0.05}s`;

                        const profileLink = doctor.hasStaticPage ? `doctors/${doctor.id}.php` : `doctor-profile.php?id=${doctor.id}`;

                        card.innerHTML = `
                         <div class="relative overflow-hidden h-48 sm:h-56 shrink-0">
                            <img src="${doctor.image}" alt="${doctor.name}" 
                                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                onerror="this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'">
                        </div>
                        <div class="p-5 flex flex-col flex-grow">
                             <h3 class="text-lg font-semibold text-gray-900 mb-1">${doctor.name}</h3>
                            <p class="text-primary-600 text-sm font-medium mb-1">${doctor.qualifications}</p>
                            <p class="text-gray-600 text-sm mb-3">${doctor.specialty}</p>
                            
                            <div class="mt-auto flex gap-2">
                                <a href="${profileLink}" class="flex-1 bg-primary-500 text-white py-1.5 rounded-md hover:bg-primary-600 transition-colors text-xs font-medium text-center shadow-sm">View Profile</a>
                                <a href="contact.php" class="flex-1 bg-white text-primary-600 border border-primary-600 py-1.5 rounded-md hover:bg-primary-50 transition-colors text-xs font-medium text-center">Book Apt.</a>
                            </div>
                        </div>
                    `;
                        doctorsGrid.appendChild(card);
                    });

                    // Trigger animations
                    setTimeout(() => {
                        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
                    }, 100);
                }
            }

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

            // Intersection Observer for Animations (Fade In)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        </script>
</body>

</html>