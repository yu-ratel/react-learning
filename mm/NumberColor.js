import React from 'react';

const NumberColor = (ballNumber) => {
  if (ballNumber < 10) return 'yellow';
  if (ballNumber < 20) return 'blue';
  if (ballNumber < 30) return 'red';
  if (ballNumber < 40) return 'gray';
  return 'green';
}

export default NumberColor;