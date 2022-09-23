import React from 'react';

class ColorPicker extends React.Component {
  picker(text) {
    document.querySelector('.picker__title').textContent = text;
  }
  reset = () => {
    document.querySelector('.picker__title').textContent = ' ';
  };
  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            onMouseEnter={() => this.picker('Coral')}
            onMouseLeave={this.reset}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.picker('Aqua')}
            onMouseLeave={this.reset}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.picker('Bisque')}
            onMouseLeave={this.reset}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
