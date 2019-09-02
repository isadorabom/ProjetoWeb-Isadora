import React, { Component } from 'react';

// Importação do CSS da input
import './index.css';

// Componente da Input de nome do formulário de cadastro.
export default class Nome extends Component {
    render() {
        return (
            <input type='text'
                placeholder='Nome'
                className="input" />
        )
    }
}