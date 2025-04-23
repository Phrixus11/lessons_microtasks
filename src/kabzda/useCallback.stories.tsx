import {memo, useCallback, useState} from "react";

export default {
    title: 'useCallback',
}


function Counter(props: {value: number}) {
    console.log('Render Counter')
    return <span>{props.value} </span>
}

function UsersList(props:{users:Array<string>, callback: ()=>void}) {
    console.log('Render users list')
    return <div>
        <button onClick={props.callback}>add user</button>
        {props.users.map(((el,i)=> <div key={i}>{el}</div>))}
    </div>
}


const MemoUsersList = memo(UsersList) // мемонизация компоненты позволяет не рендерить компоненту, без изменения её пропсов


export const UseCallbackAndReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vlad', 'Yulia', 'Boris'])


    // Способ запомнить функцию с помозью useMemo
    // const memoizedAddUser = useMemo(() => {
    //     return () => setUsers([...users, 'Sveta' + new Date().getTime()])
    // }, [users] )


    // упрощенный способ, запомнить функцию с помощью useCallback

    // const memoizedAddUser = useCallback(() => {setUsers([...users, 'Sveta' + new Date().getTime()])},[users] )
    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    const memoizedAddUser = useCallback(addUser,[users] )

    return (
        <div>
            <Counter value={counter} />
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <MemoUsersList users={users} callback={memoizedAddUser} />
        </div>
    )
}