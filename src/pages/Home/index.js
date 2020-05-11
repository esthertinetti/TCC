import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2, FiExternalLink, FiBarChart2, FiArrowLeftCircle } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Home(){
  const history = useHistory();

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }

  return(
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>Bem vinda, Esther V. Tinetti</span>

        <Link className="button" to="/form/new">Cadastrar novo</Link>
        <button onClick={handleLogout} type="button">
          <FiArrowLeftCircle size={40} color="#795EFF"/>
        </button>
      </header>
      <h1>Formulários cadastrados</h1>
      <ul>
        <li>
          <strong>PESQUISA DE DEMANDA TURISTICA</strong>
          <p>Total de perguntas: 28</p>
          <p>Meta de alcance: 3500</p>
          <p>Total respondido: 3000</p>
          <Link className="button" to="/forms">Visualizar</Link>
          <button tyoe="button"><FiExternalLink size={40} color="#795EFF" /></button>
          <button tyoe="button"><FiTrash2 size={40} color="#795EFF" /></button>   
          <Link className="back-link" to="/statistics">
            <button tyoe="button"><FiBarChart2 size={40} color="#795EFF" /></button>
          </Link> 
        </li>
      </ul>
    </div>

  );
}