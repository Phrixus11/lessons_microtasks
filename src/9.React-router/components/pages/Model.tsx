import {useParams} from 'react-router-dom';
import {adidasArr, type AdidasItem} from './Adidas'
import {pumaArr, type PumaItem} from "./Puma";

type ModelType = Record<string, PumaItem[] | AdidasItem[]>

const crossModels: ModelType = {
  adidas: adidasArr,
  puma: pumaArr,
}


export const Model = () => {
  const params = useParams();


  // let model: ModelType = []
  // if (params.model === 'adidas') model = adidasArr.find((adidas) => (adidas.id === Number(params.id)));
  // if (params.model === 'puma') model = pumaArr.find((puma) => (puma.id === Number(params.id)));

  const model = params.model
      ? crossModels[params.model].find((el) => (el.id === Number(params.id)))
      : null


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

        {/*variant 2*/}
        {model
            ? (
                <>
                  <h3>{model.model}</h3>
                  <h2>{model.collection}</h2>
                  <div>{model.price}</div>
                  <img style={{width: '200px', height: 'auto', marginRight: '5px'}} src={model.picture} alt=""/>
                </>
            )
            : 'модель отсуствует'}


      </>
  );
};