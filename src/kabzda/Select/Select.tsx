import s from './Select.module.css'
import {useState, KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string
    value: number
}

type SelectPropsType = {
    value?: number
    onChange: (value: number) => void
    items: Array<ItemType>
}

export const Select = (props: SelectPropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hoveredElValue, setHoveredElValue] = useState(props.value);

    useEffect(() => {
        setHoveredElValue(props.value);
    },[props.value])

    const onClickHandler = () => {
        setIsCollapsed(prevState => !prevState);
    };

    const selectedItem = props.items.find(item => item.value === props.value);
    const selectValue = selectedItem ? selectedItem.title : 'choose';

    const hoveredItem = props.items.find(item => item.value === hoveredElValue);

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement> ) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    const pretendentEl = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1];
                    if(pretendentEl) {
                        props.onChange(pretendentEl.value)
                        // setHoveredElValue(props.items[i+1].value)
                        return;
                    }

                }
            }
        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setIsCollapsed(false)
        }
        if(!selectedItem) {
            props.onChange(props.items[0].value);
        }

    }

    return (
        <>
            <div onClick={onClickHandler}
                 className={s.initial}
                 onKeyUp={onKeyUp}
                 tabIndex={1}
            >{selectValue}</div>

            {isCollapsed && (
                <div className={s.items}>
                    {props.items.map((item: ItemType, i) => {
                        const onClickHandler = () => {
                            setIsCollapsed(false);
                            props.onChange(item.value);
                        };
                        return (
                            <div onMouseEnter={() => setHoveredElValue(item.value)}

                                 onClick={onClickHandler}
                                 className={s.selectItem + ' ' + (hoveredItem === item ? s.selected : '')}
                                 key={i}>
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};
