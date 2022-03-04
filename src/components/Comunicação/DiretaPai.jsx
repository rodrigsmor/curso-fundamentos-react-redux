import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho 
                nome={'Fernandinho'}
                idade={15}
                nerd={true}
            >
            </DiretaFilho>
            <DiretaFilho 
                nome={'Leonardo'}
                idade={19}
                nerd={false}
            >
            </DiretaFilho>
        </div>
    );
}