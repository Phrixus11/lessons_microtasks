import {useState} from "react";
import {indicatorStyle, offStyle, onStyle} from "./OnOff.styles.ts";

type OnOffPropsType = {
    defaultOn?: boolean
}

export function OnOff (props: OnOffPropsType) {
    const [on, setOn] = useState<boolean>(props.defaultOn || false)


    return <div>
        <div style={onStyle(on)} onClick={()=>{ setOn(true) }}>On</div>
        <div style={offStyle(on)} onClick={()=>{ setOn(false) }}>Off</div>
        <div style={indicatorStyle(on)}></div>
    </div>
}
