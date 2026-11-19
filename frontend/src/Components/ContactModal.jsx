import { useState } from 'react';

function ContactModal({ isOpen, onClose, defaultSubject = 'General Inquiry' }) {
  const [carrierName, setCarrierName] = useState('');
  const [fleetSize, setFleetSize] = useState('20-100');
  const [workEmail, setWorkEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 900);
  };

  return (
    <div className="savera-modal-backdrop" onClick={onClose}>
      <div className="savera-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-header-block">
          <div className="luxury-badge mb-2">{defaultSubject.toUpperCase()}</div>
          <h3 className="modal-title">Request Carrier Briefing</h3>
          <p className="modal-subtitle">
            Schedule an executive demonstration of SAVÉRA and the FlightRipple™ engine with our senior airline operations team.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 text-center rounded-4" style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.4)' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" className="mb-2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <h4 style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px' }}>Briefing Request Dispatched</h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.86rem', margin: 0 }}>
              An enterprise operations director will connect with your airline team within 4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="savera-form-group">
              <label className="savera-form-label">Airline / Carrier Name</label>
              <input
                type="text"
                className="savera-form-input"
                placeholder="e.g. Royal Pacific Airways"
                value={carrierName}
                onChange={(e) => setCarrierName(e.target.value)}
                required
              />
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="savera-form-label">Fleet Size</label>
                <select
                  className="savera-form-select"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(e.target.value)}
                >
                  <option value="under-20">Under 20 Aircraft</option>
                  <option value="20-100">20 – 100 Aircraft</option>
                  <option value="100-300">100 – 300 Aircraft</option>
                  <option value="300-plus">300+ Aircraft (Global Flag Carrier)</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="savera-form-label">Work Email</label>
                <input
                  type="email"
                  className="savera-form-input"
                  placeholder="name@airline.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="savera-form-group">
              <label className="savera-form-label">Operational Focus Area</label>
              <textarea
                className="savera-form-input"
                rows="3"
                placeholder="Tell us about your route network, current OCC systems, or disruption challenges..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-modal-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Transmitting Request...' : 'Schedule Executive Demo'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
