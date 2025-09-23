import React from 'react';
import { motion } from 'framer-motion';

const ServicesOverview = () => {
  const services = [
  {
    title: 'Cardiology & Cardiac Sciences',
    description: 'Comprehensive heart care with advanced cardiac procedures',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/091b9e61-b25b-4812-8cd8-7615daae1bd5.png'
  },
  {
    title: 'Neurosciences & Neurosurgery',
    description: 'Expert neurological care and brain surgery',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Nephrology & Dialysis',
    description: 'Kidney care and dialysis services',
    image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Oncology & Cancer Care',
    description: 'Comprehensive cancer treatment and care',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Obstetrics & Gynecology',
    description: 'Women\'s health and maternity care',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Orthopedics & Joint Replacement',
    description: 'Bone and joint care with surgical expertise',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'General & Minimally Invasive Surgery',
    description: 'Advanced surgical procedures',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'ENT & Microsurgery',
    description: 'Ear, nose, and throat specialized care',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Gastroenterology',
    description: 'Digestive system health and treatment',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Emergency & Critical Care',
    description: '24/7 emergency medical services',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Pediatrics',
    description: 'Specialized care for children',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Urology',
    description: 'Urinary system and male reproductive health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Dermatology',
    description: 'Skin care and dermatological treatments',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Psychiatry',
    description: 'Mental health and psychological care',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Dental Sciences',
    description: 'Comprehensive dental care and oral health',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];


  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Medical <span className="text-primary-600">Specialties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services across 15+ specialties with expert doctors and modern facilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">

              {/* Service Image */}
              <div className="relative overflow-hidden h-48">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12">

          <button className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg">
            View All Specialties
          </button>
        </motion.div>
      </div>
    </section>);

};

export default ServicesOverview;