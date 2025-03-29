import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App_ps5.tsx';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.todolistId);
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

    const onAllClickHandler = () => props.changeFilter("all", props.todolistId);
    const onActiveClickHandler = () => props.changeFilter("active", props.todolistId);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.todolistId);

let filteredTasks: Array<TaskType> = props.tasks;
    if (props.filter === "active") {
        filteredTasks = props.tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        filteredTasks = props.tasks.filter(t => t.isDone);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                filteredTasks.map(t => {
                    const removeTaskHandler = () => props.removeTask(t.id, props.todolistId)
                    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistId);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={changeTaskStatusHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={removeTaskHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
