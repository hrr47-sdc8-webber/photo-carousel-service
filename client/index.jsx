import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
        this.setState({ photoArray: res });
      },
    };
    $.ajax(options);
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
