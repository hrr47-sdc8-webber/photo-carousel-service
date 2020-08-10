import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Carousel from './components/carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArray: [],
      displayCarousel: false,
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

  componentDidMount() {
    this.retrievePhotos(window.location.pathname.split('/')[1]);
  }

  render() {
    return (
      <div>
        <Carousel photoArray={this.state.photoArray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
