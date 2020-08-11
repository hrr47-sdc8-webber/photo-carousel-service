import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = ({ direction, clickFunc, symbol }) => {
  const LeftArrow = styled.span`
  color: white;
  position: absolute;
  left: 100px;
  top: 50%;
  &:hover{
    cursor: pointer;
  }
  `;

  const RightArrow = styled.span`
  color: white;
  position: absolute;
  right: 100px;
  top: 50%;
  &:hover{
    cursor: pointer;
  }
  `;

  if (direction === 'left') {
    return (
      <LeftArrow
        className={`slide-arrow ${direction}`}
        onClick={clickFunc}>
        {symbol}
      </LeftArrow>
    );
  }
  return (
    <RightArrow
      className={`slide-arrow ${direction}`}
      onClick={clickFunc}>
      {symbol}
    </RightArrow>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isrequired,
  symbol: PropTypes.string.isRequired,
};

export default Arrow;
