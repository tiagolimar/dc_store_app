import { Link } from "react-router-dom";
import "./LogoWhite.css";

export const LogoWhite = ()=>{
    return(
        <div className="d-flex gap-2">
            <img src="../../../assets/digital-store-white.svg" alt="logo digital store" className="mt-1 mb-5"/>
            <Link className="logo-digital-white mb-3" to="/">Digital Store</Link>
        </div>
    )
}