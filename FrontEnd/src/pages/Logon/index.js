import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'

import api from '../../Services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch(err){
            alert('Houve um Erro ao Realizar o Login');
            console.log(err);
        }
    }


    return (
        <div className="logon-container">
            <section className="form">
                <img src ={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"
                        value={id} onChange ={e=> setId(e.target.value)}
                    />
                    <button type="submit" className="button"> Entrar </button>
                    <Link to="/register" className="back-link"> <FiLogIn size={16} color="#E02041"/> Não Tenho Cadastro </Link>
                </form>
            </section>

            <img src ={heroesImg} alt="Heroes" />

        </div>
            


    );
}