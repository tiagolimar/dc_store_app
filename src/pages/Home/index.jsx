import { Carrosel } from "./components/Carrosel";
import { Destaque } from './components/Destaque/index';
import { ProdutoEmDestaque } from "./components/ProdutoEmDestaque";
import { ProdutosEmAlta } from './components/ProdutosEmAlta/index';

function Home() {
    return (
        <>
            <Carrosel />
            <Destaque />
            <ProdutosEmAlta />
            <ProdutoEmDestaque />
        </>
    );
}

export default Home;
