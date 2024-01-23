import { createContext, useState } from 'react';

const FiltroContexto = createContext({
    categoria: [],
    marca: [],
    genero: [],
});

export const FiltroProvider = ({ children }) => {
    let [filtro, setFiltro] = useState({
        categoria: [],
        marca: [],
        genero: [],
    });

    return (
        <FiltroContexto.Provider value={{ filtro, setFiltro }}>
            {children}
        </FiltroContexto.Provider>
    );
};

export default FiltroContexto;
