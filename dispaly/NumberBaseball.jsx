const React = require('react');
const { useState } = require('react'); 

const NumberBaseball = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('결과');
  let ballCount = 0;
  let strikeCount = 0;

  const randomNumberGenerator = () => {
    const list = [];

    while (list.length < 3) {
      const number = Math.floor(Math.random() * 9) + 1;
      if (list.includes(number)) continue;
      list.push(number);
    }

    return list;
  }
  
  const onChange = (e) => {setValue(e.target.value)};

  const ballCheck = (computer, user) => {
    computer.map((el, idx) => {
      if (user.includes(el) && el != user[idx]) {
        ballCount++;
      }
    })

  }

  const strikeCheck = (computer, user) => {
    computer.map((el, idx) => {
      if (el === user[idx]) strikeCount ++;
    })
  }

  const [computer, setComputer] = useState(randomNumberGenerator());
  
  const gameCheck = (e) => {
    e.preventDefault();
    const user = value.split('').map(Number)

    strikeCheck(computer, user);
    ballCheck(computer, user);

    if (strikeCount === 3) setResult('정답');
    else setResult(`${strikeCount} 스트라이크 ${ballCount} 볼`);

    strikeCount = 0;
    ballCount = 0;
  }

  return (
    <>
    <div>숫자 야구 게임 ⚾️</div>
    <form onSubmit={gameCheck}>
      <input type='number' value={value} onChange={onChange}/>
      <button> 입력 </button>
    </form>
    <div>{result}</div>
    </>
  )
}

module.exports = NumberBaseball;