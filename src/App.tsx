import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import Header from './components/Header';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Auto-hide splash after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setSplashComplete(true), 600); // Wait for fade-out
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Splash Overlay */}
      {showSplash && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal to-charcoal transition-opacity duration-600"
          style={{ 
            opacity: showSplash ? 1 : 0,
            animation: 'fadeIn 0.8s ease-out, fadeOut 0.6s ease-in 2.4s forwards'
          }}
        >
          <div className="text-center" style={{ 
            animation: 'scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            {/* Logo Circle */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-flame-red to-golden-yellow flex items-center justify-center shadow-2xl">
              <span className="text-white text-6xl font-playfair font-black">I</span>
            </div>

            {/* Restaurant Name */}
            <h1 
              className="font-playfair font-black text-white text-7xl md:text-8xl tracking-[0.2em] mb-4"
              style={{
                textShadow: '0 10px 40px rgba(211,47,47,0.6), 0 0 80px rgba(255,167,38,0.3)',
              }}
            >
              IZGARA
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-golden-yellow text-xl tracking-[0.3em] uppercase">
              Paris
            </p>
          </div>
        </div>
      )}

      {/* Header - Only show after splash completes */}
      {splashComplete && <Header />}

      {/* Main Content */}
      <div style={{ opacity: splashComplete ? 1 : 0, transition: 'opacity 0.6s ease-in' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
