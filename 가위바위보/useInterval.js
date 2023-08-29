import React, {useRef, useEffect} from 'react';

const useInterval = (callback, delay) => {
  const saveCallback = useRef();

  useEffect(() => {
    saveCallback.current = callback;
  });
  // saveCallback 에 callback 함수 저장 

  useEffect (() => {
    const tick = () => {
      saveCallback.current()
    }
    // tick 을 실행하면 saveCallback 에 담겨있던 callback 실행
    
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return saveCallback.current;
}
export default useInterval;