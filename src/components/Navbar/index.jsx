import { Link, useLocation } from "react-router-dom";
import './style.css';

const Logo = ()=>{
    return(
        <div className="d-flex gap-2">
            <img src="../../../assets/digital-store.svg" alt="logo digital store" className="ms-4"/>
            <Link className="navbar-brand logo-digital" to="/">Digital Store</Link>
        </div>
    )
}

const ButtonCollapse = ()=>{
    return (<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>)
}

const Search = ()=>{
    return(
        <div>
            <input type="text" placeholder="Pesquisar produto..." className="pesquisar col-10" />
            <img src="../../../assets/search.svg" alt="logo pesquisar" />
        </div>
    )
}

const ItemPage = (props)=>{
    const location = useLocation()
    const active = location.pathname == props.path ? "actived" : ""
    return (
        <li className="nav-item"> <Link className={`nav-link ${active}`} to={props.path}>{props.name}</Link> </li>
    )
}

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm border shadow-sm pt-4">
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center ps-lg-4 ps-md3">
                    <Logo />
                    <ButtonCollapse />
                    <Search />
                    <div className="btn-grupo d-flex gap-3 align-items-center">
                        <a href="#" className="btn-cadastro">Cadastre-se</a>
                        <button className="btn btn-entrar">Entrar</button>
                        <img src="../../../assets/carrinho.svg" alt="carrinho de compra" />
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 pt-4">
                        <ItemPage path="/home" name="Home"/>
                        <ItemPage path="/produtos" name="Produtos"/>
                        <ItemPage path="/categorias" name="Categorias"/>
                        <ItemPage path="/meus-pedidos" name="Meus Pedidos"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}