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
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.body.classList.remove('splash-active');
    }, 100);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (showSplash) {
      document.body.classList.add('splash-active');
    }

    return () => {
      document.body.classList.remove('splash-active');
    };
  }, [showSplash]);

  return (
    <Router>
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      
      {splashComplete && <Header />}
      
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
