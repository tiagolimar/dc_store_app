import "./style.css"
import { LogoWhite } from './../_Geral/LogoWhite';

const Information = ()=>{
    return(
        <div className="section-information">
        <h3>Informação</h3>
        <ul>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
        </ul>
    </div>
    )
}

const Category = ()=>{
    return(
        <div className="section-category">
            <h3>Categorias</h3>
            <ul>
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
            </ul>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="pb-2">
            <div className="container d-flex gap-4 p-4">
                <div className="section-top">
                    <div className="section-main">
                        <LogoWhite />
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta amet architecto eos.</p>
                    </div>
                    <div className="section-media">
                        <img src="../../../assets/medias.svg" alt="mídas sociais" />
                        </div>
                </div>
                <Information />
                <Category />
                <div className="section-contact">
                    <h3>Contato</h3>
                    <address>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -
                        CE, 60150-161
                    </address>
                    <address> (85) 3051-3411 </address>
                </div>
            </div>
            <hr/>
            <p className="text-center mt-4">@ 2022 Digital College</p>
        </footer>
    );
};
