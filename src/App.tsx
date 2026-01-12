import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import Header from './components/Header';
import Splash from './components/Splash';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => {
      setSplashComplete(true);
      // Force scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  // Force scroll to top on mount and lock body during splash
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <Router>
      {/* Splash Screen - ONLY ONE */}
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      
      {/* Header - Only show after splash completes */}
      {splashComplete && <Header />}
      
      {/* Main Content - Hidden during splash */}
      <div style={{ 
        opacity: splashComplete ? 1 : 0, 
        visibility: splashComplete ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease-in',
        pointerEvents: splashComplete ? 'auto' : 'none'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
