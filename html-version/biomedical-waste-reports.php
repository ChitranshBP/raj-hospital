<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biomedical Waste Reports | Raj Hospitals</title>
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
                        }
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-white">

    <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] mt-32 py-16">
        <div class="max-w-7xl mx-auto px-4">
            <nav class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                <a href="index.php" class="hover:text-[#F9771B] transition-colors">Home</a>
                <span>/</span>
                <span class="text-[#F9771B] font-medium">Biomedical Waste Reports</span>
            </nav>

             <div class="text-center fade-in">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-16 h-16 bg-[#fde9e6] rounded-full flex items-center justify-center mr-4">
                        <i data-feather="shield" class="w-8 h-8 text-[#ea5234]"></i>
                    </div>
                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900">
                        Biomedical Waste <span class="text-[#F9771B]">Reports</span>
                    </h1>
                </div>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Monthly biomedical waste management reports demonstrating our commitment to environmental safety and regulatory compliance
                </p>
            </div>
        </div>
    </section>

    <!-- Reports Section -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Filter -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                   <h2 class="text-3xl font-bold text-gray-900 mb-2">Monthly Reports</h2>
                   <p class="text-gray-600">Select year to view biomedical waste reports</p>
                </div>
                
                <div class="flex items-center space-x-2 mt-4 sm:mt-0">
                    <i data-feather="calendar" class="w-5 h-5 text-gray-600"></i>
                    <select id="year-select" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F9771B] focus:border-[#F9771B] bg-white text-gray-700 font-medium cursor-pointer transition-colors hover:border-[#F9771B]">
                        <!-- Options populated by JS -->
                    </select>
                </div>
            </div>

            <!-- Grid -->
            <div id="reports-container" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Cards populated by JS -->
            </div>

            <!-- Summary Statistics -->
            <div id="stats-container" class="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <!-- Stats populated by JS -->
            </div>
        </div>
    </section>


    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        // DATA
        const reports = {
             2025: [
              { month: 'January', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/BMW-January-2025.pdf' },
              { month: 'February', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/FEB-2025.pdf' },
              { month: 'March', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/March-PDF.pdf' },
              { month: 'April', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/April-PDF.pdf' },
              { month: 'May', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/bmw-may-2025.pdf' },
              { month: 'June', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/BMW _ JUNE-2025.pdf' },
              { month: 'July', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/Biomedical-Waste-report-July 25.pdf' },
              { month: 'August', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/Biomedical-waste-report-August25.pdf' },
              { month: 'September', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/Biomedical waste Report September 25.pdf' },
              { month: 'November', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/Biomedical waste Report Nov 25.pdf' },
              { month: 'December', year: '2025', status: 'completed', pdfUrl: 'assets/bmw/BMW Report december 25.pdf' }
            ],
            2024: [
              { month: 'January', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW JANUARY 2024.pdf' },
              { month: 'February', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW FEBRUARY 2024.pdf' },
              { month: 'March', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW MARCH 2024.pdf' },
              { month: 'April', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW APRIL 2024.pdf' },
              { month: 'May', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW MAY 2024.pdf' },
              { month: 'June', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW JUNE 2024.pdf' },
              { month: 'July', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW JULY 2024.pdf' },
              { month: 'August', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW AUGUST 2024.pdf' },
              { month: 'September', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW SEPTEMBER 2024.pdf' },
              { month: 'October', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW OCTOBER 2024.pdf' },
              { month: 'November', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/BMW NOVEMBER 2024.pdf' },
              { month: 'December', year: '2024', status: 'completed', pdfUrl: 'assets/bmw/dec-2024.pdf' }
            ],
            2023: [
              { month: 'January', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/JAN_001.pdf' },
              { month: 'February', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/FEB._001.pdf' },
              { month: 'March', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/MAR_001.pdf' },
              { month: 'April', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/APR_001.pdf' },
              { month: 'May', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/MAY_001.pdf' },
              { month: 'June', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/JUN_001.pdf' },
              { month: 'July', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/JUL_001.pdf' },
              { month: 'August', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/AUG_001.pdf' },
              { month: 'September', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/Monthly-BMW-Sep-23.pdf' },
              { month: 'October', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/Monthly-BMW-Oct-23.pdf' },
              { month: 'November', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/Monthly-BMW-Nov-23.pdf' },
              { month: 'December', year: '2023', status: 'completed', pdfUrl: 'assets/bmw/Monthly-BMW-Dec-23.pdf' }
            ]
        };

        const availableYears = Object.keys(reports).sort((a, b) => b - a);
        let selectedYear = availableYears[0];

        function renderYearOptions() {
            const select = document.getElementById('year-select');
            select.innerHTML = availableYears.map(year => 
                `<option value="${year}" ${year === selectedYear ? 'selected' : ''}>${year}</option>`
            ).join('');

            select.addEventListener('change', (e) => {
                selectedYear = e.target.value;
                renderReports();
            });
        }

        function renderReports() {
            const container = document.getElementById('reports-container');
            const data = reports[selectedYear] || [];

            container.innerHTML = data.map((report, index) => `
                <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 fade-in" style="animation-delay: ${index * 0.05}s">
                    <div class="w-16 h-16 bg-[#f0fbff] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                         <i data-feather="file-text" class="w-8 h-8 text-[#ea5234]"></i>
                    </div>
                    <div class="text-center mb-6">
                        <h3 class="text-lg font-bold text-gray-900 mb-1 leading-tight">${report.month} ${report.year}</h3>
                         <p class="text-sm text-gray-600">Biomedical Waste Report</p>
                    </div>
                    <button onclick="window.open('${report.pdfUrl}', '_blank')" class="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-[#ea5234] rounded-lg hover:bg-[#d64528] transition-colors">
                        <i data-feather="download" class="w-4 h-4 mr-2"></i>
                        Download Report
                    </button>
                </div>
            `).join('');
            
            feather.replace();
             // Re-trigger observer
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
            
            renderStats();
        }

        function renderStats() {
            const container = document.getElementById('stats-container');
            const data = reports[selectedYear] || [];
            
            const total = data.length;
            const completed = data.filter(r => r.status === 'completed').length;
            // Assuming simplified logic where if it's in the list it's either completed or pending, 
            // but the data source only has 'completed'. adhering to react logic:
            const pending = data.filter(r => r.status === 'pending').length;
            const compliance = total > 0 ? "100%" : "0%";

            container.innerHTML = `
                <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 fade-in">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i data-feather="file-text" class="w-6 h-6 text-blue-600"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-600">Total Reports</p>
                            <p class="text-2xl font-bold text-gray-900">${total}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 fade-in" style="animation-delay: 0.1s">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <i data-feather="check-circle" class="w-6 h-6 text-green-600"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-600">Completed</p>
                            <p class="text-2xl font-bold text-green-600">${completed}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 fade-in" style="animation-delay: 0.2s">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <i data-feather="calendar" class="w-6 h-6 text-yellow-600"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-600">Pending</p>
                            <p class="text-2xl font-bold text-yellow-600">${pending}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 fade-in" style="animation-delay: 0.3s">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <i data-feather="shield" class="w-6 h-6 text-orange-600"></i>
                        </div>
                        <div class="ml-4">
                            <p class="text-sm font-medium text-gray-600">Compliance</p>
                            <p class="text-2xl font-bold text-orange-600">${compliance}</p>
                        </div>
                    </div>
                </div>
            `;
            
            feather.replace();
             // Re-trigger observer for new elements
            container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        }

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

        // Intersection Observer for Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, { threshold: 0.1 });


        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            renderYearOptions();
            renderReports();
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>
