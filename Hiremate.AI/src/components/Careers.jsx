import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Footer from './Footer';

const Careers = () => {
  const jobs = [
    {
      title: "Frontend Engineer (React/Tailwind)",
      department: "Engineering",
      location: "Remote / Lucknow",
      type: "Full-time",
      description: "Join our frontend team to build beautiful, responsive UI components for HireMate.AI using React.js and Tailwind CSS."
    },
    {
      title: "Machine Learning Engineer (NLP)",
      department: "AI & Data",
      location: "Remote",
      type: "Full-time",
      description: "Help us improve our ATS Resume Analyzer and Mock Interview modules by developing advanced NLP models using Python."
    },
    {
      title: "Product UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Lead the design user experience for our career-building tools, ensuring our application looks premium and modern."
    }
  ];

  return (
    <>
      <div className="fade-in-up" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '4rem', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 font-medium text-sm tracking-wide mb-4">
              JOIN OUR TEAM
            </div>
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>Build the Future of Hiring</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              We are looking for passionate individuals to help us revolutionize career preparation with AI. Explore our open roles below.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {jobs.map((job, idx) => (
              <div key={idx} className="card glass hover-card" style={{ padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
                <div style={{ flex: '1 1 500px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>{job.title}</h3>
                    <span style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-primary)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.85rem', fontWeight: '600' }}>
                      {job.department}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={16} /> {job.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={16} /> {job.type}
                    </div>
                  </div>
                  
                  <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>{job.description}</p>
                </div>

                <div style={{ flex: '0 0 auto' }}>
                  <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Apply Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
