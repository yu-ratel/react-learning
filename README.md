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

### sciprt 로 react 불러오기

### calss 사용법
