import React, { useState } from "react";
import { motion } from "framer-motion";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";
import SEO from '../components/SEO';
import { generalPagesMeta } from '../seo';
import pagesMeta from '../meta';

const {
  FiSearch,
  FiFilter,
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiUpload,
  FiSend,
} = FiIcons;

const Careers = () => {
  const [filterDepartment, setFilterDepartment] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [customPosition, setCustomPosition] = useState("");

  // Get SEO data for careers page
  const careersPageMeta = pagesMeta.find(page => page.page === "careers");
  const careersPageSchema = generalPagesMeta.find(page => page.page === "careers");

  // Career openings data
  const jobs = [
    {
      id: 1,
      title: "General Duty Assistant",
      department: "Support Staff",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "GDA",
      experience: "0-1 YRS",
      positions: "8",
      description:
        "We are seeking dedicated General Duty Assistants to support our healthcare team in providing quality patient care and maintaining hospital operations.",
      requirements: [
        "GDA qualification",
        "0-1 year of experience",
        "Good communication and interpersonal skills",
        "Ability to work in shifts",
        "Physical fitness to perform duties",
      ],
      responsibilities: [
        "Assist nursing staff in patient care activities",
        "Maintain cleanliness and hygiene in patient areas",
        "Transport patients within the hospital",
        "Support in routine hospital operations",
        "Follow hospital protocols and safety guidelines",
      ],
    },
    {
      id: 2,
      title: "Ward Boy",
      department: "Support Staff",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "Matric",
      experience: "0-1 YRS",
      positions: "10",
      description:
        "Join our team as a Ward Boy to assist in patient care and hospital maintenance. We are looking for dedicated individuals to support our healthcare services.",
      requirements: [
        "Matriculation (10th pass)",
        "0-1 year of experience",
        "Good physical health",
        "Ability to work in hospital environment",
        "Basic communication skills",
      ],
      responsibilities: [
        "Assist in patient care under supervision",
        "Maintain ward cleanliness and hygiene",
        "Transport patients and medical equipment",
        "Support nursing staff in daily activities",
        "Ensure proper disposal of medical waste",
      ],
    },
    {
      id: 3,
      title: "Ward Girl",
      department: "Support Staff",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "Matric",
      experience: "0-1 YRS",
      positions: "6",
      description:
        "We are looking for dedicated Ward Girls to provide support in patient care and maintain cleanliness in hospital wards.",
      requirements: [
        "Matriculation (10th pass)",
        "0-1 year of experience",
        "Compassionate and caring attitude",
        "Ability to work in shifts",
        "Good interpersonal skills",
      ],
      responsibilities: [
        "Assist female patients with daily activities",
        "Maintain cleanliness in female wards",
        "Support nursing staff in patient care",
        "Ensure patient comfort and dignity",
        "Follow hospital hygiene protocols",
      ],
    },
    {
      id: 4,
      title: "Resident Medical Officer",
      department: "Medical",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "MBBS",
      experience: "1-3 YRS",
      positions: "3",
      description:
        "We are seeking qualified MBBS doctors to join as Resident Medical Officers. Provide quality medical care and emergency services in our hospital.",
      requirements: [
        "MBBS degree from recognized institution",
        "1-3 years of clinical experience",
        "Valid medical registration",
        "Good clinical knowledge and skills",
        "Ability to handle emergency situations",
      ],
      responsibilities: [
        "Provide medical care to admitted patients",
        "Handle emergency cases and critical patients",
        "Conduct ward rounds and patient assessments",
        "Maintain accurate medical records",
        "Coordinate with senior consultants",
      ],
    },
    {
      id: 5,
      title: "Assistant Nurse Supervisor",
      department: "Nursing",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "B.Sc/M.Sc",
      experience: "5-8 YRS",
      positions: "1",
      description:
        "Join our nursing leadership team as Assistant Nurse Supervisor. Lead and mentor nursing staff to deliver exceptional patient care.",
      requirements: [
        "B.Sc/M.Sc in Nursing",
        "5-8 years of nursing experience",
        "Strong leadership and management skills",
        "Excellent clinical knowledge",
        "Registered Nurse certification",
      ],
      responsibilities: [
        "Supervise and coordinate nursing staff",
        "Ensure quality patient care delivery",
        "Conduct staff training and development",
        "Monitor adherence to nursing protocols",
        "Manage nursing schedules and resources",
      ],
    },
    {
      id: 6,
      title: "Executive Accountant",
      department: "Accounts",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "B.com/M.com",
      experience: "1-2 YRS",
      positions: "1",
      description:
        "We are seeking an experienced Executive Accountant to manage financial operations and ensure accurate accounting for our hospital.",
      requirements: [
        "B.Com/M.Com degree",
        "1-2 years of accounting experience",
        "Knowledge of accounting software",
        "Good analytical and numerical skills",
        "Understanding of hospital finance preferred",
      ],
      responsibilities: [
        "Maintain financial records and accounts",
        "Prepare financial reports and statements",
        "Handle billing and payment processing",
        "Ensure compliance with accounting standards",
        "Assist in budgeting and financial planning",
      ],
    },
    {
      id: 7,
      title: "Multi Organ Transplant Coordinator",
      department: "Medical",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "BSW/MSW",
      experience: "1 YR",
      positions: "1",
      description:
        "Join our specialized transplant team as a coordinator to facilitate and manage multi-organ transplant procedures and donor coordination.",
      requirements: [
        "BSW/MSW degree",
        "1 year of relevant experience",
        "Knowledge of transplant protocols",
        "Excellent coordination and communication skills",
        "Compassionate and empathetic approach",
      ],
      responsibilities: [
        "Coordinate organ transplant procedures",
        "Liaise with donor families and recipients",
        "Maintain transplant documentation",
        "Ensure compliance with transplant regulations",
        "Support patients and families throughout process",
      ],
    },
    {
      id: 8,
      title: "Consultant Radiology",
      department: "Radiology",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "DMRD/MD/MD Radiology",
      experience: "0-3 YRS",
      positions: "1",
      description:
        "We are seeking a qualified Radiology Consultant to provide expert diagnostic imaging services and interpretation.",
      requirements: [
        "DMRD/MD/MD Radiology",
        "0-3 years of experience",
        "Expertise in various imaging modalities",
        "Strong diagnostic and analytical skills",
        "Good communication with clinical teams",
      ],
      responsibilities: [
        "Interpret diagnostic imaging studies",
        "Perform interventional radiology procedures",
        "Consult with clinical teams on cases",
        "Ensure quality of imaging services",
        "Supervise radiology technicians",
      ],
    },
    {
      id: 9,
      title: "Executive Operations",
      department: "Operations",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "Any Graduate",
      experience: "0-3 YRS",
      positions: "5",
      description:
        "Join our operations team to support smooth functioning of hospital services and patient care operations.",
      requirements: [
        "Any Graduate degree",
        "0-3 years of experience",
        "Good organizational skills",
        "Ability to multitask",
        "Strong communication skills",
      ],
      responsibilities: [
        "Coordinate daily hospital operations",
        "Support patient admission and discharge",
        "Manage operational documentation",
        "Assist in resolving operational issues",
        "Ensure smooth workflow across departments",
      ],
    },
    {
      id: 10,
      title: "Executive Billing",
      department: "Billing",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "B.com/M.com",
      experience: "0-3 YRS",
      positions: "3",
      description:
        "We are looking for billing executives to manage patient billing, insurance claims, and financial documentation.",
      requirements: [
        "B.Com/M.Com degree",
        "0-3 years of billing experience",
        "Knowledge of medical billing preferred",
        "Computer proficiency",
        "Attention to detail",
      ],
      responsibilities: [
        "Process patient billing and invoices",
        "Handle insurance claims and reimbursements",
        "Maintain accurate billing records",
        "Resolve billing queries and disputes",
        "Coordinate with accounts department",
      ],
    },
    {
      id: 11,
      title: "Clinical Pharmacologist",
      department: "Pharmacy",
      location: "Ranchi, Jharkhand",
      type: "Full-time",
      qualification: "Pharm.D",
      experience: "0-1 YRS",
      positions: "1",
      description:
        "Join our pharmacy team as a Clinical Pharmacologist to provide expert pharmaceutical care and medication management.",
      requirements: [
        "Pharm.D degree",
        "0-1 year of experience",
        "Strong knowledge of pharmacology",
        "Good clinical assessment skills",
        "Registered pharmacist",
      ],
      responsibilities: [
        "Review and monitor medication therapy",
        "Provide drug information to healthcare team",
        "Ensure rational drug use",
        "Conduct medication counseling",
        "Participate in clinical rounds",
      ],
    },
  ];

  // Get unique departments and job types for filters
  const departments = ["All", ...new Set(jobs.map((job) => job.department))];
  const jobTypes = ["All", ...new Set(jobs.map((job) => job.type))];

  // Filter jobs based on search term, department, and job type
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      filterDepartment === "All" || job.department === filterDepartment;
    const matchesType = filterType === "All" || job.type === filterType;

    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <SEO
        title={careersPageMeta?.metaTitle}
        description={careersPageMeta?.metaDescription}
        schema={careersPageSchema?.schema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-28 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Careers at <span className="text-primary-600">Raj Hospitals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of dedicated healthcare professionals and make a
              difference in people's lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Application Form (Conditional Render) */}
      {showForm && selectedJob && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for: {selectedJob.title}
                  </h2>
                  <p className="text-gray-600">
                    {selectedJob.department} • {selectedJob.location}
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
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
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
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
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applying For *
                  </label>
                  <select
                    required
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title} ({job.positions} openings)
                      </option>
                    ))}
                    <option value="Spontaneous Application">Spontaneous Application</option>
                  </select>
                </div>

                {selectedPosition === "Spontaneous Application" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specify Position *
                    </label>
                    <input
                      type="text"
                      required
                      value={customPosition}
                      onChange={(e) => setCustomPosition(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter the position you're interested in"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
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
                    <SafeIcon
                      icon={FiUpload}
                      className="w-10 h-10 text-gray-400 mx-auto mb-4"
                    />
                    <p className="text-gray-500 mb-2">
                      Drag and drop your resume here or
                    </p>
                    <button
                      type="button"
                      className="bg-primary-100 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors font-medium"
                    >
                      Browse Files
                    </button>
                    <p className="text-xs text-gray-400 mt-2">
                      Supported formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 mr-2"
                  />

                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Raj Hospitals storing and processing my
                    personal data for the purpose of this job application. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-4 rounded-lg hover:bg-primary-600 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                  <span>Submit Application</span>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      {/* Job Detail View (Conditional Render) */}
      {selectedJob && !showForm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedJob.title}
                  </h2>
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
                      Openings: {selectedJob.positions}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Job Description
                  </h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Requirements
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Responsibilities
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleApply(selectedJob)}
                    className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <SafeIcon
                icon={FiSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Search job titles or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className="text-gray-500 w-5 h-5" />
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept} Department
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type} Position
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No job openings found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon
                              icon={FiBriefcase}
                              className="w-4 h-4 mr-1"
                            />
                            {job.department}
                          </span>
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon
                              icon={FiMapPin}
                              className="w-4 h-4 mr-1"
                            />
                            {job.location}
                          </span>
                          <span className="flex items-center text-gray-600 text-sm">
                            <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-semibold text-primary-600">
                          Openings: {job.positions}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApply(job);
                          }}
                          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join <span className="text-primary-600">Raj Hospitals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a supportive and rewarding environment for healthcare
              professionals to grow and make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Growth",
                description:
                  "Continuous learning opportunities, specialized training programs, and career advancement paths for all staff members.",
                icon: "FiTrendingUp",
              },
              {
                title: "Modern Facilities",
                description:
                  "Work with state-of-the-art medical equipment and technology in a well-maintained and comfortable environment.",
                icon: "FiMonitor",
              },
              {
                title: "Supportive Culture",
                description:
                  "Collaborative work environment with supportive leadership and emphasis on work-life balance.",
                icon: "FiUsers",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.",
                icon: "FiPackage",
              },
              {
                title: "Community Impact",
                description:
                  "Opportunity to make a meaningful difference in the lives of patients and contribute to community health.",
                icon: "FiHeart",
              },
              {
                title: "Learning & Development",
                description:
                  "Regular CME programs, workshops, conferences, and sponsorship for higher education and specialization.",
                icon: "FiBookOpen",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  <SafeIcon
                    icon={FiIcons[benefit.icon]}
                    className="w-6 h-6 text-primary-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}

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
                                                                                                                                                      */}
      {/* No Suitable Position CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't See a Suitable Position?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Submit your resume for future opportunities.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center space-x-2">
              <SafeIcon icon={FiSend} className="w-5 h-5" />
              <span>Send Spontaneous Application</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
