import React, { useState } from "react";
import "./Cadastro.css";

type CadastroTipo = "aeronave" | "peca" | "funcionario" | "etapa";

const Cadastro: React.FC = () => {
  const [tipoSelec, setTipoSelec] = useState<CadastroTipo>("aeronave");

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2 className="cadastro-titulo">Cadastro</h2>

        <div className="tabs-wrapper-cadastro">
          <button 
            className={tipoSelec === "aeronave" ? "btn-tab-active" : "btn-tab"} 
            onClick={() => setTipoSelec("aeronave")}
            aria-label="Aba de cadastro de Aeronave"
          >
            Aeronave
          </button>
          <button 
            className={tipoSelec === "peca" ? "btn-tab-active" : "btn-tab"} 
            onClick={() => setTipoSelec("peca")}
            aria-label="Aba de cadastro de Peça"
          >
            Peça
          </button>
          <button 
            className={tipoSelec === "funcionario" ? "btn-tab-active" : "btn-tab"} 
            onClick={() => setTipoSelec("funcionario")}
            aria-label="Aba de cadastro de Funcionário"
          >
            Funcionário
          </button>
          <button 
            className={tipoSelec === "etapa" ? "btn-tab-active" : "btn-tab"} 
            onClick={() => setTipoSelec("etapa")}
            aria-label="Aba de cadastro de Etapa"
          >
            Etapa
          </button>
        </div>

        <div className="form-content">
          {tipoSelec === "aeronave" && <FormularioAeronave />}
          {tipoSelec === "peca" && <FormularioPeca />}
          {tipoSelec === "funcionario" && <FormularioFuncionario />}
          {tipoSelec === "etapa" && <FormularioEtapa />}
        </div>
      </div>
    </div>
  );
};

const FormularioAeronave: React.FC = () => {
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [tipo, setTipo] = useState("comercial");
  const [capacidade, setCapacidade] = useState("");
  const [alcance, setAlcance] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMsg("Aeronave cadastrada! Dados salvos com sucesso!");
        setCodigo("");
        setModelo("");
        setTipo("comercial");
        setCapacidade("");
        setAlcance("");
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="aeronave-codigo" className="label-field">
            Código
          </label>
          <input
            id="aeronave-codigo"
            className="input-field"
            placeholder="Digite o código da aeronave"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="aeronave-modelo" className="label-field">
            Modelo
          </label>
          <input
            id="aeronave-modelo"
            className="input-field"
            placeholder="Digite o modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="aeronave-tipo" className="label-field">
            Tipo de Aeronave
          </label>
          <select 
            id="aeronave-tipo"
            className="input-field" 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)}
            aria-label="Tipo de Aeronave"
          >
            <option value="comercial">Comercial</option>
            <option value="militar">Militar</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="aeronave-capacidade" className="label-field">
            Capacidade (passageiros)
          </label>
          <input
            id="aeronave-capacidade"
            className="input-field"
            placeholder="Digite a capacidade"
            type="number"
            value={capacidade}
            onChange={(e) => setCapacidade(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="aeronave-alcance" className="label-field">
            Alcance (km)
          </label>
          <input
            id="aeronave-alcance"
            className="input-field"
            placeholder="Digite o alcance"
            type="number"
            value={alcance}
            onChange={(e) => setAlcance(e.target.value)}
            required
          />
        </div>
      </div>

      <button className="btn-submit" type="submit">
        Cadastrar Aeronave
      </button>
      {msg && <p className="mensagem-sucesso" role="alert">{msg}</p>}
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMsg("Peça cadastrada! Dados salvos com sucesso!");
        setNome("");
        setTipo("nacional");
        setFornecedor("");
        setStatus("producao");
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="peca-nome" className="label-field">
            Nome da Peça
          </label>
          <input
            id="peca-nome"
            className="input-field"
            placeholder="Digite o nome da peça"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="peca-tipo" className="label-field">
            Tipo de Peça
          </label>
          <select 
            id="peca-tipo"
            className="input-field" 
            value={tipo} 
            onChange={(e) => setTipo(e.target.value)}
            aria-label="Tipo de Peça"
          >
            <option value="nacional">Nacional</option>
            <option value="importada">Importada</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="peca-fornecedor" className="label-field">
            Fornecedor
          </label>
          <input
            id="peca-fornecedor"
            className="input-field"
            placeholder="Digite o nome do fornecedor"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="peca-status" className="label-field">
            Status da Peça
          </label>
          <select 
            id="peca-status"
            className="input-field" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Status da Peça"
          >
            <option value="producao">Produção</option>
            <option value="transporte">Transporte</option>
            <option value="pronta">Pronta</option>
          </select>
        </div>
      </div>

      <button className="btn-submit" type="submit">
        Cadastrar Peça
      </button>
      {msg && <p className="mensagem-sucesso" role="alert">{msg}</p>}
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMsg("Funcionário cadastrado! Dados salvos com sucesso!");
        setNome("");
        setTelefone("");
        setEndereco("");
        setUsuario("");
        setSenha("");
        setPermissao("administrador");
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="func-nome" className="label-field">
            Nome Completo
          </label>
          <input
            id="func-nome"
            className="input-field"
            placeholder="Digite o nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="func-telefone" className="label-field">
            Telefone
          </label>
          <input
            id="func-telefone"
            className="input-field"
            placeholder="Digite o telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="func-endereco" className="label-field">
            Endereço
          </label>
          <input
            id="func-endereco"
            className="input-field"
            placeholder="Digite o endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="func-usuario" className="label-field">
            Usuário
          </label>
          <input
            id="func-usuario"
            className="input-field"
            placeholder="Digite o nome de usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="func-senha" className="label-field">
            Senha
          </label>
          <input
            id="func-senha"
            className="input-field"
            placeholder="Digite a senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="func-permissao" className="label-field">
            Nível de Permissão
          </label>
          <select
            id="func-permissao"
            className="input-field"
            value={permissao}
            onChange={(e) => setPermissao(e.target.value)}
            aria-label="Nível de Permissão"
          >
            <option value="administrador">Administrador</option>
            <option value="engenheiro">Engenheiro</option>
            <option value="operador">Operador</option>
          </select>
        </div>
      </div>

      <button className="btn-submit" type="submit">
        Cadastrar Funcionário
      </button>
      {msg && <p className="mensagem-sucesso" role="alert">{msg}</p>}
    </form>
  );
};

const FormularioEtapa: React.FC = () => {
  const [nome, setNome] = useState("");
  const [prazo, setPrazo] = useState("");
  const [status, setStatus] = useState("em andamento");
  const [msg, setMsg] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setMsg("Etapa cadastrada! Dados salvos com sucesso!");
        setNome("");
        setPrazo("");
        setStatus("em andamento");
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="etapa-nome" className="label-field">
            Nome da Etapa
          </label>
          <input
            id="etapa-nome"
            className="input-field"
            placeholder="Digite o nome da etapa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="etapa-prazo" className="label-field">
            Prazo (dias)
          </label>
          <input
            id="etapa-prazo"
            className="input-field"
            placeholder="Digite o prazo em dias"
            type="number"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="etapa-status" className="label-field">
            Status da Etapa
          </label>
          <select 
            id="etapa-status"
            className="input-field" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Status da Etapa"
          >
            <option value="em andamento">Em Andamento</option>
            <option value="concluida">Concluída</option>
          </select>
        </div>
      </div>

      <button className="btn-submit" type="submit">
        Cadastrar Etapa
      </button>
      {msg && <p className="mensagem-sucesso" role="alert">{msg}</p>}
    </form>
  );
};

export default Cadastro;
