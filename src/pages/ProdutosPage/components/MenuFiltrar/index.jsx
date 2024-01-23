import { useContext } from "react";

import FiltroContexto from "../context/FiltroContexto.jsx";
import "./style.css"

function capitalize(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
}

const Filtro = ({ tipo, opcoes }) => {
    const { filtro, setFiltro } = useContext(FiltroContexto);

    const handleChange = (id) => {
        const [tipo,opcao] = id.split(';')
        // Cria uma cópia do estado atual do filtro
        const novoFiltro = { ...filtro };

        // Se o filtro para o tipo especificado ainda não existir, inicialize-o como um array vazio
        if (!novoFiltro[tipo]) {
            novoFiltro[tipo] = [];
        }

        // Verifica se a opcao já está no array e o adiciona ou remove dependendo do caso
        if (novoFiltro[tipo].includes(opcao)) {
            novoFiltro[tipo] = novoFiltro[tipo].filter(item => item !== opcao);
        } else {
            novoFiltro[tipo].push(opcao);
        }

        // Atualiza o estado do filtro
        setFiltro(novoFiltro);
    };

    return (
        <div className="menu-filtrar-filtro">
            <hr />
            <h4>{capitalize(tipo)}</h4>
            {opcoes.map((opcao, index) => (
                <div className="d-flex gap-2" key={index}>
                    <input type="checkbox" id={`${tipo};${opcao}`} onClick={(e) => handleChange(e.target.id)}/>
                    <label htmlFor={`${tipo};${opcao}`}>{opcao}</label>
                </div>
            ))}
        </div>
    );
};

export const MenuFiltrar = ({ dados }) => {
    return (
        <aside className='menu-filtrar mt-2'>
            <h2>Filtrar por: </h2>
            {Object.entries(dados).map(([tipo, opcoes], index) => (
                <Filtro key={index} tipo={tipo} opcoes={opcoes} />
            ))}
        </aside>
    );
};