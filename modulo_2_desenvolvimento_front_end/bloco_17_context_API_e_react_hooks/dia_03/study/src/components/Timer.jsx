import React, { useEffect, useState } from 'react';

function Timer() {
  let [timer, setTimer] = useState(10);
  const [isMultiple, setIsMultiple] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [endOfTime, setEndOfTime] = useState(false)

  const handleRandomNumber = () => {
    const FOUR_SECONDS = 4000;
    const randomNumber = Math.round(Math.floor(Math.random() * 100) + 1 );
    setRandomNumber(randomNumber);
    if(randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setIsMultiple(true);
    }
    setEndOfTime(true);
    setTimeout(() => {
      setTimer(10);
      setEndOfTime(false);
      setIsMultiple(false);
      stopWatch()
    }, FOUR_SECONDS)
  }
  
  const myTimer = () => {
    setTimer((timer) => timer - 1);
  }
  

  const stopWatch = () => {
    const ONE_SECOND = 1000;
    const TEN_SECONDS = 10000;
    const myInterval = setInterval(myTimer, ONE_SECOND);
    setTimeout(() => {
      clearInterval(myInterval);
      handleRandomNumber();
    }, TEN_SECONDS)
  }

  useEffect(() => {
    stopWatch();
  }, [])

  return(
    <div>
      {timer} <br /><br />
      {`Número aleatório: ${randomNumber}`}<br /><br />
      <h1>{endOfTime && (isMultiple ? "Acertou" : "Errou")}</h1>
    </div>
  )
}

export default Timer