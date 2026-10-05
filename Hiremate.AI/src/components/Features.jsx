import { FileSearch, LayoutTemplate, Video } from 'lucide-react';

const featuresData = [
  {
    title: 'Resume Analyzer',
    description: 'AI scans and gives immediate, actionable feedback on resume quality, keywords, and format.',
    icon: <FileSearch size={24} />,
    image: '/feat-analyzer.png',
    delay: 'delay-100'
  },
  {
    title: 'Resume Builder',
    description: 'Create professional, ATS-friendly resumes easily with our intuitive builder templates.',
    icon: <LayoutTemplate size={24} />,
    image: '/feat-builder.png',
    delay: 'delay-200'
  },
  {
    title: 'Mock Interview',
    description: 'Practice interviews in Video mode & Chat mode with real-time AI feedback on your performance.',
    icon: <Video size={24} />,
    image: '/feat-interview.png',
    delay: 'delay-300'
  }
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title fade-in-up">Powerful AI Features</h2>
        <p className="section-subtitle fade-in-up delay-100">
          Everything you need to stand out to recruiters and land your dream job.
        </p>
        
        <div className="grid grid-3">
          {featuresData.map((feature, index) => (
            <div key={index} className={`card fade-in-up ${feature.delay}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                {feature.description}
              </p>
              <div className="feature-image-container" style={{ marginTop: 'auto' }}>
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
