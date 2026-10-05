import { FileText, ArrowRight } from 'lucide-react';

const Hero = ({ onOpenAuth }) => {
  return (
    <section className="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in-up">
            Your AI Career Partner for a <span className="text-gradient">Smarter Future</span>
          </h1>
          <p className="fade-in-up delay-100">
            Build resumes, analyze profiles, and practice interviews — all in one place. 
            Step into the professional world with confidence.
          </p>
          <div className="hero-buttons fade-in-up delay-200">
            <button className="btn btn-primary" onClick={onOpenAuth}>
              Get Started <ArrowRight size={18} />
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
