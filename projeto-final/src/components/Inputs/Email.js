import React, { Component } from 'react';

// Importação do CSS da input
import './index.css';

// Componente da Input de email dos formulários.
export default class Email extends Component {
    render() {
        return (
            <input type='email'
                placeholder='Email'
                className="input" />
        )
    }
}