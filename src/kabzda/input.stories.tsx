import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    // component: input,
}


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
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
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
        <input ref={inputRef} />
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

export const СontrolledInputWithFixedValue = () => {
    return <input value={'it-incubator'}/>
}