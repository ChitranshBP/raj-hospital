<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy | Raj Hospitals</title>
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
                            <i data-feather="lock" class="w-12 h-12 text-white"></i>
                        </div>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Your privacy and data security are our top priorities
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
                        <i data-feather="shield" class="w-6 h-6"></i>
                        Introduction
                    </h2>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        Raj Hospitals ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services.
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        Please read this Privacy Policy carefully. By using our website or services, you consent to the practices described in this policy.
                    </p>
                </section>

                <!-- Information We Collect -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">1. Information We Collect</h2>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                            <p class="text-gray-700 leading-relaxed mb-2">We may collect personal information that you voluntarily provide to us, including:</p>
                            <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Name, age, date of birth, and gender</li>
                                <li>Contact information (email address, phone number, address)</li>
                                <li>Emergency contact information</li>
                                <li>Government-issued identification numbers (for verification purposes)</li>
                                <li>Insurance information</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">1.2 Medical Information</h3>
                            <p class="text-gray-700 leading-relaxed mb-2">In the course of providing healthcare services, we collect medical information including:</p>
                            <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Medical history and health records</li>
                                <li>Current medications and allergies</li>
                                <li>Laboratory test results and diagnostic reports</li>
                                <li>Treatment plans and clinical notes</li>
                                <li>Billing and payment information</li>
                            </ul>
                        </div>
                         <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">1.3 Automatically Collected Information</h3>
                            <p class="text-gray-700 leading-relaxed mb-2">When you visit our website, we may automatically collect:</p>
                            <ul class="list-disc pl-6 space-y-2 text-gray-700">
                                <li>IP address and browser information</li>
                                <li>Device information (type, operating system)</li>
                                <li>Usage data (pages visited, time spent on pages)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- How We Use Your Information -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">2. How We Use Your Information</h2>
                    <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">We use the collected information for the following purposes:</p>
                        <ul class="list-disc pl-6 space-y-2">
                             <li><strong class="text-gray-900">Medical Care:</strong> To provide, coordinate, and manage your healthcare services</li>
                             <li><strong class="text-gray-900">Appointment Management:</strong> To schedule, confirm, and remind you of appointments</li>
                             <li><strong class="text-gray-900">Communication:</strong> To communicate with you about your treatment, test results, and health-related matters</li>
                             <li><strong class="text-gray-900">Billing:</strong> To process payments and insurance claims</li>
                             <li><strong class="text-gray-900">Quality Improvement:</strong> To improve our services and patient care</li>
                             <li><strong class="text-gray-900">Legal Compliance:</strong> To comply with legal and regulatory requirements</li>
                             <li><strong class="text-gray-900">Research:</strong> For anonymized medical research (with appropriate consent)</li>
                             <li><strong class="text-gray-900">Website Enhancement:</strong> To improve website functionality and user experience</li>
                        </ul>
                    </div>
                </section>

                 <!-- Information Sharing and Disclosure -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">3. Information Sharing and Disclosure</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">We respect your privacy and do not sell your personal or medical information. We may share your information in the following circumstances:</p>
                        <ul class="list-disc pl-6 space-y-2">
                            <li><strong class="text-gray-900">Healthcare Providers:</strong> With doctors, nurses, and other healthcare professionals involved in your care</li>
                            <li><strong class="text-gray-900">Insurance Companies:</strong> For claims processing and verification of coverage</li>
                            <li><strong class="text-gray-900">Legal Requirements:</strong> When required by law, court order, or regulatory authorities</li>
                            <li><strong class="text-gray-900">Emergency Situations:</strong> To protect your health and safety in emergency situations</li>
                             <li><strong class="text-gray-900">Service Providers:</strong> With third-party service providers who assist in our operations (under strict confidentiality agreements)</li>
                            <li><strong class="text-gray-900">Family Members:</strong> With your designated family members or representatives (with your consent)</li>
                        </ul>
                    </div>
                </section>

                <!-- Data Security -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">4. Data Security</h2>
                    <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">We implement robust security measures to protect your information:</p>
                         <ul class="list-disc pl-6 space-y-2">
                            <li>Encrypted data transmission using SSL/TLS protocols</li>
                            <li>Secure servers with restricted access</li>
                            <li>Regular security audits and updates</li>
                             <li>Staff training on data protection and confidentiality</li>
                            <li>Physical security measures at our facilities</li>
                             <li>Access controls and authentication mechanisms</li>
                        </ul>
                         <p class="leading-relaxed mt-4">While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to maintain the highest standards.</p>
                    </div>
                </section>

                 <!-- Your Rights and Choices -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">5. Your Rights and Choices</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">You have the following rights regarding your information:</p>
                        <ul class="list-disc pl-6 space-y-2">
                             <li><strong class="text-gray-900">Access:</strong> Right to access your medical records and personal information</li>
                             <li><strong class="text-gray-900">Correction:</strong> Right to request correction of inaccurate information</li>
                             <li><strong class="text-gray-900">Restriction:</strong> Right to request restrictions on certain uses of your information</li>
                             <li><strong class="text-gray-900">Confidential Communication:</strong> Right to request communication through specific means</li>
                             <li><strong class="text-gray-900">Accounting:</strong> Right to receive an accounting of disclosures of your information</li>
                             <li><strong class="text-gray-900">Opt-Out:</strong> Right to opt-out of marketing communications</li>
                        </ul>
                         <p class="leading-relaxed mt-4">To exercise these rights, please contact our Privacy Officer using the contact information provided below.</p>
                    </div>
                </section>

                <!-- Cookies -->
                <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">6. Cookies and Tracking Technologies</h2>
                    <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">Our website uses cookies and similar technologies to enhance user experience. Cookies are small files stored on your device that help us:</p>
                          <ul class="list-disc pl-6 space-y-2">
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Improve website functionality</li>
                            <li>Provide personalized content</li>
                        </ul>
                         <p class="leading-relaxed mt-4">You can control cookies through your browser settings. However, disabling cookies may affect website functionality.</p>
                    </div>
                </section>

                <!-- Children's Privacy -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">7. Children's Privacy</h2>
                    <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">We take special care to protect the privacy of children. For patients under 18 years of age, we require parental or guardian consent before collecting or using their information. Parents and guardians have the right to review, request deletion, or refuse further collection of their child's information.</p>
                    </div>
                </section>

                <!-- Data Retention -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">8. Data Retention</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">We retain your medical records and personal information for the period required by law and as necessary for legal, regulatory, and operational purposes. Medical records are typically maintained for a minimum period as specified by Indian healthcare regulations.</p>
                    </div>
                </section>

                <!-- Third Party Links -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">9. Third-Party Links</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                    </div>
                </section>

                 <!-- Changes -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">10. Changes to This Privacy Policy</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
                    </div>
                </section>

                <!-- Contact Info -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">11. Contact Information</h2>
                     <div class="space-y-4 text-gray-700">
                         <p class="leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer</p>
                    </div>
                </section>

                <!-- Compliance -->
                 <section class="mb-10">
                    <h2 class="text-2xl font-bold text-[#0191C7] mb-4">12. Legal Compliance</h2>
                     <div class="space-y-4 text-gray-700">
                        <p class="leading-relaxed">This Privacy Policy is designed to comply with:</p>
                        <ul class="list-disc pl-6 space-y-2">
                             <li>Information Technology Act, 2000 and its amendments</li>
                             <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                             <li>Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations</li>
                             <li>Other applicable Indian laws and regulations regarding data protection and patient privacy</li>
                        </ul>
                    </div>
                </section>

                <!-- Highlight Box -->
                <div class="mt-12 bg-gradient-to-r from-[#0191C7]/10 to-[#F9771B]/10 border-l-4 border-[#F9771B] rounded-lg p-6">
                    <div class="flex items-start gap-3">
                         <i data-feather="eye" class="w-6 h-6 text-[#F9771B] mt-1 flex-shrink-0"></i>
                        <div>
                            <h3 class="font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
                            <p class="text-gray-700 leading-relaxed">
                                At Raj Hospitals, we are committed to maintaining the confidentiality and security of your personal and medical information. We continuously review and update our privacy practices to ensure the highest level of protection for your data.
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
