import React from "react";

const Relatorios: React.FC = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f4f4"
  }}>
    <div style={cardStyle}>
      <h2 style={titleStyle}>Relatórios</h2>
      <div style={{ display: "flex", gap: "18px", marginBottom: 28 }}>
        <button style={buttonStyle} onClick={() => {/* simula gerar relatório */}}>Gerar Relatório Final</button>
        <button style={buttonStyle} onClick={() => {/* simula exportação */}}>Exportar .txt</button>
      </div>
      <div style={infoBoxStyle}>
        Último relatório salvo: <strong>relatorio_3.txt</strong>
      </div>
    </div>
  </div>
);

const cardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 20,
    boxShadow: "0 2px 28px rgba(0,0,0,0.13)",
    padding: "60px 40px 40px 40px",
    width: 600,
    maxWidth: "95vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  
  const buttonStyle: React.CSSProperties = {
    padding: "1rem 2.5rem",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.15rem",
    margin: "0 12px 18px 0"
  };
  
  const infoBoxStyle: React.CSSProperties = {
    background: "#f6f6f6",
    borderRadius: 10,
    padding: "26px 28px",
    width: "100%",
    marginTop: 32,
    fontSize: "1.12rem"
  };
  
  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: 36,
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    fontSize: "2rem"
  };
  

export default Relatorios;
