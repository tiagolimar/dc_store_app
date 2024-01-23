const contemFiltro = (filtro) => {
    // Obter todas as chaves do objeto filtro
    const chaves = Object.keys(filtro);

    // Percorrer cada chave e verificar se o array correspondente não está vazio
    for (let chave of chaves) {
        if (filtro[chave] && filtro[chave].length > 0) {
            return true; // Retorna true se encontrar um array não vazio
        }
    }

    return false; // Retorna false se todos os arrays estiverem vazios
};

export const usarFiltro = (produtos, filtro) => {
    return produtos.filter(produto => {
        // Verifica cada chave no filtro (categoria, marca, genero, etc.)
        for (let chave in filtro) {
            // Continua para a próxima iteração se o array de filtro estiver vazio
            if (filtro[chave].length === 0) continue;

            // Verifica se o produto corresponde a pelo menos um dos valores do filtro para essa chave
            if (!filtro[chave].includes(produto[chave])) {
                return false; // Se não corresponder, exclui o produto da lista final
            }
        }
        return true; // Se o produto passar por todos os filtros, inclui na lista final
    });
};


export default contemFiltro