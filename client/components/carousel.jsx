import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoArray: [],
      currentPhoto,
    };
  }