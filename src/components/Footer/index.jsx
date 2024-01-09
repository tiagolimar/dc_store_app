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

const SectionTop = ()=>{
    return(
        <div className="section-top flex-start">
        <div className="section-main">
            <LogoWhite />
            <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta amet architecto eos.</p>
        </div>
        <div className="section-media mb-5">
            <img src="../../../assets/medias.svg" alt="mídas sociais" />
        </div>
    </div>
    )
}

const Contact = ()=>{
    return(
        <div className="section-contact">
            <h3 className="mt-md-0 mt-sm-4">Contato</h3>
            <address>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -
                CE, 60150-161
            </address>
            <address> (85) 3051-3411 </address>
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className="pb-2 d-flex justify-content-center">
            <div className="col-10">
                <div className="d-flex justify-content-between flex-wrap p-4">
                    <SectionTop />
                    <Information />
                    <Category />
                    <Contact />
                </div>
                <hr/>
                <p className="text-center mt-4">@ 2022 Digital College</p>
            </div>
        </footer>
    );
};
