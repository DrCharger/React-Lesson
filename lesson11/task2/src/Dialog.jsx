import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div class="dialog">
      <div class="dialog__heading">
        <h4 class="dialog__title">{title}</h4>
        <button class="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div class="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};
Dialog.defaultProps = {
  isOpen: false,
  title: '',
};
export default Dialog;
