import React, { useReducer, useEffect } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''], ['', '', ''], ['', '', ''], 
  ],
};

export const SET_WINNER = 'SET_WINNER';
export const SET_TURN = 'SET_TURN';
export const CLICK_TD_TATA = 'CLICK_TD_TATA';
// action이 중복되거나 누락되어 예기치 못한 상황이 생기는걸 막기 위하여 상수로 빼두어서 사용하는게 좋다.

const reducer = (state, action) => {

  switch (action.type) {
    case SET_WINNER: {
      return {
        ...state, winner : action.winner,
      }
      // react 에서는 직접 state.winner = action.winner 처럼 직접할당하면 불변성에 어긋나기 떄문에 새로운 state를 얕은복사해서 바꿔줘야함.
    };

    case CLICK_TD_TATA: {
      const newTableData = [...state.tableData];
      newTableData[action.row] = [...newTableData[action.row]];
      newTableData[action.row][action.td] = state.turn;
      return {
        ...state, tableData : newTableData,
      }
    };
    
    case SET_TURN: {
      console.log(state.turn)
      return {
        ...state, turn: state.turn === 'O' ? 'X' : 'O',
      }
    };
    default:
      return state;
  };
}

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { winner, turn, tableData } = state;
  
  useEffect(() => {
    dispatch({ type: SET_TURN });
  },[])
  return (
    <>
    <Table dispatch={dispatch} tableData={tableData} />
    <div>{winner}님 의 승리</div>
    </>
  )
}

export default TicTacToe;

/* 하면서 부족했던 것들
삽질 1 
import Table from './Table'; 의 경로를 소문자로 해놔서 아무리 저장을 해도
webpack-dev-server가 변경점을 찾지못함..

*/