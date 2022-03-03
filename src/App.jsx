import React from 'react';
import Primeiro from './components/básicos/Primeiro';
import Aleatorio from './components/básicos/Aleatorio';
import Fragmento from './components/básicos/Fragmento';
import ComParametro from './components/básicos/ComParametro'

const App = () => {
    return (
        <div>
            <h1>Fundamentos do React</h1>
            <Aleatorio maximo={60} minimo={1}/>
            <Fragmento />
            <ComParametro 
                nota={9.3}
                aluno="Pedro Silva"
                titulo="Situação do aluno" 
            />
            <Primeiro></Primeiro>
        </div>
    );
}

export default App;