// import { useContext } from 'react';
// import {ProdutosContexto }from '../context/ProdutoContexto'
import { useContext } from "react";

import OrdenarContexto from "../context/OrdenarContexto";
import './style.css'


export const Header = () => {
    const { ordenar, setOrdenar } = useContext(OrdenarContexto)
    const quantidade = ordenar.quantidade;//useContext(ProdutosContexto).length
    
    return (
        <header className="d-flex justify-content-between align-items-center me-5 mb-4 flex-wrap">
            <div className="produtos-resultado d-flex gap-2">
                <p className="produtos-resultado-titulo">{`Resultados para "Tênis" - `}</p>
                <p className="produtos-resultado-total">{`${quantidade} produtos`}</p>
            </div>
            <div className="produtos-ordernar border border-secondary rounded d-flex gap-1 p-2">
                <label htmlFor='ordenamento' className="produtos-ordernar-titulo mb-auto">Ordernar por:</label>
                <select name="ordenamento" id="ordenamento" onChange={e=>setOrdenar({regra:e.target.value, quantidade:quantidade})}>
                    <option value="precoDepois-decrescente">Maior preço</option>
                    <option value="precoDepois-crescente">Menor preço</option>
                    <option value="nome-crescente" selected>Por nome</option>
                </select>
            </div>
        </header>
    );
};
