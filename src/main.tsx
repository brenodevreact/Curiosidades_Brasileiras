import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.tsx";
import Cep from "./routes/Cep.tsx";
import Ddd from "./routes/Ddd.tsx";
import Cnpj from "./routes/Cnpj.tsx";
import Feriados from "./routes/Feriados.tsx";
import Fipe from "./routes/Fipe.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/consultacep",
        element: <Cep />,
      },
      {
        path: "/consultaddd",
        element: <Ddd />,
      },
      {
        path: "/consultacnpj",
        element: <Cnpj />,
      },
      {
        path: "/feriados",
        element: <Feriados />,
      },
      {
        path: "/fipe",
        element: <Fipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
