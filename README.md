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

## 5일차

- webpack build 및 끝말잇기 game

## 6일차

### import vs require

> 두개 모두 사용법이나 활용도는 비슷하지만 환경에 따라 쓰는 문법이 달라진다. (babel로 호환가능)

- import
  > 보통의 module 내보내고 불러오는 문법
- require
  > node 전용 module 문법 (Common Js)

## 7일차

### react props

- react에서 props는 다른 컴포넌트에서 받아 올 수 있다.

- 내보내기
  > `<div>{props.value.00}</div>`
- 불러오기
  > `<Try value={} index={}>`

> props 를 사용하는 순간 자식 부모의 관계가 생기기 때문에 후에 많은 상속이 이루어지면 redux 같은 것들이 사용되고 React의 복잡한 문제가 시작^~^..

### react push

> react 에서 push 는 불변성 과 상태관리 측면에서 권장되지 않는다.

> 🌟 push를 사용하는 순간 원본 배열이 변경되기 때문에 불변성이 깨지고 리액트의 상태 감지가 제대로 동작하지 않기 떄문에 배열을 복제하고 변경사항을 반영한 새로운 배열을 만들어야한다

> ex) const origin = [1, 2, 3]; <br> const new = origin.concat(4) <br> || const new = [...origin, 4];

## 8일차

### react 의 성능개선

- shouldcomponentupdate (reRander 방지)

> 리액트의 setState를 호출하는 순간 바뀌지 않는 요소들도 rander 가 되기 때문에 react에서 제공하는 shouldcomponentupdate를 이용하여 조건에 부합할 때 rander되게 해줘야 한다.

- pureComponent (class전용)

> 위의 방법이 조금은 번거롭다면 편하게 쓸 수 있지만
> 새로운 배열이나 객체를 만들어서 사용해야하고, 배열이나 객체 내부에 넣는 거 보단 단일로 사용하는게 좋다.

- react 의 memo

> 부모컴포넌트가 rander 되었을 때 자식 컴포넌트가 rander 되는것을 막아주는 함수형 컴포넌트에서 사용할 수 있는 pureComponent

> memo를 사용하면 컴포넌트의 이름이 임의로 바뀌기 때문에 displayName = '' 로 원하는 컴포넌트의 이름을 원상태로 돌려주어야한다.

## 9일차

### react life cycling

#### class

> constructor -> render -> ref -> componentDidMount(대부분 비동기 요청 ) -> (setState / props) 변경시 ->
> shouldComponentUpdate() -> render -> componentDidUpdate() -> componentWillUnmount()(비동기 요청 정리, 보통 자식컴포넌트가 사라지기전에 메모리 누수를 막기 위해 사용) -> 소멸

#### hooks

> hooks에는 life cycling이 없다.

> 하지만 useEffect로 componentDidMount, shouldComponentUpdate, componentWillUnmount 의 역할을
> 비슷하게 수행할 수 있다. class 라이프사이클이 모든 state를 동시에 담당한다면 useEffect 는 state 하나하나를 담당하는게 일반적이다.

## 10일차

### 오늘의 삽질

- import 오류
  > webpack Sever가 처음에는 새로고침을 해주고 그 다음부턴 파일을 인식을 못해서 리로딩이 안되길래
  > 여러가지를 건드려보았지만 import한 파일 경로가 문제였다.. 오타확인 필수..

### useEffect, useMemo, useCallback

#### 공통점

> 두번째 인자에서 컨트롤할 수 있다

> ex) useEffect(() => {}, []) 두번째 인자에 들어간 []은 의존성으로
> 요소가 들어간다면 그 요소가 변경 될 때 마다 실행된다 빈배열을 넣는다면 처음실행되고 다시 실행되지않는다.

- useEffect

  > class의 componentDidMount, shouldComponentUpdate 등 라이프사이클의 역할을 대신해준다.

- useMemo, useCallback
  > 두개 다 memoization 을 하는 목적으로 불필요한 값변경과 함수변경을 막아준다.
  > useMemo 는 값을 저장하고 useCallback은 함수를 저장한다.
  > 바뀌지 않는 자식 컴포넌트등 리액트는 전체 함수를 실행시키기 때문에 불필요한 리렌더링이 될 때가 많은데 그것들을 유용하게 막아준다.
