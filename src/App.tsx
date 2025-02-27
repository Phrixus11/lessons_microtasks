import './App.css'
import {Button} from "./components/Button.tsx";
import {useState} from "react";
import {Money} from "./components/Money.tsx";

function App() {

    const Button1Foo=(subcriber:string,age:number,address?:string)=> {
        console.log(subcriber,age,address)
    }

    const Button2Foo=(subcriber:string)=> {
        console.log(subcriber)
    }

    let [a, setA] = useState(1)
    const onClickHandler =()=>{
        setA(++a)
        console.log(a)
    }
    const onClickHandler2 =()=>{
        setA(0)
        console.log(a)
}

    return (
        <>
            <Button name={'MyButton'} callback={()=>Button1Foo('Vasya',21,'Moscow')}/>
            <Button name={'MyButton2'} callback={()=>Button2Foo('Ivan')}/>
            <Button name={'StupedButton'} callback={()=>Button2Foo('Im stuped Button')}/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickHandler2}>0</button>
            <Money/>
        </>
    )
}

export default App
