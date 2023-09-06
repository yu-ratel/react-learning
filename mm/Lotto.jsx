import React, { useCallback, useEffect, useState } from 'react';
import numberGenerator from './numberGenerator';
import NumberColor from './NumberColor';

const Lotto = () => {
  const [jackpotNumber, setJackpotNumber] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(null);
  const [reset, setReset] = useState(false);
  
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
        // setReset이 한번 재실행할 때 true가 되면서 그 다음부턴 useEffect의 의존성인 reset이 바뀌지않기 때문에 
    // 위의것들을 다 초기화 한다음 setTimeout으로 reset 초기화
  }, [reset]);

  const containerStyle = {
    display: 'flex',
  };

  const onClickReset = useCallback(() => {
    setJackpotNumber([]);
    setBonusNumber(null);
    setReset((prevReset) => !prevReset);
  }, []);


  const MemoizedHeader = React.memo(() => (
    <>
      <div>당첨 번호</div>
      <div style={containerStyle}>{jackpotNumber.map((el) => <NumberColor key={el} ballNumber={el} />)}</div>
      <div>보너스 번호</div>
    </>
  ));

  return (
    <>
    <MemoizedHeader />
    {bonusNumber !== null && (
      <>
      <div> <NumberColor key={bonusNumber} ballNumber={bonusNumber} /></div>
      <button onClick={onClickReset}>재시작</button>
      </>
    )}
    </>
  )
}

export default Lotto;


//useMemo = 결과값을 기억,  useCallback = 함수를 기억
// 두번째 인자값에서 기본값을 잘못설정해주면 기억을 잘해서 새로 값이 되어도 원본이 바뀌질 않는다.
// 그래서 두번째 인자값에는 변경될 때 변경되야하는 인자를 넣어주는게 중요하다.

