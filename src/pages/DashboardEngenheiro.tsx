import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasePage.css";

const DashboardEngenheiro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2>Aerocode • Engenheiro</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate('/cadastro')}>Cadastros</button>
          <button className="btn-primary" onClick={() => navigate('/etapas')}>Etapas</button>
          <button className="btn-primary" onClick={() => navigate('/testes')}>Testes</button>
          <button className="btn-primary" onClick={() => navigate('/listagem')}>Listagem</button>
        </div>
        <div className="info-box">
          <p>Etapas ativas: 5</p>
          <p>Testes pendentes: 2</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardEngenheiro;
