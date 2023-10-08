import React from 'react';
import { CLICK_TD_TATA } from './TicTacToe';

const Td = ({ rowIndex, tdIndex, tdData, dispatch }) => {
  const onClickTd = () => {
    console.log(rowIndex, tdIndex, tdData);
    if (tdData) {
      return;
    }

    dispatch({ type: CLICK_TD_TATA, row: rowIndex, td: tdIndex });
  }

  return (
    <td onClick={onClickTd}>{tdData}</td>
  );
};

export default Td;