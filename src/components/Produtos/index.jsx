import axios from "axios";
import { useEffect, useState } from "react";
import { ProdutoCard } from './components/ProdutoCard';
import { ProdutoCardGroup } from './components/ProdutoCardGroup/index.jsx';
import produtosFake from "./components/produtosFake.js";

const filtrarProdutos = (produtos, quantidade=12) => {
    const produtosFiltrados = produtos.filter(p => p.ativo == true)

    if (produtosFiltrados.length < quantidade) return produtos
    
    return produtosFiltrados.slice(0, quantidade)
}

export const Produtos = (props) => {
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false)
    const quantidade = props.quantidade? props.quantidade : 12

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );

        if (response.data) {
            setProdutos(filtrarProdutos(response.data,quantidade))
            setCarregado(true)
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <ProdutoCardGroup >{
            produtos.map((produto, id) => {
                return <ProdutoCard data={produto} key={id} carregado={carregado} />
            })
        }</ProdutoCardGroup>)
};
