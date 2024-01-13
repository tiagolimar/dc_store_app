import { obterProdutos } from "./fetch.js";
import "./style.css";

const DestaqueCard = (props) => {
    return (
        <div className="destaque-card mb-5 ps-4 pt-4 position-relative me-3">
            <div className="destaque-group z-2 position-absolute">
                <div className="destaque-pill ps-3 pe-3">
                    {props.desconto}% OFF
                </div>
                <div className="destaque-card-title mt-2">
                    {props.descricao}
                </div>
                <div className="destaque-button text-center mt-2">
                    <a href="#" className="destaque-link">
                        Comprar
                    </a>
                </div>
            </div>
            <div className="destaque-image ">
                <img
                    src={props.imagem}
                    alt="imagem de produto em destaque"
                    className="position-absolute bottom-0 end-0 z-1 rounded-3"
                />
            </div>
        </div>
    );
};

export const Destaque = () => {
    return (
        <div className="container destaques mt-5">
            <div className="destaque-top d-flex flex-column">
                <h3 className="destaque-title">Coleções em destaque</h3>
                <div className="destaque-cards d-flex flex-wrap">
                    {obterProdutos().map((produto, id) => {
                        return (
                            <div key={id} className="col-12 col-md-4 col-sm-12" >
                                <DestaqueCard
                                    desconto={produto.desconto}
                                    descricao={produto.descricao}
                                    imagem={produto.imagem}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="destaque-bottom">
                <h3 className="destaque-title">Coleções em destaque</h3>
            </div>
        </div>
    );
};
