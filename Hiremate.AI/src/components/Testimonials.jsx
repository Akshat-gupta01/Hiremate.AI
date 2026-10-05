import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Krishna Gupta',
    role: 'Computer Science Graduate',
    content: '"The Resume Analyzer completely transformed my CV. I didn’t realize how many ATS keywords I was missing. Landed my first interview within a week of using HireMate.AI!"',
    initials: 'SJ'
  },
  {
    name: 'Shivansh Gupta ',
    role: 'Final Year Student',
    content: '"Practicing with the mock interview feature felt incredibly real. The AI feedback on my tone and pacing helped me build the confidence I needed for my campus placements."',
    initials: 'RS'
  },
  {
    name: 'Radhika Gupta',
    role: 'Junior Developer',
    content: '"As a fresher, I was lost on how to structure my resume. The builder is so intuitive and the final result looks incredibly professional. Highly recommend it!"',
    initials: 'EC'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title fade-in-up">What Students Say</h2>
        <p className="section-subtitle fade-in-up delay-100">
          Real feedback from freshers who boosted their career readiness.
        </p>
        
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`card fade-in-up delay-${(index + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: '#fbbf24' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1, fontStyle: 'italic' }}>
                {testimonial.content}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--accent-primary)', 
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold'
                }}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 style={{ fontWeight: '600' }}>{testimonial.name}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
