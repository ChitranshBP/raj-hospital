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
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
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
                    Our team of highly qualified and experienced doctors are here to provide you with the best medical care
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
                                <i data-feather="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                                <input id="search-input" type="text" placeholder="Search doctors by name or specialty..." 
                                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow"
                                >
                            </div>

                            <!-- Filter Dropdown -->
                            <div class="relative">
                                <label class="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                     <i data-feather="filter" class="w-4 h-4"></i> Filter by Specialty
                                </label>
                                <div class="relative">
                                    <button id="specialty-dropdown-btn" class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-left text-sm sm:text-base flex items-center justify-between">
                                        <span id="selected-specialty">All Specialties</span>
                                        <i data-feather="chevron-down" class="w-5 h-5 text-gray-400 transition-transform" id="dropdown-arrow"></i>
                                    </button>
                                     <div id="specialty-dropdown-menu" class="hidden absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50 transition-all duration-200">
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
                        <button id="clear-filters-btn" class="mt-4 text-primary-600 font-medium hover:underline">Clear Filters</button>
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
                <a href="tel:+919771488888" class="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                    <i data-feather="phone-call" class="w-5 h-5"></i>
                    <span>Call Emergency: +91 977 14 88888</span>
                </a>
            </div>
        </section>
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

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
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
