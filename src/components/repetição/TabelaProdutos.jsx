import produtos from "../../data/produtos";

export default (props) => {
    function getLinhas() {
        return produtos.map(produto => {
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        });
    }

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {getLinhas}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}