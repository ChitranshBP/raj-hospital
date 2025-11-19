import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsMedia = () => {
  const [activeTab, setActiveTab] = useState('digital');
  const [selectedImage, setSelectedImage] = useState(null);

  // DIGITAL NEWS CARDS
  const digitalNews = [
    {
      id: 1,
      title: 'Digital News Title 1',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-1.jpg',
      link: 'https://example.com/digital-post-1', // Add your custom link here
      date: 'March 20, 2024',
    },
    {
      id: 2,
      title: 'Digital News Title 2',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-2.jpg',
      link: 'https://example.com/digital-post-2', // Add your custom link here
      date: 'March 18, 2024',
    },
    {
      id: 3,
      title: 'Digital News Title 3',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-3.jpg',
      link: 'https://example.com/digital-post-3', // Add your custom link here
      date: 'March 15, 2024',
    },
    {
      id: 4,
      title: 'Digital News Title 4',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-4.jpg',
      link: 'https://example.com/digital-post-4', // Add your custom link here
      date: 'March 12, 2024',
    },
    {
      id: 5,
      title: 'Digital News Title 5',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-5.jpg',
      link: 'https://example.com/digital-post-5', // Add your custom link here
      date: 'March 10, 2024',
    },
    {
      id: 6,
      title: 'Digital News Title 6',
      description: 'Brief description of the digital news article or social media post.',
      image: 'assets/digital-news/digital-6.jpg',
      link: 'https://example.com/digital-post-6', // Add your custom link here
      date: 'March 08, 2024',
    },
  ];

  // PRINT IMAGES ONLY
  const newspaperClippings = [
    { id: 1, image: 'assets/dummy/dummy-news-1.jpg' },
    { id: 2, image: 'assets/dummy/dummy-news-2.jpg' },
    { id: 3, image: 'assets/dummy/dummy-news-3.jpg' },
    { id: 4, image: 'assets/dummy/dummy-news-4.jpg' },
    { id: 5, image: 'assets/dummy/dummy-news-5.jpg' },
    { id: 6, image: 'assets/dummy/dummy-news-6.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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

              {/* DIGITAL NEWS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-56 bg-gray-200 overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'assets/home-img/default-news.jpg';
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#0191C7]">
                        {news.date}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F9771B] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#F9771B] font-semibold group-hover:text-[#0191C7] transition-colors">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
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
                Newspaper <span className="text-[#F9771B]">Clippings</span>
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
                        alt="Newspaper"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
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
