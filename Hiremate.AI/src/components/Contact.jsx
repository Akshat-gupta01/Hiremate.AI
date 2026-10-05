import React from 'react';
import { Phone, Mail, BookOpen } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="fade-in-up" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '4rem', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ color: '#EA580C', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Contact Us</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ height: '1px', backgroundColor: '#e5e7eb', width: '80px' }}></div>
              <BookOpen style={{ color: '#EA580C' }} size={40} />
              <div style={{ height: '1px', backgroundColor: '#e5e7eb', width: '80px' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Left Side: Contact Details */}
            <div style={{ flex: '1 1 350px', fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', fontSize: '1.15rem' }}>
                <Phone fill="#EA580C" color="#EA580C" size={24} />
                <span>6393648710,9569885352</span>
              </div>

              <div>
                <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email us at:</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  <Mail fill="#EA580C" color="var(--bg-primary)" size={24} />
                  <span>Info@xyz.in</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                  <Mail fill="#EA580C" color="var(--bg-primary)" size={24} />
                  <span>xyz8202@gmail.com</span>
                </div>
              </div>

              <div style={{ lineHeight: '1.6' }}>
                <span style={{ fontWeight: '700' }}>Address:</span><br/>
                <span style={{ color: 'var(--text-secondary)' }}>NH-24, Sitapur Road, Bakshi ka Talab, Lucknow-226201</span>
              </div>

            </div>

            {/* Right Side: Map Embed */}
            <div style={{ flex: '1 1 450px', border: '5px solid white', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.743440656003!2d80.92025477489828!3d27.0066644560477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999511362f9e749%3A0x73357392bf18c880!2sSR%20Group%20Of%20Institutions!5e0!3m2!1sen!2sin!4v1776717131085!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
