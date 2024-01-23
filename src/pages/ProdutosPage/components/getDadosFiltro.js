export default function gerarDadosFiltro(produtos) {
    const dadosFiltro = {
        marca: [],
        categoria: [],
        genero: [],
    };

    produtos.forEach(produto => {
        if (!dadosFiltro.marca.includes(produto.marca)) {
            dadosFiltro.marca.push(produto.marca);
        }

        if (!dadosFiltro.categoria.includes(produto.categoria)) {
            dadosFiltro.categoria.push(produto.categoria);
        }

        if (!dadosFiltro.genero.includes(produto.genero)) {
            dadosFiltro.genero.push(produto.genero);
        }
    });

    return dadosFiltro;
}