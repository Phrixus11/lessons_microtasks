import {PropsType} from "./AppHomeWork_3_DOP.tsx";

type Props = {
    data: Array<PropsType>,
};
export const List = ({data}: Props) => {
    return (
        <div>
            {data.map(item => (
                <li key={item.id}>
                    <span>{item.id} - </span>
                    <span>{item.title}</span>
                    <span>{item.completed}</span>
                </li>
            ))}
        </div>
    );
};