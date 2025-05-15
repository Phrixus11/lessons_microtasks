
type Props = {
  date: Date
};

function getTwoDigitsString(number: number) {
  return number < 10
      ? `0${number}`
      : number
}

export const DigitalClock = ({date}: Props) => {

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
      </div>
  );
};