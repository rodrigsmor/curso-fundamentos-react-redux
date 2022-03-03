const Aleatorio = ({ minimo, maximo }) => {
    const numeroAleatorio =  parseInt(Math.random() *  (maximo - minimo)) + minimo;

    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Mínimo: </strong> {minimo} </p>
            <p><strong>Valor Máximo: </strong> {maximo} </p>
            <p><strong>Valor Escolhido: </strong> {numeroAleatorio} </p>
        </div>
    );
}

export default Aleatorio;