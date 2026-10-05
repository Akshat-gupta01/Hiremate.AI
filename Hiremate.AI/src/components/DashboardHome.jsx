import { useNavigate } from 'react-router-dom';
import { FileText, FileSearch, Mic } from 'lucide-react';

const DashboardHome = () => {
  const navigate = useNavigate();

  const handleNavigation = (module) => {
    // Pass local storage (including Puter token) softly through the hash
    const syncHash = '#auth_sync=' + encodeURIComponent(JSON.stringify({...localStorage}));
    
    if (module === 'analyzer') {
      window.location.href = 'http://localhost:5174/' + syncHash; 
    } else if (module === 'builder') {
      window.location.href = 'http://localhost:5175/' + syncHash; 
    } else if (module === 'interview') {
      window.location.href = 'http://localhost:5176/' + syncHash; 
    } else {
      navigate(module);
    }
  };

  return (
    <div className="dashboard-home fade-in-up" style={{ padding: '0 0 2rem 0' }}>
      <h1 className="text-gradient" style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>Welcome to HireMate.AI</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Select a module below to supercharge your career preparation.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Resume Builder Card */}
        <div 
          className="glass hover-card" 
          onClick={() => handleNavigation('builder')}
          style={{ 
            padding: '2rem', 
            borderRadius: '16px', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ padding: '1rem', background: 'rgba(100, 108, 255, 0.1)', borderRadius: '12px', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
            <FileText size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Resume Builder</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Create a professional, ATS-friendly resume tailored to your target roles using our intelligent builder.</p>
        </div>

        {/* Resume Analyzer Card */}
        <div 
          className="glass hover-card" 
          onClick={() => handleNavigation('analyzer')}
          style={{ 
            padding: '2rem', 
            borderRadius: '16px', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', marginBottom: '1.5rem', color: '#ef4444' }}>
            <FileSearch size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Resume Analyzer</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Get an instant ATS score and tailored feedback to improve your resume's chances against Applicant Tracking Systems.</p>
        </div>

        {/* Mock Interview Card */}
        <div 
          className="glass hover-card" 
          onClick={() => handleNavigation('interview')}
          style={{ 
            padding: '2rem', 
            borderRadius: '16px', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <div style={{ padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', marginBottom: '1.5rem', color: '#22c55e' }}>
            <Mic size={32} />
          </div>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>Mock Interview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Practice with our AI interviewer to get real-time feedback on your answers, tone, and pacing.</p>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;
