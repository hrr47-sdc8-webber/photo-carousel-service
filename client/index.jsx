import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import GridEntry from './components/gridEntry.jsx';
import Carousel from './components/carousel.jsx';

const Grid = styled.div`
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
      startingPhoto: 0,
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
      },
    };
    $.ajax(options);
  }

  openCarousel(photoNumber) {
    console.log(photoNumber);
    this.setState({
      startingPhoto: photoNumber - 1,
      displayCarousel: true,
    });
  }

  // determineGridLayout(photoCount) {
  //   const gridLayout = {};
  //   gridLayout.columnCount = Math.ceil((2 / 3) * photoCount);
  //   gridLayout.remainder = photoCount % 3;
  //   const Grid = styled.div`
  //    display: grid;
  //    grid-template-columns: repeat(auto-fit, minmax(250, 1fr) );
  //    grid-template-rows: minmax(30px, 90px) minmax(30px, 90px);
  //    grid-auto-flow: column;
  //   `;
  // }

  componentDidMount() {
    this.retrievePhotos(window.location.pathname.split('/')[1]);
  }

  render() {
    return (
      <div>
        <div className='grid'>
          <Grid>
            {this.state.photoArray.map((photo, i) => <GridEntry
              key={i} photo={photo} openCarousel={this.openCarousel.bind(this)}
            />)}
          </Grid>
        </div>
        <div>
          <Carousel photoArray={this.state.photoArray}
            displayCarousel={this.state.displayCarousel}
            startingPhoto={this.state.startingPhoto}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
