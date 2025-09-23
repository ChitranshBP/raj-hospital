import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import Specialties from './pages/Specialties';
import SpecialtyDetail from './pages/SpecialtyDetail';
import Testimonials from './pages/Testimonials';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import BiomedicalWasteReports from './pages/BiomedicalWasteReports';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctorId" element={<DoctorProfile />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/specialties/:specialtyId" element={<SpecialtyDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/biomedical-waste-reports" element={<BiomedicalWasteReports />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          closeButton />

      </div>
    </Router>);

}

export default App;