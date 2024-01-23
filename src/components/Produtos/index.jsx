import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ProdutoCard } from './components/ProdutoCard';
import { ProdutoCardGroup } from './components/ProdutoCardGroup/index.jsx';
import produtosFake from "./components/produtosFake.js";

import FiltroContexto from "../../pages/ProdutosPage/components/context/FiltroContexto.jsx";

import contemFiltro from "./components/logicasFiltro";
import { usarFiltro } from "./components/logicasFiltro";

const filtrarProdutos = (produtos, filtro, quantidade=12) => {
    let produtosFiltrados = []
    
    if(contemFiltro(filtro)){
        produtosFiltrados = usarFiltro(produtos,filtro)
    }else{
        produtosFiltrados = produtos.slice(0, quantidade)
    }
    return produtosFiltrados
}

export const Produtos = (props) => {
    const { filtro } = useContext(FiltroContexto);
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false)
    const quantidade = props.quantidade? props.quantidade : 12

    const getProdutos = async (filtro) => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos/status/true"
        );

        if (response.data) {
            setProdutos(filtrarProdutos(response.data, filtro, quantidade))
            setCarregado(true)
        }
    };

    useEffect(() => {
        getProdutos(filtro);
    }, [filtro]);

    return (
        <ProdutoCardGroup >{
            produtos.map((produto, id) => {
                return <ProdutoCard data={produto} key={id} carregado={carregado} />
            })
        }</ProdutoCardGroup>)
};
