import {memo, useState} from "react";

export default {
    title: 'ReactMemo',
}

// const meta = {
//     component: 'ReactMemo'
//
// }
// export default meta



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



export const ExampleReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users] = useState(['Vlad', 'Yulia', 'Boris'])


    return (
        <div>
            <Counter value={counter} />
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <MemoUsersList users={users}/>
        </div>
    )
}