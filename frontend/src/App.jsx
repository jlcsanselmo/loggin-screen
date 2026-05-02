import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  // Esta função checa se o token existe no "bolso" do navegador
  const estaAutenticado = () => !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Se estiver autenticado, mostra Home. Se não, volta pro Login */}
        <Route 
          path="/home" 
          element={estaAutenticado() ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}
export default App;