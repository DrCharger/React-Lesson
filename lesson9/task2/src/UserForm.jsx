import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    occupation: '',
    student: '',
    about: '',
  };

  handleChange = event => {
    const { name, value, checked, type } = event.target;

    const valid = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: valid,
    });
  };
  render() {
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          className="form-input"
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div className="form-control">
        <label className="form-label" htmlFor="student">
          Student
        </label>
        <input
          value={this.state.student}
          onChange={this.handleChange}
          className="form-input"
          type="checkbox"
          id="student"
          name="student"
        />
      </div>
      <div className="form-control">
        <label className="form-label" id="occupation" htmlFor="occupation">
          Occupation
        </label>
        <select
          value={this.state.occupation}
          onChange={this.handleChange}
          name="occupation"
          className="form-input"
        >
          <option value="london">London</option>
          <option value="new-york">New York</option>
          <option value="sidney">Sidney</option>
          <option value="berlin">Berlin</option>
        </select>
      </div>
      <div className="form-control">
        <label className="form-label" id="about" htmlFor="about">
          About
        </label>
        <textarea
          value={this.state.about}
          onChange={this.handleChange}
          name="about"
          className="form-input"
        />
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>;
  }
}

export default UserForm;
