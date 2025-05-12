import {useParams} from 'react-router-dom';
import {adidasArr} from './Adidas'


export const Model = () => {
  const params = useParams();

  const model = adidasArr.find((adidas) => (adidas.id === Number(params.id)));

  console.log(params);
  return (
      <>
        {/*variant 1 - не самый правильный, бежит по всему массиву каждый раз*/}
        {/*{adidasArr.map((adidas) => (*/}
        {/*    adidas.id === Number(params.id)*/}
        {/*        ? <>*/}
        {/*          <h3>{adidas.model}</h3>*/}
        {/*          <div>{adidas.price}</div>*/}
        {/*          <img  style={{width: '200px', height: 'auto', marginRight: '5px'}} src={adidas.picture} alt=""/>*/}
        {/*        </>*/}
        {/*        : ''*/}
        {/*))}*/}

        variant 2
          {model
              ? <>
                <h3>{model.model}</h3>
                <div>{model.price}</div>
                <img style={{width: '200px', height: 'auto', marginRight: '5px'}} src={model.picture} alt=""/>
              </>
              : 'модель отсуствует'}


      </>
  );
};