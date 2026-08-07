import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaReact, FaPython, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiGnubash } from 'react-icons/si';

const Home = () => {
  const [userName, setUserName] = useState('Cargando...');

  useEffect(() => {

    const storedSession = localStorage.getItem('sesion_activa'); 
    
    if (storedSession) {
      try {
        const user = JSON.parse(storedSession);
     
        setUserName(user.nombre || user.name || 'Eldi Rangel'); 
      } catch (error) {
        setUserName('Eldi Rangel');
      }
    }
  }, []);
 
  return (
    <div className="bg-dark text-white d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '90vh' }}>
      
    
      <div className="bg-info bg-opacity-25 px-3 py-1 rounded mb-3">
        <h2 className="text-info fw-semibold mb-0" style={{ letterSpacing: '1px', fontSize: '1.2rem' }}>
          Bienvenido al Portafolio de 
        </h2>
      </div>
      
      
      <h1 className="display-3 fw-bold mb-3 text-white" style={{ letterSpacing: '-1px' }}>
        {userName}
      </h1>
      
      
      <p className="fs-5 text-light text-opacity-75 mb-5">
        Estudiante de Ingenieria en comoputacion de la Universidad Rafael Urdaneta
      </p>
      
     
      <div className="d-flex gap-3 mb-5">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-medium shadow-sm">
          Linkedin &rarr;
        </a>
        <a href="https://github.com/EldiRangel" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-medium shadow-sm">
          Github &rarr;
        </a>
      </div>

     
      <div className="d-flex gap-4 fs-3 mt-4 align-items-center">
        <FaReact className="text-info" title="React" />
        <SiJavascript className="text-warning" title="JavaScript" />
        <FaPython className="text-primary" title="Python" />
        <FaDocker className="text-info" title="Docker" />
        <SiCplusplus className="text-primary" title="C++" />
        <SiGnubash className="text-light text-opacity-50" title="Bash" />
        <FaGithub className="text-danger" title="Git" />
      </div>
      
    </div>
  );
};

export default Home;