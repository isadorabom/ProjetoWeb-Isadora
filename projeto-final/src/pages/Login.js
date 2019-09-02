import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação dos Components da Página (Inputs do form e o Footer (rodapé))
import EmailInput from '../components/Inputs/Email';
import PasswordInput from '../components/Inputs/Password';
import Footer from '../components/Footer/index';

// Importação do CSS
import './index.css'

// Componente de Login (Imagem do Topo, Formulário de Login, Botão de Entrar, Link para Cadastro
// Link para Resetar Senha)
export default class Login extends Component {

    render() {
        return (
            <body className='container'>
                <div className='div-logo'>
                    <img className='logo' src='/images/login.png' alt='imagem de logo' />
                </div>
                <p className='page-identificator'>LOGIN</p>
                <form className='form login'>
                    <EmailInput />
                    <PasswordInput />
                    <button className='button-submit' type='submit'>
                        ENTRAR
                        <img className='button-seta' src='/images/seta-direita.png' alt='seta-direita' />
                    </button>
                </form>
                <div className='row'>
                    <Link className='link' to={'/forgotPassword'}><p>Esqueci minha senha!</p></Link>
                    <Link className='link' to={'/cadastrar'}><p>Novo? Cadastre-se!</p></Link>
                </div>
                <Footer />
            </body>
        )
    }
}