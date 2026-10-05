import { Rocket } from 'lucide-react';

const CTASection = ({ onOpenAuth }) => {
  return (
    <section id="cta" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="blob blob-1" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', filter: 'blur(100px)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="glass fade-in-up" style={{ 
          padding: '4rem 2rem', 
          borderRadius: '1.5rem', 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          border: '1px solid var(--accent-primary)'
        }}>
          <Rocket size={48} className="text-gradient" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Start Your Career Journey Today</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Don't let a poorly formatted resume or missed interview question hold you back. Join HireMate.AI and take control of your future.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} onClick={onOpenAuth}>
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
