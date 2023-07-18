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
