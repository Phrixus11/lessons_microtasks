import './App.css'
import {Provider} from 'react-redux';

import {App_sprint3_1_2} from "./10.Sprint-3-dop-1/extra-practice-1.2/App_sprint3_1.2.tsx";
import { store} from "./10.Sprint-3-dop-1/extra-practice-1.2/store";


function App() {
    return (
        <div className={"app"}>
            {/*<UniversalButton/>*/}
            {/*<RenderTasts/> */}
            {/*<UniversalInput/>*/}
            {/*<DeleteTask/>*/}
            {/*<OnOff />*/}
            {/*<ControlledAccordion/>*/}
            {/*<ControlledRating/>*/}
            {/*<App_dop1/>*/}
            {/*<App_dop2/>*/}
            {/*<AppHomeWork_3/>*/}
            {/*<App_ATM/>*/}
            {/*<AppHomeWork_3_DOP/>*/}
            {/*<App_ps4/>*/}
            {/*<App_ps5/>*/}
            {/*<App_Tuesday_DOP_1/>*/}
            {/*<App_Tuesday_DOP_2/>*/}
            {/*<App_TUESDAY_DOP_3/>*/}
            {/*<BrowserRouter>*/}
            {/*    <App_reactRouter/>*/}
            {/*</BrowserRouter>*/}
            {/*<Provider store={store}>*/}
            {/*    /!*<App_sprint3_1_1/>*!/*/}
            {/*</Provider>*/}
            <Provider store={store}>
                <App_sprint3_1_2/>
            </Provider>

        </div>


    )}

export default App
