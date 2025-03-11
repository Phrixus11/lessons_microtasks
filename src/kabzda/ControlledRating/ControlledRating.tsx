import {useState} from "react";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export const ControlledRating = () => {
    const [rating, setRating] = useState<RatingType>(0)

    return (
        <div>
            <h2>Rating Movie</h2>
            <Star selected={rating > 0}/><button onClick={()=>setRating(1)}>1</button>
            <Star selected={rating > 1}/><button onClick={()=>setRating(2)}>2</button>
            <Star selected={rating > 2}/><button onClick={()=>setRating(3)}>3</button>
            <Star selected={rating > 3}/><button onClick={()=>setRating(4)}>4</button>
            <Star selected={rating > 4}/><button onClick={()=>setRating(5)}>5</button>
        </div>
    );
};

type StarProps = {
    selected: boolean
}

function Star({selected}: StarProps) {

    return selected ? <span><b>Star </b></span> : <span>Star </span>

}
