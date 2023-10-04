import React from 'react';
import Td from './Td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((_, i) => (
        <Td key={i} dispatch={dispatch} rowIndex={rowIndex} tdIndex={i} tdData={rowData[i]} />
      ))}
    </tr>
  );
};

export default Tr;