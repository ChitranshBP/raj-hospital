import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { generalPagesMeta } from '../seo';

const NewsMedia = () => {
  const [activeTab, setActiveTab] = useState('digital');
  const [selectedImage, setSelectedImage] = useState(null);

  // Get SEO data for news-media page
  const newsMediaPageSEO = generalPagesMeta.find(page => page.page === "news-media");

  // DIGITAL NEWS CARDS
const digitalNews = [
  {
    id: 1,
    title: 'राज अस्पताल, रांची में ASI झारखंड चैप्टर द्वारा लेज़र प्रॉक्टोलॉजी पर वर्कशॉप आयोजित',
    description: 'Workshop organised at Raj Hospital Ranchi by ASI Jharkhand Chapter.',
    image: 'img/img-01.webp',
    link: 'https://www.facebook.com/share/p/18r7HmKaz4/',
    date: 'August 25, 2024',
  },
  {
    id: 2,
    title: 'रांचीः बाई-पास सर्जरी के लिए अब नहीं जाना होगा बाहर, राज अस्पताल में मिल रही सुविधा',
    description: 'Bypass surgery facility now available at Raj Hospital Ranchi.',
    image: 'img/img-01.webp',
    link: 'https://lagatar.in/ranchi-now-you-will-not-have-to-go-out-for-by-pass-surgery-facility-is-available-in-raj-hospital',
    date: 'January 1, 2024',
  },
  {
    id: 3,
    title: 'रांची: शनिवार को नगड़ी स्थित केंद्रीय तसर अनुसंधान एवं प्रशिक्षण संस्थान में चिकित्सा शिविर का आयोजन',
    description: 'Medical camp organised at Central Tasar Research Institute.',
    image: 'img/img 1 (1).webp',
    link: 'rachi-news.php',
    date: 'August 26, 2023',
  },
  {
    id: 4,
    title: 'राज अस्पताल, रांची में मनाया गया 77वां स्वतंत्रता दिवस, ध्वजारोहण कर दी तिरंगे को सलामी',
    description: '77th Independence Day celebration at Raj Hospital.',
    image: 'img/img7.webp',
    link: 'independence-day-23.php',
    date: 'August 23, 2023',
  },
  {
    id: 5,
    title: 'रांची: 28 जुलाई को मनाया जायेगा विश्व हेपेटाइटिस दिवस',
    description: 'World Hepatitis Day will be observed on 28 July.',
    image: 'img/doc.webp',
    link: 'https://lagatar.in/ranchi-world-hepatitis-day-to-be-celebrated-on-july',
    date: 'July 28, 2023',
  },
  {
    id: 6,
    title: 'राज अस्पताल में पहली बार IVUS तकनीक से की गई एंजियोप्लास्टी',
    description: 'IVUS-based angioplasty performed for the first time at Raj Hospital.',
    image: 'img/cover img.webp',
    link: 'https://lagatar.in/angioplasty-done-with-ivus-technique-for-the-first-time-in-raj-hospital/',
    date: 'July 22, 2023',
  },
  {
    id: 7,
    title: 'नर्सों की जितनी प्रशंसा की जाए कम है : साहिल गंभीर',
    description: 'Nurses appreciation ceremony at Raj Hospital.',
    image: 'img/Untitled design-00.webp',
    link: 'https://lagatar.in/the-praise-of-nurses-is-less-sahil-gambhir/',
    date: 'May 14, 2023',
  },
  {
    id: 8,
    title: 'रांची : राज अस्पताल में अग्निशमन विभाग की ओर से मॉक ड्रिल का आयोजन',
    description: 'Fire safety week mock drill conducted at Raj Hospital.',
    image: 'img/1223.webp',
    link: 'https://lagatar.in/ranchi-mock-drill-organized-by-the-fire-department-in-raj-hospital-the-methods-of-fire-prevention/',
    date: 'April 16, 2023',
  },
  {
    id: 9,
    title: '15 cases of black fungus in Jharkhand, Centre to hold discussions today.',
    description: 'TOI coverage of black fungus cases in Jharkhand.',
    image: 'img/Untitled design.webp',
    link: 'https://timesofindia.indiatimes.com/city/ranchi/15-cases-of-black-fungus-in-state-centre-to-hold-discussions-today/articleshow/82679927.cms',
    date: 'May 17, 2021',
  },
  {
    id: 10,
    title: 'सेवा सदन का ओपीडी आज से शुरू होगा, राज अस्पताल में मिल रहा है परामर्श',
    description: 'Seva Sadan OPD begins, consultations available at Raj Hospital.',
    image: 'img/Untitled design.webp',
    link: 'https://www.prabhatkhabar.com/state/jharkhand/ranchi/opd-of-seva-sadan-will-start-from-today-counseling-is-being-provided-in-raj-hospital',
    date: 'May 12, 2021',
  },
  {
    id: 11,
    title: 'राज अस्पताल के डॉक्टर्स का कमाल, 92 वर्षीय महिला के पेट से निकाला 15 किलो का ट्यूमर',
    description: 'Doctors at Raj Hospital remove a 15-kg abdominal tumor.',
    image: 'img/Untitled design.webp',
    link: 'https://lagatar.in/amazing-doctors-of-raj-hospital-a-15-kg-tumor-removed-from-a-92-year-old-womans-abdomen/',
    date: 'January 15, 2021',
  },
  {
    id: 12,
    title: 'Jharkhand to start vax drive for senior citizens from today',
    description: 'Senior citizen vaccination drive begins in Jharkhand.',
    image: 'img/Untitled design.webp',
    link: 'http://timesofindia.indiatimes.com/articleshow/81262067.cms',
    date: 'March 1, 2021',
  },
  {
    id: 13,
    title: 'Only 2 of 71 private hospitals offering jabs in Ranchi',
    description: 'Vaccination availability report in private hospitals.',
    image: 'img/Untitled design (1).webp',
    link: 'https://www.telegraphindia.com/jharkhand/only-2-of-71-private-hospitals-offering-jabs-in-ranchi/cid/1808398',
    date: 'March 12, 2021',
  },
  {
    id: 14,
    title: '450 pvt hospitals to administer vaccine from today',
    description: '450 private hospitals authorized for vaccination.',
    image: 'img/Untitled design (2).webp',
    link: 'https://www.dailypioneer.com/2021/state-editions/450-pvt-hospitals-to-administer-vaccine-from-today.html',
    date: 'March 1, 2021',
  },
  {
    id: 15,
    title: 'State allows private hospitals to run 24x7 vaccination programme',
    description: 'Government permits round-the-clock vaccination.',
    image: 'img/Untitled design (3).webp',
    link: 'https://www.dailypioneer.com/2021/state-editions/state-allows-private-hospitals-to-run-24x7-vaccination-programme.html',
    date: 'June 21, 2021',
  }
];

  // PRINT IMAGES ONLY
  const newspaperClippings = [
    { id: 1, image: 'assets/press/news-1-r.webp', title: 'Raj Hospital Featured in Media' },
    { id: 2, image: 'assets/press/news-2-raj.webp', title: 'राज अस्पताल में लेजर प्रोक्टोलॉजी पर कार्यशाला' },
    { id: 3, image: 'assets/press/news-3-raj.webp', title: 'लेजर प्रॉक्टोलॉजी विषय पर वर्कशॉप का आयोजन' },
    { id: 4, image: 'assets/press/Raj-hsopital-news-1_290824.webp', title: 'राज अस्पताल में लाइफ सपोर्ट पर प्रशिक्षण शिविर' },
    { id: 5, image: 'assets/press/Raj-hsopital-news-2_290824.webp', title: 'राज हॉस्पिटल में आयोजित हुआ लाइफ सपोर्ट प्रशिक्षण शिविर, 40 से ज्यादा उम्मीदवारों ने लिया हिस्सा' },
    { id: 6, image: 'assets/press/Raj-hsopital-news-3_290824.webp', title: 'राज अस्पताल में दो दिवसीय प्रशिक्षण शिविर' },
    { id: 7, image: 'assets/press/Raj-hsopital-news-4_290824.webp', title: 'महतलाइफ सपोर्ट का दिया गया प्रशिक्षण' },
    { id: 8, image: 'assets/press/Raj-hsopital-news-5_290824.webp', title: 'राज अस्पताल में लगा कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर' },
    { id: 9, image: 'assets/press/Raj-hsopital-news-6_290824.webp', title: 'राज अस्पताल में लगा कार्डियक लाइफ सपोर्ट प्रशिक्षण शिविर' },
    { id: 10, image: 'assets/press/Raj-hsopital-news-7_290824.webp', title: 'Hospital Development News' },
    { id: 11, image: 'assets/press/CCT.webp', title: 'राज अस्पताल में शुरू हुआ सीसीटी ईएम कोर्स' },
    { id: 12, image: 'assets/press/CCT-1.webp', title: 'Critical Care Team Feature' },
    { id: 13, image: 'assets/press/Dr. Suprova.webp', title: 'Dr. Suprova Featured in Press' },
    { id: 14, image: 'assets/press/Dr. Suprova-1.webp', title: 'Dr. Suprova Medical Expertise' },
    { id: 15, image: 'assets/press/Dr-Rajesh-BLS-training-in-mecon.webp', title: 'Dr. Rajesh BLS Training at MECON' },
    { id: 16, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.27 PM.webp', title: 'Hospital News Update' },
    { id: 17, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.28 PM.webp', title: 'Medical Services Announcement' },
    { id: 18, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.16.32 PM.webp', title: 'Healthcare Developments' },
    { id: 19, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.05 PM.webp', title: 'Press Coverage Highlights' },
    { id: 20, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.06 PM.webp', title: 'Hospital Achievement Recognition' },
    { id: 21, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.18.07 PM.webp', title: 'Medical Excellence Feature' },
    { id: 22, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.39 PM.webp', title: 'Healthcare News Coverage' },
    { id: 23, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.40 PM.webp', title: 'Patient Success Stories' },
    { id: 24, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.41 PM.webp', title: 'Medical Breakthrough News' },
    { id: 25, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.42 PM.webp', title: 'Raj Hospital Media Feature' },
    { id: 26, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.43 PM.webp', title: 'Healthcare Service Updates' },
    { id: 27, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.44 PM.webp', title: 'Hospital Expansion News' },
    { id: 28, image: 'assets/press/WhatsApp Image 2024-08-08 at 5.23.45 PM.webp', title: 'Community Health Programs' },
    { id: 29, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.21 AM.webp', title: 'Medical Team Recognition' },
    { id: 30, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.22 AM.webp', title: 'Advanced Care Facilities' },
    { id: 31, image: 'assets/press/WhatsApp Image 2024-08-09 at 10.05.23 AM.webp', title: 'Healthcare Excellence Award' },
    { id: 32, image: 'assets/press/IMG-20250222-WA0004.webp', title: 'Recent Press Coverage' },
    { id: 33, image: 'assets/press/IMG-20250222-WA0005.webp', title: 'Medical Innovation Report' },
    { id: 34, image: 'assets/press/IMG-20250222-WA0006.webp', title: 'Hospital Services Feature' },
    { id: 35, image: 'assets/press/IMG-20250222-WA0007.webp', title: 'Latest Healthcare News' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={newsMediaPageSEO?.metaTitle}
        description={newsMediaPageSEO?.metaDescription}
        schema={newsMediaPageSEO?.schema}
      />
     {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 mt-32 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              News <span className="text-primary-600">& Media</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Stay updated with our latest news and media highlights            </p>
          </motion.div>
        </div>
      </section>
   
      {/* Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-4">
            
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'digital'
                  ? 'bg-[#F9771B] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Digital
            </button>

            <button
              onClick={() => setActiveTab('print')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'print'
                  ? 'bg-[#F9771B] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Print
            </button>

          </div>
        </div>
      </section>

      {/* DIGITAL TAB */}
      {activeTab === 'digital' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Digital <span className="text-[#F9771B]">Media</span>
              </h2>

              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Explore our digital articles, features, and media highlights
              </p>

              {/* DIGITAL NEWS CARDS - Text Only Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {digitalNews.map((news, index) => (
                  <motion.a
                    key={news.id}
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="block bg-white border border-[#F9771B]/30 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-[#0191C7] font-semibold text-lg mb-1">
                      {news.title}
                    </h3>
                    <time className="text-xs text-gray-500">{news.date}</time>
                  </motion.a>
                ))}

              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* PRINT TAB */}
      {activeTab === 'print' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Media <span className="text-[#F9771B]">Coverage</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newspaperClippings.map((clip, index) => (
                  <motion.div
                    key={clip.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(clip.image)}
                  >
                    <div className="h-72 overflow-hidden">
                      <img
                        src={clip.image}
                        alt={clip.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-gray-900 font-semibold text-base line-clamp-2">
                        {clip.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      )}

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default NewsMedia;
