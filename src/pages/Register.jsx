import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../utils/localStorage';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setMessage({ text: 'Todos los campos son obligatorios', type: 'danger' });
      return;
    }

    const result = registerUser(formData);
    if (result.success) {
      setMessage({ text: 'Registro exitoso. Redirigiendo al login...', type: 'success' });
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setMessage({ text: result.message, type: 'danger' });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow border-0 p-4">
            <h3 className="text-center mb-4">Registro</h3>
            {message.text && <div className={`alert alert-${message.type}`}>{message.text}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input type="text" name="name" className="form-control" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico</label>
                <input type="email" name="email" className="form-control" onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="form-label">Contraseña</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Registrarse</button>
              <div className="text-center">
                <small>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;