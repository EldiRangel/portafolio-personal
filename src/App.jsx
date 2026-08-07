import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Projects from './pages/Projects';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; 
import NotFound from './pages/NotFound';   
import ProtectedRoute from './components/ProtectedRoute';
import { isAuthenticated } from './utils/localStorage';

function App() {
  const isAuth = isAuthenticated();

  return (
    <Router>
     
      {isAuth && <Navbar />} 
      
      <main className="min-vh-100 bg-dark">
        <Routes>
         
          <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />

         
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Route>

      
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      
      {isAuth && <Footer />}
    </Router>
  );
}

export default App;