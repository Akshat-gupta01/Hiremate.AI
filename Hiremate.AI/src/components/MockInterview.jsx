import React from 'react';
import { Video, Mic, CheckCircle, ArrowRight } from 'lucide-react';

const MockInterview = () => {
  return (
    <div className="mock-interview" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient">AI Mock Interview</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Elevate your interview skills with our advanced AI. Practice real-world questions, receive instant feedback, and build confidence to land your dream job.
          </p>
        </div>

        {/* Info & Image Split Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          
          <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '350px', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--card-border)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
               {/* Displaying the user's uploaded image here */}
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Interviewer" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '0.5rem 1rem', borderRadius: '0.5rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%' }}></div>
                 <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>AI Interviewer Online</span>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>How it works</h3>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-primary)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                <Video size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Simulated Environment</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>Experience lifelike video interviews specifically tailored to your industry role.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-primary)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                <Mic size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Real-time Analysis</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>Our AI analyzes your tone, confidence, and keyword usage as you speak.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-primary)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Actionable Feedback</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>Get a detailed scorecard with actionable tips for improvement after every session.</p>
              </div>
            </div>
            
            <button className="btn btn-primary" style={{ marginTop: '1rem', alignSelf: 'flex-start' }} onClick={() => alert('This module is coming soon!')}>
              Start Practice <ArrowRight size={18} />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
