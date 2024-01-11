import tenis from "../../../../assets/tenis.png";
// import circulo from "../../../assets/circulo.svg";
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
        <div className={`carousel-item ${active}`}>
            <div className="slide-left ">
                <h3 className="slide-left-title">
                    Melhores ofertas personalizadas
                </h3>
                <h2 className="slide-left-subtile">Queima de stoque Nike 🔥</h2>
                <p className="slide-left-text">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                </p>
                <button className="slide-left-btn">Ver Ofertas</button>
            </div>
            <div className="slide-right w-45">
                <img src={tenis} className="d-block w-10" alt="..." />
            </div>
        </div>
    );
};

export const Carrosel = () => {
    return (
        <div id="carousel-slide" className="carousel slide">
            <div className="carousel-indicators">
                <ButtonSlide active="true" num={0} label="Slide 1" />
                <ButtonSlide num={1} label="Slide 2" />
                <ButtonSlide num={2} label="Slide 3" />
                <ButtonSlide num={3} label="Slide 4" />
            </div>
            <div className="carousel-inner">
                <CarosselItem active="true" />
                {/* <div className="carousel-item active">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div> */}
                <div className="carousel-item">
                    <img src={tenis} className="d-block me-5w-30" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div>
            </div>
        </div>
    );
};
