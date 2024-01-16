export const ProdutoCardGroup = (props) => {
    return (
        <section className="produtos-em-alta me-5 ms-5">
            <div className="produto-alta-head d-flex justify-content-between mb-3">
                <div className="produto-alta-title">Produtos em alta</div>
                <div className="produto-alta-seta"><a href="">Ver todos →</a></div>
            </div>
            <div className="produto-alta-grupo d-flex justify-content-between flex-wrap">{props.children}</div>
        </section>
    );
};
