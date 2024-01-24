import { useEffect, useState } from "react";
import axios from "axios";

import { Produtos } from "../../components/Produtos";
import { MenuFiltrar } from "./components/MenuFiltrar";
import { Header } from "./components/Header";

import { FiltroProvider } from "./components/context/FiltroContexto";
import { OrdenarProvider } from "./components/context/OrdenarContexto";

import getDadosFiltro from "./components/getDadosFiltro.js";
import "./style.css";

export const ProdutosPage = () => {
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
            setDadosFiltro(getDadosFiltro(response.data));
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <section className="page-produto mt-4">
            <OrdenarProvider>
                <Header />
                <main className="d-flex">
                    <FiltroProvider>
                        <MenuFiltrar dados={dadosFiltro} />
                        <div className="produtos-container">
                            <Produtos noTitle={true} quantidade={20} />
                        </div>
                    </FiltroProvider>
                </main>
            </OrdenarProvider>
        </section>
    );
};
