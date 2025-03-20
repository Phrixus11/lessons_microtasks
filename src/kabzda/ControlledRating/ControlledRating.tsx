import {useState} from "react";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export const ControlledRating = () => {
    const [rating, setRating] = useState<RatingType>(0)

    return (
        <div>
            <h2>Rating</h2>
            <Star selected={rating > 0} setRating={() => setRating(1)}/>
            <Star selected={rating > 1} setRating={() => setRating(2)}/>
            <Star selected={rating > 2} setRating={() => setRating(3)}/>
            <Star selected={rating > 3} setRating={() => setRating(4)}/>
            <Star selected={rating > 4} setRating={() => setRating(5)}/>
        </div>
    );
};

type StarProps = {
    selected: boolean
    setRating: () => void
}

function Star({selected, setRating}: StarProps) {

    // return selected ? <span style={{cursor: "pointer"}} onClick={setRating}><b>Star </b></span> :
    //     <span style={{cursor: "pointer"}} onClick={setRating}>Star </span>

    // refactor
    return (
        <span style={{cursor: "pointer"}} onClick={setRating}>
            {selected ? <b>Star </b> : "Star "}
        </span>
    )
}
