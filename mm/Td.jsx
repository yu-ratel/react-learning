import React from 'react';
import { CLICK_TD_TATA, SET_TURN } from './TicTacToe';

const Td = ({ rowIndex, tdIndex, tdData, dispatch }) => {
  const onClickTd = () => {
    console.log(rowIndex, tdIndex, tdData);
    if (tdData) {
      return;
    }

    dispatch({ type: CLICK_TD_TATA, row: rowIndex, td: tdIndex });
    dispatch({ type: SET_TURN });
  }

  return (
    <td onClick={onClickTd}>{tdData}</td>
  );
};

export default Td;