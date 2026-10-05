import { Upload, Cpu, MessageSquare, Trophy } from 'lucide-react';

const steps = [
  {
    title: 'Upload or create your resume',
    description: 'Start by uploading your existing resume or building one from scratch using our AI builder.',
    icon: <Upload size={20} />
  },
  {
    title: 'Get AI feedback',
    description: 'Our advanced AI analyzes your profile and provides a detailed score with actionable improvements.',
    icon: <Cpu size={20} />
  },
  {
    title: 'Practice interviews',
    description: 'Simulate real-world interviews. Answer questions via video or chat and get instant feedback.',
    icon: <MessageSquare size={20} />
  },
  {
    title: 'Get job-ready',
    description: 'Use the insights to refine your approach and confidently step into your next big career opportunity.',
    icon: <Trophy size={20} />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title fade-in-up">How It Works</h2>
        <p className="section-subtitle fade-in-up delay-100">
          Your path to career success in four simple steps.
        </p>
        
        <div className="grid grid-2">
          {/* Visual representation could go here, for now using a flex layout of cards */}
          <div className="step-container">
            {steps.map((step, index) => (
              <div key={index} className={`step-card fade-in-up delay-${(index + 1) * 100}`}>
                <div className="step-number">{index + 1}</div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="card fade-in-up delay-300" style={{ 
            padding: 0, 
            display: 'flex', 
            flexDirection: 'column', 
            overflow: 'hidden'
          }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <img src="/career-success.png" alt="Career Success" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '320px', display: 'block' }} />
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Your Success Awaits..</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Ready to take the next big step in your career journey?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
