const DestaqueCard = ()=>{
    return(
        <div className="destaque-card mb-5">
            <div className="destaque-pill">
                30% OFF
            </div>
            <div className="destaque-card-title">
                Novo drop Supreme
            </div>
            <a href="#" className="destaque-button">Comprar</a>
        </div>
    )
}

export const Destaque = () => {
    return (
        <div className="container destaques mt-5">
            <div className="destaque-top d-flex flex-column">
                <h3 className="destaque-title">Coleções em destaque</h3>
                <div className="destaque-cards d-flex gap-3">
                    <DestaqueCard />
                    <DestaqueCard />
                    <DestaqueCard />
                </div>
            </div>
            <div className="destaque-bottom">
                <h3 className="destaque-title">Coleções em destaque</h3>

            </div>
        </div>
    );
};
