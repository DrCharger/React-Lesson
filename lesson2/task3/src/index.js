import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const renderSeconds = time => {
  const rootElement = document.querySelector('#root');

  const seconds = new Date(time).getSeconds();

  const color = seconds % 2 === 0 ? '#fff' : '#000';
  const backgroundColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color,
    backgroundColor,
  };
  const elem = (
    <div className="seconds" style={styles}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(elem, rootElement);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000);
