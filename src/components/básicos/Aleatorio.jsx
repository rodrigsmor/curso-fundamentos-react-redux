const Aleatorio = ({ minimo, maximo }) => {
    const numeroAleatorio =  parseInt(Math.random(minimo, maximo) *  (maximo - minimo)) + minimo;

    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <h3>{ numeroAleatorio }</h3>
        </div>
    );
}

export default Aleatorio;