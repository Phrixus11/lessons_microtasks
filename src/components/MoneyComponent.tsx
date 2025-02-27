import {FilterType} from "./Money.tsx";

type MoneyComponentProps = {
    currentMoney: arrayOfMoney[]
    foo: (nameFilter:FilterType)=>void
};

type arrayOfMoney ={
    banknots: string
    value: number
    number: string
}

export const MoneyComponent = ({currentMoney, foo}: MoneyComponentProps) => {
    return (
        <>
            <ul>
                {currentMoney.map((money, i) => (
                    <li key={i}>
                        <span>{money.banknots}</span>
                        <span>{money.value}</span>
                        <span>{money.number}</span>
                    </li>
                ))}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => foo('all')}>all</button>
                <button onClick={() => foo('RUBLS')}>rouble</button>
                <button onClick={() => foo('Dollars')}>dollar</button>
            </div>
        </>
    );
};