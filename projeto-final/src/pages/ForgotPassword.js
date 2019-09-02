import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import EmailInput from '../components/Inputs/Email';
import Footer from '../components/Footer/index';

// Importação do CSS
import './index.css';

// Componente de Resetar Senha (Imagem do Topo, Campo para e-mail, Botão de Enviar e-mail e
// Link para o Login)
export default class ForgotPassword extends Component {

    render() {
        return (
            <body className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/reset-password.jpg' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>Resetar Senha</p>
                <form className='form reset-password'>
                    <EmailInput />
                    <button className='button-submit' type='submit'>
                        ENVIAR EMAIL
                        <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' />
                    </button>
                </form>
                <div className='row'>
                    <Link className='link' to={'/'}><p>Voltar ao Login</p></Link>
                </div>
                <Footer />
            </body>
        )
    }
}