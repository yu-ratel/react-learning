import React, { useState } from 'react';

const ResponCheck = () => {
  const [background, setBackground] = useState('waiting');
  const [text, setText] = useState('👀 클릭하여 반응속도를 체크해보세요! 👀');
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(null);
  const [result, setResult] = useState([]);

  const average = () => {
    return (
      result.length 
      ? <div>평균 시간: {(result.reduce((a, c) => a + c) / result.length) / 1000 }ms</div>
      : null
    );
  }

  const onClickScreen = () => {
    if (background === 'waiting') {
      setBackground('ready');
      setText('초록화면이 나오면 클릭하세요!');

    const newPlay = setTimeout(() => {
      setBackground('hit');
      setText('클릭!');
      setTime(Date.now());
    }, Math.floor(Math.random() * 1000) + 2000);

    setPlay(newPlay);
    }

    if (background === 'ready') {
      clearTimeout(play);
      setBackground('waiting');
      setText('저런.. 초록화면일 때 클릭해 주세요!');
    }

    if (background === 'hit') {
      const endTime = Date.now();

      setBackground('waiting');
      setText('👀 클릭하여 반응속도를 체크해보세요! 👀');
      setResult([...result, endTime - time]);
      setTime(0);
    }
  }

  return (
    <>
    <div id="screen" className={background} onClick={onClickScreen}>{text}</div>
    {average()}
    </>
  )
}

export default ResponCheck;