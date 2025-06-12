import {App_reactRouter_Data_mode} from "../App_reactRouter_Data_mode";
import {createBrowserRouter, Navigate, type RouteObject} from "react-router-dom";
import {Adidas} from "../components/pages/Adidas";
import {Error404} from "../components/pages/Error404";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedRoute} from "./ProtectedRoute";
import {Login} from "../components/pages/Login";
import {ProtectedPage} from "../components/pages/ProtectedPage";

export const PATH = {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  ERROR404: "/error404",
  MODEL: '/:model/:id',
  PRICES: '/prices',
  PROTECTED_PAGE: '/protected_page',
  LOGIN: '/login',

} as const;

const publicRoutes: RouteObject[] = [
  { path: '/', element: <Navigate to={PATH.ADIDAS} /> },
  { path: PATH.ADIDAS, Component: Adidas },
  { path: PATH.PUMA, Component: Puma },
  { path: PATH.ABIBAS, Component: Abibas },
  { path: PATH.PRICES, Component: Prices },
  { path: PATH.MODEL, Component: Model },
  { path: PATH.LOGIN, Component: Login },
  { path: PATH.ERROR404, Component: Error404 },
]
const privateRoutes: RouteObject[] = [
  { path: PATH.PROTECTED_PAGE, element: <ProtectedPage/> },
  { path: '/hu', element: <h1>asd</h1> },
]

export const router = createBrowserRouter([
  { path: "/",
    Component: App_reactRouter_Data_mode,
    // errorElement: <Error404/>,
    errorElement: <Navigate to={PATH.ERROR404} />,
    children:[
      {Component: ProtectedRoute,
        children: privateRoutes
      },
        ...publicRoutes
    ]
  },
]);

//--------------------------------------------------------------------------------

// export const router = createBrowserRouter([
//   { path: "/",
//     Component: App_reactRouter_Data_mode,
//     // errorElement: <Error404/>,
//     errorElement: <Navigate to={PATH.ERROR404} />,
//     children:[
//       { path: PATH.ADIDAS, Component: Adidas },
//       { path: PATH.PUMA, Component: Puma },
//       { path: PATH.ABIBAS, Component: Abibas },
//       { path: PATH.PRICES, Component: Prices },
//       { path: PATH.MODEL, Component: Model },
//       { path: PATH.PROTECTED_PAGE, element: <ProtectedRoute><ProtectedPage/></ProtectedRoute> },
//       { path: PATH.LOGIN, Component: Login },
//       { path: PATH.ERROR404, Component: Error404 },
//     ]
//   },
// ]);