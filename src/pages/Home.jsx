import React from 'react';
import HeroSection from '../components/HeroSection';
import TabbedServicesSection from '../components/TabbedServicesSection';
import AboutHospitalSection from '../components/AboutHospitalSection';
import DoctorsSection from '../components/DoctorsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSlider from '../components/TestimonialsSlider';
import HealthBlogSection from '../components/HealthBlogSection';
import StatsSection from '../components/StatsSection';
import FacilitiesSection from '../components/FacilitiesSection';

const Home = () => {
  return (
    <div>
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="services">
        <TabbedServicesSection />
      </div>
      <StatsSection />
      <div id="about">
        <AboutHospitalSection />
      </div>
      <WhyChooseUs />
      <div id="doctors">
        <DoctorsSection />
      </div>
    
      <TestimonialsSlider />
      <HealthBlogSection />
      <div id="contact">
        <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Contact <span className="text-primary-600">Raj Hospitals</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with us for appointments, inquiries, or emergency care. We're here to help you 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Emergency</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">+91 977 14 88888</p>
                <p className="text-gray-600 text-sm">Call us anytime for emergency medical assistance</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">Ranchi, Jharkhand</p>
                <p className="text-gray-600 text-sm">Easy to reach location in the heart of Ranchi</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">info@rajhospitals.com</p>
                <p className="text-gray-600 text-sm">Send us your queries and we'll respond promptly</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Working Hours</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">24/7 Open</p>
                <p className="text-gray-600 text-sm">We provide round-the-clock medical services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>);

};

export default Home;