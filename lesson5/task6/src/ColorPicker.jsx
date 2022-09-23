import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }
  picker = text => {
    this.setState({
      color: text,
    });
  };
  reset = () => {
    this.setState({
      color: '',
    });
  };
  render() {
    return (
      <div>
        <div className="picker__title">{`${this.state.color}`}</div>
        <div>
          <button
            onMouseEnter={() => this.picker('Coral')}
            onMouseOut={this.reset}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={() => this.picker('Aqua')}
            onMouseOut={this.reset}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={() => this.picker('Bisque')}
            onMouseOut={this.reset}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
