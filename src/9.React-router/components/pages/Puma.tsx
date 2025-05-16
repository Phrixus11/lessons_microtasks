import pumaModel1 from "../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg";
import pumaModel2 from "../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg"
import pumaModel3 from "../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg";
import {Link} from "react-router-dom";

export type PumaItem = {
  id: number
  model: string
  collection: string
  price: string
  picture: string
}
export const pumaArr: PumaItem[] = [
  {
    id: 1,
    model: 'PUMA TRXN',
    collection: 'new collection1',
    price: '100200$',
    picture: pumaModel1,

  },
  {
    id: 2,
    model: 'PUMA SUPER',
    collection: 'new collection22',
    price: '200300$',
    picture: pumaModel2
  },
  {
    id: 3,
    model: 'PUMA SUPERSKI',
    collection: 'new collection333',
    price: '300400$',
    picture: pumaModel3
  }
]

export const Puma = () => {
  return (
      <div>
        <h2>PUMA</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {pumaArr.map((puma) => (
              <Link to={`/puma/${puma.id}`} key={puma.id}>
                <img src={puma.picture} alt={puma.model}
                     style={{width: '200px', height: 'auto', marginRight: '5px'}}/>
              </Link>
          ))}
        </div>
        <p>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard
          d of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
          during the
          Renaissance.
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </p>
      </div>
  );
};

