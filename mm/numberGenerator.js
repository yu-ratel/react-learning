import React from 'react';

const numberGenerator = () => {
  const list = [];
  while (list.length !== 7) {
    const randomNumber =  Math.ceil(Math.random()* 45);
    if (!list.includes(randomNumber)) list.push(randomNumber);
  }

  return list;
}

export default numberGenerator;