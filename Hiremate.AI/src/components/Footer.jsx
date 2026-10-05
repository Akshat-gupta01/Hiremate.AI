import { BrainCircuit, Globe, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content fade-in-up">
          <div className="footer-logo" style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              <BrainCircuit className="text-gradient" size={24} />
              <h3 style={{ margin: 0 }}>HireMate.AI</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Your AI-powered career partner. We help freshers and students build resumes, analyze profiles, and practice interviews seamlessly.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul style={{ flexDirection: 'row', gap: '1rem' }}>
                <li><a href="#"><MessageCircle size={20} /></a></li>
                <li><a href="#"><Globe size={20} /></a></li>
                <li><a href="#"><Mail size={20} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom fade-in-up delay-200">
          <p>&copy; {new Date().getFullYear()} HireMate.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
