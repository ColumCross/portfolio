import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('english');

  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navigation 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          language={language} 
          onLanguageChange={(newLanguage) => {
            // 1. Fade out all content
            const homeElement = document.querySelector('.home');
            if (homeElement) {
              homeElement.classList.add('fade-out');
              homeElement.classList.remove('fade-in');
            }
            
            // 2. Set language after fade out completes
            setTimeout(() => {
              setLanguage(newLanguage);
              
              // 3. Fade in all content
              setTimeout(() => {
                if (homeElement) {
                  homeElement.classList.remove('fade-out');
                  homeElement.classList.add('fade-in');
                }
              }, 50); // Small delay to ensure language change is processed
            }, 250); // Match CSS transition duration
          }} 
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
