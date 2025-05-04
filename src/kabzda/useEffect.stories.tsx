import {useEffect, useRef, useState} from "react";

export default {
  title: 'useEffect',
}


export const UseEffectDemo = () => {

  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState(0);

  console.log('render component')

  useEffect(() => {
    console.log('useEffect every render')
  });

  useEffect(() => {
    console.log('useEffect first render')
  }, []);

  useEffect(() => {
    console.log('useEffect first render and counter change')
    document.title = counter.toString();
  }, [counter]);


  return (
      <>
        <button onClick={() => setCounter(prevState => prevState + 1)}>counter+</button>
        {counter}
        <button onClick={() => setFake(prevState => prevState + 1)}>fake+</button>
        {fake}

      </>
  )
}

export const UseEffectSetTimeout = () => {

  const [counter, setCounter] = useState(0);
  const [fake, setFake] = useState(0);

  console.log('render SetTimeout component')

  useEffect(() => {
    console.log('useEffect first render')
    setTimeout(() => {
      console.log('setTimeout ')
      document.title = counter.toString();
    }, 1000)
  }, [counter]);


  return (
      <>
        <button onClick={() => setCounter(prevState => prevState + 1)}>counter+</button>
        {counter}
        <button onClick={() => setFake(prevState => prevState + 1)}>fake+</button>
        {fake}

      </>
  )
}

export const UseEffectSetInterval_Clock = () => {

  const [counter, setCounter] = useState(()=>{
    return new Date().toLocaleTimeString();
  });
  const [startTimer, setStartTimer] = useState(false);
  const timerId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {

    timerId.current = setInterval(() => {
      setCounter(() =>  new Date().toLocaleTimeString());
    }, 1000)
    return () => clearInterval(timerId.current? timerId.current: '')
  }, [startTimer]);

  return (
      <>
        Clock: {counter}
        <hr/>
        <button onClick={()=>setStartTimer(!startTimer)}>start clock</button>
        <button onClick={()=>clearInterval(timerId.current? timerId.current: '')}>stop clock</button>
      </>
  )
}