import './App.css'
import {Button} from "./components/Button.tsx";

function App() {

    const Button1Foo=(subcriber:string,age:number,address?:string)=> {
        console.log(subcriber,age,address)
    }

    const Button2Foo=(subcriber:string)=> {
        console.log(subcriber)
    }

    return (
        <>
            <Button name={'MyButton'} callback={()=>Button1Foo('Vasya',21,'Moscow')}/>
            <Button name={'MyButton2'} callback={()=>Button2Foo('Ivan')}/>
            <Button name={'StuperButton'} callback={()=>Button2Foo('Im stuped Button')}/>

        </>
    )
}

export default App
