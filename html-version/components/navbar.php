<?php
// Navbar Component
// Use $base_url for all links and assets
// Ensure $base_url is defined in the parent page before including this file
$active_page = basename($_SERVER['PHP_SELF']);

// Configuration from React Version
$specialties = [
    [
        'category' => 'Centres of Excellence',
        'items' => [
            'Cardiology', 'Critical Care ', 'Emergency', 'Gastroenterology', 
            'Minimal Access Surgery', 'Nephrology', 'Neurosciences', 
            'Oncology (Cancer Care)', 'Orthopaedics & Joint Replacement', 
            'Pulmonology', 'Internal Medicine', 'Urology', 
            'Obstetrics & Gynaecology'
        ]
    ],
    [
        'category' => 'Allied Specialties',
        'items' => [
            'Aesthetic & Reconstructive Surgery', 'Dental', 'Dermatology', 
            'ENT', 'Eye Care', 'Nutrition & Dietetics', 
            'Pediatrics & Neonatology', 'Physiotherapy & Rehabilitation', 
            'Psychiatry & Mental Health', 'Oral & Maxillofacial Surgery'
        ]
    ],
    [
        'category' => 'Advanced Diagnostics',
        'items' => [
            'Radiology', 'Neurology', 
            'FNAC, Biopsy, Blood & Laboratory Investigations'
        ]
    ]
];

// Icon Mapping (React Fi... -> Feather name)
$specialtyIcons = [
    'Cardiology' => 'heart',
    'Critical Care ' => 'activity',
    'Emergency' => 'alert-circle',
    'Gastroenterology' => 'aperture',
    'Minimal Access Surgery' => 'target',
    'Nephrology' => 'droplet',
    'Neurosciences' => 'coffee', // Matching React version placeholder
    'Oncology (Cancer Care)' => 'shield',
    'Orthopaedics & Joint Replacement' => 'users',
    'Pulmonology' => 'wind',
    'Internal Medicine' => 'crosshair',
    'Urology' => 'zap',
    'Obstetrics & Gynaecology' => 'trending-up',
    'Oral & Maxillofacial Surgery' => 'scissors',
    'Aesthetic & Reconstructive Surgery' => 'scissors',
    'Dental' => 'smile',
    'Dermatology' => 'feather',
    'ENT' => 'mic',
    'Eye Care' => 'eye',
    'Nutrition & Dietetics' => 'coffee',
    'Pediatrics & Neonatology' => 'coffee',
    'Physiotherapy & Rehabilitation' => 'move',
    'Psychiatry & Mental Health' => 'message-circle',
    'Radiology' => 'camera',
    'Neurology' => 'moon',
    'FNAC, Biopsy, Blood & Laboratory Investigations' => 'file'
];

function getSpecialtySlug($name, $category) {
    $specialtyUrlMap = [
        'Cardiology' => ['Advanced Diagnostics' => 'cardiology-ad'],
        'Neurology' => ['Advanced Diagnostics' => 'neurology-ad'],
        'FNAC, Biopsy, Blood & Laboratory Investigations' => ['Advanced Diagnostics' => 'laboratory-investigations'],
        'Oral & Maxillofacial Surgery' => ['Allied Specialties' => 'oral-maxillofacial-surgery-ad'],
    ];

    if (isset($specialtyUrlMap[$name][$category])) {
        return $specialtyUrlMap[$name][$category];
    }

    $slug = strtolower($name);
    $slug = str_replace('&', 'and', $slug);
    $slug = preg_replace('/\s+/', '-', $slug);
    $slug = str_replace(['(', ')'], '', $slug);
    $slug = preg_replace('/-+/', '-', $slug);
    return trim($slug, '-');
}
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
                    <div id="logo-container" class="flex items-center space-x-2 sm:space-x-4 md:space-x-5 lg:space-x-6 transition-all duration-300">
                        <img id="main-logo" src="<?php echo $base_url; ?>assets/Header/main-logo_ranchi.webp" alt="Main Logo" class="object-contain transition-all duration-300 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px]">
                        <div id="nabh-logos" class="flex space-x-1 sm:space-x-3 md:space-x-2 lg:space-x-2 transition-all duration-300">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL_logo-1.webp" alt="NABH Logo 1" class="object-contain w-[30px] h-[30px]">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL-Logo-2.webp" alt="NABH Logo 2" class="object-contain w-[30px] h-[30px]">
                            <img src="<?php echo $base_url; ?>assets/Header/NABL-Logo-3.webp" alt="NABH Logo 3" class="object-contain w-[30px] h-[30px]">
                        </div>
                    </div>
                </a>

                <!-- Mobile Menu Button (visible on mobile only) -->
                <button id="mobile-menu-btn" class="flex md:hidden items-center justify-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 bg-white shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" id="menu-icon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 hidden" id="close-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

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
                                    <?php foreach ($specialties as $categoryData): ?>
                                    <div class="flex flex-col">
                                        <h4 class="font-semibold text-orange-600 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 text-sm">
                                            <?php echo htmlspecialchars($categoryData['category']); ?>
                                        </h4>
                                        <div class="flex flex-col gap-1">
                                            <?php foreach ($categoryData['items'] as $item): 
                                                $icon = $specialtyIcons[$item] ?? 'circle';
                                                $slug = getSpecialtySlug($item, $categoryData['category']);
                                            ?>
                                            <a href="<?php echo $base_url; ?>specialties/<?php echo $slug; ?>.php" class="flex items-center gap-2 py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 text-sm">
                                                <i data-feather="<?php echo $icon; ?>" class="w-4 h-4 text-orange-500"></i> 
                                                <?php echo htmlspecialchars($item); ?>
                                            </a>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>

                        <a href="<?php echo $base_url; ?>doctors.php" class="<?php echo $active_page == 'doctors.php' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'; ?> transition-colors font-medium text-sm lg:text-base">Find a Doctor</a>
                        <div class="flex items-center space-x-3 ml-2 lg:ml-4">
                            <a href="<?php echo $base_url; ?>contact.php" class="<?php echo $active_page == 'contact.php' ? 'bg-orange-600 shadow-inner' : 'bg-orange-500 hover:bg-orange-600'; ?> text-white px-4 lg:px-7 py-2 lg:py-2.5 rounded-full transition-colors font-semibold text-sm lg:text-base shadow-md">Book Appointment</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Mobile Menu (Hidden by default, visible on mobile when toggled) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto absolute w-full left-0 shadow-lg">
             <div class="px-4 py-4 space-y-1">
                <a href="<?php echo $base_url; ?>index.php" class="block py-3 <?php echo $active_page == 'index.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">Home</a>
                <a href="<?php echo $base_url; ?>about.php" class="block py-3 <?php echo $active_page == 'about.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">About Raj</a>

                <!-- Mobile Specialties Accordion -->
                <div class="border-b border-gray-100">
                    <button id="mobile-specialties-btn" class="flex items-center justify-between w-full py-3 text-gray-700 font-medium">
                        <span>Specialties</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 transition-transform duration-200" id="specialties-chevron"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    <div id="mobile-specialties-dropdown" class="hidden pb-3">
                        <?php foreach ($specialties as $categoryData): ?>
                        <div class="border-b border-gray-100 pb-2">
                            <button type="button" class="w-full flex items-center justify-between py-2 px-2 text-orange-600 hover:bg-orange-50 rounded transition-colors mobile-category-btn">
                                <span class="text-sm font-semibold uppercase"><?php echo htmlspecialchars($categoryData['category']); ?></span>
                                <i data-feather="chevron-down" class="w-3 h-3 transition-transform category-chevron"></i>
                            </button>
                            <div class="pl-4 mt-1 space-y-1 max-h-48 overflow-y-auto hidden mobile-category-items scrollbar-thin">
                                <?php foreach ($categoryData['items'] as $item):
                                    $slug = getSpecialtySlug($item, $categoryData['category']);
                                ?>
                                <a href="<?php echo $base_url; ?>specialties/<?php echo $slug; ?>.php" class="block py-2 px-4 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors"><?php echo htmlspecialchars($item); ?></a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <a href="<?php echo $base_url; ?>doctors.php" class="block py-3 <?php echo $active_page == 'doctors.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">Find a Doctor</a>
                <a href="<?php echo $base_url; ?>testimonials.php" class="block py-3 <?php echo $active_page == 'testimonials.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">Testimonials</a>
                <a href="<?php echo $base_url; ?>news-media.php" class="block py-3 <?php echo $active_page == 'news-media.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">News & Media</a>
                <a href="<?php echo $base_url; ?>careers.php" class="block py-3 <?php echo $active_page == 'careers.php' ? 'text-orange-500' : 'text-gray-700'; ?> font-medium border-b border-gray-100">Careers</a>
                <a href="<?php echo $base_url; ?>contact.php" class="block w-full bg-orange-500 text-white py-3 rounded-lg font-medium text-center mt-4">Book Appointment</a>
             </div>
        </div>
    </header>
