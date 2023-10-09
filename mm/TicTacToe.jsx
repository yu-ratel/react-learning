import React, { useReducer, useEffect } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''], ['', '', ''], ['', '', ''], 
  ],
  recentTd : [-1, -1],
  // 최근 데이터의 좌표 확인
};

export const SET_WINNER = 'SET_WINNER';
export const SET_TURN = 'SET_TURN';
export const CLICK_TD_TATA = 'CLICK_TD_TATA';
export const RESET_GAME = 'RESET_GAME';
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
        ...state, tableData : newTableData, recentTd: [action.row, action.td],
      }
    };
    
    case SET_TURN: {
      console.log(state.turn)
      return {
        ...state, turn: state.turn === 'O' ? 'X' : 'O',
      }
    };

    case RESET_GAME: {
      return {
        ...state, turn: 'O', tableData: [['', '', ''], ['', '', ''], ['', '', '']], recentTd: [-1, -1],
      }
    }
    default:
      return state;
  };
}

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { winner, turn, tableData, recentTd } = state;

  useEffect(() => {
    const [row, td] = recentTd;
    if (row < 0) return 
    let win = false;

    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true; 
    }
    if (tableData[0][td] === turn && tableData[1][td] === turn && tableData[2][td] === turn) {
      win = true; 
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true; 
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true; 
    }

    if (win) {
      dispatch({ type: SET_WINNER, winner: turn});
      dispatch({ type: RESET_GAME });
      return;
    }

    let draw = true;
    tableData.forEach((row) => {
      row.forEach((td) => {
        if (!td) draw = false;
      });
    });

    if (draw) {
      dispatch({ type: SET_WINNER, winner: ''});
      dispatch({ type: RESET_GAME });
      return;
    }

    dispatch({ type: SET_TURN });

  }, [recentTd]);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: SET_WINNER, winner: ''})
    }, 1000)
  }, [winner]);

  return (
    <>
    <Table dispatch={dispatch} tableData={tableData} />
    {winner && <div>{winner}님 의 승리</div>}
    </>
  )
}

export default TicTacToe;

/* 하면서 부족했던 것들
삽질 1 
import Table from './Table'; 의 경로를 소문자로 해놔서 아무리 저장을 해도
webpack-dev-server가 변경점을 찾지못함..

*/