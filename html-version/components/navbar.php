<?php
// Navbar Component
// Use $base_url for all links and assets
// Ensure $base_url is defined in the parent page before including this file
$active_page = basename($_SERVER['PHP_SELF']);
?>
    <!-- Header -->
    <div class="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 sm:py-1 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-3 sm:px-4">
            <!-- Mobile Layout - Stacked -->
            <div class="flex flex-col space-y-2 sm:hidden">
                <div class="flex items-center justify-center space-x-4">
                    <div class="flex items-center space-x-3">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="facebook" class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="instagram" class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="youtube" class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9" class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-xs font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center justify-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-xs font-medium hover:underline">(24×7) Helpline: +91 97714 88888</a>
                    </div>
                </div>
            </div>
            
            <!-- Desktop Layout -->
            <div class="hidden sm:flex justify-between items-center gap-4">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center space-x-2">
                        <a href="https://www.facebook.com/RajHospitals" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="facebook" class="w-4 h-4"></i></a>
                        <a href="https://www.instagram.com/raj.hospitals/" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="instagram" class="w-4 h-4"></i></a>
                        <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank" class="hover:text-orange-200 transition-colors"><i data-feather="youtube" class="w-4 h-4"></i></a>
                    </div>
                    <a href="https://maps.app.goo.gl/Q8Kd9MDJdxZzxM7C9" class="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                        <i data-feather="map-pin" class="w-4 h-4"></i>
                        <span class="text-sm font-medium">Location</span>
                    </a>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center space-x-2">
                        <i data-feather="bell" class="w-4 h-4 text-red-300"></i>
                        <a href="tel:+919771488888" class="text-sm font-medium hover:underline">(24×7) Helpline: +91 97714 88888</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <header id="main-header" class="fixed w-full z-40 bg-white top-[48px] sm:top-6 transition-all duration-300 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex relative items-center justify-between h-16 md:h-20 lg:h-24">
                <!-- Logo -->
                <a href="<?php echo $base_url; ?>index.php" class="flex items-center group">
                    <div id="logo-container" class="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 transition-all duration-300">
                        <img id="main-logo" src="<?php echo $base_url; ?>assets/Header/main-logo_ranchi.webp" alt="Main Logo" class="object-contain transition-all duration-300 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]">
                        <div id="nabh-logos" class="flex space-x-1 sm:space-x-3 md:space-x-2 lg:space-x-2 transition-all duration-300">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL_logo-1.webp" alt="NABH Logo 1" class="object-contain w-[30px] h-[30px]">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL-Logo-2.webp" alt="NABH Logo 2" class="object-contain w-[30px] h-[30px]">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL-Logo-3.webp" alt="NABH Logo 3" class="object-contain w-[30px] h-[30px]">
                        </div>
                    </div>
                </a>

                <!-- Desktop Nav -->
                <div class="hidden md:flex lg:flex flex-col items-end space-y-1 lg:space-y-2">
                    
                    <!-- First Row (Collapsible) -->
                    <nav id="nav-top-row" class="flex items-center space-x-3 md:space-x-4 lg:space-x-6 overflow-hidden transition-all duration-300 h-auto opacity-100 origin-top">
                        <a href="<?php echo $base_url; ?>index.php" class="<?php echo $active_page == 'index.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Home</a>
                        <a href="<?php echo $base_url; ?>testimonials.php" class="<?php echo $active_page == 'testimonials.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Testimonials</a>
                        <a href="<?php echo $base_url; ?>careers.php" class="<?php echo $active_page == 'careers.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Careers</a>
                        <a href="<?php echo $base_url; ?>news-media.php" class="<?php echo $active_page == 'news-media.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">News & Media</a>
                        <a href="<?php echo $base_url; ?>blogs.php" class="<?php echo $active_page == 'blogs.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Blogs</a>
                    </nav>

                    <!-- Second Row (Always Visible) -->
                    <nav class="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
                        <a href="<?php echo $base_url; ?>about.php" class="<?php echo $active_page == 'about.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">About Raj</a>
                        
                        <!-- Specialties Dropdown trigger -->
                        <div class="relative group cursor-pointer" id="specialties-trigger">
                            <div class="flex items-center space-x-1 <?php echo strpos($active_page, 'specialties') !== false ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">
                                <span>Specialities</span>
                                <i data-feather="chevron-down" class="w-3 h-3 group-hover:rotate-180 transition-transform"></i>
                            </div>
                            
                            <!-- Mega Menu -->
                            <div class="absolute top-full right-0 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 hidden group-hover:block fade-in-visible z-50" style="margin-top: 10px;">
                                <div class="grid grid-cols-3 gap-6">
                                    <!-- Col 1 -->
                                    <div class="flex flex-col">
                                        <h4 class="font-semibold text-orange-600 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 text-sm">Centres of Excellence</h4>
                                        <div class="flex flex-col gap-1">
                                            <a href="<?php echo $base_url; ?>specialties/cardiology.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="heart" class="w-4 h-4 text-orange-500"></i> Cardiology</a>
                                            <a href="<?php echo $base_url; ?>specialties/critical-care.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="activity" class="w-4 h-4 text-orange-500"></i> Critical Care</a>
                                            <a href="<?php echo $base_url; ?>specialties/emergency.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="alert-circle" class="w-4 h-4 text-orange-500"></i> Emergency</a>
                                            <a href="<?php echo $base_url; ?>specialties/neurology.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="coffee" class="w-4 h-4 text-orange-500"></i> Neurosciences</a>
                                             <a href="<?php echo $base_url; ?>specialties/oncology-cancer-care.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="shield" class="w-4 h-4 text-orange-500"></i> Oncology</a>
                                        </div>
                                    </div>
                                    <!-- Col 2 -->
                                    <div class="flex flex-col">
                                        <h4 class="font-semibold text-orange-600 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 text-sm">Allied Specialties</h4>
                                        <div class="flex flex-col gap-1">
                                             <a href="<?php echo $base_url; ?>specialties/dental.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="smile" class="w-4 h-4 text-orange-500"></i> Dental</a>
                                             <a href="<?php echo $base_url; ?>specialties/ent.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="mic" class="w-4 h-4 text-orange-500"></i> ENT</a>
                                             <a href="<?php echo $base_url; ?>specialties/eye-care.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="eye" class="w-4 h-4 text-orange-500"></i> Eye Care</a>
                                        </div>
                                    </div>
                                    <!-- Col 3 -->
                                    <div class="flex flex-col">
                                        <h4 class="font-semibold text-orange-600 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 text-sm">Advanced Diagnostics</h4>
                                        <div class="flex flex-col gap-1">
                                             <a href="<?php echo $base_url; ?>specialties/radiology.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="camera" class="w-4 h-4 text-orange-500"></i> Radiology</a>
                                             <a href="<?php echo $base_url; ?>specialties/pathology.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm"><i data-feather="file" class="w-4 h-4 text-orange-500"></i> Laboratory</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="<?php echo $base_url; ?>doctors.php" class="<?php echo $active_page == 'doctors.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Find a Doctor</a>
                        <div class="flex items-center space-x-3 ml-2 lg:ml-4">
                            <a href="<?php echo $base_url; ?>contact.php" class="<?php echo $active_page == 'contact.php' ? 'bg-orange-600 shadow-inner' : 'bg-orange-500 hover:bg-orange-600'; ?> text-white px-4 lg:px-7 py-2 lg:py-2.5 rounded-full transition-colors font-semibold text-sm lg:text-base shadow-md">Book Appointment</a>
                        </div>
                    </nav>

                    <!-- Mobile Menu Details (Simplified for HTML version) -->
                   <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-700">
                        <i data-feather="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto absolute w-full left-0 shadow-lg">
             <div class="px-4 py-4 space-y-3">
                <a href="<?php echo $base_url; ?>index.php" class="block py-2 <?php echo $active_page == 'index.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">Home</a>
                <a href="<?php echo $base_url; ?>about.php" class="block py-2 <?php echo $active_page == 'about.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">About Raj</a>
                <a href="<?php echo $base_url; ?>specialties.php" class="block py-2 <?php echo $active_page == 'specialties.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">Specialties</a>
                <a href="<?php echo $base_url; ?>doctors.php" class="block py-2 <?php echo $active_page == 'doctors.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">Find a Doctor</a>
                <a href="<?php echo $base_url; ?>testimonials.php" class="block py-2 <?php echo $active_page == 'testimonials.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">Testimonials</a>
                <a href="<?php echo $base_url; ?>news-media.php" class="block py-2 <?php echo $active_page == 'news-media.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-50">News & Media</a>
                <a href="<?php echo $base_url; ?>contact.php" class="block w-full bg-orange-500 text-white py-3 rounded-lg font-medium text-center mt-4">Book Appointment</a>
             </div>
        </div>
    </header>
