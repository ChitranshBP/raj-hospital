import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Homepage2 from './pages/HomePage2';
import About from './pages/About';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import SpecialtyDetail from './pages/SpecialtyDetail';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NewsMedia from './pages/NewsMedia';
import BiomedicalWasteReports from './pages/BiomedicalWasteReports';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Homepage2 />} />
              <Route path="/homepage2" element={<Homepage2 />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctor/:doctorId" element={<DoctorProfile />} />
              <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
              <Route path="/specialties/:specialtyId" element={<SpecialtyDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news-media" element={<NewsMedia />} />
              <Route path="/biomedical-waste-reports" element={<BiomedicalWasteReports />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
          <Toaster
            position="top-right"
            richColors
            closeButton />

        </div>
      </Router>
    </HelmetProvider>);

}

export default App;