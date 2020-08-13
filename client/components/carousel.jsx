import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './slide.jsx';
import Arrow from './arrow.jsx';

const Modal = styled.div`
position: fixed;
z-index: 1;
padding-top: 30px;
width: 100vw;
height: 100vh;
overflow: auto;
background-color: rgba(0, 0, 0, 0.8);
`;

const CloseButton = styled.span`
position: fixed;
z-index: 1;
right: 5%;
top: 10%;
color: white;
border-color: rgba(0,0,0,0.9);
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
background-color: rgba(0,0,0,0.9);
&:hover{
  color: rgba(0,0,0,0.9);
  background-color: white;
  border-color: white;
}
`;

class Carousel extends React.Component {
  render() {
    if (this.props.displayCarousel) {
      return (
        <Modal>
          <CloseButton onClick={this.props.closeCarousel}>{this.props.closeSymbol}</CloseButton>
          <div>
            <Arrow
              direction="left"
              clickFunc={this.props.previousSlide}
              symbol="&#9664;" />
            <Slide url={this.props.photoArray.length
              ? this.props.photoArray[this.props.currentPhoto].Image_url : ''} />
            <Arrow
              direction="right"
              clickFunc={this.props.nextSlide}
              symbol="&#9654;" />
          </div>
        </Modal>
      );
    }
    return null;
  }
}

Carousel.propTypes = {
  photoArray: PropTypes.array,
  displayCarousel: PropTypes.bool,
  startingPhoto: PropTypes.number,

  closeCarousel: PropTypes.func,
  nextSlide: PropTypes.func,
  previousSlide: PropTypes.func,
  closeSymbol: PropTypes.string,
};

export default Carousel;
