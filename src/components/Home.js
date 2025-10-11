// npm run deploy <= Command to push to prod

import React, { useState, useEffect } from 'react';
import { projects } from './Projects';
import profileSquare from '../assets/ColumHeadshot2_square.png';
import vrCropped from '../assets/vr_cropped.jpg';
import resumePDF from '../assets/Colum Cross Resume.pdf';
import resumedePDF from '../assets/CV_Colum_Cross.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import cvEnglish from '../assets/cv_en.tex';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex';
import { useNavigate } from 'react-router-dom';

const Home = ({ language }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [latexContent, setLatexContent] = useState('');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeModalContent, setResumeModalContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Load the LaTeX file content
    fetch(cvEnglish)
      .then(response => response.text())
      .then(text => setLatexContent(text))
      .catch(error => console.error('Error loading LaTeX file:', error));
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeProjectModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const aboutContent = {
    english: {
      title: 'About Me',
      text: `I'm Colum Cross (he/him), a software engineer with seven years of experience specializing in the ServiceNow platform and a degree in Human-Centered Computing from the Rochester Institute of Technology. For the past six years, I developed internal tools for a major financial institution in Buffalo, New York. I've recently relocated to Berlin to continue my career abroad and explore new opportunities in Germany.`,
      text2: `I am extremely customer-centric. I specialize in understanding users and developing & implementing system changes that add the most value. I have the ability to speak extremely technically with other software engineers as well as simply and clearly with business partners and users. In addition to knowing several programming languages I am fluent in English, conversational in German, and can understand basic French. If you have a tool, app, or process that people use, you need me.`,
      imagePosition: 'left'
    },
    german: {
      title: 'Über Mich',
      text: `Ich bin Colum Cross, Softwareentwickler mit sieben Jahren Berufserfahrung und Spezialisierung auf die ServiceNow-Plattform sowie einem Abschluss in Human-Centered Computing vom Rochester Institute of Technology. In den letzten sechs Jahren habe ich interne Tools für ein großes Finanzinstitut in Buffalo, New York entwickelt. Kürzlich bin ich nach Berlin gezogen, um meine Karriere im Ausland fortzusetzen und neue berufliche Chancen in Deutschland zu entdecken.`,
      text2: `Ich bin extrem kundenorientiert. Ich bin darauf spezialisiert, Benutzer zu verstehen und Systemänderungen zu entwickeln und zu implementieren, die den größten Nutzen bringen. Ich bin in der Lage, sowohl mit anderen Software-Ingenieuren als auch mit Geschäftspartnern und Benutzern einfach und klar zu sprechen. Zusätzlich zu meinen Kenntnissen in mehreren Programmiersprachen spreche ich fließend Englisch, kann mich in Deutsch verständigen und verstehe Grundkenntnisse in Französisch. Wenn Sie Tools, Anwendung oder Prozesse haben, die von Menschen genutzt werden, brauchen Sie mich.`,
      imagePosition: 'right'
    }
  };



  return (
    <div className="home">
      {/* Top Bit */}
      <section id="home" className="section">
      <img 
                src={profileSquare} 
                alt="Portrait" 
                className="portrait"
              />
        <h1 className="section-title">Colum Cross</h1>

        {/* About Me Section */}
        <div className="about-me">
          <div>
            <div>
              
              <div className="about-text" style={{display: language === 'english' ? 'block' : 'none'}}>
                <h2>{aboutContent.english.title}</h2>
                <p>{aboutContent.english.text}</p>
                <br></br>
                <p>{aboutContent.english.text2}</p>
              </div>
            </div>
            <div>
              <div className="about-text" style={{display: language === 'german' ? 'block' : 'none'}}>
                <h2>{aboutContent.german.title}</h2>
                <p>{aboutContent.german.text}</p>
                <br></br>
                <p>{aboutContent.german.text2}</p>
              </div>
            </div>
            <div className="about-text">
              <p>&nbsp;</p>
              <h2>{language === 'english' ? 'Contact' : 'Kontakt'}</h2>
              <div id="contactLinkDiv">
                <p><FontAwesomeIcon icon={faEnvelope} />&nbsp;<a href="mailto:columcross@gmail.com">columcross@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faLinkedin} />&nbsp;<a href="https://linkedin.com/in/columcross" target="_blank">linkedin.com/in/columcross</a></p>
                <p><FontAwesomeIcon icon={faSquareGithub} />&nbsp;<a href="https://github.com/columcross" target="_blank">github.com/columcross</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">{language === 'english' ? 'Personal Projects' : 'Persönliche Projekte'}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
                         <div 
               key={project.id} 
               className="project-card" 
               onClick={() => openProjectModal(project)}
               style={{ cursor: 'pointer' }}
             >
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="project-image"
               />
               <div className="project-content">
                 <h3 className="project-title">{project.title}</h3>
                 {/* <p className="project-description">{language === 'english' ? project.description : project.descde}</p> */}
                 
                 <div style={{ marginTop: '1rem' }}>
                   {project.github && (
                     <div style={{ marginBottom: '1rem' }}>
                       <a 
                         href={project.github}
                         target="_blank"
                         rel="noopener noreferrer"
                         style={{
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '0.5rem',
                           color: '#007acc',
                           textDecoration: 'none',
                           fontSize: '0.9rem',
                           fontWeight: '500',
                           transition: 'color 0.3s ease'
                         }}
                         onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                         onMouseLeave={(e) => e.target.style.color = '#007acc'}
                         onClick={(e) => e.stopPropagation()}
                       >
                         <svg 
                           width="16" 
                           height="16" 
                           viewBox="0 0 24 24" 
                           fill="currentColor"
                           style={{ flexShrink: 0 }}
                         >
                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                         </svg>
                         {language === 'english' ? 'View on GitHub' : 'Auf GitHub anzeigen'}
                       </a>
                     </div>
                   )}
                   <div>
                     {project.technologies.map((tech, index) => (
                       <span 
                         key={index}
                         style={{
                           display: 'inline-block',
                           background: '#007acc',
                           color: 'white',
                           padding: '0.25rem 0.5rem',
                           borderRadius: '4px',
                           fontSize: '0.8rem',
                           margin: '0.25rem 0.25rem 0.25rem 0',
                         }}
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Resume Section NEW */}
      <section id="resume" className="section">
        <h2 className="section-title">{language === 'english' ? 'Resume' : 'Lebenslauf'}</h2>
        <p style={{display: language === 'english' ? 'block' : 'none'}}>I am still building out the react solution to generate and display my resume from a LaTeX file. <a href="https://columcross.github.io/resume.html" style={{color: 'white'}}>Click here to view and download from the old website.</a></p>
        <p style={{display: language === 'german' ? 'block' : 'none'}}>Ich baue noch die react-Lösung, um meinen Lebenslauf aus einer LaTeX-Datei zu generieren und anzuzeigen. <a href="https://columcross.github.io/resume.html" style={{color: 'white'}}>Klicken Sie hier, um den alten Website anzusehen und herunterzuladen.</a></p>




        {/* Button that takes the user to the resume page */}
        {/* <button className="btn" onClick={() => navigate('/resume')}>{language === 'english' ? 'View Resume' : 'Resume anzeigen'}</button> */}
      </section>


       {/* Project Modal */}
       {showModal && selectedProject && (
         <div className="modal-overlay" onClick={closeProjectModal}>
           <div className="modal" onClick={(e) => e.stopPropagation()}>
             <button className="modal-close" onClick={closeProjectModal}>
               ×
             </button>
             <div className="modal-content">
               <div className="modal-header">
                 <img 
                   src={selectedProject.image} 
                   alt={selectedProject.title} 
                   className="modal-project-image"
                 />
                 <div>
                   <h2 className="modal-project-title">{selectedProject.title}</h2>
                   <p className="modal-project-description">
                     {language === 'english' ? selectedProject.description : selectedProject.descde}
                   </p>
                 </div>
               </div>
               
               <div className="modal-technologies">
                 <h3>{language === 'english' ? 'Technologies Used:' : 'Verwendete Technologien:'}</h3>
                 <div className="tech-tags">
                   {selectedProject.technologies.map((tech, index) => (
                     <span key={index} className="tech-tag">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
               
               {selectedProject.github && (
                 <div className="modal-github">
                   <a 
                     href={selectedProject.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="github-link"
                   >
                     <svg 
                       width="20" 
                       height="20" 
                       viewBox="0 0 24 24" 
                       fill="currentColor"
                     >
                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                     </svg>
                     {language === 'english' ? 'View on GitHub' : 'Auf GitHub anzeigen'}
                   </a>
                 </div>
               )}
             </div>
           </div>
         </div>
       )}


     </div>
   );
 };

export default Home; 
