import axios from "axios";
import { useEffect, useState } from "react";
import { ProdutoCard } from './ProdutoCard';
import { ProdutoCardGroup } from './ProdutoCardGroup/index';

export const ProdutosEmAlta = () => {
    let [produtos, setProdutos] = useState([]);

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );
        setProdutos(response.data);
    };

    useEffect(() => {
        getProdutos();
    }, []);

    if (!produtos) return null;

    return (
        <ProdutoCardGroup>{
            produtos.map((produto,id)=>{
                return <ProdutoCard data={produto} key={id} />
            
            })
        }</ProdutoCardGroup>)
};
