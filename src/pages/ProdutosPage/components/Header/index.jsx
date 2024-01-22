export const Header = (props) => {
    return (
        <header className="d-flex justify-content-between align-items-center me-5 mb-4">
            <div className="produtos-resultado d-flex gap-2">
                <p className="produtos-resultado-titulo">{`Resultados para Tênis - `}</p>
                <p className="produtos-resultado-total">{`${props.quantidade} produtos`}</p>
            </div>
            <div className="produtos-ordernar border border-secondary rounded d-flex gap-2">
                <p className="produtos-ordernar-titulo">Ordernar por:</p>
                <select name="" id="">
                    <option value="0">opcao 01</option>
                </select>
            </div>
        </header>
    );
};
