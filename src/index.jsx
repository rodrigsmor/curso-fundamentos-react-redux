import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import Primeiro from './components/básicos/Primeiro';
import ComParametro from './components/básicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro 
            nota={9.3}
            aluno="Pedro Silva"
            titulo="Situação do aluno" 
        />
    </div>,  
    document.getElementById('root')
)