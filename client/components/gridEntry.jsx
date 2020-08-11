import React from 'react';
import styled from 'styled-components';

const BigImage = styled.img`
max-width: 100%;
grid-row-end: span 2;
margin: auto;
grid-column-end: span 2;
transition: transform .2s;
overflow: hidden;
&:hover{
  transform: scale(1.02);
}
`;

const SmallImage = styled.img`
max-width: 99%;
margin: auto;
transition: transform .2s;
overflow: hidden;
&:hover{
  transform: scale(1.02);
}
`;

const GridEntry = (props) => {
  console.log(props.photo.Image_url);
  if (props.photo.Image_id % 3 === 1) {
    return <BigImage src={props.photo.Image_url} />;
  }
  return <SmallImage src={props.photo.Image_url} />;
};

export default GridEntry;
