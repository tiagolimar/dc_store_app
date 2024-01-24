import { Link } from "react-router-dom";

export const ProdutoCardGroup = (props) => {
    const Head = () => {
        return (
            <div className="produto-alta-head d-flex justify-content-between mb-3 flex-wrap">
                <div className="produto-alta-title">Produtos em alta</div>
                <div className="produto-alta-seta">
                    <Link to="/produtos">Ver todos →</Link>
                </div>
            </div>
        );
    };
    return (
        <section className="produtos-em-alta me-5 ms-4">
            {props.noTitle ? null : <Head />}
            <div className={`produto-alta-grupo row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4`}>
                {props.children}
            </div>
        </section>
    );
};
