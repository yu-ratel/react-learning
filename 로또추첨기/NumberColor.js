import React, { memo } from 'react';

const NumberColor = memo(({ ballNumber }) => {
  let background;
  if (ballNumber < 10) background = 'yellow';
  else if (ballNumber < 30) background = 'red';
  else if (ballNumber < 20) background = 'blue';
  else if (ballNumber < 40) background = 'gray';
  else background = 'green';

  return (
    <div className='numberBall' style={{ background }}>{ballNumber}</div>
  )
});

export default NumberColor;