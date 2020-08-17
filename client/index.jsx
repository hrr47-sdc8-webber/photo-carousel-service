import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import GridEntry from './components/gridEntry.jsx';
import Carousel from './components/carousel.jsx';
import GridModal from './components/grid.jsx';

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

const OpenButton = styled.span`
z-index: 1;
top: 12vw;
right: 5%;
position: absolute;
text-align: center;
padding: 10px 3px 10px 3px;
width: 100px;
background-color: rgba(0,0,0,0.5);
cursor: pointer;
color: white;
&:hover{
  background-color: rgba(0,0,0,0.7)
}
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArray: [],
      displayCarousel: false,
      displayGridModal: false,
      gridLayout: {},
      currentPhoto: 0,
      name: '',
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
        console.log(res.responseJSON);
        this.setState({
          photoArray: res.responseJSON.photoArray,
          name: res.responseJSON.name.toUpperCase(),
        });
      },
    };
    $.ajax(options);
  }

  openCarousel(photoNumber) {
    this.setState({
      currentPhoto: photoNumber - 1,
      displayCarousel: true,
      displayGridModal: false,
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

  handleKeyPress(e) {
    if (e.key === 'ArrowLeft') {
      this.previousSlide();
    } else if (e.key === 'ArrowRight') {
      this.nextSlide();
    } else if (e.key === 'Escape') {
      this.closeCarousel();
    }
  }

  openGridModal() {
    this.setState({
      displayCarousel: false,
      displayGridModal: true,
    });
  }

  closeGridModal() {
    this.setState({
      displayGridModal: false,
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
          <GridModal photoArray={this.state.photoArray}
            openCarousel={this.openCarousel.bind(this)}
            closeGridModal={this.closeGridModal.bind(this)}
            displayGridModal={this.state.displayGridModal}
            closeSymbol="&#x2715;"
            name={this.state.name} />

          <Carousel photoArray={this.state.photoArray}
            displayCarousel={this.state.displayCarousel}
            currentPhoto={this.state.currentPhoto}
            openGridModal={this.openGridModal.bind(this)}
            closeCarousel={this.closeCarousel.bind(this)}
            previousSlide={this.previousSlide.bind(this)}
            nextSlide={this.nextSlide.bind(this)}
            handleKeyPress={this.handleKeyPress.bind(this)}
            gridIcon="&#9633;"
            closeSymbol="&#x2715;"
            name={this.state.name} />
        </div>
        <OpenButton
          onClick={this.openGridModal.bind(this)}>
          {this.state.photoArray.length} Photos + </OpenButton>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
