import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import {ProdutosPage} from "./pages/ProdutosPage";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import { Login } from "./pages/Login";
import { SignIn } from "./pages/SignIn";
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
            {
                path: "/login",
                element: <Login />,
                errorElement: <Error />,
            },
            {
                path: "/signin",
                element: <SignIn />,
                errorElement: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
