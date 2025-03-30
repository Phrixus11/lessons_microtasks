import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App_Tuesday_DOP_2.tsx';
import {TasksType} from "./App_Tuesday_DOP_2.tsx";
import {Button} from "./Button.tsx";


type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TasksType>
    removeTask: (payload:{taskId: string, todolistId: string}) => void
    changeFilter: (payload: {value: FilterValuesType, todolistId: string}) => void
    addTask: (payload: { title: string, todolistId: string }) => void
    changeTaskStatus: (payload: {taskId: string, isDone: boolean, todolistId: string}) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    deleteAllTasks: (todolistId: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        const newTitle = title.trim();
        if (newTitle !== "") {
            props.addTask({title: newTitle, todolistId: props.todolistId});
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const removeTodolist = () => props.removeTodolist(props.todolistId)

    const onAllClickHandler = () => props.changeFilter({value: "all",todolistId: props.todolistId});
    const onActiveClickHandler = () => props.changeFilter({value: "active",todolistId: props.todolistId});
    const onCompletedClickHandler = () => props.changeFilter({value: "completed",todolistId: props.todolistId});

    return <div>
        <h3> {props.title}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
            <Button name={"Delete All Tasks"} callback={()=>props.deleteAllTasks(props.todolistId)}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask({taskId: t.taskId,todolistId: props.todolistId})
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        const newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus({taskId: t.taskId,isDone: newIsDoneValue,todolistId: props.todolistId});
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


