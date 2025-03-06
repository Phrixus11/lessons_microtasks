import {ChangeEvent} from "react";

type InputProps = {
    setTitle: (title: string) => void;
    title: string;
};
export const Input = ({setTitle, title}: InputProps) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    return (

            <input value={title} onChange={onChangeInputHandler} type="text"/>

    );
};