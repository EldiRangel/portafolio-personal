import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    category: 'Frameworks',
    title: 'Gestor de Contactos',
    description:
      'Aplicación web para la gestión integral de contactos. Permite crear, visualizar, editar y eliminar registros (CRUD), e incluye una sección de personalización de perfil con avatares predeterminados y manejo de temas.',
    categoryFilter: 'Desarrollo Web',
    githubLink: 'https://github.com/EldiRangel/Contactos_MF.git',
    tags: ['TypeScript', 'CRUD', 'UI/UX', 'Gestión de Datos'],
    images: [
      { url: '/contactos1.jpg', alt: 'Lista de contactos guardados' },
      { url: '/contactos2.jpg', alt: 'Formulario para crear un nuevo contacto' },
      { url: '/contactos3.jpg', alt: 'Perfil de usuario y selección de avatar' },
    ],
  },
  {
    id: 2,
    category: 'Frameworks',
    title: 'Visualizador de Tiempo Interactivo',
    description:
      'Herramienta interactiva con múltiples interfaces para representar el paso del tiempo. Incluye vistas dinámicas como un Sistema Solar orbitando, fases del Ciclo Lunar y una vela consumiéndose, controlables mediante un slider.',
    categoryFilter: 'Desarrollo Web',
    githubLink: 'https://github.com/EldiRangel/Visualizador_de_tiempo.git',
    tags: ['JavaScript', 'Frontend', 'Animaciones', 'Lógica de Tiempo'],
    images: [
      { url: '/VIsualizador-tiempo1.jpg', alt: 'Vista del Sistema Solar' },
      { url: '/Vizualizador-tiempo2.jpg', alt: 'Vista del Ciclo Lunar' },
      { url: '/Vizualizador-tiempo3.jpg', alt: 'Vista de la Vela consumiéndose' },
    ],
  },
  {
    id: 3,
    category: 'Videojuegos',
    title: 'Yakuza Game',
    description:
      'Videojuego 2D de acción two platers con estética Pixel Art. Cuenta con mecánicas de movimiento, escenarios detallados y un sistema de salud.',
    categoryFilter: 'Videojuegos',
    githubLink: 'https://github.com/EldiRangel/Yakuza_game.git',
    tags: ['Desarrollo de Juegos', 'Pixel Art', '2D', 'Lógica de Juego'],
    images: [
      { url: '/Yakuza-game.jpg', alt: 'Gameplay de Yakuza Game' },
    ],
  },
  // --- NUEVOS PROYECTOS AGREGADOS ---
  {
    id: 4,
    category: 'Desarrollo Web',
    title: 'Portafolio Personal Web',
    description:
      'Plataforma web personal desarrollada para exhibir proyectos, habilidades técnicas y estadísticas. Cuenta con sistema de autenticación, diseño responsivo, gráficas de datos y carruseles interactivos.',
    categoryFilter: 'Desarrollo Web',
    githubLink: 'https://github.com/EldiRangel/portafolio-personal.git',
    tags: ['JavaScript', 'React', 'Frontend', 'UI/UX'],
    images: [
      { url: '/Portafolio1.jpg', alt: 'Vista de inicio del portafolio' },
      { url: '/Portafolio2.jpg', alt: 'Vista de la sección de proyectos' },
    ],
  },
  {
    id: 5,
    category: 'Juegos de Mesa',
    title: 'Blackjack Casino',
    description:
      'Simulador del clásico juego de cartas Blackjack ambientado en un casino temático. Implementa la lógica completa de la baraja, sistema de apuestas, reglas de la casa y condiciones de victoria.',
    categoryFilter: 'Videojuegos',
    githubLink: 'https://github.com/EldiRangel/Blackjack_casino.git',
    tags: ['Java', 'Lógica Algorítmica', 'Backend', 'Juegos'],
    images: [
      { url: '/fondo_luigi.jpg', alt: 'Fondo temático del casino de Blackjack' },
    ],
  },
];

const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel slide rounded-4 overflow-hidden shadow position-relative">
      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img
              src={img.url}
              className="d-block w-100"
              alt={img.alt}
              style={{
                height: '320px',
                objectFit: 'cover',
                backgroundColor: '#0d1117',
              }}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects =
    activeFilter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.categoryFilter === activeFilter);

  return (
    <div className="container pt-5 pb-5 text-white">
      <small className="text-primary fw-bold text-uppercase tracking-wider">
        PORTAFOLIO
      </small>
      <h1 className="fw-bold mb-4">Mis proyectos destacados</h1>

      <div className="d-flex gap-2 mb-5 flex-wrap">
        {['Todos', 'Desarrollo Web', 'Videojuegos'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`btn rounded-pill px-4 py-2 ${
              activeFilter === filter
                ? 'btn-light text-dark fw-bold'
                : 'btn-dark text-secondary border-0'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="d-flex flex-column gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card text-white border-0 shadow-lg rounded-4 overflow-hidden p-4"
            style={{ backgroundColor: '#181f29' }}
          >
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <small className="text-primary fw-bold text-uppercase">
                  {project.category}
                </small>
                <h2 className="fw-bold my-3">{project.title}</h2>
                <p className="text-secondary mb-4">{project.description}</p>

                <div className="mb-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary bg-dark text-white border-secondary px-4 py-2 rounded-3"
                  >
                    <FaGithub className="me-2" /> Ver Código
                  </a>
                </div>

                <div className="d-flex gap-2 flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge bg-secondary bg-opacity-25 text-light fw-normal px-3 py-2 rounded-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <ProjectCarousel images={project.images} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;