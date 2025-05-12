import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">CoderKytes</h3>
          <p className="footer-desc">
            Learn from industry experts and<br />become job-ready in 6 months
          </p>
        </div>

        <div className="footer-section">
  <h4>Company</h4>
  <ul>
    <li>
      <button type="button" className="link-button">
        Careers <span className="hiring-badge">We're hiring</span>
      </button>
    </li>
    <li>
      <button type="button" className="link-button">
        Blog <span className="external-icon">↗</span>
      </button>
    </li>
  </ul>
</div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home-container">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#courses" role="button">Certificates</a></li>
            <li><a href="#courses" role="button">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Connect</h4>
          <ul>
            <li><a href="#courses" target="_blank" rel="noopener noreferrer"><i className="icon youtube" /> YouTube</a></li>
            <li><a href="#courses" target="_blank" rel="noopener noreferrer"><i className="icon discord" /> Discord</a></li>
            <li><a href="#courses" target="_blank" rel="noopener noreferrer"><i className="icon linkedin" /> LinkedIn</a></li>
            <li><a href="#courses" target="_blank" rel="noopener noreferrer"><i className="icon instagram" /> Instagram</a></li>
            <li><a href="#courses" target="_blank" rel="noopener noreferrer"><i className="icon facebook" /> Facebook</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><i className="icon location" /> Balaji Colony,<br />Tirupathi<br />Andhra Pradesh</li>
            <li><i className="icon email" /> coderkytes@gmail.com</li>
            <li><i className="icon phone" /> +91 8340968829</li>
            <li><i className="icon whatsapp" /> WhatsApp us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
