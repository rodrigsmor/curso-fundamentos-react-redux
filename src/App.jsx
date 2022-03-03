import './App.css';
import React from 'react';
import Card from './components/layout/Card';
import Familia from './components/básicos/Familia'
import Primeiro from './components/básicos/Primeiro';
import Aleatorio from './components/básicos/Aleatorio';
import Fragmento from './components/básicos/Fragmento';
import ComParametro from './components/básicos/ComParametro'
import FamiliaMembro from "./components/básicos/FamiliaMembro";

const App = () => {
    return (
        <div className="App">
            <h1>Fundamentos do React</h1>
            <div className="Cards">
                <Card titulo={'#05 - Componente com filhos'} color={'#00C8F8'}>
                    <Familia sobrenome={'Silva'}>
                        <FamiliaMembro nome={'Pedro'} />
                        <FamiliaMembro nome={'Ana'} />
                        <FamiliaMembro nome={'Gustavo'} />
                    </Familia>
                </Card>
                
                <Card titulo={'#04 - Desafio Aleatório'} color={'#FA9600'}>
                    <Aleatorio maximo={60} minimo={1}/>
                </Card>

                <Card titulo={'#03 - Fragmento'} color={'#E94C6F'}>
                    <Fragmento />
                </Card>

                <Card titulo={'#02 - Com Parâmetro'} color={'#E8B71A'}>    
                    <ComParametro 
                        nota={9.3}
                        aluno="Pedro Silva"
                        titulo="Situação do aluno" 
                    />
                </Card>

                <Card titulo={'#01 - Primeiro Componente'} color={'#588C73'}>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    );
}

export default App;