import tenis from "../../../../../assets/tenis.png";
import circulo from "../../../../../assets/circulo.svg";
import "./style.css";

const ButtonSlide = (props) => {
    const active = props.active ? "active" : "";
    const current = props.active ? "true" : "";
    return (
        <button
            type="button"
            data-bs-target="#carousel-slide"
            data-bs-slide-to={props.num}
            className={`btn-slide ${active}`}
            aria-current={`${current}`}
            aria-label={props.label}
        ></button>
    );
};

const CarosselItem = (props) => {
    const active = props.active ? "active" : "";
    return (
        <div className={`carousel-item ${active}`} data-bs-interval={5000}>
            <div className="container d-flex flex-lg-nowrap flex-wrap mb-5">
                <div className="slide-left d-flex flex-column justify-content-center mt-5">
                    <h3 className="slide-left-title">
                        Melhores ofertas personalizadas
                    </h3>
                    <h2 className="slide-left-subtitle">Queima de stoque Nike 🔥</h2>
                    <p className="slide-left-text">
                        Consequat culpa exercitation mollit nisi excepteur do do
                        tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className="slide-left-btn">Ver Ofertas</button>
                </div>
                <div className="slide-right mt-5 ms-5 position-relative">
                    <img src={tenis} className="img-main" alt="Tênis" />
                    <img src={circulo} className="circle position-absolute top-0" alt="círculo" />
                </div>
            </div>
        </div>
    );
};

export const Carrosel = () => {
    return (
        <div id="carousel-slide" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <ButtonSlide active="true" num={0} label="Slide 1" />
                <ButtonSlide num={1} label="Slide 2" />
                <ButtonSlide num={2} label="Slide 3" />
                <ButtonSlide num={3} label="Slide 4" />
            </div>
            <div className="carousel-inner">
                <CarosselItem active="true" />
                <CarosselItem />
                <CarosselItem />
                <CarosselItem />
            </div>
        </div>
    );
};
