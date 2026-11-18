import { useState } from 'react';

function Form({ isOpen, onClose }) {
  const [department, setDepartment] = useState('occ');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        if (onClose) onClose();
      }, 1800);
    }, 1000);
  };

  // If used as a modal and not open, don't render unless no onClose prop was provided (standalone mode)
  if (onClose && !isOpen) return null;

  const content = (
    <div className="savera-modal-card">
      {onClose && (
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
      )}

      <div className="modal-header-block">
        <div className="savera-logo-wrap mx-auto mb-2" style={{ width: '48px', height: '48px' }}>
          <img src="/logo.jpg" alt="SAVÉRA Logo" className="savera-logo-img" />
        </div>
        <div className="luxury-badge mb-2">SECURE OCC GATEWAY</div>
        <h3 className="modal-title">Staff Portal Authorization</h3>
        <p className="modal-subtitle">
          Enter your authorized airline operational credentials to access your dispatch node.
        </p>
      </div>

      {loginSuccess ? (
        <div className="p-4 text-center rounded" style={{ background: 'rgba(52, 211, 153, 0.15)', border: '1px solid rgba(52, 211, 153, 0.4)' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" className="mb-2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <h4 style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: '1.2rem' }}>Authorization Verified</h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.85rem', margin: 0 }}>
            Connecting to SAVÉRA OCC Dispatch Network...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Department Selector */}
          <div className="savera-form-group">
            <label className="savera-form-label">Operational Department</label>
            <select
              className="savera-form-select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="occ">Operations Control Center (OCC)</option>
              <option value="dispatch">Flight Dispatch & Navigation</option>
              <option value="crew">Crew Scheduling & Rostering</option>
              <option value="maintenance">Fleet Maintenance & Engineering</option>
              <option value="flightripple">FlightRipple™ Analytics Node</option>
            </select>
          </div>

          {/* Email or Staff ID */}
          <div className="savera-form-group">
            <label htmlFor="staffEmail" className="savera-form-label">Staff ID or Airline Email</label>
            <input
              type="email"
              id="staffEmail"
              className="savera-form-input"
              placeholder="e.g. capt.reynolds@savera-aviation.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="savera-form-group">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label htmlFor="staffPassword" className="savera-form-label mb-0">Security Passcode</label>
              <a href="#reset" style={{ fontSize: '0.75rem', color: 'var(--gold-400)' }}>Reset Passcode?</a>
            </div>
            <input
              type="password"
              id="staffPassword"
              className="savera-form-input"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Checkbox */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <label className="d-flex align-items-center gap-2" style={{ cursor: 'pointer', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: 'var(--gold-500)', width: '16px', height: '16px' }}
              />
              Remember this station terminal
            </label>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>256-Bit Encrypted</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-modal-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Authenticating Terminal...' : 'Authorize & Enter OCC'}
          </button>

          <div className="text-center mt-3" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Strictly for authorized airline flight operations personnel.
          </div>
        </form>
      )}
    </div>
  );

  if (onClose) {
    return <div className="savera-modal-backdrop" onClick={onClose}><div onClick={(e) => e.stopPropagation()}>{content}</div></div>;
  }

  return content;
}

export default Form;
