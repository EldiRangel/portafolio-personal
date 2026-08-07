import { useState } from 'react';
import { loginUser, registerUser } from '../utils/localStorage';
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

 
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regMessage, setRegMessage] = useState({ text: '', type: '' });

 
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (!loginEmail || !loginPassword) {
      setLoginError('Por favor llena todos los campos');
      return;
    }

    const result = loginUser(loginEmail, loginPassword);
    if (result.success) {
      
      window.location.href = '/'; 
    } else {
      setLoginError(result.message);
    }
  };


  const handleRegister = (e) => {
    e.preventDefault();
    setRegMessage({ text: '', type: '' });

    if (!regName || !regEmail || !regPassword) {
      setRegMessage({ text: 'Todos los campos son obligatorios', type: 'alert-error' });
      return;
    }

    const result = registerUser({ name: regName, email: regEmail, password: regPassword });
    if (result.success) {
      setRegMessage({ text: 'Registro exitoso. Redirigiendo...', type: 'alert-success' });
      setTimeout(() => {
        
        window.location.href = '/'; 
      }, 1500);
    } else {
      setRegMessage({ text: result.message, type: 'alert-error' });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isRightPanelActive ? 'active' : ''}`} id="container">
        
      
        <div className="form-container sign-up">
          <form onSubmit={handleRegister}>
            <h1>Crea tu cuenta </h1>
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

            <input type="text" placeholder="Name" value={regName} onChange={(e) => setRegName(e.target.value)} />
            <input type="email" placeholder="Email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
            <button type="submit">Ingresar</button>
          </form>
        </div>

       
        <div className="form-container sign-in">
          <form onSubmit={handleLogin}>
            <h1>Inicia sesion</h1>
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

            <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <a href="#">olvido su clave?</a>
            <button type="submit"> Ingresar</button>
          </form>
        </div>

      
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenido!</h1>
              <p>accede a tu perfil si ya estas registrado </p>
              <button type="button" className="hidden" onClick={() => setIsRightPanelActive(false)}>
                Iniciar sesion
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hola, Amigo!</h1>
              <p>Registrate con tu correo personal </p>
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