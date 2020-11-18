import React from 'react';
import ReactDOM from 'react-dom';
import UseCallbackFunc from './useCallbackFunc';
import UseMemoFunc from './UseMemoFunc';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseCallbackFunc /> */}
    <UseMemoFunc />
  </React.StrictMode>,
  document.getElementById('root')
);
