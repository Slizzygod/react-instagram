import React, { Component } from "react";
import InstaService from "../../services/InstaService";
import User from "../User/User";
import Error from "../Error/Error";

class Users extends Component {
  InstaService = new InstaService();
  state = {
    users: [],
    error: false,
  };

  componentWillMount() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError);
  }

  onUsersLoaded = (users) => {
    this.setState({
      users,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      return <User src={item.photo} alt="man" name={item.name} min />;
    });
  }

  render() {
    const items = this.renderItems(this.state.users);

    if (this.state.error) return <Error />;

    return (
      <div className="right">
        <User
          src="https://www.khalakuzzaman.com/assets/images/profile.jpg"
          alt="man"
          name="scott"
        />
        <div className="users__block">{items}</div>
      </div>
    );
  }
}

export default Users;
