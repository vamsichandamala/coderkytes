import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3 className="footer-title">CoderKytes</h3>
          <p className="footer-desc">learn from industry experts and<br />become job-ready in 6 months</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Careers <span className="hiring-badge">We're hiring</span></a>
            </li>
            <li><a href="#">Blog <span className="external-icon">↗</span></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home-container"> Home</a></li>
            <li><a href="#courses"> Courses</a></li>
            <li><a href="#"> Certificates</a></li>
            <li><a href="#"> Contact</a></li>
          
          </ul>
        </div>
        

        <div className="footer-section">
          <h4>Social Connect</h4>
          <ul>
            <li><a href="#"><i className="icon youtube"></i> YouTube</a></li>
            <li><a href="#"><i className="icon discord"></i> Discord</a></li>
            <li><a href="#"><i className="icon linkedin"></i> LinkedIn</a></li>
            <li><a href="#"><i className="icon instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="icon facebook"></i> Facebook</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><i className="icon location"></i> Balaji Colony,<br />Tirupathi<br />Andhra Pradesh</li>
            <li><i className="icon email"></i> coderkytes@gmail.com</li>
            <li><i className="icon phone"></i> +91 8340968829</li>
            <li><i className="icon whatsapp"></i> WhatsApp us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
