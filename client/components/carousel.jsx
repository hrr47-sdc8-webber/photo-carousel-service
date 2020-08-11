import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './slide.jsx';
import Arrow from './arrow.jsx';

const Modal = styled.div`
position: fixed;
z-index: 1;
padding-top: 100px;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.8);
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
};

export default Carousel;
