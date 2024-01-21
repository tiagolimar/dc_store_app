import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home";
import {ProdutosPage} from "./pages/ProdutosPage";
import Categorias from "./pages/Categorias.jsx";
import MeusPedidos from "./pages/MeusPedidos.jsx";
import "./main.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/home",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/produtos",
                element: <ProdutosPage />,
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
