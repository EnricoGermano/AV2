import React from "react";
import { useNavigate } from "react-router-dom";

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 2px 24px rgba(0,0,0,0.09)",
  padding: "42px 28px 36px 28px",
  width: 650,
  maxWidth: "98vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const buttonGridStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "center",
  gap: "28px",
  marginBottom: "35px"
};

const buttonStyle: React.CSSProperties = {
  width: "42%",
  minWidth: 170,
  maxWidth: 260,
  padding: "1.1rem 0",
  backgroundColor: "#0080ff",
  border: "none",
  borderRadius: 13,
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.20rem",
  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  textAlign: "center" as const,
  margin: 0,
  cursor: "pointer",
  transition: "background 0.15s"
};

const infoBoxStyle: React.CSSProperties = {
    background: "#f6f6f6",
    borderRadius: 12,
    padding: "24px 28px",
    width: "100%",
    maxWidth: 540,
    marginTop: 30,
    fontFamily: "Arial, sans-serif",
    fontSize: "1rem",
    color: "#222",
    fontWeight: 400 
  };
  

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 35,
  fontFamily: "Arial, sans-serif",
  fontWeight: 700,
  fontSize: "2.3rem"
};

const DashboardAdm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f4f4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Aerocode •• Administrador</h2>
        <div style={buttonGridStyle}>
          <button style={buttonStyle} onClick={() => navigate('/cadastro')}>Cadastros</button>
          <button style={buttonStyle} onClick={() => navigate('/etapas')}>Etapas</button>
          <button style={buttonStyle} onClick={() => navigate('/testes')}>Testes</button>
          <button style={buttonStyle} onClick={() => navigate('/relatorios')}>Relatórios</button>
        </div>
        <div style={infoBoxStyle}>
            Aeronaves cadastradas: <b>10</b><br />
            Funcionários cadastrados: <b>7</b>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdm;
