import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import "./CadastroUsuario.css";

const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("administrador");
  const [message, setMessage] = useState("");

  const handleVoltar = () => {
      navigate("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ username, password, role });
    setMessage(`Usuário "${username}" cadastrado como "${role}".`);
    setUsername("");
    setPassword("");
    setRole("administrador");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastrar Novo Usuário</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            title="Selecione o perfil do usuário"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="administrador">Administrador</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="operador">Operador</option>
          </select>
          <button type="submit" className="submit-btn">Cadastrar</button>
          <button type="button" onClick={handleVoltar} className="back-btn">
            Voltar para Login
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default CadastroUsuario;
