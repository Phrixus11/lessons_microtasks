import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./9.React-router/routes/router";


function App() {
  return (
      <div className={"app"}>
        {/*<UniversalButton/>*/}
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
        {/*    <App_reactRouter_Declarative_mode/>*/}
        {/*</BrowserRouter>*/}

        <RouterProvider router={router} />

        {/*<Provider store={store}>*/}
        {/*    /!*<App_sprint3_1_1/>*!/*/}
        {/*</Provider>*/}
        {/*<Provider store={store}>*/}
        {/*    <App_sprint3_1_2/>*/}
        {/*</Provider>*/}
        {/*<App_sprint3_dop2/>*/}
        {/*<App_sprint3_dop2_2/>*/}
        {/*<App_sprint3_dop2_3/>*/}


      </div>
  )
}

export default App
