import React from 'react';

const Navigation = ({ currentPage, setCurrentPage, language, onLanguageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' }
  ];

  const scrollToSection = (sectionId) => {
    setCurrentPage(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      
      <div className="language-buttons">
        <button 
          className={`btn ${language === 'english' ? '' : 'btn-secondary'}`}
          onClick={() => onLanguageChange('english')}
        >
          English
        </button>
        <button 
          className={`btn ${language === 'german' ? '' : 'btn-secondary'}`}
          onClick={() => onLanguageChange('german')}
        >
          Deutsch
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 