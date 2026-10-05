import React from 'react';
import { Check } from 'lucide-react';
import Footer from './Footer';

const Pricing = () => {
  return (
    <>
      <div className="fade-in-up" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '4rem', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Simple, Transparent Pricing</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Choose the perfect plan to accelerate your career. No hidden fees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            
            {/* Starter Plan */}
            <div className="card glass" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Starter</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  ₹0<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/mo</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Perfect for students and freshers just starting out.</p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Basic Resume Builder</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> 2 ATS Scans per month</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> 1 Mock Interview session</li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Get Started</button>
            </div>

            {/* Pro Plan */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderColor: 'var(--accent-primary)', position: 'relative', transform: 'scale(1.05)', boxShadow: '0 20px 40px rgba(79, 70, 229, 0.15)', zIndex: 10 }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                MOST POPULAR
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Professional</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  ₹499<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/mo</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Everything you need to secure your dream job.</p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Advanced Resume Builder</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Unlimited ATS Scans</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> 10 Mock Interview sessions</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Priority AI Analysis</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }}>Upgrade to Pro</button>
            </div>

            {/* Enterprise Plan */}
            <div className="card glass" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Elite</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                  ₹999<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/mo</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>For users who want ultimate preparation tools.</p>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flex: 1 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> All Professional Features</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Unlimited Mock Interviews</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> 1-on-1 Expert Resume Review</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={20} color="var(--accent-primary)" /> Custom Cover Letters</li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Get Elite</button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
