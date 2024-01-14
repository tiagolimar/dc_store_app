import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { Logo } from "./../_Geral/Logo";
import carrinho from "../../../assets/carrinho.svg"
import search from "../../../assets/search.svg"

const ButtonCollapse = ()=>{
    return (<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>)
}

const Search = ()=>{
    return(
        <div>
            <input type="text" placeholder="Pesquisar..." className="pesquisar col-10" />
            <img src={search} alt="logo pesquisar" />
        </div>
    )
}

const ItemPage = (props)=>{
    const location = useLocation()
    let active = location.pathname == props.path ? "actived" : ""
    if (props.path =='/home' && location.pathname=='/') active = "actived"
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
                        <img src={carrinho} alt="carrinho de compra" />
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