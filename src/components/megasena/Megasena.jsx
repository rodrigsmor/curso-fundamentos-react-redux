import React, { useState } from 'react';
import './Megasena.css';

const Megasena = ({ quantidade }) => {
    function gerarNumeros(quantidadeProps) {
        const numeros = Array(quantidadeProps)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContido(1, 60, nums);

                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    function gerarNumerosNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);

        return array.includes(aleatorio)
            ? gerarNumerosNaoContido(min, max, array)
            : aleatorio;
    }

    const [ qtde, setQtde ] = useState(quantidade || 6);
    const numerosIniciais = gerarNumeros(quantidade);
    const [ numeros, setNumeros ] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h1>Mega</h1>
            <h3>{ numeros.join(' ') }</h3>
            <div>
                <label htmlFor="quantidade"> Quantidade de Números </label>
                <input
                    min={6}
                    max={15}
                    type="number" 
                    value={qtde} 
                    name="quantidade" 
                    onChange={e => {
                        setQtde(+e.target.value);
                        setNumeros(gerarNumeros(+e.target.value));
                    }}
                />
            </div>
            <button onClick={ _ => setNumeros(gerarNumeros(qtde)) }>
                Gerar Números
            </button>
        </div>
    );
}

export default Megasena;