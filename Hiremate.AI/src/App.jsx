import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import ResumeBuilder from './components/ResumeBuilder';
import MockInterview from './components/MockInterview';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Careers from './components/Careers';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Theme setter
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Wait for Puter to be available and initialize auth state
  useEffect(() => {
    let checkPuterProvider = setInterval(() => {
      if (window.puter) {
        clearInterval(checkPuterProvider);
        if (window.puter.auth.isSignedIn()) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
        setLoading(false);
      }
    }, 100);
    
    // Fallback if puter JS fails to load quickly
    setTimeout(() => {
      if (loading) setLoading(false);
    }, 3000);

    return () => clearInterval(checkPuterProvider);
  }, []);

  useEffect(() => {
    if (loading) return; // Wait until loading finishes to run animation logic
    // Scroll animation logic via IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleOpenAuth = async () => {
    if (!window.puter) return alert('Puter.js not loaded yet');
    try {
      const isSignedIn = await window.puter.auth.signIn();
      if (isSignedIn) {
        setIsAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (e) {
      console.error('Login failed', e);
    }
  };

  const handleLogout = async () => {
    if (window.puter) {
      await window.puter.auth.signOut();
      setIsAuthenticated(false);
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)' }}>
        <div className="loader" style={{ position: 'relative' }}>
          <div className="blob" style={{ width: '100px', height: '100px', position: 'absolute', top: '-50px', left: '-50px', animation: 'float 2s infinite ease-in-out' }}></div>
          <h2 className="text-gradient" style={{ position: 'relative', zIndex: 10 }}>HireMate.AI</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isAuthenticated={isAuthenticated}
        onLogin={handleOpenAuth} /* Added to trigger login */
        onLogout={handleLogout}
      />

      <main>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={
            !isAuthenticated ? (
              <Landing onOpenAuth={handleOpenAuth} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            isAuthenticated ? <DashboardLayout /> : <Navigate to="/" replace />
          }>
            <Route index element={<DashboardHome />} />
            <Route path="analyzer" element={<ResumeAnalyzer />} />
            <Route path="builder" element={<ResumeBuilder />} />
            <Route path="interview" element={<MockInterview />} />
            <Route path="settings" element={
              <div style={{ padding: '2rem' }}>
                <h2>Settings</h2>
                <p>Configuration options will be available here.</p>
              </div>
            } />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
