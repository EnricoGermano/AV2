import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasePage.css";

const Etapas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2>Etapas</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/listagem")}>
            Listar Etapas
          </button>
        </div>
        <div className="info-box">
          <p>Construção | Prazo: 7 dias | <strong>Status: Concluída</strong></p>
          <p>Montagem | Prazo: 2 dias | <strong>Status: Em andamento</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Etapas;
