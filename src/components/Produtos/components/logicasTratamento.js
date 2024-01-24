const contemFiltro = (filtro) => {
    // Obter todas as chaves do objeto filtro
    if (filtro){
        const chaves = Object.keys(filtro);
    
        // Percorrer cada chave e verificar se o array correspondente não está vazio
        for (let chave of chaves) {
            if (filtro[chave] && filtro[chave].length > 0) {
                return true; // Retorna true se encontrar um array não vazio
            }
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

export const filtrarProdutos = (produtos, filtro, quantidade=12) => {
    let produtosFiltrados = []
    
    if(contemFiltro(filtro)){
        produtosFiltrados = usarFiltro(produtos,filtro)
    }else{
        produtosFiltrados = produtos.slice(0, quantidade)
    }
    return produtosFiltrados
}

export const ordenarProdutos = (produtos, ordenar) => {
    if (!produtos || produtos.length === 0) return [];
    if (!ordenar) return produtos
    const [chave, direcao] = ordenar.split('-');

    produtos.sort((a, b) => {
        let valorA = a[chave];
        let valorB = b[chave];

        // Verificar se os valores são numéricos
        const saoNumericos = !isNaN(parseFloat(valorA)) && !isNaN(parseFloat(valorB));

        if (saoNumericos) {
            valorA = parseFloat(valorA);
            valorB = parseFloat(valorB);
        }

        if (direcao === 'crescente') {
            return valorA > valorB ? 1 : valorA < valorB ? -1 : 0;
        } else if (direcao === 'decrescente') {
            return valorA < valorB ? 1 : valorA > valorB ? -1 : 0;
        }
    });

    return produtos;
};
