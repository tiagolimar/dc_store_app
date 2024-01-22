import "./style.css"

function capitalize(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
}

const Filtro = ({ tipo, opcoes }) => {
    return (
        <div className="menu-filtrar-filtro">
            <hr />
            <h4>{capitalize(tipo)}</h4>
            {opcoes.map((opcao, index) => (
                <div className="d-flex gap-2" key={index}>
                    <input type="checkbox" id={opcao} />
                    <label htmlFor={opcao}>{opcao}</label>
                </div>
            ))}
        </div>
    );
};

export const MenuFiltrar = ({ dados }) => {
    return (
        <aside className='menu-filtrar mt-2'>
            <h2>Filtrar por: </h2>
            {Object.entries(dados).map(([tipo, opcoes], index) => (
                <Filtro key={index} tipo={tipo} opcoes={opcoes} />
            ))}
        </aside>
    );
};