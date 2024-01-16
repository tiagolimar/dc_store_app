import "./style.css"

export const ProdutoCard = (props) => {
    const produto = props.data
    const desconto = produto.desconto ? `${produto.desconto}% OFF` : "bsnp"
    return (
        <div className="produto-alta-card mb-3 border border-black">
            <div className="produto-alta-bg">
                <div className="produto-alta-bg-desconto">{desconto}</div>
                <img src="" alt="" />
            </div>
            <div className="produto-alta-text">
                <div className="produto-alta-categoria">{produto.categoria}</div>
                <div className="produto-alta-nome">{produto.nome}</div>
                <div className="produto-alta-preco d-flex">
                    <div className="produto-alta-preco-antigo">
                        {produto.precoAntes}
                    </div>
                    <div className="produto-alta-preco-atual">
                        {produto.precoDepois}
                    </div>
                </div>
            </div>
        </div>
    );
};
