import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logoutUser } from '../utils/localStorage'; 
import { FaLaptopCode } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = isAuthenticated();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
    window.location.reload(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FaLaptopCode size={24} /> Portafolio
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de</Link>
            </li>
            {isAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Mi Perfil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Proyectos</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex gap-2">
            {!isAuth ? (
              <>
                <Link to="/login" className="btn btn-outline-light">Login</Link>
                <Link to="/register" className="btn btn-primary">Registro</Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;