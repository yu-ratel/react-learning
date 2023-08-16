import React, { useState } from 'react'; 
import Try from './Try';

const randomNumberGenerator = () => {
  const list = [];

  while (list.length < 3) {
    const number = Math.floor(Math.random() * 9) + 1;
    if (list.includes(number)) continue;
    list.push(number);
  }

  return list;
}

const NumberBaseballGame = () => {
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(randomNumberGenerator);
  //useState의 함수를 넣고 ()하면 호출하기 때문에 ()를 쓰지않으면 lazy init 되어 처음 return 값이 초기값으로 설정되고
  //불필요한 호출이 일어나지않는다.
  const [tries, setTries] = useState([]);
  const [result, setResult] = useState('결과');
  
  const onChange = (e) => {setValue(e.target.value)};

  const ballCheck = (answer, user) => {
    let ball = 0;
    answer.map((el, idx) => {
      if (user.includes(el) && el !== user[idx]) ball++;
    })
    return ball;
  }

  const strikeCheck = (answer, user) => {
    let strike = 0;
    answer.map((el, idx) => {
      if (el === user[idx]) strike++;
    })
    return strike;
  }

  const gameCheck = (e) => {
    e.preventDefault();

    const user = value.split('').map(Number);
    const strikeCount = strikeCheck(answer, user);
    const ballCount = ballCheck(answer, user);


    if (strikeCount === 3) {
      setResult('정답');
      setTries([]);
      setAnswer(randomNumberGenerator());
      setValue('');
    }
    else setTries((prevTries) => [...prevTries, { try: value, result: `${strikeCount} 스트라이크 ${ballCount} 볼`}]);


    console.log(ballCount,strikeCount, answer)
  }

  return (
    <>
    <div>숫자 야구 게임 ⚾️</div>
    <form onSubmit={gameCheck}>
      <input type='number' value={value} onChange={onChange}/>
      <button> 입력 </button>
    </form>
    <div>시도 : {tries.length} 번</div>
    <div>{result}</div>
    <ul>{tries.map((el, idx) => {
      return (
        <Try key={el + idx} tryInfo={el} />
      );
    })}</ul>
    </>
  )
}

export default NumberBaseballGame;