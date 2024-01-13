import img1 from "../../../../../assets/star-wars-storm-trooper-supreme-shirts.png";
import img2 from "../../../../../assets/tenis-black.png";
import img3 from "../../../../../assets/headphone.png";

const produtosEmDestaque = [
    {
        desconto: 30,
        descricao: "Novo drop Supreme",
        imagem: img1,
    },
    {
        desconto: 25,
        descricao: "Coleção Adidas",
        imagem: img2,
    },
    {
        desconto: 40,
        descricao: "Novo Beats Bass",
        imagem: img3,
    },
];

export const obterProdutos = () => {
    /* 
    Fazer implementação de função que obtém três produtos em destaque para exibição no site
    */

    return produtosEmDestaque;
};
