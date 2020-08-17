import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './slide.jsx';
import Arrow from './arrow.jsx';

const Modal = styled.div`
position: fixed;
z-index: 2;
width: 100vw;
left: 0%;
top: 0%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.9);
`;

const CloseButton = styled.span`
position: fixed;
z-index: 2;
right: 5%;
color: white;
border-color: rgba(0,0,0,1);
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
font-family: "Lucida Sans Unicode", "Arial Unicode MS";
cursor: pointer;
border: 1px hidden;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: rgba(0,0,0,1);
&:hover{
  color: rgba(0,0,0,1);
  background-color: white;
  border-color: white;
}
`;

const OpenButton = styled.span`
position: fixed;
z-index: 2;
right: 10%;
color: white;
border-color: rgba(0,0,0,1);
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
font-family: "Lucida Sans Unicode", "Arial Unicode MS";
cursor: pointer;
border: 1px hidden;
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ItemCount = styled.div`
position: fixed;
font-family: Roboto, "Helvetica Neue", sans-serif;
color: white;
right: 15%;
z-index: 2;
height: auto;
`;

const RestaurantName = styled.div`
position: absolute;
font-family: Roboto, "Helvetica Neue", sans-serif;
color: white;
left: 50%;
z-index: 2;
height: auto;
font-weight: bold;
`;

const TopBar = styled.div`
position: fixed;
margin-top: 40px;
margin-bottom: 40px;
width: 100%;
z-index: 3;
display: block;
`;

const PhotoWrapper = styled.div`
position: fixed;
height: 50vh;
top: 25%;
left: 50%;
width: auto;
margin-top: 5px;
`;

const Carousel = (props) => {
  if (props.displayCarousel) {
    return (
      <Modal tabIndex={0} onKeyDown={(event) => props.handleKeyPress(event)}>
        <TopBar>
          <RestaurantName> {props.name} </RestaurantName>
          <ItemCount >{props.currentPhoto + 1} of {props.photoArray.length}</ItemCount>
          <OpenButton onClick={props.openGridModal} > {props.gridIcon}</OpenButton>
          <CloseButton onClick={props.closeCarousel}>{props.closeSymbol}</CloseButton>
        </TopBar>
        <PhotoWrapper>
          <Arrow
            direction="left"
            clickFunc={props.previousSlide}
            symbol="&#9664;" />
          <Slide url={props.photoArray.length
            ? props.photoArray[props.currentPhoto].Image_url : ''} />
          <Arrow
            direction="right"
            clickFunc={props.nextSlide}
            symbol="&#9654;" />
        </PhotoWrapper>
      </Modal>
    );
  }
  return null;
};

Carousel.propTypes = {
  photoArray: PropTypes.array,
  displayCarousel: PropTypes.bool,
  closeCarousel: PropTypes.func,
  closeSymbol: PropTypes.string,
  currentPhoto: PropTypes.number,
  handleKeyPress: PropTypes.func,
  nextSlide: PropTypes.func,
  previousSlide: PropTypes.func,
  name: PropTypes.string,
};

export default Carousel;
