import tenis from "../../../../assets/tenis.png"

const ButtonLeft = ()=>{
    return(
        <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
    >
        <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
    </button>
    )
}

const ButtonRight = ()=>{
    return(
        <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
    >
        <span
            className="carousel-control-next-icon"
            aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
    </button>
    )
}

export const Carrosel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={tenis} className="d-block w-30" alt="..." />
                </div>
            </div>
            <ButtonLeft />
            <ButtonRight />
        </div>
    );
};