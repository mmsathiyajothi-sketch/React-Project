import { useState, useEffect } from 'react';

function Navbar({ onOpenStaffLogin, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);
  };

  const featureItems = [
    { name: 'Flight Management', desc: 'Real-time flights & route radar', icon: '✈', link: '#features' },
    { name: 'Aircraft Management', desc: 'Tail allocation & fleet records', icon: '🛫', link: '#features' },
    { name: 'Crew Management', desc: 'Duty pairings & rest protection', icon: '👨‍✈️', link: '#features' },
    { name: 'Flight Scheduling', desc: 'Slot optimizer & turnaround sync', icon: '⏱', link: '#features' },
    { name: 'FlightRipple™', desc: 'Predictive disruption sync', icon: '⚡', link: '#flightripple' },
    { name: 'Maintenance', desc: 'Checks & airworthiness logs', icon: '🔧', link: '#features' },
  ];

  return (
    <nav className={`savera-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Logo & Golden Aviation Symbol */}
        <a href="#home" className="savera-brand" onClick={closeMenus} aria-label="SAVÉRA Airline Operations">
          <div className="savera-logo-box">
            {/* Golden Aeronautical Wing Emblem */}
            <svg
              className="savera-aviation-emblem"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="goldWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F3D8A4" />
                  <stop offset="50%" stopColor="#D9B477" />
                  <stop offset="100%" stopColor="#B8924B" />
                </linearGradient>
              </defs>
              {/* Outer Shield Ring */}
              <circle cx="20" cy="20" r="18" stroke="url(#goldWingGrad)" strokeWidth="1.2" strokeOpacity="0.6" />
              <circle cx="20" cy="20" r="15" stroke="url(#goldWingGrad)" strokeWidth="0.8" strokeDasharray="2 3" strokeOpacity="0.4" />
              {/* Sleek Supersonic Wing Monogram */}
              <path
                d="M20 7L24 16L33 19L24 22L20 33L16 22L7 19L16 16L20 7Z"
                fill="url(#goldWingGrad)"
                fillOpacity="0.25"
                stroke="url(#goldWingGrad)"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="19.5" r="2.2" fill="url(#goldWingGrad)" />
            </svg>
          </div>

          <div className="savera-brand-text">
            <span className="savera-brand-title">SAVÉRA</span>
            <span className="savera-brand-sub">AIRLINE OPERATIONS</span>
          </div>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggler-gold d-lg-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="savera-nav-menu d-none d-lg-flex align-items-center gap-1">
          <a href="#home" className="savera-nav-link active">Home</a>

          {/* Features with Dropdown */}
          <div
            className="position-relative"
            onMouseEnter={() => setFeaturesDropdownOpen(true)}
            onMouseLeave={() => setFeaturesDropdownOpen(false)}
          >
            <a
              href="#features"
              className="savera-nav-link d-flex align-items-center gap-1"
            >
              Features
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>

            {featuresDropdownOpen && (
              <div className="savera-dropdown-menu position-absolute start-0">
                <div className="dropdown-header-note">
                  <span>CORE OPERATIONS MODULES</span>
                </div>
                {featureItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="savera-dropdown-item"
                    onClick={closeMenus}
                  >
                    <div className="dropdown-item-icon">{item.icon}</div>
                    <div className="dropdown-item-content">
                      <span className="dropdown-item-title">{item.name}</span>
                      <span className="dropdown-item-desc">{item.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="savera-nav-link">About</a>

          {/* FlightRipple Special Signature Link */}
          <a href="#flightripple" className="savera-nav-link savera-nav-ripple">
            <span className="ripple-spark"></span>
            FlightRipple™
          </a>

          <a
            href="#contact"
            className="savera-nav-link"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact('General Consultation');
              }
            }}
          >
            Contact
          </a>
        </div>

        {/* Staff Login Action */}
        <div className="d-none d-lg-block">
          <button
            type="button"
            className="btn-gold-login"
            onClick={() => onOpenStaffLogin && onOpenStaffLogin()}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Staff Login
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="savera-mobile-drawer d-lg-none">
          <div className="d-flex flex-column gap-2 p-3">
            <a href="#home" className="savera-nav-link" onClick={closeMenus}>
              Home
            </a>
            <a href="#features" className="savera-nav-link" onClick={closeMenus}>
              Features (6 Modules)
            </a>
            <a href="#about" className="savera-nav-link" onClick={closeMenus}>
              About SAVÉRA
            </a>
            <a href="#flightripple" className="savera-nav-link savera-nav-ripple" onClick={closeMenus}>
              <span className="ripple-spark"></span>
              FlightRipple™
            </a>
            <a
              href="#contact"
              className="savera-nav-link"
              onClick={(e) => {
                closeMenus();
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact('General Consultation');
                }
              }}
            >
              Contact
            </a>

            <div className="pt-2 border-top border-dark-subtle mt-2">
              <button
                type="button"
                className="btn-gold-login w-100 justify-content-center"
                onClick={() => {
                  closeMenus();
                  if (onOpenStaffLogin) onOpenStaffLogin();
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Staff Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
