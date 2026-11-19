import { useState, useEffect } from 'react';

function Carousel({ onOpenStaffLogin }) {
  // Slide 0: Window Sunset (Primary Design Reference), Slide 1: Cabin Interior, Slide 2: Terminal Hub
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/window.jpg',
      label: 'Cabin Window Sunset',
      tagline: 'Above the Clouds, Beyond Expectations',
    },
    {
      img: '/seat.jpg',
      label: 'First Class Cabin Interior',
      tagline: 'Engineered for Precision & Comfort',
    },
    {
      img: '/airport.jpg',
      label: 'International Terminal Hub',
      tagline: 'Connecting 150+ Global Gateways',
    },
  ];

  // Auto-advance with clean interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="savera-hero-wrapper">
      {/* Background Airplane Window Sunset & Clouds with Dark Navy Overlay */}
      <div className="savera-hero-bg">
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].label}
          className="savera-hero-bg-img"
        />
        {/* Multilayer Dark Navy Luxury Overlay for Absolute Readability */}
        <div className="savera-hero-overlay"></div>
      </div>

      {/* Atmospheric Golden & Soft Purple Light Trails */}
      <div className="hero-glow-gold" aria-hidden="true"></div>
      <div className="hero-glow-purple" aria-hidden="true"></div>

      <div className="container savera-hero-content">
        <div className="row align-items-center g-5">
          {/* Left Column: Hero Typography & Actions */}
          <div className="col-lg-7 text-start">
            <div className="luxury-badge mb-3">
              <span className="beacon-dot"></span>
              SAVÉRA AIRLINE OPERATIONS PLATFORM
            </div>

            <h1 className="hero-heading">
              Smarter Airline Operations.
              <span className="gold-text-gradient d-block mt-2">
                One Connected Platform.
              </span>
            </h1>

            <p className="hero-desc">
              Coordinate flights, aircraft, crew and schedules in one unified platform.
            </p>

            <div className="hero-btn-group">
              <a href="#features" className="btn-savera-primary">
                <span>Explore Platform</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <button
                type="button"
                className="btn-savera-outline"
                onClick={() => onOpenStaffLogin && onOpenStaffLogin()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Staff Login</span>
              </button>
            </div>

            {/* Interactive Perspective Switcher Controls */}
            <div className="d-flex align-items-center gap-2 mt-4">
              <span className="perspective-label">
                CABIN VIEW:
              </span>
              <div className="hero-view-switcher">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`view-switch-btn ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Switch to ${s.label}`}
                  >
                    {idx === 0 ? 'Window Sunset' : idx === 1 ? 'Luxury Cabin' : 'Global Hub'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glass OCC Telemetry HUD */}
          <div className="col-lg-5">
            <div className="hero-glass-hud text-start">
              <div className="hud-header">
                <div className="hud-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>OCC Global Telemetry</span>
                </div>
                <div className="footer-status-badge">
                  <span className="beacon-dot" style={{ background: '#34d399', boxShadow: '0 0 8px #34d399' }}></span>
                  <span>LIVE SYNC</span>
                </div>
              </div>

              {/* Live Flight Telemetry Rows */}
              <div className="hud-flight-row">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <strong style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>SV-104</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--soft-gold)', fontWeight: 600 }}>LHR ➔ JFK</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    B787-9 • FL380 • Mach 0.85
                  </div>
                </div>
                <span className="hud-tag-ontime">ON SCHEDULE</span>
              </div>

              <div className="hud-flight-row">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <strong style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>SV-208</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--soft-gold)', fontWeight: 600 }}>DXB ➔ SIN</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    A350-1000 • FL410 • Gate B14
                  </div>
                </div>
                <span className="hud-tag-ontime">BOARDING</span>
              </div>

              <div className="hud-flight-row highlight-ripple">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <strong style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>SV-440</strong>
                    <span style={{ fontSize: '0.82rem', color: '#c084fc', fontWeight: 600 }}>CDG ➔ LAX</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Delay +15m Resolved via FlightRipple™
                  </div>
                </div>
                <span className="hud-tag-ripple">RIPPLE RESOLVED</span>
              </div>

              <div className="hud-footer-stat">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fleet Dispatch Integrity</span>
                <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--soft-gold)' }}>99.98%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ribbon: Operational Proof Points */}
        <div className="hero-stats-ribbon mt-5">
          <div className="stat-item text-start">
            <span className="stat-num">99.98%</span>
            <span className="stat-label">On-Time Dispatch Rate</span>
          </div>
          <div className="stat-item text-start">
            <span className="stat-num">1,450+</span>
            <span className="stat-label">Daily Connected Sectors</span>
          </div>
          <div className="stat-item text-start">
            <span className="stat-num">34%</span>
            <span className="stat-label">Cascading Cost Reduction</span>
          </div>
          <div className="stat-item text-start">
            <span className="stat-num">&lt; 12ms</span>
            <span className="stat-label">Real-Time OCC Telemetry</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
