const React = require('react');
const { useState } = require('react');

const WordRelay = () => {
  const [word, setWord] = useState('끝말잇기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const answer = () => {
    setResult('딩동댕');
    setWord(value);
    setValue('');
  }

  const wrongAnswer = () => {
    setResult('땡');
  }

  const wordRelayCheck = (e) => {
    e.preventDefault();
    word.slice(-1) === value.slice(0, 1) ? answer() : wrongAnswer();
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
    <div>
      <div>{word}</div>
      <form onSubmit={wordRelayCheck}>
        <input type='text' value={value} onChange={onChange}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
    </>
  );
};

module.exports = WordRelay;


/**
 * 시도하면서 만났던 오류
 * You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| const WordRelay = require('./WordRelay');
| 
> ReactDom.render(<WordRelay />, document.querySelector('#root'));

원인 : jsx는 javascript문법이 아니기 때문에 인식 할 수 없음

해결법 : bable 을 이용 bable안에서 jsx를 또 설정해줘야함. 
 */