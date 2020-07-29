import React, { Component } from 'react';
import User from '../User/User'

class Post extends Component {
  render() {
    return (
      <div className="post">
        <User 
        src="https://www.khalakuzzaman.com/assets/images/profile.jpg" 
        alt="man" 
        name="scott" 
        min/
        >
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </div>
      </div>
    );
  }
}

export default Post;
