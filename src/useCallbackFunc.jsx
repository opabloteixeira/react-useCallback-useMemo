import React, { useEffect, useState, useCallback } from 'react';

const Button = ({...props}) => {
  useEffect(() => {
    console.log('Button: RE RENDER');
  })
  useEffect(() => {
    console.log('Button: ON CLICK CHANGED');
  }, [props.onClick])
  
  return <button {...props} />
}


function useCallbackFunc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('APP: RE-RENDER');
  })
  
  return (
    <div className="App">
      <h1>useCallback vs useMemo</h1>
      <div>
        count: {count}
      </div>
      {/* useCallback retorna a função (mantem a igualdade referencial entre renders)*/}
      {/* useMemo retorna a execução da função memorizada(mantem a igualdade referencial entre renders)*/}
      <Button onClick={useCallback(() => setCount(prev => prev +1),[])}>Increment</Button>
    </div>
  );
}

export default useCallbackFunc;
