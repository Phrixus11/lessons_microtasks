import {ReactNode} from "react";

type Cross = {
    id: number
    model: string
    size: string

}

type SuperCrossesProps = {
    crosses: Cross[]
    children: ReactNode
};


export const SuperCrosses = ({crosses, children}: SuperCrossesProps) => {
    return (
        <div>
            <ul>
                {crosses.map((cross, index) => (
                    <li key={index}>
                        <div>{cross.id}</div>
                        <div>{cross.size}</div>
                        <div>{cross.model}</div>
                    </li>
                ))}
            </ul>
            {children}
            <hr/>
        </div>
    );
};