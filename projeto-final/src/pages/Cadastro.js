import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import NomeInput from '../components/Inputs/Nome';
import EmailInput from '../components/Inputs/Email';
import PasswordInput from '../components/Inputs/Password';
import Footer from '../components/Footer/index';

// Importação do CSS
import './index.css'

// Componente de Cadastro (Imagem do Topo, Formulário de Cadastro, Botão de Cadastrar, Link para o Login)
export default class Cadastro extends Component {
    render() {
        return (
            <body className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/cadastro.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>CADASTRO</p>
                <form className='form register'>
                    <NomeInput />
                    <EmailInput />
                    <PasswordInput />
                    <button className='button-submit' type='submit'>CADASTRAR-SE
                    <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' /></button>
                </form>
                <div className='row'>
                    <Link className='link' to={'/'}><p>Voltar ao Login</p></Link>
                </div>
                <Footer />
            </body>
        )
    }
}