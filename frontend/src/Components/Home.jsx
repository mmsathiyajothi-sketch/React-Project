import { useState } from 'react';

function Home({ onOpenStaffLogin, onOpenContact, onSelectFeature }) {
  // FlightRipple Interactive Simulator Scenario State
  const [activeScenario, setActiveScenario] = useState(0);

  const rippleScenarios = [
    {
      id: 0,
      flight: 'SV-104 (LHR ➔ JFK)',
      delayReason: 'Adverse North Atlantic Weather (+45 min)',
      status: 'CASCADE MITIGATED',
      impactedFlights: '3 Downstream Sectors',
      crewStatus: 'Rest Expiry Protected via Reserve Crew Swap',
      aircraftStatus: 'Standby B787 Tail Reassigned at JFK Gate 4',
      costSaved: '$54,200 Cascade Delay Cost Neutralized',
      recommendation: 'Automated 12-minute turnaround compression + gate swap enabled.',
    },
    {
      id: 1,
      flight: 'SV-882 (DXB ➔ SIN)',
      delayReason: 'Apron Ground Congestion (+30 min)',
      status: 'SCHEDULE REALIGNED',
      impactedFlights: '2 Connecting Departures',
      crewStatus: 'Duty Period Valid (No Violation)',
      aircraftStatus: 'Turnaround Accelerated from 60m to 42m',
      costSaved: '$38,600 Missed Connection Claims Saved',
      recommendation: 'Priority baggage routing & expedited ATC taxi clearance.',
    },
    {
      id: 2,
      flight: 'SV-319 (CDG ➔ HND)',
      delayReason: 'Hydraulic Sensor Inspection (+40 min)',
      status: 'FLEET SWAP EXECUTED',
      impactedFlights: '4 Network Rotations',
      crewStatus: 'Crew Pairing Shifted to SV-321',
      aircraftStatus: 'A350 Tail Swap with Hangar Standby Unit',
      costSaved: '$82,000 EU261 Passenger Compensation Saved',
      recommendation: 'Tech log clearance synced with engineering line station.',
    },
  ];

  // Six Feature Cards Data (Strictly matching prompt specifications)
  const platformFeatures = [
    {
      number: '01',
      title: 'Flight Management',
      shortDesc: 'Manage flights with ease.',
      fullDesc: 'Manage flight details, flight numbers, international routes and real-time flight status in one organized platform.',
      tags: ['Live Radar', 'Route Control', 'Status Telemetry'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Aircraft Management',
      shortDesc: 'Track and allocate aircraft.',
      fullDesc: 'Monitor aircraft information, availability, assigned flights, tail utilization cycles and operational records efficiently.',
      tags: ['Fleet Tracking', 'Tail Allocation', 'Cabin Config'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20"></path>
          <path d="m4.93 4.93 4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24"></path>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Crew Management',
      shortDesc: 'Plan your crew perfectly.',
      fullDesc: 'Organize crew rosters, duty assignments, fatigue risk indexes and pilot-cabin pairings in one compliant system.',
      tags: ['Fatigue Risk', 'Duty Limits', 'Roster Pairing'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Flight Scheduling',
      shortDesc: 'Optimize schedules smartly.',
      fullDesc: 'Create and manage flight schedules while coordinating airport slots, turnaround synchronization, and aircraft rotations.',
      tags: ['Airport Slots', 'Turnaround Sync', 'Rotations'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
    },
    {
      number: '05',
      title: 'FlightRipple',
      shortDesc: 'Experience smarter operations.',
      fullDesc: 'Analyze how flight delays affect connected flights, aircraft availability and crew schedules with instant cascade mitigation.',
      tags: ['Disruption AI', 'Cascade Predictor', 'OCC Sync'],
      isSpecial: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Maintenance',
      shortDesc: 'Keep your fleet ready always.',
      fullDesc: 'Maintain aircraft maintenance records, line inspection schedules, digital tech logs and airworthiness certification history.',
      tags: ['A/B/C/D Checks', 'Tech Log', 'Airworthiness'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ====================================================================
          SECTION 3: OUR PLATFORM – SIX PREMIUM FEATURE CARDS
          ==================================================================== */}
      <section id="features" className="savera-platform-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="luxury-badge mb-3">
              <span className="beacon-dot"></span>
              OUR PLATFORM
            </div>
            <h2 className="section-title">
              One Platform.{' '}
              <span className="gold-text-gradient">Complete Airline Operations.</span>
            </h2>
            <p className="section-subtitle">
              Engineered with aviation precision to unify OCC dispatch, flight deck telemetry, crew rostering, and fleet airworthiness.
            </p>
          </div>

          {/* Six Glass Feature Cards Grid */}
          <div className="platform-grid">
            {platformFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`glass-feature-card ${feat.isSpecial ? 'card-flightripple' : ''}`}
              >
                <div>
                  <div className="card-top">
                    <div className={`card-icon-wrap ${feat.isSpecial ? 'purple' : ''}`}>
                      {feat.icon}
                    </div>
                    <span className="card-index">{feat.number}</span>
                  </div>

                  <h3 className="card-title">
                    {feat.title}
                  </h3>

                  <div className="card-short-desc">
                    {feat.shortDesc}
                  </div>

                  <p className="card-desc">
                    {feat.fullDesc}
                  </p>
                </div>

                <div className="card-footer-box">
                  <div className="card-tags">
                    {feat.tags.map((t, i) => (
                      <span key={i} className="card-tag-pill">{t}</span>
                    ))}
                  </div>

                  {/* Elegant Circular Arrow Button */}
                  <a
                    href={feat.isSpecial ? '#flightripple' : '#about'}
                    className="card-circular-btn"
                    aria-label={`Explore ${feat.title}`}
                    onClick={(e) => {
                      if (onSelectFeature) {
                        e.preventDefault();
                        onSelectFeature(feat);
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4: ABOUT SAVÉRA (LUXURY SPLIT LAYOUT WITH WARM IVORY CARD)
          ==================================================================== */}
      <section id="about" className="savera-about-section">
        <div className="container">
          <div className="about-split-grid">
            {/* Left Column: Luxury Aviation Terminal / Lounge Image */}
            <div className="about-image-frame">
              <img
                src="/port.jpg"
                alt="SAVÉRA Luxury Aviation Terminal and Executive Lounge"
                className="about-img"
              />

              {/* Floating Benchmark Badges */}
              <div className="floating-badge-top">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>GLOBAL AVIATION BENCHMARK</span>
              </div>

              <div className="floating-badge-bottom">
                <span className="badge-stat">150+</span>
                <span className="badge-sub">Commercial & Flag Carriers</span>
              </div>
            </div>

            {/* Right Column: Warm Ivory Background with Elegant Black Typography & Champagne Gold Accents */}
            <div className="about-ivory-card text-start">
              <div className="ivory-eyebrow">ABOUT SAVÉRA</div>

              <h2 className="ivory-heading">
                Redefining Airline Operations for a Smarter Tomorrow.
              </h2>

              <p className="ivory-desc">
                SAVÉRA is a next-generation airline operations platform, designed to bring efficiency, intelligence and elegance to the skies.
              </p>

              <div className="ivory-features-list">
                <div className="ivory-feature-row">
                  <div className="ivory-check-icon">✓</div>
                  <div>
                    <div className="ivory-feature-title">Unified Operational Visibility</div>
                    <div className="ivory-feature-desc">
                      Eliminate legacy software silos between flight dispatch, station handlers, and line maintenance engineering.
                    </div>
                  </div>
                </div>

                <div className="ivory-feature-row">
                  <div className="ivory-check-icon">✓</div>
                  <div>
                    <div className="ivory-feature-title">Predictive Disruption Prevention</div>
                    <div className="ivory-feature-desc">
                      Anticipate gate bottlenecks, crew duty overruns, and cascading delays hours before passengers are affected.
                    </div>
                  </div>
                </div>

                <div className="ivory-feature-row">
                  <div className="ivory-check-icon">✓</div>
                  <div>
                    <div className="ivory-feature-title">Enterprise Airline Scalability</div>
                    <div className="ivory-feature-desc">
                      Compliant with ICAO, IATA, FAA, and EASA regulatory frameworks, ready for global carrier fleets.
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn-ivory-learn"
                onClick={() => onOpenContact && onOpenContact('SAVÉRA Executive Briefing')}
              >
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5: FLIGHTRIPPLE – SPECIAL FEATURE (NIGHT-LIGHT EXPERIENCE)
          ==================================================================== */}
      <section id="flightripple" className="savera-flightripple-section">
        {/* Starry Night Sky Ambient Canvas & Glowing Light Trails */}
        <div className="ripple-starfield" aria-hidden="true"></div>
        <div className="ripple-cosmic-glow-1" aria-hidden="true"></div>
        <div className="ripple-cosmic-glow-2" aria-hidden="true"></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Section Header */}
          <div className="ripple-header-center text-center">
            <div className="luxury-badge purple mb-3">
              <span className="beacon-dot purple"></span>
              OUR SPECIAL FEATURE
            </div>

            <h2 className="flightripple-brand-title purple-text-gradient">
              FlightRipple™
            </h2>

            <p className="flightripple-tagline">
              Smarter. Faster. More Connected.
            </p>

            <p className="flightripple-desc">
              An advanced intelligent system that synchronizes flights, schedules and resources in real time, with unmatched precision.
            </p>
          </div>

          {/* Night-Light Visual Experience & Interactive Cascade Disruption Stage */}
          <div className="ripple-visual-stage">
            {/* Cinematic Night Airplane Backdrop with Starlight & Illuminated Runway Skyline */}
            <div className="ripple-stage-bg">
              <img src="/airo.jpg" alt="Aviation Aircraft Flying in Night Sky with Starlight" />
              <div className="ripple-night-overlay"></div>
            </div>

            {/* Glowing Golden Flight Paths & Coordinate Nodes */}
            <div className="ripple-flight-arcs" aria-hidden="true">
              <svg className="flight-arcs-svg" viewBox="0 0 1000 400" fill="none">
                <defs>
                  <linearGradient id="goldFlightArc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D9B477" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#F3D8A4" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#D9B477" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="purpleFlightArc" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#C084FC" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Transatlantic Arc */}
                <path d="M 120 280 Q 500 60 880 280" stroke="url(#goldFlightArc)" strokeWidth="2.5" strokeDasharray="6 6" className="animated-flight-path" />
                {/* Pacific Radial Arc */}
                <path d="M 180 320 Q 520 140 820 310" stroke="url(#purpleFlightArc)" strokeWidth="2" strokeDasharray="4 6" className="animated-flight-path-reverse" />
              </svg>
            </div>

            {/* Interactive Cascade Simulator Layout */}
            <div className="ripple-sim-layout text-start">
              {/* Left Column: Disruption Selection */}
              <div className="ripple-sim-control">
                <div className="sim-control-title">
                  <span>Simulate Delay Cascade</span>
                  <span className="badge-live-demo">
                    OCC LIVE DEMO
                  </span>
                </div>
                <p className="sim-control-desc">
                  Select an operational disruption to observe FlightRipple™ resolve downstream cascading delays:
                </p>

                {rippleScenarios.map((sc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`sim-scenario-btn ${activeScenario === idx ? 'active' : ''}`}
                    onClick={() => setActiveScenario(idx)}
                  >
                    <div>
                      <div className="scenario-flight-name">
                        {sc.flight}
                      </div>
                      <div className="scenario-delay-reason">
                        {sc.delayReason}
                      </div>
                    </div>
                    <span className="scenario-arrow">➔</span>
                  </button>
                ))}
              </div>

              {/* Right Column: Dynamic Telemetry Output */}
              <div className="ripple-telemetry-panel">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="beacon-dot purple"></span>
                    <strong style={{ color: '#FFFFFF', fontSize: '1rem', letterSpacing: '0.02em' }}>
                      Ripple Resolution Output
                    </strong>
                  </div>
                  <span className="hud-tag-ripple">
                    {rippleScenarios[activeScenario].status}
                  </span>
                </div>

                <div className="telemetry-row">
                  <span className="telemetry-label">Downstream Impact Analyzed:</span>
                  <span className="telemetry-val highlight">
                    {rippleScenarios[activeScenario].impactedFlights}
                  </span>
                </div>

                <div className="telemetry-row">
                  <span className="telemetry-label">Crew Duty Compliance:</span>
                  <span className="telemetry-val">
                    {rippleScenarios[activeScenario].crewStatus}
                  </span>
                </div>

                <div className="telemetry-row">
                  <span className="telemetry-label">Aircraft Standby Assignment:</span>
                  <span className="telemetry-val purple">
                    {rippleScenarios[activeScenario].aircraftStatus}
                  </span>
                </div>

                <div className="telemetry-row">
                  <span className="telemetry-label">Estimated Financial Recovery:</span>
                  <span className="telemetry-val highlight">
                    {rippleScenarios[activeScenario].costSaved}
                  </span>
                </div>

                <div className="ripple-rec-box">
                  <div className="rec-box-title">
                    FlightRipple™ Recommendation
                  </div>
                  <div className="rec-box-body">
                    {rippleScenarios[activeScenario].recommendation}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Four Capabilities Cards (Matching prompt specifications) */}
          <div className="ripple-caps-grid text-start">
            <div className="ripple-cap-card">
              <div className="cap-top-row">
                <div className="cap-num">01 / CAPABILITY</div>
                <div className="cap-icon-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>
              <h3 className="cap-title">Real-time Flight Sync</h3>
              <p className="cap-desc">
                Instant telemetry and radar synchronization transmits flight status updates across OCC and station dispatch in milliseconds.
              </p>
            </div>

            <div className="ripple-cap-card">
              <div className="cap-top-row">
                <div className="cap-num">02 / CAPABILITY</div>
                <div className="cap-icon-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
              </div>
              <h3 className="cap-title">Smart Resource Allocation</h3>
              <p className="cap-desc">
                AI engines dynamically compute standby tail availability, gate turnarounds, and ground crew handling schedules.
              </p>
            </div>

            <div className="ripple-cap-card">
              <div className="cap-top-row">
                <div className="cap-num">03 / CAPABILITY</div>
                <div className="cap-icon-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="cap-title">Seamless Collaboration</h3>
              <p className="cap-desc">
                Bridges pilots, cabin crew schedulers, ground teams, and engineering in a single unified communication channel.
              </p>
            </div>

            <div className="ripple-cap-card">
              <div className="cap-top-row">
                <div className="cap-num">04 / CAPABILITY</div>
                <div className="cap-icon-gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="cap-title">Enhanced Efficiency</h3>
              <p className="cap-desc">
                Prevents disruption cascades, protecting on-time metrics and reducing passenger compensation costs by up to 34%.
              </p>
            </div>
          </div>

          {/* Explore FlightRipple CTA */}
          <div className="text-center mt-5">
            <button
              type="button"
              className="btn-explore-ripple"
              onClick={() => onOpenContact && onOpenContact('FlightRipple Enterprise Demo')}
            >
              <span>Explore FlightRipple™</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6: HOW IT WORKS – 3 SIMPLE STEPS
          ==================================================================== */}
      <section id="how-it-works" className="savera-how-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="luxury-badge mb-3">
              <span className="beacon-dot"></span>
              SEAMLESS IMPLEMENTATION
            </div>
            <h2 className="section-title">
              Get Started in <span className="gold-text-gradient">3 Simple Steps</span>
            </h2>
            <p className="section-subtitle">
              Engineered for seamless onboarding and non-disruptive integration with your existing airline systems.
            </p>
          </div>

          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-icon-circle">
                <span className="step-number">01</span>
              </div>
              <h3 className="step-title">Plan</h3>
              <div className="step-subtitle">Set your operational goals.</div>
              <p className="step-desc">
                Define route networks, schedule parameters, fleet capacity and crew duty requirements with automated validation.
              </p>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="step-arrow-divider d-none d-lg-flex" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="1.8">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-icon-circle">
                <span className="step-number">02</span>
              </div>
              <h3 className="step-title">Optimize</h3>
              <div className="step-subtitle">Automate and streamline processes.</div>
              <p className="step-desc">
                Connect live aircraft tracking, harmonize turnarounds, and resolve operational bottlenecks with FlightRipple™ intelligence.
              </p>
            </div>

            {/* Connecting Arrow (Desktop) */}
            <div className="step-arrow-divider d-none d-lg-flex" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D9B477" strokeWidth="1.8">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-icon-circle">
                <span className="step-number">03</span>
              </div>
              <h3 className="step-title">Fly Forward</h3>
              <div className="step-subtitle">Achieve more with SAVÉRA.</div>
              <p className="step-desc">
                Experience world-class on-time dispatch, maximized aircraft utilization, and seamless multi-hub coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7: PREMIUM FOOTER
          ==================================================================== */}
      <footer id="contact" className="savera-footer">
        <div className="container">
          <div className="row g-5 text-start">
            {/* Col 1: Brand & Logo */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="savera-logo-box">
                  <svg className="savera-aviation-emblem" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <circle cx="20" cy="20" r="18" stroke="#D9B477" strokeWidth="1.2" strokeOpacity="0.6" />
                    <path
                      d="M20 7L24 16L33 19L24 22L20 33L16 22L7 19L16 16L20 7Z"
                      fill="#D9B477"
                      fillOpacity="0.3"
                      stroke="#D9B477"
                      strokeWidth="1.4"
                    />
                    <circle cx="20" cy="19.5" r="2.2" fill="#D9B477" />
                  </svg>
                </div>
                <div>
                  <span className="savera-brand-title">SAVÉRA</span>
                  <span className="savera-brand-sub d-block">AIRLINE OPERATIONS</span>
                </div>
              </div>

              <p className="footer-brand-desc">
                SAVÉRA is an airline operations platform designed to bring efficiency, coordination and clarity to airline operations.
              </p>

              <div className="footer-tagline-quote">
                “Fly Smarter. Grow Bigger.”
              </div>

              {/* Social Media Links */}
              <div className="footer-social-row">
                {/* LinkedIn */}
                <a href="#linkedin" className="social-icon-box" title="LinkedIn" aria-label="SAVÉRA LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="#twitter" className="social-icon-box" title="X / Twitter" aria-label="SAVÉRA X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4l16 16M4 20L20 4"></path>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#youtube" className="social-icon-box" title="YouTube" aria-label="SAVÉRA YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#instagram" className="social-icon-box" title="Instagram" aria-label="SAVÉRA Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="col-lg-2 col-md-6">
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#home">Home</a></li>
                <li className="footer-link-item"><a href="#features">Features</a></li>
                <li className="footer-link-item"><a href="#about">About</a></li>
                <li className="footer-link-item"><a href="#flightripple">FlightRipple</a></li>
                <li className="footer-link-item"><a href="#how-it-works">How It Works</a></li>
                <li className="footer-link-item">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      if (onOpenContact) {
                        e.preventDefault();
                        onOpenContact('Executive Inquiry');
                      }
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Operations Suite */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-col-title">Operations Suite</div>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#features">Flight Management</a></li>
                <li className="footer-link-item"><a href="#features">Aircraft Allocation</a></li>
                <li className="footer-link-item"><a href="#features">Crew Scheduling</a></li>
                <li className="footer-link-item"><a href="#features">Flight Scheduling</a></li>
                <li className="footer-link-item"><a href="#flightripple">FlightRipple™ Analysis</a></li>
                <li className="footer-link-item"><a href="#features">Fleet Maintenance</a></li>
              </ul>
            </div>

            {/* Col 4: Global HQ & Staff Portal */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-col-title">Carrier Support</div>
              <p className="footer-support-text">
                24/7 Operations Control Support for certified airline dispatchers.
              </p>
              <div className="footer-contact-item">
                <strong style={{ color: 'var(--soft-gold)' }}>OCC Hotline:</strong> +1 (800) 555-SAVERA
              </div>
              <div className="footer-contact-item mb-3">
                <strong style={{ color: 'var(--soft-gold)' }}>Dispatch:</strong> ops@savera-aviation.com
              </div>

              <button
                type="button"
                className="btn-gold-login w-100 justify-content-center"
                onClick={() => onOpenStaffLogin && onOpenStaffLogin()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Staff Portal Login
              </button>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Compliance */}
          <div className="footer-bottom-row">
            <div>
              © 2026 SAVÉRA. All rights reserved.
            </div>

            <div className="footer-status-badge">
              <span className="beacon-dot" style={{ background: '#34d399', boxShadow: '0 0 8px #34d399' }}></span>
              OCC Telemetry Node Operational • 99.99% Uptime
            </div>

            <div className="d-flex gap-3">
              <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
              <span className="text-muted">•</span>
              <a href="#terms" className="footer-legal-link">Terms of Service</a>
              <span className="text-muted">•</span>
              <a href="#security" className="footer-legal-link">IATA Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
