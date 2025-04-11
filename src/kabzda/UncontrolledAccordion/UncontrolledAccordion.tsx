import {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer.tsx";


export const UncontrolledAccordion = () => {
    // const [collapsed, setCollapsed] = useState(true);
    const [state, dispatch] = useReducer(reducer, { collapsed: false });

    return (
        <div>
            <AccordionTitle onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {/*<AccordionTitle onClick={() => setCollapsed((prev) => !prev)}/>*/}

            {!state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitleProps = {
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h2 style={{cursor: "pointer"}} onClick={props.onClick}>Menu List</h2>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}