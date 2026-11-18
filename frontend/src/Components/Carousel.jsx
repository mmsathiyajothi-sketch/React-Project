import { useState, useEffect } from 'react';

function Carousel({ onOpenStaffLogin }) {
  // Perspectives available: 0 = Cabin Window Sunset, 1 = Luxury Cabin Interior, 2 = Global Airport Hub
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/window.jpg',
      label: 'Cabin Sunset Perspective',
      tagline: 'Above the Clouds, Beyond Expectations',
    },
    {
      img: '/seat.jpg',
      label: 'First Class Cabin Interior',
      tagline: 'Crafted for Luxury, Engineered for Precision',
    },
    {
      img: '/airport.jpg',
      label: 'International Terminal Hub',
      tagline: 'Connected Across 150+ Global Gateways',
    },
  ];

  // Auto-advance slowly or let user control
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="savera-hero-wrapper">
      {/* Background with Window Sunset */}
      <div className="savera-hero-bg">
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].label}
          className="savera-hero-bg-img"
        />
        <div className="savera-hero-overlay"></div>
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="hero-glow-gold"></div>
      <div className="hero-glow-purple"></div>

      <div className="container savera-hero-content">
        <div className="row align-items-center g-5">
          {/* Left Column: Hero Typography & Actions */}
          <div className="col-lg-7 text-start">
            <div className="luxury-badge mb-3">
              <span className="beacon-dot"></span>
              SAVÉRA ENTERPRISE SUITE • VERSION 2.0
            </div>

            <h1 className="hero-heading">
              Smarter Airline Operations.{' '}
              <span className="gold-text-gradient d-block">
                One Connected Platform.
              </span>
            </h1>

            <p className="hero-desc">
              Coordinate flights, aircraft, crew and schedules in one unified platform.
            </p>

            <div className="hero-btn-group">
              <a href="#features" className="btn-savera-primary">
                Explore Platform
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ebd07d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Staff Login
              </button>
            </div>

            {/* View Switcher Controls */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                PERSPECTIVE:
              </span>
              <div className="hero-view-switcher">
                {slides.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`view-switch-btn ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                  >
                    {idx === 0 ? 'Window Sunset' : idx === 1 ? 'Luxury Cabin' : 'Global Hub'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glass Telemetry HUD */}
          <div className="col-lg-5">
            <div className="hero-glass-hud text-start">
              <div className="hud-header">
                <div className="hud-title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ebd07d" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  OCC Global Telemetry
                </div>
                <div className="footer-status-badge">
                  <span className="beacon-dot" style={{ background: '#34d399', boxShadow: '0 0 8px #34d399' }}></span>
                  LIVE SYNC
                </div>
              </div>

              {/* Live Flight Telemetry Rows */}
              <div className="hud-flight-row">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <strong style={{ color: '#fff' }}>SV-104</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-400)' }}>LHR ➔ JFK</span>
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
                    <strong style={{ color: '#fff' }}>SV-208</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-400)' }}>DXB ➔ SIN</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    A350-1000 • FL410 • Gate B14
                  </div>
                </div>
                <span className="hud-tag-ontime">BOARDING</span>
              </div>

              <div className="hud-flight-row" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', background: 'rgba(124, 58, 237, 0.08)' }}>
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <strong style={{ color: '#fff' }}>SV-440</strong>
                    <span style={{ fontSize: '0.8rem', color: '#c084fc' }}>CDG ➔ LAX</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Delay +15m Resolved via FlightRipple™
                  </div>
                </div>
                <span className="hud-tag-ripple">RIPPLE NEUTRALIZED</span>
              </div>

              <div className="p-2 mt-3 rounded d-flex align-items-center justify-content-between" style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Fleet Dispatch Integrity</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 'bold', color: 'var(--gold-400)' }}>99.98%</span>
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
