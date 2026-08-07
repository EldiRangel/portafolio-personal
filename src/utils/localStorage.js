
export const isAuthenticated = () => {
  return localStorage.getItem('sesion_activa') !== null;
};


export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('portfolio_users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
   
    localStorage.setItem('sesion_activa', JSON.stringify(user));
    return { success: true };
  }
  return { success: false, message: 'Correo o contraseña incorrectos' };
};


export const registerUser = (userData) => {
  const users = JSON.parse(localStorage.getItem('portfolio_users')) || [];
  
  
  const userExists = users.find(u => u.email === userData.email);
  if (userExists) {
    return { success: false, message: 'Este correo ya está registrado' };
  }
  

  users.push(userData);
  localStorage.setItem('portfolio_users', JSON.stringify(users));
  

  localStorage.setItem('sesion_activa', JSON.stringify(userData));
  
  return { success: true };
};


export const logoutUser = () => {
  localStorage.removeItem('sesion_activa');
};