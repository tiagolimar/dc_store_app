
// import tenisJordan from "../../../../../assets/"
import "./style.css"

export const ProdutoEmDestaque = () => {
    return (
    <section className="container d-flex produto-em-destaque mb-5 mt-5">
        <div className="prod-em-dest-esquerda">
            img
        </div>
        <div className="prod-em-dest-direta ms-5">
            <p className="prod-em-dest-direita-titulo">Oferta especial</p>
            <h3 className="prod-em-dest-direita-nome">Air Jordan edição de colecionador</h3>
            <p className="prod-em-dest-direita-texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit saepe obcaecati eius non, maiores laborum dolorem repellat aspernatur mollitia autem ea dicta assumenda natus debitis eveniet incidunt fugiat tenetur quod?</p>
            <button className="slide-left-btn">Ver Ofertas</button>
        </div>
    </section>
    )
};