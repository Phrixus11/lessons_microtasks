import React from "react";
import s from "./Clock.module.css";

type ClockProps = {
  date: Date
}

const getStylesForMinutesAndSecondsArrow = (number: string | number): React.CSSProperties => {
  return {
    transform: `rotate(${+number*6-90}deg) translate(50%)` ,
  }
}

const getStylesForHoursArrow = (number: string | number): React.CSSProperties => {
  return {
    transform: `rotate(${+number*30-90}deg) translate(50%)` ,
  }
}

export const AnalogClock:React.FC<ClockProps> = ({date}) => {

  return (
      <div className={s.watchStyles}>
        <div className={`${s.arrow} ${s.secondsArrow}`} style={getStylesForMinutesAndSecondsArrow(date.getSeconds())}></div>
        <div className={`${s.arrow}`} style={getStylesForMinutesAndSecondsArrow(date.getMinutes())}></div>
        <div className={`${s.arrow} ${s.hoursArrow}`} style={getStylesForHoursArrow(date.getHours())}></div>
      </div>
  )
}