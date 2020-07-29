import React, { Component } from 'react'
import User from '../User/User';
import Palette from '../Palette/Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User 
        src="https://www.khalakuzzaman.com/assets/images/profile.jpg" 
        alt="man" 
        name="scott" 
      />
      <Palette />
    </div>
  );
}

export default Profile;