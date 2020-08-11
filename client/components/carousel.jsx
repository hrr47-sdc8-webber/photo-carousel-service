import React from 'react';
import PropTypes from 'prop-types';
import Slide from './slide.jsx';
import Arrow from './arrow.jsx';

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
        <div className='carousel' style={{ display: 'block' }}>
          <Arrow
            direction="left"
            clickFunc={this.previousSlide.bind(this)}
            symbol="&#9664;" />

          <Slide url={this.props.photoArray.length ? this.props.photoArray[this.state.currentPhoto].Image_url : ''} />

          <Arrow
            direction="right"
            clickFunc={this.nextSlide.bind(this)}
            symbol="&#9654;" />
        </div>
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
