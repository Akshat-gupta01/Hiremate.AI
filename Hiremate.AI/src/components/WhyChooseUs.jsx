import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { title: 'Beginner Friendly', desc: 'Designed specifically for freshers and students with no prior experience.' },
  { title: 'AI-Powered Insights', desc: 'Leverage cutting-edge AI to optimize your profile automatically.' },
  { title: 'Saves Time', desc: 'Cut down preparation time from weeks to hours with guided tools.' },
  { title: 'Improves Confidence', desc: 'Practice makes perfect. Walk into any interview feeling prepared.' }
];

const WhyChooseUs = ({ onOpenAuth }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div className="fade-in-up">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose HireMate.AI?</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              We understand the challenges freshers face. Our platform is built to bridge the gap between academic knowledge and industry expectations.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              {reasons.map((reason, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{reason.title}</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in-up delay-200" style={{ position: 'relative' }}>
             <div className="blob" style={{ backgroundColor: 'rgba(79, 70, 229, 0.4)', width: '300px', height: '300px', right: '0', top: '10%' }}></div>
             <div className="card glass" style={{ position: 'relative', zIndex: 10, padding: '3rem' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Ready to stand out?</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Join thousands of students who have already transformed their career trajectory using our AI tools.
                </p>
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={onOpenAuth}>
                  Create a free account
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
