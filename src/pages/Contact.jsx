import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMapPin, FiMail, FiClock, FiSend, FiMessageSquare } = FiIcons;

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary-600">Raj Hospitals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for appointments, inquiries, or emergency care. We're here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
            { icon: FiPhone, title: '24/7 Emergency', info: '+91 977 14 88888', description: 'Call us anytime for emergency medical assistance', color: 'accent' },
            { icon: FiMapPin, title: 'Location', info: 'Ranchi, Jharkhand', description: 'Easy to reach location in the heart of Ranchi', color: 'primary' },
            { icon: FiMail, title: 'Email Us', info: 'info@rajhospitals.com', description: 'Send us your queries and we\'ll respond promptly', color: 'secondary' },
            { icon: FiClock, title: 'Working Hours', info: '24/7 Open', description: 'We provide round-the-clock medical services', color: 'primary' }].
            map((contact, index) =>
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">

                <div className={`w-16 h-16 bg-${contact.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={contact.icon} className={`w-8 h-8 text-${contact.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">{contact.info}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </motion.div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

              <div className="flex items-center space-x-3 mb-6">
                <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your first name" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your last name" />

                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email" />

                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number" />

                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="emergency">Emergency</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your message here...">
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">

                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8">

              {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
  <div className="aspect-video">
    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8753723757673!2d85.32022857588855!3d23.356529303782207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1a89d6881dd%3A0xd169ee225be1478!2sRaj%20Hospitals%20-%20Best%20Multi%20Specialty%20Hospital%20in%20Ranchi%20Jharkhand!5e0!3m2!1sen!2sin!4v1755580421244!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
  </div>

              </div>

              {/* Emergency Contact */}
              <div className="bg-accent-50 border border-accent-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-accent-600" />
                  <span>Emergency Contact</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  For immediate medical emergencies, please call our 24/7 emergency helpline:
                </p>
                <a
                  href="tel:+919771488888"
                  className="text-2xl font-bold text-accent-600 hover:text-accent-700 transition-colors">

                  +91 977 14 88888
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>

              {/* Departments */}
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Departments</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                  'Emergency Care',
                  'Cardiology',
                  'Neurology',
                  'Orthopedics',
                  'Pediatrics',
                  'Obstetrics',
                  'General Surgery',
                  'Nephrology'].
                  map((dept) =>
                  <div key={dept} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{dept}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

};

export default Contact;