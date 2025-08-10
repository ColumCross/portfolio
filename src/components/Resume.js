import React, { useState } from 'react';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const resumeContent = {
    english: {
      title: 'Resume - English',
      content: `
        <h2>John Doe</h2>
        <p><strong>Software Developer</strong></p>
        <p>Email: john.doe@email.com | Phone: +1 (555) 123-4567</p>
        
        <h3>Professional Summary</h3>
        <p>Experienced software developer with 5+ years of experience in web development, specializing in React, Node.js, and modern JavaScript frameworks. Passionate about creating user-friendly applications and solving complex problems.</p>
        
        <h3>Technical Skills</h3>
        <ul>
          <li><strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, TypeScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js, Python, Django</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL</li>
          <li><strong>Tools:</strong> Git, Docker, AWS, Firebase</li>
          <li><strong>Other:</strong> RESTful APIs, GraphQL, Agile/Scrum</li>
        </ul>
        
        <h3>Work Experience</h3>
        
        <h4>Senior Frontend Developer - TechCorp Inc.</h4>
        <p><em>January 2022 - Present</em></p>
        <ul>
          <li>Led development of a React-based e-commerce platform serving 100k+ users</li>
          <li>Implemented responsive design and optimized performance, improving load times by 40%</li>
          <li>Mentored junior developers and conducted code reviews</li>
        </ul>
        
        <h4>Full Stack Developer - StartupXYZ</h4>
        <p><em>March 2020 - December 2021</em></p>
        <ul>
          <li>Built and maintained multiple web applications using React and Node.js</li>
          <li>Collaborated with cross-functional teams to deliver features on time</li>
          <li>Implemented CI/CD pipelines and automated testing</li>
        </ul>
        
        <h3>Education</h3>
        <h4>Bachelor of Science in Computer Science</h4>
        <p>University of Technology | Graduated 2019</p>
        
        <h3>Certifications</h3>
        <ul>
          <li>AWS Certified Developer Associate</li>
          <li>MongoDB Certified Developer</li>
        </ul>
      `
    },
    german: {
      title: 'Lebenslauf - Deutsch',
      content: `
        <h2>John Doe</h2>
        <p><strong>Softwareentwickler</strong></p>
        <p>E-Mail: john.doe@email.com | Telefon: +1 (555) 123-4567</p>
        
        <h3>Berufliche Zusammenfassung</h3>
        <p>Erfahrener Softwareentwickler mit über 5 Jahren Erfahrung in der Webentwicklung, spezialisiert auf React, Node.js und moderne JavaScript-Frameworks. Leidenschaftlich für die Erstellung benutzerfreundlicher Anwendungen und die Lösung komplexer Probleme.</p>
        
        <h3>Technische Fähigkeiten</h3>
        <ul>
          <li><strong>Frontend:</strong> React, JavaScript (ES6+), HTML5, CSS3, TypeScript</li>
          <li><strong>Backend:</strong> Node.js, Express.js, Python, Django</li>
          <li><strong>Datenbanken:</strong> MongoDB, PostgreSQL, MySQL</li>
          <li><strong>Tools:</strong> Git, Docker, AWS, Firebase</li>
          <li><strong>Sonstiges:</strong> RESTful APIs, GraphQL, Agile/Scrum</li>
        </ul>
        
        <h3>Berufserfahrung</h3>
        
        <h4>Senior Frontend Entwickler - TechCorp Inc.</h4>
        <p><em>Januar 2022 - Gegenwart</em></p>
        <ul>
          <li>Entwicklung einer React-basierten E-Commerce-Plattform für über 100.000 Nutzer geleitet</li>
          <li>Responsive Design implementiert und Performance optimiert, Ladezeiten um 40% verbessert</li>
          <li>Juniorentwickler betreut und Code-Reviews durchgeführt</li>
        </ul>
        
        <h4>Full Stack Entwickler - StartupXYZ</h4>
        <p><em>März 2020 - Dezember 2021</em></p>
        <ul>
          <li>Mehrere Webanwendungen mit React und Node.js entwickelt und gewartet</li>
          <li>Mit funktionsübergreifenden Teams zusammengearbeitet, um Features pünktlich zu liefern</li>
          <li>CI/CD-Pipelines und automatisierte Tests implementiert</li>
        </ul>
        
        <h3>Ausbildung</h3>
        <h4>Bachelor of Science in Informatik</h4>
        <p>Technische Universität | Abschluss 2019</p>
        
        <h3>Zertifizierungen</h3>
        <ul>
          <li>AWS Certified Developer Associate</li>
          <li>MongoDB Certified Developer</li>
        </ul>
      `
    }
  };

  const openModal = (language) => {
    setModalContent(resumeContent[language]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="resume-page">
      <h1 className="section-title">Resume</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#cccccc' }}>
        Click on a language to view my resume in that language.
      </p>
      
      <div className="language-buttons">
        <button 
          className="btn" 
          onClick={() => openModal('english')}
        >
          English Resume
        </button>
        <button 
          className="btn" 
          onClick={() => openModal('german')}
        >
          German Resume
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: `
                  <h1 style="margin-bottom: 1rem; color: #007acc;">${modalContent.title}</h1>
                  ${modalContent.content}
                ` 
              }}
              style={{ color: '#ffffff', lineHeight: '1.6' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume; 