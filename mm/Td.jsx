import React, { useCallback, memo } from 'react';
import { CLICK_TD_TATA } from './TicTacToe';

const Td = memo(({ rowIndex, tdIndex, tdData, dispatch }) => {
  const onClickTd = useCallback(() => {
    if (tdData) {
      return;
    }

    dispatch({ type: CLICK_TD_TATA, row: rowIndex, td: tdIndex });
  }, [tdData]);

  return (
    <td onClick={onClickTd}>{tdData}</td>
  );
});

export default Td;