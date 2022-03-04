import './App.css';
import React from 'react';
import Card from './components/layout/Card';
import Input from './components/formulário/Input';
import Familia from './components/básicos/Familia';
import Primeiro from './components/básicos/Primeiro';
import Contador from './components/contador/Contador';
import Aleatorio from './components/básicos/Aleatorio';
import Fragmento from './components/básicos/Fragmento';
import DiretaPai from './components/Comunicação/DiretaPai';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ListaAlunos from './components/repetição/ListaAlunos';
import IndiretaPai from './components/Comunicação/IndiretaPai';
import ComParametro from './components/básicos/ComParametro';
import FamiliaMembro from "./components/básicos/FamiliaMembro";
import TabelaProdutos from './components/repetição/TabelaProdutos';

const App = () => {
    return (
        <div className="App">
            <h1>Fundamentos do React</h1>
            <div className="Cards">
                <Card titulo={'#12 - Contador'} color={'#ff2159'}>
                    <Contador numeroInicial={20}/>
                </Card>

                <Card titulo={'#11 - Componente Controlado'} color={'#ff8000'}>
                    <Input />
                </Card>

                <Card titulo={'#10 - Comunicação Indireta'} color={'#c231ab'}>
                    <IndiretaPai />
                </Card>

                <Card titulo={'#09 - Comunicação Direta'} color={'#52abc3'}>
                    <DiretaPai />
                </Card>
                
                <Card titulo={'#08 - Renderização Concidional'} color={'#53aa32'}>
                    <ParOuImpar numero={21} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo />
                </Card>

                <Card titulo={'#07 - Desafio Repetição'} color={'#534ab2'}>
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo={'#06 - Repetição'} color={'#00C865'}>
                    <ListaAlunos></ListaAlunos>
                </Card>

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