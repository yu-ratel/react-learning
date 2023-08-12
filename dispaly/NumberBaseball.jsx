const React = require('react');
const { useState } = require('react'); 
const NumberBaseball = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('결과');

  const randomNumberGenerator = () => {
    const list = [];

    while (list.length < 3) {
      const number = Math.floor(Math.random() * 9) + 1;
      if (list.includes(number)) continue;
      list.push(number);
    }

    return list;
  }
  
  const number = randomNumberGenerator();

  return (
    <>
    <div>숫자 야구 게임 ⚾️</div>
    <form>
      <input />
      <button> 입력 </button>
    </form>
    <div>{number}</div>
    </>
  )
}

module.exports = NumberBaseball;