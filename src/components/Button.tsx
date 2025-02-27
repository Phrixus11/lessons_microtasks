
type ButtonProps = {
    name: string
    callback: () => void
}

export const Button = ({name, callback}: ButtonProps) => {
    const onClickHandler=()=>{
        callback()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}