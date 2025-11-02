import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login: React.FC = () => {
  const { users } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
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
    if (found.role === "admin") navigate("/admin");
    else if (found.role === "engenheiro") navigate("/engenheiro");
    else if (found.role === "operador") navigate("/operador");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 450,
          padding: 40,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Aerocode</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" style={{ fontWeight: "bold" }}>
            Usuário ou E-mail
          </label>
          <input
            id="username"
            type="text"
            placeholder="Digite seu usuário ou e-mail"
            style={{
              width: "100%",
              padding: "0.75rem",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" style={{ fontWeight: "bold" }}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            style={{
              width: "100%",
              padding: "0.75rem",
              marginTop: "0.5rem",
              marginBottom: "2rem",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: 4,
              backgroundColor: "#007bff",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
          {error && (
            <p style={{ color: "red", marginTop: 16, textAlign: "center" }}>
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
