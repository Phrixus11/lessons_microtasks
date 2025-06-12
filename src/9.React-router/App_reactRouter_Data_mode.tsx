import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {S} from "./components/pages/_styles.ts";
import {PATH} from "./routes/router";

//Data Mode
export const App_reactRouter_Data_mode = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(-1)
  }

  return (
      <div>
        <div className={styles.header}><h1>HEADER</h1></div>
        <div className={styles.body}>
          <div className={styles.nav}>
            <S.NavWrapper><NavLink to={PATH.ADIDAS}>ADIDAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PUMA}>PUMA</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.ABIBAS}>ABIBAS</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PRICES}>PRICES</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>PROTECTED PAGE</NavLink></S.NavWrapper>

          </div>

          <div className={styles.content}>
            <div className={styles.HorizontalNavigation} >
              <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>MainPage</Link>
              <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
            </div>
              <Outlet/>
          </div>
        </div>
        <div className={styles.footer}>abibas 2023</div>
      </div>
  );
}

