import { createContext, useState } from 'react';

const OrdenarContexto = createContext("nome-crescente");

export const OrdenarProvider = ({ children }) => {
    let [ordenar, setOrdenar] = useState("nome-crescente");

    return (
        <OrdenarContexto.Provider value={{ ordenar, setOrdenar }}>
            {children}
        </OrdenarContexto.Provider>
    );
};

export default OrdenarContexto;

