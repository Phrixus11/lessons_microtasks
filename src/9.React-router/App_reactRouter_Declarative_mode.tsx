import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas.tsx";
import {Puma} from "./components/pages/Puma.tsx";
import {Abibas} from "./components/pages/Abibas.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";
import {S} from "./components/pages/_styles.ts";
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  ERROR404: "/error404",
  MODEL: '/:model/:id',
  PRICES: '/prices',

} as const;

//Declarative Mode
export const App_reactRouter_Declarative_mode = () => {
  return (
      <div>
        <div className={styles.header}><h1>HEADER</h1></div>
        <div className={styles.body}>
          <div className={styles.nav}>
            <S.NavWrapper><NavLink to={PATH.PAGE1}>ADIDAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE2}>PUMA</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PAGE3}>ABIBAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></S.NavWrapper>

          </div>
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>

              <Route path={PATH.PAGE1} element={<Adidas/>}/>
              <Route path={PATH.PAGE2} element={<Puma/>}/>
              <Route path={PATH.PAGE3} element={<Abibas/>}/>
              <Route path={PATH.MODEL} element={<Model/>}/>
              <Route path={PATH.PRICES} element={<Prices/>}/>

              {/*<Route path={PATH.ERROR404} element={<Error404/>}/>*/}
              {/*<Route path="/*" element={<Navigate to={PATH.ERROR404}/>}/>*/}

              <Route path="/*" element={<Error404/>}/>

            </Routes>

          </div>
        </div>
        <div className={styles.footer}>abibas 2023</div>
      </div>
  );
}

