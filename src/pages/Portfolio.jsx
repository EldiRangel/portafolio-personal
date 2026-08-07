import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TechnologyChart, StatusChart } from '../components/Charts';

const Portfolio = () => {
  return (
 
    <div className="container pt-5 pb-4">
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 text-center p-4">
            <img 
              src="https://ui-avatars.com/api/?name=Eldi+Rangel&size=200&background=0D8ABC&color=fff" 
              alt="Perfil" 
              className="rounded-circle mx-auto mb-3" 
              width="150" 
            />
            <h2>Eldi Rangel</h2>
            <h5 className="text-muted">Ingeniería en Computación</h5>
            <p className="mt-3 text-start">
              Estudiante de Ingeniería en Computación en la Universidad Rafael Urdaneta (URU). 
              Apasionado por la ciberseguridad, el análisis de datos y la administración de contenedores.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="#" className="text-dark fs-4"><FaGithub /></a>
              <a href="#" className="text-primary fs-4"><FaLinkedin /></a>
              <a href="#" className="text-danger fs-4"><FaEnvelope /></a>
            </div>
          </div>
        </div>

       
        <div className="col-md-8">
          <div className="card shadow border-0 p-4 mb-4">
            <h4 className="mb-4">Estadísticas de Proyectos</h4>
            <div className="row">
              <div className="col-md-6 text-center">
                <h6>Tecnologías Utilizadas</h6>
                <TechnologyChart />
              </div>
              <div className="col-md-6 text-center">
                <h6>Estado de los Proyectos</h6>
                <StatusChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;