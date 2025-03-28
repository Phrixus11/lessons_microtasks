
type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    rating: RatingType
}

export const ControlledRating = (props:ControlledRatingPropsType) => {


    return (
        <div>
            <h2>Rating</h2>
            <Star selected={props.rating > 0}/>
            <Star selected={props.rating > 1}/>
            <Star selected={props.rating > 2}/>
            <Star selected={props.rating > 3}/>
            <Star selected={props.rating > 4}/>
        </div>
    );
};

type StarProps = {
    selected: boolean

}

export function Star({selected}: StarProps) {

    // return selected ? <span style={{cursor: "pointer"}} onClick={setRating}><b>Star </b></span> :
    //     <span style={{cursor: "pointer"}} onClick={setRating}>Star </span>

    // refactor
    return (
        <span style={{cursor: "pointer"}}>
            {selected ? <b>Star </b> : "Star "}
        </span>
    )
}
