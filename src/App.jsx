import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardAdm from './pages/DashboardAdm';
import DashboardEngenheiro from './pages/DashboardEngenheiro';
import DashboardOperador from './pages/DashboardOperador';import CadastroUsuario from './pages/CadastroUsuario';
import Cadastro from "./pages/Cadastro"
import Etapas from './pages/Etapas';
import Testes from './pages/Testes';
import Relatorios from './pages/Relatorios';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<DashboardAdm />} />
        <Route path="/engenheiro" element={<DashboardEngenheiro />} />
        <Route path="/operador" element={<DashboardOperador />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/etapas" element={<Etapas />} />
        <Route path="/testes" element={<Testes />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
