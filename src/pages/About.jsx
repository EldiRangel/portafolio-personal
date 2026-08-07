import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('habilidades');

  return (
    <div className="container pt-5 pb-4">
      <h2 className="mb-4 text-center text-white">Acerca de Mí</h2>
      <div className="card shadow-sm border-0">
        <div className="card-header bg-white">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link text-dark ${activeTab === 'habilidades' ? 'active fw-bold' : ''}`} 
                onClick={() => setActiveTab('habilidades')}
              >
                Habilidades Técnicas
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-dark ${activeTab === 'estudios' ? 'active fw-bold' : ''}`} 
                onClick={() => setActiveTab('estudios')}
              >
                Estudios
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link text-dark ${activeTab === 'experiencia' ? 'active fw-bold' : ''}`} 
                onClick={() => setActiveTab('experiencia')}
              >
                Experiencia & Servicio
              </button>
            </li>
          </ul>
        </div>
        
        <div className="card-body p-4 min-vh-50">
          {activeTab === 'habilidades' && (
            <div>
              <h4>Tecnologías que domino</h4>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item border-0"> <strong>Lenguajes:</strong> Python, JavaScript, C++ </li>
                <li className="list-group-item border-0"> <strong>Ciberseguridad:</strong> Kali Linux, Nmap, Metasploit, Escalada de privilegios</li>
                <li className="list-group-item border-0"> <strong>Infraestructura:</strong> Docker (Alpine Linux), Redes</li>
                <li className="list-group-item border-0"> <strong>Datos:</strong> Minería de datos, análisis estadístico</li>
              </ul>
            </div>
          )}

          {activeTab === 'estudios' && (
            <div>
              <h4>Formación Académica</h4>
              <div className="mt-3">
                <h5>Universidad Rafael Urdaneta (URU)</h5>
                <p className="text-muted">Ingeniería en Computación (Actualmente cursando)</p>
                <p>Trabajo Especial de Grado en progreso: <em>"Análisis de ciberseguridad y eficiencia de recursos en contenedores Docker basados en Alpine"</em>.</p>
              </div>
            </div>
          )}

          {activeTab === 'experiencia' && (
            <div>
              <h4>Experiencia y Actividades</h4>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item border-0">
                  <strong>Servicio Comunitario 2025-C</strong><br/>
                  <span className="text-muted">Participación activa en proyectos de impacto social vinculados a la universidad.</span>
                </li>
                <li className="list-group-item border-0">
                  <strong>Laboratorios Prácticos</strong><br/>
                  <span className="text-muted">Realización de pruebas de penetración, intercepción de red y testeo de credenciales en entornos controlados.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;