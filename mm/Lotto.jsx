import React, { useEffect, useState } from 'react';
import numberGenerator from './numberGenerator';
import NumberColor from './NumberColor';

const Lotto = () => {
  const [jackpotNumber, setJackpotNumber] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(null);
  const [reset, SetReset] = useState(false);
  
  useEffect(() => {
    const number = numberGenerator();
    const bonus = number.pop();

    const interval = setInterval(() => {
      if (number.length)setJackpotNumber((prevNumber) => [...prevNumber, number.pop()]);

      if (!number.length) {
        clearInterval(interval);
        setBonusNumber(bonus);
      }
    }, 1000);

    return (() => {
      clearInterval(interval);
    });
  }, [reset]);

  const containerStyle = {
    display: 'flex',
  };

  const onClickReset = () => {
    setJackpotNumber([]);
    setBonusNumber(null);
    SetReset(true);
    setTimeout(() => {
      SetReset(false);
    })
  }


  return (
    <>
    <div>당첨 번호</div>
    <div style={containerStyle}>{jackpotNumber.map((el) => {
      return (
        <div id={'numberBall'} className={NumberColor(el)}>{el}</div>
      );
    })}</div>
    <div>보너스 번호</div>
    {bonusNumber !== null && (
      <>
      <div id={'numberBall'} className={NumberColor(bonusNumber)}>{bonusNumber}</div>
      <button onClick={onClickReset}>재시작</button>
      </>
    )}
    </>
  )
}

export default Lotto;