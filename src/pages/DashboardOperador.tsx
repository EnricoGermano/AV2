import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasePage.css";

const DashboardOperador: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2>Aerocode • Operador</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate("/testes")}>Testes</button>
          <button className="btn-primary" onClick={() => navigate('/etapas')}>Etapas</button>
        </div>
        <div className="info-box">
          <p>Etapas concluídas: 7</p>
          <p>Testes atribuídos: 4</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOperador;
