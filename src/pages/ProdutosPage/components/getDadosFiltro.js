export default function gerarDadosFiltro(produtos) {
    const dadosFiltro = {
        marca: [],
        categoria: [],
        genero: [],
    };

    produtos.forEach(produto => {
        const marca = produto.nome.split(' ')[0];
        if (!dadosFiltro.marca.includes(marca)) {
            dadosFiltro.marca.push(marca);
        }

        if (!dadosFiltro.categoria.includes(produto.categoria)) {
            dadosFiltro.categoria.push(produto.categoria);
        }

        const generoLetra = produto.nome.slice(-1);
        const genero = {
            'M':'Masculino',
            'F':'Feminino',
            'U':'Unissex',
        }
        if (!dadosFiltro.genero.includes(genero[generoLetra])) {
            dadosFiltro.genero.push(genero[generoLetra]);
        }
    });

    return dadosFiltro;
}