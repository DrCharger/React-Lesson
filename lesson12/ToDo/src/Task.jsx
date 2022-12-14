import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ id, text, done, onChange, onDelete }) => {
  if (text === '') {
    return null;
  }
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  text: 'Plant a tree',
  done: false,
};

export default Task;
