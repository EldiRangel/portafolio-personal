import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container text-center">
        <div className="mb-3">
          <h5>Eldi Rangel</h5>
          <p className="text-light mb-0 small">Estudiante de Ingeniería en Computación - URU</p>
        </div>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="text-white fs-4"><FaGithub /></a>
          <a href="#" className="text-white fs-4"><FaLinkedin /></a>
          <a href="#" className="text-white fs-4"><FaTwitter /></a>
        </div>
        <div className="border-top border-secondary pt-3">
          <small>&copy; {currentYear} Eldi Rangel. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;