import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>PÁGINA SEGUINTE 🌍</h1>
        <p>Olá, João Lucas! Você acessou o sistema com sucesso.</p>
        <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
        <p style={{ fontSize: '0.9rem' }}>Seu backend Django e o banco PostgreSQL estão conectados.</p>
        <button className="btn-sair" onClick={handleLogout}>
          Sair do Sistema
        </button>
      </div>
    </div>
  );
}

export default Home;