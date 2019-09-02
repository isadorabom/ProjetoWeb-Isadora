import React, { Component } from 'react';

// Importação do CSS da input
import './index.css';

// Componente da Input de password dos formulários.
export default class Password extends Component {
    render() {
        return (
            <input type='password'
                placeholder='Senha'
                className="input" />
        )
    }
}