import {useState} from "react";
import {Input} from "./Components/Input.tsx";
import {Button} from "./Components/Button.tsx";


export const UniversalInput = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState<string>('');



    const addMessage =(title:string) => {
        const newMessage = {message: title}
        setMessage([newMessage,...message])
        setTitle('')
    }
    return (
        <div className="App">

            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={"addMessage"} callBack={()=>addMessage(title)}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};