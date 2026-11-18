import { useState } from 'react';
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
    <div className="savera-app-root">
      {/* 2. Navigation Bar */}
      <Navbar
        onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
        onOpenContact={() => handleOpenContact('Carrier Inquiries')}
      />

      {/* 3. Hero Section (Aircraft Window & Sunset + Carousel) */}
      <Carousel
        onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
      />

      {/* 4. Platform Features, 5. About, 6. FlightRipple™, 7. How It Works, 8. Footer */}
      <Home
        onOpenStaffLogin={() => setIsStaffLoginOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Staff Login Modal (Form Component) */}
      <Form
        isOpen={isStaffLoginOpen}
        onClose={() => setIsStaffLoginOpen(false)}
      />

      {/* Interactive Carrier Consultation / Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultSubject={contactSubject}
      />
    </div>
  );
}

export default App;
