import {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

export type TasksType = {
    [key: string]: TaskType[]
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

function App_ps5() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    const todolistID1 = v1();
    const todolistID2 = v1();

    const [todolists, setTodolists] = useState<todolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistId: string) {
        // const filteredTasks = tasks[todolistId].filter(t => t.id != id)
        // setTasks({...tasks, [todolistId]: filteredTasks});

        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id != id)});

    }


    function addTask(title: string, todolistId: string) {
        // const newTask = {id: v1(), title: title, isDone: false};
        // const nextState = {...tasks, [todolistId]:[newTask, ...tasks[todolistId]]};
        // setTasks(nextState);

        setTasks({...tasks, [todolistId]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistId]]})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        // const toggleTasks = tasks[todolistId].map(t=> t.id === taskId ? {...t, isDone}: t)
        // setTasks({...tasks, [todolistId]:toggleTasks });

        setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)});
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        // const nextState = todolists.map(tl=> tl.id ===todolistId ? {...tl, filter:value } : tl)
        // setTodolists(nextState);

        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter: value} : tl))
    }


    return (
        <div className="App">
            {
                todolists.map(tl => {
                    return (

                        <Todolist
                            key={tl.id}
                            todolistId={tl.id}
                            title={tl.title}

                            tasks={tasks[tl.id]}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}
                        />

                    )
                })
            }
        </div>
    );
}

export default App_ps5;
