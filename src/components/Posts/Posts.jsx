import React, { Component } from 'react';
import InstaService from '../../services/InstaService';
import User from '../User/User';
import Error from '../Error/Error';

class Posts extends Component {
  InstaService = new InstaService;
  state = {
    posts: [],
    error: false
  }

  componentWillMount () {
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError)
  }

  onPostsLoaded =(posts) => {
    this.setState({
      posts,
      error: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return (
      arr.map((item) => {
        return(
          <div key={item.id} className="post">
            <User 
              src={item.photo} 
              alt={item.alt} 
              name={item.name} 
              min
            />
            <img src={item.src} alt={item.alt}></img>
            <div className="post__name">
              {item.name}
            </div>
            <div className="post__descr">
              {item.descr}
            </div>
          </div>
        );
      })
    );
  }
  

  render() {
    const items = this.renderItems(this.state.posts);

   if(this.state.error) return (<Error />);

    return (
      <div className="left">
        {items}
      </div>
    );
  }
}

export default Posts;
