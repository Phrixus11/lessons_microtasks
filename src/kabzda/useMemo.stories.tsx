import {memo, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}


export const ExampleUseMemo = () => {
    const [x, setX] = useState<number>(1)
    const [y, setY] = useState<number>(1)

    let resultX = x
    let resultY = y

    resultX = useMemo(()=>{
        let temp = x
        for (let i = 1; i < 1000000000; i++) {
            temp += 1
        }
        console.log('resultX')
        return temp
    },[x])


    function foo() {
        for (let i = 1; i < 5; i++) {
            resultY += 1
        }
    }
    foo()

    return (
        <div>
            <input type="number" value={x} onChange={(e) => setX(Number(e.currentTarget.value))} />
            <div>
                {resultX}
            </div>
            <input type="number" value={y} onChange={(e) => setY(Number(e.currentTarget.value))} />
            <div>
                {resultY}
            </div>
        </div>
    )
}


function Counter(props: {value: number}) {
    console.log('Render Counter')
    return <span>{props.value} </span>
}

function UsersList(props:{users:Array<string>}) {
    console.log('Render users list')
    return <div>
        {props.users.map(((el,i)=> <div key={i}>{el}</div>))}
    </div>
}


const MemoUsersList = memo(UsersList) // мемонизация компоненты позволяет не рендерить компоненту, без изменения её пропсов



export const UseMemoAndReactMemo = () => {
        const [counter, setCounter] = useState(0)
        const [users] = useState(['Vlad', 'Yulia', 'Boris'])

    const filterUsers = useMemo(() => {
        return users.filter(e=>e.indexOf('a') !== -1)
    }, [users])

        return (
            <div>
                <Counter value={counter} />
                <button onClick={()=>setCounter(counter+1)}>+</button>
                <MemoUsersList users={filterUsers} />
            </div>
        )
}