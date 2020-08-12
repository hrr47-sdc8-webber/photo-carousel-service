import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './slide.jsx';
import Arrow from './arrow.jsx';

const Modal = styled.div`
position: fixed;
z-index: 1;
padding-top: 30px;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.8);
`;

const CloseButton = styled.span`
position: fixed;
z-index: 1;
right: 10%;
top: 10%;
color: white;
border-color: rgba(0,0,0,0.9);
font-size: 30px;
font-family: "Lucida Sans Unicode", "Arial Unicode MS";
cursor: pointer;
border: 1px hidden;
width: 40px;
height: 40px;
text-align: center;
border-radius: 50%;
bottom-margin: 1px;
background-color: rgba(0,0,0,0.9);
&:hover{
  color: rgba(0,0,0,0.9);
  background-color: white;
  border-color: white;
}
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: this.props.startingPhoto,
    };
  }

  previousSlide() {
    const lastIndex = this.props.photoArray.length - 1;
    const currentPhotoIndex = this.state.currentPhoto;
    const shouldResetIndex = currentPhotoIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPhotoIndex - 1;

    this.setState({
      currentPhoto: index,
    });
  }

  nextSlide() {
    const lastIndex = this.props.photoArray.length - 1;
    const currentPhotoIndex = this.state.currentPhoto;
    const shouldResetIndex = currentPhotoIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentPhotoIndex + 1;

    this.setState({
      currentPhoto: index,
    });
  }

  render() {
    if (this.props.displayCarousel) {
      return (
        <Modal>
          <CloseButton onClick={this.props.closeCarousel}>{this.props.closeSymbol}</CloseButton>
          <div>
          <Arrow
            direction="left"
            clickFunc={this.previousSlide.bind(this)}
            symbol="&#9664;" />
          <Slide url={this.props.photoArray.length
            ? this.props.photoArray[this.state.currentPhoto].Image_url : ''} />
          <Arrow
            direction="right"
            clickFunc={this.nextSlide.bind(this)}
            symbol="&#9654;" />
            </div>
        </Modal>
      );
    }
    return null;
  }
}

Carousel.propTypes = {
  photoArray: PropTypes.array.isrequired,
  displayCarousel: PropTypes.bool.isrequired,
  startingPhoto: PropTypes.number.isrequired,
  closeCarousel: PropTypes.func,
  closeSymbol: PropTypes.string,
};

export default Carousel;
