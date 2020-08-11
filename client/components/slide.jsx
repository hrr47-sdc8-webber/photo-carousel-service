import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Slide = ({ url }) => {
  const SlideImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  `;

  return (
    <div>
      <SlideImage src={url} />
    </div>
  );
};

Slide.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Slide;
