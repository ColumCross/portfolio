import React, { useState, useEffect } from 'react';
import cvEnglish from '../assets/cv_en.tex';
import cvGerman from '../assets/cv_de.tex';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [parsedContent, setParsedContent] = useState({});

  // Function to parse LaTeX content and convert to HTML
  const parseLatexToHtml = (latexText) => {
    // Extract content between \begin{document} and \end{document}
    const documentStart = latexText.indexOf('\\begin{document}');
    const documentEnd = latexText.indexOf('\\end{document}');
    
    if (documentStart === -1 || documentEnd === -1) {
      return latexText; // Return original if document markers not found
    }
    
    let content = latexText.substring(documentStart + 16, documentEnd).trim();
    
    // Convert LaTeX commands to HTML
    content = content
      // Remove document structure commands
      .replace(/\\documentclass.*?\{.*?\}/g, '')
      .replace(/\\usepackage.*?\{.*?\}/g, '')
      .replace(/\\geometry.*?\{.*?\}/g, '')
      .replace(/\\definecolor.*?\{.*?\}/g, '')
      .replace(/\\setlength.*?\{.*?\}/g, '')
      .replace(/\\setlist.*?\{.*?\}/g, '')
      .replace(/\\pagestyle.*?\{.*?\}/g, '')
      .replace(/\\color.*?\{.*?\}/g, '')
      .replace(/\\columnratio.*?\{.*?\}/g, '')
      .replace(/\\begin\{paracol\}.*?\{.*?\}/g, '')
      .replace(/\\end\{paracol\}/g, '')
      .replace(/\\switchcolumn/g, '')
      
      // Convert formatting commands
      .replace(/\\begin\{center\}/g, '<div style="text-align: center;">')
      .replace(/\\end\{center\}/g, '</div>')
      .replace(/\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}/gs, '')
      .replace(/\\includegraphics.*?\{.*?\}/g, '')
      .replace(/\\vspace.*?\{.*?\}/g, '<br>')
      .replace(/\\medskip/g, '<br><br>')
      .replace(/\\sect\{([^}]+)\}/g, '<h3 style="color: #D23F31; border-bottom: 2px solid #D23F31; padding-bottom: 5px; margin-top: 1.5rem;">$1</h3>')
      .replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>')
      .replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>')
      .replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, '<a href="$1" target="_blank" style="color: #007acc;">$2</a>')
      .replace(/\\begin\{itemize\}/g, '<ul style="margin-left: 1.5rem;">')
      .replace(/\\end\{itemize\}/g, '</ul>')
      .replace(/\\item\s*/g, '<li style="margin-bottom: 0.5rem;">')
      .replace(/\\\\/g, '<br>')
      .replace(/\{\\fa([^}]+)\}/g, '[$1]')
      .replace(/~\\par/g, '<br>')
      .replace(/\\par/g, '<br>')
      .replace(/\\hfill/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    
    // Clean up list items
    content = content.replace(/(<li[^>]*>.*?)<br>/g, '$1</li>');
    
    // Clean up extra whitespace and line breaks
    content = content
      .replace(/\n\s*\n/g, '<br>')
      .replace(/\s+/g, ' ')
      .trim();
    
    return content;
  };

  // Load and parse LaTeX files
  useEffect(() => {
    const loadAndParseFiles = async () => {
      try {
        const [englishResponse, germanResponse] = await Promise.all([
          fetch(cvEnglish),
          fetch(cvGerman)
        ]);
        
        const [englishText, germanText] = await Promise.all([
          englishResponse.text(),
          germanResponse.text()
        ]);
        
        setParsedContent({
          english: parseLatexToHtml(englishText),
          german: parseLatexToHtml(germanText)
        });
      } catch (error) {
        console.error('Error loading LaTeX files:', error);
      }
    };
    
    loadAndParseFiles();
  }, []);

  const resumeContent = {
    english: {
      title: 'Resume - English',
      content: '../assets/cv_en.tex'
    },
    german: {
      title: 'Lebenslauf - Deutsch',
      content: '../assets/cv_de.tex'
    }
  };

  const openModal = (language) => {
    const content = {
      title: resumeContent[language].title,
      content: parsedContent[language] || 'Loading...'
    };
    setModalContent(content);
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
              style={{ color: '#ffffff', lineHeight: '1.6', padding: '1rem' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume; 
