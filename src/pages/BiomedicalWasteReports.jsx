import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiFileText, FiCalendar, FiShield } = FiIcons;

const BiomedicalWasteReports = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  // Biomedical waste reports data
  const reports = {
    2025: [
      { month: 'January', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/BMW-January-2025.pdf' },
      { month: 'February', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/FEB-2025.pdf' },
      { month: 'March', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/March-PDF.pdf' },
      { month: 'April', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/April-PDF.pdf' },
      { month: 'May', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/bmw-may-2025.pdf' },
      { month: 'June', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/BMW _ JUNE-2025.pdf' },
      { month: 'July', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/Biomedical-Waste-report-July 25.pdf' },
      { month: 'August', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/Biomedical-waste-report-August25.pdf' },
      { month: 'September', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/Biomedical waste Report September 25.pdf' },
      { month: 'November', year: '2025', status: 'completed', pdfUrl: '/assets/bmw/Biomedical waste Report Nov 25.pdf' }
    ],
    2024: [
      { month: 'January', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW JANUARY 2024.pdf' },
      { month: 'February', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW FEBRUARY 2024.pdf' },
      { month: 'March', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW MARCH 2024.pdf' },
      { month: 'April', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW APRIL 2024.pdf' },
      { month: 'May', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW MAY 2024.pdf' },
      { month: 'June', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW JUNE 2024.pdf' },
      { month: 'July', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW JULY 2024.pdf' },
      { month: 'August', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW AUGUST 2024.pdf' },
      { month: 'September', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW SEPTEMBER 2024.pdf' },
      { month: 'October', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW OCTOBER 2024.pdf' },
      { month: 'November', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/BMW NOVEMBER 2024.pdf' },
      { month: 'December', year: '2024', status: 'completed', pdfUrl: '/assets/bmw/dec-2024.pdf' }
    ],
    2023: [
      { month: 'January', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/JAN_001.pdf' },
      { month: 'February', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/FEB._001.pdf' },
      { month: 'March', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/MAR_001.pdf' },
      { month: 'April', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/APR_001.pdf' },
      { month: 'May', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/MAY_001.pdf' },
      { month: 'June', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/JUN_001.pdf' },
      { month: 'July', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/JUL_001.pdf' },
      { month: 'August', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/AUG_001.pdf' },
      { month: 'September', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/Monthly-BMW-Sep-23.pdf' },
      { month: 'October', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/Monthly-BMW-Oct-23.pdf' },
      { month: 'November', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/Monthly-BMW-Nov-23.pdf' },
      { month: 'December', year: '2023', status: 'completed', pdfUrl: '/assets/bmw/Monthly-BMW-Dec-23.pdf' }
    ]
  };

  const availableYears = Object.keys(reports);

  const handleDownload = (report) => {
    // Open PDF in new tab
    window.open(report.pdfUrl, '_blank');
  };


  return (
    <div>
      {/* Hero Section with Breadcrumb */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-32 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-orange-600 font-medium">Biomedical Waste Reports</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Biomedical Waste <span className="text-primary-600">Reports</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly biomedical waste management reports demonstrating our commitment to environmental safety and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100">

              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our comprehensive biomedical waste management ensures complete environmental safety and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-secondary-50 to-primary-50 p-6 rounded-2xl border border-secondary-100">

              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiFileText} className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Reports</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monthly detailed reports covering all aspects of biomedical waste generation, treatment, and disposal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-2xl border border-primary-100">

              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full compliance with Central and State Pollution Control Board regulations for biomedical waste management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Year Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Monthly Reports</h2>
              <p className="text-gray-600">Select year to view biomedical waste reports</p>
            </div>
            
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 text-gray-600" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white">

                {availableYears.map((year) =>
                <option key={year} value={year}>{year}</option>
                )}
              </select>
            </div>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {reports[selectedYear]?.map((report, index) =>
            <motion.div
              key={`${report.month}-${report.year}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">

                {/* Report Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <SafeIcon icon={FiFileText} className="w-8 h-8 text-primary-600" />
                </div>

                {/* Report Details */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{report.month} {report.year}</h3>
                  <p className="text-sm text-gray-600">Biomedical Waste Report</p>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleDownload(report)}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                  <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                  Download Report
                </button>
              </motion.div>
            )}
          </div>

          {/* Summary Statistics 
                                                                                                                                                                                 <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                                                                                                                                                                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                                                                                                                                                    <div className="flex items-center">
                                                                                                                                                                                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                                                                                                                                                        <SafeIcon icon={FiFileText} className="w-6 h-6 text-blue-600" />
                                                                                                                                                                                      </div>
                                                                                                                                                                                      <div className="ml-4">
                                                                                                                                                                                        <p className="text-sm font-medium text-gray-600">Total Reports</p>
                                                                                                                                                                                        <p className="text-2xl font-bold text-gray-900">{reports[selectedYear]?.length || 0}</p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                                                                                                                                                    <div className="flex items-center">
                                                                                                                                                                                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                                                                                                                                                        <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-600" />
                                                                                                                                                                                      </div>
                                                                                                                                                                                      <div className="ml-4">
                                                                                                                                                                                        <p className="text-sm font-medium text-gray-600">Completed</p>
                                                                                                                                                                                        <p className="text-2xl font-bold text-green-600">
                                                                                                                                                                                          {reports[selectedYear]?.filter((r) => r.status === 'completed').length || 0}
                                                                                                                                                                                        </p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                                                                                                                                                    <div className="flex items-center">
                                                                                                                                                                                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                                                                                                                                                                        <SafeIcon icon={FiCalendar} className="w-6 h-6 text-yellow-600" />
                                                                                                                                                                                      </div>
                                                                                                                                                                                      <div className="ml-4">
                                                                                                                                                                                        <p className="text-sm font-medium text-gray-600">Pending</p>
                                                                                                                                                                                        <p className="text-2xl font-bold text-yellow-600">
                                                                                                                                                                                          {reports[selectedYear]?.filter((r) => r.status === 'pending').length || 0}
                                                                                                                                                                                        </p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                   <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                                                                                                                                                                    <div className="flex items-center">
                                                                                                                                                                                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                                                                                                                                                        <SafeIcon icon={FiShield} className="w-6 h-6 text-orange-600" />
                                                                                                                                                                                      </div>
                                                                                                                                                                                      <div className="ml-4">
                                                                                                                                                                                        <p className="text-sm font-medium text-gray-600">Compliance</p>
                                                                                                                                                                                        <p className="text-2xl font-bold text-orange-600">100%</p>
                                                                                                                                                                                      </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                 </div>
                                                                                                                                                                                 */


          }
        </div>
      </section>

      {/* Information Footer */}
      <section className="py-12 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help with Reports?</h3>
          <p className="text-primary-100 mb-6">
            For any queries regarding biomedical waste reports or compliance requirements,
            please contact our environmental safety team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:waste-management@rajhospital.com"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">

              Email Us
            </a>
            <a
              href="tel:+919771488888"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">

              Call: +91 97714 88888
            </a>
          </div>
        </div>
      </section>
    </div>);

};

export default BiomedicalWasteReports;