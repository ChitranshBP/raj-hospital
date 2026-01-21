<?php
$pageTitle = "Dr. Tanushree Chakroborty - Obstetrics & Gynaecology | Raj Hospitals";
$pageDescription = "Dr. Tanushree Chakroborty has over 15 years of experience in obstetrics and gynaecology, specializing in VIA and colposcopy.";
$base_url = "../";
include($base_url . 'header.php');
?>

<div class="doctor-profile-page font-outfit">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-[#1A3C8E] to-[#122A63] text-white overflow-hidden">
        <div class="absolute inset-0 bg-[url('../assets/pattern.png')] opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center gap-12">
                <div class="w-full md:w-1/3 flex justify-center md:justify-end">
                    <div
                        class="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <img src="../assets/Doc-Side/tanushree_gyane.webp" alt="Dr. Tanushree Chakroborty"
                            class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="w-full md:w-2/3 text-center md:text-left">
                    <span
                        class="inline-block px-4 py-1.5 bg-[#E31C23] text-white text-sm font-semibold rounded-full mb-4 shadow-lg">Obstetrics
                        & Gynaecology</span>
                    <h1 class="text-4xl md:text-5xl font-bold mb-2">Dr. Tanushree Chakroborty</h1>
                    <p class="text-xl text-gray-200 mb-4">MBBS, DGO</p>
                    <div class="flex flex-wrap justify-center md:justify-start gap-6 mb-8 text-gray-300">
                        <div class="flex items-center gap-2">
                            <i data-feather="briefcase" class="w-5 h-5 text-[#E31C23]"></i>
                            <span>15+ Years Experience</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-feather="map-pin" class="w-5 h-5 text-[#E31C23]"></i>
                            <span>Raj Hospitals, Ranchi</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-feather="user-check" class="w-5 h-5 text-[#E31C23]"></i>
                            <span>Verified Specialist</span>
                        </div>
                    </div>
                    <button onclick="openBookingModal('Dr. Tanushree Chakroborty')"
                        class="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A3C8E] font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Appointment
                        <i data-feather="calendar" class="ml-2 w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Left Column -->
                <div class="lg:col-span-2 space-y-12">

                    <!-- Expertise -->
                    <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-[#1A3C8E] mb-6 flex items-center gap-3">
                            <span class="w-2 h-8 bg-[#E31C23] rounded-full"></span>
                            Areas of Expertise
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <?php
                            $expertise = [
                                'VIA',
                                'Colposcopy'
                            ];
                            foreach ($expertise as $item) {
                                echo '
                                <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#1A3C8E]/5 transition-colors group">
                                    <div class="w-2 h-2 mt-2 rounded-full bg-[#E31C23] group-hover:scale-125 transition-transform"></div>
                                    <span class="text-gray-700 font-medium">' . $item . '</span>
                                </div>';
                            }
                            ?>
                        </div>
                    </div>

                    <!-- Education -->
                    <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-[#1A3C8E] mb-6 flex items-center gap-3">
                            <span class="w-2 h-8 bg-[#E31C23] rounded-full"></span>
                            Education & Training
                        </h2>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div
                                    class="w-12 h-12 rounded-full bg-[#1A3C8E]/10 flex items-center justify-center flex-shrink-0">
                                    <i data-feather="award" class="w-6 h-6 text-[#1A3C8E]"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">MBBS, DGO</h3>
                                    <p class="text-[#E31C23] font-medium">District Hospital Ramgarh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Memberships -->
                    <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h2 class="text-2xl font-bold text-[#1A3C8E] mb-6 flex items-center gap-3">
                            <span class="w-2 h-8 bg-[#E31C23] rounded-full"></span>
                            Professional Memberships
                        </h2>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3 text-gray-700">
                                <i data-feather="check-circle" class="w-5 h-5 text-[#E31C23] mt-1 shrink-0"></i>
                                <span>Cervical Cancer Research Programme</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- Right Column - Sidebar -->
                <div class="lg:col-span-1">
                    <div class="sticky top-24 space-y-6">
                        <!-- Quick Contact -->
                        <div class="bg-[#1A3C8E] text-white p-6 rounded-2xl shadow-xl">
                            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                                <i data-feather="phone" class="w-5 h-5"></i>
                                Quick Contact
                            </h3>
                            <div class="space-y-6">
                                <div>
                                    <p class="text-sm text-gray-300 mb-1">Appointment Booking</p>
                                    <a href="tel:06512446111"
                                        class="text-2xl font-bold hover:text-[#E31C23] transition-colors">0651-2446111</a>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-300 mb-1">Health Helpline</p>
                                    <a href="tel:+919771488888"
                                        class="text-2xl font-bold hover:text-[#E31C23] transition-colors">+91 97714
                                        88888</a>
                                </div>
                                <div class="pt-6 border-t border-white/10">
                                    <p class="text-sm text-gray-300 mb-2">OPD Timing</p>
                                    <p class="font-medium">Mon - Sat: 10:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                            <button onclick="openBookingModal('Dr. Tanushree Chakroborty')"
                                class="w-full mt-8 bg-[#E31C23] py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<!-- Modal -->
<div id="bookingModal" class="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300"
    aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm" onclick="closeBookingModal()">
    </div>
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg scale-95 opacity-0 duration-300"
            id="modalContent">
            <!-- Modal Header -->
            <div class="bg-[#1A3C8E] px-4 py-3 sm:px-6 flex justify-between items-center">
                <h3 class="text-lg font-bold leading-6 text-white" id="modal-title">
                    Book Appointment for <span id="modalDoctorName" class="text-[#E31C23]"></span>
                </h3>
                <button type="button" class="text-white hover:text-gray-200 transition-colors"
                    onclick="closeBookingModal()">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Modal Body -->
            <div class="px-4 py-6 sm:px-6">
                <form class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Patient Name</label>
                        <input type="text" name="name" id="name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1A3C8E] focus:ring-[#1A3C8E] sm:text-sm p-2 border"
                            placeholder="Enter patient name">
                    </div>
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" name="phone" id="phone"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1A3C8E] focus:ring-[#1A3C8E] sm:text-sm p-2 border"
                            placeholder="Enter phone number">
                    </div>
                    <div>
                        <label for="date" class="block text-sm font-medium text-gray-700">Preferred Date</label>
                        <input type="date" name="date" id="date"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1A3C8E] focus:ring-[#1A3C8E] sm:text-sm p-2 border">
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Reason for Visit</label>
                        <textarea name="message" id="message" rows="3"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1A3C8E] focus:ring-[#1A3C8E] sm:text-sm p-2 border"
                            placeholder="Briefly describe your health concern"></textarea>
                    </div>
                </form>
            </div>

            <!-- Modal Footer -->
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t">
                <button type="button"
                    class="inline-flex w-full justify-center rounded-md bg-[#E31C23] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto transition-colors"
                    onclick="submitBooking()">
                    Confirm Booking
                </button>
                <button type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-colors"
                    onclick="closeBookingModal()">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</div>

<script>
    // Animation for sections
    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        });

        document.querySelectorAll('section > div > div > div').forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });

        feather.replace();
    });

    // Modal Functions
    function openBookingModal(doctorName) {
        const modal = document.getElementById('bookingModal');
        const modalContent = document.getElementById('modalContent');
        const doctorNameSpan = document.getElementById('modalDoctorName');

        doctorNameSpan.textContent = doctorName;
        modal.classList.remove('hidden');

        // Small delay to allow display:block to apply before animation
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
    }

    function closeBookingModal() {
        const modal = document.getElementById('bookingModal');
        const modalContent = document.getElementById('modalContent');

        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    function submitBooking() {
        // Here you would typically handle the form submission
        alert('Thank you for your booking request! Our team will contact you shortly to confirm.');
        closeBookingModal();
    }

    // Close modal on outside click
    window.onclick = function (event) {
        const modal = document.getElementById('bookingModal');
        if (event.target == modal) {
            closeBookingModal();
        }
    }
</script>

<?php include($base_url . 'footer.php'); ?>