import React from 'react';

const Arrow = ({ direction, clickFunc, symbol }) => (<div
  className={`slide-arrow ${direction}`}
  onClick={clickFunc}>
  {symbol}
</div>
);

export default Arrow;
