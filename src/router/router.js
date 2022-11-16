import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import HomePage from "../pages/HomePage/HomePage";
import PsychoPedagogie from "../pages/PsychoPedagodie/PsychoPedagodie";
import Sophrologie from "../pages/Sophrologie/Sophrologie";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: <HomePage />,
      },
      {
        path: "/psychopedagogie",
        element: <PsychoPedagogie />,
      },
      {
        path: "/sophrologie",
        element: <Sophrologie />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
