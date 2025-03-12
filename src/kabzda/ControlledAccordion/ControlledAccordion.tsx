import {useState} from "react";


export const ControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <h2 style={{cursor: "pointer"}} onClick={()=>setCollapsed((prev)=>!prev)}>Menu List</h2>
            {/*<button onClick={()=>setCollapsed((prev)=>!prev)}>TOGGLE</button>*/}
            {collapsed && <AccordionBody/>}
        </div>
    );
};

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}