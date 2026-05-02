function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Apaga o crachá
    window.location.href = '/'; // Volta pro login
  };

  return (
    <div className="container mt-5 text-center">
      <div className="card shadow p-5">
        <h1 className="text-primary">PAGINA SEGUINTE</h1>
        <p className="lead mt-3">Olá, João Lucas! Você acessou o sistema com sucesso.</p>
        <hr />
        <p className="text-muted">Seu backend Django e o banco PostgreSQL estão conectados.</p>
        <button className="btn btn-outline-danger mt-4" onClick={handleLogout}>
          Sair do Sistema
        </button>
      </div>
    </div>
  );
}

export default Home;