import { useEffect, useState } from "react";
import axios from "axios";

import { Carrosel } from "./components/Carrosel";
import { Destaque } from './components/Destaque/index';


const ProdutosEmAlta = () => {
    let [produtos, setProdutos] = useState([]);

    const getProdutos = async()=>{
        const response = await axios.get("https://dc-store-api-ka0t.onrender.com/api/produtos");
        setProdutos(response);
    }

    useEffect(() => {
        getProdutos()
        console.log(produtos)
    }, []);

    return <div className="Page">Produtos em Alta</div>;
};

const ProdutosEmDestaque = () => {
    return <div className="Page">Produto em Destaque</div>;
};

function Home() {
    return (
        <>
            <Carrosel />
            <Destaque />
            <ProdutosEmAlta />
            <ProdutosEmDestaque />
        </>
    );
}

export default Home;
