import { Link } from "react-router-dom";
import "./Logo.css"

export const Logo = ()=>{
    return(
        <div className="d-flex gap-2">
            <img src="../../../assets/digital-store.svg" alt="logo digital store" className="ms-4"/>
            <Link className="navbar-brand logo-digital" to="/">Digital Store</Link>
        </div>
    )
}