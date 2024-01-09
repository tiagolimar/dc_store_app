import { Link } from "react-router-dom";
import "./Logo.css"
import digital_store from "../../../assets/digital-store.svg"

export const Logo = ()=>{
    return(
        <div className="d-flex gap-2">
            <img src={digital_store} alt="logo digital store" className="ms-4"/>
            <Link className="navbar-brand logo-digital" to="/">Digital Store</Link>
        </div>
    )
}