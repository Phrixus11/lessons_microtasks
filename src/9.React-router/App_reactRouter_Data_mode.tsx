import styles from "./components/Site.module.css";
import {NavLink, Outlet} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";

const PATH = {
  PAGE1: "/adidas",
  PAGE2: "/puma",
  PAGE3: "/abibas",
  ERROR404: "/error404",
  MODEL: '/:model/:id',
  PRICES: '/prices',
} as const;

//Data Mode
export const App_reactRouter_Data_mode = () => {
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
              <Outlet/>
          </div>
        </div>
        <div className={styles.footer}>abibas 2023</div>
      </div>
  );
}

