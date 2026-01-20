<?php $base_url = './'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News & Media | Raj Hospitals</title>
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
    <section class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] mt-32 py-10">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center fade-in">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    News <span class="text-[#ea5234]">& Media</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Stay updated with our latest news and media highlights
                </p>
            </div>
        </div>
    </section>

    <!-- Tabs Section -->
    <section class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-center space-x-4">
                <button onclick="switchTab('digital')" id="tab-digital" class="px-6 py-3 rounded-lg font-semibold transition-all bg-[#F9771B] text-white shadow-lg">
                    Digital
                </button>
                <button onclick="switchTab('print')" id="tab-print" class="px-6 py-3 rounded-lg font-semibold transition-all bg-gray-200 text-gray-700 hover:bg-gray-300">
                    Print
                </button>
            </div>
        </div>
    </section>

    <!-- Digital Media Section -->
    <section id="digital-section" class="py-12 bg-white fade-in">
        <div class="max-w-7xl mx-auto px-4">
             <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Digital <span class="text-[#F9771B]">Media</span>
                </h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore our digital articles, features, and media highlights
                </p>
            </div>
            <div id="digital-news-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Populated by JS -->
            </div>
        </div>
    </section>

    <!-- Print Media Section -->
    <section id="print-section" class="py-12 bg-white hidden fade-in">
        <div class="max-w-7xl mx-auto px-4">
             <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-8">
                    Media <span class="text-[#F9771B]">Coverage</span>
                </h2>
            </div>
            <div id="print-media-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <!-- Populated by JS -->
            </div>
        </div>
    </section>

    <!-- Image Modal -->
    <div id="image-modal" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999] hidden" onclick="closeImageModal()">
        <div class="relative max-w-[90%] max-h-[90%]">
             <button onclick="closeImageModal()" class="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors">
                <i data-feather="x" class="w-8 h-8"></i>
            </button>
            <img id="modal-image" src="" class="rounded-lg shadow-2xl max-w-full max-h-[90vh] object-contain" onclick="event.stopPropagation()">
        </div>
    </div>


    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        // DATA
        const digitalNews = [
            { id: 1, title: 'राज अस्पताल, रांची में ASI झारखंड चैप्टर द्वारा लेज़र प्रॉक्टोलॉजी पर वर्कशॉप आयोजित', description: 'Workshop organised at Raj Hospital Ranchi by ASI Jharkhand Chapter.', image: 'img/img-01.webp', link: 'https://www.facebook.com/share/p/18r7HmKaz4/', date: 'August 25, 2024' },
            { id: 2, title: 'रांचीः बाई-पास सर्जरी के लिए अब नहीं जाना होगा बाहर, राज अस्पताल में मिल रही सुविधा', description: 'Bypass surgery facility now available at Raj Hospital Ranchi.', image: 'img/img-01.webp', link: 'https://lagatar.in/ranchi-now-you-will-not-have-to-go-out-for-by-pass-surgery-facility-is-available-in-raj-hospital', date: 'January 1, 2024' },
            { id: 3, title: 'रांची: शनिवार को नगड़ी स्थित केंद्रीय तसर अनुसंधान एवं प्रशिक्षण संस्थान में चिकित्सा शिविर का आयोजन', description: 'Medical camp organised at Central Tasar Research Institute.', image: 'img/img 1 (1).webp', link: 'rachi-news.php', date: 'August 26, 2023' },
            { id: 4, title: 'राज अस्पताल, रांची में मनाया गया 77वां स्वतंत्रता दिवस, ध्वजारोहण कर दी तिरंगे को सलामी', description: '77th Independence Day celebration at Raj Hospital.', image: 'img/img7.webp', link: 'independence-day-23.php', date: 'August 23, 2023' },
            { id: 5, title: 'रांची: 28 जुलाई को मनाया जायेगा विश्व हेपेटाइटिस दिवस', description: 'World Hepatitis Day will be observed on 28 July.', image: 'img/doc.webp', link: 'https://lagatar.in/ranchi-world-hepatitis-day-to-be-celebrated-on-july', date: 'July 28, 2023' },
            { id: 6, title: 'राज अस्पताल में पहली बार IVUS तकनीक से की गई एंजियोप्लास्टी', description: 'IVUS-based angioplasty performed for the first time at Raj Hospital.', image: 'img/cover img.webp', link: 'https://lagatar.in/angioplasty-done-with-ivus-technique-for-the-first-time-in-raj-hospital/', date: 'July 22, 2023' },
            { id: 7, title: 'नर्सों की जितनी प्रशंसा की जाए कम है : साहिल गंभीर', description: 'Nurses appreciation ceremony at Raj Hospital.', image: 'img/Untitled design-00.webp', link: 'https://lagatar.in/the-praise-of-nurses-is-less-sahil-gambhir/', date: 'May 14, 2023' },
            { id: 8, title: 'रांची : राज अस्पताल में अग्निशमन विभाग की ओर से मॉक ड्रिल का आयोजन', description: 'Fire safety week mock drill conducted at Raj Hospital.', image: 'img/1223.webp', link: 'https://lagatar.in/ranchi-mock-drill-organized-by-the-fire-department-in-raj-hospital-the-methods-of-fire-prevention/', date: 'April 16, 2023' },
            { id: 9, title: '15 cases of black fungus in Jharkhand, Centre to hold discussions today.', description: 'TOI coverage of black fungus cases in Jharkhand.', image: 'img/Untitled design.webp', link: 'https://timesofindia.indiatimes.com/city/ranchi/15-cases-of-black-fungus-in-state-centre-to-hold-discussions-today/articleshow/82679927.cms', date: 'May 17, 2021' },
            { id: 10, title: 'सेवा सदन का ओपीडी आज से शुरू होगा, राज अस्पताल में मिल रहा है परामर्श', description: 'Seva Sadan OPD begins, consultations available at Raj Hospital.', image: 'img/Untitled design.webp', link: 'https://www.prabhatkhabar.com/state/jharkhand/ranchi/opd-of-seva-sadan-will-start-from-today-counseling-is-being-provided-in-raj-hospital', date: 'May 12, 2021' },
            { id: 11, title: 'राज अस्पताल के डॉक्टर्स का कमाल, 92 वर्षीय महिला के पेट से निकाला 15 किलो का ट्यूमर', description: 'Doctors at Raj Hospital remove a 15-kg abdominal tumor.', image: 'img/Untitled design.webp', link: 'https://lagatar.in/amazing-doctors-of-raj-hospital-a-15-kg-tumor-removed-from-a-92-year-old-womans-abdomen/', date: 'January 15, 2021' },
            { id: 12, title: 'Jharkhand to start vax drive for senior citizens from today', description: 'Senior citizen vaccination drive begins in Jharkhand.', image: 'img/Untitled design.webp', link: 'http://timesofindia.indiatimes.com/articleshow/81262067.cms', date: 'March 1, 2021' },
            { id: 13, title: 'Only 2 of 71 private hospitals offering jabs in Ranchi', description: 'Vaccination availability report in private hospitals.', image: 'img/Untitled design (1).webp', link: 'https://www.telegraphindia.com/jharkhand/only-2-of-71-private-hospitals-offering-jabs-in-ranchi/cid/1808398', date: 'March 12, 2021' },
             { id: 14, title: '450 pvt hospitals to administer vaccine from today', description: '450 private hospitals authorized for vaccination.', image: 'img/Untitled design (2).webp', link: 'https://www.dailypioneer.com/2021/state-editions/450-pvt-hospitals-to-administer-vaccine-from-today.html', date: 'March 1, 2021' },
            { id: 15, title: 'State allows private hospitals to run 24x7 vaccination programme', description: 'Government permits round-the-clock vaccination.', image: 'img/Untitled design (3).webp', link: 'https://www.dailypioneer.com/2021/state-editions/state-allows-private-hospitals-to-run-24x7-vaccination-programme.html', date: 'June 21, 2021' }
        ];

        const newspaperClippings = [
            { id: 1, image: 'assets/press/news-1-r.webp', title: 'Raj Hospital Featured in Media' },
            { id: 2, image: 'assets/press/news-2-raj.webp', title: 'राज अस्पताल में लेजर प्रोक्टोलॉजी पर कार्यशाला' },
            { id: 3, image: 'assets/press/news-3-raj.webp', title: 'लेजर प्रॉक्टोलॉजी विषय पर वर्कशॉप का आयोजन' },
            { id: 4, image: 'assets/press/Raj-hsopital-news-1_290824.webp', title: 'राज अस्पताल में लाइफ सपोर्ट पर प्रशिक्षण शिविर' },
            { id: 5, image: 'assets/press/Raj-hsopital-news-2_290824.webp', title: 'राज हॉस्पिटल में आयोजित हुआ लाइफ सपोर्ट प्रशिक्षण शिविर, 40 से ज्यादा उम्मीदवारों ने लिया हिस्सा' },
            { id: 6, image: 'assets/press/Raj-hsopital-news-3_290824.webp', title: 'राज अस्पताल में दो दिवसीय प्रशिक्षण शिविर' },
            { id: 7, image: 'assets/press/Raj-hsopital-news-4_290824.webp', title: 'महतलाइफ सपोर्ट का दिया गया प्रशिक्षण' },
            { id: 8, image: 'assets/press/Raj-hsopital-news-5_290824.webp', title: 'राज अस्पताल में लगा कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर' },
            { id: 9, image: 'assets/press/Raj-hsopital-news-6_290824.webp', title: 'राज अस्पताल में लगा कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर' },
            { id: 10, image: 'assets/press/Raj-hsopital-news-7_290824.webp', title: 'Hospital Development News' },
            { id: 11, image: 'assets/press/CCT.webp', title: 'राज अस्पताल में शुरू हुआ सीसीटी ईएम कोर्स' },
            { id: 12, image: 'assets/press/CCT-1.webp', title: 'राज अस्पताल में सीसीटी ईएम कोर्स की हुई शुरूआत' },
            { id: 13, image: 'assets/press/Dr. Suprova.webp', title: 'Dr. Suprova Featured in Press' },
            { id: 14, image: 'assets/press/Dr. Suprova-1.webp', title: 'Dr. Suprova Medical Expertise' },
            { id: 15, image: 'assets/press/Dr-Rajesh-BLS-training-in-mecon.webp', title: 'बेसिक लाइफ सपोर्ट से बच सकती है जान' },
            { id: 16, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.27 PM.webp', title: 'स्वास्थ्य जांच कर बनाया गया आयुष्मान कार्ड' },
            { id: 17, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.28 PM.webp', title: 'रोटरी व राज अस्पताल ने जिलिंग सोरेन गांव में निःशुल्क मेगा स्वास्थ्य शिविर लगाया' },
            { id: 18, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.32 PM.webp', title: 'जोन्हा में रोटरी व राज अस्पताल का स्वास्थ्य शिविर' },
            { id: 19, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.05 PM.webp', title: 'बालक के जबड़े की अनोखी सर्जरी की' },
            { id: 20, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.06 PM.webp', title: 'राज अस्पताल में किशोर के जबड़े की हुई जटिल सर्जरी, 6 वर्ष पहले लगी थी गंभीर चोट' },
            { id: 21, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.07 PM.webp', title: 'राज अस्पताल में जबड़े की जटिल सर्जरी' },
            { id: 22, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.39 PM.webp', title: 'रांची में विल्सन रोग से पीड़ित नौ वर्षीय बच्चे की बचाई जान' },
            { id: 23, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.40 PM.webp', title: 'राज अस्पताल में विल्सन रोग से पीड़ित बच्चे की बची जान' },
            { id: 24, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.41 PM.webp', title: 'एक्यूट विल्सन से पीड़ित बच्चे की डॉक्टरों ने बचाई जान' },
            { id: 25, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.42 PM.webp', title: 'राज अस्पताल में विल्सन रोग से पीड़ित बच्चे की बची जान' },
            { id: 26, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.43 PM.webp', title: 'विल्सन रोग से पीड़ित बच्चे की राज अस्पताल में बची जान' },
            { id: 27, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.44 PM.webp', title: 'रांची के राज अस्पताल में वासन रोग से पीड़ित 9 वर्षीय लड़के की जान बचाई गई।' },
            { id: 28, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.45 PM.webp', title: 'विल्सन रोग से पीड़ित की बची जान बच्चों' },
            { id: 29, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.21 AM.webp', title: 'Medical Team Recognition' },
            { id: 30, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.22 AM.webp', title: 'जवान को एयरलिफ्ट कर रांची लाया' },
            { id: 31, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.23 AM.webp', title: 'राज्यपाल ने नक्सली ब्लास्ट में घायल जवान के स्वास्थ्य की ली जानकारी' },
            { id: 32, image: 'assets/press/IMG-20250222-WA0004.webp', title: 'राज्यपाल ने नक्सली ब्लास्ट में घायल जवान के स्वास्थ्य की ली जानकारी' },
            { id: 33, image: 'assets/press/IMG-20250222-WA0005.webp', title: 'आपातकालीन विभाग को एनएबीएच मान्यता' },
            { id: 34, image: 'assets/press/IMG-20250222-WA0006.webp', title: 'आपातकालीन विभाग को एनएबीएच मान्यता' },
            { id: 35, image: 'assets/press/IMG-20250222-WA0007.webp', title: 'आपातकालीन विभाग को एनएबीएच मान्यता' },
            { id: 36, image: 'assets/press/raj-news.webp', title: 'राज हॉस्पिटल ने प्रभात खबर कर्मियों के लिए लगाया कैंप, 113 को मिला परामर्श' }
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

        // TABS LOGIC
        function switchTab(tab) {
            const digitalSection = document.getElementById('digital-section');
            const printSection = document.getElementById('print-section');
            const tabDigital = document.getElementById('tab-digital');
            const tabPrint = document.getElementById('tab-print');

            if (tab === 'digital') {
                digitalSection.classList.remove('hidden');
                printSection.classList.add('hidden');
                
                tabDigital.classList.replace('bg-gray-200', 'bg-[#F9771B]');
                tabDigital.classList.replace('text-gray-700', 'text-white');
                tabDigital.classList.add('shadow-lg');
                
                tabPrint.classList.replace('bg-[#F9771B]', 'bg-gray-200');
                tabPrint.classList.replace('text-white', 'text-gray-700');
                tabPrint.classList.remove('shadow-lg');
            } else {
                digitalSection.classList.add('hidden');
                printSection.classList.remove('hidden');
                
                tabPrint.classList.replace('bg-gray-200', 'bg-[#F9771B]');
                tabPrint.classList.replace('text-gray-700', 'text-white');
                tabPrint.classList.add('shadow-lg');
                
                tabDigital.classList.replace('bg-[#F9771B]', 'bg-gray-200');
                tabDigital.classList.replace('text-white', 'text-gray-700');
                tabDigital.classList.remove('shadow-lg');
            }
        }

        // RENDER DIGITAL NEWS
        function renderDigitalNews() {
            const container = document.getElementById('digital-news-container');
            container.innerHTML = digitalNews.map((news, index) => `
                <a href="${news.link}" target="_blank" rel="noopener noreferrer" 
                   class="flex flex-col justify-between bg-white border border-[#F9771B]/30 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow fade-in h-full" 
                   style="animation-delay: ${index * 0.1}s">
                    <h3 class="text-[#0191c7] font-semibold text-lg mb-4 group-hover:underline">
                        ${news.title}
                    </h3>
                    <time class="text-xs text-gray-500 block text-left mt-auto">${news.date}</time>
                </a>
            `).join('');
            
            // Re-trigger observer for new elements
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        }

        // RENDER PRINT MEDIA
        function renderPrintMedia() {
            const container = document.getElementById('print-media-container');
            container.innerHTML = [...newspaperClippings].reverse().map((clip, index) => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer fade-in" 
                     onclick="openImageModal('${clip.image}')"
                     style="animation-delay: ${index * 0.05}s">
                    <div class="h-72 overflow-hidden">
                        <img src="${clip.image}" alt="${clip.title}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-4 bg-white">
                        <h3 class="text-gray-900 font-semibold text-base line-clamp-2">${clip.title}</h3>
                    </div>
                </div>
            `).join('');
            
             // Re-trigger observer for new elements
             document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        }

        // MODAL LOGIC
        function openImageModal(imageSrc) {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-image');
            modalImg.src = imageSrc;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal() {
            const modal = document.getElementById('image-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
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
             // Initialize Feathers
            feather.replace();

            // Initial Render
            renderDigitalNews();
            renderPrintMedia();
            
            // Observe initial static elements
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        });

    </script>
</body>
</html>
