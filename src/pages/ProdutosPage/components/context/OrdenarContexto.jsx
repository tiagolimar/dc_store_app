import { createContext, useState } from 'react';

const OrdenarContexto = createContext({regra:"nome-crescente", quantidade:0});

export const OrdenarProvider = ({ children }) => {
    let [ordenar, setOrdenar] = useState({regra:"nome-crescente", quantidade:0});

    return (
        <OrdenarContexto.Provider value={{ ordenar, setOrdenar }}>
            {children}
        </OrdenarContexto.Provider>
    );
};

export default OrdenarContexto;

