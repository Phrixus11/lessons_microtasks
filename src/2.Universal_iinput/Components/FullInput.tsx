import {ChangeEvent, useState} from "react";

type FullInputProps = {
    addMessage: (m: string) => void
}

export const FullInput = ({addMessage}: FullInputProps) => {
    const [title, setTitle] = useState<string>('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle('')
        // //мое решение, поиск инпут по id
        // const input = document.getElementById("a") as HTMLInputElement;
        // input.value = ''
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

