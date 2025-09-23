import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiFilter, FiBriefcase, FiMapPin, FiClock, FiCalendar, FiUpload, FiSend } = FiIcons;

const Careers = () => {
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Career openings data
  const jobs = [
  {
    id: 1,
    title: 'Senior Cardiologist',
    department: 'Medical',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'April 10, 2024',
    description: 'We are seeking an experienced Cardiologist to join our Cardiology department. The ideal candidate will have extensive experience in interventional cardiology and cardiac care.',
    requirements: [
    'MD/DNB in Cardiology with DM/DNB super specialization',
    'Minimum 8 years of experience post super specialization',
    'Experience in interventional procedures and cardiac catheterization',
    'Published research work preferred',
    'Excellent communication and patient care skills'],

    responsibilities: [
    'Diagnose and treat cardiovascular diseases',
    'Perform interventional cardiac procedures',
    'Manage cardiac emergencies',
    'Collaborate with other specialists for comprehensive patient care',
    'Participate in departmental meetings and continuing medical education']

  },
  {
    id: 2,
    title: 'Staff Nurse - ICU',
    department: 'Nursing',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'April 8, 2024',
    description: 'We are looking for dedicated ICU Nurses to provide high-quality care to critically ill patients. The role involves close monitoring and specialized care in our state-of-the-art ICU facility.',
    requirements: [
    'BSc Nursing or GNM from a recognized institution',
    'Minimum 2 years of experience in ICU/Critical Care',
    'BLS and ACLS certification preferred',
    'Knowledge of ventilator management and critical care protocols',
    'Good communication skills and ability to work in high-stress environments'],

    responsibilities: [
    'Monitor and assess critically ill patients',
    'Administer medications and treatments as prescribed',
    'Assist in emergency procedures and resuscitation',
    'Maintain accurate patient records',
    'Communicate effectively with medical team and patients\' families']

  },
  {
    id: 3,
    title: 'Radiologic Technologist',
    department: 'Diagnostic',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'April 5, 2024',
    description: 'Join our Radiology department as a Radiologic Technologist. You will operate various imaging equipment and work closely with our radiologists to provide accurate diagnostic services.',
    requirements: [
    'Diploma/Degree in Radiologic Technology',
    'Minimum 3 years of experience in a hospital setting',
    'Experience with CT, MRI, and X-ray equipment',
    'Knowledge of radiation safety protocols',
    'Good technical and interpersonal skills'],

    responsibilities: [
    'Operate imaging equipment including CT, MRI, and X-ray machines',
    'Position patients correctly for imaging procedures',
    'Ensure proper radiation safety measures',
    'Maintain equipment and report any malfunctions',
    'Assist radiologists during specialized procedures']

  },
  {
    id: 4,
    title: 'Hospital Administrator',
    department: 'Administration',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'April 3, 2024',
    description: 'We are seeking an experienced Hospital Administrator to oversee daily operations and ensure efficient management of hospital resources and staff.',
    requirements: [
    'MBA in Healthcare Management or equivalent',
    'Minimum 7 years of experience in hospital administration',
    'Strong knowledge of healthcare regulations and policies',
    'Excellent leadership and organizational skills',
    'Experience in budgeting and financial management'],

    responsibilities: [
    'Oversee daily operations of the hospital',
    'Develop and implement hospital policies and procedures',
    'Manage hospital budget and resources',
    'Ensure compliance with healthcare regulations',
    'Coordinate with department heads for smooth functioning']

  },
  {
    id: 5,
    title: 'Physiotherapist',
    department: 'Rehabilitation',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 30, 2024',
    description: 'Join our rehabilitation team as a Physiotherapist. You will work with patients recovering from surgeries, injuries, and various medical conditions to improve their mobility and quality of life.',
    requirements: [
    'Bachelor\'s/Master\'s degree in Physiotherapy',
    'Minimum 2 years of clinical experience',
    'Experience in orthopedic and neurological rehabilitation',
    'Knowledge of modern physiotherapy techniques',
    'Good patient handling and communication skills'],

    responsibilities: [
    'Assess patient mobility and physical limitations',
    'Develop and implement rehabilitation plans',
    'Provide therapeutic exercises and treatments',
    'Monitor and document patient progress',
    'Educate patients on home exercises and preventive measures']

  },
  {
    id: 6,
    title: 'Medical Lab Technician',
    department: 'Laboratory',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 28, 2024',
    description: 'We are looking for skilled Medical Lab Technicians to join our diagnostic laboratory. You will perform various laboratory tests and assist in accurate diagnosis of medical conditions.',
    requirements: [
    'Diploma/Degree in Medical Laboratory Technology',
    'Minimum 2 years of experience in a hospital laboratory',
    'Knowledge of various laboratory techniques and equipment',
    'Attention to detail and accuracy in work',
    'Good technical and analytical skills'],

    responsibilities: [
    'Collect and process patient samples',
    'Perform laboratory tests including hematology, biochemistry, and microbiology',
    'Maintain laboratory equipment and supplies',
    'Ensure quality control and accurate documentation',
    'Coordinate with doctors for special tests and urgent results']

  },
  {
    id: 7,
    title: 'Dietitian',
    department: 'Nutrition',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 25, 2024',
    description: 'Join our nutrition department as a Dietitian. You will provide nutritional counseling to patients and develop dietary plans based on their medical conditions and nutritional needs.',
    requirements: [
    'Bachelor\'s/Master\'s degree in Nutrition and Dietetics',
    'Minimum 3 years of clinical experience',
    'Knowledge of therapeutic diets for various medical conditions',
    'Good communication and counseling skills',
    'Experience in hospital dietary management preferred'],

    responsibilities: [
    'Assess patients\' nutritional needs',
    'Develop and implement dietary plans',
    'Provide nutritional counseling to patients and families',
    'Collaborate with medical team for comprehensive patient care',
    'Monitor and document patients\' nutritional status']

  },
  {
    id: 8,
    title: 'Emergency Medicine Physician',
    department: 'Medical',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 20, 2024',
    description: 'We are seeking an experienced Emergency Medicine Physician to join our 24/7 emergency department. The role involves providing immediate care to patients with acute illnesses and injuries.',
    requirements: [
    'MD/DNB in Emergency Medicine or equivalent qualification',
    'Minimum 5 years of experience in emergency medicine',
    'Advanced life support certifications (ACLS, ATLS, PALS)',
    'Experience in trauma management',
    'Ability to work under pressure and make quick decisions'],

    responsibilities: [
    'Provide immediate assessment and treatment of emergency patients',
    'Perform emergency procedures and resuscitation',
    'Coordinate with specialists for patient care',
    'Supervise emergency department staff',
    'Ensure efficient patient flow in the emergency department']

  },
  {
    id: 9,
    title: 'IT Support Specialist',
    department: 'Information Technology',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 18, 2024',
    description: 'Join our IT department as a Support Specialist. You will provide technical support for hospital information systems and ensure smooth functioning of IT infrastructure.',
    requirements: [
    'Bachelor\'s degree in Computer Science or related field',
    'Minimum 3 years of experience in IT support',
    'Knowledge of healthcare information systems preferred',
    'Experience in network management and troubleshooting',
    'Good problem-solving and communication skills'],

    responsibilities: [
    'Provide technical support to hospital staff',
    'Troubleshoot hardware and software issues',
    'Maintain and update hospital information systems',
    'Ensure data security and backup',
    'Train staff on new software and systems']

  },
  {
    id: 10,
    title: 'Pharmacist',
    department: 'Pharmacy',
    location: 'Ranchi, Jharkhand',
    type: 'Full-time',
    postedDate: 'March 15, 2024',
    description: 'We are looking for a qualified Pharmacist to join our hospital pharmacy. You will be responsible for dispensing medications and providing pharmaceutical care to patients.',
    requirements: [
    'Bachelor\'s/Master\'s degree in Pharmacy',
    'Minimum 2 years of experience in hospital pharmacy',
    'Knowledge of drug interactions and adverse effects',
    'Good communication and counseling skills',
    'Experience with inventory management'],

    responsibilities: [
    'Dispense medications as prescribed',
    'Review medication orders for appropriateness',
    'Provide medication information to patients and healthcare providers',
    'Manage pharmacy inventory and ensure adequate stock',
    'Ensure compliance with pharmacy regulations and policies']

  }];


  // Get unique departments and job types for filters
  const departments = ['All', ...new Set(jobs.map((job) => job.department))];
  const jobTypes = ['All', ...new Set(jobs.map((job) => job.type))];

  // Filter jobs based on search term, department, and job type
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment = filterDepartment === 'All' || job.department === filterDepartment;
    const matchesType = filterType === 'All' || job.type === filterType;

    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              Careers at <span className="text-primary-600">Raj Hospitals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of dedicated healthcare professionals and make a difference in people's lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Application Form (Conditional Render) */}
      {showForm && selectedJob &&
      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Apply for: {selectedJob.title}</h2>
                  <p className="text-gray-600">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700">

                  <span className="text-2xl">&times;</span>
                </button>
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
                    Current/Previous Position
                  </label>
                  <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your current or previous job position" />

                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">

                    <option value="">Select experience</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">More than 10 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <SafeIcon icon={FiUpload} className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">Drag and drop your resume here or</p>
                    <button
                    type="button"
                    className="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors font-medium">

                      Browse Files
                    </button>
                    <p className="text-xs text-gray-400 mt-2">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position and what makes you a good fit...">
                </textarea>
                </div>

                <div className="flex items-start">
                  <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 mr-2" />

                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Raj Hospitals storing and processing my personal data for the purpose of this job application. *
                  </label>
                </div>

                <button
                type="submit"
                className="w-full bg-primary-500 text-white py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg flex items-center justify-center space-x-2">

                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      }

      {/* Job Detail View (Conditional Render) */}
      {selectedJob && !showForm &&
      <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <span className="flex items-center text-gray-600">
                      <SafeIcon icon={FiBriefcase} className="w-4 h-4 mr-1" />
                      {selectedJob.department}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      {selectedJob.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      Posted: {selectedJob.postedDate}
                    </span>
                  </div>
                </div>
                <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700">

                  <span className="text-2xl">&times;</span>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.requirements.map((req, index) =>
                  <li key={index}>{req}</li>
                  )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((resp, index) =>
                  <li key={index}>{resp}</li>
                  )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button
                  onClick={() => handleApply(selectedJob)}
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center space-x-2">

                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      }

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search job titles or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />

            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className="text-gray-500 w-5 h-5" />
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">

                  {departments.map((dept) =>
                  <option key={dept} value={dept}>
                      {dept} Department
                    </option>
                  )}
                </select>
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">

                {jobTypes.map((type) =>
                <option key={type} value={type}>
                    {type} Position
                  </option>
                )}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredJobs.length === 0 ?
          <div className="text-center py-12">
              <p className="text-xl text-gray-600">No job openings found matching your search criteria.</p>
            </div> :

          <div className="space-y-6">
              {filteredJobs.map((job, index) =>
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleJobClick(job)}>

                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon icon={FiBriefcase} className="w-4 h-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          Posted: {job.postedDate}
                        </span>
                        <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApply(job);
                      }}
                      className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm">

                          Apply Now
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
            )}
            </div>
          }
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join <span className="text-primary-600">Raj Hospitals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a supportive and rewarding environment for healthcare professionals to grow and make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              title: 'Professional Growth',
              description: 'Continuous learning opportunities, specialized training programs, and career advancement paths for all staff members.',
              icon: 'FiTrendingUp'
            },
            {
              title: 'Modern Facilities',
              description: 'Work with state-of-the-art medical equipment and technology in a well-maintained and comfortable environment.',
              icon: 'FiMonitor'
            },
            {
              title: 'Supportive Culture',
              description: 'Collaborative work environment with supportive leadership and emphasis on work-life balance.',
              icon: 'FiUsers'
            },
            {
              title: 'Competitive Benefits',
              description: 'Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.',
              icon: 'FiPackage'
            },
            {
              title: 'Community Impact',
              description: 'Opportunity to make a meaningful difference in the lives of patients and contribute to community health.',
              icon: 'FiHeart'
            },
            {
              title: 'Learning & Development',
              description: 'Regular CME programs, workshops, conferences, and sponsorship for higher education and specialization.',
              icon: 'FiBookOpen'
            }].
            map((benefit, index) =>
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">

                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <SafeIcon icon={FiIcons[benefit.icon]} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our <span className="text-primary-600">Team Says</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our team members about their experience working at Raj Hospitals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              name: 'Dr. Priya Sharma',
              position: 'Senior Cardiologist',
              years: '8 years',
              testimonial: 'Working at Raj Hospitals has given me the opportunity to grow professionally while providing the best care to my patients. The collaborative environment and state-of-the-art facilities make it an ideal place for medical professionals.',
              image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
            },
            {
              name: 'Rahul Singh',
              position: 'Head Nurse, ICU',
              years: '5 years',
              testimonial: 'The supportive management and emphasis on continuous learning have helped me advance in my career. I appreciate the work-life balance and the sense of family among staff members. Raj Hospitals truly values its nursing team.',
              image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
            },
            {
              name: 'Anita Kumari',
              position: 'Hospital Administrator',
              years: '7 years',
              testimonial: 'The leadership at Raj Hospitals encourages innovation and values input from all team members. I\'ve had the opportunity to implement meaningful changes that improve both patient care and operational efficiency.',
              image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
            }].
            map((testimonial, index) =>
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md">

                <div className="flex items-center space-x-4 mb-4">
                  <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover" />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-primary-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">With us for {testimonial.years}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process 
                                                                                                                                                      <section className="py-16 bg-white">
                                                                                                                                                       <div className="max-w-7xl mx-auto px-4">
                                                                                                                                                         <motion.div
                                                                                                                                                           initial={{ opacity: 0, y: 50 }}
                                                                                                                                                           whileInView={{ opacity: 1, y: 0 }}
                                                                                                                                                           transition={{ duration: 0.8 }}
                                                                                                                                                           viewport={{ once: true }}
                                                                                                                                                           className="text-center mb-12">
                                                                                                                                                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                                                                                                                                             Our Hiring <span className="text-primary-600">Process</span>
                                                                                                                                                           </h2>
                                                                                                                                                           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                                                                                                                                             What to expect when you apply for a position at Raj Hospitals
                                                                                                                                                           </p>
                                                                                                                                                         </motion.div>
                                                                                                                                                          <div className="relative">
                                                                                                                                                           {/* Timeline Line 
                                                                                                                                                           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-100"></div>
                                                                                                                                                            {/* Timeline Items 
                                                                                                                                                           <div className="space-y-12 relative">
                                                                                                                                                             {[
                                                                                                                                                             {
                                                                                                                                                               title: 'Application Review',
                                                                                                                                                               description: 'Our HR team reviews your application and resume to assess your qualifications and experience.',
                                                                                                                                                               icon: 'FiFileText'
                                                                                                                                                             },
                                                                                                                                                             {
                                                                                                                                                               title: 'Initial Screening',
                                                                                                                                                               description: 'Selected candidates are contacted for an initial phone or video interview to discuss their background and interest.',
                                                                                                                                                               icon: 'FiPhone'
                                                                                                                                                             },
                                                                                                                                                             {
                                                                                                                                                               title: 'Technical Assessment',
                                                                                                                                                               description: 'Depending on the role, candidates may be required to complete a technical assessment or skills demonstration.',
                                                                                                                                                               icon: 'FiClipboard'
                                                                                                                                                             },
                                                                                                                                                             {
                                                                                                                                                               title: 'In-Person Interview',
                                                                                                                                                               description: 'Candidates meet with the department head and team members for a comprehensive interview.',
                                                                                                                                                               icon: 'FiUsers'
                                                                                                                                                             },
                                                                                                                                                             {
                                                                                                                                                               title: 'Final Selection',
                                                                                                                                                               description: 'Selected candidates receive an offer letter with details about compensation, benefits, and start date.',
                                                                                                                                                               icon: 'FiCheck'
                                                                                                                                                             }].
                                                                                                                                                             map((step, index) =>
                                                                                                                                                             <motion.div
                                                                                                                                                               key={step.title}
                                                                                                                                                               initial={{ opacity: 0, y: 30 }}
                                                                                                                                                               whileInView={{ opacity: 1, y: 0 }}
                                                                                                                                                               transition={{ duration: 0.6, delay: index * 0.1 }}
                                                                                                                                                               viewport={{ once: true }}
                                                                                                                                                               className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                                                                                                                                                                  <div className="md:w-1/2 relative">
                                                                                                                                                                   {/* Timeline Dot 
                                                                                                                                                                   <div className="absolute top-0 left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white"></div>
                                                                                                                                                                   
                                                                                                                                                                   <div className={`bg-white p-6 rounded-xl shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                                                                                                                                                     <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                                                                                                                                                                       <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                                                                                                                                                         <SafeIcon icon={FiIcons[step.icon]} className="w-5 h-5 text-primary-600" />
                                                                                                                                                                       </div>
                                                                                                                                                                       <h3 className="text-xl font-semibold text-gray-900 ml-3">{step.title}</h3>
                                                                                                                                                                     </div>
                                                                                                                                                                     <p className="text-gray-700">{step.description}</p>
                                                                                                                                                                   </div>
                                                                                                                                                                 </div>
                                                                                                                                                                 <div className="md:w-1/2"></div>
                                                                                                                                                               </motion.div>
                                                                                                                                                             )}
                                                                                                                                                           </div>
                                                                                                                                                         </div>
                                                                                                                                                       </div>
                                                                                                                                                      </section>
                                                                                                                                                      */



      }
      {/* No Suitable Position CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

            <h3 className="text-3xl font-bold text-white mb-4">
              Don't See a Suitable Position?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center space-x-2">
              <SafeIcon icon={FiSend} className="w-5 h-5" />
              <span>Send Spontaneous Application</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Careers;