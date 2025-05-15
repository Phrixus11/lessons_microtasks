import {useEffect, useState} from "react";
import {AnalogClock} from "./AnalogClock";
import {DigitalClock} from "./DigitalClock";





export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => {clearInterval(id)}
  }, [])

  return (
      <div>
        <DigitalClock date={date}/>
        <AnalogClock date={date}/>
      </div>
  );
};



