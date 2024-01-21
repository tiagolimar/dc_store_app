import { Carrosel } from "./components/Carrosel";
import { Destaque } from './components/Destaque/index';
import { ProdutoEmDestaque } from "./components/ProdutoEmDestaque";
import { Produtos } from '../../components/Produtos';

function Home() {
    return (
        <>
            <Carrosel />
            <Destaque />
            <Produtos />
            <ProdutoEmDestaque />
        </>
    );
}

export default Home;
