import { createContext } from 'react';

export const ProdutosContexto = createContext([]);


// import { createContext, useState } from 'react';
// import produtosFake from '../../../components/Produtos/components/produtosFake.js';

// const ProdutosContexto = createContext([]);

// export const ProdutosProvider = ({ children }) => {
//     let [produtos, setProdutos] = useState(produtosFake);

//     return (
//         <ProdutosContexto.Provider value={{ produtos, setProdutos }}>
//             {children}
//         </ProdutosContexto.Provider>
//     );
// };

// export default ProdutosContexto;