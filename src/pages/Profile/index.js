import React  from 'react';
import logoImg from '../../assets/logo.svg';
import { Link }  from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import './styles.css'
export default function Profile() {
    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, APAD</span>

            <Link className = "button" to="/incidents/new"> Cadastrar novo caso</Link>
            <button type="button">
          
            <FiPower size={18} color="#E02041"/>
            </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                    <p>Description test</p>
                    <strong>Valor</strong>
                    <p>R$ 120,00 test</p>
                </li>
            </ul>
        </div>
    );
  }

