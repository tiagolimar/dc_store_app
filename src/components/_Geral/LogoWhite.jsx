import { Link } from "react-router-dom";
import "./LogoWhite.css";
import digital_store_white from "../../../assets/digital-store-white.svg"

export const LogoWhite = ()=>{
    return(
        <div className="d-flex gap-2">
            <img src={digital_store_white} alt="logo digital store" className="mt-1 mb-5"/>
            <Link className="logo-digital-white mb-3" to="/">Digital Store</Link>
        </div>
    )
}