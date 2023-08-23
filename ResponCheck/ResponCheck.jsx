import React, { useState, useRef } from 'react';

const ResponCheck = () => {
  const [background, setBackground] = useState('waiting');
  const [text, setText] = useState('👀 클릭하여 반응속도를 체크해보세요! 👀');
  const [result, setResult] = useState([]);
  const startTime = useRef(0);
  const endTime = useRef(0);
  // state는 상태가 바뀌면 rander 되기 때문에 숫자가 변해도 rander에 영향을 끼치고 싶지않은 
  // 요소라면 useRef를 이용 할 수 있다. 

  const onClickScreen = () => {
    if (background === 'waiting') {
      setBackground('ready');
      setText('초록화면이 나오면 클릭하세요!');

    setTimeout(() => {
      setBackground('hit');
      setText('클릭!');
      startTime.current = Date.now();
    }, Math.floor(Math.random() * 1000) + 2000);
    }

    if (background === 'ready') {
      clearTimeout(startTime.current);
      setBackground('waiting');
      setText('저런.. 초록화면일 때 클릭해 주세요!');
    }

    if (background === 'hit') {
      endTime.current = Date.now();
      setBackground('waiting');
      setText('👀 클릭하여 반응속도를 체크해보세요! 👀');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current] // 항상 useRef의 값을 넣어 사용할 때는 current를 써야한다.
      });
    }
  }

  const onReset = () => {
    setResult([]);
  }

  const average = () => {
    return (
      result.length 
      ? <>
        <div>평균 시간: {(result.reduce((a, c) => a + c) / result.length) / 1000 }초</div>
        <button onClick={onReset}>초기화</button>
        </>
      : null
    );
  }

  return (
    <>
    <div id="screen" className={background} onClick={onClickScreen}>{text}</div>
    {average()}
    </>
  )
}

export default ResponCheck;