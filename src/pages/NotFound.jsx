import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5 pt-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="text-muted mb-4">La ruta que intentas buscar no existe en este portafolio.</p>
      <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
    </div>
  );
};

export default NotFound;