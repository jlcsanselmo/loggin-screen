import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import logo from "./logo.svg";

const Textbox = ({ placeholder, type, icon, value, onChange }) => (
  <div className="textbox">
    <i className={`ai-${icon}`}></i>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (resposta.ok) {
        const dados = await resposta.json();
        console.log("1. O que o Django respondeu:", dados);

        const token = dados.access || dados.token;

        if (token) {
          localStorage.setItem('token', token);
          console.log("2. Token salvo com sucesso:", localStorage.getItem('token'));
          console.log("3. Acionando a rota /home...");
          navigate('/home');
        } else {
          console.error("ERRO: O login deu certo, mas o Django não enviou nenhum token!");
        }
      } else {
        alert("E-mail ou senha incorretos.");
      }
    } catch (erro) {
      console.error("Erro:", erro);
    }
  };

  return (
    <>
      <div className="background"></div>
      <div className="card">
        <div style={{ fontSize: '50px', marginBottom: '20px' }}>🌍</div>
        <h2>Welcome back!</h2>

        <form onSubmit={handleSubmit}>
          <Textbox
            icon="envelope"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textbox
            icon="lock-on"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
          <a href="#">Forgot password?</a>
        </form>

        <footer>
          Need an account? <a href="#">Sign up</a>
        </footer>
      </div>
    </>
  );
};

export default Login;