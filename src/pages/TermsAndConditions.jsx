import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiAlertCircle, FiShield } = FiIcons;

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0191C7] to-[#F9771B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <SafeIcon icon={FiFileText} className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Last Updated */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> December 11, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4 flex items-center gap-2">
              <SafeIcon icon={FiAlertCircle} className="w-6 h-6" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Raj Hospitals. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          {/* Use of Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">1. Use of Services</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong className="text-gray-900">1.1 Eligibility:</strong> You must be at least 18 years old to use our services or have parental/guardian consent.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">1.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">1.3 Accurate Information:</strong> You agree to provide accurate, current, and complete information when using our services and to update such information as necessary.
              </p>
            </div>
          </section>

          {/* Medical Services */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">2. Medical Services</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong className="text-gray-900">2.1 Professional Services:</strong> All medical services are provided by licensed healthcare professionals. However, the information on this website is for general informational purposes only and does not constitute medical advice.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">2.2 Appointments:</strong> Appointment bookings made through our website or contact forms are subject to confirmation. We reserve the right to reschedule or cancel appointments with prior notice.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">2.3 Emergency Services:</strong> This website and online services are not intended for medical emergencies. In case of a medical emergency, please call emergency services or visit our emergency department immediately.
              </p>
            </div>
          </section>

          {/* Payment and Billing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">3. Payment and Billing</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong className="text-gray-900">3.1 Payment Responsibility:</strong> Patients are responsible for all charges incurred for services rendered. Payment is expected at the time of service unless prior arrangements have been made.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">3.2 Insurance:</strong> We work with various insurance providers. However, insurance coverage and claims are subject to verification and approval by your insurance company.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">3.3 Billing Disputes:</strong> Any billing disputes must be reported within 30 days of receiving the bill. We will investigate and resolve disputes in a timely manner.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">4. Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong className="text-gray-900">4.1 Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Raj Hospitals and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">4.2 Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
              </p>
            </div>
          </section>

          {/* User Conduct */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">5. User Conduct</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Interfere with or disrupt our website or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any harmful code, viruses, or malware</li>
                <li>Harass, threaten, or harm other users or staff</li>
                <li>Provide false or misleading information</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">6. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                <strong className="text-gray-900">6.1 Disclaimer:</strong> Our website and services are provided "as is" without warranties of any kind, either express or implied.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">6.2 No Liability:</strong> To the fullest extent permitted by law, Raj Hospitals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">7. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Your privacy is important to us. Please refer to our Privacy Policy for information about how we collect, use, and protect your personal and medical information.
              </p>
            </div>
          </section>

          {/* Modifications to Terms */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">8. Modifications to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">9. Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ranchi, Jharkhand.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">10. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-gray-900 mb-2">Raj Hospitals</p>
                <p className="text-gray-700">Email: info@rajhospitals.com</p>
                <p className="text-gray-700">Phone: +91 651 230 3456</p>
                <p className="text-gray-700">Address: Bariatu Road, Ranchi, Jharkhand - 834009</p>
              </div>
            </div>
          </section>

          {/* Acceptance Notice */}
          <div className="mt-12 bg-gradient-to-r from-[#0191C7]/10 to-[#F9771B]/10 border-l-4 border-[#F9771B] rounded-lg p-6">
            <div className="flex items-start gap-3">
              <SafeIcon icon={FiShield} className="w-6 h-6 text-[#F9771B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using this website and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
