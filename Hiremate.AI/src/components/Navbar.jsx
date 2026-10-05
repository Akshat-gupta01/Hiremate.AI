import { Moon, Sun, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme, isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar glass">
      <div className="container">
        <Link to={isAuthenticated ? "/dashboard" : "/"} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', fontSize: '1.25rem' }}>
          <BrainCircuit className="text-gradient" size={28} />
          <span>HireMate.AI</span>
        </Link>
        
        {!isAuthenticated && (
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={toggleTheme} className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {isAuthenticated && (
            <button onClick={onLogout} className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', borderRadius: '99px' }}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
