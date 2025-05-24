import {CSSProperties, FC, memo, useCallback, useState} from 'react';

const FIRST_BUTTON_BACKGROUND: CSSProperties = {background: 'tomato'};
const CONTAINER_STYLES: CSSProperties = {display: 'flex', flexDirection: 'column', gap: 10};
const BUTTON_STYLES: CSSProperties = {border: 'none', outline: 'none', color: 'white', borderRadius: 5};

type PropsType = { isChecked: boolean, onSetIsChecked: () => void };

export const Task_2 = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleSetIsChecked = useCallback(() => setIsChecked(!isChecked), [isChecked])

  const handlePlusCountValueClick = useCallback(() => setFirstCount(prevFirstCount => prevFirstCount + 1), [])

  return (
      <div style={{...CONTAINER_STYLES}}>
        <div>{`Счётчик равен: ${firstCount}`}</div>
        <Button onPlusCountValueClick={handlePlusCountValueClick}/>
        <Checkbox isChecked={isChecked} onSetIsChecked={handleSetIsChecked}/>
      </div>
  );
};

export const Button: FC<{ onPlusCountValueClick: () => void }> = memo(({onPlusCountValueClick}) => {
  return (
      <div>
        <button
            style={{...FIRST_BUTTON_BACKGROUND, ...BUTTON_STYLES}}
            onClick={onPlusCountValueClick}
        >
          Plus first counter
        </button>
      </div>
  );
})

export const Checkbox: FC<PropsType> = memo(({isChecked, onSetIsChecked}) => {
  return (
      <input type="checkbox" checked={isChecked} onChange={onSetIsChecked}/>
  );
})
