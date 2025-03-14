import './App_dop2.css';
import {SuperButton} from "./components/SuperButton.tsx";
import {SuperCrosses} from "./components/SuperCrosses.tsx";
import {Modal} from "./components/modal/Modal.tsx";

//import styles from "./components/SuperButton.module.css";


function App_dop2() {

    const cross = [
        {id: 1, model: "ADIDAS", size: "XXX"},
        {id: 2, model: "ABIBAS", size: "YYY"},
        {id: 3, model: "PUMA", size: "ZZZ"},
    ];

    return (
        <div>
            {/*<SuperButton onClick={()=>{}} className={styles.redForSuperButton}>Red super button</SuperButton>*/}

            {/*<SuperButton onClick={()=>{}} className={styles.blueForSuperButton}>Blue super button</SuperButton>*/}

            {/*<SuperButton color={"red"}>Red superbutton</SuperButton>*/}
            {/*<SuperButton color={"secondary"}>Secondary superbutton</SuperButton>*/}
            {/*<SuperButton>Default superbutton</SuperButton>*/}
            {/*<SuperButton disabled>Disabled superbutton</SuperButton>*/}

            {/*<SuperCrosses crosses={cross} >*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <SuperButton color={"red"}>Red superbutton</SuperButton>*/}
            {/*    <SuperButton color={"secondary"}>Secondary superbutton</SuperButton>*/}
            {/*    <SuperButton>Default superbutton</SuperButton>*/}
            {/*    <SuperButton disabled>Disabled superbutton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={cross} >*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <div>МНОГО ИНФЫ</div>*/}
            {/*    <SuperButton color={"red"}>Red superbutton</SuperButton>*/}
            {/*    <SuperButton color={"secondary"}>Secondary superbutton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            <SuperCrosses crosses={cross} >
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <SuperButton disabled>Disabled superbutton</SuperButton>
            </SuperCrosses>

            <Modal>
                <input type="text" placeholder={"email"}/>
                <input type="text" placeholder={"pass"}/>
                <button>send</button>
            </Modal>

            <Modal>
                <h2>Confident Information</h2>
                <input type="text" placeholder={"email"}/>
                <input type="text" placeholder={"pass"}/>
                <input type="text" placeholder={"pass"}/>
                <label>
                    <input type="checkbox" />
                    I agree
                </label>
                <button>send</button>
            </Modal>

        </div>
    );
}


export default App_dop2;
