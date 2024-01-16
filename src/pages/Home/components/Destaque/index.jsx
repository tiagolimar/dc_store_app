import { obterProdutos } from "./fetch.js";
import "./style.css";

import {Headphones} from "./components/Headphones"
import {Pants} from "./components/Pants"
import {Tenis} from "./components/Tenis"
import {Tshirt} from "./components/Tshirt"

const DestaqueCircleItem = (props) => {
    return (
        <div className="destaque-circle-item mb-4">
            <div className="destaque-circle-item-img">
            {props.children}
            </div>
            <div className="destaque-circle-item-text">
                <p className="mt-2">{props.title}</p>
            </div>
        </div>
    );
};

const DestaqueCircles = () => {
    return (
        <div className="d-flex gap-5 justify-content-center flex-wrap">
            <DestaqueCircleItem title="Camisetas" ><Tshirt /></DestaqueCircleItem>
            <DestaqueCircleItem title="Calças" ><Pants /></DestaqueCircleItem>
            <DestaqueCircleItem title="Bonés" ><Pants /></DestaqueCircleItem>
            <DestaqueCircleItem title="Headphones" ><Headphones /></DestaqueCircleItem>
            <DestaqueCircleItem title="Tênis" ><Tenis /></DestaqueCircleItem>
        </div>
    );
};

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
        <section className="container destaques mt-5">
            <div className="destaque-top d-flex flex-column">
                <h3 className="destaque-title">Coleções em destaque</h3>
                <div className="destaque-cards d-flex flex-wrap">
                    {obterProdutos().map((produto, id) => {
                        return (
                            <div key={id} className="col-12 col-md-4 col-sm-12">
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
            <div className="destaque-bottom text-center mt-5">
                <h3 className="destaque-title">Coleções em destaque</h3>
                <DestaqueCircles />
            </div>
        </section>
    );
};
