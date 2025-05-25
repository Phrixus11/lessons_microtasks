
import {App_reactRouter_Data_mode} from "../App_reactRouter_Data_mode";
import {createBrowserRouter} from "react-router-dom";
import {Adidas} from "../components/pages/Adidas";
import { Error404 } from "../components/pages/Error404";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";

const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  ERROR404: "/error404",
  MODEL: '/:model/:id',
  PRICES: '/prices',

} as const;

export const router = createBrowserRouter([
  { path: "/",
    Component: App_reactRouter_Data_mode,
    errorElement: <Error404/>,
    children:[
      { path: PATH.ADIDAS, Component: Adidas },
      { path: PATH.PUMA, Component: Puma },
      { path: PATH.ABIBAS, Component: Abibas },
      { path: PATH.PRICES, Component: Prices },

    ]
  },
]);