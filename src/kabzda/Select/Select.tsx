import s from './Select.module.css'
import {useState} from "react";

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: string
    onChange: (value: number) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onClickHandler = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <>
            <div onClick={onClickHandler} className={s.initial}>{props.value}</div>

        {isCollapsed && (
            <div className={s.items}>
                {props.items.map((item: ItemType, i) => {
                    const onClickHandler = () => {
                        setIsCollapsed(false);
                        props.onChange(item.value);
                    };
                    return (
                        <div onClick={onClickHandler} className={s.selectItem} key={i}>
                            {item.title}
                        </div>
                    );
                })}
            </div>
        )}
        </>
    );
};
