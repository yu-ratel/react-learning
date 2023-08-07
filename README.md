# react (single page application)

## 1일차

### 사용하는 이유

> 데이터를 바꾸면 화면도 따라서 바뀌는 일체형 웹을 편하게 구현하기 위해서

### babel

> jsx 부분을 js script 로 바꿔서 html 이 읽을 수 있게함.

### 17 vs 18 version 차이점

> ReactDOM.rander(< />, document.querySelector('#Root')); 17 version

> ReactDOM.creactRoot(document.querySelector('#Root')).rander(< />); 18 version

### react 에서 조심해야할 것

- 객체를 함부로 건들지 않기
  > 깊은복사 x 얕은복사 o ex) slice, concat [O] push, pop, splice [X]

## 2 일차

### 겪었던 오류

- html live server 구동 문제
  > ip문제인줄 알고 live server settings 에서 ipconfig getifaddr en0 를 이용해 ip 를 바꿨으나 해결 x

해결법

> 파일명이 한글이라 오류가 났었던 것 => live server가 한글을 인식하지 못하기에 폴더명, 파일명 등 한글로 작성하지 않아야한다.

### 과정 && 기록

- sciprt 로 react 불러오기

- react 는 모든 state 를 관리해줘야한다

  > input 안의 글자가 보이는 것 조차도 관리해줘야함 => 귀찮지만 에러가 훨씬 적어 관리하기 편함

- 🌟 기본 Java Script event handler
  - onClick
    > 클릭 되었을 때
  - onChange
    > 값이 변경 되었을 때
  - onSubmit
    > form 이 제출 될 때
  - onLoad
    > 웹 페이지나, 이미지 같은 리소스가 로드 되었을 때
  - onInput
    > 값이 변경 될 때
  - onFocus
    > 포커스를 받았을 때
  - onBlur
    > 포커스를 잃었을 때

## 3일차

### React Hooks

> 함수형 컴포넌트에서 state 와 ref 기능을 쓸 수 있는 것

- 장점

      코드가 간결해진다.
      명시적이다.
      재사용이 가능하다.
      setState를 모아서 처리하기 때문에
      불필요한 렌더x 성능 최적화

- state 지정법

  > class this.state { value : ''}

      this.state { value : ''}

> hooks

    [value, setValue] = useState('')

- ref (dom 이나 react 엘리먼트에 접근하는법)
  > class
       refFoucs = (c) => {this.input = c};
       ref={this.refFoucs}

> hooks

     refFoucs = React.useRef()
     ref{refFoucs}

### 웹팩

> 정적 모듈 번들러(static module bundler)

> 여러 파일을 하나의 번들로 묶어주는 역할을한다.

> 코드 번들링, 최적화, 모듈화, 리소스 관리 등 다양한 기능이있다.

## webpack 설정관리 중요한5가지

- Entry
  > 시작
- Output
  > 결과
- Loaders
  > 모듈
- Plugins
  > 추가적인 작업 (확장)
- Mode
  > 개발모드, 배포모드

#### 작성흐름

> entry, module, plugins, output

## 4일차

## bable webpack (json) 기본적인 설정

- "@babel/core": "^7.22.9"

  > bable의 기본적인 것들

- "@babel/preset-env": "^7.22.9"

  > 브라우저에 맞게 최신문법을 옛날문법 지원

- "@babel/preset-react": "^7.22.5"

  > jsx, react 등 지원 가능

- "bable-loader": "^0.0.1-security"
  > bable 과 webpack 연결
