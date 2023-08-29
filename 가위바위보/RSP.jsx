import React, { useState } from 'react';
import { COORDS, SCORE } from './Constant';
import useInterval from './useInterval';

const RSP = () => {
  const [computer, setComputer] = useState(COORDS.바위);
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const computerChoice = () => {
    return Object.entries(COORDS).find((v) => {
      return v[1] === computer;
    })[0];
  };
// object에서 vaule 로 key값 찾는 방법 
  const displayChange = () => {
      if (computer === COORDS.바위) {
        setComputer(COORDS.가위);
      }
      if (computer === COORDS.가위) {
        setComputer(COORDS.보);
      }
      if (computer === COORDS.보) {
        setComputer(COORDS.바위);
      }
  };

  useInterval(displayChange, isRunning ? 100 : null);

  const onClickBtn = (choice) => {
    setIsRunning(false);

    const myScroe = SCORE[choice];
    const computerScroe = SCORE[computerChoice()];
    const diff = myScroe - computerScroe;
    if (isRunning) { // 멈췄을 때 클릭을 해서 스택이 꼬이지않게 막는용도  
      setIsRunning(false);
      if (diff === 0) {
        setText('비겼습니다 !');
      }
      if ([-1, 2].includes(diff)) {
        setText('이겼습니다 !');
        setScore((prevScore) => prevScore + 1);
      }
      if ([1, -2].includes(diff)) {
        setText('졌습니다 !');
        setScore((prevScore) => prevScore - 1);
      }
      
      setTimeout(() => {
        setIsRunning(true);
      }, 1000);
    }
  }

  return (
    <>
    <div style={{ margin: `15px`}}>✊🏻Ga ✌🏻me ✋🏻</div>
    <div id ="computer" style={{ background: `url(./img.jpeg) ${computer}px 0`}} />
    <button id ="btn" onClick={() => onClickBtn('바위')}>바위</button>
    <button id ="btn" onClick={() => onClickBtn('가위')}>가위</button>
    <button id ="btn" onClick={() => onClickBtn('보')}>보</button>
    {/* 함수 내에서 onClick 핸들러를 설정할 때는 함수 자체를 전달해야 바로 실행되지 않기 때문에 함수 참조를 전달해야한다.
        ex) {onClickBtn('바위')} X {() =>onClickBtn('바위')} O*/} 
    <div>{text}</div>
    <div>현재 점수: {score}점</div>
    </>
  )
}

export default RSP;