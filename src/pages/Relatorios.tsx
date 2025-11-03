import React from "react";
import { useNavigate } from "react-router-dom";
import "./BasePage.css";

const Relatorios: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-card">
        <h2>Relatórios</h2>
        <div className="button-row">
          <button className="btn-primary" onClick={() => {/* gerar relatório */}}>Gerar Relatório Final</button>
          <button className="btn-primary" onClick={() => {/* exportar */}}>Exportar PDF</button>
        </div>
        <div className="info-box">
          Último relatório salvo: <strong>relatorio_3.pdf</strong>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
