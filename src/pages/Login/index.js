import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import api from  '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Login() {
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      history.push('/home');

    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="MularioFor"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiArrowRight size={20} color="#795EFF" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}