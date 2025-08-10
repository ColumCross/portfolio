import React from 'react';
import icLauncher from '../assets/ic_launcher-playstore.png';
import tipCalculator from '../assets/tipcalculator_screenshot.PNG';
import mathBasedNBack from '../assets/mathbasednbacktesticon.png';
import permissionGranted from '../assets/permission_granted_icon.png';

export const projects = [
  {
    id: 1,
    title: 'Warmer Colder',
    description: "Extremely simple Minimum Viable Product game based around your location that requires 2 players. Player 1 will go to a position and press the button. Player 1 will then hand the phone to Player 2. Player 2 will try to guess the first location by clicking the button. If Player 2 is closer than the previous guess, the button will say 'warmer'. If Player 2 is farther away than the previous guess, the button will say 'colder'. Player 2 wins when a guess is made within 6 feet of the location Player 1 chose.",
    descde: "Extrem einfaches Minimum Viable Product-Spiel, das auf Ihrem Standort basiert und 2 Spieler erfordert. Spieler 1 geht zu einer Position und drückt den Knopf. Spieler 1 gibt dann das Telefon an Spieler 2. Spieler 2 versucht, den ersten Standort durch Klicken auf den Knopf zu erraten. Ist Spieler 2 näher als der vorherige Tipp, zeigt der Knopf „wärmer“ an. Ist Spieler 2 weiter entfernt als der vorherige Tipp, zeigt der Knopf „kälter“ an. Spieler 2 gewinnt, wenn sein Tipp innerhalb von 2 Metern um den von Spieler 1 gewählten Standort liegt.",
    image: icLauncher,
    technologies: ['Java', 'Android Studio'],
    github: 'https://github.com/ColumCross/WarmerColder'
  },
  {
    id: 2,
    title: 'Tip Calculator for Wear OS',
    description: "A very simple application solely for Wear OS devices. It calculates a tip and total based on a base price and a tip percentage. That's it.",
    descde: "Eine sehr einfache Anwendung, die ausschließlich für Wear OS-Geräte entwickelt wurde. Sie berechnet Trinkgeld und Gesamtbetrag basierend auf einem Grundpreis und einem Trinkgeldprozentsatz. Das ist alles.",
    image: tipCalculator,
    technologies: ['Java', 'Android Studio'],
    github: 'https://github.com/ColumCross/WearOSTipCalculator'
  },
  {
    id: 3,
    title: '#mywakingview',
    description: "When I was in England the first time I saw an art exhibit where a guy stamped and mailed a postcard with the time he woke up everyday. So, taking inspiration from that, and a couple of other things, for a full year I took a picture of what I saw out my window when I woke up, with the date, time, and location.",
    descde: "Als ich das erste Mal in England ein Kunstexponat sah, in dem ein Kerl jeden Tag eine Postkarte mit der Uhrzeit, an der er aufgewacht ist, frankierte und versandte. Daher habe ich durch Inspiration von diesem und ein paar anderen Dingen für ein Jahr täglich ein Foto von dem abgenommen, was ich an meinem Fenster sah, mit Datum, Uhrzeit und Ort.",
    image: 'https://via.placeholder.com/400x200/007acc/ffffff?text=Instagram+Project',
    technologies: ['Angular', 'Instagram API'],
    github: 'https://github.com/ColumCross/mywakingview'
  },
  {
    id: 4,
    title: 'Math Based N-Back Test',
    description: 'A math based version of an N-Back test of Working Memory. In this version, participants answer simple, single digit math problems.\n The N-Back Test is a test of Working Memory. Participants will be presented with and answer a series of simple, single digit math questions. The twist is, the question the participant answers is not the same as the question currently on screen. The question they will answer is the question N before the question on the screen.',
    descde: "Eine Mathebasierte Version eines N-Back-Tests für die Arbeitsgedächtnis. In dieser Version beantworten Teilnehmer einfache, einzelne Ziffernaufgaben.\n Der N-Back-Test ist ein Test des Arbeitsgedächtnisses. Teilnehmer werden eine Reihe einfacher, einzelner Ziffernaufgaben angezeigt und sollen diese beantworten. Der Haken ist, dass die von der Person beantwortete Frage nicht die gleiche ist wie die Frage, die derzeit auf dem Bildschirm angezeigt wird. Die zu beantwortende Frage ist die Frage N vor der Frage auf dem Bildschirm.",
    image: mathBasedNBack,
    technologies: ['C#', 'Windows Universal App', 'Visual Studio'],
    github: 'https://github.com/ColumCross/Math-Based-N-Back-Test'
  },
  {
    id: 5,
    title: 'Permission Granted',
    description: 'Permission Granted is built for videographers, vloggers, and anyone who regularly uses release forms. The purpose of Permission Granted is to allow people quick and easy access to their release and consent forms when filming people. Permission Granted will allow you to create and sign release and consent forms.',
    descde: "Permission Granted ist für Videografen, Vloggers und alle, die regelmäßig Veröffentlichungsformulare verwenden. Das Ziel von Permission Granted ist es, Menschen schnell und einfach den Zugriff auf ihre Veröffentlichungs- und Einverständnisformulare zu ermöglichen, wenn sie Menschen aufnehmen. Permission Granted wird Ihnen ermöglichen, Veröffentlichungs- und Einverständnisformulare zu erstellen und zu unterzeichnen.",
    image: permissionGranted,
    technologies: ['Java', 'Android Studio'],
    github: 'https://github.com/ColumCross/PermissionGranted'
  },
  {
    id: 6,
    title: "PowerShell Prompt",
    description: "The profile I use when opening PS. I adapted it from an existing program for changing Prompts in PS.",
    descde: "Das Profil, das ich verwende, wenn ich PS öffne. Ich habe es von einem bestehenden Programm für die Änderung von Prompts in PS angepasst.",
    image: 'https://via.placeholder.com/400x200/007acc/ffffff?text=PowerShell',
    technologies: ['PowerShell'],
    github: 'https://github.com/ColumCross/PowerShellProfile'
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="section-title">My Projects</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#cccccc' }}>
        Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
      </p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div style={{ marginTop: '1rem' }}>
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
        ))}
      </div>
    </div>
  );
};

export default Projects; 