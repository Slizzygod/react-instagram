import React, { Component } from 'react'
import InstaService from '../../services/InstaService';
import Error from '../Error/Error';

export default class Palette extends Component {

  InstaService = new InstaService;

  state = {
    error: false,
    photos: []
  }

  componentWillMount() {
    this.updatePhotos();
  }
  

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)
  }

  onError = () => {
    this.setState({
      error: true
    });
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      error: false,
      photos
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      return (
        <img src={item.src} alt={item.alt}></img>
      )
    })
  }

  render() {

    if(this.state.error) return(<Error />);
    const items = this.renderItems(this.state.photos);
    return (
      <div className="palette">
        {items}
      </div>
    )
  }
}
