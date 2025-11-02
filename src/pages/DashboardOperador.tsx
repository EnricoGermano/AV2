import React from "react";

const DashboardOperador: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 60,
      }}
    >
      <div
        style={{
          width: 660,
          backgroundColor: "#fff",
          borderRadius: 8,
          padding: 32,
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Aerocode • Operador</h2>
        <div style={{ display: "flex", justifyContent: "start", gap: "20px", marginBottom: 30 }}>
          <button style={buttonStyle}>Etapas</button>
          <button style={buttonStyle}>Produção</button>
        </div>
        <div style={{ backgroundColor: "#f7f7f7", padding: 20, borderRadius: 8 }}>
          <p>Etapas sob responsabilidade:</p>
          <ul>
            <li>Construção Aeronave X: <strong>Em andamento</strong></li>
            <li>Construção Aeronave Y: <strong>Concluída</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "0.75rem 2rem",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: 6,
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default DashboardOperador;
