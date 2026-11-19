import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Carousel from './Components/Carousel.jsx';
import Home from './Components/Home.jsx';
import Form from './Components/Form.jsx';
import ContactModal from './Components/ContactModal.jsx';

import './App.css';

function App() {
  const [isStaffLoginOpen, setIsStaffLoginOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('General Consultation');

  const handleOpenContact = (subject = 'Executive Briefing') => {
    setContactSubject(subject);
    setIsContactOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Main SAVÉRA Website */}
        <Route
          path="/"
          element={
            <div className="savera-app-root">
              {/* Section 1: Premium Navigation Bar */}
              <Navbar
                onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
                onOpenContact={() => handleOpenContact('Carrier Inquiries')}
              />

              {/* Section 2: Luxury Hero Section with Cabin Window Sunset */}
              <Carousel
                onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
              />

              {/* Section 3: Our Platform, Section 4: About, Section 5: FlightRipple Night-Light, Section 6: How It Works, Section 7: Footer */}
              <Home
                onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
                onOpenContact={handleOpenContact}
              />

              {/* Interactive Staff Portal Authorization Modal */}
              <Form
                isOpen={isStaffLoginOpen}
                onClose={() => setIsStaffLoginOpen(false)}
              />

              {/* Interactive Carrier Consultation / Demo Request Modal */}
              <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
                defaultSubject={contactSubject}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
