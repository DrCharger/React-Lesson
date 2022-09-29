import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: '',
      value: props.users.length,
    };
  }
  handleChange = event => {
    this.a = this.setFilter(event.target.value).length;
    this.setState({
      filtered: event.target.value,
      value: this.a,
    });
  };
  setFilter = as =>
    this.props.users.filter(
      user =>
        user.name.toLowerCase().indexOf(as.toLowerCase()) > -1 || ('' + user.age).indexOf(as) > -1,
    );

  render() {
    const arrN = this.setFilter(this.state.filtered);
    return (
      <div>
        <div className="filter">
          <Filter
            filterText={this.state.filtered}
            count={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <ul className="users">
          {arrN.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
