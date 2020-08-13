import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import GridEntry from './components/gridEntry.jsx';
import Carousel from './components/carousel.jsx';

const Grid = styled.div`
position: fixed;
z-index: 0;
display: grid;
overflow: hidden;
grid-template-columns: 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw 16vw;
grid-template-rows: 12vw 12vw;
grid-auto-flow: column;
grid-row-gap: 3px;
grid-column-gap: 2px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArray: [],
      displayCarousel: false,
      gridLayout: {},
      currentPhoto: 0,
    };
  }

  retrievePhotos(restaurantID) {
    const options = {
      method: 'get',
      url: `api/photos/${restaurantID}`,
      failure: () => {
        console.log('Request failed');
      },
      complete: (res) => {
        this.setState({ photoArray: res.responseJSON });
        console.log(res.responseJSON);
      },
    };
    $.ajax(options);
  }

  openCarousel(photoNumber) {
    this.setState({
      currentPhoto: photoNumber - 1,
      displayCarousel: true,
    });
  }

  closeCarousel() {
    this.setState({
      displayCarousel: false,
    });
  }

  componentDidMount() {
    this.retrievePhotos(window.location.pathname.split('/')[1]);
  }

  previousSlide() {
    const lastIndex = this.state.photoArray.length - 1;
    const currentPhotoIndex = this.state.currentPhoto;
    const shouldResetIndex = currentPhotoIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentPhotoIndex - 1;

    this.setState({
      currentPhoto: index,
    });
  }

  nextSlide() {
    const lastIndex = this.state.photoArray.length - 1;
    const currentPhotoIndex = this.state.currentPhoto;
    const shouldResetIndex = currentPhotoIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentPhotoIndex + 1;

    this.setState({
      currentPhoto: index,
    });
  }

  render() {
    return (
      <div>
        <div className='grid'>
          <Grid>
            {this.state.photoArray.map((photo, i) => <GridEntry
              key={i} photo={photo} openCarousel={this.openCarousel.bind(this)}
              closeCarousel={this.closeCarousel.bind(this)}
            />)}
          </Grid>
        </div>
        <div>
          <Carousel photoArray={this.state.photoArray}
            displayCarousel={this.state.displayCarousel}
            currentPhoto={this.state.currentPhoto}
            closeCarousel={this.closeCarousel.bind(this)}
            previousSlide={this.previousSlide.bind(this)}
            nextSlide={this.nextSlide.bind(this)}
            closeSymbol="&#x2715;" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
