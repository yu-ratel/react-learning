const React = require('react');
const { useState, useRef } = require('react');

const WordRelay = () => {
  const [word, setWord] = useState('끝말잇기');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const answer = () => {
    setResult('딩동댕');
    setWord(value);
    setValue('');
  }

  const wrongAnswer = () => {
    setResult('땡');
    setValue('');
  }

  const wordRelayCheck = (e) => {
    e.preventDefault();
    word.slice(-1) === value.slice(0, 1) ? answer() : wrongAnswer();
    inputRef.current.focus();
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
    <div>
      <div>{word}</div>
      <form onSubmit={wordRelayCheck}>
        <input type='text' ref={inputRef} value={value} onChange={onChange}/>
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

/** 
 * react hooks 에서 Ref를 사용할 때에는 늘 currnet를 붙여줘야함.
 */

/** 
 * input
 * unControlledInput vs controlledInput
 * unControlledInput =>  input 에 data를 넣고 onsubmit 에서 꺼내오는 등의 정말 간단한 경우  defaultValue ={} 로 초기 value 설정 가능 e.target[0] 등으로 접근가능.
 * 그 외의 모든 경우에는 controlledInput => ex) <input type='text' ref={inputRef} value={value} onChange={onChange}/>
 * 
 */