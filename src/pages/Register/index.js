import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    try {
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="MularioFor"/>
          <h1>Cadastre-se</h1>
        </section>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome completo"/>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar senha" />
          <button className="button" type="submit">Cadastrar</button>
          <Link className="back-link" to="/">
            <FiArrowLeft size={30} color="#795EFF" />
            Já tem uma conta? Entrar
          </Link>
        </form>
      </div>
    </div>
  );
}