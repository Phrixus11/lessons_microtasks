import {useState} from "react";
import {MoneyComponent} from "./MoneyComponent.tsx";

export type FilterType = 'all' | 'Dollars' | 'RUBLS'

export const Money = () => {
    const [money] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money
    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")

    } else if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }



    const onClickFilterHandler = (nameFilter: FilterType ) => {
        setFilter(nameFilter)
    }

    return (
        <MoneyComponent currentMoney={currentMoney} foo={onClickFilterHandler}/>
    );
};