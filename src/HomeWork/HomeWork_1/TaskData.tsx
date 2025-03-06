type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export type DataType = {
    title: string
    tasks: TaskType[]
    students: Array<string>
};

export type TaskDataProps = {
    data: DataType
}

export const TaskData = ({data}: TaskDataProps) => {
    const dataTask = data.tasks.map(t => {
        return (
            <li key={t.taskId}>
                <label htmlFor="">
                    <input type="checkbox" checked={t.isDone}/>{t.title}
                </label>
                <span>{t.isDone}</span>
            </li>
        )
    })


    return (
        <div>
            <h2>{data.title}</h2>

            <ul>
                {dataTask}
            </ul>

            <ul>
                {data.students.map(t => {
                    return (
                        <li>{t}</li>
                    )
                })}
            </ul>
        </div>
    );
};