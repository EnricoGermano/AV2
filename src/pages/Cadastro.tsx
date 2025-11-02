import React, { useState } from "react";

type CadastroTipo = "aeronave" | "peca" | "funcionario" | "etapa";
const Cadastro: React.FC = () => {
  const [tipoSelec, setTipoSelec] = useState<CadastroTipo>("aeronave");

  const btnStyle: React.CSSProperties = {
    padding: "0.7rem 2rem",
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#fff",
    color: "#007bff",
    border: "2px solid #007bff",
    borderRadius: 8,
    margin: "0 8px",
    cursor: "pointer",
    marginBottom: 0,
    transition: "all 0.2s",
  };

  const btnActiveStyle: React.CSSProperties = {
    ...btnStyle,
    backgroundColor: "#007bff",
    color: "#fff",
    position: "relative",
    zIndex: 1,
  };

  const tabsWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    gap: "10px"
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f4f4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 0 20px rgba(0,0,0,0.10)",
        padding: "48px 36px 36px 36px",
        maxWidth: 560,
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}>
        <h2 style={{
          textAlign: "center",
          marginBottom: "22px",
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          fontSize: "2rem"
        }}>
          Cadastro
        </h2>

        <div style={tabsWrapper}>
          <button style={tipoSelec === "aeronave" ? btnActiveStyle : btnStyle} onClick={() => setTipoSelec("aeronave")}>
            Aeronave
          </button>
          <button style={tipoSelec === "peca" ? btnActiveStyle : btnStyle} onClick={() => setTipoSelec("peca")}>
            Peça
          </button>
          <button style={tipoSelec === "funcionario" ? btnActiveStyle : btnStyle} onClick={() => setTipoSelec("funcionario")}>
            Funcionário
          </button>
          <button style={tipoSelec === "etapa" ? btnActiveStyle : btnStyle} onClick={() => setTipoSelec("etapa")}>
            Etapa
          </button>
        </div>

        <div style={{ marginTop: 24 }}>
          {tipoSelec === "aeronave" && <FormularioAeronave />}
          {tipoSelec === "peca" && <FormularioPeca />}
          {tipoSelec === "funcionario" && <FormularioFuncionario />}
          {tipoSelec === "etapa" && <FormularioEtapa />}
        </div>
      </div>
    </div>
  )
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1.3rem",
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: 4,
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
};

const FormularioAeronave: React.FC = () => {
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [tipo, setTipo] = useState("comercial");
  const [capacidade, setCapacidade] = useState("");
  const [alcance, setAlcance] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); setMsg("Aeronave cadastrada! Dados salvos com sucesso!"); setCodigo(""); setModelo(""); setTipo("comercial"); setCapacidade(""); setAlcance(""); }}>
      <input style={inputStyle} placeholder="Código" value={codigo} onChange={e => setCodigo(e.target.value)} required />
      <input style={inputStyle} placeholder="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} required />
      <select style={inputStyle} value={tipo} onChange={e => setTipo(e.target.value)}>
        <option value="comercial">Comercial</option>
        <option value="militar">Militar</option>
      </select>
      <input style={inputStyle} placeholder="Capacidade" type="number" value={capacidade} onChange={e => setCapacidade(e.target.value)} required />
      <input style={inputStyle} placeholder="Alcance" type="number" value={alcance} onChange={e => setAlcance(e.target.value)} required />
      <button style={buttonStyle} type="submit">Cadastrar</button>
      {msg && <p style={{ color: "green", textAlign: "center" as const }}>{msg}</p>}
    </form>
  );
};

const FormularioPeca: React.FC = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("nacional");
  const [fornecedor, setFornecedor] = useState("");
  const [status, setStatus] = useState("producao");
  const [msg, setMsg] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); setMsg("Peça cadastrada! Dados salvos com sucesso!"); setNome(""); setTipo("nacional"); setFornecedor(""); setStatus("producao"); }}>
      <input style={inputStyle} placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <select style={inputStyle} value={tipo} onChange={e => setTipo(e.target.value)}>
        <option value="nacional">Nacional</option>
        <option value="importada">Importada</option>
      </select>
      <input style={inputStyle} placeholder="Fornecedor" value={fornecedor} onChange={e => setFornecedor(e.target.value)} required />
      <select style={inputStyle} value={status} onChange={e => setStatus(e.target.value)}>
        <option value="producao">Produção</option>
        <option value="transporte">Transporte</option>
        <option value="pronta">Pronta</option>
      </select>
      <button style={buttonStyle} type="submit">Cadastrar</button>
      {msg && <p style={{ color: "green", textAlign: "center" as const }}>{msg}</p>}
    </form>
  );
};

const FormularioFuncionario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [permissao, setPermissao] = useState("administrador");
  const [msg, setMsg] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); setMsg("Funcionário cadastrado! Dados salvos com sucesso!"); setNome(""); setTelefone(""); setEndereco(""); setUsuario(""); setSenha(""); setPermissao("administrador"); }}>
      <input style={inputStyle} placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
      <input style={inputStyle} placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} required />
      <input style={inputStyle} placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} required />
      <input style={inputStyle} placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} required />
      <input style={inputStyle} placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      <select style={inputStyle} value={permissao} onChange={e => setPermissao(e.target.value)}>
        <option value="administrador">Administrador</option>
        <option value="engenheiro">Engenheiro</option>
        <option value="operador">Operador</option>
      </select>
      <button style={buttonStyle} type="submit">Cadastrar</button>
      {msg && <p style={{ color: "green", textAlign: "center" as const }}>{msg}</p>}
    </form>
  );
};

const FormularioEtapa: React.FC = () => {
  const [nome, setNome] = useState("");
  const [prazo, setPrazo] = useState("");
  const [status, setStatus] = useState("em andamento");
  const [msg, setMsg] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); setMsg("Etapa cadastrada! Dados salvos com sucesso!"); setNome(""); setPrazo(""); setStatus("em andamento"); }}>
      <input style={inputStyle} placeholder="Nome da etapa" value={nome} onChange={e => setNome(e.target.value)} required />
      <input style={inputStyle} placeholder="Prazo (dias)" type="number" value={prazo} onChange={e => setPrazo(e.target.value)} required />
      <select style={inputStyle} value={status} onChange={e => setStatus(e.target.value)}>
        <option value="em andamento">Em Andamento</option>
        <option value="concluida">Concluída</option>
      </select>
      <button style={buttonStyle} type="submit">Cadastrar</button>
      {msg && <p style={{ color: "green", textAlign: "center" as const }}>{msg}</p>}
    </form>
  );
};

export default Cadastro;
