import { useState, useEffect } from 'react';

function Navbar({ onOpenStaffLogin, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);
  };

  const featureItems = [
    { name: 'Flight Management', desc: 'Real-time flights & routes', icon: '✈' },
    { name: 'Aircraft Management', desc: 'Tail tracking & availability', icon: '🛫' },
    { name: 'Crew Management', desc: 'Roster & duty pairing', icon: '👨‍✈️' },
    { name: 'Flight Scheduling', desc: 'Slot & network optimizer', icon: '⏱' },
    { name: 'FlightRipple™', desc: 'Predictive ripple analysis', icon: '⚡' },
    { name: 'Fleet Maintenance', desc: 'Checks & airworthiness logs', icon: '🔧' },
  ];

  return (
    <nav className={`savera-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="savera-brand" onClick={closeMenus}>
          <div className="savera-logo-wrap">
            <img src="/logo.jpg" alt="SAVÉRA Aviation Technologies" className="savera-logo-img" />
          </div>
          <div className="savera-brand-text">
            <span className="savera-brand-title">SAVÉRA</span>
            <span className="savera-brand-sub">AVIATION TECHNOLOGIES</span>
          </div>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="navbar-toggler-gold d-lg-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebd07d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className={`savera-nav-menu d-none d-lg-flex align-items-center gap-2`}>
          <a href="#home" className="savera-nav-link active">Home</a>

          {/* Features Dropdown */}
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
                {featureItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.name.includes('FlightRipple') ? '#flightripple' : '#features'}
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

          {/* FlightRipple Special Link */}
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
                onOpenContact();
              }
            }}
          >
            Contact
          </a>
        </div>

        {/* Staff Login Button */}
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
        <div
          className="d-lg-none py-3 px-4 border-top border-secondary mt-2"
          style={{ background: 'rgba(5, 8, 20, 0.98)', borderTopColor: 'rgba(212, 175, 55, 0.25) !important' }}
        >
          <div className="d-flex flex-column gap-3">
            <a href="#home" className="savera-nav-link" onClick={closeMenus}>Home</a>
            <a href="#features" className="savera-nav-link" onClick={closeMenus}>Features (All 6 Modules)</a>
            <a href="#about" className="savera-nav-link" onClick={closeMenus}>About SAVÉRA</a>
            <a href="#flightripple" className="savera-nav-link savera-nav-ripple w-auto text-center" onClick={closeMenus}>
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
                  onOpenContact();
                }
              }}
            >
              Contact
            </a>
            <button
              type="button"
              className="btn-gold-login justify-content-center mt-2"
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
      )}
    </nav>
  );
}

export default Navbar;
