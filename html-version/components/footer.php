<?php
// Footer Component
// Use $base_url for all links and assets
?>
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        </div>

        <div class="relative z-10">
            <div class="py-16">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                         <!-- Hospital Info -->
                        <div class="lg:col-span-2">
                            <div class="mb-6">
                                 <img src="<?php echo $base_url; ?>assets/Header/main-logo_ranchi-below.webp" alt="Raj Hospitals Logo" class="h-28 w-auto filter brightness-0 invert object-contain">
                            </div>
                             <p class="text-gray-300 leading-relaxed mb-6 text-sm">Raj Hospitals is a leading multi-specialty healthcare provider in Ranchi, Jharkhand, delivering comprehensive medical care with state-of-the-art technology and a patient-centric approach since 1991.</p>
                             <div class="mt-6 space-y-3">
                                  <div class="flex items-center space-x-2">
                                    <i data-feather="phone" class="w-4 h-4 text-orange-400"></i>
                                    <a href="tel:+919771488888" class="text-gray-300 hover:text-orange-400 text-sm transition-colors">+91 977 14 88888</a>
                                  </div>
                                   <div class="flex items-center space-x-2">
                                    <i data-feather="mail" class="w-4 h-4 text-orange-400"></i>
                                    <a href="mailto:info@rajhospitals.com" class="text-gray-300 hover:text-orange-400 text-sm transition-colors">info@rajhospitals.com</a>
                                  </div>
                                   <div class="flex items-start space-x-2">
                                    <i data-feather="map-pin" class="w-4 h-4 text-orange-400 mt-0.5"></i>
                                    <a href="https://maps.google.com/?q=Raj+Hospitals+Bariatu+Road+Ranchi" target="_blank" class="text-gray-300 hover:text-orange-400 text-sm transition-colors">Ranchi, Jharkhand - 834009</a>
                                  </div>
                             </div>
                             <!-- Social Media -->
                             <div class="mt-6">
                                <h5 class="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-4">Connect With Us</h5>
                                <div class="flex space-x-3">
                                    <a href="https://www.facebook.com/RajHospitals" target="_blank" class="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110 text-orange-300 hover:text-white">
                                        <i data-feather="facebook" class="w-5 h-5"></i>
                                    </a>
                                     <a href="https://www.instagram.com/raj.hospitals/" target="_blank" class="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110 text-orange-300 hover:text-white">
                                        <i data-feather="instagram" class="w-5 h-5"></i>
                                    </a>
                                     <a href="https://www.youtube.com/channel/UChfTNXg8w5T2NFTeuUjfuug" target="_blank" class="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 group hover:scale-110 text-orange-300 hover:text-white">
                                        <i data-feather="youtube" class="w-5 h-5"></i>
                                    </a>
                                </div>
                             </div>
                        </div>
                         
                         <!-- Quick Links -->
                         <div>
                            <h4 class="text-lg font-bold mb-6 text-white uppercase tracking-wide">Quick Links</h4>
                            <ul class="space-y-2.5">
                                <li><a href="<?php echo $base_url; ?>about.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>About Raj Hospitals</span></a></li>
                                <li><a href="<?php echo $base_url; ?>doctors.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Find a Doctor</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Specialties</span></a></li>
                                <li><a href="<?php echo $base_url; ?>careers.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Careers</span></a></li>
                                <li><a href="<?php echo $base_url; ?>news-media.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>News & Media</span></a></li>
                                <li><a href="<?php echo $base_url; ?>blogs.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Blogs</span></a></li>
                                <li><a href="<?php echo $base_url; ?>biomedical-waste-reports.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>BioMedical Waste Reports</span></a></li>
                            </ul>
                         </div>

                         <!-- Centres of Excellence -->
                         <div>
                            <h4 class="text-lg font-bold mb-6 text-white uppercase tracking-wide">Centres of Excellence</h4>
                            <ul class="space-y-2.5">
                                <li><a href="<?php echo $base_url; ?>specialties/cardiology.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Cardiology</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/critical-care.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Critical Care</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/emergency.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Emergency</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/gastroenterology.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Gastroenterology</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/minimal-access-surgery.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Minimal Access Surgery</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/nephrology.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Nephrology</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/neurosciences.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Neurosciences</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/oncology-cancer-care.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Oncology (Cancer Care)</span></a></li>
                            </ul>
                         </div>
                         
                         <!-- Allied Specialties -->
                         <div>
                            <h4 class="text-lg font-bold mb-6 text-white uppercase tracking-wide">Allied Specialties</h4>
                             <ul class="space-y-2.5">
                                <li><a href="<?php echo $base_url; ?>specialties/aesthetic-and-reconstructive-surgery.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Aesthetic & Surg</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/dental.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Dental</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/dermatology.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Dermatology</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/ent.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>ENT</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/eye-care.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Eye Care</span></a></li>
                                <li><a href="<?php echo $base_url; ?>specialties/pediatrics-and-neonatology.php" class="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2 text-sm group"><i data-feather="chevron-right" class="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform"></i> <span>Pediatrics</span></a></li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
            
            <!-- Map Section -->
            <div class="border-t border-gray-800 py-8">
              <div class="max-w-7xl mx-auto px-4">
                <div class="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8753723757673!2d85.32022857588855!3d23.356529303782207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a89d6881dd%3A0xd169ee225be1478!2sRaj%20Hospitals%20-%20Best%20Multi%20Specialty%20Hospital%20in%20Ranchi%20Jharkhand!5e0!3m2!1sen!2sin!4v1755580421244!5m2!1sen!2sin" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
                </div>
              </div>
            </div>
            
            <!-- Bottom Footer -->
            <div class="bg-black/50 border-t border-gray-800 py-6">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div class="text-gray-400 text-sm text-center md:text-left">
                            <p class="mb-1">© 2025 <span class="text-white font-semibold">Raj Hospitals</span>. All rights reserved.</p>
                             <p class="text-gray-500 text-xs">Established 1991 • NABH Accredited • Leading Healthcare Provider in Jharkhand</p>
                        </div>
                         <div class="flex flex-wrap justify-center gap-4 text-xs">
                            <a href="<?php echo $base_url; ?>privacy-policy.php" class="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
                            <span class="text-gray-700">•</span>
                            <a href="<?php echo $base_url; ?>terms-and-conditions.php" class="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</a>
                            <span class="text-gray-700">•</span>
                            <a href="<?php echo $base_url; ?>biomedical-waste-reports.php" class="text-gray-400 hover:text-orange-400 transition-colors">BMW Reports</a>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
             if (typeof feather !== 'undefined') {
                feather.replace();
            }


        });
    </script>
