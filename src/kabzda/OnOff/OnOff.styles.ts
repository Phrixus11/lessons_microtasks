export const onStyle = (on: boolean) => {
    return {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
        cursor: "pointer",
    }
}

export const offStyle = (on: boolean) => ({
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: !on ? "red" : "white",
    cursor: "pointer",
})

export const indicatorStyle = (on: boolean) => ({
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
})