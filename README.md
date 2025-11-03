# Aerocode - Sistema de Gestão da Produção Aeronáutica

Este projeto é um sistema para gerenciar a produção de aeronaves civis e militares na empresa Aerocode. O sistema permite a administração de cadastros, etapas produtivas, testes e relatórios, com perfis diferenciados para Administrador, Engenheiro e Operador.

---

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/EnricoGermano/AV2.git
cd AV2
```
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Na primeira execução, se ainda não existir usuário cadastrado, você será redirecionado automaticamente para a tela de cadastro do primeiro usuário administrador.


---

## Relatórios

Aerocode é um sistema onde é possível:

- Gerenciar as etapas na construção de aeronaves.
- Acompanhamento e controle dos processos.
- Analisar testes como elétricos, hidráulicos e aerodinâmicos.
- Gerar relatórios para controle de qualidade.

Acesse o Relatório do sistema com o Wireframe e User Flow: [Relatório Completo](./Relatorio_AV2.pdf)

---


## Funcionalidades Principais

- Cadastro de aeronaves, peças, etapas, funcionários e testes.
- Controle de usuários com níveis de permissão distintos: Administrador, Engenheiro, Operador.
- Interface responsiva e acessível.
- Navegação SPA com React Router.


## Tela Inicial por Perfil

- **Administrador:** Painel com acesso a todas as funcionalidades e indicadores gerais.
- **Engenheiro:** Painel focado no gerenciamento técnico e controle de produção.
- **Operador:** Interface simplificada para registro e acompanhamento operacional.

---

## Primeiro Acesso e Cadastro Inicial

- Ao acessar o sistema pela primeira vez, se **não existir nenhum usuário cadastrado**, o sistema detecta automaticamente.
- Neste caso, o usuário é **redirecionado para uma página especial de cadastro de usuário**, para que possa criar o primeiro usuário.
- Após criar o primeiro usuário, o sistema permitirá o login normal para todos os perfis.
- Caso queira testar o sistema com diferentes perfis, o administrador poderá **excluir usuários existentes** e cadastrar novos usuários com diferentes permissões por meio da tela de cadastro de usuário.
- Esta abordagem simplifica o uso e teste do sistema durante a configuração no primeiro uso.

---

## Tecnologias Utilizadas

- React & TypeScript
- React Router para navegação SPA
- CSS modularizado com responsividade
- Aplicação multiplataforma (Windows, Linux, Browsers)

---
