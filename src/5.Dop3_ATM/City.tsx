import {CurrentBankomat} from "./CurrentBankomat.tsx";
import {MoneyType} from "./App_ATM.tsx";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки
}

export const City = ({data}:CityPropsType ) => {
// с деструктуризацией пожалуйста


    const mappedMoney = data.map((el: MoneyType) => (
        <CurrentBankomat
            key={el.id}
            money={el}
        />
    ))

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`