import React, { useState } from 'react';

const Lotto = () => {
  const [ball, setBall] = useState('yellow');
  const [number, setNumber] = useState([]);

  const numberList = () => {
    const randomNumber =  Math.ceil(Math.random()* 45);
  }

  return (
    <>
    <div id="numberBall" className={ball}>{number}</div>
    </>
  )
}

export default Lotto;