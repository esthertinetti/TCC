import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiHome} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Forms(){
  const history = useHistory();

  function handleHome(e){
    e.preventDefault();

    history.push();
  }

  return(
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>Pesquisa realizada por: Esther V. Tinetti</span>
        <Link className="back-link" to="/home">
            <FiHome size={40} color="#795EFF"/>
        </Link>
      </header>
    </div>
  );
}