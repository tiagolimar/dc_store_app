import tenisAlta from "../../../../../assets/tenis-em-alta.png"
import "./style.css"

export const ProdutoCard = (props) => {
    const produto = props.data
    const desconto = produto.desconto ? `${produto.desconto}% OFF` : ""
    const carregado = props.carregado ? "" : "unload placeholder-wave"
    const mostrarPreco = parseFloat(produto.precoDepois) < parseFloat(produto.precoAntes) ? "": "d-none"

    return (
        <div className={`col produto-alta-card-placement ${carregado}`}>
            <div className="produto-alta-card mb-3">
                <div className="produto-alta-bg">
                    <div className={`produto-alta-bg-${desconto?"desconto":"sem-desconto"} ms-3 mt-3`}>{desconto}</div>
                    <img src={tenisAlta} alt="" />
                </div>
                <div className="produto-alta-text">
                    <div className="produto-alta-categoria">{produto.categoria}</div>
                    <div className="produto-alta-nome">{produto.nome}</div>
                    <div className="produto-alta-preco d-flex">
                        <div className={`produto-alta-preco-antigo ${mostrarPreco}`}>
                            R${produto.precoAntes}
                        </div>
                        <div className="produto-alta-preco-atual ms-2">
                            R${produto.precoDepois}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
