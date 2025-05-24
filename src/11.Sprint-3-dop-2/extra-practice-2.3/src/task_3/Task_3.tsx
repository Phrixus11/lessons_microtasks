import React, {ChangeEvent, type ReactNode, useState} from 'react';


type Props = {
  children: ReactNode
}

export const Task_3:React.FC<Props> = (props) => {
  const [value, setValue] = useState('');
  // можно использовать useRef который можно повесить на input

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>
      <div>Лагает когда изменяется value</div>
      <input type="text" value={value} onChange={onChange} />
      {props.children}
    </div>
  );
};


// 1. с помощью композиции, вынос в отдельный компонент
// const Input = () => {
//   const [value, setValue] = useState('');
//
//   return (
//       <input type="text" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}} />
//   )
// }