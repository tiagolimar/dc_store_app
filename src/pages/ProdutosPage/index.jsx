import { useEffect, useState } from "react";
import axios from "axios";

import produtosFake from "./../../components/Produtos/components/produtosFake";
import { Produtos } from "../../components/Produtos";
import { MenuFiltrar } from "./components/MenuFiltrar";
import { Header } from "./components/Header";

import { ProdutosContexto } from "./components/ProdutoContexto.jsx";

import getDadosFiltro from "./components/getDadosFiltro.js";
import "./style.css";

export const ProdutosPage = () => {
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false);
    let [dadosFiltro, setDadosFiltro] = useState({
        categorias: [],
        marcas: [],
        genero: [],
    });

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );

        if (response.data) {
            setProdutos(response.data);
            setDadosFiltro(getDadosFiltro(response.data));
            setCarregado(true);
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <section className="page-produto mt-4">
            <ProdutosContexto.Provider value={produtos}>
                <Header quantidade={200} />
                <main className="d-flex justify-content-center">
                    <MenuFiltrar dados={dadosFiltro} />
                    <div className="produtos-container">
                        <Produtos noTitle={true} quantidade={20} />
                    </div>
                </main>
            </ProdutosContexto.Provider>
        </section>
    );
};
