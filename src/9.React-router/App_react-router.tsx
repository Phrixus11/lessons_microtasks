import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne.tsx";
import {PageTwo} from "./components/pages/PageTwo.tsx";
import {PageThree} from "./components/pages/PageThree.tsx";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404.tsx";

export const App_reactRouter = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink className={({ isActive }) =>
                        isActive ? styles.activeNavLink : styles.navLink
                    } to={"/page1"}>Page1</NavLink></div>
                    <div><NavLink className={({ isActive }) =>
                        isActive ? styles.activeNavLink : styles.navLink
                    } to={"/page2"}>Page2</NavLink></div>
                    <div><NavLink className={({ isActive }) =>
                        isActive ? styles.activeNavLink : styles.navLink
                    } to={"/page3"}>Page3</NavLink></div>

                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/page1'}/>} />

                        <Route path="/page1" element={<PageOne/>} />
                        <Route path="/page2" element={<PageTwo/>} />
                        <Route path="/page3" element={<PageThree/>} />

                        <Route path="/error404" element={<Error404/>} />
                        <Route path="/*" element={<Navigate to={'/error404'}/>} />
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}
