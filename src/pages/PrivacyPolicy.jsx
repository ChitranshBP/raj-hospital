import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiShield, FiEye, FiAlertCircle } = FiIcons;

const PrivacyPolicy = () => {
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
                <SafeIcon icon={FiLock} className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
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
              <SafeIcon icon={FiShield} className="w-6 h-6" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Raj Hospitals ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our healthcare services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By using our website or services, you consent to the practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">1. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, age, date of birth, and gender</li>
                  <li>Contact information (email address, phone number, address)</li>
                  <li>Emergency contact information</li>
                  <li>Government-issued identification numbers (for verification purposes)</li>
                  <li>Insurance information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1.2 Medical Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  In the course of providing healthcare services, we collect medical information including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Medical history and health records</li>
                  <li>Current medications and allergies</li>
                  <li>Laboratory test results and diagnostic reports</li>
                  <li>Treatment plans and clinical notes</li>
                  <li>Billing and payment information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1.3 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>IP address and browser information</li>
                  <li>Device information (type, operating system)</li>
                  <li>Usage data (pages visited, time spent on pages)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Medical Care:</strong> To provide, coordinate, and manage your healthcare services</li>
                <li><strong className="text-gray-900">Appointment Management:</strong> To schedule, confirm, and remind you of appointments</li>
                <li><strong className="text-gray-900">Communication:</strong> To communicate with you about your treatment, test results, and health-related matters</li>
                <li><strong className="text-gray-900">Billing:</strong> To process payments and insurance claims</li>
                <li><strong className="text-gray-900">Quality Improvement:</strong> To improve our services and patient care</li>
                <li><strong className="text-gray-900">Legal Compliance:</strong> To comply with legal and regulatory requirements</li>
                <li><strong className="text-gray-900">Research:</strong> For anonymized medical research (with appropriate consent)</li>
                <li><strong className="text-gray-900">Website Enhancement:</strong> To improve website functionality and user experience</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing and Disclosure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We respect your privacy and do not sell your personal or medical information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Healthcare Providers:</strong> With doctors, nurses, and other healthcare professionals involved in your care</li>
                <li><strong className="text-gray-900">Insurance Companies:</strong> For claims processing and verification of coverage</li>
                <li><strong className="text-gray-900">Legal Requirements:</strong> When required by law, court order, or regulatory authorities</li>
                <li><strong className="text-gray-900">Emergency Situations:</strong> To protect your health and safety in emergency situations</li>
                <li><strong className="text-gray-900">Service Providers:</strong> With third-party service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li><strong className="text-gray-900">Family Members:</strong> With your designated family members or representatives (with your consent)</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">4. Data Security</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encrypted data transmission using SSL/TLS protocols</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection and confidentiality</li>
                <li>Physical security measures at our facilities</li>
                <li>Access controls and authentication mechanisms</li>
              </ul>
              <p className="leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but continuously work to maintain the highest standards.
              </p>
            </div>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">You have the following rights regarding your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-900">Access:</strong> Right to access your medical records and personal information</li>
                <li><strong className="text-gray-900">Correction:</strong> Right to request correction of inaccurate information</li>
                <li><strong className="text-gray-900">Restriction:</strong> Right to request restrictions on certain uses of your information</li>
                <li><strong className="text-gray-900">Confidential Communication:</strong> Right to request communication through specific means</li>
                <li><strong className="text-gray-900">Accounting:</strong> Right to receive an accounting of disclosures of your information</li>
                <li><strong className="text-gray-900">Opt-Out:</strong> Right to opt-out of marketing communications</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact our Privacy Officer using the contact information provided below.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">6. Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our website uses cookies and similar technologies to enhance user experience. Cookies are small files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">7. Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We take special care to protect the privacy of children. For patients under 18 years of age, we require parental or guardian consent before collecting or using their information. Parents and guardians have the right to review, request deletion, or refuse further collection of their child's information.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">8. Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We retain your medical records and personal information for the period required by law and as necessary for legal, regulatory, and operational purposes. Medical records are typically maintained for a minimum period as specified by Indian healthcare regulations.
              </p>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">9. Third-Party Links</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">10. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">11. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer
              </p>
              {/* <div className="bg-gray-50 rounded-lg p-6 mt-4">
                <p className="font-semibold text-gray-900 mb-2">Raj Hospitals - Privacy Officer</p>
                <p className="text-gray-700">Email: privacy@rajhospitals.com</p>
                <p className="text-gray-700">Phone: +91 651 230 3456</p>
                <p className="text-gray-700">Address: Bariatu Road, Ranchi, Jharkhand - 834009</p>
                <p className="text-gray-700 mt-2">Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM</p>
              </div> */}
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#0191C7] mb-4">12. Legal Compliance</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information Technology Act, 2000 and its amendments</li>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations</li>
                <li>Other applicable Indian laws and regulations regarding data protection and patient privacy</li>
              </ul>
            </div>
          </section>

          {/* Privacy Notice */}
          <div className="mt-12 bg-gradient-to-r from-[#0191C7]/10 to-[#F9771B]/10 border-l-4 border-[#F9771B] rounded-lg p-6">
            <div className="flex items-start gap-3">
              <SafeIcon icon={FiEye} className="w-6 h-6 text-[#F9771B] mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
                <p className="text-gray-700 leading-relaxed">
                  At Raj Hospitals, we are committed to maintaining the confidentiality and security of your personal and medical information. We continuously review and update our privacy practices to ensure the highest level of protection for your data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
