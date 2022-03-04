import IndiretaFilho from "./IndiretaFilho";
import { useState } from "react";

export default props => {
    const [ nome, setNome ] = useState('?')
    const [ idade, setIdade ] = useState(0);
    const [ nerd, setNerd ] = useState(false);

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <span>{nome} <br/></span>
                <span>{idade}<br/></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}<br/></span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
}