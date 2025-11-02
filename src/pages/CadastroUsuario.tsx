import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const CadastroUsuario: React.FC = () => {
  const { addUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ username, password, role });
    setMessage(`Usuário "${username}" cadastrado como "${role}".`);
    setUsername("");
    setPassword("");
    setRole("admin");
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
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Cadastrar Usuário
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" style={{ fontWeight: "bold" }}>
            Usuário
          </label>
          <input
            id="username"
            type="text"
            placeholder="Digite o nome do usuário"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password" style={{ fontWeight: "bold" }}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="role" style={{ fontWeight: "bold" }}>
            Perfil
          </label>
          <select
            id="role"
            style={inputStyle}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Administrador</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="operador">Operador</option>
          </select>
          <button type="submit" style={buttonStyle}>
            Cadastrar
          </button>
        </form>
        {message && (
          <p style={{ color: "green", marginTop: 16, textAlign: "center" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginTop: 8,
  marginBottom: "1.5rem",
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: 4,
  backgroundColor: "#007bff",
  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",
  border: "none",
  cursor: "pointer",
};

export default CadastroUsuario;
