import { useState } from 'react';
import { loginUser, registerUser } from '../utils/localStorage';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estados de Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Estados de Registro
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regMessage, setRegMessage] = useState({ text: '', type: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // --- LÓGICA DE INICIO DE SESIÓN ---
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    setIsSubmitting(true);

    if (!loginEmail.trim() || !loginPassword) {
      setLoginError('Por favor llena todos los campos');
      setIsSubmitting(false);
      return;
    }

    if (loginPassword.length < 8) {
      setLoginError('La contraseña debe tener al menos 8 caracteres');
      setIsSubmitting(false);
      return;
    }

    const result = loginUser(loginEmail.trim(), loginPassword);
    if (result.success) {
      window.location.href = '/'; 
    } else {
      setLoginError(result.message);
      setIsSubmitting(false);
    }
  };

  // --- LÓGICA DE REGISTRO ---
  const handleRegister = (e) => {
    e.preventDefault();
    setRegMessage({ text: '', type: '' });
    setIsSubmitting(true);

    const cleanName = regName.trim();
    const cleanEmail = regEmail.trim();

    if (!cleanName || !cleanEmail || !regPassword) {
      setRegMessage({ text: 'Todos los campos son obligatorios', type: 'alert-error' });
      setIsSubmitting(false);
      return;
    }

    if (cleanName.length < 3) {
      setRegMessage({ text: 'El nombre debe tener al menos 3 caracteres', type: 'alert-error' });
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      setRegMessage({ text: 'El formato del correo es inválido', type: 'alert-error' });
      setIsSubmitting(false);
      return;
    }

    if (regPassword.length < 8) {
      setRegMessage({ text: 'La contraseña debe tener al menos 8 caracteres', type: 'alert-error' });
      setIsSubmitting(false);
      return;
    }

    const result = registerUser({ name: cleanName, email: cleanEmail, password: regPassword });
    if (result.success) {
      setRegMessage({ text: 'Registro exitoso. Redirigiendo...', type: 'alert-success' });
      setTimeout(() => {
        window.location.href = '/'; 
      }, 1500);
    } else {
      setRegMessage({ text: result.message, type: 'alert-error' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isRightPanelActive ? 'active' : ''}`} id="container">
        
        {/* PANEL DE REGISTRO */}
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Crea tu cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
            </div>
            <span>Ingresa tus datos para registrarte</span>
            
            {regMessage.text && (
              <div className={`alert-msg ${regMessage.type}`}>{regMessage.text}</div>
            )}

            <input 
              type="text" 
              placeholder="Nombre (Máx 16 caracteres)" 
              value={regName} 
              maxLength={16}
              onChange={(e) => setRegName(e.target.value)} 
              disabled={isSubmitting} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={regEmail} 
              onChange={(e) => setRegEmail(e.target.value)} 
              disabled={isSubmitting} 
            />
            <input 
              type="password" 
              placeholder="clave (Sin espacios, 8-16 carácteres)" 
              value={regPassword} 
              maxLength={16}
              /* El .replace elimina cualquier espacio en blanco al instante */
              onChange={(e) => setRegPassword(e.target.value.replace(/\s/g, ''))} 
              disabled={isSubmitting} 
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Procesando...' : 'Registrarse'}
            </button>
          </form>
        </div>

        {/* PANEL DE LOGIN */}
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Inicia sesión</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
            </div>
            <span>Ingresa tus datos</span>
            
            {loginError && (
              <div className="alert-msg alert-error">{loginError}</div>
            )}

            <input 
              type="email" 
              placeholder="Email" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
              disabled={isSubmitting} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={loginPassword} 
              maxLength={30}
              /* También bloqueamos los espacios al intentar iniciar sesión */
              onChange={(e) => setLoginPassword(e.target.value.replace(/\s/g, ''))} 
              disabled={isSubmitting} 
            />
            <a href="#">¿Olvidó su clave?</a>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>

        {/* PANELES DE SUPERPOSICIÓN (TOGGLE) */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>¡Bienvenido!</h1>
              <p>Accede a tu perfil si ya estás registrado</p>
              <button type="button" className="hidden" onClick={() => setIsRightPanelActive(false)}>
                Iniciar sesión
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>¡Hola, Amigo!</h1>
              <p>Regístrate con tu correo personal</p>
              <button type="button" className="hidden" onClick={() => setIsRightPanelActive(true)}>
                Registrarse
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;