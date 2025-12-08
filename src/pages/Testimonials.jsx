import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiQuote, FiUser, FiFilter, FiSearch, FiPlay } = FiIcons;

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('written');
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVideoId, setModalVideoId] = useState(null);

  // Load Review Magnet script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://reviewmagnet.in/widget-loader.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Testimonial data
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
  }];


  // Video testimonials data
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
      desc: "The doctors and staff were exceptional.",
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
  ];

  // Get unique departments for filter
  const departments = ['All', ...new Set(testimonials.map((item) => item.department))];

  // Filter testimonials based on search term and category
  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesSearch = testimonial.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.treatment.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = filterCategory === 'All' || testimonial.department === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Patient <span className="text-primary-600">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have experienced our compassionate care and medical excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Tab Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('written')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'written'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Written Testimonials
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'video'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <SafeIcon icon={FiPlay} className="w-4 h-4" />
                Video Testimonials
              </button>
            </div>

            {/* Search and Filter - Only for Written Testimonials */}
            {activeTab === 'written' && (
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search testimonials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiFilter} className="text-gray-500 w-5 h-5" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Written Testimonials - Review Magnet Widget */}
          {activeTab === 'written' && (
            <div className="w-full">
              {/* Review Magnet Widget - Custom Element (works on production after whitelisting) */}
              <div className="mb-8 w-full">
                <emr-simple-grid widget-id="57896a9d-abb9-459e-bd4c-51b87772150f"></emr-simple-grid>
              </div>

              {/* Fallback: Show static testimonials */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-primary-100">
                      <SafeIcon icon={FiQuote} className="w-12 h-12" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {testimonial.location}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0 md:text-right">
                            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                              {testimonial.treatment}
                            </span>
                            <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Note about testimonials */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <p className="text-sm text-blue-800">
                  <strong>What Happens on Production:</strong> When deployed to your production domain (after whitelisting it with Review Magnet), the widget will load and display above these static testimonials. Both Review Magnet reviews AND our featured patient stories will be visible. During development on localhost, you'll see our beautifully designed static testimonials!
                </p>
              </div>
            </div>
          )}

          {/* Video Testimonials */}
          {activeTab === 'video' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTestimonials.map((test, index) =>
            <motion.div
              key={test.videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-primary-100 rounded-xl shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow">

              <button
                onClick={() => setModalVideoId(test.videoId)}
                className="relative group w-full text-left cursor-pointer">

                <img
                  src={test.thumbnail}
                  alt={`Testimonial by ${test.patient}`}
                  className="w-full h-48 object-cover" />

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SafeIcon icon={FiPlay} className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              </button>

              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {test.patient}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {test.desc}
                </p>
              </div>
            </motion.div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {modalVideoId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setModalVideoId(null)}>

          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}>

            <button
              onClick={() => setModalVideoId(null)}
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all">

              <SafeIcon icon={FiIcons.FiX} className="w-6 h-6" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title="Video Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>

            </div>
          </div>
        </div>
      )}

      {/* Share Your Experience CTA */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 text-center">

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your feedback helps us improve and inspires others seeking quality healthcare. Tell us about your experience at Raj Hospitals.
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="w-5 h-5" />
              <span>Submit Your Testimonial</span>
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>);

};

export default Testimonials;