import React from 'react';

class ColorPicker extends React.Component {
  picker = color => {
    document.querySelector('.picker__title').textContent = color;
  };
  reset = () => {
    document.querySelector('.picker__title').textContent = '';
  };
  render() {
    return (
      <div>
        <div className="picker__title"></div>
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
