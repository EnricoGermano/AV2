import React from "react";

const Testes: React.FC = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f4f4"
  }}>
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 0 18px rgba(0,0,0,0.11)",
      padding: 44,
      width: 440
    }}>
      <h2 style={{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "2rem",
        fontFamily: "Arial"
      }}>
        Testes
      </h2>
      <p style={{ marginBottom: "1.6rem", textAlign: "center" }}>Exemplo de exibição de testes:</p>
      <div style={{ background: "#f7f7f7", padding: 18, borderRadius: 8 }}>
        <div>Elétrico | <b>Status: Aprovado</b></div>
        <div>Hidráulico | <b>Status: Em andamento</b></div>
      </div>
    </div>
  </div>
);

export default Testes;
