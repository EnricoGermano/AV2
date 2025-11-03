import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasePage.css";

const Testes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2>Testes</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/listagem")}>
            Listar Testes
          </button>
        </div>
        <div className="info-box">
          {/* Conteúdo dos testes aqui */}
          <p>Elétrico | <strong>Status: Aprovado</strong></p>
          <p>Hidráulico | <strong>Status: Em andamento</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Testes;
