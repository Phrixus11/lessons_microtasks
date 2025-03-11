import {useState} from "react";


export const ControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <h2>Menu List</h2>
            <button onClick={()=>setCollapsed((prev)=>!prev)}>button</button>
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