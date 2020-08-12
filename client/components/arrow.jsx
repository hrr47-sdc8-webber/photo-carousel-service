import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = ({ direction, clickFunc, symbol }) => {
  const LeftArrow = styled.span`
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 5%;
  width: 40px;
  height: 40px;
  border: 1px hidden;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  &:hover{
    background-color: rgba(0,0,0,0.9)
  }
  `;

  const RightArrow = styled.span`
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 5%;
  width: 40px;
  height: 40px;
  border: 1px hidden;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  &:hover{
    background-color: rgba(0,0,0,0.9)
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
