import { useEffect, useState } from "react";
import produtosFake from './../../components/Produtos/components/produtosFake';
import { Produtos } from "../../components/Produtos";
import { MenuFiltrar } from "./components/MenuFiltrar";
import { Header } from "./components/Header";
import "./style.css";
import axios from "axios";

export const ProdutosPage = () => {
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false);

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );

        setProdutos(response.data);

        if (response.data) {
            setCarregado(true);
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <section className="page-produto mt-4">
            <Header />
            <main className="d-flex justify-content-center">
                <MenuFiltrar />
                <div className="produtos-container">
                    <Produtos noTitle={true} quantidade={50} />
                </div>
            </main>
        </section>
    );
};
