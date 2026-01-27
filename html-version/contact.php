<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us | Raj Hospitals</title>
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
                            50: '#fff0e6',
                            100: '#ffd6b3',
                            500: '#ff6b35',
                            600: '#e55a2e',
                            700: '#cc4926',
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
            <div class="text-center fade-in">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Contact <span class="text-[#ea5234]">Raj Hospitals</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Get in touch with us for appointments, inquiries, or emergency care. We're here to help you 24/7.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <!-- Card 1: Emergency -->
                <a href="tel:+919771488888" class="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-[#fff0e6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="phone" class="w-8 h-8 text-[#e55a2e]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
                    <p class="text-lg font-medium text-[#ea5234] mb-2">+91 977 14 88888</p>
                    <p class="text-gray-600 text-sm">Call us anytime for emergency medical assistance</p>
                </a>

                <!-- Card 2: Location -->
                <a href="https://maps.google.com/?q=Raj+Hospitals+Bariatu+Road+Ranchi" target="_blank" class="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer fade-in" style="animation-delay: 0.1s">
                    <div class="w-16 h-16 bg-[#fde9e6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="map-pin" class="w-8 h-8 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                    <p class="text-lg font-medium text-[#ea5234] mb-2">Ranchi, Jharkhand</p>
                    <p class="text-gray-600 text-sm">Easy to reach location in the heart of Ranchi</p>
                </a>

                <!-- Card 3: Email -->
                <a href="mailto:info@rajhospitals.com" class="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer fade-in" style="animation-delay: 0.2s">
                    <div class="w-16 h-16 bg-[#e0f6fe] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="mail" class="w-8 h-8 text-[#0191c7]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p class="text-lg font-medium text-[#ea5234] mb-2">info@rajhospitals.com</p>
                    <p class="text-gray-600 text-sm">Send us your queries and we'll respond promptly</p>
                </a>

                <!-- Card 4: Working Hours -->
                <div class="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 fade-in" style="animation-delay: 0.3s">
                   <div class="w-16 h-16 bg-[#fde9e6] rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-feather="clock" class="w-8 h-8 text-[#ea5234]"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <p class="text-lg font-medium text-[#ea5234] mb-2">24/7 Open</p>
                    <p class="text-gray-600 text-sm">We provide round-the-clock medical services</p>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 fade-in">
                    <div class="flex items-center space-x-3 mb-6">
                        <i data-feather="message-square" class="w-6 h-6 text-[#ea5234]"></i>
                        <h2 class="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    </div>
                    <form onsubmit="handleContactSubmit(event)" class="space-y-6">
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
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                            <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none bg-white">
                                <option value="">Select a subject</option>
                                <option value="Book Appointment">Book Appointment</option>
                                <option value="Second Opinion">Second Opinion</option>
                                <option value="Corporate/TPA Query">Corporate/TPA Query</option>
                                <option value="Book a Test">Book a Test</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Emergency">Emergency</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                            <textarea rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ea5234] focus:border-transparent outline-none" placeholder="Enter your message here..."></textarea>
                        </div>
                        <button type="submit" class="w-full bg-[#ea5234] text-white py-4 rounded-lg hover:bg-[#d64528] transition-colors font-semibold text-lg flex items-center justify-center space-x-2">
                            <i data-feather="send" class="w-5 h-5"></i>
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>

                <!-- Map and Info -->
                <div class="space-y-8 fade-in" style="animation-delay: 0.2s">
                    <!-- Map -->
                    <div class="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <div class="aspect-video">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8753723757673!2d85.32022857588855!3d23.356529303782207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a89d6881dd%3A0xd169ee225be1478!2sRaj%20Hospitals%20-%20Best%20Multi%20Specialty%20Hospital%20in%20Ranchi%20Jharkhand!5e0!3m2!1sen!2sin!4v1755580421244!5m2!1sen!2sin" class="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <!-- Emergency Highlight -->
                     <div class="bg-[#fff0e6] border border-[#ffd6b3] rounded-2xl p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                           <i data-feather="phone" class="w-6 h-6 text-[#e55a2e]"></i>
                           <span>Emergency Contact</span>
                        </h3>
                        <p class="text-gray-600 mb-4">
                           For immediate medical emergencies, please call our 24/7 emergency helpline:
                        </p>
                        <a href="tel:+919771488888" class="text-2xl font-bold text-[#e55a2e] hover:text-[#cc4926] transition-colors">
                           +91 977 14 88888
                        </a>
                        <p class="text-sm text-gray-500 mt-2">
                           Available 24 hours a day, 7 days a week
                        </p>
                     </div>

                     <!-- Departments -->
                     <div class="bg-[#fef5f3] border border-[#fbd7d0] rounded-2xl p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Key Departments</h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Emergency Care</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Cardiology</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Neurology</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Orthopedics</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Pediatrics</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Obstetrics</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">General Surgery</span></div>
                            <div class="flex items-center space-x-2"><div class="w-2 h-2 bg-[#ea5234] rounded-full"></div><span class="text-gray-700">Nephrology</span></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
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

        // Form Submit
        function handleContactSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="animate-pulse">Sending...</span>';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you for contacting Raj Hospitals! We have received your message and will get back to you shortly.');
                e.target.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        }

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
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>
