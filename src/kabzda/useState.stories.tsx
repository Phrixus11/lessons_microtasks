import {useState} from "react";

export default {
    title: 'useState',
}


export const Example = () => {

    const [counter, setCounter] = useState(() => {
        console.log('RenderCounter')
        return Math.floor(Math.random() * 100)
    });


    return (
        <>
            <button onClick={() => setCounter(prevState => prevState + 1)}>+</button>
            {counter}
        </>
    )
}