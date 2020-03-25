import React, { useEffect }  from 'react';
import logoImg from '../../assets/logo.svg';
import { Link }  from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import { FiTrash2 } from 'react-icons/fi'
import './styles.css'
import  api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')

    useEffect(()=>{}, [ongName]);

    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName}</span>

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

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>


                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Description test</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 test</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Description test</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 test</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>

                    <strong>Descrição</strong>
                    <p>Description test</p>

                    <strong>Valor</strong>
                    <p>R$ 120,00 test</p>

                    <button type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    );
  }

