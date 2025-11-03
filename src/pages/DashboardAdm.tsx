import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardAdm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2 className="page-title">Aerocode • Administrador</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => navigate('/cadastro')}>Cadastros</button>
          <button className="btn-primary" onClick={() => navigate('/etapas')}>Etapas</button>
          <button className="btn-primary" onClick={() => navigate('/testes')}>Testes</button>
          <button className="btn-primary" onClick={() => navigate('/relatorios')}>Relatórios</button>
          <button className="btn-primary" onClick={() => navigate('/listagem')}>Listagem</button>
        </div>
        <div className="info-box">
          Aeronaves cadastradas: <b>10</b><br />
          Funcionários cadastrados: <b>7</b>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdm;
