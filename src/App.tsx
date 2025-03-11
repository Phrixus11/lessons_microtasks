import './App.css'
import OnOff from "./kabzda/OnOff/OnOff.tsx";
import {ControlledAccordion} from "./kabzda/ControlledAccordion/ControlledAccordion.tsx";
import {ControlledRating} from "./kabzda/ControlledRating/ControlledRating.tsx";



function App() {
    return (
        <>
            {/*<UniversalButton/>*/}
            {/*<RenderTasts/> */}
            {/*<UniversalInput/>*/}
            {/*<DeleteTask/>*/}
            <OnOff />
            <ControlledAccordion/>
            <ControlledAccordion/>
            <ControlledRating/>
        </>

    )}

export default App
