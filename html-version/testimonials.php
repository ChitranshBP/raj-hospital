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
    <section class="bg-gradient-to-br from-[#fef5f3] to-[#f0fbff] mt-32 py-16">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center fade-in">
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Patient <span class="text-[#ea5234]">Testimonials</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from real patients who have experienced our compassionate care and medical excellence
                </p>
            </div>
        </div>
    </section>

    <!-- Tabs Section -->
    <section class="py-8 bg-white border-b border-gray-100 sticky top-[100px] z-30 transition-all duration-300" id="tabs-section">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col gap-6">
                <!-- Tab Navigation -->
                <div class="flex justify-center gap-4">
                    <button onclick="switchTab('written')" id="tab-written" class="px-8 py-3 rounded-lg font-semibold transition-all duration-200 bg-[#fc684b] text-white shadow-lg">
                        Written Testimonials
                    </button>
                    <button onclick="switchTab('video')" id="tab-video" class="px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
                        <i data-feather="play" class="w-4 h-4"></i>
                        Video Testimonials
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 bg-gray-50 min-h-screen">
        <div class="max-w-7xl mx-auto px-4">
            
            <!-- Written Testimonials -->
            <div id="content-written" class="block fade-in">
                <!-- Fallback: Show static testimonials -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="written-testimonials-grid">
                    <!-- Javascript will populate this -->
                </div>
            </div>

            <!-- Video Testimonials -->
            <div id="content-video" class="hidden fade-in">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="video-testimonials-grid">
                     <!-- Javascript will populate this -->
                </div>
            </div>
        </div>
    </section>

    <!-- Video Modal -->
    <div id="video-modal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 hidden" onclick="closeModal()">
        <div class="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden" onclick="event.stopPropagation()">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all">
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
            <div class="relative pt-[56.25%]">
                <iframe id="modal-iframe" class="absolute top-0 left-0 w-full h-full" src="" title="Video Testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <?php include $base_url . 'components/footer.php'; ?>

    <script>
        // Testimonials Data
        const testimonials = [
            {
                id: 1,
                name: 'Rajesh Kumar',
                location: 'Ranchi, Jharkhand',
                rating: 5,
                text: 'Excellent care during my cardiac surgery. The doctors and staff were extremely professional and caring. Dr. Modi\'s expertise saved my life. I was particularly impressed with the cleanliness of the facilities and the attentiveness of the nursing staff throughout my recovery. Highly recommend Raj Hospitals to anyone needing cardiac care.',
                treatment: 'Cardiac Surgery',
                department: 'Cardiology',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'March 15, 2024'
            },
            {
                id: 2,
                name: 'Priya Sharma',
                location: 'Bokaro, Jharkhand',
                rating: 5,
                text: 'Outstanding maternity care from Dr. Anupama Mahi. The facilities are modern and clean. The nursing staff was incredibly supportive throughout my delivery. The entire experience, from prenatal care to postpartum support, exceeded my expectations. The lactation specialist was particularly helpful for a first-time mother like me. Thank you for the wonderful experience.',
                treatment: 'Maternity Care',
                department: 'Obstetrics & Gynecology',
                image: 'https://images.unsplash.com/photo-1543430720-fa600c67e423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjB3b21hbiUyMHdpdGglMjBhJTIwYmx1cnJlZCUyMGJhY2tncm91bmQufGVufDB8fHx8MTc1NTA4Njk5MXww&ixlib=rb-4.1.0&q=80&w=200$w=150',
                date: 'February 28, 2024'
            },
            {
                id: 3,
                name: 'Anil Singh',
                location: 'Dhanbad, Jharkhand',
                rating: 5,
                text: 'During COVID-19, when I needed dialysis, Raj Hospitals provided exceptional care. Dr. Avinash Kumar and his team ensured my safety while providing the best treatment. The safety protocols were thorough and made me feel secure during a very uncertain time. The entire nephrology department deserves recognition for their dedication and expertise. Forever grateful.',
                treatment: 'Nephrology Treatment',
                department: 'Nephrology',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'January 10, 2024'
            },
            {
                id: 4,
                name: 'Sunita Devi',
                location: 'Jamshedpur, Jharkhand',
                rating: 5,
                text: 'My father\'s emergency surgery was handled with utmost care and professionalism. The 24/7 emergency service is truly commendable. The hospital staff treated us like family. Dr. Manish Kumar performed the surgery with great skill, and the ICU team\'s attentiveness helped my father recover quickly. The hospital\'s prompt response to our emergency situation saved my father\'s life.',
                treatment: 'Emergency Surgery',
                department: 'Emergency Care',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'April 5, 2024'
            },
            {
                id: 5,
                name: 'Vikash Gupta',
                location: 'Hazaribagh, Jharkhand',
                rating: 5,
                text: 'Excellent orthopedic treatment for my knee replacement. Dr. Ravi Kumar Sinha and the physiotherapy team were outstanding. Clean facilities, caring staff, and affordable quality care. The rehabilitation program designed for me was comprehensive and effective. Within weeks, I was able to walk comfortably again. Highly satisfied with the entire treatment journey.',
                treatment: 'Orthopedic Surgery',
                department: 'Orthopedics',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'March 22, 2024'
            },
            {
                id: 6,
                name: 'Meera Kumari',
                location: 'Ranchi, Jharkhand',
                rating: 5,
                text: 'The neurology department provided exceptional care for my stroke treatment. Dr. Suresh Kumar Jha\'s quick response, advanced facilities, and continuous monitoring helped in my complete recovery. The rehabilitation therapists worked tirelessly to help me regain my speech and mobility. My family and I are deeply thankful for the compassionate care I received during such a difficult time.',
                treatment: 'Neurology Treatment',
                department: 'Neurology',
                image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'February 15, 2024'
            },
            {
                id: 7,
                name: 'Rakesh Singh',
                location: 'Patna, Bihar',
                rating: 5,
                text: 'Traveled from Patna for my cataract surgery at Raj Hospitals. Dr. Meera Devi\'s expertise in ophthalmology is remarkable. The procedure was quick, painless, and the results are amazing. I can now see clearly without glasses for the first time in decades. The follow-up care was thorough and the entire eye care team was professional and reassuring throughout.',
                treatment: 'Cataract Surgery',
                department: 'Ophthalmology',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'January 30, 2024'
            },
            {
                id: 8,
                name: 'Sanjay Prasad',
                location: 'Ranchi, Jharkhand',
                rating: 5,
                text: 'My experience with the ENT department was excellent. Dr. Vikash Kumar diagnosed and treated my chronic sinusitis that had been bothering me for years. The endoscopic procedure was minimally invasive with quick recovery. I appreciate the detailed explanation of my condition and treatment options. I can finally breathe normally and sleep well after years of discomfort.',
                treatment: 'Sinus Surgery',
                department: 'ENT',
                image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                date: 'April 12, 2024'
            }
        ];

        // Video Testimonials Data
        const videoTestimonials = [
            {
                videoId: "Gi1WhJ1dR6g",
                patient: "Emergency Brain Care That Saved Prem Kumar Singh | Raj Hospitals",
                desc: "I felt cared for every step of the way.",
                thumbnail: "https://img.youtube.com/vi/Gi1WhJ1dR6g/maxresdefault.jpg",
            },
            {
                videoId: "HARE579wkdY",
                patient: "Knee replacement surgery | Raj Hospitals",
                desc: "Mr. Rajwar brought his wife, Mrs. Neelam Rajwar, to Raj Hospitals for a knee replacement surgery — and today, they walk away with smiles and gratitude.",
                thumbnail: "https://img.youtube.com/vi/HARE579wkdY/maxresdefault.jpg",
            },
            {
                videoId: "mHiO2RYdgds",
                patient: "Cancer treatment | Patient Testimonial ",
                desc: "The doctors and staff were exceptional.",
                thumbnail: "https://img.youtube.com/vi/mHiO2RYdgds/maxresdefault.jpg",
            },
            {
                videoId: "vg59yGKWz_s",
                patient: "Neurosurgery Success Story at Raj Hospitals",
                desc: "Under the expert care of Dr. Ahmad Hussain (Neurosurgeon) and Dr. Neelam Kumari, our patient has made an incredible recovery.",
                thumbnail: "https://img.youtube.com/vi/vg59yGKWz_s/maxresdefault.jpg",
            },
            {
                videoId: "-QcubD0G-A4",
                patient: "Appendix Treatment | Patient Testimonial | Raj Hospitals",
                desc: "Exceptional care and treatment experience.",
                thumbnail: "https://img.youtube.com/vi/-QcubD0G-A4/maxresdefault.jpg",
            },
            {
                videoId: "7aQnhMDBKRM",
                patient: "Breathing Treatment | Patient Testimonial | Raj Hospitals",
                desc: "Watch this real patient testimonial sharing their experience with breathing treatment at Raj Hospitals under the expert care of Dr. Sainik Dutta.",
                thumbnail: "https://img.youtube.com/vi/7aQnhMDBKRM/maxresdefault.jpg",
            },
            {
                videoId: "yThRjkoljvc",
                patient: "Jaundice Treatment | Patient Testimonial | Raj Hospitals",
                desc: "Watch this real patient testimonial where Ms. Divya Kumari shares her experience of jaundice treatment at Raj Hospitals under the expert care of Dr. Ravish Ranjan.",
                thumbnail: "https://img.youtube.com/vi/yThRjkoljvc/maxresdefault.jpg",
            },
            {
                videoId: "aQBEpvueG5U",
                patient: "Jaundice Treatment | Patient Testimonial | Raj Hospitals",
                desc: "Watch this real patient testimonial where Mrs. Anita Kumari shares her experience of jaundice treatment at Raj Hospitals under the expert care of Dr. Ravish Ranjan.",
                thumbnail: "https://img.youtube.com/vi/aQBEpvueG5U/maxresdefault.jpg",
            },
            {
                videoId: "nrBUSAEFOnc",
                patient: "Little Finger Fracture Treatment | Patient Testimonial | Raj Hospitals",
                desc: "After slipping in his washroom, Mr. Aniket suffered a fracture in the little finger of his right hand. He was immediately brought to the Emergency Department at Raj Hospitals, where an X-ray confirmed the fracture. The surgery was successfully performed by Dr. Mozammil Pheroz using K-wire fixation.",
                thumbnail: "https://img.youtube.com/vi/nrBUSAEFOnc/maxresdefault.jpg",
            },
            {
                videoId: "8BIt5vJVgYI",
                patient: "How Knee Replacement Changed Her Life | Testimonial of Shejhari Devi",
                desc: "After months of severe knee pain that affected even her daily routine, Mrs. Shejhari Devi finally found relief under the expert care of Dr. Deepak Verma.",
                thumbnail: "https://img.youtube.com/vi/8BIt5vJVgYI/maxresdefault.jpg",
            },
            {
                videoId: "DOSuZZjZiZ8",
                patient: "Stomach cancer treatment | Patient Testimonial",
                desc: "Meet Mr. Anil Prasad Sahu, who came to us with advanced stomach cancer and a heart full of questions.",
                thumbnail: "https://img.youtube.com/vi/DOSuZZjZiZ8/maxresdefault.jpg",
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

        // Testimonial Logic
        function renderWrittenTestimonials() {
            const container = document.getElementById('written-testimonials-grid');
            if (!container || !testimonials || testimonials.length === 0) return;

            container.innerHTML = testimonials.map((t, index) => `
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="absolute top-6 right-6 text-[#fbd7d0]">
                        <i data-feather="message-circle" class="w-12 h-12"></i>
                    </div>
                    
                    <div class="flex space-x-1 mb-6">
                        ${Array(t.rating).fill('<i data-feather="star" class="w-5 h-5 text-yellow-400 fill-current"></i>').join('')}
                    </div>

                    <blockquote class="text-gray-700 leading-relaxed mb-6 text-lg">
                        "${t.text}"
                    </blockquote>

                    <div class="flex items-center space-x-4 pt-4 border-t border-gray-100">
                        <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                            <img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="flex-grow">
                            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                                <div>
                                    <h4 class="font-bold text-gray-900 text-lg">${t.name}</h4>
                                    <p class="text-gray-600 text-sm">${t.location}</p>
                                </div>
                                <div class="mt-2 md:mt-0 md:text-right">
                                    <span class="inline-block bg-[#fde9e6] text-[#c4401f] px-3 py-1 rounded-full text-xs font-medium">
                                        ${t.treatment}
                                    </span>
                                    <p class="text-gray-500 text-xs mt-1">${t.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            feather.replace();
        }

        function renderVideoTestimonials() {
            const container = document.getElementById('video-testimonials-grid');
            if (!container || !videoTestimonials || videoTestimonials.length === 0) return;

            container.innerHTML = videoTestimonials.map((v, index) => `
                <div class="bg-white border border-[#fde9e6] rounded-xl shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow fade-in" style="animation-delay: ${index * 0.1}s">
                    <button onclick="openModal('${v.videoId}')" class="relative group w-full text-left cursor-pointer">
                        <img src="${v.thumbnail}" alt="Testimonial by ${v.patient}" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                            <div class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <i data-feather="play" class="w-8 h-8 text-[#ea5234] ml-1"></i>
                            </div>
                        </div>
                    </button>
                    <div class="p-4 flex-grow flex flex-col">
                        <h3 class="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">${v.patient}</h3>
                        <p class="text-xs text-gray-600 line-clamp-2">${v.desc}</p>
                    </div>
                </div>
            `).join('');
            feather.replace();
        }

        window.switchTab = function(tabId) {
            const contentWritten = document.getElementById('content-written');
            const contentVideo = document.getElementById('content-video');
            const tabWritten = document.getElementById('tab-written');
            const tabVideo = document.getElementById('tab-video');

            if (tabId === 'written') {
                contentWritten.classList.remove('hidden');
                contentWritten.classList.add('block');
                contentVideo.classList.remove('block');
                contentVideo.classList.add('hidden');

                tabWritten.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                tabWritten.classList.add('bg-[#fc684b]', 'text-white', 'shadow-lg');
                
                tabVideo.classList.remove('bg-[#fc684b]', 'text-white', 'shadow-lg');
                tabVideo.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            } else {
                contentWritten.classList.remove('block');
                contentWritten.classList.add('hidden');
                contentVideo.classList.remove('hidden');
                contentVideo.classList.add('block');

                tabVideo.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
                tabVideo.classList.add('bg-[#fc684b]', 'text-white', 'shadow-lg');

                tabWritten.classList.remove('bg-[#fc684b]', 'text-white', 'shadow-lg');
                tabWritten.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
            }
        }

        window.openModal = function(videoId) {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            modal.classList.remove('hidden');
        }

        window.closeModal = function() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            iframe.src = ''; 
            modal.classList.add('hidden');
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

            // Render Testimonials
            renderWrittenTestimonials();
            renderVideoTestimonials();

            // Initialize Animations
            document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

            // Load Review Magnet
            const script = document.createElement('script');
            script.src = 'https://reviewmagnet.in/widget-loader.js';
            script.async = true;
            document.body.appendChild(script);
        });
    </script>
</body>
</html>
