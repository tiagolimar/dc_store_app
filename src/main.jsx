import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from './components/pages/Error.jsx';
import Home from "./components/pages/Home.jsx";
import Produtos from './components/pages/Produtos';
import Categorias from './components/pages/Categorias';
import MeusPedidos from "./components/pages/MeusPedidos.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/home",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/produtos",
                element: <Produtos />,
                errorElement: <Error />,
            },
            {
                path: "/categorias",
                element: <Categorias />,
                errorElement: <Error />,
            },
            {
                path: "/meus-pedidos",
                element: <MeusPedidos />,
                errorElement: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
