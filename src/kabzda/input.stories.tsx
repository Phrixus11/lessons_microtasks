import {ChangeEvent, useRef, useState} from "react";
// import {action} from "@storybook/addon-actions";


const meta = {
    component: "UncontrolledInput",
}
export default meta


// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };


export const UncontrolledInput = () => {
    return <input/>
}
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChangeHandler}/>
        {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={() => {
            //способ из нативки нарушающий принципы Реакта
            // const el = document.getElementById('input') as HTMLInputElement
            // setValue(el.value)

            save()
        }
        }>save
        </button>
        <span>-actual value: {value} </span>
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    return <input type="text" value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    return <input type="checkbox" checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}


export const ControlledInputWithFixedValue = () => {
    return <input value={'it-incubator'}/>
}