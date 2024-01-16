import { Carrosel } from "./components/Carrosel";
import { Destaque } from './components/Destaque/index';
import { ProdutosEmAlta } from './components/ProdutosEmAlta/index';


const ProdutosEmDestaque = () => {
    return <div className="Page">Produto em Destaque</div>;
};

function Home() {
    return (
        <>
            <Carrosel />
            <Destaque />
            <ProdutosEmAlta />
            <ProdutosEmDestaque />
        </>
    );
}

export default Home;
