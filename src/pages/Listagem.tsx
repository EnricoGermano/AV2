import React, { useState } from "react";
import "./Listagem.css";

type EntityType = "aeronaves" | "etapas" | "pecas" | "funcionarios";

interface Aeronave {
  codigo: string;
  modelo: string;
  tipo: "comercial" | "militar";
  capacidade: number;
  alcance: number;
}

interface Peca {
  nome: string;
  tipo: "nacional" | "importada";
  fornecedor: string;
  status: "producao" | "transporte" | "pronta";
}

interface Funcionario {
  nome: string;
  telefone: string;
  endereco: string;
  usuario: string;
  permissao: "administrador" | "engenheiro" | "operador";
}

interface Etapa {
  nome: string;
  prazo: number;
  status: "em andamento" | "concluida";
}

type ItemUniao = Aeronave | Peca | Funcionario | Etapa;

// Dados de exemplo (em produção, viriam de uma API)
const DADOS_EXEMPLO = {
  aeronaves: [
    { codigo: "AER-001", modelo: "Boeing 737", tipo: "comercial" as const, capacidade: 180, alcance: 5000 },
    { codigo: "AER-002", modelo: "Embraer E195", tipo: "comercial" as const, capacidade: 146, alcance: 4800 },
    { codigo: "AER-003", modelo: "F-16 Fighting Falcon", tipo: "militar" as const, capacidade: 1, alcance: 3200 },
  ] as Aeronave[],
  pecas: [
    { nome: "Turbina CFM56", tipo: "importada" as const, fornecedor: "CFM International", status: "pronta" as const },
    { nome: "Asa Principal", tipo: "nacional" as const, fornecedor: "Embraer", status: "producao" as const },
    { nome: "Trem de Pouso", tipo: "importada" as const, fornecedor: "Liebherr", status: "transporte" as const },
  ] as Peca[],
  funcionarios: [
    { nome: "João Silva", telefone: "11987654321", endereco: "São Paulo, SP", usuario: "joao.silva", permissao: "administrador" as const },
    { nome: "Maria Santos", telefone: "11912345678", endereco: "São José dos Campos, SP", usuario: "maria.santos", permissao: "engenheiro" as const },
    { nome: "Pedro Oliveira", telefone: "11998765432", endereco: "Campinas, SP", usuario: "pedro.oliveira", permissao: "operador" as const },
  ] as Funcionario[],
  etapas: [
    { nome: "Montagem de Fuselagem", prazo: 30, status: "em andamento" as const },
    { nome: "Instalação de Sistemas", prazo: 20, status: "concluida" as const },
    { nome: "Testes de Voo", prazo: 15, status: "em andamento" as const },
  ] as Etapa[],
};

const Listagem: React.FC = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<EntityType>("aeronaves");
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<ItemUniao | null>(null);

  const abrirModal = (item: ItemUniao) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const obterDados = (): ItemUniao[] => {
    switch (tipoSelecionado) {
      case "aeronaves":
        return DADOS_EXEMPLO.aeronaves;
      case "pecas":
        return DADOS_EXEMPLO.pecas;
      case "funcionarios":
        return DADOS_EXEMPLO.funcionarios;
      case "etapas":
        return DADOS_EXEMPLO.etapas;
      default:
        return [];
    }
  };

  // Renderiza cada tipo de modal com base no tipo selecionado
  const renderModal = () => {
    if (!itemSelecionado) return null;

    switch (tipoSelecionado) {
      case "aeronaves": {
        const item = itemSelecionado as Aeronave;
        return (
          <div className="modal-conteudo">
            <h3>Detalhes da Aeronave</h3>
            <div className="modal-info">
              <p><strong>Código:</strong> {item.codigo}</p>
              <p><strong>Modelo:</strong> {item.modelo}</p>
              <p><strong>Tipo:</strong> {item.tipo === "comercial" ? "Comercial" : "Militar"}</p>
              <p><strong>Capacidade:</strong> {item.capacidade} passageiros</p>
              <p><strong>Alcance:</strong> {item.alcance} km</p>
            </div>
            <div className="modal-buttons">
              <button className="btn-modal-fechar" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        );
      }

      case "pecas": {
        const item = itemSelecionado as Peca;
        return (
          <div className="modal-conteudo">
            <h3>Detalhes da Peça</h3>
            <div className="modal-info">
              <p><strong>Nome:</strong> {item.nome}</p>
              <p><strong>Tipo:</strong> {item.tipo === "nacional" ? "Nacional" : "Importada"}</p>
              <p><strong>Fornecedor:</strong> {item.fornecedor}</p>
              <p><strong>Status:</strong> {item.status === "producao" ? "Produção" : item.status === "transporte" ? "Transporte" : "Pronta"}</p>
            </div>
            <div className="modal-buttons">
              <button className="btn-modal-fechar" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        );
      }

      case "funcionarios": {
        const item = itemSelecionado as Funcionario;
        return (
          <div className="modal-conteudo">
            <h3>Detalhes do Funcionário</h3>
            <div className="modal-info">
              <p><strong>Nome:</strong> {item.nome}</p>
              <p><strong>Telefone:</strong> {item.telefone}</p>
              <p><strong>Endereço:</strong> {item.endereco}</p>
              <p><strong>Usuário:</strong> {item.usuario}</p>
              <p><strong>Permissão:</strong> {item.permissao === "administrador" ? "Administrador" : item.permissao === "engenheiro" ? "Engenheiro" : "Operador"}</p>
            </div>
            <div className="modal-buttons"> 
              <button className="btn-modal-fechar" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        );
      }

      case "etapas": {
        const item = itemSelecionado as Etapa;
        return (
          <div className="modal-conteudo">
            <h3>Detalhes da Etapa</h3>
            <div className="modal-info">
              <p><strong>Nome:</strong> {item.nome}</p>
              <p><strong>Prazo:</strong> {item.prazo} dias</p>
              <p><strong>Status:</strong> {item.status === "em andamento" ? "Em Andamento" : "Concluída"}</p>
            </div>
            <div className="modal-buttons">
              <button className="btn-modal-fechar" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        );
      }

      default:
        return <p>Dados indisponíveis</p>;
    }
  };

  const dados = obterDados();

  return (
    <div className="listagem-container">
      <div className="listagem-card">
        <h2 className="listagem-titulo">Listagem</h2>

        {/* ABAS DE TIPO */}
        <div className="tabs-wrapper">
          <button
            className={tipoSelecionado === "aeronaves" ? "btn-tab-active" : "btn-tab"}
            onClick={() => setTipoSelecionado("aeronaves")}
            aria-label="Aba de listagem de Aeronaves"
          >
            Aeronaves
          </button>
          <button
            className={tipoSelecionado === "pecas" ? "btn-tab-active" : "btn-tab"}
            onClick={() => setTipoSelecionado("pecas")}
            aria-label="Aba de listagem de Peças"
          >
            Peças
          </button>
          <button
            className={tipoSelecionado === "funcionarios" ? "btn-tab-active" : "btn-tab"}
            onClick={() => setTipoSelecionado("funcionarios")}
            aria-label="Aba de listagem de Funcionários"
          >
            Funcionários
          </button>
          <button
            className={tipoSelecionado === "etapas" ? "btn-tab-active" : "btn-tab"}
            onClick={() => setTipoSelecionado("etapas")}
            aria-label="Aba de listagem de Etapas"
          >
            Etapas
          </button>
        </div>

        {/* CONTEÚDO DA LISTAGEM */}
        <div className="listagem-content">
          {dados.length === 0 ? (
            <p className="listagem-vazio">Nenhum registro encontrado para {tipoSelecionado}.</p>
          ) : (
            <div className="listagem-tabela">
              <div className="listagem-header">
                {tipoSelecionado === "aeronaves" && (
                  <>
                    <div className="col-codigo">Código</div>
                    <div className="col-modelo">Modelo</div>
                    <div className="col-tipo">Tipo</div>
                    <div className="col-acao">Ação</div>
                  </>
                )}
                {tipoSelecionado === "pecas" && (
                  <>
                    <div className="col-nome">Nome</div>
                    <div className="col-tipo">Tipo</div>
                    <div className="col-status">Status</div>
                    <div className="col-acao">Ação</div>
                  </>
                )}
                {tipoSelecionado === "funcionarios" && (
                  <>
                    <div className="col-nome">Nome</div>
                    <div className="col-usuario">Usuário</div>
                    <div className="col-permissao">Permissão</div>
                    <div className="col-acao">Ação</div>
                  </>
                )}
                {tipoSelecionado === "etapas" && (
                  <>
                    <div className="col-nome">Nome</div>
                    <div className="col-prazo">Prazo</div>
                    <div className="col-status">Status</div>
                    <div className="col-acao">Ação</div>
                  </>
                )}
              </div>

              {dados.map((item, idx) => (
                <div key={idx} className="listagem-row">
                  {tipoSelecionado === "aeronaves" && (
                    <>
                      <div className="col-codigo">{(item as Aeronave).codigo}</div>
                      <div className="col-modelo">{(item as Aeronave).modelo}</div>
                      <div className="col-tipo">{(item as Aeronave).tipo === "comercial" ? "Comercial" : "Militar"}</div>
                      <div className="col-acao">
                        <button
                          className="btn-view"
                          onClick={() => abrirModal(item)}
                          aria-label={`Ver detalhes de ${(item as Aeronave).modelo}`}
                        >
                          Ver
                        </button>
                      </div>
                    </>
                  )}
                  {tipoSelecionado === "pecas" && (
                    <>
                      <div className="col-nome">{(item as Peca).nome}</div>
                      <div className="col-tipo">{(item as Peca).tipo === "nacional" ? "Nacional" : "Importada"}</div>
                      <div className="col-status">
                        <span className={`status-badge status-${(item as Peca).status}`}>
                          {(item as Peca).status === "producao" ? "Produção" : (item as Peca).status === "transporte" ? "Transporte" : "Pronta"}
                        </span>
                      </div>
                      <div className="col-acao">
                        <button
                          className="btn-view"
                          onClick={() => abrirModal(item)}
                          aria-label={`Ver detalhes de ${(item as Peca).nome}`}
                        >
                          Ver
                        </button>
                      </div>
                    </>
                  )}
                  {tipoSelecionado === "funcionarios" && (
                    <>
                      <div className="col-nome">{(item as Funcionario).nome}</div>
                      <div className="col-usuario">{(item as Funcionario).usuario}</div>
                      <div className="col-permissao">
                        <span className={`permissao-badge permissao-${(item as Funcionario).permissao}`}>
                          {(item as Funcionario).permissao === "administrador" ? "Admin" : (item as Funcionario).permissao === "engenheiro" ? "Eng." : "Op."}
                        </span>
                      </div>
                      <div className="col-acao">
                        <button
                          className="btn-view"
                          onClick={() => abrirModal(item)}
                          aria-label={`Ver detalhes de ${(item as Funcionario).nome}`}
                        >
                          Ver
                        </button>
                      </div>
                    </>
                  )}
                  {tipoSelecionado === "etapas" && (
                    <>
                      <div className="col-nome">{(item as Etapa).nome}</div>
                      <div className="col-prazo">{(item as Etapa).prazo} dias</div>
                      <div className="col-status">
                        <span className={`status-badge status-${(item as Etapa).status === "em andamento" ? "andamento" : "concluida"}`}>
                          {(item as Etapa).status === "em andamento" ? "Em Andamento" : "Concluída"}
                        </span>
                      </div>
                      <div className="col-acao">
                        <button
                          className="btn-view"
                          onClick={() => abrirModal(item)}
                          aria-label={`Ver detalhes de ${(item as Etapa).nome}`}
                        >
                          Ver
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MODAL */}
        {modalAberto && (
          <div className="modal-fundo" onClick={fecharModal}>
            <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
              {renderModal()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listagem;
