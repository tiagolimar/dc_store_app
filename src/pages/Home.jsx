const Carrosel = () => {
    return <div className="Page">Carrosel Animado</div>;
};

const Destaque = ()=>{
    return(
        <div className="Page">Destaque</div>
    )
}

const DestaqueIcones = ()=>{
    return(
        <div className="Page">Destaque Ícones</div>
    )
}

const ProdutosEmAlta = ()=>{
    return(
        <div className="Page">Produtos em Alta</div>
    )
}

const ProdutosEmDestaque = ()=>{
    return(
        <div className="Page">Produto em Destaque</div>
    )
}

function Home() {
    return (
        <>
            <Carrosel />
            <Destaque />
            <DestaqueIcones />
            <ProdutosEmAlta />
            <ProdutosEmDestaque />
        </>
    );
}

export default Home;
