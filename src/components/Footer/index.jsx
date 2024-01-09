export const Footer = () => {
    return (
        <footer className="mt-5 mb-4 bg-black">
            <div className="container d-flex gap-4">
                <div className="main">
                    <div className="section-main">DIGITAL STORES</div>
                    <div className="section-media">REDES SOCIAIS</div>
                </div>
                <div className="section-information list-group">
                    <h3>Informação</h3>
                    <ul>
                        <li className="list-decoration-none">Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
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
                <section className="contact">
                    <h3>Contato</h3>
                    <address>
                        {" "}
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -
                        CE, 60150-161{" "}
                    </address>
                    <address> (85) 3051-3411 </address>
                </section>
            </div>
            <hr />
            <p className="text-center">@ 2022 Digital College</p>
        </footer>
    );
};
