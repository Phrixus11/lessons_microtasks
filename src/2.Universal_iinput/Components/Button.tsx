
type ButtonProps = {
    name: string
    callBack: () => void;
    // title: string;
    // setTitle: (title: string) => void;
}

export const Button = ({name, callBack}: ButtonProps) => {
    const onClickButtonHandler = () =>{
        callBack();

    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};