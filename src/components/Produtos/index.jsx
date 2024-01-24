import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { ProdutoCard } from './components/ProdutoCard';
import { ProdutoCardGroup } from './components/ProdutoCardGroup';
import produtosFake from "./components/produtosFake.js";

import FiltroContexto from "../../pages/ProdutosPage/components/context/FiltroContexto";
import OrdenarContexto from "../../pages/ProdutosPage/components/context/OrdenarContexto";

import { filtrarProdutos, ordenarProdutos } from "./components/logicasTratamento.js";


const tratarProdutos = (produtos, filtro, ordenar, quantidade=12)=>{
    let produtosFiltrados = filtrarProdutos(produtos, filtro, quantidade)
    let produtosOrdenados = ordenarProdutos(produtosFiltrados, ordenar)
    return produtosOrdenados
}

export const Produtos = (props) => {
    const { filtro } = useContext(FiltroContexto)
    const { ordenar, setOrdenar } = useContext(OrdenarContexto)

    let [produtos, setProdutos] = useState(produtosFake)
    let [carregado, setCarregado] = useState(false)

    const quantidade = props.quantidade? props.quantidade : 12

    const getProdutos = async (filtro) => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos/status/true"
        );

        if (response.data) {
            const produtosTratados = tratarProdutos(response.data, filtro, ordenar.regra, quantidade)
            setOrdenar({regra:ordenar.regra, quantidade:produtosTratados.length})
            setProdutos(produtosTratados)
            setCarregado(true)
        }
    };

    useEffect(() => {
        getProdutos(filtro);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtro, ordenar.regra]);

    return (
        <ProdutoCardGroup >{
            produtos.map((produto, id) => {
                return <ProdutoCard data={produto} key={id} carregado={carregado} />
            })
        }</ProdutoCardGroup>)
};
