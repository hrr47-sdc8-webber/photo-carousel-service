import React from 'react';
import styled from 'styled-components';

const GridEntry = (props) => {
  console.log(props);
  return <img src={props.photo.Image_url} />;
};

export default GridEntry;
