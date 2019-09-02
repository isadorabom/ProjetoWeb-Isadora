import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// BrowserRouter: é um componente que irá ser responsável por informar 
// pra nossa aplicação que a partir de onde ele é chamado teremos um roteamento de componentes.

// Switch: Agrupa os componentes Routes

// Route: Cada route é uma rota dentro do sistema.

import Login from './pages/Login'
import Cadastrar from './pages/Cadastro'
import ForgotPassword from './pages/ForgotPassword'

// classe onde ficam as rotas
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/cadastrar' component={Cadastrar} />
                    <Route path='/forgotPassword' component={ForgotPassword} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;