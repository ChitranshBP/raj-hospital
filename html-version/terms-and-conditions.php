<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms & Conditions | Raj Hospitals</title>
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
<body class="bg-gray-50">

   <?php include $base_url . 'components/navbar.php'; ?>

    <!-- Main Content -->
    <main class="mt-20">
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-[#0191C7] to-[#F9771B] text-white py-16">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center fade-in">
                    <div class="flex justify-center mb-6">
                        <div class="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <i data-feather="file-text" class="w-12 h-12 text-white"></i>
                        </div>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p class="text-xl text-white/90 max-w-3xl mx-auto">
                         Please read these terms and conditions carefully before using our services
                    </p>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div class="max-w-5xl mx-auto px-4 py-16">
            <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 fade-in">
                
                <!-- Last Updated -->
                <div class="mb-8 pb-6 border-b border-gray-200">
                    <p class="text-sm text-gray-600">
                        <strong>Last Updated:</strong> December 11, 2025
                    </p>
                </div>

                <!-- Introduction -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4 flex items-center gap-2">
                        <i data-feather="alert-circle" class="w-6 h-6"></i>
                        Introduction
                    </h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Welcome to Raj Hospitals. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
                    </p>
                </section>

                <!-- Use of Services -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">1. Use of Services</h2>
                    <div class="space-y-4 text-gray-700">
                       <p class="leading-relaxed">
                            <strong class="text-gray-900">1.1 Eligibility:</strong> You must be at least 18 years old to use our services or have parental/guardian consent.
                        </p>
                        <p class="leading-relaxed">
                            <strong class="text-gray-900">1.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">1.3 Accurate Information:</strong> You agree to provide accurate, current, and complete information when using our services and to update such information as necessary.
                        </p>
                    </div>
                </section>

                <!-- Medical Services -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">2. Medical Services</h2>
                    <div class="space-y-4 text-gray-700">
                          <p class="leading-relaxed">
                            <strong class="text-gray-900">2.1 Professional Services:</strong> All medical services are provided by licensed healthcare professionals. However, the information on this website is for general informational purposes only and does not constitute medical advice.
                        </p>
                        <p class="leading-relaxed">
                            <strong class="text-gray-900">2.2 Appointments:</strong> Appointment bookings made through our website or contact forms are subject to confirmation. We reserve the right to reschedule or cancel appointments with prior notice.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">2.3 Emergency Services:</strong> This website and online services are not intended for medical emergencies. In case of a medical emergency, please call emergency services or visit our emergency department immediately.
                        </p>
                    </div>
                </section>

                 <!-- Payment and Billing -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">3. Payment and Billing</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">
                            <strong class="text-gray-900">3.1 Payment Responsibility:</strong> Patients are responsible for all charges incurred for services rendered. Payment is expected at the time of service unless prior arrangements have been made.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">3.2 Insurance:</strong> We work with various insurance providers. However, insurance coverage and claims are subject to verification and approval by your insurance company.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">3.3 Billing Disputes:</strong> Any billing disputes must be reported within 30 days of receiving the bill. We will investigate and resolve disputes in a timely manner.
                        </p>
                    </div>
                </section>

                <!-- Intellectual Property -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">4. Intellectual Property</h2>
                    <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">
                            <strong class="text-gray-900">4.1 Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Raj Hospitals and is protected by copyright, trademark, and other intellectual property laws.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">4.2 Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
                        </p>
                    </div>
                </section>

                 <!-- User Conduct -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">5. User Conduct</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">You agree not to:</p>
                        <ul class="list-disc pl-6 space-y-2">
                             <li>Use our services for any unlawful purpose</li>
                             <li>Interfere with or disrupt our website or servers</li>
                             <li>Attempt to gain unauthorized access to our systems</li>
                             <li>Transmit any harmful code, viruses, or malware</li>
                             <li>Harass, threaten, or harm other users or staff</li>
                             <li>Provide false or misleading information</li>
                        </ul>
                    </div>
                </section>

                 <!-- Limitation of Liability  -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">6. Limitation of Liability</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">
                            <strong class="text-gray-900">6.1 Disclaimer:</strong> Our website and services are provided "as is" without warranties of any kind, either express or implied.
                        </p>
                         <p class="leading-relaxed">
                            <strong class="text-gray-900">6.2 No Liability:</strong> To the fullest extent permitted by law, Raj Hospitals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                        </p>
                    </div>
                </section>

                <!-- Privacy and Data Protection -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">7. Privacy and Data Protection</h2>
                    <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, and protect your personal and medical information.</p>
                    </div>
                </section>

                <!-- Modifications -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">8. Modifications to Terms</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>
                    </div>
                </section>

                <!-- Governing Law -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">9. Governing Law</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ranchi, Jharkhand.</p>
                    </div>
                </section>

                 <!-- Contact Information -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">10. Contact Information</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">If you have any questions about these Terms and Conditions, please contact us:</p>
                          <div class="bg-gray-50 rounded-lg p-6 mt-4">
                            <p class="font-semibold text-gray-900 mb-2">Raj Hospitals</p>
                            <p class="text-gray-700">Email: info@rajhospitals.com</p>
                            <p class="text-gray-700">Phone: +91 651 230 3456</p>
                            <p class="text-gray-700">Address: Bariatu Road, Ranchi, Jharkhand - 834009</p>
                        </div>
                    </div>
                </section>

                <!-- Highlight Box -->
                <div class="mt-12 bg-gradient-to-r from-[#0191C7]/10 to-[#F9771B]/10 border-l-4 border-[#F9771B] rounded-lg p-6">
                    <div class="flex items-start gap-3">
                         <i data-feather="shield" class="w-6 h-6 text-[#F9771B] mt-1 flex-shrink-0"></i>
                        <div>
                            <h3 class="font-bold text-gray-900 mb-2">Acceptance of Terms</h3>
                            <p class="text-gray-700 leading-relaxed">
                                By using this website and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        // Use feather icons
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
