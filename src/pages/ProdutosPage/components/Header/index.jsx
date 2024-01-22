import { useContext } from 'react';
import {ProdutosContexto} from '../ProdutoContexto'
import './style.css'

export const Header = (props) => {
    const quantidade = useContext(ProdutosContexto).length
    return (
        <header className="d-flex justify-content-between align-items-center me-5 mb-4">
            <div className="produtos-resultado d-flex gap-2">
                <p className="produtos-resultado-titulo">{`Resultados para "Tênis" - `}</p>
                <p className="produtos-resultado-total">{`${quantidade} produtos`}</p>
            </div>
            <div className="produtos-ordernar border border-secondary rounded d-flex gap-1 p-2">
                <label htmlFor='ordenamento' className="produtos-ordernar-titulo mb-auto">Ordernar por:</label>
                <select name="ordenamento" id="ordenamento">
                    <option value="decrescente">Maior preço</option>
                    <option value="crescente">Menor preço</option>
                    <option value="desconto">Maior desconto</option>
                </select>
            </div>
        </header>
    );
};
