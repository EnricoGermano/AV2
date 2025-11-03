import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./Login.css";

const Login: React.FC = () => {
  const { users, setUsers } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDeleteUsers = () => {
    if (window.confirm("Confirma exclusão de todos usuários?")) {
      setUsers([]);
      setError("Usuários excluídos com sucesso!");
    }
  };

  const handleGoCadastro = () => {
    navigate("/cadastro-usuario");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (users.length === 0) {
      setError("Nenhum usuário cadastrado.");
      setTimeout(() => navigate("/cadastro-usuario"), 1500);
      return;
    }
    const found = users.find((u) => u.username === username && u.password === password);
    if (!found) {
      setError("Usuário ou senha inválidos.");
      return;
    }
    if (found.role === "administrador") navigate("/admin");
    else if (found.role === "engenheiro") navigate("/engenheiro");
    else if (found.role === "operador") navigate("/operador");
    else setError("Permissão inválida.");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Aerocode</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Usuário ou E-mail</label>
          <input
            id="username"
            type="text"
            placeholder="Digite seu usuário ou e-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        {error && <p className="login-error">{error}</p>}
        <div className="login-btn-group">
          <button onClick={handleDeleteUsers} className="btn-danger">Excluir Usuários</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
