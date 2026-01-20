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
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] mt-32 py-16">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center fade-in">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Careers at <span class="text-[#ea5234]">Raj Hospitals</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our team of dedicated healthcare professionals and make a difference in people's lives
                </p>
            </div>
        </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="py-8 bg-white border-b border-gray-100 shadow-sm sticky top-[100px] z-30">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div class="relative flex-1 w-full md:max-w-md">
                    <i data-feather="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                    <input type="text" id="job-search" placeholder="Search job titles or keywords..." class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none transition-shadow" oninput="filterJobs()">
                </div>
                <div class="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <div class="flex items-center space-x-2 w-full md:w-auto">
                        <select id="department-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none w-full md:w-auto bg-white" onchange="filterJobs()">
                            <option value="All">All Departments</option>
                            <!-- Populated by JS -->
                        </select>
                    </div>
                    <select id="type-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none w-full md:w-auto bg-white" onchange="filterJobs()">
                        <option value="All">All Job Types</option>
                       <!-- Populated by JS -->
                    </select>
                </div>
            </div>
        </div>
    </section>

    <!-- Jobs Listing Section -->
    <section class="py-16 bg-gray-50 min-h-[400px]">
        <div class="max-w-7xl mx-auto px-4">
            <div id="jobs-container" class="space-y-6">
                <!-- Javascript will populate this -->
            </div>
            <div id="no-jobs-message" class="hidden text-center py-12">
                <p class="text-xl text-gray-600">No job openings found matching your search criteria.</p>
            </div>
        </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12 fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Why Join <span class="text-[#ea5234]">Raj Hospitals</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer a supportive and rewarding environment for healthcare professionals to grow and make a difference
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Benefit 1 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="trending-up" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Professional Growth</h3>
                    <p class="text-gray-700">Continuous learning opportunities, specialized training programs, and career advancement paths for all staff members.</p>
                </div>
                <!-- Benefit 2 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow delay-100">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="monitor" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Modern Facilities</h3>
                    <p class="text-gray-700">Work with state-of-the-art medical equipment and technology in a well-maintained and comfortable environment.</p>
                </div>
                 <!-- Benefit 3 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow delay-200">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="users" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Supportive Culture</h3>
                    <p class="text-gray-700">Collaborative work environment with supportive leadership and emphasis on work-life balance.</p>
                </div>
                 <!-- Benefit 4 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="package" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Competitive Benefits</h3>
                    <p class="text-gray-700">Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.</p>
                </div>
                 <!-- Benefit 5 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow delay-100">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="heart" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Community Impact</h3>
                    <p class="text-gray-700">Opportunity to make a meaningful difference in the lives of patients and contribute to community health.</p>
                </div>
                 <!-- Benefit 6 -->
                <div class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] p-6 rounded-xl fade-in hover:shadow-lg transition-shadow delay-200">
                    <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <i data-feather="book-open" class="w-6 h-6 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">Learning & Development</h3>
                    <p class="text-gray-700">Regular CME programs, workshops, conferences, and sponsorship for higher education and specialization.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-[#fc684b] to-[#0eb3e9]">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <div class="fade-in">
                <h3 class="text-3xl font-bold text-white mb-4">Don't See a Suitable Position?</h3>
                <p class="text-xl text-[#fde9e6] mb-8 max-w-2xl mx-auto">
                    We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
                </p>
                <button onclick="openApplicationModal(null, true)" class="bg-white text-[#ea5234] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center space-x-2 shadow-lg">
                    <i data-feather="send" class="w-5 h-5"></i>
                    <span>Send Spontaneous Application</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Application Modal -->
    <div id="application-modal" class="fixed inset-0 bg-black bg-opacity-75 flex z-50 p-4 hidden overflow-y-auto w-full h-full" onclick="closeApplicationModal()">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl m-auto relative" onclick="event.stopPropagation()">
            <!-- Modal Header -->
            <div class="flex justify-between items-start p-6 border-b border-gray-100">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900" id="modal-title">Apply for Position</h2>
                    <p class="text-gray-600 text-sm mt-1" id="modal-subtitle">Join our team</p>
                </div>
                <button onclick="closeApplicationModal()" class="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6 md:p-8">
                <form class="space-y-6" onsubmit="handleFormSubmit(event)">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter your first name">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter your last name">
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-6">
                         <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter your email">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter your phone number">
                        </div>
                    </div>

                    <div id="position-select-container">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Position Applying For *</label>
                         <select id="modal-position-select" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none bg-white">
                            <option value="">Select a position</option>
                            <!-- Populated JS -->
                        </select>
                    </div>
                     <div id="custom-position-container" class="hidden">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Specify Position *</label>
                        <input type="text" id="custom-position-input" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter the position you're interested in">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                        <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none bg-white">
                            <option value="">Select experience</option>
                            <option value="0-1">Less than 1 year</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">More than 10 years</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Upload Resume/CV *</label>
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#ea5234] transition-colors cursor-pointer bg-gray-50">
                            <i data-feather="upload" class="w-10 h-10 text-gray-400 mx-auto mb-4"></i>
                            <p class="text-gray-500 mb-2 font-medium">Click to upload or drag and drop</p>
                            <p class="text-xs text-gray-400">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                            <input type="file" class="hidden" accept=".pdf,.doc,.docx">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                        <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Tell us why you're interested in this position..."></textarea>
                    </div>

                     <div class="flex items-start">
                        <input type="checkbox" id="consent" required class="mt-1 mr-2 w-4 h-4 text-[#ea5234] focus:ring-[#ea5234] border-gray-300 rounded">
                        <label for="consent" class="text-sm text-gray-600 cursor-pointer">
                            I consent to Raj Hospitals storing and processing my personal data for the purpose of this job application. *
                        </label>
                    </div>

                    <button type="submit" class="w-full bg-[#ea5234] text-white py-4 rounded-lg hover:bg-[#d64528] transition-colors font-semibold text-lg flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform active:scale-[0.98]">
                        <i data-feather="send" class="w-5 h-5"></i>
                        <span>Submit Application</span>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        // Job Openings Data
        const jobs = [
            {
                id: 1,
                title: "General Duty Assistant",
                department: "Support Staff",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "8",
                description: "We are seeking dedicated General Duty Assistants to support our healthcare team in providing quality patient care and maintaining hospital operations.",
                requirements: ["GDA qualification", "0-1 year of experience", "Good communication skills"],
                responsibilities: ["Assist nursing staff", "Maintain cleanliness", "Transport patients"]
            },
            {
                id: 2,
                title: "Ward Boy",
                department: "Support Staff",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "10",
                description: "Join our team as a Ward Boy to assist in patient care and hospital maintenance. We are looking for dedicated individuals to support our healthcare services.",
                requirements: ["Matriculation (10th pass)", "0-1 year of experience", "Physical fitness"],
                responsibilities: ["Assist in patient care", "Maintain ward hygiene", "Transport equipment"]
            },
            {
                id: 3,
                title: "Ward Girl",
                department: "Support Staff",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "6",
                description: "We are looking for dedicated Ward Girls to provide support in patient care and maintain cleanliness in hospital wards.",
                requirements: ["Matriculation (10th pass)", "0-1 year of experience", "Caring attitude"],
                responsibilities: ["Assist female patients", "Maintain cleanliness", "Support nursing staff"]
            },
            {
                id: 4,
                title: "Resident Medical Officer",
                department: "Medical",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "3",
                description: "We are seeking qualified MBBS doctors to join as Resident Medical Officers. Provide quality medical care and emergency services in our hospital.",
                requirements: ["MBBS degree", "1-3 years clinical experience", "Valid registration"],
                responsibilities: ["Patient care", "Emergency handling", "Ward rounds"]
            },
            {
                id: 5,
                title: "Assistant Nurse Supervisor",
                department: "Nursing",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "1",
                description: "Join our nursing leadership team as Assistant Nurse Supervisor. Lead and mentor nursing staff to deliver exceptional patient care.",
                requirements: ["B.Sc/M.Sc in Nursing", "5-8 years experience", "Leadership skills"],
                responsibilities: ["Supervise nursing staff", "Ensure quality care", "Staff training"]
            },
            {
                id: 6,
                title: "Executive Accountant",
                department: "Accounts",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "1",
                description: "We are seeking an experienced Executive Accountant to manage financial operations and ensure accurate accounting for our hospital.",
                requirements: ["B.Com/M.Com degree", "1-2 years experience", "Accounting software knowledge"],
                responsibilities: ["Financial records", "Billing processing", "Compliance"]
            },
             {
                id: 7,
                title: "Multi Organ Transplant Coordinator",
                department: "Medical",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "1",
                description: "Join our specialized transplant team as a coordinator to facilitate and manage multi-organ transplant procedures and donor coordination.",
                requirements: ["BSW/MSW degree", "1 year experience", "Transplant protocol knowledge"],
                responsibilities: ["Coordinate transplants", "Liaise with families", "Maintain documentation"]
            },
            {
                id: 8,
                title: "Consultant Radiology",
                department: "Radiology",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "1",
                description: "We are seeking a qualified Radiology Consultant to provide expert diagnostic imaging services and interpretation.",
                requirements: ["DMRD/MD/MD Radiology", "0-3 years experience", "Interventional skills"],
                responsibilities: ["Interpret imaging", "Perform procedures", "Consult with teams"]
            },
            {
                id: 9,
                title: "Executive Operations",
                department: "Operations",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "5",
                description: "Join our operations team to support smooth functioning of hospital services and patient care operations.",
                requirements: ["Any Graduate", "0-3 years experience", "Organizational skills"],
                responsibilities: ["Coordinate operations", "Patient admission/discharge", "Documentation"]
            },
            {
                id: 10,
                title: "Executive Billing",
                department: "Billing",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "3",
                description: "We are looking for billing executives to manage patient billing, insurance claims, and financial documentation.",
                requirements: ["B.Com/M.Com", "0-3 years experience", "Billing knowledge"],
                responsibilities: ["Process billing", "Insurance claims", "Resolve queries"]
            },
             {
                id: 11,
                title: "Clinical Pharmacologist",
                department: "Pharmacy",
                location: "Ranchi, Jharkhand",
                type: "Full-time",
                positions: "1",
                description: "Join our pharmacy team as a Clinical Pharmacologist to provide expert pharmaceutical care and medication management.",
                requirements: ["Pharm.D", "0-1 year experience", "Pharmacology knowledge"],
                responsibilities: ["Monitor medication", "Provide drug info", "Counseling"]
            }
        ];

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

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Populate Filters and Initial Render
        function initPage() {
            const departmentSelect = document.getElementById('department-filter');
            const typeSelect = document.getElementById('type-filter');
            const modalPositionSelect = document.getElementById('modal-position-select');

            // Get unique departments and types
            const departments = [...new Set(jobs.map(job => job.department))].sort();
            const types = [...new Set(jobs.map(job => job.type))].sort();

            // Populate Department Filter
            departments.forEach(dept => {
                const option = document.createElement('option');
                option.value = dept;
                option.textContent = dept;
                departmentSelect.appendChild(option);
            });

            // Populate Type Filter
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                typeSelect.appendChild(option);
            });

            // Populate Modal Position Select
            jobs.forEach(job => {
                const option = document.createElement('option');
                option.value = job.title;
                option.textContent = `${job.title} (${job.positions} openings)`;
                modalPositionSelect.appendChild(option);
            });
             // Add Spontaneous option to modal
             const spontaneousOption = document.createElement('option');
             spontaneousOption.value = 'Spontaneous Application';
             spontaneousOption.textContent = 'Spontaneous Application';
             modalPositionSelect.appendChild(spontaneousOption);


            // Initial Render
            renderJobs(jobs);
        }

        // Render Jobs Function
        function renderJobs(jobsToRender) {
            const container = document.getElementById('jobs-container');
            const noJobsMsg = document.getElementById('no-jobs-message');

            container.innerHTML = '';

            if (jobsToRender.length === 0) {
                noJobsMsg.classList.remove('hidden');
                return;
            } else {
                noJobsMsg.classList.add('hidden');
            }

            jobsToRender.forEach((job, index) => {
                const jobCard = document.createElement('div');
                jobCard.className = 'bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden fade-in';
                jobCard.style.animationDelay = `${index * 0.1}s`;
                
                jobCard.innerHTML = `
                    <div class="p-6">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-2">
                                    ${job.title}
                                </h3>
                                <div class="flex flex-wrap items-center gap-4">
                                    <span class="flex items-center text-gray-600 text-sm">
                                        <i data-feather="briefcase" class="w-4 h-4 mr-1"></i>
                                        ${job.department}
                                    </span>
                                    <span class="flex items-center text-gray-600 text-sm">
                                        <i data-feather="map-pin" class="w-4 h-4 mr-1"></i>
                                        ${job.location}
                                    </span>
                                    <span class="flex items-center text-gray-600 text-sm">
                                        <i data-feather="clock" class="w-4 h-4 mr-1"></i>
                                        ${job.type}
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <span class="text-sm font-semibold text-[#ea5234]">
                                    Openings: ${job.positions}
                                </span>
                                <button onclick="openApplicationModal('${job.title}')" class="bg-[#ea5234] text-white px-4 py-2 rounded-lg hover:bg-[#d64528] transition-colors font-medium text-sm">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        <p class="text-gray-600 mt-4 line-clamp-2">
                            ${job.description}
                        </p>
                    </div>
                `;
                container.appendChild(jobCard);
            });
            feather.replace();
            
            // Re-observe new elements for animation
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        }

        // Filter Function
        function filterJobs() {
            const searchTerm = document.getElementById('job-search').value.toLowerCase();
            const department = document.getElementById('department-filter').value;
            const type = document.getElementById('type-filter').value;

            const filtered = jobs.filter(job => {
                const matchesSearch = job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm);
                const matchesDept = department === 'All' || job.department === department;
                const matchesType = type === 'All' || job.type === type;
                return matchesSearch && matchesDept && matchesType;
            });

            renderJobs(filtered);
        }

        // Modal Logic
        function openApplicationModal(positionTitle = null, isSpontaneous = false) {
            const modal = document.getElementById('application-modal');
            const positionSelect = document.getElementById('modal-position-select');
            const customPositionContainer = document.getElementById('custom-position-container');
            const modalTitle = document.getElementById('modal-title');
            
            if (isSpontaneous) {
                modalTitle.textContent = 'Spontaneous Application';
                positionSelect.value = 'Spontaneous Application';
                customPositionContainer.classList.remove('hidden');
                document.getElementById('custom-position-input').required = true;
            } else if (positionTitle) {
                modalTitle.textContent = `Apply for ${positionTitle}`;
                positionSelect.value = positionTitle;
                customPositionContainer.classList.add('hidden');
                 document.getElementById('custom-position-input').required = false;
            } else {
                 modalTitle.textContent = 'Apply for Position';
                 positionSelect.value = "";
                 customPositionContainer.classList.add('hidden');
                  document.getElementById('custom-position-input').required = false;
            }

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeApplicationModal() {
            const modal = document.getElementById('application-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Handle Position Select Change in Modal
        document.getElementById('modal-position-select').addEventListener('change', function(e) {
            const customPositionContainer = document.getElementById('custom-position-container');
            const customInput = document.getElementById('custom-position-input');
            
            if (e.target.value === 'Spontaneous Application') {
                customPositionContainer.classList.remove('hidden');
                customInput.required = true;
            } else {
                customPositionContainer.classList.add('hidden');
                customInput.required = false;
            }
        });

        // Form Submit
        function handleFormSubmit(e) {
            e.preventDefault();
            // Simulate submission
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `<i data-feather="loader" class="w-5 h-5 animate-spin"></i><span>Sending...</span>`;
            feather.replace();
            btn.disabled = true;

            setTimeout(() => {
                alert('Application submitted successfully! Our HR team will contact you soon.');
                closeApplicationModal();
                e.target.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        }

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

        document.addEventListener('DOMContentLoaded', () => {
             // Initialize Feathers
            feather.replace();

            // Init Page
            initPage();

            // Initialize Animations
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>
