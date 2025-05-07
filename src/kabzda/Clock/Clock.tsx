import React, {useEffect, useState} from "react";


function getTwoDigitsString(number: number) {
  return number < 10
      ? `0${number}`
      : number
}

const getStylesForClockArrow = (number: string | number): React.CSSProperties => {
  return {
    position: 'absolute',
    left: "25%",
    top: "50%",
    backgroundColor: "red",
    width: "50px",
    height: "2px",
    transform: `rotate(${+number*6-90}deg) translate(50%)` ,
    rotate: '90ged'
  }
}

const watchStyles: React.CSSProperties = {
  margin: '50px 15px',
  position: 'relative',
  width: '110px',
  height: '110px',
  backgroundColor: 'lightblue',
  borderRadius: '50%'
}

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => {clearInterval(id)}
  }, [])

  const secondDigits = getTwoDigitsString(date.getSeconds())
  const minutesDigits = getTwoDigitsString(date.getMinutes())
  const hoursDigits = getTwoDigitsString(date.getHours())


  return (
      <div>
        <span>{hoursDigits}</span>
        :
        <span>{minutesDigits}</span>
        :
        <span>{secondDigits}</span>

        <div style={watchStyles}>
          <div style={getStylesForClockArrow(secondDigits)}></div>
          <div style={getStylesForClockArrow(minutesDigits)}></div>
          <div style={getStylesForClockArrow(hoursDigits)}></div>
        </div>
      </div>
  );
};