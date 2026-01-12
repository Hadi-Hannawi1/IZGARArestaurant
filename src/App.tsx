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
    // Wait for fade animation, then show content
    setTimeout(() => {
      setSplashComplete(true);
      // Force scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 100);
  };

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Router>
      {/* Splash Screen */}
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      
      {/* Header - Only show after splash completes */}
      {splashComplete && <Header />}
      
      {/* Main Content - Hidden during splash */}
      <div style={{ 
        opacity: splashComplete ? 1 : 0, 
        visibility: splashComplete ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease-in' 
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
