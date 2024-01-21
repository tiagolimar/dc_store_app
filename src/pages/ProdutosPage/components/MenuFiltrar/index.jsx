import { useEffect, useState } from 'react';
import axios from 'axios';
import produtosFake from './../../../../components/Produtos/components/produtosFake';

export const MenuFiltrar = () => {
    let [produtos, setProdutos] = useState(produtosFake);
    let [carregado, setCarregado] = useState(false)

    const getProdutos = async () => {
        const response = await axios.get(
            "https://dc-store-api-ka0t.onrender.com/api/produtos"
        );

        setProdutos(response.data)

        if (response.data) {
            setCarregado(true)
        }
    };

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <aside className='mt-2'>
            <h3>Filtrar por</h3>
            <hr />
            <h4> Marca</h4>
        </aside>
    );
};
