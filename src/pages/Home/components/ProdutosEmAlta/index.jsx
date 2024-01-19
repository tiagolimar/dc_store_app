import axios from "axios";
import { useEffect, useState } from "react";
import { ProdutoCard } from './components/ProdutoCard';
import { ProdutoCardGroup } from './components/ProdutoCardGroup/';
import produtosFake from "./components/produtosFake.js";

export const ProdutosEmAlta = () => {
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false)

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );
        setProdutos(response.data);
        
        if (response.data) setCarregado(true);
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <ProdutoCardGroup>{
            produtos.map((produto,id)=>{
                return <ProdutoCard data={produto} key={id} carregado={carregado} />
            })
        }</ProdutoCardGroup>)
};
