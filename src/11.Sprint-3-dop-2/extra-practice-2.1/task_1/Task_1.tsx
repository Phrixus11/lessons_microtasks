import {useState} from 'react';

const CONTAINER_STYLES: React.CSSProperties = {display: 'flex', flexDirection: 'column', gap: 10};

// type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

export const Task_1 = () => {



  return (
    <div style={{...CONTAINER_STYLES}}>
      <Input />
      <Title title="Я title" />
    </div>
  );
};

const Title = (props: { title: string }) => <h3>{props.title}</h3>

const Input= () => {
  const [value, setValue] = useState('');
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={(e)=>setValue(e.currentTarget.value)} />
  );
}
